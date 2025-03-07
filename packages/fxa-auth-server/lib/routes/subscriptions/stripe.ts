/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { ServerRoute } from '@hapi/hapi';
import isA from 'joi';
import * as Sentry from '@sentry/node';
import { getAccountCustomerByUid } from 'fxa-shared/db/models/auth';
import {
  AbbrevPlan,
  SubscriptionEligibilityResult,
} from 'fxa-shared/subscriptions/types';
import * as invoiceDTO from 'fxa-shared/dto/auth/payments/invoice';
import * as couponDTO from 'fxa-shared/dto/auth/payments/coupon';
import { metadataFromPlan } from 'fxa-shared/subscriptions/metadata';
import {
  ACTIVE_SUBSCRIPTION_STATUSES,
  DeepPartial,
  filterCustomer,
  filterIntent,
  filterInvoice,
  filterSubscription,
  singlePlan,
} from 'fxa-shared/subscriptions/stripe';
import omitBy from 'lodash/omitBy';
import { Logger } from 'mozlog';
import { Stripe } from 'stripe';

import { ConfigType } from '../../../config';
import error from '../../error';
import { commaSeparatedListToArray } from 'fxa-shared/lib/utils';
import { StripeHelper } from '../../payments/stripe';
import {
  stripeInvoiceToFirstInvoicePreviewDTO,
  stripeInvoicesToSubsequentInvoicePreviewsDTO,
} from '../../payments/stripe-formatter';
import { AuthLogger, AuthRequest } from '../../types';
import { sendFinishSetupEmailForStubAccount } from '../subscriptions/account';
import validators from '../validators';
import { handleAuth } from './utils';
import { generateIdempotencyKey } from '../../payments/utils';
import { COUNTRIES_LONG_NAME_TO_SHORT_NAME_MAP } from '../../payments/stripe';
import { deleteAccountIfUnverified } from '../utils/account';
import SUBSCRIPTIONS_DOCS from '../../../docs/swagger/subscriptions-api';
import { ALL_RPS_CAPABILITIES_KEY } from 'fxa-shared/subscriptions/configuration/base';
import { CapabilityService } from '../../payments/capability';
import Container from 'typedi';

// List of countries for which we need to look up the province/state of the
// customer.
const addressLookupCountries = Object.values(
  COUNTRIES_LONG_NAME_TO_SHORT_NAME_MAP
);

const METRICS_CONTEXT_SCHEMA = require('../../metrics/context').schema;

/**
 * Delete any metadata keys prefixed by `capabilities:` and promotion codes
 * before sending response. We don't need to reveal those.
 * https://github.com/mozilla/fxa/issues/3273#issuecomment-552637420
 * https://github.com/mozilla/fxa/issues/12181
 */
export function sanitizePlans(plans: AbbrevPlan[]) {
  return plans.map((planIn) => {
    // Try not to mutate the original in case we cache plans in memory.
    const plan = { ...planIn };
    const isCapabilityKey = (value: string, key: string) =>
      key.startsWith('capabilities');
    const isPromotionCodes = (value: string, key: string) =>
      key.toLowerCase() === 'promotioncodes';
    const isOmittable = (value: string, key: string) =>
      isCapabilityKey(value, key) || isPromotionCodes(value, key);
    plan.plan_metadata = omitBy(plan.plan_metadata, isOmittable);
    plan.product_metadata = omitBy(plan.product_metadata, isOmittable);
    return plan;
  });
}

export class StripeHandler {
  subscriptionAccountReminders: any;
  capabilityService: CapabilityService;
  automaticTax: boolean;

  constructor(
    // FIXME: For some reason Logger methods were not being detected in
    //        inheriting classes thus this interface join.
    protected log: AuthLogger & Logger,
    protected db: any,
    protected config: ConfigType,
    protected customs: any,
    protected push: any,
    protected mailer: any,
    protected profile: any,
    protected stripeHelper: StripeHelper
  ) {
    this.subscriptionAccountReminders =
      require('../../subscription-account-reminders')(log, config);

    this.capabilityService = Container.get(CapabilityService);
    this.automaticTax = !!config.subscriptions.stripeAutomaticTax.enabled;
  }

