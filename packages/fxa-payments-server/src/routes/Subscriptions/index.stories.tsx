/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MockApp, {
  defaultAppContextValue,
} from '../../../.storybook/components/MockApp';
import { SettingsLayout } from '../../components/AppLayout';
import { Subscriptions, SubscriptionsProps } from './index';
import { PaymentUpdateStripeAPIs } from './PaymentUpdateForm';
import { QueryParams } from '../../lib/types';
import { APIError } from '../../lib/apiClient';
import { FetchState, Profile } from '../../store/types';
import { linkTo } from '@storybook/addon-links';
import { CUSTOMER, FILTERED_SETUP_INTENT } from '../../lib/mock-data';
import {
  IapSubscription,
  MozillaSubscriptionTypes,
  WebSubscription,
} from 'fxa-shared/subscriptions/types';

function init() {
  setupVariantStories('routes/Subscriptions', {
    paymentUpdateApiClientOverrides: defaultPaymentUpdateApiClientOverrides(),
    paymentUpdateStripeOverride: defaultPaymentUpdateStripeOverride(),
  });
}

function setupVariantStories(
  namePrefix: string = 'routes/Subscriptions',
  baseRouteProps: Partial<SubscriptionsProps> = {}
) {
  const SubscriptionsRoute = subscriptionsRouteWithBaseProps(baseRouteProps);

  storiesOf(namePrefix, module)
    .add('loading', () => (
      <SubscriptionsRoute
        routeProps={{
          ...baseProps,
        }}
      />
    ))
    .add('no subscription', () => <SubscriptionsRoute />)
    .add('subscribed with web subscription', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedProps,
        }}
      />
    ))
    .add('subscribed with web subscription with coupon', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedProps,
        }}
      />
    ))
    .add('subscribed with Google IAP', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedIapProps,
        }}
      />
    ))
    .add('subscribed with Apple IAP - Auto Rewew w/ Expiration', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedIapPropsAppleExpiry,
        }}
      />
    ))
    .add('subscribed with Apple IAP - No Auto Renew w/ Expiration', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedIapPropsAppleNoRenew,
        }}
      />
    ))
    .add('subscribed with Apple IAP - No expiration', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedIapPropsAppleNoExpiry,
        }}
      />
    ))
    .add('subscribed with Google IAP and web subscription', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedIapProps,
          customerSubscriptions: [
            ...customerSubscriptions,
            ...subscribedIapProps.customerSubscriptions,
          ],
        }}
      />
    ))
    .add('subscribed with upgrade offer', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedProps,
          plans: {
            error: null,
            loading: false,
            result: [
              {
                ...PLANS[0],
                product_name: 'Upgradable Product',
                plan_metadata: null,
                product_metadata: {
                  upgradeCTA: `
                  Interested in better features?
                  Upgrade to <a href="http://mozilla.org">the Upgrade Product</a>!
                `,
                },
              },
            ],
          },
        }}
      />
    ))
    .add('cancelled', () => (
      <SubscriptionsRoute
        routeProps={{
          ...cancelledProps,
          resetCancelSubscription: linkTo(
            'routes/Subscriptions',
            'reactivation'
          ),
          cancelSubscriptionStatus: {
            loading: false,
            error: null,
            result: {
              subscriptionId: 'sub_5551212',
            },
          },
        }}
      />
    ))
    .add('reactivation', () => (
      <SubscriptionsRoute
        routeProps={{
          ...cancelledProps,
          reactivateSubscription: linkToReactivationConfirmation,
        }}
      />
    ))
    .add('reactivation confirmation', () => (
      <SubscriptionsRoute
        routeProps={{
          ...subscribedProps,
          reactivateSubscriptionStatus: {
            loading: false,
            error: null,
            result: {
              subscriptionId: 'sub_5551212',
              plan: PLANS[0],
            },
          },
          resetReactivateSubscription: linkTo(
            'routes/Subscriptions',
            'subscribed'
          ),
        }}
      />
    ));

  storiesOf(`${namePrefix}/errors`, module)
    .add('profile', () => (
      <SubscriptionsRoute
        routeProps={{
          ...baseProps,
          profile: errorFetchState(),
        }}
      />
    ))
    .add('plans', () => (
      <SubscriptionsRoute
        routeProps={{
          ...baseProps,
          plans: errorFetchState(),
        }}
      />
    ))
    .add('reactivation', () => (
      <SubscriptionsRoute
        routeProps={{
          ...reactivationErrorProps,
          reactivateSubscriptionStatus: errorFetchState(),
          resetReactivateSubscription: linkTo(
            'routes/Subscriptions',
            'reactivation'
          ),
        }}
      />
    ));
}

