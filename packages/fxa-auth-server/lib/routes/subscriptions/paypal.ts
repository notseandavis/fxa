/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { ServerRoute } from '@hapi/hapi';
import isA from 'joi';
import {
  createPayPalBA,
  getAccountCustomerByUid,
} from 'fxa-shared/db/models/auth';
import {
  filterCustomer,
  filterSubscription,
  getMinimumAmount,
  hasPaypalSubscription,
} from 'fxa-shared/subscriptions/stripe';
import { Stripe } from 'stripe';
import Container from 'typedi';

import { ConfigType } from '../../../config';
import error from '../../error';
import { PayPalHelper } from '../../payments/paypal/helper';
import STATES_LONG_NAME_TO_SHORT_NAME_MAP from '../../payments/states-long-name-to-short-name-map.json';
import {
  COUNTRIES_LONG_NAME_TO_SHORT_NAME_MAP,
  StripeHelper,
} from '../../payments/stripe';
import { reportSentryError } from '../../sentry';
import { msToSec } from '../../time';
import { AuthLogger, AuthRequest } from '../../types';
import { sendFinishSetupEmailForStubAccount } from '../subscriptions/account';
import validators from '../validators';
import { StripeWebhookHandler } from './stripe-webhook';
import { handleAuth } from './utils';
import { deleteAccountIfUnverified } from '../utils/account';
import SUBSCRIPTIONS_DOCS from '../../../docs/swagger/subscriptions-api';

const METRICS_CONTEXT_SCHEMA = require('../../metrics/context').schema;

const stateNames = STATES_LONG_NAME_TO_SHORT_NAME_MAP as {
  [key: string]: { [key: string]: string };
};

export class PayPalHandler extends StripeWebhookHandler {
  protected paypalHelper: PayPalHelper;
  subscriptionAccountReminders: any;
  automaticTax: boolean;

  constructor(
    log: AuthLogger,
    db: any,
    config: ConfigType,
    customs: any,
    push: any,
    mailer: any,
    profile: any,
    stripeHelper: StripeHelper
  ) {
    super(log, db, config, customs, push, mailer, profile, stripeHelper);
    this.paypalHelper = Container.get(PayPalHelper);
    this.subscriptionAccountReminders =
      require('../../subscription-account-reminders')(log, config);
    this.automaticTax = !!config.subscriptions.stripeAutomaticTax.enabled;
  }

  /**
   * Get PayPal Checkout Token.
   */
  async getCheckoutToken(request: AuthRequest) {
    this.log.begin('subscriptions.getCheckoutToken', request);
    const { email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'getCheckoutToken');

    const { currencyCode } = request.payload as Record<string, string>;
    const token = await this.paypalHelper.getCheckoutToken({ currencyCode });
    const responseObject = { token };
    this.log.info('subscriptions.getCheckoutToken.success', responseObject);
    return responseObject;
  }

