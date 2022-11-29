/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

type AmplitudeEventGroup = typeof GROUPS;
type AmplitudeEventGroupKey = keyof AmplitudeEventGroup;
type AmplitudeEventFuzzyEventGroupMapFn = (category: string) => string;
type AmplitudeEventFuzzyEventNameMapFn = (
  category: string,
  target: string
) => string;
type EventData = { [key: string]: any };

import Ajv from 'ajv';
import { ParsedUserAgentProperties, ParsedUa, ParsedOs } from './user-agent';
import { Location } from '../connected-services/models/Location';
const ajv = new Ajv();
const amplitudeSchema = require('./amplitude-event.1.schema.json');
const validateAmplitudeEvent = ajv.compile(amplitudeSchema);

const DAY = 1000 * 60 * 60 * 24;
const WEEK = DAY * 7;
const FOUR_WEEKS = WEEK * 4;

const GROUPS = {
  activity: 'fxa_activity',
  button: 'fxa_rp_button',
  connectDevice: 'fxa_connect_device',
  email: 'fxa_email',
  emailFirst: 'fxa_email_first',
  login: 'fxa_login',
  newsletters: 'fxa_newsletter',
  notify: 'fxa_notify',
  registration: 'fxa_reg',
  rp: 'fxa_rp',
  settings: 'fxa_pref',
  sub: 'fxa_subscribe',
  subCancel: 'fxa_subscribe_cancel',
  subManage: 'fxa_subscribe_manage',
  subPayManage: 'fxa_pay_manage',
  subPaySetup: 'fxa_pay_setup',
  subPayAccountSetup: 'fxa_pay_account_setup',
  subPayUpgrade: 'fxa_pay_upgrade',
  subSupport: 'fxa_subscribe_support',
  subCoupon: 'fxa_subscribe_coupon',
  thirdPartyAuth: 'fxa_third_party_auth',
  qrConnectDevice: 'fxa_qr_connect_device',
};

const CONNECT_DEVICE_FLOWS = {
  'app-store': 'store_buttons',
  install_from: 'store_buttons',
  pair: 'pairing',
  signin_from: 'signin',
};

const EVENT_PROPERTIES = {
  [GROUPS.activity]: NOP,
  [GROUPS.button]: NOP,
  [GROUPS.connectDevice]: mapConnectDeviceFlow,
  [GROUPS.email]: mapEmailType,
  [GROUPS.emailFirst]: NOP,
  [GROUPS.login]: NOP,
  [GROUPS.newsletters]: NOP,
  [GROUPS.notify]: NOP,
  [GROUPS.registration]: mapDomainValidationResult,
  [GROUPS.rp]: NOP,
  [GROUPS.settings]: mapSettingsEventProperties,
  [GROUPS.sub]: NOP,
  [GROUPS.subCancel]: NOP,
  [GROUPS.subManage]: NOP,
  [GROUPS.subPayManage]: NOP,
  [GROUPS.subPaySetup]: mapSubscriptionPaymentEventProperties,
  [GROUPS.subPayAccountSetup]: mapSubscriptionPaymentEventProperties,
  [GROUPS.subPayUpgrade]: mapSubscriptionUpgradeEventProperties,
  [GROUPS.subSupport]: NOP,
  [GROUPS.subCoupon]: NOP,
  [GROUPS.qrConnectDevice]: NOP,
  [GROUPS.thirdPartyAuth]: NOP,
};

function NOP() {}

function mapConnectDeviceFlow(
  eventType: string,
  eventCategory: string,
  eventTarget: string
) {
  // @ts-ignore
  const connect_device_flow = CONNECT_DEVICE_FLOWS[eventCategory];

  if (connect_device_flow) {
    const result: { connect_device_flow: string; connect_device_os?: string } =
      { connect_device_flow };

    if (eventTarget) {
      result.connect_device_os = eventTarget;
    }

    return result;
  }

  return;
}

function mapEmailType(
  eventType: string,
  eventCategory: string,
  eventTarget: string,
  data: EventData
) {
  const email_type = data.emailTypes[eventCategory];

  if (email_type) {
    const result: { [key: string]: string } = {
      email_type,
      email_provider: data.emailDomain,
    };

    const { templateVersion } = data;
    if (templateVersion) {
      result.email_template = eventCategory;
      result.email_version = templateVersion;
    }

    return result;
  }

  return;
}

