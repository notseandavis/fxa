import React, {
  useEffect,
  useContext,
  useMemo,
  useState,
  useCallback,
  Suspense,
} from 'react';
import { connect } from 'react-redux';
import { Localized, useLocalization } from '@fluent/react';
import classNames from 'classnames';

import { AppContext } from '../../lib/AppContext';
import { useMatchMedia, useNonce, usePaypalButtonSetup } from '../../lib/hooks';
import { getSelectedPlan } from '../../lib/plan';
import { State as ValidatorState } from '../../lib/validator';

import { LoadingOverlay } from '../../components/LoadingOverlay';
import { PlanErrorDialog } from '../../components/PlanErrorDialog';
import NewUserEmailForm, {
  checkAccountExists,
} from '../../components/NewUserEmailForm';
import Header from '../../components/Header';
import PaymentProcessing from '../../components/PaymentProcessing';
import SubscriptionTitle from '../../components/SubscriptionTitle';
import PlanDetails from '../../components/PlanDetails';
import TermsAndPrivacy from '../../components/TermsAndPrivacy';
import PaymentLegalBlurb from '../../components/PaymentLegalBlurb';

import { State } from '../../store/state';
import { sequences, SequenceFunctions } from '../../store/sequences';
import { selectors, SelectorReturns } from '../../store/selectors';
import { Customer, Profile } from '../../store/types';

import AcceptedCards from '../Product/AcceptedCards';

import './index.scss';
import PaymentForm, {
  StripePaymentSubmitResult,
  StripePaymentUpdateResult,
  StripeSubmitHandler,
  StripeUpdateHandler,
} from '../../components/PaymentForm';
import PaymentErrorView from '../../components/PaymentErrorView';
import SubscriptionSuccess from '../Product/SubscriptionSuccess';

import * as Amplitude from '../../lib/amplitude';
import {
  handlePasswordlessSubscription,
  PaymentError,
  RetryStatus,
  SubscriptionCreateStripeAPIs,
} from '../../lib/stripe';
import { GeneralError } from '../../lib/errors';
import { handlePasswordlessSignUp } from '../../lib/account';
import { handleNewsletterSignup } from '../../lib/newsletter';
import { apiFetchCustomer, apiFetchProfile } from '../../lib/apiClient';
import * as apiClient from '../../lib/apiClient';
import sentry from '../../lib/sentry';
import { ButtonBaseProps } from '../../components/PayPalButton';
import { AlertBar } from '../../components/AlertBar';
import {
  PaymentMethodHeader,
  PaymentMethodHeaderType,
} from '../../components/PaymentMethodHeader';
import CouponForm from '../../components/CouponForm';
import { CouponDetails } from 'fxa-shared/dto/auth/payments/coupon';
import { useParams } from 'react-router-dom';

const PaypalButton = React.lazy(() => import('../../components/PayPalButton'));

const NewsletterErrorAlertBar = () => {
  return (
    <AlertBar
      className="alert-newsletter-error"
      dataTestId="newsletter-signup-error-message"
      headerId="newsletter-error-alert-bar-header"
      localizedId="newsletter-signup-error"
    >
      You’re not signed up for product update emails. You can try again in your
      account settings.
    </AlertBar>
  );
};

export type CheckoutProps = {
  plans: SelectorReturns['plans'];
  plansByProductId: SelectorReturns['plansByProductId'];
  fetchCheckoutRouteResources: SequenceFunctions['fetchCheckoutRouteResources'];
  validatorInitialState?: ValidatorState;
  stripeOverride?: SubscriptionCreateStripeAPIs;
  paypalButtonBase?: React.FC<ButtonBaseProps>;
};