  /**
   * Extracts a promotion code from the request, while verifying its
   * validity for this priceId and returns a promotionCode if valid, or
   * throws an invalidPromoCode error if not.
   */
  protected async extractPromotionCode(
    promotionCodeFromRequest: string,
    priceId: string
  ) {
    let promotionCode: Stripe.PromotionCode | undefined;

    if (promotionCodeFromRequest) {
      promotionCode = await this.stripeHelper.findValidPromoCode(
        promotionCodeFromRequest,
        priceId
      );
      if (!promotionCode) {
        throw error.invalidPromoCode(promotionCode);
      }
    }
    return promotionCode;
  }

  /**
   * Reload the customer data to reflect a change.
   */
  async customerChanged(request: AuthRequest, uid: string, email: string) {
    const [devices] = await Promise.all([
      request.app.devices,
      this.profile.deleteCache(uid),
    ]);
    await this.push.notifyProfileUpdated(uid, devices);
    this.log.notifyAttachedServices('profileDataChanged', request, {
      uid,
      email,
    });
  }

  /**
   * Retrieve the client capabilities
   */
  async getClients(request: AuthRequest) {
    this.log.begin('subscriptions.getClients', request);
    const capabilitiesByClientId: { [clientId: string]: string[] } = {};

    const plans = await this.stripeHelper.allAbbrevPlans();
    const planConfigs = await this.stripeHelper.allMergedPlanConfigs();

    const capabilitiesForAll: string[] = [];
    for (const plan of plans) {
      const metadata = metadataFromPlan(plan);
      const pConfig = planConfigs?.[plan.plan_id] || {};

      capabilitiesForAll.push(
        ...commaSeparatedListToArray(metadata.capabilities || ''),
        ...(pConfig.capabilities?.[ALL_RPS_CAPABILITIES_KEY] || [])
      );

      const capabilityKeys = Object.keys(metadata).filter((key) =>
        key.startsWith('capabilities:')
      );
      for (const key of capabilityKeys) {
        const clientId = key.split(':')[1];
        const capabilities = commaSeparatedListToArray((metadata as any)[key]);
        capabilitiesByClientId[clientId] = (
          capabilitiesByClientId[clientId] || []
        ).concat(capabilities);
      }
      if (pConfig.capabilities) {
        Object.keys(pConfig.capabilities)
          .filter((x) => x !== ALL_RPS_CAPABILITIES_KEY)
          .forEach(
            (clientId) =>
              (capabilitiesByClientId[clientId] = (
                capabilitiesByClientId[clientId] || []
              ).concat(pConfig.capabilities?.[clientId]))
          );
      }
    }

    return Object.entries(capabilitiesByClientId).map(
      ([clientId, capabilities]) => {
        // Merge dupes with Set
        const capabilitySet = new Set([...capabilitiesForAll, ...capabilities]);
        return {
          clientId,
          capabilities: [...capabilitySet],
        };
      }
    );
  }

  async deleteSubscription(request: AuthRequest) {
    this.log.begin('subscriptions.deleteSubscription', request);

    const { uid, email } = await handleAuth(this.db, request.auth, true);

    await this.customs.check(request, email, 'deleteSubscription');

    const subscriptionId = request.params.subscriptionId;

    await this.stripeHelper.cancelSubscriptionForCustomer(
      uid,
      email,
      subscriptionId
    );

    await this.customerChanged(request, uid, email);

    this.log.info('subscriptions.deleteSubscription.success', {
      uid,
      subscriptionId,
    });

    return { subscriptionId };
  }

  async reactivateSubscription(request: AuthRequest) {
    this.log.begin('subscriptions.reactivateSubscription', request);

    const { uid, email } = await handleAuth(this.db, request.auth, true);

    await this.customs.check(request, email, 'reactivateSubscription');

    const { subscriptionId } = request.payload as Record<string, string>;

    await this.stripeHelper.reactivateSubscriptionForCustomer(
      uid,
      email,
      subscriptionId
    );

    await this.customerChanged(request, uid, email);

    this.log.info('subscriptions.reactivateSubscription.success', {
      uid,
      subscriptionId,
    });

    return {};
  }