function mapSettingsEventProperties(...args: [string, string]) {
  return {
    ...mapDisconnectReason(...args),
  };
}

function mapDisconnectReason(eventType: string, eventCategory: string) {
  if (eventType === 'disconnect_device' && eventCategory) {
    return { reason: eventCategory };
  }

  return;
}

function mapDomainValidationResult(
  eventType: string,
  eventCategory: string,
  eventTarget: string,
  data: EventData
) {
  // This function is called for all fxa_reg event types, only add the event
  // properties for the results pertaining to domain_validation_result.
  if (eventType === 'domain_validation_result' && eventCategory) {
    return { validation_result: eventCategory };
  }

  return;
}

function mapSubscriptionUpgradeEventProperties(
  eventType: string,
  eventCategory: string,
  eventTarget: string,
  data: EventData
) {
  if (data) {
    const properties: { [key: string]: string } = {};

    if (data.previousPlanId) {
      properties['previous_plan_id'] = data.previousPlanId;
    }

    if (data.previousProductId) {
      properties['previous_product_id'] = data.previousProductId;
    }

    return properties;
  }

  return;
}

function mapSubscriptionPaymentEventProperties(
  eventType: string,
  eventCategory: string,
  eventTarget: string,
  data: EventData
) {
  if (data) {
    const properties: { [key: string]: string } = {};

    if (data.sourceCountry) {
      properties['source_country'] = data.sourceCountry;
    }

    if (data.checkoutType) {
      properties['checkout_type'] = data.checkoutType;
    }

    if (data.other) {
      properties['other'] = data.other;
    }

    return properties;
  }

  return undefined;
}

function validate(event: { [key: string]: any }) {
  if (!validateAmplitudeEvent(event)) {
    throw new Error(
      `Invalid data: ${ajv.errorsText(validateAmplitudeEvent.errors, {
        dataVar: 'event',
      })}`
    );
  }
  return true;
}