export const Checkout = ({
  plans,
  plansByProductId,
  fetchCheckoutRouteResources,
  validatorInitialState,
  stripeOverride,
  paypalButtonBase,
}: CheckoutProps) => {
  const { config, locationReload, queryParams, matchMediaDefault } =
    useContext(AppContext);
  const { productId } = useParams() as { productId: string };
  const { l10n } = useLocalization();
  const [submitNonce, refreshSubmitNonce] = useNonce();
  const [inProgress, setInProgress] = useState(false);
  const [retryStatus, setRetryStatus] = useState<RetryStatus>();
  const [subscriptionError, setSubscriptionError] = useState<
    PaymentError | GeneralError
  >();
  const [profile, setProfile] = useState<Profile>();
  const [customer, setCustomer] = useState<Customer>();
  const isMobile = useMatchMedia(
    '(max-width: 429px) and (max-height: 945px) and (orientation: portrait),(max-width: 945px) and (orientation: landscape) and (max-height: 429px)',
    matchMediaDefault
  );
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  const [checkboxSet, setCheckboxSet] = useState(false);
  const [validEmail, setValidEmail] = useState<string>('');
  const [accountExists, setAccountExists] = useState(false);
  const [invalidEmailDomain, setInvalidEmailDomain] = useState(false);
  const [emailsMatch, setEmailsMatch] = useState(false);
  const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);
  const [subscribeToNewsletter, toggleSubscribeToNewsletter] = useState(false);
  const [newsletterSignupError, setNewsletterSignupError] = useState(false);

  const [coupon, setCoupon] = useState<CouponDetails>();

  // Fetch plans on initial render or change in product ID
  useEffect(() => {
    fetchCheckoutRouteResources();
  }, [fetchCheckoutRouteResources]);

  usePaypalButtonSetup(config, setPaypalScriptLoaded, paypalButtonBase);

  const signInQueryParams = { ...queryParams, signin: 'yes' };
  const signInQueryParamString = Object.entries(signInQueryParams)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  const planId = queryParams.plan;
  const signInURL = `${config.servers.content.url}/subscriptions/products/${productId}?${signInQueryParamString}`;
  const selectedPlan = useMemo(
    () => getSelectedPlan(productId, planId, plansByProductId),
    [productId, planId, plansByProductId]
  );

  const onFormMounted = useCallback(
    () => Amplitude.createSubscriptionMounted(selectedPlan),
    [selectedPlan]
  );

  const onFormEngaged = useCallback(
    () => Amplitude.createSubscriptionEngaged(selectedPlan),
    [selectedPlan]
  );

  // clear any error rendered with `ErrorMessage` on form change
  const onChange = useCallback(() => {
    if (subscriptionError) {
      setSubscriptionError(undefined);
    }
  }, [subscriptionError, setSubscriptionError]);

  const onStripeSubmit: StripeSubmitHandler | StripeUpdateHandler = useCallback(
    async ({
      stripe: stripeFormParams,
      ...params
    }: StripePaymentSubmitResult | StripePaymentUpdateResult) => {
      setInProgress(true);
      try {
        await handlePasswordlessSubscription({
          ...params,
          ...apiClient,
          email: validEmail,
          clientId: config.servers.oauth.clientId,
          customer: null,
          stripe: stripeOverride || stripeFormParams,
          selectedPlan,
          retryStatus,
          onSuccess: fetchProfileAndCustomer,
          onFailure: setSubscriptionError,
          onRetry: () => {
            // for a passwordless subscription we retry from a clean state
            // every time.  new stub account, new customer, new invoice, etc.
            setRetryStatus(undefined);
            setSubscriptionError({ type: 'card_error', code: 'card_declined' });
          },
        });
        if (subscribeToNewsletter) {
          await handleNewsletterSignup();
        }
      } catch (error) {
        if (error.code === 'fxa_newsletter_signup_error') {
          setNewsletterSignupError(true);
        } else {
          // Some Stripe APIs like `createPaymentMethod` return an object with
          // an error property on error.
          const err = typeof error.error === 'string' ? error : error.error;
          setSubscriptionError(err);
        }
      }
      setInProgress(false);
      refreshSubmitNonce();
    },
    [
      refreshSubmitNonce,
      validEmail,
      config.servers.oauth.clientId,
      stripeOverride,
      selectedPlan,
      retryStatus,
      subscribeToNewsletter,
    ]
  );

  const postSubscriptionAttemptPaypalCallback = useCallback(async () => {
    await fetchProfileAndCustomer();
    if (subscribeToNewsletter) {
      try {
        await handleNewsletterSignup();
      } catch (error) {
        // If both fetchProfileAndCustomer and handleNewsletterSignup fail,
        // there would be an AlertBar on top of the PaymentErrorView screen.
        setNewsletterSignupError(true);
      }
    }
  }, [subscribeToNewsletter]);

  const beforePaypalCreateOrder = useCallback(async () => {
    await handlePasswordlessSignUp({
      email: validEmail,
      clientId: config.servers.oauth.clientId,
    });
  }, [config.servers.oauth.clientId, validEmail]);

  if (plans.loading) {
    return <LoadingOverlay isLoading={true} />;
  }

  if (!plans.result || plans.error !== null || !selectedPlan) {
    return <PlanErrorDialog locationReload={locationReload} plans={plans} />;
  }

  async function fetchProfileAndCustomer() {
    try {
      let [profile, customer] = await Promise.all([
        apiFetchProfile(),
        apiFetchCustomer(),
      ]);

      // This function is called when there's a successful subscription.
      // However, if the subscription was created with an initial inactive
      // status (e.g. 'incomplete') and then transitioned to an active status
      // after some action, there'd be a race between this function and the
      // subscription update between Stripe and the auth-server.
      //
      // One use case where this happens is when the customer uses a credit
      // card that requires 3D Secure authorization.  The subscription is
      // created but 'incomplete' while the payment is awaiting the customer's
      // authorization.
      //
      // Since we _expect_ a subscription, we conditionally retry the fetch as
      // a workaround to reduce the likelihood of the customer encountering an
      // error caused by the fetch being done ahead of the subscription update
      // on the back end.
      const maxRetries = 2;
      const shouldRetry = (result: Customer) =>
        result.subscriptions.length === 0;
      const retryCustomer = async (
        prevResult: Customer,
        retries: number
      ): Promise<Customer> => {
        if (retries-- === 0 || !shouldRetry(prevResult)) {
          return prevResult;
        }
        const retriedCustomer = await apiFetchCustomer();
        return retryCustomer(retriedCustomer, retries);
      };

      customer = await retryCustomer(customer, maxRetries);

      setProfile(profile);
      setCustomer(customer);
      // Our stub accounts have a uid, append it to all future metric
      // events
      Amplitude.addGlobalEventProperties({ uid: profile.uid });
    } catch (e) {
      sentry.captureException(e);
      setSubscriptionError({ code: 'fxa_fetch_profile_customer_error' });
    }
  }

  if (profile && customer) {
    return (
      <>
        {newsletterSignupError && <NewsletterErrorAlertBar />}
        <SubscriptionSuccess
          {...{
            plan: selectedPlan,
            customer,
            profile,
            isMobile,
            accountExists,
            coupon,
          }}
        />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="main-content">
        {newsletterSignupError && <NewsletterErrorAlertBar />}

        <PaymentErrorView
          error={subscriptionError}
          actionFn={() => {
            setSubscriptionError(undefined);
            setTransactionInProgress(false);
          }}
          className={classNames({
            hidden: !subscriptionError,
          })}
          plan={selectedPlan}
          showFxaLegalFooterLinks={true}
        />

        <PaymentProcessing
          provider="paypal"
          className={classNames({
            hidden: !transactionInProgress || subscriptionError,
          })}
        />

        <SubscriptionTitle
          screenType="create"
          className={classNames({
            hidden: transactionInProgress || subscriptionError,
          })}
        />

        <div
          className={classNames(
            'checkout-payment component-card border-t-0 pt-4 px-4 pb-14 row-start-2 row-end-3 rounded-t-none text-grey-600',
            {
              hidden: transactionInProgress || subscriptionError,
            }
          )}
          data-testid="subscription-create"
        >
          <Localized id="new-user-step-1">
            <h2 className="step-header">1. Create a Firefox account</h2>
          </Localized>

          <NewUserEmailForm
            setValidEmail={setValidEmail}
            signInURL={signInURL}
            setAccountExists={setAccountExists}
            setInvalidEmailDomain={setInvalidEmailDomain}
            checkAccountExists={checkAccountExists}
            setEmailsMatch={setEmailsMatch}
            getString={l10n.getString.bind(l10n)}
            selectedPlan={selectedPlan}
            onToggleNewsletterCheckbox={() =>
              toggleSubscribeToNewsletter(!subscribeToNewsletter)
            }
          />

          <hr />

          <PaymentMethodHeader
            plan={selectedPlan}
            onClick={() => setCheckboxSet(!checkboxSet)}
            type={PaymentMethodHeaderType.SecondStep}
          />

          <>
            {paypalScriptLoaded && (
              <>
                <div data-testid="pay-with-other">
                  <Suspense fallback={<div>Loading...</div>}>
                    <PaypalButton
                      beforeCreateOrder={beforePaypalCreateOrder}
                      customer={null}
                      disabled={
                        !checkboxSet ||
                        validEmail === '' ||
                        accountExists ||
                        invalidEmailDomain ||
                        !emailsMatch
                      }
                      idempotencyKey={submitNonce}
                      newPaypalAgreement={true}
                      selectedPlan={selectedPlan}
                      refreshSubmitNonce={refreshSubmitNonce}
                      postSubscriptionAttemptPaypalCallback={
                        postSubscriptionAttemptPaypalCallback
                      }
                      setSubscriptionError={setSubscriptionError}
                      setTransactionInProgress={setTransactionInProgress}
                      ButtonBase={paypalButtonBase}
                      promotionCode={coupon?.promotionCode}
                    />
                  </Suspense>
                </div>

                <>
                  <Localized id="pay-with-heading-card-or">
                    <p className="pay-with-heading">Or pay with card</p>
                  </Localized>
                  <AcceptedCards />
                </>
              </>
            )}

            {!paypalScriptLoaded && (
              <>
                <Localized id="pay-with-heading-card-only">
                  <p className="pay-with-heading">Pay with card</p>
                </Localized>

                <AcceptedCards />
              </>
            )}
          </>

          <div>
            <Localized id="new-user-card-title">
              <div className="label-title">Enter your card information</div>
            </Localized>

            <PaymentForm
              {...{
                submitNonce,
                onSubmit: onStripeSubmit,
                onChange,
                submitButtonL10nId: 'new-user-submit',
                submitButtonCopy: 'Subscribe Now',
                shouldAllowSubmit:
                  checkboxSet &&
                  validEmail !== '' &&
                  !accountExists &&
                  !invalidEmailDomain &&
                  emailsMatch,

                inProgress,
                validatorInitialState,
                confirm: false,
                submit: true,
                plan: selectedPlan,
                onMounted: onFormMounted,
                onEngaged: onFormEngaged,
                promotionCode: coupon?.promotionCode,
              }}
            />
          </div>

          <div className="payment-footer" data-testid="footer">
            <PaymentLegalBlurb provider={undefined} />

            <TermsAndPrivacy
              showFXALinks={!accountExists}
              plan={selectedPlan}
              contentServerURL={config.servers.content.url}
            />
          </div>
        </div>

        {transactionInProgress && isMobile ? null : (
          <div className="payment-panel">
            <PlanDetails
              {...{
                selectedPlan,
                isMobile,
                showExpandButton: isMobile,
                coupon,
              }}
            />

            <CouponForm
              {...{
                planId: selectedPlan.plan_id,
                readOnly: false,
                subscriptionInProgress: inProgress || transactionInProgress,
                coupon,
                setCoupon,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default connect(
  (state: State) => ({
    plans: selectors.plans(state),
    plansByProductId: selectors.plansByProductId(state),
  }),
  {
    fetchCheckoutRouteResources: sequences.fetchCheckoutRouteResources,
  }
)(Checkout);