  async updateSubscription(request: AuthRequest) {
    this.log.begin('subscriptions.updateSubscription', request);

    const { uid, email } = await handleAuth(this.db, request.auth, true);

    await this.customs.check(request, email, 'updateSubscription');

    const { subscriptionId } = request.params;
    const { planId } = request.payload as Record<string, string>;

    const subscription = await this.stripeHelper.subscriptionForCustomer(
      uid,
      email,
      subscriptionId
    );
    if (!subscription) {
      throw error.unknownSubscription();
    }

    const plan = singlePlan(subscription);
    if (!plan) {
      throw error.internalValidationError(
        'updateSubscription',
        { subscription: subscription.id },
        'Subscriptions with multiple plans not supported.'
      );
    }

    const currentPlanId = plan.id;

    // Verify the plan is a valid update for this subscription.
    await this.stripeHelper.verifyPlanUpdateForSubscription(
      currentPlanId,
      planId
    );

    // Verify the new plan currency and customer currency are compatible.
    // Stripe does not allow customers to change currency after a currency is set, which
    // occurs on initial subscription. (https://stripe.com/docs/billing/customer#payment)
    const customer = await this.stripeHelper.fetchCustomer(uid);
    const planCurrency = (await this.stripeHelper.findAbbrevPlanById(planId))
      .currency;
    if (customer && customer.currency !== planCurrency) {
      throw error.currencyCurrencyMismatch(customer.currency, planCurrency);
    }

    // Update the plan
    await this.stripeHelper.changeSubscriptionPlan(subscription, planId);

    await this.customerChanged(request, uid, email);

    return { subscriptionId };
  }

  async listPlans(request: AuthRequest) {
    this.log.begin('subscriptions.listPlans', request);
    const plans = await this.stripeHelper.allAbbrevPlans();
    return sanitizePlans(plans);
  }

  async getProductName(request: AuthRequest) {
    this.log.begin('subscriptions.getProductName', request);
    const { productId } = request.query as Record<string, string>;
    const plans = await this.stripeHelper.allAbbrevPlans();
    const planForProduct = plans.find((plan) => plan.product_id === productId);
    if (!planForProduct) {
      throw error.unknownSubscriptionPlan();
    }
    this.log.info('subscriptions.getProductName', {
      productId,
    });
    return { product_name: planForProduct.product_name };
  }

  async listActive(request: AuthRequest) {
    this.log.begin('subscriptions.listActive', request);
    const { uid } = await handleAuth(this.db, request.auth, true);
    const customer = await this.stripeHelper.fetchCustomer(uid, [
      'subscriptions',
    ]);
    const activeSubscriptions = [];

    if (customer && customer.subscriptions) {
      for (const subscription of customer.subscriptions.data) {
        const plan = singlePlan(subscription);
        if (!plan) {
          throw error.internalValidationError(
            'listActive',
            { subscription: subscription.id },
            'Subscriptions with multiple plans not supported.'
          );
        }

        const productId = plan.product;
        const { id: subscriptionId, created, canceled_at } = subscription;
        if (ACTIVE_SUBSCRIPTION_STATUSES.includes(subscription.status)) {
          activeSubscriptions.push({
            uid,
            subscriptionId,
            productId,
            createdAt: created * 1000,
            cancelledAt: canceled_at ? canceled_at * 1000 : null,
          });
        }
      }
    }
    return activeSubscriptions;
  }

  /**
   * Create a customer.
   */
  async createCustomer(
    request: AuthRequest
  ): Promise<DeepPartial<Stripe.Customer>> {
    this.log.begin('subscriptions.createCustomer', request);
    const { uid, email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'createCustomer');

    let customer = await this.stripeHelper.fetchCustomer(uid);
    if (customer) {
      return filterCustomer(customer);
    }

    const { displayName } = request.payload as Record<string, string>;

    const ipAddress = this.automaticTax ? request.app.clientAddress : undefined;

    const idempotencyKey = generateIdempotencyKey([uid]);
    customer = await this.stripeHelper.createPlainCustomer(
      uid,
      email,
      displayName,
      idempotencyKey,
      ipAddress
    );
    return filterCustomer(customer);
  }