const linkToReactivationConfirmation = () =>
  linkTo('routes/Subscriptions', 'reactivation confirmation');

const errorFetchState = (): FetchState<any> => ({
  loading: false,
  result: null,
  error: new APIError({
    statusCode: 500,
    message: 'Internal Server Error',
  }),
});

type SubscriptionsRouteProps = {
  routeProps?: SubscriptionsProps;
  queryParams?: QueryParams;
  applyStubsToStripe?: (orig: stripe.Stripe) => stripe.Stripe;
};

// Quick & dirty utility to help build variant stories with common route props
const subscriptionsRouteWithBaseProps =
  (baseRouteProps?: Partial<SubscriptionsProps>) =>
  ({ routeProps = baseProps, ...otherProps }: SubscriptionsRouteProps) =>
    (
      <SubscriptionsRoute
        {...{
          routeProps: {
            ...routeProps,
            ...(baseRouteProps || {}),
          },
          ...otherProps,
        }}
      />
    );

const SubscriptionsRoute = ({
  routeProps = baseProps,
  queryParams = defaultAppContextValue.queryParams,
  applyStubsToStripe,
}: SubscriptionsRouteProps) => (
  <MockApp
    applyStubsToStripe={applyStubsToStripe}
    appContextValue={{
      ...defaultAppContextValue,
      queryParams,
    }}
  >
    <SettingsLayout>
      <Subscriptions {...routeProps} />
    </SettingsLayout>
  </MockApp>
);

const PRODUCT_ID = 'product_8675309';
const PLAN_ID = 'plan_123';

const PROFILE: Profile = {
  amrValues: [],
  avatar: 'http://placekitten.com/256/256',
  avatarDefault: false,
  displayName: 'Foo Barson',
  email: 'foo@example.com',
  locale: 'en',
  twoFactorAuthentication: true,
  uid: '8675309asdf',
  metricsEnabled: true,
};

const PLANS = [
  {
    plan_id: PLAN_ID,
    product_id: PRODUCT_ID,
    product_name: 'Example Product',
    currency: 'USD',
    amount: 1099,
    interval: 'month' as const,
    interval_count: 1,
    active: true,
    plan_metadata: null,
    product_metadata: {
      webIconURL: 'http://placekitten.com/512/512',
      'product:subtitle': 'Really keen product',
      'product:details:1':
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'product:details:2': 'Sed ut perspiciatis unde omnis iste natus',
      'product:details:3': 'Nemo enim ipsam voluptatem',
      'product:details:4':
        'Ut enim ad minima veniam, quis nostrum exercitationem',
    },
  },
];

const baseProps: SubscriptionsProps = {
  profile: {
    error: null,
    loading: false,
    result: PROFILE,
  },
  plans: {
    error: null,
    loading: false,
    result: PLANS,
  },
  customer: {
    error: null,
    loading: false,
    result: null,
  },
  customerSubscriptions: [],
  fetchSubscriptionsRouteResources: action('fetchSubscriptionsRouteResources'),
  cancelSubscription: () => linkTo('routes/Subscriptions', 'cancelled')(),
  reactivateSubscription: action('reactivateSubscription'),
  resetCancelSubscription: action('resetCancelSubscription'),
  resetReactivateSubscription: action('resetReactivateSubscription'),
  cancelSubscriptionStatus: {
    error: null,
    loading: false,
    result: null,
  },
  reactivateSubscriptionStatus: {
    error: null,
    loading: false,
    result: null,
  },
  subsequentInvoices: {
    error: null,
    loading: false,
    result: null,
  },
};