const amplitude = {
  EVENT_PROPERTIES,
  GROUPS,
  mapBrowser,
  mapFormFactor,
  mapLocation,
  mapOs,
  mapUserAgentProperties,
  toSnakeCase,
  validate,

  /**
   * Initialize an amplitude event mapper. You can read more about the amplitude
   * event structure here:
   *
   *   https://amplitude.zendesk.com/hc/en-us/articles/204771828-HTTP-API
   *
   * And you can see our event taxonomy here:
   *
   *   https://docs.google.com/spreadsheets/d/1G_8OJGOxeWXdGJ1Ugmykk33Zsl-qAQL05CONSeD4Uz4
   *
   * @param {Object} services An object of client-id:service-name mappings.
   *
   * @param {Object} events   An object of name:definition event mappings, where
   *                          each definition value is itself an object with `group`
   *                          and `event` string properties, with an optional `minimal`
   *                          property that can be set to `true` to only report
   *                          uid, service, and version.
   *
   * @param {Map} fuzzyEvents A map of regex:definition event mappings. Each regex
   *                          key may include up to two capturing groups. The first
   *                          group is used as the `eventCategory` and the second is
   *                          used as the `eventTarget`. Again each definition value
   *                          is an object containing `group` and `event` properties
   *                          but here `group` can be a string or a function. If it's
   *                          a function, it will be passed the matched `eventCategory`
   *                          as its argument and should return the group string.
   *
   * @returns {Function}      The mapper function.
   */
  initialize(
    services: { [key: string]: string },
    events: {
      [key: string]: {
        group: AmplitudeEventGroupKey | Function;
        event: string | AmplitudeEventFuzzyEventNameMapFn;
        minimal?: boolean;
      };
    },
    fuzzyEvents: Map<
      RegExp,
      {
        group: AmplitudeEventGroupKey | AmplitudeEventFuzzyEventGroupMapFn;
        event: string | AmplitudeEventFuzzyEventNameMapFn;
      }
    >
  ) {
    /**
     * Map from a source event and it's associated data to an amplitude event.
     *
     * @param {Object} event      The source event to map from.
     *
     * @param {String} event.type The type of the event.
     *
     * @param {Number} event.time The time of the event in epoch-milliseconds.
     *
     * @param {Object} data       All of the data associated with the event. This
     *                            parameter supports many properties that are too
     *                            numerous to list here, but may be discerned with
     *                            ease by perusing the code.
     */
    return (event: { [key: string]: any }, data: EventData) => {
      if (!event || !data) {
        return;
      }

      let eventType = event.type;
      let mapping = events[eventType];
      let eventCategory, eventTarget;

      if (!mapping) {
        for (const [key, value] of fuzzyEvents.entries()) {
          const match = key.exec(eventType);
          if (match) {
            mapping = value;

            if (match.length >= 2) {
              eventCategory = match[1];
              if (match.length === 3) {
                eventTarget = match[2];
              }
            }

            break;
          }
        }
      }

      if (mapping) {
        eventType = mapping.event;
        if (typeof eventType === 'function') {
          eventType = eventType(eventCategory, eventTarget);
          if (!eventType) {
            return;
          }
        }

        let eventGroup = mapping.group;
        if (typeof eventGroup === 'function') {
          eventGroup = eventGroup(eventCategory);
          if (!eventGroup) {
            return;
          }
        }

        let version;
        try {
          // @ts-ignore
          version = /([0-9]+)\.([0-9]+)$/.exec(data.version)[0];
        } catch (err) {}

        // minimal data should be enabled for routes used by internal
        // services like profile-server and token-server
        if (mapping.minimal) {
          data = {
            uid: data.uid,
            service: data.service,
            version: data.version,
          };
        }

        return pruneUnsetValues({
          op: 'amplitudeEvent',
          event_type: `${eventGroup} - ${eventType}`,
          time: event.time,
          user_id: data.uid,
          device_id: data.deviceId,
          session_id: data.flowBeginTime,
          app_version: version,
          language: data.lang,
          country: data.country,
          region: data.region,
          os_name: data.os,
          os_version: data.osVersion,
          device_model: data.formFactor,
          event_properties: mapEventProperties(
            eventType,
            eventGroup as string,
            eventCategory as string,
            eventTarget as string,
            data
          ),
          user_properties: mapUserProperties(
            eventGroup as string,
            eventCategory as string,
            data
          ),
        });
      }

      return;
    };

    function mapEventProperties(
      eventType: string,
      eventGroup: string,
      eventCategory: string,
      eventTarget: string,
      data: EventData
    ) {
      const { serviceName, clientId } = getServiceNameAndClientId(data);

      return Object.assign(
        pruneUnsetValues({
          service: serviceName,
          oauth_client_id: clientId,
          // TODO: Delete data.plan_id and data.product_id after the camel-cased
          //       equivalents have been in place for at least one train.
          plan_id: data.planId || data.plan_id,
          product_id: data.productId || data.product_id,
          payment_provider: data.paymentProvider,
          promotionCode: data.promotionCode,
        }),
        EVENT_PROPERTIES[eventGroup](
          eventType,
          eventCategory,
          eventTarget,
          data
        )
      );
    }

    function getServiceNameAndClientId(data: EventData) {
      let serviceName, clientId;

      const { service } = data;
      if (service && service !== 'content-server') {
        if (service === 'sync') {
          serviceName = service;
        } else {
          serviceName = services[service] || 'undefined_oauth';
          clientId = service;
        }
      }

      return { serviceName, clientId };
    }

    function mapUserProperties(
      eventGroup: string,
      eventCategory: string,
      data: EventData
    ) {
      return Object.assign(
        pruneUnsetValues({
          entrypoint: data.entrypoint,
          entrypoint_experiment: data.entrypoint_experiment,
          entrypoint_variation: data.entrypoint_variation,
          flow_id: data.flowId,
          ua_browser: data.browser,
          ua_version: data.browserVersion,
          utm_campaign: data.utm_campaign,
          utm_content: data.utm_content,
          utm_medium: data.utm_medium,
          utm_referrer: data.utm_referrer,
          utm_source: data.utm_source,
          utm_term: data.utm_term,
        }),
        mapAppendProperties(data),
        mapSyncDevices(data),
        mapSyncEngines(data),
        mapNewsletters(data)
      );
    }

    function mapAppendProperties(data: EventData) {
      const servicesUsed = mapServicesUsed(data);
      const experiments = mapExperiments(data);
      const userPreferences = mapUserPreferences(data);

      if (servicesUsed || experiments || userPreferences) {
        return {
          $append: Object.assign(
            {},
            servicesUsed,
            experiments,
            userPreferences
          ),
        };
      }

      return;
    }

    function mapServicesUsed(data: EventData) {
      const { serviceName } = getServiceNameAndClientId(data);

      if (serviceName) {
        return {
          fxa_services_used: serviceName,
        };
      }

      return;
    }
  },
};