  /**
   * Retry an invoice by attaching a new payment method id for use.
   */
  async retryInvoice(request: AuthRequest) {
    this.log.begin('subscriptions.retryInvoice', request);
    const { uid, email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'retryInvoice');

    const { stripeCustomerId } = await getAccountCustomerByUid(uid);
    if (!stripeCustomerId) {
      throw error.unknownCustomer(uid);
    }

    const { invoiceId, paymentMethodId, idempotencyKey } =
      request.payload as Record<string, string>;
    const retryIdempotencyKey = `${idempotencyKey}-retryInvoice`;
    const invoice = await this.stripeHelper.retryInvoiceWithPaymentId(
      stripeCustomerId,
      invoiceId,
      paymentMethodId,
      retryIdempotencyKey
    );

    await this.customerChanged(request, uid, email);

    return filterInvoice(invoice);
  }

  /**
   * Preview an invoice for a new plan.
   */
  async previewInvoice(
    request: AuthRequest
  ): Promise<invoiceDTO.firstInvoicePreviewSchema> {
    this.log.begin('subscriptions.previewInvoice', request);
    await this.customs.checkIpOnly(request, 'previewInvoice');

    const { promotionCode, priceId } = request.payload as Record<
      string,
      string
    >;

    let customer;
    if (request.auth.credentials) {
      const { uid, email } = await handleAuth(this.db, request.auth, true);
      await this.customs.check(request, email, 'previewInvoice');
      try {
        customer = await this.stripeHelper.fetchCustomer(uid, ['tax']);
      } catch (e: any) {
        this.log.error('previewInvoice.fetchCustomer', { error: e, uid });
      }
    }

    const country = request.app.geo.location?.country || 'US';
    const ipAddress = customer?.tax?.ip_address || request.app.clientAddress;
    const isCustomerTaxed =
      !customer || customer.tax?.automatic_tax === 'supported';
    const automaticTax = this.automaticTax && isCustomerTaxed;

    const previewInvoice = await this.stripeHelper.previewInvoice({
      automaticTax,
      country,
      ipAddress,
      promotionCode,
      priceId,
    });

    return stripeInvoiceToFirstInvoicePreviewDTO(previewInvoice);
  }

  /**
   * Preview invoices for an array of subscriptionIds
   */
  async subsequentInvoicePreviews(
    request: AuthRequest
  ): Promise<invoiceDTO.subsequentInvoicePreviewsSchema> {
    this.log.begin('subscriptions.subsequentInvoicePreview', request);
    const automaticTax = this.automaticTax;
    const { uid, email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'subsequentInvoicePreviews');

    const customer = await this.stripeHelper.fetchCustomer(uid, [
      'subscriptions',
    ]);

    if (!customer || !customer.subscriptions?.data.length) {
      return [];
    }

    const subsequentInvoicePreviews = await Promise.all(
      customer.subscriptions.data
        .filter((sub) => !sub.canceled_at)
        .map((sub) => {
          return this.stripeHelper.previewInvoiceBySubscriptionId({
            automaticTax: automaticTax && sub.automatic_tax.enabled,
            subscriptionId: sub.id,
          });
        })
    );

    return stripeInvoicesToSubsequentInvoicePreviewsDTO(
      subsequentInvoicePreviews
    );
  }

  async retrieveCouponDetails(
    request: AuthRequest
  ): Promise<couponDTO.couponDetailsSchema> {
    this.log.begin('subscriptions.retrieveCouponDetails', request);
    await this.customs.checkIpOnly(request, 'retrieveCouponDetails');

    const { promotionCode, priceId } = request.payload as Record<
      string,
      string
    >;
    const country = request.app.geo.location?.country || 'US';
    const ipAddress = request.app.clientAddress;
    const automaticTax = this.automaticTax;

    const couponDetails = this.stripeHelper.retrieveCouponDetails({
      automaticTax,
      country,
      ipAddress,
      priceId,
      promotionCode,
    });

    return couponDetails;
  }

