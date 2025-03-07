/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

const { assert } = require('chai');

const DAY = 1000 * 60 * 60 * 24;
const WEEK = DAY * 7;
const FOUR_WEEKS = WEEK * 4;
const APP_VERSION = /^([0-9]+)\.([0-9]+)$/; // Matches `XXX.X` version number

describe('metrics/amplitude:', () => {
  let amplitude;

  before(() => {
    amplitude = require('../../metrics/amplitude');
  });

  it('exports the event groups', () => {
    assert.isObject(amplitude.GROUPS);
    assert.isString(amplitude.GROUPS.activity);
    assert.isString(amplitude.GROUPS.connectDevice);
    assert.isString(amplitude.GROUPS.email);
    assert.isString(amplitude.GROUPS.emailFirst);
    assert.isString(amplitude.GROUPS.login);
    assert.isString(amplitude.GROUPS.notify);
    assert.isString(amplitude.GROUPS.registration);
    assert.isString(amplitude.GROUPS.settings);
  });

  it('has an EVENT_PROPERTIES entry for each group', () => {
    for (const group of Object.keys(amplitude.GROUPS)) {
      const groupName = amplitude.GROUPS[group];
      assert.isFunction(amplitude.EVENT_PROPERTIES[groupName], group);
    }
  });

  it('exports an initialize method', () => {
    assert.isFunction(amplitude.initialize);
    assert.lengthOf(amplitude.initialize, 3);
  });

  describe('initialize:', () => {
    let transform;

    before(() => {
      transform = amplitude.initialize(
        {
          foo: 'bar',
          baz: 'qux',
        },
        {
          sourceEvent1: {
            group: amplitude.GROUPS.activity,
            event: 'wibble',
          },
          sourceEvent2: {
            group: amplitude.GROUPS.connectDevice,
            event: 'blee',
          },
          'settings.change-password.success': {
            group: amplitude.GROUPS.settings,
            event: 'password',
          },
        },
        new Map([
          [
            /3/,
            {
              group: amplitude.GROUPS.login,
              event: 'targetEvent3',
            },
          ],
          [
            /^(wibble)\.(blee)/,
            {
              group: (eventCategory) =>
                eventCategory === 'wibble'
                  ? amplitude.GROUPS.registration
                  : null,
              event: 'targetEvent4',
            },
          ],
          [
            /wobble\.(\w+)\.(\w+)/,
            {
              group: amplitude.GROUPS.login,
              event: (eventCategory, eventTarget) =>
                `${eventCategory}.${eventTarget}`,
            },
          ],
          [
            /(pair)\.(\w+)/,
            {
              group: amplitude.GROUPS.connectDevice,
              event: 'cadEvent',
            },
          ],
          [
            /(verifySecondaryCodeEmail)\.(\w+)/,
            {
              group: amplitude.GROUPS.email,
              event: 'emailEvent',
            },
          ],
          [
            /disconnect\.(\w+)\.(\w+)/,
            {
              group: amplitude.GROUPS.settings,
              event: 'disconnect_device',
            },
          ],
          [
            /newsletter\.(\w+)\.(\w+)/,
            {
              group: amplitude.GROUPS.settings,
              event: 'newsletterEvent',
            },
          ],
          [
            /newsletters\.(\w+)\.(\w+)/,
            {
              group: amplitude.GROUPS.settings,
              event: 'newsletters',
            },
          ],
          [
            /^(fxa_pay_setup)\.([\w-]+)/,
            {
              group: amplitude.GROUPS.subPaySetup,
              event: 'payment',
            },
          ],
        ])
      );
    });

    describe('transform a simple event:', () => {
      let now, result;

      before(() => {
        now = Date.now();
        result = transform(
          {
            type: 'sourceEvent2',
            time: 42,
          },
          {
            browser: 'a',
            browserVersion: 'b',
            country: 'c',
            deviceId: 'd',
            devices: [
              { lastAccessTime: now - DAY + 1000 },
              { lastAccessTime: now - DAY - 1 },
              { lastAccessTime: now - WEEK + 1000 },
              { lastAccessTime: now - WEEK - 1 },
              { lastAccessTime: now - FOUR_WEEKS + 1000 },
              { lastAccessTime: now - FOUR_WEEKS - 1 },
            ],
            emailDomain: 'e',
            entrypoint: 'f',
            entrypoint_experiment: 'exp',
            entrypoint_variation: 'var',
            experiments: [
              { choice: 'g', group: 'h' },
              { choice: 'iI', group: 'jJ-J' },
            ],
            flowBeginTime: 'k',
            flowId: 'l',
            formFactor: 'm',
            lang: 'n',
            os: 'p',
            osVersion: 'q',
            planId: 'plid',
            productId: 'pid',
            region: 'r',
            service: 'baz',
            syncEngines: ['wibble', 'blee'],
            templateVersion: 's',
            uid: 't',
            userPreferences: {
              'account-recovery': true,
            },
            utm_campaign: 'u',
            utm_content: 'v',
            utm_medium: 'w',
            utm_referrer: 'z',
            utm_source: 'x',
            utm_term: 'y',
          }
        );
      });

      it('returned the correct result', () => {
        // HACK: app_version is set if the tests are run in the monorepo but not if
        //       they're run inside a container, due to the resolution or otherwise
        //       of `require('../../../package.json')` in metrics/amplitude.js
        if (result.app_version) {
          assert.equal(APP_VERSION.test(result.app_version), true);
        }
        delete result.app_version;
        assert.deepEqual(result, {
          country: 'c',
          device_id: 'd',
          device_model: 'm',
          event_properties: {
            oauth_client_id: 'baz',
            plan_id: 'plid',
            product_id: 'pid',
            service: 'qux',
          },
          event_type: 'fxa_connect_device - blee',
          language: 'n',
          op: 'amplitudeEvent',
          os_name: 'p',
          os_version: 'q',
          region: 'r',
          session_id: 'k',
          time: 42,
          user_id: 't',
          user_properties: {
            $append: {
              account_recovery: true,
              experiments: ['g_h', 'i_i_j_j_j'],
              fxa_services_used: 'qux',
            },
            entrypoint: 'f',
            entrypoint_experiment: 'exp',
            entrypoint_variation: 'var',
            flow_id: 'l',
            sync_active_devices_day: 1,
            sync_active_devices_month: 5,
            sync_active_devices_week: 3,
            sync_device_count: 6,
            sync_engines: ['wibble', 'blee'],
            ua_browser: 'a',
            ua_version: 'b',
            utm_campaign: 'u',
            utm_content: 'v',
            utm_medium: 'w',
            utm_referrer: 'z',
            utm_source: 'x',
            utm_term: 'y',
          },
        });
      });
    });

    describe('transform a fuzzy event:', () => {
      let result;

      before(() => {
        result = transform(
          {
            type: 'sourceEvent3',
            time: 1,
          },
          {
            deviceId: 'a',
            flowBeginTime: 'b',
            flowId: 'c',
            syncEngines: [],
            uid: 'd',
          }
        );
      });

      it('returned the correct result', () => {
        // HACK: app_version is set if the tests are run in the monorepo but not if
        //       they're run inside a container, due to the resolution or otherwise
        //       of `require('../../../package.json')` in metrics/amplitude.js
        if (result.app_version) {
          assert.equal(APP_VERSION.test(result.app_version), true);
        }
        delete result.app_version;
        assert.deepEqual(result, {
          device_id: 'a',
          event_properties: {},
          event_type: 'fxa_login - targetEvent3',
          op: 'amplitudeEvent',
          session_id: 'b',
          time: 1,
          user_id: 'd',
          user_properties: {
            flow_id: 'c',
          },
        });
      });
    });

    describe('transform a fuzzy event with a group function:', () => {
      let result;

      before(() => {
        result = transform({ type: 'wibble.blee' }, {});
      });

      it('returned the correct event type', () => {
        assert.equal(result.event_type, 'fxa_reg - targetEvent4');
      });
    });

    describe('transform a fuzzy event with an event function:', () => {
      let result;

      before(() => {
        result = transform({ type: 'wobble.glick.gluck' }, {});
      });

      it('returned the correct event type', () => {
        assert.equal(result.event_type, 'fxa_login - glick.gluck');
      });
    });

    describe('transform an event with connect-another-device properties:', () => {
      let result;

      before(() => {
        result = transform({ type: 'pair.ios' }, {});
      });

      it('returned the correct event data', () => {
        assert.equal(result.event_type, 'fxa_connect_device - cadEvent');
        assert.deepEqual(result.event_properties, {
          connect_device_flow: 'pairing',
          connect_device_os: 'ios',
        });
      });
    });

    describe('transform an event with email properties:', () => {
      let result;

      before(() => {
        result = transform(
          { type: 'verifySecondaryCodeEmail.wibble' },
          {
            emailDomain: 'foo',
            emailTypes: {
              verifySecondaryCodeEmail: 'secondary_email',
            },
            templateVersion: 'bar',
          }
        );
      });

      it('returned the correct event data', () => {
        assert.equal(result.event_type, 'fxa_email - emailEvent');
        assert.deepEqual(result.event_properties, {
          email_provider: 'foo',
          email_template: 'verifySecondaryCodeEmail',
          email_type: 'secondary_email',
          email_version: 'bar',
        });
      });
    });

    describe('transform an event with disconnect properties:', () => {
      let result;

      before(() => {
        result = transform({ type: 'disconnect.wibble.blee' }, {});
      });

      it('returned the correct event data', () => {
        assert.equal(result.event_type, 'fxa_pref - disconnect_device');
        assert.deepEqual(result.event_properties, { reason: 'wibble' });
      });
    });

    describe('transform an event with newsletters optIn properties:', () => {
      let result;

      before(() => {
        result = transform(
          { type: 'newsletters.optIn.wibble' },
          {
            newsletters: ['test-pilot'],
          }
        );
      });

      it('returned the correct event data', () => {
        assert.equal(result.event_type, 'fxa_pref - newsletters');
        assert.deepEqual(result.user_properties, {
          newsletter_state: 'subscribed',
          newsletters: ['test_pilot'],
        });
      });
    });

    describe('transform an event with undefined service:', () => {
      let result;

      before(() => {
        result = transform({ type: 'wibble.blee' }, { service: 'gribble' });
      });

      it('returned the correct event data', () => {
        assert.deepEqual(result.event_properties, {
          oauth_client_id: 'gribble',
          service: 'undefined_oauth',
        });
        assert.deepEqual(result.user_properties, {
          $append: { fxa_services_used: 'undefined_oauth' },
        });
      });
    });

    describe('transform an event with service=sync:', () => {
      let result;

      before(() => {
        result = transform({ type: 'wibble.blee' }, { service: 'sync' });
      });

      it('returned the correct event data', () => {
        assert.deepEqual(result.event_properties, { service: 'sync' });
        assert.deepEqual(result.user_properties, {
          $append: { fxa_services_used: 'sync' },
        });
      });
    });

    describe('transform an event with service=content-server:', () => {
      let result;

      before(() => {
        result = transform(
          { type: 'wibble.blee' },
          { service: 'content-server' }
        );
      });

      it('returned the correct event data', () => {
        assert.deepEqual(result.event_properties, {});
        assert.deepEqual(result.user_properties, {});
      });
    });

    describe('transform an event with subscription event details:', () => {
      it('did not include the subscription event details in event properties when the event was not in the fxa_pay_setup group', () => {
        const actual = transform(
          { type: 'wibble.blee' },
          { sourceCountry: 'GD', checkoutType: 'without-account' }
        );
        assert.deepEqual(actual.event_properties, {});
      });

      it('did not include the subscription event details in event properties when none was found', () => {
        const actual = transform({ type: 'fxa_pay_setup.blee.quuz' }, {});
        assert.deepEqual(actual.event_properties, {});
      });

      it('returned the correct subscription event details event properties', () => {
        const actual = transform(
          { type: 'fxa_pay_setup.blee.quuz' },
          { sourceCountry: 'GD', checkoutType: 'without-account' }
        );
        assert.deepEqual(actual.event_properties, {
          source_country: 'GD',
          checkout_type: 'without-account',
        });
      });
    });
  });
});