function pruneUnsetValues(data: EventData) {
  const result: Partial<EventData> = {};

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (value || value === false) {
      result[key] = value;
    }
  });

  return result;
}

function mapExperiments(data: EventData) {
  const { experiments } = data;

  if (Array.isArray(experiments) && experiments.length > 0) {
    return {
      experiments: experiments.map(
        (e) => `${toSnakeCase(e.choice)}_${toSnakeCase(e.group)}`
      ),
    };
  }

  return;
}

function mapUserPreferences(data: EventData) {
  const { userPreferences } = data;

  // Don't send user preferences metric if there are none!
  if (!userPreferences || Object.keys(userPreferences).length === 0) {
    return;
  }

  const formattedUserPreferences: { [key: string]: any } = {};
  for (const pref in userPreferences) {
    formattedUserPreferences[toSnakeCase(pref)] = userPreferences[pref];
  }

  return formattedUserPreferences;
}

function toSnakeCase(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, (s, c1, c2) => `${c1}_${c2.toLowerCase()}`)
    .replace(/([A-Z])/g, (c) => c.toLowerCase())
    .replace(/\./g, '_')
    .replace(/-/g, '_');
}

function mapSyncDevices(data: EventData) {
  const { devices } = data;

  if (Array.isArray(devices)) {
    return {
      sync_device_count: devices.length,
      sync_active_devices_day: countDevices(
        devices as [{ [key: string]: any }],
        DAY
      ),
      sync_active_devices_week: countDevices(
        devices as [{ [key: string]: any }],
        WEEK
      ),
      sync_active_devices_month: countDevices(
        devices as [{ [key: string]: any }],
        FOUR_WEEKS
      ),
    };
  }

  return;
}

function countDevices(devices: [{ [key: string]: any }], period: number) {
  return devices.filter(
    (device) => device.lastAccessTime >= Date.now() - period
  ).length;
}

function mapSyncEngines(data: EventData) {
  const { syncEngines: sync_engines } = data;

  if (Array.isArray(sync_engines) && sync_engines.length > 0) {
    return { sync_engines };
  }

  return;
}

function mapNewsletters(data: EventData) {
  let { newsletters } = data;
  if (newsletters) {
    newsletters = newsletters.map((newsletter: string) => {
      return toSnakeCase(newsletter);
    });
    return { newsletters, newsletter_state: 'subscribed' };
  }

  return;
}

function mapBrowser(userAgent: ParsedUserAgentProperties) {
  return mapUserAgentProperties(userAgent, 'ua', 'browser', 'browserVersion');
}

function mapOs(userAgent: ParsedUserAgentProperties) {
  return mapUserAgentProperties(userAgent, 'os', 'os', 'osVersion');
}

function mapUserAgentProperties(
  userAgent: ParsedUserAgentProperties,
  key: keyof ParsedUserAgentProperties,
  familyProperty: string,
  versionProperty: string
) {
  const group = userAgent[key];
  const { family } = group;
  if (family && family !== 'Other') {
    return {
      [familyProperty]: family,
      [versionProperty]: (group as ParsedUa | ParsedOs).toVersionString(),
    };
  }

  return;
}

function mapFormFactor(userAgent: ParsedUserAgentProperties) {
  const { brand, family: formFactor } = userAgent.device;
  if (brand && formFactor && brand !== 'Generic') {
    return { formFactor };
  }

  return;
}

function mapLocation(location: Location) {
  if (location && (location.country || location.state)) {
    return {
      country: location.country,
      region: location.state,
    };
  }

  return;
}

export default amplitude;
module.exports = amplitude;