  /**
   * Create a subscription for a user.
   */
  async createSubscriptionWithPMI(request: AuthRequest): Promise<{
    sourceCountry: string | null;
    subscription: DeepPartial<Stripe.Subscription>;
  }> {
    this.log.begin('subscriptions.createSubscriptionWithPMI', request);
    const { uid, email, account } = await handleAuth(
      this.db,
      request.auth,
      true
    );
    await this.customs.check(request, email, 'createSubscriptionWithPMI');

    try {
      const customer = await this.stripeHelper.fetchCustomer(uid, ['tax']);
      if (!customer) {
        throw error.unknownCustomer(uid);
      }

      // Creating a subscription with automatic_tax enabled requires a customer with an address
      // that is in a recognized location with an active tax registration.
      const taxSubscription =
        this.automaticTax && customer.tax?.automatic_tax === 'supported';

      const {
        priceId,
        paymentMethodId,
        promotionCode: promotionCodeFromRequest,
        metricsContext,
      } = request.payload as Record<string, string>;

      // Make sure to clean up any subscriptions that may be hanging with no payment
      const existingSubscription =
        this.stripeHelper.findCustomerSubscriptionByPlanId(customer, priceId);
      if (existingSubscription?.status === 'incomplete') {
        await this.stripeHelper.cancelSubscription(existingSubscription.id);
      }

      // Validate that the user doesn't have conflicting subscriptions, for instance via IAP
      const eligibility = await this.capabilityService.getPlanEligibility(
        customer.metadata.userid,
        priceId
      );
      if (eligibility !== SubscriptionEligibilityResult.CREATE) {
        throw error.userAlreadySubscribedToProduct();
      }

      const promotionCode: Stripe.PromotionCode | undefined =
        await this.extractPromotionCode(promotionCodeFromRequest, priceId);

      let taxRateId: string | undefined;
      let paymentMethod: Stripe.PaymentMethod | undefined;

      // Skip the payment source check if there's no payment method id.
      if (paymentMethodId) {
        const planCurrency = (
          await this.stripeHelper.findAbbrevPlanById(priceId)
        ).currency;
        paymentMethod = await this.stripeHelper.getPaymentMethod(
          paymentMethodId
        );
        const paymentMethodCountry = paymentMethod.card?.country;
        if (
          !this.stripeHelper.currencyHelper.isCurrencyCompatibleWithCountry(
            planCurrency,
            paymentMethodCountry
          )
        ) {
          throw error.currencyCountryMismatch(
            planCurrency,
            paymentMethodCountry
          );
        }
        if (!this.automaticTax && paymentMethodCountry) {
          if (!this.stripeHelper.customerTaxId(customer)) {
            await this.stripeHelper.addTaxIdToCustomer(customer, planCurrency);
          }
          taxRateId = (
            await this.stripeHelper.taxRateByCountryCode(paymentMethodCountry)
          )?.id;
        }
      }

      const taxOptions = this.automaticTax
        ? { automaticTax: taxSubscription }
        : { taxRateId };

      const subscription: any =
        await this.stripeHelper.createSubscriptionWithPMI({
          customerId: customer.id,
          priceId,
          paymentMethodId,
          promotionCode: promotionCode,
          ...taxOptions,
        });

      if (this.automaticTax && !taxSubscription) {
        this.log.warn(
          'subscriptions.createSubscriptionWithPMI.automatic_tax_failed',
          {
            uid,
            automatic_tax: customer.tax?.automatic_tax,
          }
        );
      }

      const sourceCountry =
        this.stripeHelper.extractSourceCountryFromSubscription(subscription);

      if (
        !this.automaticTax &&
        sourceCountry &&
        addressLookupCountries.includes(sourceCountry)
      ) {
        if (paymentMethod?.billing_details?.address?.postal_code) {
          this.stripeHelper.setCustomerLocation({
            customerId: customer.id,
            postalCode: paymentMethod.billing_details.address.postal_code,
            country: sourceCountry,
          });
        } else if (paymentMethod) {
          // Only report this if we have a payment method.
          // Note: Payment method is already on the user if its a returning customer.
          Sentry.withScope((scope) => {
            scope.setContext('createSubscriptionWithPMI', {
              customerId: customer.id,
              subscriptionId: subscription.id,
              paymentMethodId: paymentMethod?.id,
            });
            Sentry.captureMessage(
              `Cannot find a postal code for customer.`,
              Sentry.Severity.Error
            );
          });
        }
      }

      await this.customerChanged(request, uid, email);

      this.log.info('subscriptions.createSubscriptionWithPMI.success', {
        uid,
        subscriptionId: subscription.id,
      });

      await sendFinishSetupEmailForStubAccount({
        uid,
        account,
        subscription,
        stripeHelper: this.stripeHelper,
        mailer: this.mailer,
        subscriptionAccountReminders: this.subscriptionAccountReminders,
        metricsContext,
      });

      return {
        sourceCountry,
        subscription: filterSubscription(subscription),
      };
    } catch (err) {
      try {
        if (account.verifierSetAt <= 0) {
          await deleteAccountIfUnverified(
            this.db,
            this.stripeHelper,
            this.log,
            request,
            email
          );
        }
      } catch (deleteAccountError) {
        if (
          deleteAccountError.errno !== error.ERRNO.ACCOUNT_EXISTS &&
          deleteAccountError.errno !==
            error.ERRNO.VERIFIED_SECONDARY_EMAIL_EXISTS
        ) {
          throw deleteAccountError;
        }
      }
      throw err;
    }
  }