  /**
   * Create a subscription for a user with PayPal as the payment provider.
   * This branches into two scenarios:
   *  - a new customer (an FxA user with no active subscriptions) that is
   *    subscribing to their first product
   *  - a returning customer with PayPal paid subscriptions
   *
   * A PayPal payment token is required for the new customer.
   */
  async createSubscriptionWithPaypal(request: AuthRequest) {
    this.log.begin('subscriptions.createSubscriptionWithPaypal', request);
    const { uid, email, account } = await handleAuth(
      this.db,
      request.auth,
      true
    );

    try {
      await this.customs.check(request, email, 'createSubscriptionWithPaypal');

      const customer = await this.stripeHelper.fetchCustomer(uid, [
        'subscriptions',
        'tax',
      ]);

      if (!customer) {
        throw error.unknownCustomer(uid);
      }

      // Creating a subscription with automatic_tax enabled requires a customer with an address
      // that is in a recognized location with an active tax registration.
      const taxSubscription =
        this.automaticTax && customer.tax?.automatic_tax === 'supported';

      const isPaypalCustomer = hasPaypalSubscription(customer);
      const { token, metricsContext } = request.payload as Record<
        string,
        string
      >;
      const currentBillingAgreement =
        this.stripeHelper.getCustomerPaypalAgreement(customer);

      // In theory the frontend should handle this state upon the customer
      // response.  The customer should fix their payment method before we can
      // allow any additional subscriptions.
      if (isPaypalCustomer && !currentBillingAgreement) {
        throw error.missingPaypalBillingAgreement(customer.id);
      }
      if (!isPaypalCustomer && !token) {
        throw error.missingPaypalPaymentToken(customer.id);
      }
      if (isPaypalCustomer && token) {
        // This seems unfriendly to users since we could just proceed with the BA
        // on record.  But it's a bug with the frontend if it happens and we
        // shouldn't allow it.
        throw error.billingAgreementExists(customer.id);
      }

      const { sourceCountry, subscription } = token
        ? await this._createPaypalBillingAgreementAndSubscription({
            request,
            uid,
            customer,
            taxSubscription,
          })
        : await this._createPaypalSubscription({
            request,
            customer,
            taxSubscription,
          });

      await this.customerChanged(request, uid, email);

      this.log.info('subscriptions.createSubscriptionWithPaypal.success', {
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

  async _createPaypalBillingAgreementAndSubscription({
    request,
    uid,
    customer,
    taxSubscription,
  }: {
    request: AuthRequest;
    uid: string;
    customer: Stripe.Customer;
    taxSubscription: boolean;
  }) {
    const {
      priceId,
      promotionCode: promotionCodeFromRequest,
      token,
      idempotencyKey,
    } = request.payload as Record<string, string>;
    const promotionCode: Stripe.PromotionCode | undefined =
      await this.extractPromotionCode(promotionCodeFromRequest, priceId);
    const currency = (await this.stripeHelper.findAbbrevPlanById(priceId))
      .currency;
    const { agreementId, agreementDetails } =
      await this.createAndVerifyBillingAgreement({
        uid,
        token,
        currency,
        location: request.app.geo.location,
        taxSubscription,
      });

    // TODO: Remove the following in FXA-6091
    let taxRateId: string | undefined;
    if (!this.automaticTax && agreementDetails.countryCode) {
      if (!this.stripeHelper.customerTaxId(customer)) {
        await this.stripeHelper.addTaxIdToCustomer(customer, currency);
      }
      const taxRate = await this.stripeHelper.taxRateByCountryCode(
        agreementDetails.countryCode
      );
      taxRateId = taxRate?.id;
    }

    const taxOptions = this.automaticTax
      ? { automaticTax: taxSubscription }
      : { taxRateId };

    let subscription;
    [subscription, customer] = await Promise.all([
      this.stripeHelper.createSubscriptionWithPaypal({
        customer,
        priceId,
        promotionCode,
        subIdempotencyKey: idempotencyKey,
        ...taxOptions,
      }),
      this.stripeHelper.updateCustomerPaypalAgreement(customer, agreementId),
    ]);

    if (this.automaticTax && !taxSubscription) {
      this.log.warn(
        'subscriptions.createSubscriptionWithPMI.automatic_tax_failed',
        {
          uid,
          automatic_tax: customer.tax?.automatic_tax,
        }
      );
    }

    const latestInvoice = subscription.latest_invoice as Stripe.Invoice;
    if (latestInvoice.amount_due < getMinimumAmount(latestInvoice.currency)) {
      await this.paypalHelper.processZeroInvoice(latestInvoice);
    } else {
      try {
        await this.paypalHelper.processInvoice({
          customer,
          invoice: latestInvoice,
          ipaddress: request.app.clientAddress,
        });
      } catch (err) {
        // We must delete the subscription and billing agreement if the transaction
        // errors since we are unable to have 'incomplete' subscriptions for manual
        // collection subscriptions.
        await Promise.all([
          this.stripeHelper.cancelSubscription(subscription.id),
          this.paypalHelper.cancelBillingAgreement(agreementId),
        ]);
        throw err;
      }
    }

    return {
      sourceCountry: agreementDetails.countryCode,
      subscription: subscription,
    };
  }

  async _createPaypalSubscription({
    request,
    customer,
    taxSubscription,
  }: {
    request: AuthRequest;
    customer: Stripe.Customer;
    taxSubscription: boolean;
  }) {
    const {
      priceId,
      promotionCode: promotionCodeFromRequest,
      idempotencyKey,
    } = request.payload as Record<string, string>;
    const promotionCode: Stripe.PromotionCode | undefined =
      await this.extractPromotionCode(promotionCodeFromRequest, priceId);

    const currency = (await this.stripeHelper.findAbbrevPlanById(priceId))
      .currency;

    // TODO: Remove the following in FXA-6091
    let taxRateId: string | undefined;
    if (!this.automaticTax && customer.address?.country) {
      if (!this.stripeHelper.customerTaxId(customer)) {
        await this.stripeHelper.addTaxIdToCustomer(customer, currency);
      }
      const taxRate = await this.stripeHelper.taxRateByCountryCode(
        customer.address.country
      );
      taxRateId = taxRate?.id;
    }

    const taxOptions = this.automaticTax
      ? { automaticTax: taxSubscription }
      : { taxRateId };

    const subscription = await this.stripeHelper.createSubscriptionWithPaypal({
      customer,
      priceId,
      promotionCode: promotionCode,
      subIdempotencyKey: idempotencyKey,
      ...taxOptions,
    });
    const latestInvoice = subscription.latest_invoice as Stripe.Invoice;
    if (latestInvoice.amount_due < getMinimumAmount(latestInvoice.currency)) {
      await this.paypalHelper.processZeroInvoice(latestInvoice);
    } else {
      try {
        await this.paypalHelper.processInvoice({
          customer,
          invoice: latestInvoice,
          ipaddress: request.app.clientAddress,
        });
      } catch (err) {
        // We must delete the subscription since we cannot have 'incomplete'
        // subscriptions for manual collection subscriptions.
        await this.stripeHelper.cancelSubscription(subscription.id);
        throw err;
      }
    }

    return {
      sourceCountry: customer.address?.country,
      subscription: subscription,
    };
  }

  /**
   * Updates the billing agreement for a user with a new PayPal token.
   *
   * Updates are not allowed if there's:
   *  - No paypal sourced subscriptions active/past_due
   *  - An existing billing agreement on file.
   *
   * If there's open invoices, attempts to pay them will be made in
   * the background.
   */
  async updatePaypalBillingAgreement(request: AuthRequest) {
    this.log.begin('subscriptions.updatePaypalBillingAgreement', request);
    const { uid, email } = await handleAuth(this.db, request.auth, true);
    await this.customs.check(request, email, 'updatePaypalBillingAgreement');

    const customer = await this.stripeHelper.fetchCustomer(uid, [
      'subscriptions',
    ]);

    if (!customer) {
      throw error.unknownCustomer(uid);
    }

    if (this.stripeHelper.getCustomerPaypalAgreement(customer)) {
      throw error.billingAgreementExists(customer.id);
    }

    const paypalSubscription = hasPaypalSubscription(customer);
    if (!paypalSubscription || !customer.currency) {
      throw error.internalValidationError('updatePaypalBillingAgreement', {
        customerId: customer.id,
        message: 'User is missing paypal subscriptions or currency value.',
        uid,
      });
    }

    const taxSubscription =
      this.automaticTax && customer.tax?.automatic_tax === 'supported';

    const { token } = request.payload as Record<string, string>;
    const { agreementId } = await this.createAndVerifyBillingAgreement({
      uid,
      token,
      currency: customer.currency,
      location: request.app.geo.location,
      taxSubscription,
    });

    await this.stripeHelper.updateCustomerPaypalAgreement(
      customer,
      agreementId
    );

    const nowSeconds = msToSec(Date.now());
    const invoices = [];
    for await (const invoice of this.stripeHelper.fetchOpenInvoices(
      nowSeconds,
      customer.id
    )) {
      invoices.push(invoice);
    }
    if (invoices.length) {
      for (const invoice of invoices) {
        this.processInvoiceInBackground(request, customer, invoice);
      }
    }
    await this.customerChanged(request, uid, email);

    this.log.info('subscriptions.updatePaypalBillingAgreement.success', {
      uid,
    });
    return filterCustomer(customer);
  }

  /**
   * Processes an invoice in the background with proper sentry reporting
   * of the originating request that triggered it.
   */
  private async processInvoiceInBackground(
    request: AuthRequest,
    customer: Stripe.Customer,
    invoice: Stripe.Invoice
  ) {
    try {
      if (invoice.amount_due < getMinimumAmount(invoice.currency)) {
        await this.paypalHelper.processZeroInvoice(invoice);
      } else {
        await this.paypalHelper.processInvoice({
          customer,
          invoice,
          ipaddress: request.app.clientAddress,
        });
      }
    } catch (err) {
      reportSentryError(err, request);
    }
  }

  /**
   * Create and verify a billing agreement is funded from the appropriate
   * country given the currency of the billing agreement.
   */
  private async createAndVerifyBillingAgreement(options: {
    uid: string;
    token: string;
    currency: string;
    location?: {
      state: string;
      country: string;
      countryCode: string;
    };
    taxSubscription: boolean;
  }) {
    const { uid, token, currency } = options;
    // Create PayPal billing agreement
    const agreementId = await this.paypalHelper.createBillingAgreement({
      token,
    });

    const agreementDetails = await this.paypalHelper.agreementDetails({
      billingAgreementId: agreementId,
    });

    // copy bill to address information to Customer
    if (!options.taxSubscription) {
      const accountCustomer = await getAccountCustomerByUid(uid);
      if (accountCustomer.stripeCustomerId) {
        const locationDetails = {} as any;
        if (agreementDetails.countryCode === options.location?.countryCode) {
          // Record the state (short name) if needed
          const state = options.location?.state;
          const country = Object.keys(
            COUNTRIES_LONG_NAME_TO_SHORT_NAME_MAP
          ).find(
            (key) =>
              COUNTRIES_LONG_NAME_TO_SHORT_NAME_MAP[key] ===
              agreementDetails.countryCode
          );
          if (country && stateNames[country][state]) {
            locationDetails.state = stateNames[country][state];
          }
        }
        this.stripeHelper.updateCustomerBillingAddress({
          customerId: accountCustomer.stripeCustomerId,
          options: {
            city: agreementDetails.city,
            country: agreementDetails.countryCode,
            line1: agreementDetails.street,
            line2: agreementDetails.street2,
            postalCode: agreementDetails.zip,
            state: agreementDetails.state,
            ...locationDetails,
          },
          name: `${agreementDetails.firstName} ${agreementDetails.lastName}`,
        });
      }
    }

    // Verify sourceCountry and plan currency are a valid combination.
    const country = agreementDetails.countryCode;
    if (
      !this.paypalHelper.currencyHelper.isCurrencyCompatibleWithCountry(
        currency,
        country
      )
    ) {
      throw error.currencyCountryMismatch(currency, country);
    }

    // Track the billing agreement id in database
    try {
      await createPayPalBA(uid, agreementId, 'active');
    } catch (err) {
      // TODO: Ignore error here if this is a repeat call for a duplicate row.
      this.log.info('Error creating BA, repeat?', { err });
    }

    return { agreementId, agreementDetails };
  }
}

export const paypalRoutes = (
  log: AuthLogger,
  db: any,
  config: ConfigType,
  customs: any,
  push: any,
  mailer: any,
  profile: any,
  stripeHelper: StripeHelper
): ServerRoute[] => {
  const paypalHandler = new PayPalHandler(
    log,
    db,
    config,
    customs,
    push,
    mailer,
    profile,
    stripeHelper
  );

  return [
    {
      method: 'POST',
      path: '/oauth/subscriptions/paypal-checkout',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_PAYPAL_CHECKOUT_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: isA.object({
            token: isA.string().required(),
          }) as any,
        },
        validate: {
          payload: {
            currencyCode: isA.string().uppercase().required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        paypalHandler.getCheckoutToken(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/active/new-paypal',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_ACTIVE_NEW_PAYPAL_POST,
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
            promotionCode: isA.string().optional(),
            token: validators.paypalPaymentToken.allow(null).optional(),
            idempotencyKey: isA.string().required(),
            metricsContext: METRICS_CONTEXT_SCHEMA,
          },
        },
      },
      handler: (request: AuthRequest) =>
        paypalHandler.createSubscriptionWithPaypal(request),
    },
    {
      method: 'POST',
      path: '/oauth/subscriptions/paymentmethod/billing-agreement',
      options: {
        ...SUBSCRIPTIONS_DOCS.OAUTH_SUBSCRIPTIONS_PAYMENTMETHOD_BILLING_AGREEMENT_POST,
        auth: {
          payload: false,
          strategy: 'oauthToken',
        },
        response: {
          schema: validators.subscriptionsStripeCustomerValidator as any,
        },
        validate: {
          payload: {
            token: validators.paypalPaymentToken.required(),
          },
        },
      },
      handler: (request: AuthRequest) =>
        paypalHandler.updatePaypalBillingAgreement(request),
    },
  ];
};