const customerSubscriptions = [
  {
    _subscription_type: MozillaSubscriptionTypes.WEB,
    created: Date.now(),
    current_period_end: (Date.now() + 86400) / 1000,
    current_period_start: (Date.now() - 86400) / 1000,
    cancel_at_period_end: false,
    end_at: null,
    latest_invoice: '628031D-0002',
    plan_id: PLAN_ID,
    product_id: PRODUCT_ID,
    product_name: 'Example Product',
    status: 'active',
    subscription_id: 'sub_5551212',
    promotion_duration: null,
    promotion_end: null,
  },
] as WebSubscription[];

const subscribedProps: SubscriptionsProps = {
  ...baseProps,
  customer: {
    loading: false,
    error: null,
    result: {
      billing_name: 'Jane Doe',
      payment_provider: 'stripe',
      payment_type: 'card',
      last4: '8675',
      exp_month: '12',
      exp_year: '2028',
      brand: 'Visa',
      subscriptions: customerSubscriptions,
    },
  },
  customerSubscriptions: customerSubscriptions,
  subsequentInvoices: {
    error: null,
    loading: false,
    result: [
      {
        subscriptionId: 'sub_5551212',
        period_start: 1,
        total: 100,
      },
    ],
  },
};

const cancelledProps: SubscriptionsProps = {
  ...subscribedProps,
  customerSubscriptions: subscribedProps.customerSubscriptions
    ? ([
        {
          ...subscribedProps.customerSubscriptions[0],
          cancel_at_period_end: true,
        },
      ] as WebSubscription[])
    : null,
};

const reactivationErrorProps = {
  ...cancelledProps,
  reactivateSubscriptionStatus: {
    loading: false,
    result: false,
    error: new APIError({
      statusCode: 500,
      message: 'reactivateSubscription API not implemented',
    }),
  },
};

const subscribedIapProps = {
  ...subscribedProps,
  customerSubscriptions: [
    {
      ...subscribedProps.customerSubscriptions![0],
      _subscription_type: MozillaSubscriptionTypes.IAP_GOOGLE,
      expiry_time_millis: Date.now(),
      auto_renewing: true,
      sku: 'cooking.with.foxkeh',
      package_name: 'foxkeh',
    },
  ] as IapSubscription[],
};

const subscribedIapPropsAppleBase = {
  ...subscribedProps.customerSubscriptions![0],
  _subscription_type: MozillaSubscriptionTypes.IAP_APPLE,
  app_store_product_id: 'wow',
  bundle_id: 'hmm',
};

const subscribedIapPropsAppleExpiry = {
  ...subscribedProps,
  customerSubscriptions: [
    {
      ...subscribedIapPropsAppleBase,
      auto_renewing: true,
      expiry_time_millis: 1656759852811,
    },
  ] as IapSubscription[],
};

const subscribedIapPropsAppleNoRenew = {
  ...subscribedProps,
  customerSubscriptions: [
    {
      ...subscribedIapPropsAppleBase,
      auto_renewing: false,
      expiry_time_millis: Date.now(),
    },
  ] as IapSubscription[],
};

const subscribedIapPropsAppleNoExpiry = {
  ...subscribedProps,
  customerSubscriptions: [
    {
      ...subscribedIapPropsAppleBase,
      auto_renewing: true,
    },
  ] as IapSubscription[],
};
// TODO: Move to some shared lib?
const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const defaultPaymentUpdateApiClientOverrides = () => ({
  apiCreateSetupIntent: async () => FILTERED_SETUP_INTENT,
  apiUpdateDefaultPaymentMethod: async () => {
    await wait(1000);
    return CUSTOMER;
  },
});

const CONFIRM_CARD_SETUP_RESULT = {
  setupIntent: {
    payment_method: 'pm_test',
  },
  error: null,
};

// HACK: Not a complete confirmCardSetup return type, but good enough for stories.
const defaultPaymentUpdateStripeOverride = () =>
  ({
    confirmCardSetup: async () => CONFIRM_CARD_SETUP_RESULT,
  } as unknown as PaymentUpdateStripeAPIs);

init();