  /**
   * Create a new SetupIntent that will be attached to the current customer
   * after it succeeds.
   */
  async createSetupIntent(request: AuthRequest) {
    this.log.begin('subscriptions.createSetupIntent', request);
    const { uid, email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'createSetupIntent');

    const { stripeCustomerId } = await getAccountCustomerByUid(uid);
    if (!stripeCustomerId) {
      throw error.unknownCustomer(uid);
    }
    const setupIntent = await this.stripeHelper.createSetupIntent(
      stripeCustomerId
    );
    return filterIntent(setupIntent);
  }

  /**
   * Updates what payment method is used by default on new invoices for the
   * customer.
   */
  async updateDefaultPaymentMethod(request: AuthRequest) {
    this.log.begin('subscriptions.updateDefaultPaymentMethod', request);
    const { uid, email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'updateDefaultPaymentMethod');

    let customer = await this.stripeHelper.fetchCustomer(uid);
    if (!customer) {
      throw error.unknownCustomer(uid);
    }

    const { paymentMethodId } = request.payload as Record<string, string>;

    const paymentMethod = await this.stripeHelper.getPaymentMethod(
      paymentMethodId
    );
    const paymentMethodCountry = paymentMethod.card?.country;
    if (
      !this.stripeHelper.currencyHelper.isCurrencyCompatibleWithCountry(
        customer.currency,
        paymentMethodCountry
      )
    ) {
      throw error.currencyCountryMismatch(
        customer.currency,
        paymentMethodCountry
      );
    }

    customer = await this.stripeHelper.updateDefaultPaymentMethod(
      customer.id,
      paymentMethodId
    );

    if (
      paymentMethodCountry &&
      addressLookupCountries.includes(paymentMethodCountry)
    ) {
      if (paymentMethod?.billing_details?.address?.postal_code) {
        this.stripeHelper.setCustomerLocation({
          customerId: customer.id,
          postalCode: paymentMethod.billing_details.address.postal_code,
          country: paymentMethodCountry,
        });
      } else {
        Sentry.withScope((scope) => {
          scope.setContext('updateDefaultPaymentMethod', {
            customerId: customer!.id,
            paymentMethodId: paymentMethod?.id,
          });
          Sentry.captureMessage(
            `Cannot find a postal code or country for customer.`,
            Sentry.Severity.Error
          );
        });
      }
    }

    await this.stripeHelper.removeSources(customer.id);
    return filterCustomer(customer);
  }

  /**
   * Detach a payment method from a customer _without_ any subscriptions.
   * This prevents a potentially problematic card for being used for the
   * customer's _first_ subscription.
   */
  async detachFailedPaymentMethod(request: AuthRequest) {
    this.log.begin('subscriptions.detachFailedPaymentMethod', request);
    const { uid, email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'detachFailedPaymentMethod');

    const customer = await this.stripeHelper.fetchCustomer(uid, [
      'subscriptions',
    ]);
    if (!customer) {
      throw error.unknownCustomer(uid);
    }

    const { paymentMethodId } = request.payload as Record<string, string>;

    // We are handling a very specific scenario here, one in which the customer
    // has not been ever able to successfully subscribe with the attempted
    // payment method.
    if (
      customer.subscriptions?.data.length &&
      customer.subscriptions.data.every((s) => s.status === 'incomplete')
    ) {
      return await this.stripeHelper.detachPaymentMethod(paymentMethodId);
    }

    // Do nothing.  There's no course correction action to take.
    return { id: paymentMethodId };
  }

  /**
   * Get a list of subscriptions for support agents
   */
  async getSubscriptionsForSupport(request: AuthRequest) {
    this.log.begin('subscriptions.getSubscriptionsForSupport', request);
    const { uid } = request.query as Record<string, string>;

    // We know that a user has to be a customer to create a support ticket
    const customer = await this.stripeHelper.fetchCustomer(uid, [
      'subscriptions',
    ]);
    if (!customer || !customer.subscriptions) {
      throw error.internalValidationError(
        'getSubscriptionsForSupport',
        {
          customerId: customer?.id,
          uid,
        },
        'No customer object or no subscriptions object present for customer.'
      );
    }
    const response = await this.stripeHelper.formatSubscriptionsForSupport(
      customer.subscriptions
    );

    return response;
  }
}

export const stripeRoutes = (
  log: AuthLogger,
  db: any,
  config: ConfigType,
  customs: any,
  push: any,
  mailer: any,
  profile: any,
  stripeHelper: StripeHelper
): ServerRoute[] => {
  const stripeHandler = new StripeHandler(
    log,
    db,
    config,
    customs,
    push,
    mailer,
    profile,
    stripeHelper
  );

  // FIXME: All of these need to be wrapped in Stripe error handling
  // FIXME: Many of these stripe calls need retries with careful thought about
  //        overall request deadline. Stripe retries must include a idempotency_key.
  return [
    {
      method: 'GET',
      path: '/oauth/subscriptions/clients',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_CLIENTS_GET,
        auth: {
          payload: false,
          strategy: 'subscriptionsSecret',
        },
        response: {
          schema: isA.array().items(
            isA.object().keys({
              clientId: isA.string(),
              capabilities: isA.array().items(isA.string()),
            })
          ) as any,
        },
      },
      handler: (request: AuthRequest) => stripeHandler.getClients(request),
    },
    {
      method: 'GET',
      path: '/oauth/subscriptions/plans',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_PLANS_GET,
        response: {
          schema: isA
            .array()
            .items(
              validators.subscriptionsPlanWithProductConfigValidator,
              validators.subscriptionsPlanWithMetaDataValidator
            ) as any,
        },
      },
      handler: (request: AuthRequest) => stripeHandler.listPlans(request),
    },
    {
      method: 'GET',
      path: '/oauth/subscriptions/active',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_ACTIVE_GET,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: isA
            .array()
            .items(validators.activeSubscriptionValidator) as any,
        },
      },
      handler: (request: AuthRequest) => stripeHandler.listActive(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/customer',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_CUSTOMER_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: validators.subscriptionsStripeCustomerValidator as any,
        },
        validate: {
          payload: {
            displayName: isA.string().optional(),
          },
        },
      },
      handler: (request: AuthRequest) => stripeHandler.createCustomer(request),
    },
    {
      method: 'POST',
      // Avoid conflict with existing, this can be updated to remove `/new` at the
      // same time the old routes are removed when the client is updated.
      path: '/oauth/subscriptions/active/new',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_ACTIVE_NEW_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: isA.object().keys({
            subscription: validators.subscriptionsStripeSubscriptionValidator,
            sourceCountry: validators.subscriptionPaymentCountryCode.required(),
          }) as any,
        },
        validate: {
          payload: {
            priceId: isA.string().required(),
            paymentMethodId: validators.stripePaymentMethodId.optional(),
            promotionCode: isA.string().optional(),
            metricsContext: METRICS_CONTEXT_SCHEMA,
          },
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.createSubscriptionWithPMI(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/invoice/retry',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_INVOICE_RETRY_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: validators.subscriptionsStripeInvoiceValidator as any,
        },
        validate: {
          payload: {
            invoiceId: isA.string().required(),
            paymentMethodId: validators.stripePaymentMethodId.required(),
            idempotencyKey: isA.string().required(),
          },
        },
      },
      handler: (request: AuthRequest) => stripeHandler.retryInvoice(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/invoice/preview',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_INVOICE_PREVIEW_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
          mode: 'try',
        },
        response: {
          schema: invoiceDTO.firstInvoicePreviewSchema as any,
        },
        validate: {
          payload: {
            priceId: validators.subscriptionsPlanId.required(),
            promotionCode: isA.string().optional(),
          },
        },
      },
      handler: (request: AuthRequest) => stripeHandler.previewInvoice(request),
    },
    {
      method: 'GET',
      path: '/oauth/subscriptions/invoice/preview-subsequent',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_INVOICE_PREVIEW_SUBSEQUENT_GET,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: invoiceDTO.subsequentInvoicePreviewsSchema as any,
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.subsequentInvoicePreviews(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/coupon',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_COUPON_POST,
        auth: false,
        response: {
          schema: couponDTO.couponDetailsSchema as any,
        },
        validate: {
          payload: {
            priceId: validators.subscriptionsPlanId.required(),
            promotionCode: isA.string().required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.retrieveCouponDetails(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/setupintent/create',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_SETUPINTENT_CREATE_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: validators.subscriptionsStripeIntentValidator as any,
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.createSetupIntent(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/paymentmethod/default',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_PAYMENTMETHOD_DEFAULT_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: validators.subscriptionsStripeCustomerValidator as any,
        },
        validate: {
          payload: {
            paymentMethodId: validators.stripePaymentMethodId.required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.updateDefaultPaymentMethod(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/paymentmethod/failed/detach',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_PAYMENTMETHOD_FAILED_DETACH_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: isA
            .object({
              id: validators.stripePaymentMethodId.required(),
            })
            .unknown(true) as any,
        },
        validate: {
          payload: {
            paymentMethodId: validators.stripePaymentMethodId.required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.detachFailedPaymentMethod(request),
    },
    {
      method: 'GET',
      path: '/oauth/subscriptions/productname',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_PRODUCTNAME_GET,
        response: {
          schema: isA.object({
            product_name: isA.string().required(),
          }) as any,
        },
        validate: {
          query: {
            productId: isA.string().required(),
          },
        },
      },
      handler: (request: AuthRequest) => stripeHandler.getProductName(request),
    },
    {
      method: 'PUT',
      path: '/oauth/subscriptions/active/{subscriptionId}',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_ACTIVE_SUBSCRIPTIONID_PUT,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        validate: {
          params: {
            subscriptionId: validators.subscriptionsSubscriptionId.required(),
          },
          payload: {
            planId: validators.subscriptionsPlanId.required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.updateSubscription(request),
    },
    {
      method: 'DELETE',
      path: '/oauth/subscriptions/active/{subscriptionId}',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_ACTIVE_SUBSCRIPTIONID_DELETE,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        validate: {
          params: {
            subscriptionId: validators.subscriptionsSubscriptionId.required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.deleteSubscription(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/reactivate',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_REACTIVATE_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        validate: {
          payload: {
            subscriptionId: validators.subscriptionsSubscriptionId.required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        stripeHandler.reactivateSubscription(request),
    },
  ];
};
