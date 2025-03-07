## Deprecation notice

Changes are now documented at https://github.com/mozilla/fxa/releases

## 1.236.1

No changes.


## 1.236.0

### New features

- scripts: update script to output to json Because: ([b87cafb2dd](https://github.com/mozilla/fxa/commit/b87cafb2dd))
- auth: restore expandResource prior behavior ([9592d596a8](https://github.com/mozilla/fxa/commit/9592d596a8))
- auth: ignore missing account for api calls ([078e1c1b7b](https://github.com/mozilla/fxa/commit/078e1c1b7b))
- subscriptions: add feature flag for Stripe Tax Because: ([5c7744eb6d](https://github.com/mozilla/fxa/commit/5c7744eb6d))
- Because: ([300a96ea2e](https://github.com/mozilla/fxa/commit/300a96ea2e))
- auth: log unhandled paypal ipn Because: ([3c55e5a457](https://github.com/mozilla/fxa/commit/3c55e5a457))
- support-panel: add App Store subscriptions to support-panel Because: ([d8d9a9f576](https://github.com/mozilla/fxa/commit/d8d9a9f576))

### Bug fixes

- auth: patch source lookup method ([69a0916d80](https://github.com/mozilla/fxa/commit/69a0916d80))
- auth: update existing type ([0a63727662](https://github.com/mozilla/fxa/commit/0a63727662))
- auth: user Sent Unnecessary Finish Setting Up Account Reminder Email Because: ([097baedb9e](https://github.com/mozilla/fxa/commit/097baedb9e))
- auth: surface response validation errors in Sentry and logs ([4af2f9a86c](https://github.com/mozilla/fxa/commit/4af2f9a86c))
- deps: Fix error - Object is possibly null ([543df6d5a8](https://github.com/mozilla/fxa/commit/543df6d5a8))
- auth: handleMpCancel remove on BA id match Because: ([2f4c922d56](https://github.com/mozilla/fxa/commit/2f4c922d56))
- auth: update subscriptionPaymentExpired Email Template Copy Because: ([f838d10bac](https://github.com/mozilla/fxa/commit/f838d10bac))
- auth-server: Fix "Expires Invalid Date" for cc info on Subscription Management ([85ce639a18](https://github.com/mozilla/fxa/commit/85ce639a18))
- email: Revise subscriptionAccountFinishSetupEmail ([052fcf2b43](https://github.com/mozilla/fxa/commit/052fcf2b43))

### Other changes

- deps: Update ajv ([14e782b3b2](https://github.com/mozilla/fxa/commit/14e782b3b2))
- deps: Update ajv ([40c5e0ba28](https://github.com/mozilla/fxa/commit/40c5e0ba28))
- deps: bump i18n-iso-countries from 7.4.0 to 7.5.0" ([439c969c81](https://github.com/mozilla/fxa/commit/439c969c81))
- deps-dev: bump sass from 1.52.1 to 1.53.0" ([7c740e61c4](https://github.com/mozilla/fxa/commit/7c740e61c4))
- deps-dev: bump sass from 1.52.1 to 1.53.0 ([5ed06f09ea](https://github.com/mozilla/fxa/commit/5ed06f09ea))
- deps: bump i18n-iso-countries from 7.4.0 to 7.5.0 ([24b47fc3f2](https://github.com/mozilla/fxa/commit/24b47fc3f2))
- 48c33f4e95 Revisions based on feedback ([48c33f4e95](https://github.com/mozilla/fxa/commit/48c33f4e95))
- deps-dev: bump @storybook/addon-docs from 6.5.8 to 6.5.9 ([769ef19000](https://github.com/mozilla/fxa/commit/769ef19000))
- payments: remove downloadURL from code and Stripe metadata Because: ([bca41f28e0](https://github.com/mozilla/fxa/commit/bca41f28e0))
- multiple: update mocha wherever used ([620a8d2d17](https://github.com/mozilla/fxa/commit/620a8d2d17))
- deps: bump keyv from 4.3.0 to 4.3.2 ([b1c93b99a2](https://github.com/mozilla/fxa/commit/b1c93b99a2))
- deps: bump stripe from 9.8.0 to 9.10.0 ([8763e4a50b](https://github.com/mozilla/fxa/commit/8763e4a50b))
- fxa-profile-server: 4d19d3c210 chore(fxa-profile-server) remove mkdirp ([4d19d3c210](https://github.com/mozilla/fxa/commit/4d19d3c210))
- deps: bump app-store-server-api from 0.3.1 to 0.5.0 ([a6afcae20d](https://github.com/mozilla/fxa/commit/a6afcae20d))
- deps: bump hot-shots from 9.0.0 to 9.1.0 ([41e6b33f84](https://github.com/mozilla/fxa/commit/41e6b33f84))
- deps: bump @type-cacheable/core from 10.1.0 to 10.1.2 ([a135c596e9](https://github.com/mozilla/fxa/commit/a135c596e9))
- deps: bump jsdom from 19.0.0 to 20.0.0 ([93a3d15445](https://github.com/mozilla/fxa/commit/93a3d15445))

## 1.235.2

No changes.

## 1.235.1

No changes.

## 1.235.0

### New features

- auth: copy paypal name into stripe record ([3d6863455](https://github.com/mozilla/fxa/commit/3d6863455))

### Bug fixes

- auth: make unknown properties valid for support-panel route ([b999832bb](https://github.com/mozilla/fxa/commit/b999832bb))
- auth: Ignore errors with http status code below 500 ([a7a896d60](https://github.com/mozilla/fxa/commit/a7a896d60))
- auth: Reinstate token pruning ([f3ce91e3d](https://github.com/mozilla/fxa/commit/f3ce91e3d))
- email: Revise footer to add conditional for account finish setup ([1b1001ea2](https://github.com/mozilla/fxa/commit/1b1001ea2))

### Refactorings

- email: Revise cadReminderSecond email ([14c8a3654](https://github.com/mozilla/fxa/commit/14c8a3654))

### Other changes

- deps-dev: bump @storybook/addon-controls from 6.5.7 to 6.5.9 ([11e13f431](https://github.com/mozilla/fxa/commit/11e13f431))
- deps: bump emittery from 0.10.2 to 0.11.0 ([c3590aa9a](https://github.com/mozilla/fxa/commit/c3590aa9a))
- deps: bump @google-cloud/bigquery from 5.12.0 to 6.0.0 ([498f5c643](https://github.com/mozilla/fxa/commit/498f5c643))
- all: run TS compiler as part of test-many job ([ddba42afd](https://github.com/mozilla/fxa/commit/ddba42afd))
- deps: bump jwks-rsa from 2.1.1 to 2.1.4 ([3c45439d9](https://github.com/mozilla/fxa/commit/3c45439d9))
- deps: bump googleapis from 100.0.0 to 102.0.0 ([f7fca03da](https://github.com/mozilla/fxa/commit/f7fca03da))
- deps-dev: bump @storybook/addon-docs from 6.4.19 to 6.5.8 ([572794876](https://github.com/mozilla/fxa/commit/572794876))
- deps: bump stripe from 9.7.0 to 9.8.0 ([565840734](https://github.com/mozilla/fxa/commit/565840734))
- deps: bump stripe from 9.6.0 to 9.7.0 ([2aba5966a](https://github.com/mozilla/fxa/commit/2aba5966a))

## 1.234.2

### Bug fixes

- auth: Ignore errors with http status code below 500 ([e9c92aa8cd](https://github.com/mozilla/fxa/commit/e9c92aa8cd))

## 1.234.1

No changes.

## 1.234.0

### New features

- auth: only load support routes with stripeHelper active ([350ec08363](https://github.com/mozilla/fxa/commit/350ec08363))

### Bug fixes

- auth: Report actual error to Sentry ([4cd5240cd3](https://github.com/mozilla/fxa/commit/4cd5240cd3))
- fluent: update missing id to fix fluent error Because: ([7539c3f064](https://github.com/mozilla/fxa/commit/7539c3f064))

### Other changes

- deps-dev: bump @storybook/addon-controls from 6.4.19 to 6.5.7 ([0b0b991341](https://github.com/mozilla/fxa/commit/0b0b991341))
- fxa-auth-server: Disable error message truncation in tests Because: ([aca396adff](https://github.com/mozilla/fxa/commit/aca396adff))
- deps: bump @googlemaps/google-maps-services-js ([b2d8615475](https://github.com/mozilla/fxa/commit/b2d8615475))
- deps: bump keyv from 4.2.2 to 4.3.0 ([9ab27f5634](https://github.com/mozilla/fxa/commit/9ab27f5634))
- deps: bump hapi-swagger from 14.5.1 to 14.5.2 ([1a63747c01](https://github.com/mozilla/fxa/commit/1a63747c01))
- deps: bump stripe from 8.218.0 to 9.6.0 ([c3c36030ec](https://github.com/mozilla/fxa/commit/c3c36030ec))
- Swagger: Add Firefox Accounts OAuth Server API documenation to Swagger docs ([faa7924acf](https://github.com/mozilla/fxa/commit/faa7924acf))
- deps: bump @fluent/langneg from 0.6.1 to 0.6.2 ([4735f63bf0](https://github.com/mozilla/fxa/commit/4735f63bf0))
- db: Stop writing `tokenVerificationCode` value to db ([e4a337a93d](https://github.com/mozilla/fxa/commit/e4a337a93d))
- deps: bump convict from 6.2.2 to 6.2.3 ([0b915bbfa0](https://github.com/mozilla/fxa/commit/0b915bbfa0))
- dep: Upgrades joi, hapi-swagger and its plugins ([d970f293d3](https://github.com/mozilla/fxa/commit/d970f293d3))
- deps: bump p-retry from 4.6.2 to 5.1.1" ([30d91c2cf5](https://github.com/mozilla/fxa/commit/30d91c2cf5))

## 1.233.1

### Other changes

- deps: bump p-retry from 4.6.2 to 5.1.1" ([23b4849a4e](https://github.com/mozilla/fxa/commit/23b4849a4e))

## 1.233.0

### New features

- auth: create Apple notification handler ([8c2ec84e9b](https://github.com/mozilla/fxa/commit/8c2ec84e9b))
- fxa-auth-server: 123a585850 feat(fxa-auth-server) set display name from 3rd party auth data ([123a585850](https://github.com/mozilla/fxa/commit/123a585850))
- fxa-auth-server: 330e8fa93c feat(fxa-auth-server) set up new route ([330e8fa93c](https://github.com/mozilla/fxa/commit/330e8fa93c))
- devices: Add query param to allow client to filter idle devices ([686f3cd039](https://github.com/mozilla/fxa/commit/686f3cd039))
- auth: update /billing-and-subscriptions endpoint to include Apple IAP ([3c5928ebda](https://github.com/mozilla/fxa/commit/3c5928ebda))
- auth: add app store registration endpoint ([088cea0822](https://github.com/mozilla/fxa/commit/088cea0822))
- payments: rename downloadURL to successActionButtonURL ([e78475453b](https://github.com/mozilla/fxa/commit/e78475453b))
- third-party auth: Add UI with /create_password route for passwordless accounts ([9192ae82fb](https://github.com/mozilla/fxa/commit/9192ae82fb))
- payments: add Email Verification to Passwordless Flow Because: ([4ad86a4f9c](https://github.com/mozilla/fxa/commit/4ad86a4f9c))
- password: Add graphql mutation to support creating a new password ([d693ce671e](https://github.com/mozilla/fxa/commit/d693ce671e))
- auth: load capabilities from the payment config manager ([2001de33cf](https://github.com/mozilla/fxa/commit/2001de33cf))

### Bug fixes

- test: Fix broken reminders test ([4e26e11737](https://github.com/mozilla/fxa/commit/4e26e11737))
- swagger: Revise API docs for redocusaurus support ([ac4647ecd1](https://github.com/mozilla/fxa/commit/ac4647ecd1))
- apple: Generate JWT for client secret on each request ([3d3ea0acdb](https://github.com/mozilla/fxa/commit/3d3ea0acdb))
- auth: pass Product/Plan Metadata to Email Sender Because: ([2cae023e1d](https://github.com/mozilla/fxa/commit/2cae023e1d))

### Other changes

- deps: Upgrade hapi/joi dependency" ([68a45c436f](https://github.com/mozilla/fxa/commit/68a45c436f))
- 2a3c5bbef7 Upgrades joi, hapi-swagger and its plugins ([2a3c5bbef7](https://github.com/mozilla/fxa/commit/2a3c5bbef7))
- auth: add profile mock to tests Because: ([07da354180](https://github.com/mozilla/fxa/commit/07da354180))
- fxa-auth-server: 208ba8f585 Revert "feat(fxa-auth-server) 3rd party authentication sets default profile display name" ([208ba8f585](https://github.com/mozilla/fxa/commit/208ba8f585))
- auth: add space to alt text and underline Because: ([588226654f](https://github.com/mozilla/fxa/commit/588226654f))
- deps-dev: bump sass from 1.50.1 to 1.52.1 ([392301dfb0](https://github.com/mozilla/fxa/commit/392301dfb0))
- lint: Lint hidden .storybook/ directories ([0709d0ef79](https://github.com/mozilla/fxa/commit/0709d0ef79))
- deps: bump aws-sdk from 2.1120.0 to 2.1135.0 ([95bffbfbd7](https://github.com/mozilla/fxa/commit/95bffbfbd7))
- deps: bump grunt from 1.5.2 to 1.5.3 ([5c0afda1da](https://github.com/mozilla/fxa/commit/5c0afda1da))
- deps: bump @hapi/hoek from 9.3.0 to 10.0.0 ([23ec046a7b](https://github.com/mozilla/fxa/commit/23ec046a7b))
- deps: bump p-retry from 4.6.2 to 5.1.1 ([9b8a238890](https://github.com/mozilla/fxa/commit/9b8a238890))
- deps-dev: bump nodemon from 2.0.15 to 2.0.16 ([c86e9b274b](https://github.com/mozilla/fxa/commit/c86e9b274b))
- deps: bump jwks-rsa from 2.0.5 to 2.1.1 ([3372811252](https://github.com/mozilla/fxa/commit/3372811252))

## 1.232.5

No changes.

## 1.232.4

No changes.

## 1.232.3

No changes.

## 1.232.2

No changes.

## 1.232.1

No changes.

## 1.232.0

### New features

- auth: update capability service to query App Store purchases ([7da4966fe](https://github.com/mozilla/fxa/commit/7da4966fe))
- subscriptions: guess a language tag from plan metadata ([baf50fb9c](https://github.com/mozilla/fxa/commit/baf50fb9c))
- auth: stripe metadata expansion validate url Because: ([f9ecca1f7](https://github.com/mozilla/fxa/commit/f9ecca1f7))

### Bug fixes

- auth: populate ua info in session token for linked account session ([c3efeb3fa](https://github.com/mozilla/fxa/commit/c3efeb3fa))
- email: remove duplicate Fluent string payment-details ([95e2513dc](https://github.com/mozilla/fxa/commit/95e2513dc))
- auth: Invalid unblock code after swapping primary email ([04b1b44ea](https://github.com/mozilla/fxa/commit/04b1b44ea))
- auth: always broadcast stripe sub changes ([78a005f5c](https://github.com/mozilla/fxa/commit/78a005f5c))
- subscriptions: on upgrade use correct invoice line Because: ([44c8823f8](https://github.com/mozilla/fxa/commit/44c8823f8))
- mjml: Use `minifyOptions` instead of `minify` for mjml templates ([a55285db7](https://github.com/mozilla/fxa/commit/a55285db7))
- auth: fix collection prefix for iap ([a67190552](https://github.com/mozilla/fxa/commit/a67190552))
- swagger: import for .ts files, require for .js files ([15500ea8f](https://github.com/mozilla/fxa/commit/15500ea8f))
- swagger: SyntaxError: Cannot use import statement outside a module ([5a9cbcd1b](https://github.com/mozilla/fxa/commit/5a9cbcd1b))

### Other changes

- deps: bump cldr-core from 40.0.0 to 41.0.0 ([5f3e3d312](https://github.com/mozilla/fxa/commit/5f3e3d312))
- 32ef9df8d Remove extra characters from data-l10n-name ([32ef9df8d](https://github.com/mozilla/fxa/commit/32ef9df8d))
- f919c24b4 Fix group comments and apostrophes ([f919c24b4](https://github.com/mozilla/fxa/commit/f919c24b4))
- deps: bump google-auth-library from 7.14.1 to 8.0.2 ([15970de92](https://github.com/mozilla/fxa/commit/15970de92))
- d1fffc036 Addressing PR feedback ([d1fffc036](https://github.com/mozilla/fxa/commit/d1fffc036))
- admin-server,auth-server: Refactor to support querying account subscriptions from admin-server ([9a0add918](https://github.com/mozilla/fxa/commit/9a0add918))
- 4dd44112b import for .ts files ([4dd44112b](https://github.com/mozilla/fxa/commit/4dd44112b))

## 1.231.4

### Bug fixes

- auth: fix collection prefix for iap ([e94385574](https://github.com/mozilla/fxa/commit/e94385574))

## 1.231.3

### Bug fixes

- swagger: import for .ts files, require for .js files ([2dfd4b9fee](https://github.com/mozilla/fxa/commit/2dfd4b9fee))

### Other changes

- 1df877595c import for .ts files ([1df877595c](https://github.com/mozilla/fxa/commit/1df877595c))

## 1.231.2

No changes.

## 1.231.1

### Bug fixes

- swagger: SyntaxError: Cannot use import statement outside a module ([e6de4302f](https://github.com/mozilla/fxa/commit/e6de4302f))

## 1.231.0

### New features

- fxa-admin-panel: get diagnosticCode from event and add to bounce obj ([24e4b400c](https://github.com/mozilla/fxa/commit/24e4b400c))
- auth: set up App Store modules ([c4b55cc82](https://github.com/mozilla/fxa/commit/c4b55cc82))
- scripts: use redlock to prevent >1 instance of paypal-processor ([8adcdc07a](https://github.com/mozilla/fxa/commit/8adcdc07a))
- coupons: check coupons apply entire plan interval Because: ([70f47f3bd](https://github.com/mozilla/fxa/commit/70f47f3bd))
- auth: ensure customer currency is set when needed ([dc1b639a0](https://github.com/mozilla/fxa/commit/dc1b639a0))

### Bug fixes

- auth: delete Stub Account When Subscription Fails Because: ([a91426a97](https://github.com/mozilla/fxa/commit/a91426a97))
- auth: dont report error on deleted customers ([9eb6606e1](https://github.com/mozilla/fxa/commit/9eb6606e1))
- auth: wait for auth to avoid unhandled exc ([3c873328b](https://github.com/mozilla/fxa/commit/3c873328b))

### Other changes

- 012cbde2a Implement Swagger for API documentation ([012cbde2a](https://github.com/mozilla/fxa/commit/012cbde2a))
- Swagger API: Implement Swagger for API documentation" ([50107a9ff](https://github.com/mozilla/fxa/commit/50107a9ff))
- 869947242 Implement Swagger for API documentation ([869947242](https://github.com/mozilla/fxa/commit/869947242))
- deps: bump aws-sdk from 2.1116.0 to 2.1120.0 ([688c3bdc4](https://github.com/mozilla/fxa/commit/688c3bdc4))
- deps: bump @googlemaps/google-maps-services-js ([cb6b18f85](https://github.com/mozilla/fxa/commit/cb6b18f85))
- deps: bump luxon from 2.3.1 to 2.3.2 ([9f2956dc7](https://github.com/mozilla/fxa/commit/9f2956dc7))
- deps-dev: bump sass from 1.49.7 to 1.50.1 ([e8f94f63f](https://github.com/mozilla/fxa/commit/e8f94f63f))
- deps: bump grunt from 1.4.1 to 1.5.2 ([37611e619](https://github.com/mozilla/fxa/commit/37611e619))
- deps: bump keyv from 4.1.1 to 4.2.2 ([e97f7d782](https://github.com/mozilla/fxa/commit/e97f7d782))
- deps: bump stripe from 8.215.0 to 8.218.0 ([c2a45dee1](https://github.com/mozilla/fxa/commit/c2a45dee1))
- deps: bump aws-sdk from 2.1115.0 to 2.1116.0 ([61c44a934](https://github.com/mozilla/fxa/commit/61c44a934))
- deps: bump @googlemaps/google-maps-services-js ([f4dccc292](https://github.com/mozilla/fxa/commit/f4dccc292))
- deps: bump aws-sdk from 2.1110.0 to 2.1115.0 ([e6d1b72d0](https://github.com/mozilla/fxa/commit/e6d1b72d0))
- deps: bump p-retry from 4.6.1 to 5.1.0" ([a9f4f2ac2](https://github.com/mozilla/fxa/commit/a9f4f2ac2))
- deps: bump superagent from 7.1.1 to 7.1.2 ([2e3443574](https://github.com/mozilla/fxa/commit/2e3443574))

## 1.230.5

No changes.

## 1.230.4

### Other changes

- f4414856a2 Revert "Merge pull request #12403 from mozilla/fxa-4698-paypal-lock" ([f4414856a2](https://github.com/mozilla/fxa/commit/f4414856a2))

## 1.230.3

### Other changes

- deps: bump p-retry from 4.6.1 to 5.1.0" ([1c3f1107f1](https://github.com/mozilla/fxa/commit/1c3f1107f1))

## 1.230.2

No changes.

## 1.230.1

No changes.

## 1.230.0

### New features

- subscriptions: detach payment method when deleting customer ([e03adff808](https://github.com/mozilla/fxa/commit/e03adff808))
- scripts: use redlock to prevent >1 instance of paypal-processor ([8efb6aec89](https://github.com/mozilla/fxa/commit/8efb6aec89))
- subscriptions: Del customer location script (#12411) ([ce9e704d99](https://github.com/mozilla/fxa/commit/ce9e704d99))
- coupons: coupon detail api check valid promo (#12299) ([48cc6705c0](https://github.com/mozilla/fxa/commit/48cc6705c0))
- auth: upgrade stripe dependency ([7817e1c498](https://github.com/mozilla/fxa/commit/7817e1c498))
- subscriptions: add Firestore based config to plans ([b3ce441b98](https://github.com/mozilla/fxa/commit/b3ce441b98))

### Bug fixes

- auth: ignore already paid invoice errors ([6dfbd2a32b](https://github.com/mozilla/fxa/commit/6dfbd2a32b))
- auth: send Subscription Delete Email When User Deletes Fx Account Because: ([6e560b43a9](https://github.com/mozilla/fxa/commit/6e560b43a9))
- auth: repair imports for Logger/error ([269197ec6b](https://github.com/mozilla/fxa/commit/269197ec6b))
- auth: handle paypal refused errors ([041987b2f2](https://github.com/mozilla/fxa/commit/041987b2f2))
- subscriptions: no expand on payment detach (#12303) ([bacd13f120](https://github.com/mozilla/fxa/commit/bacd13f120))
- recovery-codes: Remove context.numberRemaining check in getGlobalTemplateValues ([c66633722f](https://github.com/mozilla/fxa/commit/c66633722f))
- tsconfig: Transpile email templates includes.ts files ([d9fb5d72ad](https://github.com/mozilla/fxa/commit/d9fb5d72ad))
- recovery-codes: Remove context.numberRemaining check in getGlobalTemplateValues ([51340d03de](https://github.com/mozilla/fxa/commit/51340d03de))
- mailer: mailer chainging timezone test (#12257) ([aeebc5fbbf](https://github.com/mozilla/fxa/commit/aeebc5fbbf))
- auth: update cached customer on customer.subscription.created ([f1dea10b18](https://github.com/mozilla/fxa/commit/f1dea10b18))
- auth: update cached customer on customer.subscription.created ([dca6218091](https://github.com/mozilla/fxa/commit/dca6218091))

### Refactorings

- auth: clean up paypal files into its own module ([4244f0900a](https://github.com/mozilla/fxa/commit/4244f0900a))

### Other changes

- auth: remove unused populate stripe script ([9b3f3df6e0](https://github.com/mozilla/fxa/commit/9b3f3df6e0))
- deps: bump grunt-contrib-concat from 2.0.0 to 2.1.0 ([839e85b147](https://github.com/mozilla/fxa/commit/839e85b147))
- subscriptions: remove route no longer in use ([6df5e99c82](https://github.com/mozilla/fxa/commit/6df5e99c82))
- coupons: add hiphen ([0034daf6f3](https://github.com/mozilla/fxa/commit/0034daf6f3))
- deps: bump i18n-iso-countries from 7.3.0 to 7.4.0 ([d84ac122be](https://github.com/mozilla/fxa/commit/d84ac122be))
- d3a092e95d Revisions based on feedback ([d3a092e95d](https://github.com/mozilla/fxa/commit/d3a092e95d))
- auth: Remove deprecated l10n code ([64d37f9a7d](https://github.com/mozilla/fxa/commit/64d37f9a7d))
- cb5f65f7d7 Remove verificationMethod - email-otp is only option: cb5f65f7d7 Remove verificationMethod - email-otp is only option ([cb5f65f7d7](https://github.com/mozilla/fxa/commit/cb5f65f7d7))
- 742106f75e Remove secondary email logic from /recovery_email/verify_code ([742106f75e](https://github.com/mozilla/fxa/commit/742106f75e))
- deps: bump moment from 2.29.1 to 2.29.2 ([baba755082](https://github.com/mozilla/fxa/commit/baba755082))
- docs: Update auth-server README around emails ([3c909fd382](https://github.com/mozilla/fxa/commit/3c909fd382))
- deps: bump aws-sdk from 2.1089.0 to 2.1110.0 ([cdd8fd3bb3](https://github.com/mozilla/fxa/commit/cdd8fd3bb3))
- 52fa6421cf Remove secondary email logic from /recovery_email/resend_code ([52fa6421cf](https://github.com/mozilla/fxa/commit/52fa6421cf))
- all: Change default sentry trace sample rate to 0 ([8b4079c665](https://github.com/mozilla/fxa/commit/8b4079c665))
- deps-dev: bump webpack-watch-files-plugin from 1.2.0 to 1.2.1 ([04288e0b19](https://github.com/mozilla/fxa/commit/04288e0b19))
- sms: Remove sms code (#12298) ([d697f20264](https://github.com/mozilla/fxa/commit/d697f20264))
- deps: bump p-retry from 4.6.1 to 5.1.0 ([d4d62b3b15](https://github.com/mozilla/fxa/commit/d4d62b3b15))
- deps: bump googleapis from 95.0.0 to 100.0.0 ([9e6f6b63d7](https://github.com/mozilla/fxa/commit/9e6f6b63d7))
- auth,profile,settings,shared: Remove AET ([37e57852a8](https://github.com/mozilla/fxa/commit/37e57852a8))
- deps: bump node-zendesk from 2.1.0 to 2.1.1 (#12305) ([97568efbc7](https://github.com/mozilla/fxa/commit/97568efbc7))
- deps-dev: bump @storybook/addon-controls from 6.4.18 to 6.4.19 (#12271) ([3d63cc215d](https://github.com/mozilla/fxa/commit/3d63cc215d))

## 1.229.2

### Other changes

- all: Change default sentry trace sample rate to 0 ([34cc815199](https://github.com/mozilla/fxa/commit/34cc815199))

## 1.229.1

### Bug fixes

- recovery-codes: Remove context.numberRemaining check in getGlobalTemplateValues ([c2b8dbec7a](https://github.com/mozilla/fxa/commit/c2b8dbec7a))
- auth: update cached customer on customer.subscription.created ([a5ca3ea98b](https://github.com/mozilla/fxa/commit/a5ca3ea98b))

## 1.229.0

### New features

- auth: add Coupon Duration Info to Invoice Emails Because: ([99b3300f8](https://github.com/mozilla/fxa/commit/99b3300f8))
- coupons: resub confirmation discount amount (#12237) ([028ad3dfe](https://github.com/mozilla/fxa/commit/028ad3dfe))
- auth: Add third party auth metrics (#12221) ([f4d13cf32](https://github.com/mozilla/fxa/commit/f4d13cf32))
- auth: add firestore stripe populator ([0c0934fb3](https://github.com/mozilla/fxa/commit/0c0934fb3))
- coupon: update info box for coupon type (#12187) ([2a4054cde](https://github.com/mozilla/fxa/commit/2a4054cde))
- auth: update payment method tax rates on payment change ([6720267ed](https://github.com/mozilla/fxa/commit/6720267ed))
- payments: update Manage Subscription Page to Reflect Discount Pricing (#12059) ([d7f9f0add](https://github.com/mozilla/fxa/commit/d7f9f0add))

### Bug fixes

- email: Use uppercase provider name in email (#12286) ([c8f5998b0](https://github.com/mozilla/fxa/commit/c8f5998b0))
- tsconfig: Transpile email templates includes.ts files ([5397b6a65](https://github.com/mozilla/fxa/commit/5397b6a65))
- mailer: mailer chainging timezone test (#12257) ([4cfc1e515](https://github.com/mozilla/fxa/commit/4cfc1e515))
- emails: remove more "download" language from emails ([fca0291f3](https://github.com/mozilla/fxa/commit/fca0291f3))
- emails: update download button to get started on sub welcome email ([ae336faee](https://github.com/mozilla/fxa/commit/ae336faee))
- content: include Product and Category in validate (#12195) ([87a1d08cc](https://github.com/mozilla/fxa/commit/87a1d08cc))
- subscriptions: remove promo codes from plans ([79b715c37](https://github.com/mozilla/fxa/commit/79b715c37))
- subscriptions: create customer for iap sub (#12164) ([ac80297f6](https://github.com/mozilla/fxa/commit/ac80297f6))

### Refactorings

- auth: Retire gettext string extraction, remove Mailer 'translator' dependence, new partials + section in Storybook ([d8fa74dd3](https://github.com/mozilla/fxa/commit/d8fa74dd3))

### Other changes

- all: d584a10bc maintenance(all) - Prepare for new sentry ([d584a10bc](https://github.com/mozilla/fxa/commit/d584a10bc))
- deps: bump @type-cacheable/core from 10.0.3 to 10.1.0 ([55388d48c](https://github.com/mozilla/fxa/commit/55388d48c))
- deps: bump @google-cloud/bigquery from 5.11.0 to 5.12.0 ([82c2d378e](https://github.com/mozilla/fxa/commit/82c2d378e))
- auth: Remove confusing / unneded config from OauthRedis constructor ([fdbe83fd8](https://github.com/mozilla/fxa/commit/fdbe83fd8))
- deps: bump nodemailer from 6.7.2 to 6.7.3 ([9ee3caac6](https://github.com/mozilla/fxa/commit/9ee3caac6))

## 1.228.7

### Bug fixes

- recovery-codes: Remove context.numberRemaining check in getGlobalTemplateValues ([c66633722f](https://github.com/mozilla/fxa/commit/c66633722f))
- tsconfig: Transpile email templates includes.ts files ([d9fb5d72ad](https://github.com/mozilla/fxa/commit/d9fb5d72ad))

## 1.228.6

### Bug fixes

- mailer: mailer chainging timezone test (#12257) ([aeebc5fbbf](https://github.com/mozilla/fxa/commit/aeebc5fbbf))

## 1.228.5

### Bug fixes

- auth: update cached customer on customer.subscription.created ([f1dea10b18](https://github.com/mozilla/fxa/commit/f1dea10b18))

## 1.228.4

### Bug fixes

- emails: remove more "download" language from emails ([503300b25](https://github.com/mozilla/fxa/commit/503300b25))

## 1.228.3

### Bug fixes

- emails: update download button to get started on sub welcome email ([865d623ef](https://github.com/mozilla/fxa/commit/865d623ef))

## 1.228.2

### Bug fixes

- subscriptions: remove promo codes from plans ([0b3dc3dab](https://github.com/mozilla/fxa/commit/0b3dc3dab))

### Other changes

- 12ea05171 Cherry pick squash for experimental dot releases v1.226.5 to v1.226.9 on train-226. These changes address issues with connection pool spiking and high latency on the attached clients route. ([12ea05171](https://github.com/mozilla/fxa/commit/12ea05171))

## 1.228.1

### Bug fixes

- subscriptions: create customer for iap sub (#12164) ([7c54513ac](https://github.com/mozilla/fxa/commit/7c54513ac))

## 1.228.0

### New features

- apple: Add Sign-in with Apple support (#12148) ([fa817cb37](https://github.com/mozilla/fxa/commit/fa817cb37))
- subscriptions: add config for cancel survey (#12114) ([49598b251](https://github.com/mozilla/fxa/commit/49598b251))
- auth: script to convert Stripe products/plans to Firestore docs (#12040) ([fd05f95de](https://github.com/mozilla/fxa/commit/fd05f95de))
- auth: trim whitespace off metadata ([c31ab3a91](https://github.com/mozilla/fxa/commit/c31ab3a91))

### Bug fixes

- auth: check paymentAttempts before returning a funding source error (#12130) ([a23d09ae6](https://github.com/mozilla/fxa/commit/a23d09ae6))
- auth: address TS errors in ProductConfig and PlanConfig classes ([7f42a868f](https://github.com/mozilla/fxa/commit/7f42a868f))
- auth: Broken l10n test (#12101) ([6ff2e3a8a](https://github.com/mozilla/fxa/commit/6ff2e3a8a))
- subscriptions: Duplicate charge on cvc fail (#12046) ([b5b385610](https://github.com/mozilla/fxa/commit/b5b385610))

### Refactorings

- emails: Move email template subjects/actions out of email.js ([f2a175ae8](https://github.com/mozilla/fxa/commit/f2a175ae8))

### Other changes

- deps: bump @google-cloud/bigquery from 5.10.0 to 5.11.0 (#12136) ([11787472b](https://github.com/mozilla/fxa/commit/11787472b))
- deps-dev: bump chai from 4.3.4 to 4.3.6 (#12091) ([df319de11](https://github.com/mozilla/fxa/commit/df319de11))
- deps: bump @googlemaps/google-maps-services-js from 3.3.8 to 3.3.10 (#12122) ([c726f757d](https://github.com/mozilla/fxa/commit/c726f757d))
- deps: bump aws-sdk from 2.1082.0 to 2.1089.0 (#12117) ([014363918](https://github.com/mozilla/fxa/commit/014363918))
- deps: bump googleapis from 92.0.0 to 95.0.0 (#12107) ([89944dec6](https://github.com/mozilla/fxa/commit/89944dec6))

## 1.227.1

No changes.

## 1.227.0

### New features

- auth: get cards with card API ([c69f52977](https://github.com/mozilla/fxa/commit/c69f52977))
- google: return provider user id to the oauth client (#11999) ([aea4cbe07](https://github.com/mozilla/fxa/commit/aea4cbe07))
- auth: add Coupon Info to Subsequent Invoice Emails (#11979) ([1ea1fc449](https://github.com/mozilla/fxa/commit/1ea1fc449))
- auth: add metadata from firestore ([c3f60596f](https://github.com/mozilla/fxa/commit/c3f60596f))
- coupon: support coupon on sub manage page (#11890) ([3c23dde9f](https://github.com/mozilla/fxa/commit/3c23dde9f))

### Bug fixes

- subscriptions: sub invoice api 500 on cancel (#12072) ([68b34a632](https://github.com/mozilla/fxa/commit/68b34a632))
- emails: add logger to Container for email notifications script ([b392b498d](https://github.com/mozilla/fxa/commit/b392b498d))
- email: remove pooling to fix delivery failures (#12058) ([2d657eb82](https://github.com/mozilla/fxa/commit/2d657eb82))
- coupon: In email hide pay method on 0 invoice (#12038) ([bafa58d9e](https://github.com/mozilla/fxa/commit/bafa58d9e))
- auth-server: Time isn't always passed into the templates (#11985) ([1507eefe3](https://github.com/mozilla/fxa/commit/1507eefe3))
- subscriptions: send email and reduce errors for SCA flow (#12014) ([8d059b4e9](https://github.com/mozilla/fxa/commit/8d059b4e9))
- subscriptions: ignore deleted customers on payment method updates (#11983) ([6be401fc6](https://github.com/mozilla/fxa/commit/6be401fc6))

### Refactorings

- auth-server: Remove old renderer, separate FluentLocalizer into Renderer and Localizer (#11962) ([858e1dfd5](https://github.com/mozilla/fxa/commit/858e1dfd5))

### Other changes

- deps: bump luxon from 2.3.0 to 2.3.1 (#12043) ([a9564a092](https://github.com/mozilla/fxa/commit/a9564a092))
- #12061: 85c20f658 Train 226.3 (#12061) ([85c20f658](https://github.com/mozilla/fxa/commit/85c20f658))
- deps: bump aws-sdk from 2.1068.0 to 2.1081.0 (#12026) ([7b305a3cd](https://github.com/mozilla/fxa/commit/7b305a3cd))
- deps-dev: bump @storybook/addon-docs from 6.4.18 to 6.4.19 (#12033) ([10c06113e](https://github.com/mozilla/fxa/commit/10c06113e))
- subscriptions: send email and reduce errors for SCA flow" (#12020) ([2ff71bf99](https://github.com/mozilla/fxa/commit/2ff71bf99))
- deps: bump stripe from 8.202.0 to 8.203.0 (#11988) ([5df09116f](https://github.com/mozilla/fxa/commit/5df09116f))
- emails: update finish setup email with more generic language (#11977) ([3f39572f8](https://github.com/mozilla/fxa/commit/3f39572f8))

## 1.226.4

### Bug fixes

- emails: add logger to Container for email notifications script ([ff53dd0ea](https://github.com/mozilla/fxa/commit/ff53dd0ea))

## 1.226.3

### Bug fixes

- email: remove pooling to fix delivery failures (#12058) (#12060) ([1657741b7](https://github.com/mozilla/fxa/commit/1657741b7))

## 1.226.2

### Other changes

- shared,auth,admin: Refactor attached-clients so routines can be shared with admin panel (#11817)" ([4cbc3bce3](https://github.com/mozilla/fxa/commit/4cbc3bce3))
- auth: Fixes build error in CI. (#11903)" ([8b0d09690](https://github.com/mozilla/fxa/commit/8b0d09690))
- #11915: 9f29305b3 Revert "Issues/11091 (#11915)" ([9f29305b3](https://github.com/mozilla/fxa/commit/9f29305b3))

## 1.226.1

### Bug fixes

- subscriptions: send email and reduce errors for SCA flow ([f1e45db2d](https://github.com/mozilla/fxa/commit/f1e45db2d))

## 1.226.0

### New features

- auth-server: FXA-4319 - add email template to notify user has connected Google auth (#11870) ([b039acee0](https://github.com/mozilla/fxa/commit/b039acee0))
- mailer: Add maxConnection and maxMessages env vars, re-enable isMetricsEnabled oauth client db calls ([6028093a0](https://github.com/mozilla/fxa/commit/6028093a0))
- google: Add backend support to disconnect goolge linked account ([97686e415](https://github.com/mozilla/fxa/commit/97686e415))
- payments: remove Coupons Feature Flag (#11576) ([02aeb5165](https://github.com/mozilla/fxa/commit/02aeb5165))

### Bug fixes

- auth-server: time is not expressed based on user's location in emails (#11954) ([81cdbae32](https://github.com/mozilla/fxa/commit/81cdbae32))
- auth-server: FXA-4523 - revise email template stories (#11831) ([c49a570f1](https://github.com/mozilla/fxa/commit/c49a570f1))
- subscriptions: stop cancellation email on failed PayPal payment (#11871) ([b829f1566](https://github.com/mozilla/fxa/commit/b829f1566))
- google: Delete linked accounts when user deletes FxA account ([920fc8eb8](https://github.com/mozilla/fxa/commit/920fc8eb8))
- subscriptions: allow zero dollar invoices (#11719) ([058a7fd07](https://github.com/mozilla/fxa/commit/058a7fd07))
- emails: Add conditional around payment method ([3fd6197ad](https://github.com/mozilla/fxa/commit/3fd6197ad))

### Refactorings

- auth: Remove MJML feature flags, remove verifySecondary ## 1.225.3 logic, remove old templates (#11862) ([31061b071](https://github.com/mozilla/fxa/commit/31061b071))

### Other changes

- subscriptions: send email for expired card (#11933) ([e413f8e9a](https://github.com/mozilla/fxa/commit/e413f8e9a))
- #11915: e6531d51c Issues/11091 (#11915) ([e6531d51c](https://github.com/mozilla/fxa/commit/e6531d51c))
- deps-dev: bump sass from 1.48.0 to 1.49.7 (#11945) ([d610b5664](https://github.com/mozilla/fxa/commit/d610b5664))
- deps: bump i18n-iso-countries from 7.2.0 to 7.3.0 (#11946) ([8892915d0](https://github.com/mozilla/fxa/commit/8892915d0))
- deps: bump stripe from 8.200.0 to 8.202.0 ([6c2767c02](https://github.com/mozilla/fxa/commit/6c2767c02))
- deps-dev: bump @storybook/addon-controls from 6.4.14 to 6.4.18 ([7f6c49d0f](https://github.com/mozilla/fxa/commit/7f6c49d0f))
- auth: Fixes build error in CI. (#11903) ([7b1c62eaa](https://github.com/mozilla/fxa/commit/7b1c62eaa))
- shared,auth,admin: Refactor attached-clients so routines can be shared with admin panel (#11817) ([6b89206ff](https://github.com/mozilla/fxa/commit/6b89206ff))
- deps: bump keyv from 4.1.0 to 4.1.1 ([cacc24d8b](https://github.com/mozilla/fxa/commit/cacc24d8b))
- deps: bump @type-cacheable/ioredis-adapter from 10.0.2 to 10.0.3 ([b084b1152](https://github.com/mozilla/fxa/commit/b084b1152))
- deps-dev: bump @storybook/addon-docs from 6.4.14 to 6.4.18 (#11858) ([1a199eb16](https://github.com/mozilla/fxa/commit/1a199eb16))
- deps: bump aws-sdk from 2.1063.0 to 2.1068.0 (#11853) ([99e20de89](https://github.com/mozilla/fxa/commit/99e20de89))
- deps: bump keyv from 4.0.5 to 4.1.0 (#11821) ([46b73d951](https://github.com/mozilla/fxa/commit/46b73d951))

## 1.225.3

### New features

- mailer: Add maxConnection and maxMessages env vars, re-enable isMetricsEnabled oauth client db calls (#11951) ([5b0b452aa](https://github.com/mozilla/fxa/commit/5b0b452aa))

## 1.225.2

### Bug fixes

- auth-server: subplat email images are at 100% width using the Mail app (#11840) ([03e921450](https://github.com/mozilla/fxa/commit/03e921450))
- auth: allow price_id in response ([24748cc43](https://github.com/mozilla/fxa/commit/24748cc43))

## 1.225.1

### New features

- auth: use capabilities of subscribed price, not all prices ([869d2aff1](https://github.com/mozilla/fxa/commit/869d2aff1))

### Bug fixes

- auth: Temporarily disable isMetricsEnabled db calls for oauth clients (#11835) ([b428772cd](https://github.com/mozilla/fxa/commit/b428772cd))
- auth-server: fix broken link for Mozilla Support (#11828) ([28df7da0e](https://github.com/mozilla/fxa/commit/28df7da0e))

## 1.225.0

### New features

- auth: update API to Return Coupon Details (#11654) ([f667ebbbf](https://github.com/mozilla/fxa/commit/f667ebbbf))
- config: Add options for mysql pool queue limit (#11803) ([edeb45275](https://github.com/mozilla/fxa/commit/edeb45275))
- goog: Add google auth frontend login screens (#11743) ([9fd866c8c](https://github.com/mozilla/fxa/commit/9fd866c8c))
- subscriptions: add feature flag for Firestore product configs ([7b1db3573](https://github.com/mozilla/fxa/commit/7b1db3573))
- auth-server: Don't include email UTM params for metrics opted out users (#11706) ([30be98e73](https://github.com/mozilla/fxa/commit/30be98e73))
- auth: dont report location set on repeat customers ([fb85d8806](https://github.com/mozilla/fxa/commit/fb85d8806))
- auth: update webhook for payment method ([8cd7c5560](https://github.com/mozilla/fxa/commit/8cd7c5560))

### Bug fixes

- auth-server: Payment method not displayed for subscriptionSubsequentInvoice template (#11797) ([520e295b4](https://github.com/mozilla/fxa/commit/520e295b4))
- auth-server: different order of text in plaintext version of `postRemoveAccountRecovery` (#11777) ([acdbb3fe8](https://github.com/mozilla/fxa/commit/acdbb3fe8))
- subscriptions: match expandable resource type to Stripe obj type list (#11787) ([7666a5143](https://github.com/mozilla/fxa/commit/7666a5143))
- subscriptions: fix product/plan webhook event handling (#11760) ([9025b9bea](https://github.com/mozilla/fxa/commit/9025b9bea))
- admin-panel: update resp validation for Play subs (#11723) ([9e03bea12](https://github.com/mozilla/fxa/commit/9e03bea12))
- auth: check for unique state on multiple results from Geocoding API (#11704) ([9890a4cb6](https://github.com/mozilla/fxa/commit/9890a4cb6))
- subscriptions: stop retry w/ old invoice ## 1.224.4 stop sending welcome email (#11701) ([ff42c85f6](https://github.com/mozilla/fxa/commit/ff42c85f6))
- subscriptions: delete customer when deleting stub acct ([778cbdb87](https://github.com/mozilla/fxa/commit/778cbdb87))
- auth-server: add Privacy notice link to subplat emails with multiple products (#11681) ([0a7336fe4](https://github.com/mozilla/fxa/commit/0a7336fe4))
- subscriptions: use latest stripe object fix Because: ([e41064f9a](https://github.com/mozilla/fxa/commit/e41064f9a))
- auth-server: revise `images` partial (#11679) ([75f63c6be](https://github.com/mozilla/fxa/commit/75f63c6be))
- auth-server: add mjml test for `subscriptionFirstInvoiceDiscount` (#11664) ([9ed1d030e](https://github.com/mozilla/fxa/commit/9ed1d030e))

### Other changes

- deps: bump mjml from 4.11.0 to 4.12.0 (#11813) ([1e9cd3cf9](https://github.com/mozilla/fxa/commit/1e9cd3cf9))
- deps: bump @googlemaps/google-maps-services-js ([d4c9f01c5](https://github.com/mozilla/fxa/commit/d4c9f01c5))
- deps-dev: bump mjml-browser from 4.11.0 to 4.12.0 (#11766) ([baaf7b550](https://github.com/mozilla/fxa/commit/baaf7b550))
- content: add Product and Category Support field for Zendesk integration (#11749) ([bf8b1f6af](https://github.com/mozilla/fxa/commit/bf8b1f6af))
- deps: bump aws-sdk from 2.1057.0 to 2.1063.0 (#11755) ([3df6d7ac1](https://github.com/mozilla/fxa/commit/3df6d7ac1))
- deps: bump stripe from 8.199.0 to 8.200.0 (#11754) ([7cbfa1981](https://github.com/mozilla/fxa/commit/7cbfa1981))
- deps-dev: bump @storybook/addon-controls from 6.4.12 to 6.4.14 (#11715) ([6b5ab2355](https://github.com/mozilla/fxa/commit/6b5ab2355))
- deps: bump stripe from 8.198.0 to 8.199.0 (#11711) ([cec185e52](https://github.com/mozilla/fxa/commit/cec185e52))
- deps-dev: bump nock from 13.2.1 to 13.2.2 (#11712) ([50634bea9](https://github.com/mozilla/fxa/commit/50634bea9))
- deps-dev: bump @storybook/addon-docs from 6.4.13 to 6.4.14 (#11713) ([6e14ce933](https://github.com/mozilla/fxa/commit/6e14ce933))
- deps: bump superagent from 6.1.0 to 7.1.1 (#11692) ([d4ad6314c](https://github.com/mozilla/fxa/commit/d4ad6314c))
- deps: bump @googlemaps/google-maps-services-js from 3.3.5 to 3.3.6 (#11676) ([72e8618f9](https://github.com/mozilla/fxa/commit/72e8618f9))
- deps: bump @type-cacheable/core from 10.0.2 to 10.0.3 (#11672) ([f1d76a53e](https://github.com/mozilla/fxa/commit/f1d76a53e))
- deps-dev: bump @storybook/addon-docs from 6.3.12 to 6.4.13 (#11673) ([3319b4d25](https://github.com/mozilla/fxa/commit/3319b4d25))
- deps: bump @google-cloud/bigquery from 5.9.3 to 5.10.0 ([b2448cace](https://github.com/mozilla/fxa/commit/b2448cace))
- deps: bump stripe from 8.195.0 to 8.198.0 (#11662) ([6d1184041](https://github.com/mozilla/fxa/commit/6d1184041))

## 1.224.4

### Bug fixes

- subscriptions: s/snake/camel case for Stripe resource names ([19b8cb91c](https://github.com/mozilla/fxa/commit/19b8cb91c))

## 1.224.3

### Bug fixes

- subscriptions: match expandable resource type to Stripe obj type list (#11787) ([cfee14c47](https://github.com/mozilla/fxa/commit/cfee14c47))

## 1.224.2

### New features

- auth: dont report location set on repeat customers ([46b3a543d](https://github.com/mozilla/fxa/commit/46b3a543d))

### Bug fixes

- auth: check for unique state on multiple results from Geocoding API (#11704) ([65d6a26f1](https://github.com/mozilla/fxa/commit/65d6a26f1))
- subscriptions: fix product/plan webhook event handling (#11760) ([629940b25](https://github.com/mozilla/fxa/commit/629940b25))
- subscriptions: stop retry w/ old invoice ## 1.224.1 stop sending welcome email (#11701) ([dc01d558f](https://github.com/mozilla/fxa/commit/dc01d558f))
- auth: Copy 'public' to dist, don't load non-existent Fluent bundles, Fluent strategy tweak (#11753) ([de74d2a65](https://github.com/mozilla/fxa/commit/de74d2a65))
- auth-server: wrong apostrophe in plaintext of `subscriptionAccountReminderFirst` (#11742) ([4820cc0b9](https://github.com/mozilla/fxa/commit/4820cc0b9))
- auth-server: `subscriptionAccountFinishSetup` has some strings in purple (#11769) ([3a9d940f0](https://github.com/mozilla/fxa/commit/3a9d940f0))
- auth-server: wrong HTML version displayed for verifyLoginCode template (#11697) ([7cfe9b1fb](https://github.com/mozilla/fxa/commit/7cfe9b1fb))

## 1.224.1

### Bug fixes

- subscriptions: delete customer when deleting stub acct ([d728aa01d](https://github.com/mozilla/fxa/commit/d728aa01d))
- auth-server: add Privacy notice link to subplat emails with multiple products (#11681) ([e7b15e878](https://github.com/mozilla/fxa/commit/e7b15e878))
- auth-server: revised test ([1092eaf35](https://github.com/mozilla/fxa/commit/1092eaf35))
- auth-server: revise `images` partial ([ed77d952e](https://github.com/mozilla/fxa/commit/ed77d952e))
- subscriptions: use latest stripe object fix Because: ([d38abf998](https://github.com/mozilla/fxa/commit/d38abf998))

## 1.224.0

### New features

- auth: add one-off script to update customer locations in Stripe (#11628) ([b5adb432f](https://github.com/mozilla/fxa/commit/b5adb432f))
- auth: test cleanup ([a0323420c](https://github.com/mozilla/fxa/commit/a0323420c))
- auth: use latest stripe object with proper invoice close ([c9c2515f8](https://github.com/mozilla/fxa/commit/c9c2515f8))
- services: remove fxa-auth-db-mysql, fxa-email-event-proxy, and fxa-email-service ([50e124b51](https://github.com/mozilla/fxa/commit/50e124b51))
- google: Add backend support for google auth (#11499) ([643c12606](https://github.com/mozilla/fxa/commit/643c12606))
- subscriptions: save promo code to subscription metadata (#11595) ([fe749ba9e](https://github.com/mozilla/fxa/commit/fe749ba9e))
- auth: followup cleanup for FXA-4356 ([c8e71980f](https://github.com/mozilla/fxa/commit/c8e71980f))
- auth: add coupon validation ([28ed143af](https://github.com/mozilla/fxa/commit/28ed143af))

### Bug fixes

- auth-server: localize image alt text (#11579) ([c63244579](https://github.com/mozilla/fxa/commit/c63244579))
- auth-server: wrong email title - verifyLogin template (#11645) ([738e8ddc5](https://github.com/mozilla/fxa/commit/738e8ddc5))
- auth-server: add mjml test for `subscriptionFirstInvoiceDiscount` (#11630) ([ed08fc906](https://github.com/mozilla/fxa/commit/ed08fc906))
- emails: use static l10n-ids in email templates ([3b71771de](https://github.com/mozilla/fxa/commit/3b71771de))
- auth-server: small difference between plaintext and HTML (#11594) ([6d96ee976](https://github.com/mozilla/fxa/commit/6d96ee976))
- auth-server: updated template to match old email template (#11599) ([bb3b96fd4](https://github.com/mozilla/fxa/commit/bb3b96fd4))
- email: Storybook fixes for invoice discount (#11606) ([2f2cf02a0](https://github.com/mozilla/fxa/commit/2f2cf02a0))
- auth-server: Legal and Privacy links are not displayed in the plaintext version of the templates (#11549) ([4bfdcf248](https://github.com/mozilla/fxa/commit/4bfdcf248))
- email: lower the maxMessages sent via nodemailer before creating a new connection ([3faeca26c](https://github.com/mozilla/fxa/commit/3faeca26c))
- ts: fix auth-server TS errors (#11544) ([473348479](https://github.com/mozilla/fxa/commit/473348479))
- subscriptions: do addr lookup for only US and CA (#11542) ([8eb9cac13](https://github.com/mozilla/fxa/commit/8eb9cac13))
- auth: setup appconfig where needed for scripts ([e568035aa](https://github.com/mozilla/fxa/commit/e568035aa))

### Other changes

- deps-dev: bump @storybook/html from 6.3.12 to 6.3.13 (#11633) ([68baeca29](https://github.com/mozilla/fxa/commit/68baeca29))
- auth-server: add mjml test for `subscriptionFirstInvoiceDiscount` (#11630)" ([0c25e457a](https://github.com/mozilla/fxa/commit/0c25e457a))
- deps: bump ajv from 6.12.6 to 8.9.0 (#11640)" ([1417149bd](https://github.com/mozilla/fxa/commit/1417149bd))
- deps: bump ajv from 6.12.6 to 8.9.0 (#11640) ([3b043eb56](https://github.com/mozilla/fxa/commit/3b043eb56))
- deps: bump aws-sdk from 2.1048.0 to 2.1057.0 (#11634) ([dbc9376b2](https://github.com/mozilla/fxa/commit/dbc9376b2))
- deps-dev: bump sass from 1.46.0 to 1.48.0 (#11620) ([e80eca3b6](https://github.com/mozilla/fxa/commit/e80eca3b6))
- deps-dev: bump @storybook/addon-controls from 6.3.12 to 6.4.12 (#11602) ([af79f5d55](https://github.com/mozilla/fxa/commit/af79f5d55))
- auth: make customer address format consistent ([af27813c0](https://github.com/mozilla/fxa/commit/af27813c0))
- deps: switch from git to https for deps (#11587) ([c1f0a3682](https://github.com/mozilla/fxa/commit/c1f0a3682))
- deps: bump @google-cloud/firestore from 5.0.1 to 5.0.2 (#11570) ([6cf6924f4](https://github.com/mozilla/fxa/commit/6cf6924f4))
- deps: bump keyv from 4.0.4 to 4.0.5 (#11569) ([efa100f25](https://github.com/mozilla/fxa/commit/efa100f25))
- deps-dev: bump sass from 1.45.1 to 1.46.0 (#11550) ([b71db1acd](https://github.com/mozilla/fxa/commit/b71db1acd))
- auth: Don't fail when l10n id is missing from en bundle (#11530) ([a864cbc4d](https://github.com/mozilla/fxa/commit/a864cbc4d))
- auth: Don't fail when l10n id is missing from en bundle (#11522)" (#11526) ([2427bb505](https://github.com/mozilla/fxa/commit/2427bb505))
- auth: Don't fail when l10n id is missing from en bundle (#11522) ([2ea691e2b](https://github.com/mozilla/fxa/commit/2ea691e2b))

## 1.223.2

### New features

- subscriptions: save promo code to subscription metadata (#11595) ([6b376c56e](https://github.com/mozilla/fxa/commit/6b376c56e))

### Bug fixes

- email: lower the maxMessages sent via nodemailer before creating a new connection ([c909fde86](https://github.com/mozilla/fxa/commit/c909fde86))

### Other changes

- auth: make customer address format consistent ([3a419bd0b](https://github.com/mozilla/fxa/commit/3a419bd0b))
- deps: switch from git to https for deps (#11587) ([2611a980d](https://github.com/mozilla/fxa/commit/2611a980d))

## 1.223.1

### Bug fixes

- ts: fix auth-server TS errors (#11544) ([8dc88f1fa](https://github.com/mozilla/fxa/commit/8dc88f1fa))
- subscriptions: do addr lookup for only US and CA (#11542) ([efe6c3321](https://github.com/mozilla/fxa/commit/efe6c3321))
- auth: setup appconfig where needed for scripts ([2796d38db](https://github.com/mozilla/fxa/commit/2796d38db))

### Other changes

- auth: Don't fail when l10n id is missing from en bundle (#11530) ([262116b8e](https://github.com/mozilla/fxa/commit/262116b8e))

## 1.223.0

### New features

- coupons: add discount to 1st invoice email (#11503) ([a1289ee23](https://github.com/mozilla/fxa/commit/a1289ee23))
- auth: add helper to determine the best location for existing Pa… (#11492) ([853eef1b7](https://github.com/mozilla/fxa/commit/853eef1b7))
- subscriptions: create subs with promo codes (#11474) ([614061b20](https://github.com/mozilla/fxa/commit/614061b20))
- auth: 397c59068 feat(auth) - Phaseout mjml auth server (#11482) ([397c59068](https://github.com/mozilla/fxa/commit/397c59068))
- payments: update requests to include coupon code (#11469) ([6a82bba8a](https://github.com/mozilla/fxa/commit/6a82bba8a))
- subscriptions: set customer location with payment info (#11490) ([e500c261a](https://github.com/mozilla/fxa/commit/e500c261a))

### Bug fixes

- auth-server: Text difference in postVerifySecondary template (#11514) ([2efeecd52](https://github.com/mozilla/fxa/commit/2efeecd52))
- auth-server: subject for 2FA email template is different (#11459) ([c1699e78e](https://github.com/mozilla/fxa/commit/c1699e78e))
- auth-server: misplaced text in emails (#11405) ([e36cb6236](https://github.com/mozilla/fxa/commit/e36cb6236))
- subscriptions: update a payment method webhook event type (#11431) ([85ce4e5c2](https://github.com/mozilla/fxa/commit/85ce4e5c2))
- scripts: add new deps to delete acct script (#11443) ([3b45ef0f7](https://github.com/mozilla/fxa/commit/3b45ef0f7))
- scripts: add deps and fix route init for delete acct script (#11424) ([a53d4549a](https://github.com/mozilla/fxa/commit/a53d4549a))

### Other changes

- auth: 6d7b18763 bug(auth) - Button text missing in email templates (#11462) ([6d7b18763](https://github.com/mozilla/fxa/commit/6d7b18763))
- deps: bump luxon from 2.2.0 to 2.3.0 (#11496) ([c79ca4d19](https://github.com/mozilla/fxa/commit/c79ca4d19))
- deps: bump google-libphonenumber from 3.2.25 to 3.2.26 (#11486) ([071ab9a12](https://github.com/mozilla/fxa/commit/071ab9a12))
- deps: bump @fluent/langneg from 0.5.2 to 0.6.1 (#11477) ([67057664c](https://github.com/mozilla/fxa/commit/67057664c))
- deps: bump @googlemaps/google-maps-services-js from 3.3.4 to 3.3.5 (#11464) ([1d549e2ef](https://github.com/mozilla/fxa/commit/1d549e2ef))
- deps: bump aws-sdk from 2.1046.0 to 2.1048.0 (#11456) ([336f4de77](https://github.com/mozilla/fxa/commit/336f4de77))
- deps: bump @fluent/bundle from 0.17.0 to 0.17.1 (#11454) ([aaa3446c9](https://github.com/mozilla/fxa/commit/aaa3446c9))
- deps: bump stripe from 8.194.0 to 8.195.0 (#11451) ([b13aa1326](https://github.com/mozilla/fxa/commit/b13aa1326))
- deps: bump ioredis from 4.28.0 to 4.28.2 (#11449) ([5577e08e4](https://github.com/mozilla/fxa/commit/5577e08e4))
- deps: bump @fluent/dom from 0.7.0 to 0.8.1 (#11436) ([e8c94183b](https://github.com/mozilla/fxa/commit/e8c94183b))

## 1.222.0

### New features

- subscriptions: set customer location w/ payment info (#11393) ([404a97f61](https://github.com/mozilla/fxa/commit/404a97f61))
- auth: convert downloadSubscription email templates ([cce459384](https://github.com/mozilla/fxa/commit/cce459384))
- auth-server: convert subscriptionFailedPaymentsCancellation ([f05f28449](https://github.com/mozilla/fxa/commit/f05f28449))
- auth-server: convert `subscriptionRenewalReminder` (#11403) ([b241f4a98](https://github.com/mozilla/fxa/commit/b241f4a98))
- auth-server: convert `subscriptionAccountReminderSecond` (#11404) ([118b21763](https://github.com/mozilla/fxa/commit/118b21763))
- auth-server: convert `subscriptionAccountReminderFirst` (#11390) ([5366e748b](https://github.com/mozilla/fxa/commit/5366e748b))
- auth-server: convert `subscriptionAccountFinishSetup` (#11367) ([2c1886813](https://github.com/mozilla/fxa/commit/2c1886813))
- auth: add ip geo data when it matches billing country for paypal (#11377) ([367c31885](https://github.com/mozilla/fxa/commit/367c31885))
- fxa-shared: Allows sentry events for critical endpoints to be 'tagged' as such. Because: ([6abd9bd3e](https://github.com/mozilla/fxa/commit/6abd9bd3e))
- subscriptions: return location data from zip (#11196) ([879ccf4c8](https://github.com/mozilla/fxa/commit/879ccf4c8))
- auth-server: convert `subscriptionSubsequentInvoice` (#11354) ([b201f3215](https://github.com/mozilla/fxa/commit/b201f3215))
- event-broker: wire up events from auth-server through event-broker to webhooks in local dev ([dfb1cd951](https://github.com/mozilla/fxa/commit/dfb1cd951))
- auth-server: convert `subscriptionsPaymentProviderCancelled` (#11343) ([47f185371](https://github.com/mozilla/fxa/commit/47f185371))
- auth-server: convert `subscriptionFirstInvoice` (#11323) ([5738daa45](https://github.com/mozilla/fxa/commit/5738daa45))
- db: add emailTypeId column to emailBounces, start recording templates on bounces, display in admin panel ([12affe682](https://github.com/mozilla/fxa/commit/12affe682))
- auth-server: convert `subscriptionPaymentProviderCancelled` (#11324) ([3597631df](https://github.com/mozilla/fxa/commit/3597631df))
- auth-server: convert `subscriptionPaymentFailed` (#11301) ([e733db7b4](https://github.com/mozilla/fxa/commit/e733db7b4))
- auth: add coupon to new sub api ([de9b826f1](https://github.com/mozilla/fxa/commit/de9b826f1))
- auth-server: convert `subscriptionCancellation` (#11282) ([29bb22074](https://github.com/mozilla/fxa/commit/29bb22074))
- auth-server: convert `subscriptionDowngrade` (#11290) ([40e491a42](https://github.com/mozilla/fxa/commit/40e491a42))
- auth: add invoice preview route ([883668335](https://github.com/mozilla/fxa/commit/883668335))

### Bug fixes

- auth-server: text in plain version of postVerifySecondary template (#11410) ([06da37a94](https://github.com/mozilla/fxa/commit/06da37a94))
- subscriptions: use ip only customs check on invoicePreview (#11414) ([e28b4c00d](https://github.com/mozilla/fxa/commit/e28b4c00d))
- auth-server: revised strings for brand names (#11375) ([f04d0bee9](https://github.com/mozilla/fxa/commit/f04d0bee9))
- settings: add confirm recovery code modal Because: ([03ff9f476](https://github.com/mozilla/fxa/commit/03ff9f476))
- auth: fix location optional ([805c1e594](https://github.com/mozilla/fxa/commit/805c1e594))
- auth-server: revise emails to update apostrophes (#11297) ([786fd512d](https://github.com/mozilla/fxa/commit/786fd512d))
- auth: handle firestore play fetch error ([a6cad6793](https://github.com/mozilla/fxa/commit/a6cad6793))

### Other changes

- auth-server: Add 'merge-ftl' to 'storybook-mjml' command ([e130e94fc](https://github.com/mozilla/fxa/commit/e130e94fc))
- deps: bump i18n-iso-countries from 7.1.0 to 7.2.0 (#11397) ([aaf0bc2c2](https://github.com/mozilla/fxa/commit/aaf0bc2c2))
- deps: bump @sentry/integrations from 6.15.0 to 6.16.1 ([032efbdbe](https://github.com/mozilla/fxa/commit/032efbdbe))
- deps-dev: bump sass from 1.45.0 to 1.45.1 ([0696a28f2](https://github.com/mozilla/fxa/commit/0696a28f2))
- auth: Fix second verification reminder email ([56fb3f7de](https://github.com/mozilla/fxa/commit/56fb3f7de))
- deps: bump @googlemaps/google-maps-services-js from 3.3.3 to 3.3.4 (#11383) ([f4e060b13](https://github.com/mozilla/fxa/commit/f4e060b13))
- deps: bump stripe from 8.193.0 to 8.194.0 (#11388) ([cc21f4e3c](https://github.com/mozilla/fxa/commit/cc21f4e3c))
- 6abcba419 Adds launch task for verification reminders. ([6abcba419](https://github.com/mozilla/fxa/commit/6abcba419))
- deps: bump @sentry/node from 6.15.0 to 6.16.1 ([d6e82ae9c](https://github.com/mozilla/fxa/commit/d6e82ae9c))
- deps-dev: bump sass from 1.44.0 to 1.45.0 ([f5751c8fe](https://github.com/mozilla/fxa/commit/f5751c8fe))
- deps: bump luxon from 2.1.1 to 2.2.0 ([9d1eb2992](https://github.com/mozilla/fxa/commit/9d1eb2992))
- deps: bump stripe from 8.191.0 to 8.193.0 (#11303) ([d59c19d29](https://github.com/mozilla/fxa/commit/d59c19d29))
- deps: bump aws-sdk from 2.1045.0 to 2.1046.0 (#11295) ([9fc001e7b](https://github.com/mozilla/fxa/commit/9fc001e7b))
- auth-server: Update email storybook docs, update Fx 'Account' to Fx 'account' ([f353ef1e2](https://github.com/mozilla/fxa/commit/f353ef1e2))
- deps: bump aws-sdk from 2.1044.0 to 2.1045.0 ([515af6847](https://github.com/mozilla/fxa/commit/515af6847))
- deps: bump @google-cloud/firestore from 4.15.1 to 5.0.1 ([8fa279874](https://github.com/mozilla/fxa/commit/8fa279874))
- deps: bump jsdom from 18.1.1 to 19.0.0 ([19cd329d9](https://github.com/mozilla/fxa/commit/19cd329d9))

## 1.221.3

### Bug fixes

- auth: fix location optional ([6171d360f](https://github.com/mozilla/fxa/commit/6171d360f))

## 1.221.2

### Other changes

- dependabot: a4dfb2efe Cherry-pick cc21f4e (dependabot) ([a4dfb2efe](https://github.com/mozilla/fxa/commit/a4dfb2efe))

## 1.221.1

### New features

- auth: add invoice preview route ([1165f6a5d](https://github.com/mozilla/fxa/commit/1165f6a5d))

## 1.221.0

### New features

- auth-server: convert subscriptionAccountDeletion email template to stack (#11266) ([fdae4ae8e](https://github.com/mozilla/fxa/commit/fdae4ae8e))
- auth-server: convert subscriptionUpgrade email template to stack (#11207) ([44d80714d](https://github.com/mozilla/fxa/commit/44d80714d))
- profile: add metricsEnabled to profile. closes #9081 (#10882) ([e2d10147c](https://github.com/mozilla/fxa/commit/e2d10147c))
- auth: include product/plan validation details in Sentry message (#11181) ([9b4caac24](https://github.com/mozilla/fxa/commit/9b4caac24))

### Bug fixes

- auth-server: investigate test regarding subscriptionTermsUrl for new email templates (#11264) ([b056f3d74](https://github.com/mozilla/fxa/commit/b056f3d74))
- auth-server: fix email footer text in subscriptionUpgrade (#11253) ([a82037e8f](https://github.com/mozilla/fxa/commit/a82037e8f))
- auth-server: [new email templates] postAddTwoStepAuthentication (#11279) ([dfe584a87](https://github.com/mozilla/fxa/commit/dfe584a87))
- tokens: Don't check expiration dates for pocket access token on profile server (#11254) ([b54e8cfe0](https://github.com/mozilla/fxa/commit/b54e8cfe0))
- auth-server: variables are not replaced in new email templates (#11267) ([f44709e1e](https://github.com/mozilla/fxa/commit/f44709e1e))
- auth: do not log hard email bounces to sentry ([8dd5963c4](https://github.com/mozilla/fxa/commit/8dd5963c4))
- admin-server: move ts-morph to dependencies (#11240) ([0c7eb471f](https://github.com/mozilla/fxa/commit/0c7eb471f))
- emails: Don't bounce emails that could stop a user from getting access to account (#11195) ([11a6aeb16](https://github.com/mozilla/fxa/commit/11a6aeb16))
- reverse dep rollback from conflict resolution ([5527014cb](https://github.com/mozilla/fxa/commit/5527014cb))
- bulk-mailer: date normalization was wrong (#11184) ([f474db3dd](https://github.com/mozilla/fxa/commit/f474db3dd))
- auth: remove payment method from Firestore on payment_method.detached webhook (#11139) ([a36b8b03d](https://github.com/mozilla/fxa/commit/a36b8b03d))
- configs: fix CapabilityService's dep on StripeHelper again (#11132) ([9c800b6af](https://github.com/mozilla/fxa/commit/9c800b6af))

### Other changes

- deps: bump aws-sdk from 2.1022.0 to 2.1044.0 (#11271) ([6eeb2eb74](https://github.com/mozilla/fxa/commit/6eeb2eb74))
- deps-dev: bump sass from 1.43.4 to 1.44.0 ([218c125b7](https://github.com/mozilla/fxa/commit/218c125b7))
- deps: bump googleapis from 91.0.0 to 92.0.0 ([e2a951897](https://github.com/mozilla/fxa/commit/e2a951897))
- deps-dev: bump esbuild from 0.14.1 to 0.14.2 ([b02bdf11f](https://github.com/mozilla/fxa/commit/b02bdf11f))
- deps: bump nodemailer from 6.7.1 to 6.7.2 ([ad917f656](https://github.com/mozilla/fxa/commit/ad917f656))
- #11211: 2fedcbc4a Train 220 (#11211) ([2fedcbc4a](https://github.com/mozilla/fxa/commit/2fedcbc4a))
- deps-dev: bump esbuild-register from 3.1.2 to 3.2.0 (#11218) ([a66e94841](https://github.com/mozilla/fxa/commit/a66e94841))
- deps-dev: bump @storybook/addon-toolbars from 6.3.12 to 6.4.2 (#11200)" ([1b3f12706](https://github.com/mozilla/fxa/commit/1b3f12706))
- deps-dev: bump @storybook/addon-toolbars from 6.3.12 to 6.4.2 (#11200) ([a7cf56a2c](https://github.com/mozilla/fxa/commit/a7cf56a2c))
- deps-dev: bump esbuild from 0.13.14 to 0.14.0 (#11186) ([fd2d059eb](https://github.com/mozilla/fxa/commit/fd2d059eb))
- deps: bump mjml from 4.10.4 to 4.11.0 (#11159) ([c5a93adff](https://github.com/mozilla/fxa/commit/c5a93adff))
- deps: bump qrcode from 1.4.4 to 1.5.0 (#11153) ([85deab9a7](https://github.com/mozilla/fxa/commit/85deab9a7))
- email: change email-service bounce config (#11138) ([9c3b509d9](https://github.com/mozilla/fxa/commit/9c3b509d9))
- deps: bump stripe from 8.188.0 to 8.191.0 (#11143) ([2bbea7715](https://github.com/mozilla/fxa/commit/2bbea7715))

## 1.220.5

No changes.

## 1.220.4

No changes.

## 1.220.3

### Bug fixes

- metrics: Don't override hapi request artifacts (#11210) ([f8b48a627](https://github.com/mozilla/fxa/commit/f8b48a627))

## 1.220.2

### Bug fixes

- bulk-mailer: date normalization was wrong (#11184) ([e4cbfbcab](https://github.com/mozilla/fxa/commit/e4cbfbcab))

## 1.220.1

### Other changes

- #11147: daba77073 Train 220 dot release optional ridealong (#11147) ([daba77073](https://github.com/mozilla/fxa/commit/daba77073))
- #11149: 32f26623e Train-220 Uplift email config (#11149) ([32f26623e](https://github.com/mozilla/fxa/commit/32f26623e))

## 1.220.0

### New features

- payments: Add feature flag for Coupons (#11048) ([37b539a64](https://github.com/mozilla/fxa/commit/37b539a64))
- auth: include validation details for product/plan ([e81f5e077](https://github.com/mozilla/fxa/commit/e81f5e077))
- auth: return IAP and web subscriptions in /account route (#10964) ([6fd78e313](https://github.com/mozilla/fxa/commit/6fd78e313))
- support-panel: add Play subscriptions to support-panel (#10948) ([efd4a5601](https://github.com/mozilla/fxa/commit/efd4a5601))
- auth: remove paypal webhook based invoice processing ([ce83c2349](https://github.com/mozilla/fxa/commit/ce83c2349))

### Bug fixes

- metrics: Re-enable toggling metrics for user (#10990) ([f7b0e7d7c](https://github.com/mozilla/fxa/commit/f7b0e7d7c))
- sentry depth filtering ([a14088c62](https://github.com/mozilla/fxa/commit/a14088c62))

### Refactorings

- auth: cache tax rates in Redis (effectively) indefinitely (#11087) ([7e520c402](https://github.com/mozilla/fxa/commit/7e520c402))
- support-panel: move support panel subscriptions route ([7a5b3eb8f](https://github.com/mozilla/fxa/commit/7a5b3eb8f))

### Other changes

- deps-dev: bump nock from 13.1.4 to 13.2.1 (#11121) ([7ecc6f0e7](https://github.com/mozilla/fxa/commit/7ecc6f0e7))
- deps: add dependencies on other workspaces for runtime dependency (#11115) ([e3a3fcc19](https://github.com/mozilla/fxa/commit/e3a3fcc19))
- auth-server: Additional FTL tweaks based on feedback (#11061) ([2ae2f231a](https://github.com/mozilla/fxa/commit/2ae2f231a))
- deps: bump @sentry/integrations from 6.14.2 to 6.15.0 (#11108) ([b567728cf](https://github.com/mozilla/fxa/commit/b567728cf))
- deps: bump googleapis from 89.0.0 to 91.0.0 (#11075) ([795131d51](https://github.com/mozilla/fxa/commit/795131d51))
- ci: slow down pm2 startup (#11084) ([a62532cc5](https://github.com/mozilla/fxa/commit/a62532cc5))
- deps: bump ioredis from 4.27.11 to 4.28.0 (#11076) ([d74962e1b](https://github.com/mozilla/fxa/commit/d74962e1b))
- deps: update typescript to 4.5.2 ([60ca05cb8](https://github.com/mozilla/fxa/commit/60ca05cb8))
- deps: Update yarn to 3.1.0 and dedupe deps. fix resolve conflicts (#11072) ([c72a1a003](https://github.com/mozilla/fxa/commit/c72a1a003))
- deps-dev: bump esbuild from 0.13.4 to 0.13.14 (#11053) ([46b813268](https://github.com/mozilla/fxa/commit/46b813268))
- deps: bump @sentry/node from 6.14.3 to 6.15.0 (#11036) ([cb0f09d41](https://github.com/mozilla/fxa/commit/cb0f09d41))
- deps: bump nodemailer from 6.7.0 to 6.7.1 (#11037) ([c0dafcdae](https://github.com/mozilla/fxa/commit/c0dafcdae))
- deps: bump moment-timezone from 0.5.33 to 0.5.34 (#11022) ([3301362b9](https://github.com/mozilla/fxa/commit/3301362b9))
- deps: bump @sentry/node from 6.14.1 to 6.14.3 (#11020) ([507aef4b4](https://github.com/mozilla/fxa/commit/507aef4b4))
- deps: bump hot-shots from 8.5.2 to 9.0.0 (#11018) ([10dfa5e1a](https://github.com/mozilla/fxa/commit/10dfa5e1a))
- deps: bump stripe from 8.187.0 to 8.188.0 (#11019) ([f30ab7208](https://github.com/mozilla/fxa/commit/f30ab7208))
- deps: bump stripe from 8.186.1 to 8.187.0 ([62a2ea827](https://github.com/mozilla/fxa/commit/62a2ea827))
- deps: bump p-retry from 4.6.1 to 5.0.0 (#10916)" (#10983) ([b1c15298e](https://github.com/mozilla/fxa/commit/b1c15298e))
- deps-dev: bump nodemon from 2.0.14 to 2.0.15 (#10977) ([468590704](https://github.com/mozilla/fxa/commit/468590704))
- deps: bump keyv from 4.0.3 to 4.0.4 (#10979) ([92a39bd2c](https://github.com/mozilla/fxa/commit/92a39bd2c))

## 1.219.5

No changes.

## 1.219.4

### Bug fixes

- auth: add firestore to email_notifications process ([5e0485378](https://github.com/mozilla/fxa/commit/5e0485378))

## 1.219.3

### Bug fixes

- auth: add sentry process name and sub reminder stats ([584cc83e0](https://github.com/mozilla/fxa/commit/584cc83e0))

## 1.219.2

### Bug fixes

- auth: setup container objects for processor ([043f63532](https://github.com/mozilla/fxa/commit/043f63532))
- auth: remove remaining cache references ([fb83f64b4](https://github.com/mozilla/fxa/commit/fb83f64b4))

## 1.219.1

### Other changes

- deps: bump p-retry from 4.6.1 to 5.0.0 (#10916)" (#10983) ([2bb3bd5de](https://github.com/mozilla/fxa/commit/2bb3bd5de))

## 1.219.0

### New features

- auth: remove redis customer caching ([878a991ce](https://github.com/mozilla/fxa/commit/878a991ce))
- auth: add more logging to PayPalClientError (#10872) ([90084c66a](https://github.com/mozilla/fxa/commit/90084c66a))
- auth: store payment methods in firestore ([a9b36e6e1](https://github.com/mozilla/fxa/commit/a9b36e6e1))

### Bug fixes

- auth: Address l10n comments for new emails ([4b2937a98](https://github.com/mozilla/fxa/commit/4b2937a98))
- auth: New emails - update 'Firefox Accounts' capitalization, fix extra space ([a6317c6ce](https://github.com/mozilla/fxa/commit/a6317c6ce))

### Other changes

- auth: update survey url (#10938) ([41e8f9bb1](https://github.com/mozilla/fxa/commit/41e8f9bb1))
- deps: bump luxon from 2.0.2 to 2.1.1 (#10951) ([5cd5b7ef1](https://github.com/mozilla/fxa/commit/5cd5b7ef1))
- deps: bump @sentry/node from 6.13.3 to 6.14.1 (#10943) ([bff4cedc9](https://github.com/mozilla/fxa/commit/bff4cedc9))
- deps: bump stripe from 8.186.0 to 8.186.1 (#10941) ([eb1bf62a3](https://github.com/mozilla/fxa/commit/eb1bf62a3))
- auth: update survey url (#10815)" (#10937) ([a3bfb9bdc](https://github.com/mozilla/fxa/commit/a3bfb9bdc))
- deps: bump aws-sdk from 2.1020.0 to 2.1022.0 (#10931) ([0c85e4d2c](https://github.com/mozilla/fxa/commit/0c85e4d2c))
- deps: bump cldr-core and cldr-localenames-full (#10930) ([c5ec36ea5](https://github.com/mozilla/fxa/commit/c5ec36ea5))
- deps: bump p-retry from 4.6.1 to 5.0.0 (#10916) ([87faa4429](https://github.com/mozilla/fxa/commit/87faa4429))
- deps: bump verror from 1.10.0 to 1.10.1 (#10918) ([cdb60d1ef](https://github.com/mozilla/fxa/commit/cdb60d1ef))

## 1.218.9

No changes.

## 1.218.8

### Bug fixes

- support: revert Zendesk field ids ([289b818a1](https://github.com/mozilla/fxa/commit/289b818a1))

## 1.218.7

### Other changes

- auth: update survey url (#10815)" (#10937) ([c592cf64e](https://github.com/mozilla/fxa/commit/c592cf64e))

## 1.218.6

### Bug fixes

- stripe: fixed stripe type ([e1cb25671](https://github.com/mozilla/fxa/commit/e1cb25671))
- auth: always fetch latest stripe object to store ([fea09198e](https://github.com/mozilla/fxa/commit/fea09198e))

## 1.218.5

### Bug fixes

- emails: pass language for new sub/stub acct email (#10908) ([ba8e42eb5](https://github.com/mozilla/fxa/commit/ba8e42eb5))
- auth: only return active subs ([810872cf1](https://github.com/mozilla/fxa/commit/810872cf1))
- auth: dont merge records ([718a3a9ab](https://github.com/mozilla/fxa/commit/718a3a9ab))
- subscriptions: filter canceled subscriptions (#10896) ([6b8af21c4](https://github.com/mozilla/fxa/commit/6b8af21c4))

### Other changes

- deps: bump aws-sdk from 2.1016.0 to 2.1020.0 (#10902) ([22f932063](https://github.com/mozilla/fxa/commit/22f932063))
- deps-dev: bump mocha-junit-reporter from 2.0.0 to 2.0.2 (#10886) ([460229d30](https://github.com/mozilla/fxa/commit/460229d30))
- deps-dev: bump nock from 13.1.3 to 13.1.4 (#10884) ([d9dc1d08c](https://github.com/mozilla/fxa/commit/d9dc1d08c))
- deps: bump stripe from 8.185.0 to 8.186.0 (#10883) ([569e3721f](https://github.com/mozilla/fxa/commit/569e3721f))
- deps-dev: bump sass from 1.42.1 to 1.43.4 (#10862) ([f3e2be4d9](https://github.com/mozilla/fxa/commit/f3e2be4d9))
- deps: bump stripe from 8.181.0 to 8.185.0 (#10881) ([3809e5188](https://github.com/mozilla/fxa/commit/3809e5188))

## 1.218.4

### Bug fixes

- subscriptions: filter canceled subscriptions ([dbb56f0e3](https://github.com/mozilla/fxa/commit/dbb56f0e3))

## 1.218.3

### Bug fixes

- subscriptions: include empty subscriptions list for customer (#10871) ([cd57b1c96](https://github.com/mozilla/fxa/commit/cd57b1c96))

## 1.218.2

### Bug fixes

- auth: fixed import path snafu ([6bbca4f18](https://github.com/mozilla/fxa/commit/6bbca4f18))

## 1.218.1

### New features

- auth: remove more direct stripe calls ([42720c1e5](https://github.com/mozilla/fxa/commit/42720c1e5))

### Bug fixes

- customs: limit totp verification by email ([c5912899c](https://github.com/mozilla/fxa/commit/c5912899c))

## 1.218.0

### New features

- auth: add updated customer to firestore ([935afd0fe](https://github.com/mozilla/fxa/commit/935afd0fe))
- auth/payments: show Google IAP subscription on subscription management page (#10833) ([1e300b916](https://github.com/mozilla/fxa/commit/1e300b916))
- subscriptions: block web subscription when IAP subscribed ([eff687f39](https://github.com/mozilla/fxa/commit/eff687f39))
- auth: do not emit metrics for opted-out users (#10817) ([c34058a21](https://github.com/mozilla/fxa/commit/c34058a21))
- auth: add reminder emails for accounts created through subscription flow (#10773) ([07dfceb50](https://github.com/mozilla/fxa/commit/07dfceb50))
- auth: create sub firestore record ([678da067a](https://github.com/mozilla/fxa/commit/678da067a))
- auth: create customer firestore record ([020d9c016](https://github.com/mozilla/fxa/commit/020d9c016))
- auth: add metricsEnabled to auth and content-server frontend (#10796) ([a3386861f](https://github.com/mozilla/fxa/commit/a3386861f))
- auth: added metricsOptOut db column to fxa (#10736) ([773a2fab0](https://github.com/mozilla/fxa/commit/773a2fab0))
- auth: restrict webhook event updates ([429d73d85](https://github.com/mozilla/fxa/commit/429d73d85))
- subscriptions: add endpoint for billing details and IAP ## 1.217.2 Stripe subscriptions ([8d229a51a](https://github.com/mozilla/fxa/commit/8d229a51a))
- auth: use getUidAndEmailByStripeCustomerId helper in Stripe webhook handlers (#10662) ([84770cc3e](https://github.com/mozilla/fxa/commit/84770cc3e))
- auth: require auth firestore usage ([6a42d1d73](https://github.com/mozilla/fxa/commit/6a42d1d73))
- auth-server: convert subscriptionReactivation email template to stack ([6d3772158](https://github.com/mozilla/fxa/commit/6d3772158))

### Bug fixes

- auth: insert invoices when not found ([c3c365dfe](https://github.com/mozilla/fxa/commit/c3c365dfe))
- auth: use local firestore emulator ([6b97509f5](https://github.com/mozilla/fxa/commit/6b97509f5))

### Refactorings

- auth: remove dead functions and code ([f033156a8](https://github.com/mozilla/fxa/commit/f033156a8))
- auth: Add comments and brand references to ftl, update straight quotes ([c788084b8](https://github.com/mozilla/fxa/commit/c788084b8))

### Other changes

- deps: bump aws-sdk from 2.1013.0 to 2.1016.0 (#10841) ([ab4c9eb7a](https://github.com/mozilla/fxa/commit/ab4c9eb7a))
- deps-dev: bump grunt-eslint from 23.0.0 to 24.0.0 ([574aa2f24](https://github.com/mozilla/fxa/commit/574aa2f24))
- deps: bump convict from 6.2.0 to 6.2.1 ([ef7842bc0](https://github.com/mozilla/fxa/commit/ef7842bc0))
- auth: update survey url (#10815) ([db7322e0d](https://github.com/mozilla/fxa/commit/db7322e0d))
- deps: bump aws-sdk from 2.1011.0 to 2.1013.0 (#10812) ([a78c2b17f](https://github.com/mozilla/fxa/commit/a78c2b17f))
- auth: update field inputs for the Subscription Service Ticket Form (#10785) ([01e35e5d1](https://github.com/mozilla/fxa/commit/01e35e5d1))
- node: upgrade to node 16 (#10799) ([17e06a38d](https://github.com/mozilla/fxa/commit/17e06a38d))
- deps: bump googleapis from 88.2.0 to 89.0.0 ([68a6456ee](https://github.com/mozilla/fxa/commit/68a6456ee))
- deps-dev: bump @storybook/html from 6.3.10 to 6.3.12 (#10792) ([5f8e08a89](https://github.com/mozilla/fxa/commit/5f8e08a89))
- deps-dev: bump @storybook/addon-controls from 6.3.11 to 6.3.12 (#10791) ([358137e78](https://github.com/mozilla/fxa/commit/358137e78))
- deps-dev: bump nodemon from 2.0.13 to 2.0.14 ([0262c7a36](https://github.com/mozilla/fxa/commit/0262c7a36))
- deps: bump nodemailer from 6.6.5 to 6.7.0 ([b73bf3c21](https://github.com/mozilla/fxa/commit/b73bf3c21))
- deps: bump aws-sdk from 2.1010.0 to 2.1011.0 ([7d03b5d3e](https://github.com/mozilla/fxa/commit/7d03b5d3e))
- deps: bump aws-sdk from 2.1002.0 to 2.1010.0 ([b9f41d79d](https://github.com/mozilla/fxa/commit/b9f41d79d))
- deps-dev: bump @storybook/addon-docs from 6.3.10 to 6.3.12 (#10728) ([5bec1e215](https://github.com/mozilla/fxa/commit/5bec1e215))
- deps-dev: bump @storybook/addon-toolbars from 6.3.10 to 6.3.12 ([75d87a482](https://github.com/mozilla/fxa/commit/75d87a482))
- deps: bump mjml from 4.10.3 to 4.10.4 ([bfd8b62aa](https://github.com/mozilla/fxa/commit/bfd8b62aa))
- deps-dev: bump @storybook/addon-controls from 6.3.10 to 6.3.11 ([827718ad7](https://github.com/mozilla/fxa/commit/827718ad7))
- deps-dev: bump nodemon from 2.0.12 to 2.0.13 ([8052cdd89](https://github.com/mozilla/fxa/commit/8052cdd89))

## 1.217.2

No changes.

## 1.217.1

### Bug fixes

- auth: revert "refactor(auth): use expandResource instead of retrieve" (#10711) ([ad211fd61](https://github.com/mozilla/fxa/commit/ad211fd61))

## 1.217.0

### New features

- auth: store stripe docs in firestore ([3e27a295e](https://github.com/mozilla/fxa/commit/3e27a295e))
- auth-server: Convert subscriptionsPaymentExpired ([53bd039e5](https://github.com/mozilla/fxa/commit/53bd039e5))
- auth-server: Convert subscriptionPaymentExpired to new mjml stack ([08b9a08c1](https://github.com/mozilla/fxa/commit/08b9a08c1))
- auth: add firestore collection and stripe storage ([d7c208bd6](https://github.com/mozilla/fxa/commit/d7c208bd6))

### Bug fixes

- auth: ignore handled webhook events ([bf89e9393](https://github.com/mozilla/fxa/commit/bf89e9393))
- tests: fixed auth-server/scripts tests ([570e5a334](https://github.com/mozilla/fxa/commit/570e5a334))
- 461d3584c fix new failing test ([461d3584c](https://github.com/mozilla/fxa/commit/461d3584c))
- auth: wrap span in '<' in the reset password email (#10576) ([f59b30045](https://github.com/mozilla/fxa/commit/f59b30045))

### Refactorings

- auth: use expandResource instead of retrieve ([12947c092](https://github.com/mozilla/fxa/commit/12947c092))
- build: use esbuild instead of ts-node (#10639) ([a95f1270a](https://github.com/mozilla/fxa/commit/a95f1270a))
- subscriptions: cache products and plans forever ([497e236fe](https://github.com/mozilla/fxa/commit/497e236fe))
- auth: default ftl locale to en ([5d736719b](https://github.com/mozilla/fxa/commit/5d736719b))

### Other changes

- deps: bump @hapi/hapi from 20.2.0 to 20.2.1 (#10689) ([2455f998b](https://github.com/mozilla/fxa/commit/2455f998b))
- deps-dev: bump webpack-watch-files-plugin from 1.1.0 to 1.2.0 (#10688) ([58dd049de](https://github.com/mozilla/fxa/commit/58dd049de))
- deps: bump stripe from 8.178.0 to 8.181.0 ([c163bd9af](https://github.com/mozilla/fxa/commit/c163bd9af))
- deps-dev: bump keypair from 1.0.3 to 1.0.4 ([0466b82ff](https://github.com/mozilla/fxa/commit/0466b82ff))
- deps: bump google-libphonenumber from 3.2.24 to 3.2.25 ([fe7d1967f](https://github.com/mozilla/fxa/commit/fe7d1967f))
- deps: bump ioredis from 4.27.10 to 4.27.11 ([8d01acb19](https://github.com/mozilla/fxa/commit/8d01acb19))
- #10665: 67fad955f Email verification reminder fix (#10665) ([67fad955f](https://github.com/mozilla/fxa/commit/67fad955f))
- deps: bump jsdom from 17.0.0 to 18.0.0 (#10657) ([4ae63295a](https://github.com/mozilla/fxa/commit/4ae63295a))
- deps: bump @type-cacheable/core from 10.0.1 to 10.0.2 ([0b2590748](https://github.com/mozilla/fxa/commit/0b2590748))
- deps: bump grunt-contrib-concat from 1.0.1 to 2.0.0 ([30b947a58](https://github.com/mozilla/fxa/commit/30b947a58))
- deps: bump googleapis from 87.0.0 to 88.2.0 (#10640) ([29bc0f299](https://github.com/mozilla/fxa/commit/29bc0f299))
- deps: bump aws-sdk from 2.996.0 to 2.1002.0 ([97e82c61b](https://github.com/mozilla/fxa/commit/97e82c61b))
- deps-dev: bump esbuild from 0.13.1 to 0.13.4 ([5724e2a94](https://github.com/mozilla/fxa/commit/5724e2a94))
- deps: bump @type-cacheable/ioredis-adapter from 10.0.1 to 10.0.2 ([705c83121](https://github.com/mozilla/fxa/commit/705c83121))
- deps: updated dependencies (#10638) ([f57031d15](https://github.com/mozilla/fxa/commit/f57031d15))
- deps: bump ioredis from 4.27.9 to 4.27.10 ([c39396ae0](https://github.com/mozilla/fxa/commit/c39396ae0))
- 563800f5e little tweaks ([563800f5e](https://github.com/mozilla/fxa/commit/563800f5e))
- deps-dev: bump @storybook/html from 6.3.8 to 6.3.9 ([eba69a044](https://github.com/mozilla/fxa/commit/eba69a044))
- 76774a30d Add subscriptionsPaymentExpired to dev.json, update ftl files from en-US to en ([76774a30d](https://github.com/mozilla/fxa/commit/76774a30d))
- ebeecd66e Add new email to dev.json config, fix TS issue in tests ([ebeecd66e](https://github.com/mozilla/fxa/commit/ebeecd66e))
- 5e94c93ff rename subplat to subscription ([5e94c93ff](https://github.com/mozilla/fxa/commit/5e94c93ff))
- f065bbda0 WIP tests ([f065bbda0](https://github.com/mozilla/fxa/commit/f065bbda0))
- auth-server: Update story files to reflect 'fxa emails' and 'subplat emails' ([d7f469dc0](https://github.com/mozilla/fxa/commit/d7f469dc0))
- deps-dev: bump @storybook/addon-docs from 6.3.8 to 6.3.9 (#10594) ([f9cef0189](https://github.com/mozilla/fxa/commit/f9cef0189))
- deps: bump @hapi/hapi from 20.1.5 to 20.2.0 (#10579) ([4d02a92e8](https://github.com/mozilla/fxa/commit/4d02a92e8))
- deps: bump @sentry/node from 6.12.0 to 6.13.2 (#10583) ([cb19efb3c](https://github.com/mozilla/fxa/commit/cb19efb3c))
- deps: bump nodemailer from 6.6.3 to 6.6.5 (#10584) ([c774907c2](https://github.com/mozilla/fxa/commit/c774907c2))
- deps: bump stripe from 8.176.0 to 8.178.0 ([91bab740e](https://github.com/mozilla/fxa/commit/91bab740e))

## 1.216.3

### Other changes

- #10665: 869bf3f45 Email verification reminder fix (#10665) ([869bf3f45](https://github.com/mozilla/fxa/commit/869bf3f45))

## 1.216.2

### Bug fixes

- auth: add firestore import ([4929d6c62](https://github.com/mozilla/fxa/commit/4929d6c62))

## 1.216.1

### New features

- auth: store stripe docs in firestore ([9baa3480e](https://github.com/mozilla/fxa/commit/9baa3480e))

### Refactorings

- subscriptions: cache products and plans forever ([b3c741290](https://github.com/mozilla/fxa/commit/b3c741290))

## 1.216.0

### New features

- auth: enable nodemailer SES transport (#10532) ([6ab822f7a](https://github.com/mozilla/fxa/commit/6ab822f7a))
- auth: add subplat email layout ([e89fef647](https://github.com/mozilla/fxa/commit/e89fef647))
- auth: Convert 'recovery' email to mjml stack ([a45898797](https://github.com/mozilla/fxa/commit/a45898797))
- auth: unify sub update for stripe change ([3082c40b4](https://github.com/mozilla/fxa/commit/3082c40b4))
- auth: convert email template passwordChangeRequired to new mjml stack ([47dc0fa0d](https://github.com/mozilla/fxa/commit/47dc0fa0d))
- auth: convert email template postNewRecoveryCodes to new mjml stack ([f33c3623c](https://github.com/mozilla/fxa/commit/f33c3623c))
- auth: convert email template postConsumeRecoveryCodeEmail to new mjml stack ([39304e1b2](https://github.com/mozilla/fxa/commit/39304e1b2))
- auth: convert email template postChangePrimary to new mjml stack ([13ad18f4e](https://github.com/mozilla/fxa/commit/13ad18f4e))
- auth: convert email template postAddTwoStepAuthenticationEmail to new mjml stack ([bfcbf2288](https://github.com/mozilla/fxa/commit/bfcbf2288))
- auth: Convert postVerifySecondary to new mjml stack ([b838c6e3c](https://github.com/mozilla/fxa/commit/b838c6e3c))
- auth: Convert postRemoveTwoStepAuthentication to mjml stack ([f549ac8b9](https://github.com/mozilla/fxa/commit/f549ac8b9))
- auth-server: Convert postRemoveAccountRecovery to new email stack ([46243bcdf](https://github.com/mozilla/fxa/commit/46243bcdf))

### Bug fixes

- metrics: Add remaining metrics and `fxa_reg - complete` for pwordless accounts (#10516) ([22b7fd5d7](https://github.com/mozilla/fxa/commit/22b7fd5d7))
- auth-server: Update x2 hard-coded email addresses in new email templates ([7dbc6fae2](https://github.com/mozilla/fxa/commit/7dbc6fae2))
- auth: stop reporting errors on legit credit nots ([99f03f472](https://github.com/mozilla/fxa/commit/99f03f472))
- auth: use \_\_dirname to retrieve template base dir ([006278898](https://github.com/mozilla/fxa/commit/006278898))
- auth: include emails-scss in build command ([c514daa35](https://github.com/mozilla/fxa/commit/c514daa35))
- auth: various template fixups ([800be5d50](https://github.com/mozilla/fxa/commit/800be5d50))
- auth: template string cleanups ([91d5f8d03](https://github.com/mozilla/fxa/commit/91d5f8d03))
- auth: update postRemoveSecondary fluent ids to match other casing ([834ec8ece](https://github.com/mozilla/fxa/commit/834ec8ece))

### Other changes

- deps: update pm2; dedupe (#10557) ([89e549a74](https://github.com/mozilla/fxa/commit/89e549a74))
- auth: add email template name to log.error if sending an email fails (#10543) ([e81d2ab07](https://github.com/mozilla/fxa/commit/e81d2ab07))
- deps: bump aws-sdk from 2.992.0 to 2.996.0 (#10550) ([449eebbb1](https://github.com/mozilla/fxa/commit/449eebbb1))
- deps: bump google-libphonenumber from 3.2.23 to 3.2.24 (#10547) ([7f2d945a4](https://github.com/mozilla/fxa/commit/7f2d945a4))
- deps: bump emittery from 0.9.2 to 0.10.0 (#10522) ([184653600](https://github.com/mozilla/fxa/commit/184653600))
- deps-dev: bump sass from 1.39.0 to 1.42.1 (#10521) ([80e5a2cc6](https://github.com/mozilla/fxa/commit/80e5a2cc6))
- deps: bump hot-shots from 8.5.0 to 8.5.1 (#10511) ([cc05a2780](https://github.com/mozilla/fxa/commit/cc05a2780))
- deps-dev: bump esbuild from 0.12.29 to 0.13.1 ([8b5977680](https://github.com/mozilla/fxa/commit/8b5977680))
- deps: bump aws-sdk from 2.987.0 to 2.992.0 ([630d8d4f6](https://github.com/mozilla/fxa/commit/630d8d4f6))
- deps-dev: bump esbuild from 0.12.28 to 0.12.29 ([ba026f469](https://github.com/mozilla/fxa/commit/ba026f469))
- deps: bump stripe from 8.175.0 to 8.176.0 ([662ad7405](https://github.com/mozilla/fxa/commit/662ad7405))
- deps: bump google-libphonenumber from 3.2.22 to 3.2.23 ([8c22edbfa](https://github.com/mozilla/fxa/commit/8c22edbfa))
- deps: bump mjml from 4.10.2 to 4.10.3 ([b7fc989bd](https://github.com/mozilla/fxa/commit/b7fc989bd))
- deps: bump googleapis from 84.0.0 to 87.0.0 ([58503834c](https://github.com/mozilla/fxa/commit/58503834c))
- auth: remove passwordResetRequired email altogether, as its no longer used ([ed502a55f](https://github.com/mozilla/fxa/commit/ed502a55f))
- deps: bump stripe from 8.174.0 to 8.175.0 ([8f00ce7cc](https://github.com/mozilla/fxa/commit/8f00ce7cc))

## 1.215.2

### New features

- auth: Convert 'recovery' email to mjml stack ([af4e9bf28](https://github.com/mozilla/fxa/commit/af4e9bf28))

### Bug fixes

- auth: use \_\_dirname to retrieve template base dir ([044182360](https://github.com/mozilla/fxa/commit/044182360))
- auth: include emails-scss in build command ([23c6c2558](https://github.com/mozilla/fxa/commit/23c6c2558))

## 1.215.1

No changes.

## 1.215.0

### New features

- auth-server: Allow layout-only email stories ([2733da416](https://github.com/mozilla/fxa/commit/2733da416))
- auth: convert postAddAccountRecovery email to new mjml stack ([7e898a9c8](https://github.com/mozilla/fxa/commit/7e898a9c8))
- auth: convert passwordResetAccountRecovery email to new mjml stack ([a10d266c0](https://github.com/mozilla/fxa/commit/a10d266c0))
- auth-server: Convert verifyPrimary, verifyLogin, and verifyShortCode templates to new mjml stack ([2ac4dc858](https://github.com/mozilla/fxa/commit/2ac4dc858))
- subscriptions: accept Guardian submitted support tickets ([8bafe1969](https://github.com/mozilla/fxa/commit/8bafe1969))
- auth-server: convert unblockCode template to new mjml stack ([0b99b3432](https://github.com/mozilla/fxa/commit/0b99b3432))
- auth-server: convert passwordChanged template to new mjml stack ([2428ab507](https://github.com/mozilla/fxa/commit/2428ab507))
- auth-server: convert verifySecondary template to new mjml stack ([e6b3e2539](https://github.com/mozilla/fxa/commit/e6b3e2539))
- auth-server: refactor email storybook, renderer, and localizer to be more dry ([be1311084](https://github.com/mozilla/fxa/commit/be1311084))
- auth-server: convert newDeviceLogin template to new stack ([72333800a](https://github.com/mozilla/fxa/commit/72333800a))
- auth-server: convert passwordReset email template to new stack ([547332b53](https://github.com/mozilla/fxa/commit/547332b53))
- auth-server: strip excessive line breaks in plaintext emails ([7a16741d8](https://github.com/mozilla/fxa/commit/7a16741d8))
- auth-server: convert verifySecondaryCode template to new stack ([73ed9641c](https://github.com/mozilla/fxa/commit/73ed9641c))
- auth-server: convert verifyShortCode template to new stack ([0dec6d2ef](https://github.com/mozilla/fxa/commit/0dec6d2ef))

### Bug fixes

- auth: make email footer spacing a little more consistent ([889e554fc](https://github.com/mozilla/fxa/commit/889e554fc))
- subscriptions: ignore email complaint errors on webhooks ([f7d89b2a0](https://github.com/mozilla/fxa/commit/f7d89b2a0))
- subscriptions: fix product fetching for up/downgrade email ([f67f85ae0](https://github.com/mozilla/fxa/commit/f67f85ae0))

### Refactorings

- auth: rewire how emails load in the main ftl file ([b0d0af958](https://github.com/mozilla/fxa/commit/b0d0af958))
- auth: remove license header from new email FTL files ([dd41496d1](https://github.com/mozilla/fxa/commit/dd41496d1))
- db: created a new package for all db migrations ([9e7814418](https://github.com/mozilla/fxa/commit/9e7814418))

### Other changes

- deps-dev: bump esbuild from 0.12.27 to 0.12.28 ([1954e0865](https://github.com/mozilla/fxa/commit/1954e0865))
- deps: bump @fluent/bundle from 0.16.1 to 0.17.0 ([1ee852790](https://github.com/mozilla/fxa/commit/1ee852790))
- auth: remove extraneous ar locale and storybook preview ([902bdebce](https://github.com/mozilla/fxa/commit/902bdebce))
- auth: set up auth server to generate dist FTL file, clone/import existing FTL locales ([f17a4fa12](https://github.com/mozilla/fxa/commit/f17a4fa12))
- deps-dev: bump @storybook/addon-controls from 6.3.7 to 6.3.8 ([1d05766bf](https://github.com/mozilla/fxa/commit/1d05766bf))
- deps-dev: bump esbuild from 0.12.25 to 0.12.27 ([0e488854a](https://github.com/mozilla/fxa/commit/0e488854a))
- deps: bump aws-sdk from 2.985.0 to 2.987.0 ([addcd4257](https://github.com/mozilla/fxa/commit/addcd4257))
- subscriptions: increase support ticket payload limit ([97f23d289](https://github.com/mozilla/fxa/commit/97f23d289))
- subscriptions: add two more support ticket fields ([28e151e01](https://github.com/mozilla/fxa/commit/28e151e01))
- deps-dev: bump @storybook/html from 6.3.7 to 6.3.8 ([88a74dae8](https://github.com/mozilla/fxa/commit/88a74dae8))
- deps: bump aws-sdk from 2.983.0 to 2.985.0 ([b2736bcfd](https://github.com/mozilla/fxa/commit/b2736bcfd))
- deps-dev: bump @storybook/addon-docs from 6.3.6 to 6.3.8 ([8aa919fbe](https://github.com/mozilla/fxa/commit/8aa919fbe))
- deps: bump stripe from 8.170.0 to 8.174.0 ([4ded5554e](https://github.com/mozilla/fxa/commit/4ded5554e))
- deps-dev: bump @storybook/addon-toolbars from 6.3.7 to 6.3.8 ([dad54665d](https://github.com/mozilla/fxa/commit/dad54665d))
- deps: bump @google-cloud/firestore from 4.15.0 to 4.15.1 ([93124e316](https://github.com/mozilla/fxa/commit/93124e316))
- deps: bump aws-sdk from 2.982.0 to 2.983.0 ([9db2dc21a](https://github.com/mozilla/fxa/commit/9db2dc21a))
- deps-dev: bump esbuild from 0.12.24 to 0.12.25 ([41b8f5aba](https://github.com/mozilla/fxa/commit/41b8f5aba))
- deps: bump aws-sdk from 2.981.0 to 2.982.0 ([60a512492](https://github.com/mozilla/fxa/commit/60a512492))
- deps: bump @sentry/node from 6.11.0 to 6.12.0 ([4809fc2cc](https://github.com/mozilla/fxa/commit/4809fc2cc))
- deps-dev: bump sass from 1.38.2 to 1.39.0 ([4e5d55175](https://github.com/mozilla/fxa/commit/4e5d55175))
- deps: bump aws-sdk from 2.979.0 to 2.981.0 ([e61ec1daa](https://github.com/mozilla/fxa/commit/e61ec1daa))

## 1.214.1

No changes.

## 1.214.0

### New features

- auth-server: Add env vars for MJML addresses/templates ([cea4bef26](https://github.com/mozilla/fxa/commit/cea4bef26))
- fxa-auth-server: Convert verifyEmail Template to new stack ([6a7484c0d](https://github.com/mozilla/fxa/commit/6a7484c0d))
- fxa-auth-server: refactor renderer to parse MJML files ([dae1535a6](https://github.com/mozilla/fxa/commit/dae1535a6))
- auth-server: start rendering plaintext emails alongside html in storybook ([934a7ce83](https://github.com/mozilla/fxa/commit/934a7ce83))
- auth-server: Convert verificationReminder templates to new stack and refactor the template styles ([7fcb64ba0](https://github.com/mozilla/fxa/commit/7fcb64ba0))
- auth-server: Convert postRemoveSecondary template to new stack ([8ffb5ccd6](https://github.com/mozilla/fxa/commit/8ffb5ccd6))
- auth-server: Convert postVerify template to new stack ([75c878256](https://github.com/mozilla/fxa/commit/75c878256))

### Bug fixes

- auth: fixed auth-server startup when stripe is not configured ([3f5880ee1](https://github.com/mozilla/fxa/commit/3f5880ee1))
- tests: surprise! some tests fail with a patch version > 9 ([90854f8f2](https://github.com/mozilla/fxa/commit/90854f8f2))
- auth: assume product change on play trigger ([a9007c6f2](https://github.com/mozilla/fxa/commit/a9007c6f2))
- auth: don't send a subscription reminder email for cancel_at_period_end ([e71f43272](https://github.com/mozilla/fxa/commit/e71f43272))
- test: fixed another case of nondeterminism in reminder tests ([bd2f6ca2c](https://github.com/mozilla/fxa/commit/bd2f6ca2c))
- auth: use header only for jwt and return data ([fe86aeb07](https://github.com/mozilla/fxa/commit/fe86aeb07))
- auth: use object only for auth ([e9904af54](https://github.com/mozilla/fxa/commit/e9904af54))
- auth: refresh profile if needed ([047b33432](https://github.com/mozilla/fxa/commit/047b33432))
- auth: retain userid in subsription purchase copy ([fe7a977be](https://github.com/mozilla/fxa/commit/fe7a977be))
- auth: a couple test fixes for CI ([6c3149846](https://github.com/mozilla/fxa/commit/6c3149846))
- tests: fixed some test races. extend oauth api test timeout ([097320c04](https://github.com/mozilla/fxa/commit/097320c04))
- auth: use IAP scope for token register ([18694cca4](https://github.com/mozilla/fxa/commit/18694cca4))
- auth/payments: ensure /newsletters endpoint validates request and passes newsletters on to SQS ([a95f1a51e](https://github.com/mozilla/fxa/commit/a95f1a51e))
- auth: enable a retry on backendServices ([8e589f10d](https://github.com/mozilla/fxa/commit/8e589f10d))
- auth: use token handler for token endpoint ([196c03d09](https://github.com/mozilla/fxa/commit/196c03d09))
- emails: handle Stripe timestamps that are in seconds ([13bc7b50e](https://github.com/mozilla/fxa/commit/13bc7b50e))
- auth: return a session token in /account/finish_setup ([791ccaec7](https://github.com/mozilla/fxa/commit/791ccaec7))
- auth: rename subject of subscriptionAccountFinishSetup email ([bddf42203](https://github.com/mozilla/fxa/commit/bddf42203))
- auth: use proper jwks key plugin ([5c64eba87](https://github.com/mozilla/fxa/commit/5c64eba87))

### Other changes

- auth: add eventId to Sentry errors for customer.subscription.updated events ([05bb2dedc](https://github.com/mozilla/fxa/commit/05bb2dedc))
- deps: bump ioredis from 4.27.8 to 4.27.9 ([bcc59065a](https://github.com/mozilla/fxa/commit/bcc59065a))
- cbb535470 moar ([cbb535470](https://github.com/mozilla/fxa/commit/cbb535470))
- b65e2ad52 update docs ([b65e2ad52](https://github.com/mozilla/fxa/commit/b65e2ad52))
- 0cfa80997 remove unused/unmaintained scripts ([0cfa80997](https://github.com/mozilla/fxa/commit/0cfa80997))
- deps: bump aws-sdk from 2.978.0 to 2.979.0 ([baf49c964](https://github.com/mozilla/fxa/commit/baf49c964))
- deps-dev: bump sass from 1.38.1 to 1.38.2 ([ae60cc452](https://github.com/mozilla/fxa/commit/ae60cc452))
- deps-dev: bump esbuild from 0.12.23 to 0.12.24 ([56b49428f](https://github.com/mozilla/fxa/commit/56b49428f))
- deps: bump aws-sdk from 2.977.0 to 2.978.0 ([3d5e14d67](https://github.com/mozilla/fxa/commit/3d5e14d67))
- deps: bump @google-cloud/firestore from 4.14.2 to 4.15.0 ([0ad8f53aa](https://github.com/mozilla/fxa/commit/0ad8f53aa))
- deps: bump aws-sdk from 2.972.0 to 2.977.0 ([9b90d6e26](https://github.com/mozilla/fxa/commit/9b90d6e26))
- deps-dev: bump esbuild from 0.12.22 to 0.12.23 ([73b16d5d1](https://github.com/mozilla/fxa/commit/73b16d5d1))
- deps-dev: bump nock from 13.1.1 to 13.1.3 ([7c467acc0](https://github.com/mozilla/fxa/commit/7c467acc0))
- deps-dev: bump sass from 1.38.0 to 1.38.1 ([94b5086a6](https://github.com/mozilla/fxa/commit/94b5086a6))
- deps: bump stripe from 8.169.0 to 8.170.0 ([4aaa748bc](https://github.com/mozilla/fxa/commit/4aaa748bc))
- tests: use esbuild to speed up auth-server tests (experimental) ([3f05b0ee4](https://github.com/mozilla/fxa/commit/3f05b0ee4))
- deps: bump @google-cloud/firestore from 4.14.1 to 4.14.2 ([833a65c56](https://github.com/mozilla/fxa/commit/833a65c56))
- auth: add hawk payload validation to POSTs that require a payload body ([215e56c17](https://github.com/mozilla/fxa/commit/215e56c17))
- deps: bump aws-sdk from 2.971.0 to 2.972.0 ([4706923b4](https://github.com/mozilla/fxa/commit/4706923b4))
- deps: bump ioredis from 4.27.7 to 4.27.8 ([f05fca9a3](https://github.com/mozilla/fxa/commit/f05fca9a3))
- deps: bump aws-sdk from 2.969.0 to 2.971.0 ([d53a82aed](https://github.com/mozilla/fxa/commit/d53a82aed))
- deps: bump jsdom from 16.6.0 to 17.0.0 ([6152d0956](https://github.com/mozilla/fxa/commit/6152d0956))

## 1.213.11

### Bug fixes

- tests: surprise! some tests fail with a patch version > 9 ([c5c0330a6](https://github.com/mozilla/fxa/commit/c5c0330a6))

## 1.213.10

### Bug fixes

- auth: assume product change on play trigger ([7441828fe](https://github.com/mozilla/fxa/commit/7441828fe))

## 1.213.9

No changes.

## 1.213.8

### Bug fixes

- auth: use object only for auth ([bb745928e](https://github.com/mozilla/fxa/commit/bb745928e))

## 1.213.7

### Bug fixes

- auth: use header only for jwt and return data ([3fde39b34](https://github.com/mozilla/fxa/commit/3fde39b34))

## 1.213.6

### Bug fixes

- auth: refresh profile if needed ([aa20963b5](https://github.com/mozilla/fxa/commit/aa20963b5))
- auth: retain userid in subsription purchase copy ([1d2c4de14](https://github.com/mozilla/fxa/commit/1d2c4de14))

## 1.213.5

No changes.

## 1.213.4

### Bug fixes

- auth: use IAP scope for token register ([f36196371](https://github.com/mozilla/fxa/commit/f36196371))

## 1.213.3

### Bug fixes

- auth/payments: ensure /newsletters endpoint validates request and passes newsletters on to SQS ([ab5cc8ebf](https://github.com/mozilla/fxa/commit/ab5cc8ebf))
- auth: use token handler for token endpoint ([6bf3c25f5](https://github.com/mozilla/fxa/commit/6bf3c25f5))
- emails: handle Stripe timestamps that are in seconds ([949d13137](https://github.com/mozilla/fxa/commit/949d13137))
- auth: return a session token in /account/finish_setup ([cad9b1b62](https://github.com/mozilla/fxa/commit/cad9b1b62))

## 1.213.2

### Bug fixes

- auth: rename subject of subscriptionAccountFinishSetup email ([2d8fffe4d](https://github.com/mozilla/fxa/commit/2d8fffe4d))
- auth: use proper jwks key plugin ([7bf3897ba](https://github.com/mozilla/fxa/commit/7bf3897ba))

## 1.213.1

### Bug fixes

- auth: Déjà vu with import bugs ([58242056b](https://github.com/mozilla/fxa/commit/58242056b))

## 1.213.0

### New features

- auth: use a JWT to finish account setup for stub accounts ([87bb1808b](https://github.com/mozilla/fxa/commit/87bb1808b))
- subscriptions: send finish setup email for PayPal subscriptions ([be5ec616a](https://github.com/mozilla/fxa/commit/be5ec616a))
- fxa-auth-server: Convert cadReminderSecond email to new stack ([29e39d60f](https://github.com/mozilla/fxa/commit/29e39d60f))
- auth: add play RTDN handling ([f84f142ea](https://github.com/mozilla/fxa/commit/f84f142ea))
- fxa-auth-server: Convert lowRecoveryCodes template to new stack ([b5cd45241](https://github.com/mozilla/fxa/commit/b5cd45241))
- auth-server: Convert cadReminderFirst to new stack ([22a3db9a9](https://github.com/mozilla/fxa/commit/22a3db9a9))
- subscriptions: create acct and subscribe with Stripe ([3ced8935b](https://github.com/mozilla/fxa/commit/3ced8935b))

### Bug fixes

- allow Play config with private key ([c617dc8e9](https://github.com/mozilla/fxa/commit/c617dc8e9))
- emails: stop escaping html tag in failed payment email ([a2e65f6b0](https://github.com/mozilla/fxa/commit/a2e65f6b0))
- emails: Don't send download subscription for passwordless accounts ([5a43f6346](https://github.com/mozilla/fxa/commit/5a43f6346))

### Other changes

- deps-dev: bump sass from 1.37.5 to 1.38.0 ([3c53df838](https://github.com/mozilla/fxa/commit/3c53df838))
- deps: bump aws-sdk from 2.965.0 to 2.969.0 ([9f277451f](https://github.com/mozilla/fxa/commit/9f277451f))
- deps: bump @google-cloud/firestore from 4.13.2 to 4.14.1 ([18ab3cf1a](https://github.com/mozilla/fxa/commit/18ab3cf1a))
- deps-dev: bump @storybook/html from 6.3.6 to 6.3.7 ([3f42c45cd](https://github.com/mozilla/fxa/commit/3f42c45cd))
- deps: bump stripe from 8.168.0 to 8.169.0 ([0bc6ab329](https://github.com/mozilla/fxa/commit/0bc6ab329))
- deps: bump luxon from 2.0.1 to 2.0.2 ([867deace5](https://github.com/mozilla/fxa/commit/867deace5))
- deps: bump @sentry/node from 6.10.0 to 6.11.0 ([25f24a897](https://github.com/mozilla/fxa/commit/25f24a897))
- deps: bump aws-sdk from 2.963.0 to 2.965.0 ([3842bb268](https://github.com/mozilla/fxa/commit/3842bb268))
- auth-server: update docs and formatting nits ([5ebff0d8a](https://github.com/mozilla/fxa/commit/5ebff0d8a))
- deps-dev: bump @storybook/addon-controls from 6.3.6 to 6.3.7 ([541d590c4](https://github.com/mozilla/fxa/commit/541d590c4))
- deps-dev: bump @storybook/addon-toolbars from 6.3.6 to 6.3.7 ([f51c6e198](https://github.com/mozilla/fxa/commit/f51c6e198))
- deps: bump stripe from 8.167.0 to 8.168.0 ([0afc8393c](https://github.com/mozilla/fxa/commit/0afc8393c))
- deps: bump aws-sdk from 2.958.0 to 2.963.0 ([1d3993916](https://github.com/mozilla/fxa/commit/1d3993916))
- deps: bump googleapis from 83.0.0 to 84.0.0 ([67be63c2c](https://github.com/mozilla/fxa/commit/67be63c2c))
- subscriptions: fix a scope rename that should've been in 3ced8935b ([f7151dad5](https://github.com/mozilla/fxa/commit/f7151dad5))
- deps: bump mjml from 4.10.1 to 4.10.2 ([65ed4dcf1](https://github.com/mozilla/fxa/commit/65ed4dcf1))

## 1.212.2

### Other changes

- deps: bump web-push from 3.4.4 to 3.4.5" ([5fe001eab](https://github.com/mozilla/fxa/commit/5fe001eab))

## 1.212.1

### Bug fixes

- auth: fixed import faux pas ([2aaf45414](https://github.com/mozilla/fxa/commit/2aaf45414))

## 1.212.0

### New features

- payments: send account setup email to stub accounts ([fe315a8cf](https://github.com/mozilla/fxa/commit/fe315a8cf))
- auth: query play store for products purchased ([e65867b70](https://github.com/mozilla/fxa/commit/e65867b70))
- auth: add iap play token endpoint ([be05c07b9](https://github.com/mozilla/fxa/commit/be05c07b9))
- fxa-auth-server: Setup fluent localizer to localize our emails ([627ccc30c](https://github.com/mozilla/fxa/commit/627ccc30c))
- passwords: Ensure password set on account before changing primary email ([6a0b96764](https://github.com/mozilla/fxa/commit/6a0b96764))
- auth: allow /newsletters access with access token ([e8ca248ba](https://github.com/mozilla/fxa/commit/e8ca248ba))
- auth: add google plans endpoint ([845f0b0b8](https://github.com/mozilla/fxa/commit/845f0b0b8))
- auth: add google iap service class ([5560bd9c0](https://github.com/mozilla/fxa/commit/5560bd9c0))
- emails: 958c68ebb feat(emails)- Update exit survey link in subscription exit emails ([958c68ebb](https://github.com/mozilla/fxa/commit/958c68ebb))
- emails: Add the finish account setup email for passwordless accounts ([445738953](https://github.com/mozilla/fxa/commit/445738953))

### Bug fixes

- emails: Render email content right to left for rtl locales ([fb003658d](https://github.com/mozilla/fxa/commit/fb003658d))
- auth: setup containers for email script ([ec85ae82d](https://github.com/mozilla/fxa/commit/ec85ae82d))

### Other changes

- deps: updated base deps for train-212 ([8a391693f](https://github.com/mozilla/fxa/commit/8a391693f))
- fxa-auth-server: Update docs to include information about new email templates ([b62327b40](https://github.com/mozilla/fxa/commit/b62327b40))
- deps: bump stripe from 8.157.0 to 8.167.0 ([b13f89266](https://github.com/mozilla/fxa/commit/b13f89266))
- deps-dev: bump sass from 1.36.0 to 1.37.5 ([12d9c7763](https://github.com/mozilla/fxa/commit/12d9c7763))
- deps-dev: bump @storybook/addon-controls from 6.3.4 to 6.3.6 ([e0e735802](https://github.com/mozilla/fxa/commit/e0e735802))
- deps: bump ioredis from 4.27.6 to 4.27.7 ([17f1ff4e7](https://github.com/mozilla/fxa/commit/17f1ff4e7))
- deps: bump aws-sdk from 2.957.0 to 2.958.0 ([6053691b0](https://github.com/mozilla/fxa/commit/6053691b0))
- deps: bump aws-sdk from 2.952.0 to 2.957.0 ([7c363c1c9](https://github.com/mozilla/fxa/commit/7c363c1c9))
- deps-dev: bump ws from 7.5.3 to 8.0.0 ([5645de7bc](https://github.com/mozilla/fxa/commit/5645de7bc))
- deps: bump convict from 6.1.0 to 6.2.0 ([99be156b7](https://github.com/mozilla/fxa/commit/99be156b7))
- deps: bump convict-format-with-moment from 6.0.1 to 6.2.0 ([27490228a](https://github.com/mozilla/fxa/commit/27490228a))
- deps: updated yarn to 3.0 and typescript to 4.3.5 ([b8a6bd51c](https://github.com/mozilla/fxa/commit/b8a6bd51c))
- deps-dev: bump @storybook/html from 6.3.4 to 6.3.6 ([076388090](https://github.com/mozilla/fxa/commit/076388090))
- 1976e6ed7 Updated usage info to include allowedScopes, updated SQL command and added console log for client id ([1976e6ed7](https://github.com/mozilla/fxa/commit/1976e6ed7))
- deps-dev: bump @storybook/addon-docs from 6.3.4 to 6.3.6 ([e11a42472](https://github.com/mozilla/fxa/commit/e11a42472))
- deps-dev: bump sass from 1.35.2 to 1.36.0 ([a583b1ad6](https://github.com/mozilla/fxa/commit/a583b1ad6))
- deps: bump aws-sdk from 2.948.0 to 2.952.0 ([6963baa8c](https://github.com/mozilla/fxa/commit/6963baa8c))
- fxa-auth-server: mark privacyNoticeDownloadURL as optional ([e8b9c4267](https://github.com/mozilla/fxa/commit/e8b9c4267))
- deps: bump web-push from 3.4.4 to 3.4.5 ([02664ff61](https://github.com/mozilla/fxa/commit/02664ff61))

## 1.211.2

### Bug fixes

- auth: setup containers for email script ([76f2fda36](https://github.com/mozilla/fxa/commit/76f2fda36))

## 1.211.1

### Other changes

- fxa-auth-server: mark privacyNoticeDownloadURL as optional ([c5c78ab5a](https://github.com/mozilla/fxa/commit/c5c78ab5a))

## 1.211.0

### New features

- auth: add /account/stub route ([f88701a3a](https://github.com/mozilla/fxa/commit/f88701a3a))
- fxa-auth-server: Setup CSS solution for emails ([aaa8f1da2](https://github.com/mozilla/fxa/commit/aaa8f1da2))
- auth: add VAT tax population script ([34223646e](https://github.com/mozilla/fxa/commit/34223646e))
- auth: add tax ID to customer invoices ([6f1d149ea](https://github.com/mozilla/fxa/commit/6f1d149ea))
- fxa-auth-server: Setup storybook to preview auth-sever emails ([8a5e52f0d](https://github.com/mozilla/fxa/commit/8a5e52f0d))
- auth: include invoice link in emails ([537e36cac](https://github.com/mozilla/fxa/commit/537e36cac))
- emails: Add mjml feature flag ([3c77c9039](https://github.com/mozilla/fxa/commit/3c77c9039))

### Bug fixes

- subscriptions: include subscriptions when retrieving a customer ([cae61501a](https://github.com/mozilla/fxa/commit/cae61501a))
- auth: update vat populate script to handle change ([c85afb902](https://github.com/mozilla/fxa/commit/c85afb902))
- emails: send email for cancelation due to failed payments ([3142a4e53](https://github.com/mozilla/fxa/commit/3142a4e53))

### Other changes

- deps: bump convict-format-with-validator from 6.0.1 to 6.2.0 ([a43649dcb](https://github.com/mozilla/fxa/commit/a43649dcb))
- deps: bump hot-shots from 8.3.2 to 8.5.0 ([f5cc3f7db](https://github.com/mozilla/fxa/commit/f5cc3f7db))
- deps: bump @google-cloud/firestore from 4.12.3 to 4.13.2 ([30a794542](https://github.com/mozilla/fxa/commit/30a794542))
- deps: bump nodemailer from 6.6.2 to 6.6.3 ([e2b33717b](https://github.com/mozilla/fxa/commit/e2b33717b))
- deps: bump google-libphonenumber from 3.2.21 to 3.2.22 ([5a136ff4c](https://github.com/mozilla/fxa/commit/5a136ff4c))
- fxa-auth-server: Improve validation for product metadata ([6c0b464d7](https://github.com/mozilla/fxa/commit/6c0b464d7))
- deps: bump @sentry/node from 6.7.2 to 6.9.0 ([10020fb87](https://github.com/mozilla/fxa/commit/10020fb87))
- deps: bump aws-sdk from 2.947.0 to 2.948.0 ([649cb36c6](https://github.com/mozilla/fxa/commit/649cb36c6))
- deps: bump aws-sdk from 2.935.0 to 2.947.0 ([aaa4a41ea](https://github.com/mozilla/fxa/commit/aaa4a41ea))
- deps: bump @hapi/hapi from 20.1.4 to 20.1.5 ([554160c54](https://github.com/mozilla/fxa/commit/554160c54))
- deps: bump luxon from 1.27.0 to 2.0.1 ([9830d1ead](https://github.com/mozilla/fxa/commit/9830d1ead))

## 1.210.3

### Bug fixes

- auth: update vat populate script to handle change ([c182e1b52](https://github.com/mozilla/fxa/commit/c182e1b52))
- subscriptions: include subscriptions when retrieving a customer ([43cc9cefa](https://github.com/mozilla/fxa/commit/43cc9cefa))

## 1.210.2

### New features

- auth: add VAT tax population script ([107c7995d](https://github.com/mozilla/fxa/commit/107c7995d))
- auth: add tax ID to customer invoices ([b2317beca](https://github.com/mozilla/fxa/commit/b2317beca))

## 1.210.1

### New features

- auth: include invoice link in emails ([dd8a0a37d](https://github.com/mozilla/fxa/commit/dd8a0a37d))

## 1.210.0

### New features

- auth: don't delete an unverified account with an active subscription ([233de6342](https://github.com/mozilla/fxa/commit/233de6342))
- auth-server: Setup EJS+MJML templating solution in fxa-auth-server ([f9211fe9d](https://github.com/mozilla/fxa/commit/f9211fe9d))
- emails: fadd11fd0 feat(emails) - Update VPN exit survey URL ([fadd11fd0](https://github.com/mozilla/fxa/commit/fadd11fd0))
- auth: add tax rate on sub create ([71e4671c5](https://github.com/mozilla/fxa/commit/71e4671c5))

### Bug fixes

- email: Update email templates to use images from fxa based cdn ([77e4e931a](https://github.com/mozilla/fxa/commit/77e4e931a))
- auth: don't resend session otp codes when totp is enabled ([c05aba4f9](https://github.com/mozilla/fxa/commit/c05aba4f9))

### Other changes

- deps-dev: bump nock from 13.1.0 to 13.1.1 ([2f720ea98](https://github.com/mozilla/fxa/commit/2f720ea98))
- deps: bump stripe from 8.156.0 to 8.157.0 ([1182ae881](https://github.com/mozilla/fxa/commit/1182ae881))
- deps: bump aws-sdk from 2.934.0 to 2.935.0 ([76ad1ed67](https://github.com/mozilla/fxa/commit/76ad1ed67))
- deps: bump aws-sdk from 2.933.0 to 2.934.0 ([1b083a782](https://github.com/mozilla/fxa/commit/1b083a782))
- auth-server: fly away bluebird ([5f63d848b](https://github.com/mozilla/fxa/commit/5f63d848b))

## 1.209.1

### Bug fixes

- email: Update email templates to use images from fxa based cdn ([653b13491](https://github.com/mozilla/fxa/commit/653b13491))
- auth: don't resend session otp codes when totp is enabled ([8b8ed8acf](https://github.com/mozilla/fxa/commit/8b8ed8acf))

## 1.209.0

### New features

- admin: disable account ([4c995b603](https://github.com/mozilla/fxa/commit/4c995b603))
- subscriptions: update sub plan upgrade eligibility logic ([5bb3f9bc4](https://github.com/mozilla/fxa/commit/5bb3f9bc4))
- auth: convert remaining auth-server db use to direct db access ([a561ae1f3](https://github.com/mozilla/fxa/commit/a561ae1f3))
- auth: add tax rate retrieval functions ([9621318af](https://github.com/mozilla/fxa/commit/9621318af))
- push: Add views for confirming a push notification login ([561083825](https://github.com/mozilla/fxa/commit/561083825))

### Bug fixes

- subscriptions: increase webhook payload limit ([4c90c1ca6](https://github.com/mozilla/fxa/commit/4c90c1ca6))

### Refactorings

- auth: split account create functions out ([2632ad210](https://github.com/mozilla/fxa/commit/2632ad210))

### Other changes

- deps: update some deps ([b89dc6079](https://github.com/mozilla/fxa/commit/b89dc6079))
- deps: update deps and start ignoring @types/\* in dependabot ([694ff5f6a](https://github.com/mozilla/fxa/commit/694ff5f6a))
- deps: bump aws-sdk from 2.930.0 to 2.932.0 ([af63d7a2b](https://github.com/mozilla/fxa/commit/af63d7a2b))
- 4fdf66c24 Redirect "JWT access tokens" doc to the product portal. ([4fdf66c24](https://github.com/mozilla/fxa/commit/4fdf66c24))
- deps: bump nodemailer from 6.6.1 to 6.6.2 ([95693cf42](https://github.com/mozilla/fxa/commit/95693cf42))
- deps: bump stripe from 8.154.0 to 8.156.0 ([80db58c93](https://github.com/mozilla/fxa/commit/80db58c93))
- deps: bump @hapi/hapi from 20.1.3 to 20.1.4 ([8ed013055](https://github.com/mozilla/fxa/commit/8ed013055))
- deps: bump aws-sdk from 2.928.0 to 2.930.0 ([b6ec6ce5b](https://github.com/mozilla/fxa/commit/b6ec6ce5b))
- deps: bump @sentry/node from 6.7.0 to 6.7.1 ([b78095131](https://github.com/mozilla/fxa/commit/b78095131))
- deps: bump aws-sdk from 2.926.0 to 2.928.0 ([94684a588](https://github.com/mozilla/fxa/commit/94684a588))
- deps: bump ioredis from 4.27.5 to 4.27.6 ([258f7a8f4](https://github.com/mozilla/fxa/commit/258f7a8f4))
- deps: bump @sentry/node from 6.5.1 to 6.7.0 ([b6119a2c7](https://github.com/mozilla/fxa/commit/b6119a2c7))
- deps: update pm2 / dedupe ([5d7653fa6](https://github.com/mozilla/fxa/commit/5d7653fa6))
- deps: bump aws-sdk from 2.923.0 to 2.926.0 ([22c59811a](https://github.com/mozilla/fxa/commit/22c59811a))
- deps: bump @google-cloud/firestore from 4.9.8 to 4.12.2 ([77f89e395](https://github.com/mozilla/fxa/commit/77f89e395))

## 1.208.4

### Bug fixes

- email: Update email templates to use images from fxa based cdn ([77e4e931a](https://github.com/mozilla/fxa/commit/77e4e931a))

## 1.208.3

### Bug fixes

- auth: don't resend session otp codes when totp is enabled ([c05aba4f9](https://github.com/mozilla/fxa/commit/c05aba4f9))

## 1.208.2

### Bug fixes

- stripe: Enable CHF currency in paypal ([192b05ca2](https://github.com/mozilla/fxa/commit/192b05ca2))

## 1.208.1

### Bug fixes

- subscriptions: increase webhook payload limit ([a99fb8c0a](https://github.com/mozilla/fxa/commit/a99fb8c0a))

## 1.208.0

### New features

- push: Add basic support for verifying a login via push ([875fa4b26](https://github.com/mozilla/fxa/commit/875fa4b26))

### Bug fixes

- sessions: Add support for touchSessionToken to only update the lastAccess session property ([e67a60330](https://github.com/mozilla/fxa/commit/e67a60330))
- emails: address the customer in the subscriptionRenewalReminder email ([888b3efeb](https://github.com/mozilla/fxa/commit/888b3efeb))
- l10n: added missing commas ([d13ad71f0](https://github.com/mozilla/fxa/commit/d13ad71f0))

### Refactorings

- db: move more auth-db functions into fxa-shared ([d5b587472](https://github.com/mozilla/fxa/commit/d5b587472))
- auth: convert account to TS and class ([ef2d33a38](https://github.com/mozilla/fxa/commit/ef2d33a38))

### Other changes

- deps: bump stripe from 8.153.0 to 8.154.0 ([e1292ff7c](https://github.com/mozilla/fxa/commit/e1292ff7c))
- deps: updated some deps ([fa895572c](https://github.com/mozilla/fxa/commit/fa895572c))
- deps: updated pm2 ([34704ba14](https://github.com/mozilla/fxa/commit/34704ba14))
- deps: updated sentry/\* packages ([9095a1c13](https://github.com/mozilla/fxa/commit/9095a1c13))
- deps: bump aws-sdk from 2.920.0 to 2.923.0 ([3cb5b950c](https://github.com/mozilla/fxa/commit/3cb5b950c))
- deps-dev: bump @types/node from 14.14.5 to 15.12.2 ([1fd38c54d](https://github.com/mozilla/fxa/commit/1fd38c54d))
- deps: bump stripe from 8.149.0 to 8.153.0 ([d80d64d43](https://github.com/mozilla/fxa/commit/d80d64d43))
- deps-dev: bump nock from 13.0.11 to 13.1.0 ([4d52527d8](https://github.com/mozilla/fxa/commit/4d52527d8))
- deps: bump hot-shots from 8.3.1 to 8.3.2 ([0cb43b6aa](https://github.com/mozilla/fxa/commit/0cb43b6aa))
- deps: bump aws-sdk from 2.919.0 to 2.920.0 ([434cb0a53](https://github.com/mozilla/fxa/commit/434cb0a53))
- deps: bump aws-sdk from 2.913.0 to 2.919.0 ([a616dc89a](https://github.com/mozilla/fxa/commit/a616dc89a))
- deps-dev: bump grunt-cli from 1.4.2 to 1.4.3 ([957082de2](https://github.com/mozilla/fxa/commit/957082de2))
- deps: bump cldr-core from 38.1.0 to 39.0.0 ([af815470a](https://github.com/mozilla/fxa/commit/af815470a))
- deps: bump google-libphonenumber from 3.2.19 to 3.2.21 ([a287f7291](https://github.com/mozilla/fxa/commit/a287f7291))
- auth-server: asyncify signin ([98c1a09bf](https://github.com/mozilla/fxa/commit/98c1a09bf))
- deps: updated knex ([e02c6720e](https://github.com/mozilla/fxa/commit/e02c6720e))

## 1.207.1

No changes.

## 1.207.0

### New features

- emails: add email for subscription renewal reminder ([f29f73e33](https://github.com/mozilla/fxa/commit/f29f73e33))
- subscriptions: allow plans list access without auth ([46f1a2032](https://github.com/mozilla/fxa/commit/46f1a2032))
- auth-server: add locale to zendesk tickets ([22ef92be9](https://github.com/mozilla/fxa/commit/22ef92be9))
- auth: create script to send subscription renewal reminder emails ([178cec80a](https://github.com/mozilla/fxa/commit/178cec80a))

### Bug fixes

- auth-server: refund deleted users ([dedd02ac4](https://github.com/mozilla/fxa/commit/dedd02ac4))
- session: Update sessionToken data in redis when used by route ([32c5bd010](https://github.com/mozilla/fxa/commit/32c5bd010))

### Other changes

- deps: bump mocha from 7.2.0 to 8.4.0 ([4b11eab5f](https://github.com/mozilla/fxa/commit/4b11eab5f))
- deps: bump stripe from 8.148.0 to 8.149.0 ([07559e710](https://github.com/mozilla/fxa/commit/07559e710))
- deps: update some deps ([6fce48032](https://github.com/mozilla/fxa/commit/6fce48032))
- deps: added "yarn outdated" plugin + updated some deps ([952e4f388](https://github.com/mozilla/fxa/commit/952e4f388))
- auth: clean up subscription-reminders script ([05229412d](https://github.com/mozilla/fxa/commit/05229412d))
- code: remove unused webauthn/fido code ([1021ecaf6](https://github.com/mozilla/fxa/commit/1021ecaf6))
- deps-dev: bump @types/jsrsasign from 8.0.11 to 8.0.12 ([11d310258](https://github.com/mozilla/fxa/commit/11d310258))
- deps-dev: bump @types/ioredis from 4.26.1 to 4.26.4 ([87a47e798](https://github.com/mozilla/fxa/commit/87a47e798))
- deps: bump @hapi/hapi from 20.1.0 to 20.1.3 ([a43fc63f4](https://github.com/mozilla/fxa/commit/a43fc63f4))
- emails: update copy for failed payment email ([2f9ab7494](https://github.com/mozilla/fxa/commit/2f9ab7494))

## 1.206.1

### Bug fixes

- auth: fixed email_notifications startup ([a1dcfa7ed](https://github.com/mozilla/fxa/commit/a1dcfa7ed))

## 1.206.0

### New features

- auth-server: add stripe metric details ([c7202b3a0](https://github.com/mozilla/fxa/commit/c7202b3a0))

### Bug fixes

- auth-server: paypal customer fix script ([42a7a3c9d](https://github.com/mozilla/fxa/commit/42a7a3c9d))
- scripts: fix dependencies for delete-account ([983d5d68f](https://github.com/mozilla/fxa/commit/983d5d68f))
- auth: Pass statsd argument of correct type to StripeHelper in paypal-processor ([7aab291eb](https://github.com/mozilla/fxa/commit/7aab291eb))
- email: update refresh recovery codes link in email ([84da8ae4e](https://github.com/mozilla/fxa/commit/84da8ae4e))
- fxa-auth-server: address changes in cldr-localenames-full package ([90a665fbb](https://github.com/mozilla/fxa/commit/90a665fbb))
- emails: Add date and time in verifyShortCodeEmail template ([79b7e5aeb](https://github.com/mozilla/fxa/commit/79b7e5aeb))
- fxa-auth-server/test: Allow to use non-localhost databases - closes #8316 ([139803eb6](https://github.com/mozilla/fxa/commit/139803eb6))

### Other changes

- deps: bump ioredis from 4.26.0 to 4.27.2 ([3bc7cd999](https://github.com/mozilla/fxa/commit/3bc7cd999))
- deps: bump stripe from 8.147.0 to 8.148.0 ([af1b4fdfa](https://github.com/mozilla/fxa/commit/af1b4fdfa))
- deps: bump mozlog from 3.0.1 to 3.0.2 ([f46bd3472](https://github.com/mozilla/fxa/commit/f46bd3472))
- deps: updated nodemailer ([c807e027b](https://github.com/mozilla/fxa/commit/c807e027b))
- auth-server: update stripe ([b283b768e](https://github.com/mozilla/fxa/commit/b283b768e))
- deps: update typescript to v4 ([2e9ff2e14](https://github.com/mozilla/fxa/commit/2e9ff2e14))
- deps: bump node-zendesk from 2.0.6 to 2.1.0 ([a62245f0e](https://github.com/mozilla/fxa/commit/a62245f0e))
- deps: bump email-addresses from 3.1.0 to 4.0.0 ([e03122393](https://github.com/mozilla/fxa/commit/e03122393))
- deps-dev: bump @types/jsrsasign from 8.0.9 to 8.0.11 ([d986f434d](https://github.com/mozilla/fxa/commit/d986f434d))
- deps-dev: bump @types/ioredis from 4.26.0 to 4.26.1 ([3333766f6](https://github.com/mozilla/fxa/commit/3333766f6))
- deps: updated pm2 ([0847e2545](https://github.com/mozilla/fxa/commit/0847e2545))
- deps: bump cldr-localenames-full from 38.1.0 to 39.0.0 ([0aa88a7ec](https://github.com/mozilla/fxa/commit/0aa88a7ec))
- deps: bump aws-sdk from 2.883.0 to 2.896.0 ([a45963d14](https://github.com/mozilla/fxa/commit/a45963d14))

## 1.205.0

### New features

- emails: add tables and models for email history ([16212769d](https://github.com/mozilla/fxa/commit/16212769d))

### Bug fixes

- emails: use site privacy notice url not product privacy notice ([079f7890f](https://github.com/mozilla/fxa/commit/079f7890f))
- config: actually use a regex for forcePasswordChange ([748c61e52](https://github.com/mozilla/fxa/commit/748c61e52))
- emails: send one payment failed email per invoice ([d4654c82d](https://github.com/mozilla/fxa/commit/d4654c82d))
- email: Correct broken account recovery links in emails ([81c682e76](https://github.com/mozilla/fxa/commit/81c682e76))

### Other changes

- deps-dev: bump @types/ioredis from 4.22.1 to 4.26.0 ([e9b653827](https://github.com/mozilla/fxa/commit/e9b653827))
- deps-dev: bump keypair from 1.0.1 to 1.0.3 ([ad39a767d](https://github.com/mozilla/fxa/commit/ad39a767d))
- deps: bump node-zendesk from 2.0.3 to 2.0.6 ([09a37d36b](https://github.com/mozilla/fxa/commit/09a37d36b))
- deps-dev: bump @types/mocha from 8.2.1 to 8.2.2 ([0723fa7f7](https://github.com/mozilla/fxa/commit/0723fa7f7))
- deps: bump jsrsasign from 10.1.13 to 10.2.0 ([61cd279b2](https://github.com/mozilla/fxa/commit/61cd279b2))

## 1.204.7

No changes.

## 1.204.6

No changes.

## 1.204.5

No changes.

## 1.204.4

No changes.

## 1.204.3

### Bug fixes

- emails: send one payment failed email per invoice ([54e634440](https://github.com/mozilla/fxa/commit/54e634440))

## 1.204.2

No changes.

## 1.204.1

### Bug fixes

- release: Add changelog notes and bump version for 204 ([5b8356e11](https://github.com/mozilla/fxa/commit/5b8356e11))

## 1.204.0

### New features

- email: add a pre-header option to email template ([48a3df842](https://github.com/mozilla/fxa/commit/48a3df842))

### Bug fixes

- l10n: use en-CA not en-GB for settings and payments ([ef404738d](https://github.com/mozilla/fxa/commit/ef404738d))
- emails: encode the legal docs redirect url query param correctly ([c68ed5441](https://github.com/mozilla/fxa/commit/c68ed5441))
- auth: Handle missing billing agreement id in handleInvoiceOpenEvent. ([bd02448ea](https://github.com/mozilla/fxa/commit/bd02448ea))
- fxa-auth-server: avoid logging errors for missing metrics flow ID with internal routes - fixes #8234 ([9dd28b777](https://github.com/mozilla/fxa/commit/9dd28b777))
- fxa-auth-server: Avoid error in sentry for missing remote address - fixes #7297 ([6cfa99df5](https://github.com/mozilla/fxa/commit/6cfa99df5))
- auth-server: fix stripe webhook errors ([7284456de](https://github.com/mozilla/fxa/commit/7284456de))
- auth-server: fix processor startup ([d2e07526c](https://github.com/mozilla/fxa/commit/d2e07526c))

### Other changes

- auth: append PayPalClientError message with PayPal error code ([f22a593a4](https://github.com/mozilla/fxa/commit/f22a593a4))
- deps: bump ioredis from 4.25.0 to 4.26.0 ([5c2832d52](https://github.com/mozilla/fxa/commit/5c2832d52))
- deps: bump aws-sdk from 2.879.0 to 2.883.0 ([47ddfc9bb](https://github.com/mozilla/fxa/commit/47ddfc9bb))

## 1.203.5

### Other changes

- fxa-payments-server: add paypal to subscription management"" ([d31f14b87](https://github.com/mozilla/fxa/commit/d31f14b87))

## 1.203.4

### Other changes

- fxa-payments-server: add paypal to subscription management" ([097ae6075](https://github.com/mozilla/fxa/commit/097ae6075))

## 1.203.3

### New features

- fxa-payments-server: add paypal to subscription management ([1379ec958](https://github.com/mozilla/fxa/commit/1379ec958))

### Bug fixes

- auth-server: address processor running bugs ([335ba82a0](https://github.com/mozilla/fxa/commit/335ba82a0))
- codes: Fix issue where user could not login if they have low recovery codes ([a3dcbd7ad](https://github.com/mozilla/fxa/commit/a3dcbd7ad))

## 1.203.2

### Bug fixes

- import: Use relative import for production ([8240f4f74](https://github.com/mozilla/fxa/commit/8240f4f74))

## 1.203.1

### Bug fixes

- import: Use relative import for production ([98778d0a4](https://github.com/mozilla/fxa/commit/98778d0a4))

## 1.203.0

### New features

- auth-server: send uncaught IPN type to Sentry Because: ([5f053726e](https://github.com/mozilla/fxa/commit/5f053726e))
- auth-server: copy billing address info to Stripe customer Because: ([5d5efb1c9](https://github.com/mozilla/fxa/commit/5d5efb1c9))
- auth-server: send emails for invoicing ([ff396226d](https://github.com/mozilla/fxa/commit/ff396226d))

### Bug fixes

- use created date on reactivate ([6ac5cf720](https://github.com/mozilla/fxa/commit/6ac5cf720))
- auth-server: restrict invoices to currenct subs ([e7a1bf3b2](https://github.com/mozilla/fxa/commit/e7a1bf3b2))
- auth: make gen_keys script path indepedent ([6cfc878ff](https://github.com/mozilla/fxa/commit/6cfc878ff))
- auth-server: handle failed checkout payments ([448188b40](https://github.com/mozilla/fxa/commit/448188b40))
- auth-server: allow payment error out ([c4acd33ef](https://github.com/mozilla/fxa/commit/c4acd33ef))

### Other changes

- deps: bump cldr-core from 37.0.0 to 38.1.0 ([4b8d4da99](https://github.com/mozilla/fxa/commit/4b8d4da99))
- deps: update convict ([52e626866](https://github.com/mozilla/fxa/commit/52e626866))
- deps-dev: bump @types/ioredis from 4.22.0 to 4.22.1 ([6a5575dcc](https://github.com/mozilla/fxa/commit/6a5575dcc))
- deps-dev: bump @types/verror from 1.10.3 to 1.10.4 ([fc67a2d21](https://github.com/mozilla/fxa/commit/fc67a2d21))
- deps: bump cbor from 5.1.0 to 7.0.4 ([916b9ec68](https://github.com/mozilla/fxa/commit/916b9ec68))
- deps: bump jsrsasign from 10.1.12 to 10.1.13 ([8f397ea8f](https://github.com/mozilla/fxa/commit/8f397ea8f))

## 1.202.3

No changes.

## 1.202.2

### Bug fixes

- auth-server: skip currency check without pmi ([788154c32](https://github.com/mozilla/fxa/commit/788154c32))

## 1.202.1

### Bug fixes

- auth-server: use proper relative import ([239bd37cf](https://github.com/mozilla/fxa/commit/239bd37cf))

## 1.202.0

### New features

- auth-server: handle IPN for billing agreement cancelled Because: ([381b00471](https://github.com/mozilla/fxa/commit/381b00471))
- payments-server: Display currency restrictions errors on front-end. ([abdde80c4](https://github.com/mozilla/fxa/commit/abdde80c4))
- auth-server: add error response for paypal ([acab246c2](https://github.com/mozilla/fxa/commit/acab246c2))
- auth-server: add credit note listener ([43bb1d6aa](https://github.com/mozilla/fxa/commit/43bb1d6aa))
- l10n: Add support for new locales ([23f26e217](https://github.com/mozilla/fxa/commit/23f26e217))
- auth-server: Refactor isEqualHelper ([d6ad53243](https://github.com/mozilla/fxa/commit/d6ad53243))
- auth-server: refund paypal transaction Because: ([697c6b3a5](https://github.com/mozilla/fxa/commit/697c6b3a5))
- auth: Change invoice.payment_succeeded to invoice.paid ([4f12f620d](https://github.com/mozilla/fxa/commit/4f12f620d))
- auth-server: pass ip through to paypal ([12173fccd](https://github.com/mozilla/fxa/commit/12173fccd))
- auth-server: add paypal BA update handler ([07c98c17c](https://github.com/mozilla/fxa/commit/07c98c17c))
- auth-server: remove paypal BA and cancel at end ([f0c48a4d6](https://github.com/mozilla/fxa/commit/f0c48a4d6))
- auth-server: Paypal chargeCustomer must be called with currencyCode ([0a487b4c1](https://github.com/mozilla/fxa/commit/0a487b4c1))
- auth-server: add paypal invoice processor ([e00be15ce](https://github.com/mozilla/fxa/commit/e00be15ce))
- auth-server: add isCurrencyCompatibleWithCountry function ([fa61dc5ae](https://github.com/mozilla/fxa/commit/fa61dc5ae))

### Bug fixes

- remove sandbox credentials ([55fd12b6f](https://github.com/mozilla/fxa/commit/55fd12b6f))
- auth-server: link invoice handler to webhook ([0b4914ea8](https://github.com/mozilla/fxa/commit/0b4914ea8))
- auth-server: Correctly format paypal AMT string ([e47882d3e](https://github.com/mozilla/fxa/commit/e47882d3e))

### Other changes

- deps-dev: bump nock from 13.0.7 to 13.0.11 ([f38836bf8](https://github.com/mozilla/fxa/commit/f38836bf8))
- deps: bump ioredis from 4.19.4 to 4.23.0 ([9d8fcbdba](https://github.com/mozilla/fxa/commit/9d8fcbdba))
- deps: bump @google-cloud/firestore from 4.9.4 to 4.9.6 ([697c38299](https://github.com/mozilla/fxa/commit/697c38299))
- deps: bump @types/convict from 5.2.1 to 5.2.2 ([afdfd3993](https://github.com/mozilla/fxa/commit/afdfd3993))
- deps-dev: bump @types/mocha from 7.0.2 to 8.2.1 ([1ccd661a1](https://github.com/mozilla/fxa/commit/1ccd661a1))
- Modify transactional emails ([fe383495d](https://github.com/mozilla/fxa/commit/fe383495d))
- deps: bump jsrsasign from 10.1.10 to 10.1.12 ([d6361102a](https://github.com/mozilla/fxa/commit/d6361102a))
- deps-dev: bump @types/ioredis from 4.17.3 to 4.22.0 ([b41bc223a](https://github.com/mozilla/fxa/commit/b41bc223a))
- deps: bump aws-sdk from 2.849.0 to 2.851.0 ([ba6f4b37e](https://github.com/mozilla/fxa/commit/ba6f4b37e))
- deps: bump @google-cloud/firestore from 4.8.1 to 4.9.4 ([dff4263e3](https://github.com/mozilla/fxa/commit/dff4263e3))

## 1.201.1

No changes.

## 1.201.0

### New features

- settings: replace connected service display name for Mac OS X with macOS on retrieval ([e9cbb4792](https://github.com/mozilla/fxa/commit/e9cbb4792))
- auth-server: adds logic to handleMerchPayment method to PayPalNotificationHandler Because: ([dfb8e5a2b](https://github.com/mozilla/fxa/commit/dfb8e5a2b))
- auth-server: add metrics for paypal client ([4dd6e8750](https://github.com/mozilla/fxa/commit/4dd6e8750))
- auth-server: add 'payment_provider' property to Customer object ([8c68113aa](https://github.com/mozilla/fxa/commit/8c68113aa))
- auth-server: add transaction search to paypal ([36d1351de](https://github.com/mozilla/fxa/commit/36d1351de))

### Bug fixes

- auth-server: Paypal requires uppercased currencyCode ([ab4119d6a](https://github.com/mozilla/fxa/commit/ab4119d6a))

### Other changes

- deps: bump aws-sdk from 2.841.0 to 2.849.0 ([1e3e08e4b](https://github.com/mozilla/fxa/commit/1e3e08e4b))
- auth/payments: Update README for PayPal secrets and feature flags. ([c496033ca](https://github.com/mozilla/fxa/commit/c496033ca))
- deps-dev: bump nock from 13.0.5 to 13.0.7 ([411638723](https://github.com/mozilla/fxa/commit/411638723))
- auth-server: Remove unused createSubscription method ([ef60f3961](https://github.com/mozilla/fxa/commit/ef60f3961))
- deps: bump jsrsasign from 8.0.20 to 10.1.10 ([8a7fd4cc9](https://github.com/mozilla/fxa/commit/8a7fd4cc9))
- deps: bump aws-sdk from 2.822.0 to 2.841.0 ([69f41b166](https://github.com/mozilla/fxa/commit/69f41b166))

## 1.200.0

### New features

- auth-server: cleanup paypal data on delete ([65ccc1341c](https://github.com/mozilla/fxa/commit/65ccc1341c))
- payments: Add createOrder handler to PayPal button ([d66166178c](https://github.com/mozilla/fxa/commit/d66166178c))
- auth-server: handle stripe invoice open events ([fa3d895902](https://github.com/mozilla/fxa/commit/fa3d895902))
- auth-server: handle invoice creation events ([0664b63e4a](https://github.com/mozilla/fxa/commit/0664b63e4a))
- auth-server: add paypal subscription create route ([6ffe4b5166](https://github.com/mozilla/fxa/commit/6ffe4b5166))
- auth-server: add route for getCheckout Token ([f6bc0268a9](https://github.com/mozilla/fxa/commit/f6bc0268a9))
- auth-server: adds createBillingAgreement method to PayPalHelper ([2f7c5a8dea](https://github.com/mozilla/fxa/commit/2f7c5a8dea))

### Bug fixes

- auth-server: Correct checks in createRoutes ([e51876cd77](https://github.com/mozilla/fxa/commit/e51876cd77))

### Other changes

- deps: bump @hapi/hapi from 20.0.1 to 20.1.0 ([d3423d960f](https://github.com/mozilla/fxa/commit/d3423d960f))
- l10n: combine the download l10n scripts ([37887cf115](https://github.com/mozilla/fxa/commit/37887cf115))
- deps: bump ioredis from 4.18.0 to 4.19.4 ([2401b869eb](https://github.com/mozilla/fxa/commit/2401b869eb))
- auth-server: Make mocha launch commands recursive ([baf1cf0849](https://github.com/mozilla/fxa/commit/baf1cf0849))
- deps-dev: bump @types/jsrsasign from 8.0.8 to 8.0.9 ([5f61da1e93](https://github.com/mozilla/fxa/commit/5f61da1e93))
- deps-dev: bump @types/jws from 3.2.2 to 3.2.3 ([7fcb687cdc](https://github.com/mozilla/fxa/commit/7fcb687cdc))

## 1.199.0

### New features

- auth-server: add paypal IPN handler ([8d5c253fe](https://github.com/mozilla/fxa/commit/8d5c253fe))
- auth-server: add chargeCustomer to Paypalhelper ([6617f203b](https://github.com/mozilla/fxa/commit/6617f203b))
- auth-server: add getCheckoutToken to PayPalHelper ([45206fc07](https://github.com/mozilla/fxa/commit/45206fc07))
- auth-server: add paypal enabled option ([9ccbb7a61](https://github.com/mozilla/fxa/commit/9ccbb7a61))

### Bug fixes

- metrics: fixed 'fxa - activity' metric ([a28ceeb74](https://github.com/mozilla/fxa/commit/a28ceeb74))
- auth: copy session verification method on password change ([e9d0cde89](https://github.com/mozilla/fxa/commit/e9d0cde89))

### Refactorings

- auth-server: split out stripe webhook routes ([b8f69f726](https://github.com/mozilla/fxa/commit/b8f69f726))

### Other changes

- auth-server: small clean-ups in paypal-client and paypal ([d5652f73d](https://github.com/mozilla/fxa/commit/d5652f73d))
- deps: bump @sentry/node from 6.0.0 to 6.0.1 ([3b6838b18](https://github.com/mozilla/fxa/commit/3b6838b18))
- auth-server: add ability to run remote tests with mocha vscode ([885c76c0e](https://github.com/mozilla/fxa/commit/885c76c0e))
- deps: bump @sentry/node from 5.29.1 to 6.0.0 ([147825a5b](https://github.com/mozilla/fxa/commit/147825a5b))

## 1.198.2

### Bug fixes

- metrics: fixed 'fxa - activity' metric ([bdd645c48](https://github.com/mozilla/fxa/commit/bdd645c48))

## 1.198.1

### Bug fixes

- metrics: fixed broken "fxa_reg - compete" metric ([b60af1620](https://github.com/mozilla/fxa/commit/b60af1620))

### Other changes

- 4e70b3f04 merge main->train-198 ([4e70b3f04](https://github.com/mozilla/fxa/commit/4e70b3f04))

## 1.198.0

### New features

- auth-server: add paypal helper ([109f5f486](https://github.com/mozilla/fxa/commit/109f5f486))
- auth-server: add paypal API base client ([322f4dcd5](https://github.com/mozilla/fxa/commit/322f4dcd5))

### Bug fixes

- oauth: fixed oauth -> auth error conversion after refactoring ([0be070bed](https://github.com/mozilla/fxa/commit/0be070bed))

### Other changes

- deps: update eslint to v7 ([7cf502be2](https://github.com/mozilla/fxa/commit/7cf502be2))
- docs: removed old endpoints from oauth api.md ([341d7f5ac](https://github.com/mozilla/fxa/commit/341d7f5ac))
- deps: removed fxa-notifier-aws dep ([71c8bc171](https://github.com/mozilla/fxa/commit/71c8bc171))

## 1.197.3

### Bug fixes

- metrics: fixed broken "fxa_reg - compete" metric ([b60af1620](https://github.com/mozilla/fxa/commit/b60af1620))

## 1.197.2

### Bug fixes

- oauth: fixed oauth -> auth error conversion after refactoring ([fff9a7460](https://github.com/mozilla/fxa/commit/fff9a7460))

## 1.197.1

No changes.

## 1.197.0

### Refactorings

- oauth: add /config route back ([5a80fd60b](https://github.com/mozilla/fxa/commit/5a80fd60b))
- auth: use native promises in all production / non-test code ([ea2ab78c1](https://github.com/mozilla/fxa/commit/ea2ab78c1))
- auth: use native promises more ([ee5b147cd](https://github.com/mozilla/fxa/commit/ee5b147cd))

### Other changes

- deps: bump cldr-localenames-full from 36.0.0 to 38.0.0 ([668adb77b](https://github.com/mozilla/fxa/commit/668adb77b))
- deps: bump moment from 2.25.3 to 2.29.1 ([76acfdd63](https://github.com/mozilla/fxa/commit/76acfdd63))
- deps: bump @google-cloud/firestore from 4.7.1 to 4.8.1 ([51efd64c1](https://github.com/mozilla/fxa/commit/51efd64c1))

## 1.196.0

### Bug fixes

- totp: downgrade session to email-based verification after TOTP is removed ([95568bf16](https://github.com/mozilla/fxa/commit/95568bf16))

### Refactorings

- oauth: remove old oauth-server logger ([f0ded6a63](https://github.com/mozilla/fxa/commit/f0ded6a63))
- oauth: remove final oauthdb functions ([35239ef36](https://github.com/mozilla/fxa/commit/35239ef36))
- oauth: remove oauthdb token functions ([e41a30edb](https://github.com/mozilla/fxa/commit/e41a30edb))
- oauth: remove oauthdb.revokeRefreshTokenById ([1b87b776a](https://github.com/mozilla/fxa/commit/1b87b776a))
- oauth: remove oauthdb.revokeAccessToken ([65778e050](https://github.com/mozilla/fxa/commit/65778e050))
- oauth: remove oauthdb.createAuthorizationCode ([385a103a8](https://github.com/mozilla/fxa/commit/385a103a8))
- oauth: rearranging oauth routes ([9f286e41c](https://github.com/mozilla/fxa/commit/9f286e41c))
- oauth: remove oauthdb.listAuthorizedClients ([66fbbdb4c](https://github.com/mozilla/fxa/commit/66fbbdb4c))
- oauth: remove oauthdb.revokeAuthorizedClients ([0df72abb9](https://github.com/mozilla/fxa/commit/0df72abb9))
- oauth: remove unused auth-scheme ([d749bd8b7](https://github.com/mozilla/fxa/commit/d749bd8b7))
- oauth: moved /oauth/id-token-verify ([f9a87b9d1](https://github.com/mozilla/fxa/commit/f9a87b9d1))
- oauth: remove unused dep injection ([2da3f170f](https://github.com/mozilla/fxa/commit/2da3f170f))
- oauth: remove oauthdb.checkRefreshToken ([d4d7df945](https://github.com/mozilla/fxa/commit/d4d7df945))
- oauth: remove oauthdb.getClientInfo ([76cf78c09](https://github.com/mozilla/fxa/commit/76cf78c09))
- oauth: remove unused "authBearer" scheme ([7e3af41ff](https://github.com/mozilla/fxa/commit/7e3af41ff))
- oauth: rewire auth-server to use new oauth route dir and remove previous ([90caa3de4](https://github.com/mozilla/fxa/commit/90caa3de4))
- oauth: moved /jwks and /authorized-clients implementations ([44fe0353c](https://github.com/mozilla/fxa/commit/44fe0353c))
- oauth: moved /introspect implementation ([c060d1041](https://github.com/mozilla/fxa/commit/c060d1041))
- oauth: move GET and POST /authorization routes ([7d1707e79](https://github.com/mozilla/fxa/commit/7d1707e79))
- oauth: moved /token implementation ([13c798c29](https://github.com/mozilla/fxa/commit/13c798c29))
- oauth: move /key-data route ([60b7355a4](https://github.com/mozilla/fxa/commit/60b7355a4))
- oauth: move /client/{client_id} route ([845f131cb](https://github.com/mozilla/fxa/commit/845f131cb))

### Other changes

- deps: bump @sentry/node from 5.23.0 to 5.29.1 ([0bc414ad2](https://github.com/mozilla/fxa/commit/0bc414ad2))
- f0f25d0be [fxa-auth-server] Upgrade uuid dependency ([f0f25d0be](https://github.com/mozilla/fxa/commit/f0f25d0be))
- legal: Update Mozilla Corporation address ([d263160cc](https://github.com/mozilla/fxa/commit/d263160cc))
- oauth: move oauth destroy route under auth server ([737a67887](https://github.com/mozilla/fxa/commit/737a67887))

## 1.195.4

No changes.

## 1.195.3

No changes.

## 1.195.2

No changes.

## 1.195.1

No changes.

## 1.195.0

### Bug fixes

- metrics: fire the account.signed event for mobile sync as well as desktop ([bac29fc30](https://github.com/mozilla/fxa/commit/bac29fc30))
- metrics: only fire 'account.signed' event for oldsync scope requests ([ebdfed857](https://github.com/mozilla/fxa/commit/ebdfed857))

### Refactorings

- oauth: move /verify route ([67fde4359](https://github.com/mozilla/fxa/commit/67fde4359))

### Other changes

- deps-dev: bump nock from 12.0.3 to 13.0.5 ([543f5bc54](https://github.com/mozilla/fxa/commit/543f5bc54))
- deps: bump moment-timezone from 0.5.31 to 0.5.32 ([e65f68c01](https://github.com/mozilla/fxa/commit/e65f68c01))

## 1.194.0

### Other changes

- fxa-client: removingparam style from /sessions/verify_code from both the frontend and backend ([0699c1506](https://github.com/mozilla/fxa/commit/0699c1506))
- deps: bump cbor from 5.0.2 to 5.1.0 ([ec81e397e](https://github.com/mozilla/fxa/commit/ec81e397e))
- deps: bump @google-cloud/firestore from 4.4.0 to 4.7.1 ([4da9902c2](https://github.com/mozilla/fxa/commit/4da9902c2))
- deps: bump hot-shots from 7.8.0 to 8.2.0 ([b5c99456d](https://github.com/mozilla/fxa/commit/b5c99456d))
- deps: bump cldr-core from 36.0.0 to 37.0.0 ([019adc594](https://github.com/mozilla/fxa/commit/019adc594))
- deps: bump @hapi/hapi from 19.2.0 to 20.0.1 ([8e26a5845](https://github.com/mozilla/fxa/commit/8e26a5845))
- deps-dev: bump ws from 6.2.1 to 7.4.0 ([9b8ea747a](https://github.com/mozilla/fxa/commit/9b8ea747a))

## 1.193.1

No changes.

## 1.193.0

### Other changes

- deps-dev: bump @types/jsrsasign from 8.0.5 to 8.0.8 ([14a245178](https://github.com/mozilla/fxa/commit/14a245178))
- deps: bump buf from 0.1.0 to 0.1.1 ([9c02da2de](https://github.com/mozilla/fxa/commit/9c02da2de))
- deps-dev: bump @types/cbor from 5.0.0 to 5.0.1 ([789f2c483](https://github.com/mozilla/fxa/commit/789f2c483))
- deps: bump grunt from 1.1.0 to 1.3.0 ([562cb5f75](https://github.com/mozilla/fxa/commit/562cb5f75))
- build: stop building docker images for each service by default ([a97de2e2a](https://github.com/mozilla/fxa/commit/a97de2e2a))
- deps-dev: bump leftpad from 0.0.0 to 0.0.1 ([da4280f85](https://github.com/mozilla/fxa/commit/da4280f85))
- deps: update node version to 14 ([6c2b253c1](https://github.com/mozilla/fxa/commit/6c2b253c1))
- deps: bump email-addresses from 2.0.2 to 3.1.0 ([3635cb766](https://github.com/mozilla/fxa/commit/3635cb766))
- deps: bump safe-regex from 1.1.0 to 2.1.1 ([65f7ad42d](https://github.com/mozilla/fxa/commit/65f7ad42d))

## 1.192.0

### New features

- subscriptions: handle 'customer.created' Stripe event ([4134ba197](https://github.com/mozilla/fxa/commit/4134ba197))

### Bug fixes

- oauth: increase `state` size limit for oauth requests ([cc45e8923](https://github.com/mozilla/fxa/commit/cc45e8923))
- script: added setupAuthDatabase to delete-account script. fixes #6704 ([abc48bf6d](https://github.com/mozilla/fxa/commit/abc48bf6d))
- log: Update metrics error log to trace ([b31f81b73](https://github.com/mozilla/fxa/commit/b31f81b73))

### Other changes

- deps-dev: bump grunt-cli from 1.2.0 to 1.3.2 ([352f6e2d1](https://github.com/mozilla/fxa/commit/352f6e2d1))

## 1.191.1

No changes.

## 1.191.0

### New features

- payments: set cache ttl on customers in redis ([d75f6c69a](https://github.com/mozilla/fxa/commit/d75f6c69a))
- payments: Use AccountCustomer info for Fetching Customer info ([466db2ddd](https://github.com/mozilla/fxa/commit/466db2ddd))

### Bug fixes

- ts: compile ts in the auth-server/scripts dir ([033041819](https://github.com/mozilla/fxa/commit/033041819))
- metrics: add service name to sync oauth Amplitude events ([4d5cca23a](https://github.com/mozilla/fxa/commit/4d5cca23a))

### Other changes

- deps: bump @google-cloud/firestore from 3.8.6 to 4.4.0 ([f6c0df4e7](https://github.com/mozilla/fxa/commit/f6c0df4e7))
- payments: bad stripe expand fields ([67c3afa3e](https://github.com/mozilla/fxa/commit/67c3afa3e))
- logs: updated tests for new log levels ([7ce6d102d](https://github.com/mozilla/fxa/commit/7ce6d102d))
- logs: lower the log level of some lines ([117685816](https://github.com/mozilla/fxa/commit/117685816))
- deps-dev: bump @types/jsonwebtoken from 8.3.9 to 8.5.0 ([1c7e7bb0a](https://github.com/mozilla/fxa/commit/1c7e7bb0a))
- config: Allow Firefox Desktop to request ecosystem telemetry scope. ([95da0e86e](https://github.com/mozilla/fxa/commit/95da0e86e))
- deps-dev: bump binary-split from 0.1.2 to 1.0.5 ([7adf9d194](https://github.com/mozilla/fxa/commit/7adf9d194))

## 1.190.1

### Bug fixes

- tests: increase test timeout ([06c693ae8](https://github.com/mozilla/fxa/commit/06c693ae8))

## 1.190.0

### New features

- auth: Add Create/Delete for Account-Customer Relationship ([147bbe3f6](https://github.com/mozilla/fxa/commit/147bbe3f6))
- auth: create script to populate accountCustomers table ([b1dfccf6b](https://github.com/mozilla/fxa/commit/b1dfccf6b))

### Other changes

- deps: bump @hapi/hoek from 8.5.1 to 9.1.0 ([70783c031](https://github.com/mozilla/fxa/commit/70783c031))
- deps: bump moment-timezone from 0.5.11 to 0.5.31 ([7a5554655](https://github.com/mozilla/fxa/commit/7a5554655))
- deps: bump urijs from 1.19.1 to 1.19.2 ([b02aa701e](https://github.com/mozilla/fxa/commit/b02aa701e))
- deps: bump node-zendesk from 1.4.0 to 2.0.3 ([5fc44cc92](https://github.com/mozilla/fxa/commit/5fc44cc92))
- deps-dev: bump acorn from 5.7.4 to 8.0.1 ([5804a55ab](https://github.com/mozilla/fxa/commit/5804a55ab))

## 1.189.1

### Bug fixes

- scripts: Copy scripts into dist directory ([354a608a0](https://github.com/mozilla/fxa/commit/354a608a0))

## 1.189.0

### New features

- auth-server: delete stripe record ([90b9fc4cc](https://github.com/mozilla/fxa/commit/90b9fc4cc))

### Other changes

- deps: updated cldr-core ([158a34a6d](https://github.com/mozilla/fxa/commit/158a34a6d))
- deps: bump keyv from 3.0.0 to 4.0.3 ([a709d249d](https://github.com/mozilla/fxa/commit/a709d249d))
- deps: bump cldr-localenames-full from 31.0.1 to 36.0.0 ([0f1a6b5a5](https://github.com/mozilla/fxa/commit/0f1a6b5a5))
- deps: bump google-libphonenumber from 3.2.9 to 3.2.13 ([fe4334080](https://github.com/mozilla/fxa/commit/fe4334080))
- deps: bump base64url from 3.0.0 to 3.0.1 ([33aa6370b](https://github.com/mozilla/fxa/commit/33aa6370b))
- deps-dev: bump jws from 3.1.5 to 4.0.0 ([a128a44e5](https://github.com/mozilla/fxa/commit/a128a44e5))
- deps: update mozlog ([a68310952](https://github.com/mozilla/fxa/commit/a68310952))
- monorepo: move deps to correct sub-packages ([a8cc232b9](https://github.com/mozilla/fxa/commit/a8cc232b9))

## 1.188.1

### Other changes

- ci: wait for mysql to respond on auth-server tests ([87db04dc9](https://github.com/mozilla/fxa/commit/87db04dc9))

## 1.188.0

### New features

- payments: display product name in subscription payment signup / signin flow ([bc6008280](https://github.com/mozilla/fxa/commit/bc6008280))
- subscriptions: add product specific app/service support field ([e5c6d77e8](https://github.com/mozilla/fxa/commit/e5c6d77e8))

### Bug fixes

- oauthdb: split creating oauthdb from main process startup. possibly a fix for #6100 ([a4407cda0](https://github.com/mozilla/fxa/commit/a4407cda0))
- docker: Copy version.json into expected path /app/version.json ([a98ab01f0](https://github.com/mozilla/fxa/commit/a98ab01f0))
- metrics: include the client_id when logging the `oauth.token.created` event ([f6b1de84c](https://github.com/mozilla/fxa/commit/f6b1de84c))

### Other changes

- deps-dev: bump @types/jsrsasign from 8.0.3 to 8.0.5 ([5204b4a44](https://github.com/mozilla/fxa/commit/5204b4a44))
- deps-dev: bump grunt-newer from 1.2.0 to 1.3.0 ([55445cd1b](https://github.com/mozilla/fxa/commit/55445cd1b))
- 7d8c9e4e0 Update web-push lib to latest version. ([7d8c9e4e0](https://github.com/mozilla/fxa/commit/7d8c9e4e0))

## 1.187.3

No changes.

## 1.187.2

### Bug fixes

- metrics: include the client_id when logging the `oauth.token.created` event ([651cbadb2](https://github.com/mozilla/fxa/commit/651cbadb2))

## 1.187.1

### Bug fixes

- docker: Copy version.json into expected path /app/version.json ([9536c64e6](https://github.com/mozilla/fxa/commit/9536c64e6))

## 1.187.0

### New features

- docker: publish fxa-mono docker image ([2742c1d07](https://github.com/mozilla/fxa/commit/2742c1d07))

### Bug fixes

- oauth: do not issue JWT access tokens that include a ppid_seed and grant access to profile scopes ([148bef705](https://github.com/mozilla/fxa/commit/148bef705))
- emails: use default lang tag for sub emails when given invalid tag ([44a9908ec](https://github.com/mozilla/fxa/commit/44a9908ec))
- oauth: lower access token lifetimes to six hours plus five minutes ([5e48c0cce](https://github.com/mozilla/fxa/commit/5e48c0cce))
- metrics: Emit the the `flow.complete` event when a user creates an oauth token for sync: Emit the the `flow.complete` event when a user creates an oauth token for sync ([767b2f51a](https://github.com/mozilla/fxa/commit/767b2f51a))
- logging: trace log geodb failures: trace log geodb failures ([a47764c89](https://github.com/mozilla/fxa/commit/a47764c89))
- payments: pay invoice on retry ([408fcfe2b](https://github.com/mozilla/fxa/commit/408fcfe2b))

### Other changes

- oauth: do not issue JWT access tokens that both use PPIDs and grant access to profile scopes" ([90a0c2654](https://github.com/mozilla/fxa/commit/90a0c2654))
- payments: detach payment method on failed first sub payment ([80ae4c153](https://github.com/mozilla/fxa/commit/80ae4c153))
- payments: clean up subplat API code unused after SCA switch over ([13c5265fb](https://github.com/mozilla/fxa/commit/13c5265fb))

## 1.186.2

### Bug fixes

- metrics: Emit the the `flow.complete` event when a user creates an oauth token for sync: Emit the the `flow.complete` event when a user creates an oauth token for sync ([770677c68](https://github.com/mozilla/fxa/commit/770677c68))

## 1.186.1

### Bug fixes

- payments: pay invoice on retry ([71df1cfb2](https://github.com/mozilla/fxa/commit/71df1cfb2))

## 1.186.0

### New features

- payments: use existing card for new subscriptions ([044c891ca](https://github.com/mozilla/fxa/commit/044c891ca))

### Bug fixes

- payments: use default payment details in reactivation email ([367f39d9d](https://github.com/mozilla/fxa/commit/367f39d9d))
- validation: Allow unicode replacement character in display-safe strings. ([12cbb8caa](https://github.com/mozilla/fxa/commit/12cbb8caa))

### Other changes

- deps: update yarn version and root level deps ([da2e99729](https://github.com/mozilla/fxa/commit/da2e99729))

## 1.185.1

No changes.

## 1.185.0

### New features

- auth-server: remove sources on payment update ([b8f0cac20](https://github.com/mozilla/fxa/commit/b8f0cac20))
- auth-server: enhance must-reset script to accept a plain text list ([b68bd577a](https://github.com/mozilla/fxa/commit/b68bd577a))

### Bug fixes

- auth-server: attach payload data to sentry ([9b5ff1802](https://github.com/mozilla/fxa/commit/9b5ff1802))
- emails: Fix primary email change bug involving multiple accounts ([6d145b4a8](https://github.com/mozilla/fxa/commit/6d145b4a8))

### Other changes

- update typescript ([245568d56](https://github.com/mozilla/fxa/commit/245568d56))
- dependency updates ([aaa549ed6](https://github.com/mozilla/fxa/commit/aaa549ed6))
- emails: add CC expiration email for Multiple Products ([4f7ab36a7](https://github.com/mozilla/fxa/commit/4f7ab36a7))

## 1.184.1

No changes.

## 1.184.0

### Bug fixes

- payments: do not send payment failure emails during subscription creation flow ([5eb89ef66](https://github.com/mozilla/fxa/commit/5eb89ef66))
- payments: send subscription download email along with initial invoice ([d080dad75](https://github.com/mozilla/fxa/commit/d080dad75))

## 1.183.1

No changes.

## 1.183.0

### New features

- payments: implement metrics for SCA flows ([39f651722](https://github.com/mozilla/fxa/commit/39f651722))
- totp: remove session verification requirement from /totp/exists ([12b1be1d7](https://github.com/mozilla/fxa/commit/12b1be1d7))

### Bug fixes

- oidc: Allow prompt=none with id_token_hint for all RPs ([2c5687e86](https://github.com/mozilla/fxa/commit/2c5687e86))
- payments: ensure SCA flow sends download email and triggers customer update ([c20658beb](https://github.com/mozilla/fxa/commit/c20658beb))
- payments: ensure Customer data is not cached with an expiration TTL ([9ea05dcc8](https://github.com/mozilla/fxa/commit/9ea05dcc8))
- aet: Correctly check preconditions when updating ecosystemAnonId ([033070d38](https://github.com/mozilla/fxa/commit/033070d38))

## 1.182.2

### Bug fixes

- payments: ensure Customer data is not cached with an expiration TTL ([0dced12c6](https://github.com/mozilla/fxa/commit/0dced12c6))

## 1.182.1

### Bug fixes

- aet: Correctly check preconditions when updating ecosystemAnonId ([6131a627a](https://github.com/mozilla/fxa/commit/6131a627a))

## 1.182.0

### New features

- aet: make either precondition header mandatory when updating anon id ([e1ff5ed54](https://github.com/mozilla/fxa/commit/e1ff5ed54))
- auth-server: send email on upgrade from cancelled ([98ca2a16e](https://github.com/mozilla/fxa/commit/98ca2a16e))
- payments: use SetupIntent API for SCA payment update ([9592b4233](https://github.com/mozilla/fxa/commit/9592b4233))

### Bug fixes

- emails: Send post account verify email when created from sync scope client ([e587c4ef1](https://github.com/mozilla/fxa/commit/e587c4ef1))
- aet: When the eco_anon_id is updated, log the old and new values ([44598a3f2](https://github.com/mozilla/fxa/commit/44598a3f2))
- emails: Fix translation test ([ee696c65a](https://github.com/mozilla/fxa/commit/ee696c65a))

### Refactorings

- auth-server: convert subscriptions to TS ([b94d0c99b](https://github.com/mozilla/fxa/commit/b94d0c99b))
- auth-server: use type-cacheable for caching ([db20d6995](https://github.com/mozilla/fxa/commit/db20d6995))

### Other changes

- aet: Add logging to profile-server get anon_id route ([a571fcc82](https://github.com/mozilla/fxa/commit/a571fcc82))
- oauth: add Firefox Send oauth client to local config ([ec822aff0](https://github.com/mozilla/fxa/commit/ec822aff0))
- emails: remove ! from sub receipt email ([bad8a59a8](https://github.com/mozilla/fxa/commit/bad8a59a8))

## 1.181.2

### Bug fixes

- emails: Fix translation test ([41f73dee4](https://github.com/mozilla/fxa/commit/41f73dee4))

## 1.181.1

No changes.

## 1.181.0

### New features

- aet: support for if-match and if-none-match across the board ([f267e37f8](https://github.com/mozilla/fxa/commit/f267e37f8))
- auth-js + content: add updateEcosystemAnonId to auth clients ([d3ea36a7c](https://github.com/mozilla/fxa/commit/d3ea36a7c))
- auth-client: replace fxa-js-client with fxa-auth-client ([7358a3cae](https://github.com/mozilla/fxa/commit/7358a3cae))
- auth-server: create a subs w/out a payment method in req ([cb17f7703](https://github.com/mozilla/fxa/commit/cb17f7703))
- fido2: add fido lib server ([da8366ec5](https://github.com/mozilla/fxa/commit/da8366ec5))
- auth-server: add ecosystem anon id to ... oath.token.created metrics ping ([3691d2215](https://github.com/mozilla/fxa/commit/3691d2215))

### Bug fixes

- aet: Add support for updating ecosystemAnonId using sessionToken ([cea4eadff](https://github.com/mozilla/fxa/commit/cea4eadff))
- payments: use upcoming invoice for subscription reactivation price ([88426aa4d](https://github.com/mozilla/fxa/commit/88426aa4d))
- payments: subscription emails should work without payment methods ([d35048e92](https://github.com/mozilla/fxa/commit/d35048e92))

### Other changes

- deps: updated lodash ([56b7b6746](https://github.com/mozilla/fxa/commit/56b7b6746))

## 1.180.1

No changes.

## 1.180.0

### New features

- auth-server: use payment method on file for card ([c0642d514](https://github.com/mozilla/fxa/commit/c0642d514))
- profile+auth: pass anon id from profile to auth to db ([eb71dd4db](https://github.com/mozilla/fxa/commit/eb71dd4db))
- payments: Support new download URLs for legal links in emails ([28ebf9572](https://github.com/mozilla/fxa/commit/28ebf9572))
- payments: new subscription payment page with card authentication support ([56f28f7a1](https://github.com/mozilla/fxa/commit/56f28f7a1))
- aet: Add ecosystemAnonId to auth-db and mysql ([49917be6c](https://github.com/mozilla/fxa/commit/49917be6c))

### Bug fixes

- l10n: use accept language for currency l10n in emails ([57302814b](https://github.com/mozilla/fxa/commit/57302814b))
- test: use ts-node in transpile only mode for script tests ([48fc0ac65](https://github.com/mozilla/fxa/commit/48fc0ac65))
- lint: lol @ .swp in git ([cbe376905](https://github.com/mozilla/fxa/commit/cbe376905))
- tests: replace returns with resolves on stubs ([12efa0371](https://github.com/mozilla/fxa/commit/12efa0371))

### Refactorings

- auth-server: convert stripe.js to TS ([4ceb4f291](https://github.com/mozilla/fxa/commit/4ceb4f291))
- auth: remove redundant subscription code ([69fa047b2](https://github.com/mozilla/fxa/commit/69fa047b2))

### Other changes

- 6fc613c9f [fxa-auth-server] Support graceful shutdown also via SIGTERM ([6fc613c9f](https://github.com/mozilla/fxa/commit/6fc613c9f))

## 1.179.4

### Bug fixes

- l10n: use accept language for currency l10n in emails ([c5a614933](https://github.com/mozilla/fxa/commit/c5a614933))

## 1.179.3

No changes.

## 1.179.2

### Bug fixes

- test: use ts-node in transpile only mode for script tests ([867e492f0](https://github.com/mozilla/fxa/commit/867e492f0))

## 1.179.1

No changes.

## 1.179.0

### New features

- auth-server: add stripe object filtering ([de82e10d3](https://github.com/mozilla/fxa/commit/de82e10d3))
- auth-server: add setup intent methods ([f60c453e4](https://github.com/mozilla/fxa/commit/f60c453e4))
- add new stripe methods for payment method id ([e5f5d911a](https://github.com/mozilla/fxa/commit/e5f5d911a))

### Bug fixes

- oauth: Clarify that JWT `typ` header is case-insensitive. ([4afe925c1](https://github.com/mozilla/fxa/commit/4afe925c1))
- auth-server: allow customer to not have source on file ([21685ef29](https://github.com/mozilla/fxa/commit/21685ef29))
- auth-server: payload validation for payment methods ([1ac47bd08](https://github.com/mozilla/fxa/commit/1ac47bd08))
- attached-clients: Ignore a device's refreshTokenId if it's not a live token. ([3b980c6c9](https://github.com/mozilla/fxa/commit/3b980c6c9))

## 1.178.1

### Bug fixes

- devices: Fix response validation for /invoke_command ([88024cd10](https://github.com/mozilla/fxa/commit/88024cd10))

## 1.178.0

### New features

- oauth: Store refresh_token last-used-at timestamp in redis. ([d92005bb6](https://github.com/mozilla/fxa/commit/d92005bb6))
- emails: Add onMobileDevice mailOption for post registration email ([777a31e74](https://github.com/mozilla/fxa/commit/777a31e74))
- devices: Emit events for a basic "device commands" delivery funnel. ([5705fe683](https://github.com/mozilla/fxa/commit/5705fe683))

### Bug fixes

- reminders: only send reminders if the user has not logged into another device ([9f03c12e9](https://github.com/mozilla/fxa/commit/9f03c12e9))
- metrics: Create a new oauth token created event that includes sync device data ([19ce4152a](https://github.com/mozilla/fxa/commit/19ce4152a))
- auth-server: remove plan_name requirement ([5556f6335](https://github.com/mozilla/fxa/commit/5556f6335))
- l10n: polyfill Intl.NumberFormat for emails ([2a2fcf7ed](https://github.com/mozilla/fxa/commit/2a2fcf7ed))
- tests: fix l10n fallback language tests ([bbcae8a88](https://github.com/mozilla/fxa/commit/bbcae8a88))
- auth: use stage-specific sync url in post verify emails, when in stage ([2d566e40d](https://github.com/mozilla/fxa/commit/2d566e40d))

### Refactorings

- auth-server: restore TS check on stripe ([c342deb86](https://github.com/mozilla/fxa/commit/c342deb86))

### Other changes

- update hawk to @hapi/hawk ([cbe94f4ec](https://github.com/mozilla/fxa/commit/cbe94f4ec))
- deps: update deps ([27cd24c63](https://github.com/mozilla/fxa/commit/27cd24c63))
- docs: Replace 'master' with 'main' throughout ([20a0acf8b](https://github.com/mozilla/fxa/commit/20a0acf8b))

## 1.177.1

No changes.

## 1.177.0

### New features

- dev: handle skip ci label to skip tests ([ce0788085](https://github.com/mozilla/fxa/commit/ce0788085))
- emails: Add CAD reminder templates ([9e1046fb5](https://github.com/mozilla/fxa/commit/9e1046fb5))
- auth + content: add endpoint and hook up CAD QR flow to trigger reminder ([3ccc3b366](https://github.com/mozilla/fxa/commit/3ccc3b366))
- reminders: added CAD reminders to scripts/verification-reminders ([773ed269c](https://github.com/mozilla/fxa/commit/773ed269c))
- cad: Add remind me later CAD redis manager ([1032fde91](https://github.com/mozilla/fxa/commit/1032fde91))
- auth-server: use ToS ## 1.176.0 privacy links from Stripe metadata in subplat emails ([6b2817090](https://github.com/mozilla/fxa/commit/6b2817090))
- auth-server: update stripe api version ([822748e27](https://github.com/mozilla/fxa/commit/822748e27))

### Bug fixes

- emails: Swap grammatically incorrect 'How-To' for 'How To' ([31e141635](https://github.com/mozilla/fxa/commit/31e141635))
- oauth: Allow token requests to specify arbitrarily large TTL values ([0e9b4fa7b](https://github.com/mozilla/fxa/commit/0e9b4fa7b))
- payments: handle "charges" missing from the subscription object graph ([a4fe1fb94](https://github.com/mozilla/fxa/commit/a4fe1fb94))
- auth-server: use individual assignments ([c1b4d7a2f](https://github.com/mozilla/fxa/commit/c1b4d7a2f))

### Other changes

- deps: updated dependencies ([3fa952919](https://github.com/mozilla/fxa/commit/3fa952919))
- pm2: Add ISO timestamp to pm2 log lines ([2c5630adb](https://github.com/mozilla/fxa/commit/2c5630adb))

## 1.176.0

### New features

- password: Add force password screens ([14b0c2960](https://github.com/mozilla/fxa/commit/14b0c2960))
- ci: use store_test_results in circleci for auth-server ([4aab0ce02](https://github.com/mozilla/fxa/commit/4aab0ce02))

### Bug fixes

- devices: improve lastAccessTime accuracy for OAuth devices ([6bee0dfc1](https://github.com/mozilla/fxa/commit/6bee0dfc1))

### Refactorings

- oauth: drop the email column from codes, tokens and refreshTokens tables ([f51341d78](https://github.com/mozilla/fxa/commit/f51341d78))

## 1.175.0

### New features

- auth: handle a password change requirement in login ([c495177e8](https://github.com/mozilla/fxa/commit/c495177e8))
- emails: Add password change required email ([d1c14bcb3](https://github.com/mozilla/fxa/commit/d1c14bcb3))
- payments: revise currency formatting in subplat emails for l10n ([d2632a77a](https://github.com/mozilla/fxa/commit/d2632a77a))
- email: Update email template ([de7b9770a](https://github.com/mozilla/fxa/commit/de7b9770a))

### Bug fixes

- customs: Update customs to better handle email records ([b1499dd37](https://github.com/mozilla/fxa/commit/b1499dd37))
- customs: Update customs to better handle email records ([77df83c45](https://github.com/mozilla/fxa/commit/77df83c45))
- payments: use upcoming subscription invoice for one-time prorated charge ([a86c7c5ea](https://github.com/mozilla/fxa/commit/a86c7c5ea))

### Other changes

- format: Apply automated formatting to push-related code. ([81bf01d41](https://github.com/mozilla/fxa/commit/81bf01d41))
- subscriptions: get the country code from payment details ([c225b6c5a](https://github.com/mozilla/fxa/commit/c225b6c5a))

## 1.174.2

### Bug fixes

- customs: Update customs rules for session verify code ([c5eb726cb](https://github.com/mozilla/fxa/commit/c5eb726cb))

## 1.174.1

### Bug fixes

- customs: Update customs to better handle email records ([b1499dd37](https://github.com/mozilla/fxa/commit/b1499dd37))

## 1.174.0

### New features

- email: Update email template ([de7b9770a](https://github.com/mozilla/fxa/commit/de7b9770a))
- metrics: Emit statsd metrics around push message sending. ([dae87b3cc](https://github.com/mozilla/fxa/commit/dae87b3cc))

### Bug fixes

- local-dev: added fxa-shared and fxa-react to pm2 ([c3780546b](https://github.com/mozilla/fxa/commit/c3780546b))
- scripts: Fix the account reset script ([380ec72b4](https://github.com/mozilla/fxa/commit/380ec72b4))
- payments: Allow subscription downgrades ([4f83df33d](https://github.com/mozilla/fxa/commit/4f83df33d))
- auth: fixed test-local.sh in fxa-auth-server ([99385e89a](https://github.com/mozilla/fxa/commit/99385e89a))

### Other changes

- auth-server: Filter out collection_changed commands for iOS ([db9ab0581](https://github.com/mozilla/fxa/commit/db9ab0581))

## 1.173.0

### New features

- aet: add ecosystem_anon_id field to auth server core profile data ([2ee5be5a6](https://github.com/mozilla/fxa/commit/2ee5be5a6))

### Bug fixes

- build: fix paths to fxa-shared ([21fe09b72](https://github.com/mozilla/fxa/commit/21fe09b72))
- oauth: quiet logging on >24 hour tokens ([ea80a138f](https://github.com/mozilla/fxa/commit/ea80a138f))
- auth-server: fix incorrect response validation on subscription upgrade route ([5578ac306](https://github.com/mozilla/fxa/commit/5578ac306))
- docker: removed need for fxa-shared postinstall script ([b3b3d2c0e](https://github.com/mozilla/fxa/commit/b3b3d2c0e))
- auth-server: fix parameter name mismatches in subscription upgrade email templates ([59a96a242](https://github.com/mozilla/fxa/commit/59a96a242))
- auth-server: remove subhub references from delete-account script ([f7917060a](https://github.com/mozilla/fxa/commit/f7917060a))
- docker: need to specify types in some tsconfigs ([ad6ea3982](https://github.com/mozilla/fxa/commit/ad6ea3982))

### Refactorings

- tsconfig: consolidate common tsconfig options ([e565285b7](https://github.com/mozilla/fxa/commit/e565285b7))
- packages: use workspace references ([81575019a](https://github.com/mozilla/fxa/commit/81575019a))
- oauth: update inserts for codes, refreshTokens, tokens. Allow null email ([26df51060](https://github.com/mozilla/fxa/commit/26df51060))

### Other changes

- deps: update some dependencies ([fec460f6d](https://github.com/mozilla/fxa/commit/fec460f6d))
- format: mass reformat with prettier 2 and single config ([cc595fc2b](https://github.com/mozilla/fxa/commit/cc595fc2b))
- tests: clean up old Stripe customers after functional tests ([c0ca747a1](https://github.com/mozilla/fxa/commit/c0ca747a1))
- deps: updated mocha to 7.1.2 ([a5c1a339c](https://github.com/mozilla/fxa/commit/a5c1a339c))

## 1.172.2

No changes.

## 1.172.1

No changes.

## 1.172.0

### New features

- cad: Add metrics for the CAD via QR code ([bf6594db2](https://github.com/mozilla/fxa/commit/bf6594db2))
- cad: Add auth endpoint to generate CAD QR image ([91de57fed](https://github.com/mozilla/fxa/commit/91de57fed))
- support + auth server: add past product information to support panel ([bf8bc234d](https://github.com/mozilla/fxa/commit/bf8bc234d))

### Bug fixes

- auth server: use ts-node-script shebang when executing ts-dependent scripts ([b84554f1e](https://github.com/mozilla/fxa/commit/b84554f1e))
- metrics: Don't log `sendPush.success` message unless it actually succeeded. ([5ca76abb7](https://github.com/mozilla/fxa/commit/5ca76abb7))

### Other changes

- 9f09f182f Log push expired callbacks separately ([9f09f182f](https://github.com/mozilla/fxa/commit/9f09f182f))

## 1.171.1

No changes.

## 1.171.0

### New features

- payments: ignore hard email bounce errors in Stripe webhooks ([0d5cb9c72](https://github.com/mozilla/fxa/commit/0d5cb9c72))
- oauth: support jwt access tokens for Sync ([2476a02ed](https://github.com/mozilla/fxa/commit/2476a02ed))
- sms: make AWS.SNS.SMS.SMSType configurable ([393a6c99b](https://github.com/mozilla/fxa/commit/393a6c99b))
- auth-server: add plan changed metadata to subscription ([e31535526](https://github.com/mozilla/fxa/commit/e31535526))

### Bug fixes

- bug: small fixes for id_token_hint ([a8ea33b32](https://github.com/mozilla/fxa/commit/a8ea33b32))
- payments: record our subscription cancellation time to avoid duplicate email on account deletion ([e50335919](https://github.com/mozilla/fxa/commit/e50335919))
- deps: Add exception for yargs-parser nsp advisory 1500 ([b54877911](https://github.com/mozilla/fxa/commit/b54877911))
- payments: squelch error response to Stripe on expiring payment method without subscription ([cff67b91a](https://github.com/mozilla/fxa/commit/cff67b91a))

### Refactorings

- oauth: stop querying for 'email' in oauth tables ([e201e7631](https://github.com/mozilla/fxa/commit/e201e7631))

### Other changes

- auth-server: fix vscode launch.json test scripts ([dcee33f70](https://github.com/mozilla/fxa/commit/dcee33f70))

## 1.170.3

### Other changes

- auth + content-server: add new support form field and update options in dropdown" ([a714e4ccf](https://github.com/mozilla/fxa/commit/a714e4ccf))

## 1.170.2

No changes.

## 1.170.1

### New features

- sms: make AWS.SNS.SMS.SMSType configurable ([a169f9c00](https://github.com/mozilla/fxa/commit/a169f9c00))

## 1.170.0

### New features

- newsletters: Add subscribing to newsletters to signup flow ([1d731275e](https://github.com/mozilla/fxa/commit/1d731275e))
- auth + content-server: add new support form field and update options in dropdown ([08e9b8830](https://github.com/mozilla/fxa/commit/08e9b8830))

### Bug fixes

- payments: use period end from first invoice line for reactivation billing date ([c4b6bd86a](https://github.com/mozilla/fxa/commit/c4b6bd86a))
- event-broker: do not add items if REMOVE_CLIENT ([e707d83e9](https://github.com/mozilla/fxa/commit/e707d83e9))
- allow fixup script to remove bad settings ([99ac37605](https://github.com/mozilla/fxa/commit/99ac37605))

### Refactorings

- auth server: typescript lib/oauth/metrics ([97cf82ef5](https://github.com/mozilla/fxa/commit/97cf82ef5))
- logging: Remove some loquacious logging. Fix #5142 ([99241fc7a](https://github.com/mozilla/fxa/commit/99241fc7a))

### Other changes

- all: update readmes across all packages to improve testing documentation ([099163e94](https://github.com/mozilla/fxa/commit/099163e94))

## 1.169.3

### New features

- sms: make AWS.SNS.SMS.SMSType configurable ([a169f9c00](https://github.com/mozilla/fxa/commit/a169f9c00))

## 1.169.2

No changes.

## 1.169.1

### Bug fixes

- payments: use period end from first invoice line for reactivation billing date ([212f4049d](https://github.com/mozilla/fxa/commit/212f4049d))

## 1.169.0

### New features

- auth-server: add oauthdb firestore sync ([f40ed729b](https://github.com/mozilla/fxa/commit/f40ed729b))
- auth-server: emit login notif on oauth login ([cdca46d01](https://github.com/mozilla/fxa/commit/cdca46d01))
- access-tokens: prune access tokens form redis more frequently ([56cddad1a](https://github.com/mozilla/fxa/commit/56cddad1a))
- build: add a default dockerfile template to build.sh ([4dd0b0007](https://github.com/mozilla/fxa/commit/4dd0b0007))

### Bug fixes

- auth server: reference fxa-shared types in tsconfig ([6093452eb](https://github.com/mozilla/fxa/commit/6093452eb))
- geodb: make geodb accuracy logging optional ([a002393e3](https://github.com/mozilla/fxa/commit/a002393e3))
- payments: use period end from first invoice line for next billing date ([a4c16c282](https://github.com/mozilla/fxa/commit/a4c16c282))
- payments: switch to reactivate link in footer for subscription cancellation emails ([7acb7d776](https://github.com/mozilla/fxa/commit/7acb7d776))
- payments: avoid sending redundant subscription cancellation email after account deletion ([048ad3014](https://github.com/mozilla/fxa/commit/048ad3014))
- npm: fixed npm install in content-server etc ([11ddc0b60](https://github.com/mozilla/fxa/commit/11ddc0b60))

### Refactorings

- auth server: compile fxa-auth-server typescript for production, typescript lib/oauth/logging ([4b9b26241](https://github.com/mozilla/fxa/commit/4b9b26241))

### Other changes

- 40ec36790 Update link to OAuth JWT access tokens spec. ([40ec36790](https://github.com/mozilla/fxa/commit/40ec36790))

## 1.168.3

No changes.

## 1.168.2

No changes.

## 1.168.1

### New features

- auth-server: emit login notif on oauth login ([d20bb8f27](https://github.com/mozilla/fxa/commit/d20bb8f27))

## 1.168.0

### New features

- docker: created fxa-builder docker image ([d4da8a360](https://github.com/mozilla/fxa/commit/d4da8a360))
- payments: send email on subscription cancellation ## 1.167.1 reactivation ([bc9ea109d](https://github.com/mozilla/fxa/commit/bc9ea109d))
- auth server: prepare for typescript compilation ([5cd7a5b00](https://github.com/mozilla/fxa/commit/5cd7a5b00))
- payments: email sender method for subscription reactivation ([729ab4d47](https://github.com/mozilla/fxa/commit/729ab4d47))
- payments: logic for sending email on subscription upgrade/downgrade ([0ddb3ee7d](https://github.com/mozilla/fxa/commit/0ddb3ee7d))

### Bug fixes

- auth server: change order of email checks so primary check comes first ([ea08b28af](https://github.com/mozilla/fxa/commit/ea08b28af))
- config: Use a safe regex library rather than sandboxing builtins. ([8c8ab848b](https://github.com/mozilla/fxa/commit/8c8ab848b))

### Refactorings

- payments: subscription email cleanup ## 1.167.1 refactorings ([c8817429f](https://github.com/mozilla/fxa/commit/c8817429f))

### Other changes

- experiment: Remove the phase 2 recovery key and emails experiment ([e3fc8330f](https://github.com/mozilla/fxa/commit/e3fc8330f))
- cleanup: Remove the `marketingOptIn` param ([8a1446d43](https://github.com/mozilla/fxa/commit/8a1446d43))

## 1.167.1

No changes.

## 1.167.0

### New features

- payments: localization updates ([a0d64226f](https://github.com/mozilla/fxa/commit/a0d64226f))
- payments: email methods for subscription upgrade and downgrade ([bc4dfa933](https://github.com/mozilla/fxa/commit/bc4dfa933))
- settings: add error for when you try to add a secondary email already on your account ([36e21515d](https://github.com/mozilla/fxa/commit/36e21515d))

### Bug fixes

- payments: ensure 'invoices' is valid expandable Stripe resource ([2b4b803c3](https://github.com/mozilla/fxa/commit/2b4b803c3))

### Refactorings

- config: replace 127.0.0.1 with localhost ([1dd1b038d](https://github.com/mozilla/fxa/commit/1dd1b038d))
- pm2: restructure our pm2 configs ([3a054dfc3](https://github.com/mozilla/fxa/commit/3a054dfc3))
- npm-scripts: refactored npm scripts for better ergonomics ([a4b399634](https://github.com/mozilla/fxa/commit/a4b399634))

### Other changes

- 53bf24ad1 Add id_token_hint support to prompt=none ([53bf24ad1](https://github.com/mozilla/fxa/commit/53bf24ad1))
- 25370b2f3 L10n change request ([25370b2f3](https://github.com/mozilla/fxa/commit/25370b2f3))

## 1.166.2

### New features

- payments: localization updates ([47b03678e](https://github.com/mozilla/fxa/commit/47b03678e))

## 1.166.1

No changes.

## 1.166.0

### New features

- payment-server: mobile payments flow for fpn ([33e59c64d](https://github.com/mozilla/fxa/commit/33e59c64d))
- payments: subplat email logic on payment expiring ([a5ea8f89c](https://github.com/mozilla/fxa/commit/a5ea8f89c))
- payments: send email on subscription payment failure ([2d1195729](https://github.com/mozilla/fxa/commit/2d1195729))
- payments: email methods for subplat payment failed and expired ([b4e97d45f](https://github.com/mozilla/fxa/commit/b4e97d45f))
- metrics: add metrics to amplitude events ([75fa856a8](https://github.com/mozilla/fxa/commit/75fa856a8))
- metrics: log raw Amplitude events in auth server ([f4a3fd354](https://github.com/mozilla/fxa/commit/f4a3fd354))

### Bug fixes

- coverage: Report coverage ([d42aef600](https://github.com/mozilla/fxa/commit/d42aef600))
- metrics: update language property on Amplitude schema ([4f2c4493b](https://github.com/mozilla/fxa/commit/4f2c4493b))
- payments: mark up some missed subplat email template strings ([faf728c41](https://github.com/mozilla/fxa/commit/faf728c41))

### Refactorings

- payments: remove ttl for customer caching ([69f3aba23](https://github.com/mozilla/fxa/commit/69f3aba23))
- emails: move all email normalization and equality checks to helper functions ([ce1930f4b](https://github.com/mozilla/fxa/commit/ce1930f4b))

### Other changes

- auth-server: fix bad parameter being passed to stripeHelper.expandResource ([0e273c202](https://github.com/mozilla/fxa/commit/0e273c202))
- subscriptions: remove references to plan.name and plan.nickname ([4ffe01b37](https://github.com/mozilla/fxa/commit/4ffe01b37))

## 1.165.1

No changes.

## 1.165.0

### New features

- metrics: validate Amplitude events with a JSON schema ([63dadbc2c](https://github.com/mozilla/fxa/commit/63dadbc2c))
- stats: Add statsd block rate reporting ([b0cc46132](https://github.com/mozilla/fxa/commit/b0cc46132))
- payments: logic for sending emails subscription invoices ## 1.164.1 cancellation ([7010bcbe9](https://github.com/mozilla/fxa/commit/7010bcbe9))
- auth-server: prevent users from purchasing the same product with different plans ([3b068ae8d](https://github.com/mozilla/fxa/commit/3b068ae8d))
- settings: update settings UI to permit adding multiple secondary emails ([9ad167e5e](https://github.com/mozilla/fxa/commit/9ad167e5e))
- payments: email method for subscription cancellation on account deletion ([264adcc9d](https://github.com/mozilla/fxa/commit/264adcc9d))

### Bug fixes

- sentry: Add missing sentry mocks when disabled ([6913ab42d](https://github.com/mozilla/fxa/commit/6913ab42d))
- localdev: Help local dev environment work with mobile browsers. ([0bc155af3](https://github.com/mozilla/fxa/commit/0bc155af3))
- tests: Run script tests in CI ([2eb182098](https://github.com/mozilla/fxa/commit/2eb182098))
- payments: email template typo for "received" ([d9cb55500](https://github.com/mozilla/fxa/commit/d9cb55500))

### Refactorings

- oauth: finish removing the "email" field in oauth /v1/verify response ([617eddc4f](https://github.com/mozilla/fxa/commit/617eddc4f))

### Other changes

- deps: removed sjcl from auth-server ([60d2aa3fc](https://github.com/mozilla/fxa/commit/60d2aa3fc))

## 1.164.1

No changes.

## 1.164.0

### New features

- payments: emails for subscription invoices ## 1.163.2 cancellation ([92233d368](https://github.com/mozilla/fxa/commit/92233d368))
- email: add rel="noopener noreferrer" to any email links that have target="\_blank" ([15e8db604](https://github.com/mozilla/fxa/commit/15e8db604))

### Bug fixes

- recovery: Send `postAddAccountRecoveryEmail` when recovery key verified ([8e39d783f](https://github.com/mozilla/fxa/commit/8e39d783f))
- redis: Don't log an error if an access token is `null` in redis. ([6a61b33c0](https://github.com/mozilla/fxa/commit/6a61b33c0))
- payments: bugfix to subscription upgrade verification ([44dfcb377](https://github.com/mozilla/fxa/commit/44dfcb377))
- profile: Call `notifyAttachedServices` when profile-server data changes. ([8169dbe40](https://github.com/mozilla/fxa/commit/8169dbe40))

## 1.163.2

No changes.

## 1.163.1

No changes.

## 1.163.0

### New features

- payments: enable l10n for subscription download email ([ca1a55122](https://github.com/mozilla/fxa/commit/ca1a55122))
- secrets: pass in secrets.json file as env CONFIG_FILES where you can supply your own stripe keys ([dce8268b3](https://github.com/mozilla/fxa/commit/dce8268b3))
- subscriptions: implement idempotency when creating a subscriptions ([b1c387e12](https://github.com/mozilla/fxa/commit/b1c387e12))
- auth-server: update plan response format ([cf85ec068](https://github.com/mozilla/fxa/commit/cf85ec068))

### Bug fixes

- emails: update usage of button partial in emails to fix broken HTML structure ([2e57c3a91](https://github.com/mozilla/fxa/commit/2e57c3a91))
- payments: end-to-end subscription functional test with profile caching bugfix ([bdef8df9f](https://github.com/mozilla/fxa/commit/bdef8df9f))

### Other changes

- deps: Updates to address nsp advisory 1179 ([a5649db18](https://github.com/mozilla/fxa/commit/a5649db18))
- mysql: removed purge_expired_tokens script ([a176b56b4](https://github.com/mozilla/fxa/commit/a176b56b4))
- metrics: update calculation of auth server route perf metrics ([03a59a5e6](https://github.com/mozilla/fxa/commit/03a59a5e6))
- auth-server: fix validator ([82e7819d6](https://github.com/mozilla/fxa/commit/82e7819d6))

## 1.162.3

### Bug fixes

- redis: access token index ttl is in milliseconds, so use pexpire ([2f787e94c](https://github.com/mozilla/fxa/commit/2f787e94c))

## 1.162.2

### Bug fixes

- access-tokens: prune the access token index on set ([71291622d](https://github.com/mozilla/fxa/commit/71291622d))

## 1.162.1

No changes.

## 1.162.0

### New features

- auth-server: add created to subscription response ([ff8b8bb64](https://github.com/mozilla/fxa/commit/ff8b8bb64))
- add pm2 debug servers and add'l debug scripts ([5d3747e38](https://github.com/mozilla/fxa/commit/5d3747e38))

### Bug fixes

- payments: re-enable functional tests with direct Stripe access ([245e53a0e](https://github.com/mozilla/fxa/commit/245e53a0e))
- sms: Update google-libphonenumber to include newer area codes ([14069788a](https://github.com/mozilla/fxa/commit/14069788a))
- monorepo: update default node version across packages ([0f2d54071](https://github.com/mozilla/fxa/commit/0f2d54071))

### Refactorings

- ci: major refactor of CircleCI workflow ([7e77b0a29](https://github.com/mozilla/fxa/commit/7e77b0a29))
- oauth: Delete unused /client-tokens routes ([6718a0663](https://github.com/mozilla/fxa/commit/6718a0663))

### Other changes

- cleanup: remove obsolete docker files ([863e56163](https://github.com/mozilla/fxa/commit/863e56163))
- deps: Updates to address nsp advisory 1488 ([e47bc55ba](https://github.com/mozilla/fxa/commit/e47bc55ba))

## 1.161.2

### Bug fixes

- customs: remove email() validation restriction ([f6d05c464](https://github.com/mozilla/fxa/commit/f6d05c464))

## 1.161.1

### Other changes

- auth-server: Add missing `await` to var assignment ([f46aced31](https://github.com/mozilla/fxa/commit/f46aced31))

## 1.161.0

### New features

- payments: subscription email updates for template ## 1.160.1 config ([fa1d31440](https://github.com/mozilla/fxa/commit/fa1d31440))

### Bug fixes

- oauth: Do not store raw access tokens in Redis. ([a1c159e0d](https://github.com/mozilla/fxa/commit/a1c159e0d))
- mysql: Force MySQL connections to always use UTC timezone. ([c97f9e5b8](https://github.com/mozilla/fxa/commit/c97f9e5b8))
- auth-server: pass all redis set args ([2802e71a8](https://github.com/mozilla/fxa/commit/2802e71a8))
- lookup clientids in eventbroker ([bb1b25585](https://github.com/mozilla/fxa/commit/bb1b25585))
- payments: support clientId as buffer in subscription capability lookup ([e8ba4652c](https://github.com/mozilla/fxa/commit/e8ba4652c))

### Other changes

- auth-server: add payment_intent check in handling open invoices ([e02b8fabe](https://github.com/mozilla/fxa/commit/e02b8fabe))
- auth-server: add coverage for subscriptionsToResponse ([2abad7cb0](https://github.com/mozilla/fxa/commit/2abad7cb0))
- auth-server: add coverage for getSubscriptions ([f59a004a7](https://github.com/mozilla/fxa/commit/f59a004a7))
- subscriptions: remove code ## 1.160.1 tests using subhub and accountsSubscriptions table ([d09125b8c](https://github.com/mozilla/fxa/commit/d09125b8c))
- subscriptions: remove subscription routes that used accountSubscriptions table ([514c8b837](https://github.com/mozilla/fxa/commit/514c8b837))
- auth-server: add coverage for listActive ([d791574c9](https://github.com/mozilla/fxa/commit/d791574c9))
- tests: Remove leftover references to ./fxa-oauth-server in tests/linters. ([7a50ecbe0](https://github.com/mozilla/fxa/commit/7a50ecbe0))
- deps: updated auth-server to latest hapi-error. (re)moved some others ([d3584492e](https://github.com/mozilla/fxa/commit/d3584492e))
- deps: update auth-server to @hapi/hawk ([c3bc6c453](https://github.com/mozilla/fxa/commit/c3bc6c453))
- deps: update auth-server to @hapi/joi 15 ([03c438651](https://github.com/mozilla/fxa/commit/03c438651))
- auth: updated auth-server to latest hapi ([714ad19a0](https://github.com/mozilla/fxa/commit/714ad19a0))
- contributing: update contact information to reflect move to Matrix ([4e7082856](https://github.com/mozilla/fxa/commit/4e7082856))
- 356a1bf27 Sync fxa-customs-server ([356a1bf27](https://github.com/mozilla/fxa/commit/356a1bf27))

## 1.160.1

### Bug fixes

- lookup clientids in eventbroker ([35d83f9d2](https://github.com/mozilla/fxa/commit/35d83f9d2))
- payments: support clientId as buffer in subscription capability lookup ([2757a06e1](https://github.com/mozilla/fxa/commit/2757a06e1))

## 1.160.0

### New features

- stripe mismatch checker ([5f5928dfd](https://github.com/mozilla/fxa/commit/5f5928dfd))
- oauth: store access tokens in redis ([6ccebc1de](https://github.com/mozilla/fxa/commit/6ccebc1de))
- recovery: Add confirm recovery key js client calls ([672e8c4e6](https://github.com/mozilla/fxa/commit/672e8c4e6))

### Bug fixes

- auth-server: use raw email for primary updates ([35292349c](https://github.com/mozilla/fxa/commit/35292349c))
- use proper email in mismatch script ([97201384c](https://github.com/mozilla/fxa/commit/97201384c))
- experiments: Audit and enable emails and recovery key experiments ([924048afd](https://github.com/mozilla/fxa/commit/924048afd))
- nits: fixed nits in redis access token PR ([c06f56fa1](https://github.com/mozilla/fxa/commit/c06f56fa1))
- coverage: Remove the temporary coverage directory before running tests ([19302cb45](https://github.com/mozilla/fxa/commit/19302cb45))
- auth-server: stripe refresh on primary change ([182fec804](https://github.com/mozilla/fxa/commit/182fec804))

### Other changes

- auth-server: add coverage for getCustomer ([cac9411e1](https://github.com/mozilla/fxa/commit/cac9411e1))
- auth-server: add coverage for updatePayment ([19fdbd6dc](https://github.com/mozilla/fxa/commit/19fdbd6dc))
- auth-server: remove subscription capabilities in server config ([a663d7b8a](https://github.com/mozilla/fxa/commit/a663d7b8a))
- auth-server: coverage for getCustomerUidEmailFromSubscription ([6c2ade774](https://github.com/mozilla/fxa/commit/6c2ade774))
- oauth: added tests for Pocket access tokens ([909480b91](https://github.com/mozilla/fxa/commit/909480b91))
- auth-server: Coverage for sendSubscriptionStatusToSqs ([9cd6cb0ee](https://github.com/mozilla/fxa/commit/9cd6cb0ee))
- auth-server: Coverage for handleWebhookEvent ([6932cc034](https://github.com/mozilla/fxa/commit/6932cc034))
- config: add redis config for access tokens redis ([e022b1f59](https://github.com/mozilla/fxa/commit/e022b1f59))
- auth-server: Coverage for reactivateSubscription ([fd5c201a1](https://github.com/mozilla/fxa/commit/fd5c201a1))
- auth-server: Coverage for createSubscription ([64705df7b](https://github.com/mozilla/fxa/commit/64705df7b))
- auth-server: Coverage for createSubscriptionExistingCustomer ([3a855e9ce](https://github.com/mozilla/fxa/commit/3a855e9ce))
- auth-server: Coverage for Delete Subscription ([98efe9f0b](https://github.com/mozilla/fxa/commit/98efe9f0b))
- auth-server: Coverage for DirectStripeRoutes updateSubscription ([3bac06e2e](https://github.com/mozilla/fxa/commit/3bac06e2e))
- auth-server: Coverage for getUidEmail ([33ed34ca3](https://github.com/mozilla/fxa/commit/33ed34ca3))
- auth-server: Coverage for handleOpenInvoice ([1be8c3cb2](https://github.com/mozilla/fxa/commit/1be8c3cb2))
- routes/subscriptions.js: Coverage for updateCustomerAndSendStatus ([bdb413747](https://github.com/mozilla/fxa/commit/bdb413747))

## 1.159.0

### New features

- oauth: added redis scripts to store oauth access tokens ([13962dc09](https://github.com/mozilla/fxa/commit/13962dc09))

### Bug fixes

- auth-server: Get delete-account.js working again ([1598b68be](https://github.com/mozilla/fxa/commit/1598b68be))
- docker: don't rm /tmp after npm i ([6fc34fc45](https://github.com/mozilla/fxa/commit/6fc34fc45))
- email: Minor CSS tweaks for subscription email ([5a8df880d](https://github.com/mozilla/fxa/commit/5a8df880d))
- auth-server: don't delete the stripe customer ([50fe8b28b](https://github.com/mozilla/fxa/commit/50fe8b28b))

### Other changes

- auth-server: add missing direct stripe test ([edb0dc7b6](https://github.com/mozilla/fxa/commit/edb0dc7b6))
- fxa stripeHelper: add tests ([849ee53ed](https://github.com/mozilla/fxa/commit/849ee53ed))
- nsp: add four nsp exceptions to auth and profile servers. ([ca8b53826](https://github.com/mozilla/fxa/commit/ca8b53826))
- email: fix fx logo in subscription email ([139ac1a8f](https://github.com/mozilla/fxa/commit/139ac1a8f))

## 1.158.1

### Bug fixes

- auth-server: don't delete the stripe customer ([a9905480e](https://github.com/mozilla/fxa/commit/a9905480e))

## 1.158.0

### New features

- keys: Add ability to enable/disable recovery key ([dba5ee65d](https://github.com/mozilla/fxa/commit/dba5ee65d))
- auth-server: support topic as custom fld ([2f0e748b5](https://github.com/mozilla/fxa/commit/2f0e748b5))
- auth-server: add stripe metric timings ([bc80ac9f6](https://github.com/mozilla/fxa/commit/bc80ac9f6))
- coverage: Add coveralls coverage ([932b70c3c](https://github.com/mozilla/fxa/commit/932b70c3c))
- payments: script to populate redis cache with Stripe customers ([f7d1a1f27](https://github.com/mozilla/fxa/commit/f7d1a1f27))

### Bug fixes

- auth-server: use cached customer only ([8b9eee1fd](https://github.com/mozilla/fxa/commit/8b9eee1fd))
- payments: fix subscription create route with missing awaits ([3a39a7a29](https://github.com/mozilla/fxa/commit/3a39a7a29))
- subscriptions: return an empty list when FxA user is not a customer ([4d4c40ba7](https://github.com/mozilla/fxa/commit/4d4c40ba7))
- auth-server: handle stripe webhooks correctly ([c50f6dec9](https://github.com/mozilla/fxa/commit/c50f6dec9))
- deps: Ignore hoek nsp warning https://npmjs.com/advisories/1468 ([6c0edfa9c](https://github.com/mozilla/fxa/commit/6c0edfa9c))
- payments: use separate long-term TTL for Stripe customer cache ([b43e317f1](https://github.com/mozilla/fxa/commit/b43e317f1))
- auth-server: use cached stripe customer ([170b4abd9](https://github.com/mozilla/fxa/commit/170b4abd9))
- payments: refresh cached customer data rather than delete ([f7e97cf8f](https://github.com/mozilla/fxa/commit/f7e97cf8f))
- auth-server: use tags for paths/method ([1dfc9aaa7](https://github.com/mozilla/fxa/commit/1dfc9aaa7))

### Other changes

- mem: Remove auth server db memory database ([2fa9dce43](https://github.com/mozilla/fxa/commit/2fa9dce43))
- subscription routes: e45509d02 test(subscription routes) - add tests for direct stripe integration ([e45509d02](https://github.com/mozilla/fxa/commit/e45509d02))
- deps: Update hoek where we use it directly ([ee998b304](https://github.com/mozilla/fxa/commit/ee998b304))

## 1.157.0

### New features

- logging: Log details of the grant when generating OAuth tokens. ([3dc7fff5a](https://github.com/mozilla/fxa/commit/3dc7fff5a))
- auth-server: add hapi route metric timings ([a530f3a17](https://github.com/mozilla/fxa/commit/a530f3a17))

### Bug fixes

- auth-server: screen profile stripe subs ([686c38eb2](https://github.com/mozilla/fxa/commit/686c38eb2))
- auth-server: handle incomplete subscription ([1d294ef81](https://github.com/mozilla/fxa/commit/1d294ef81))
- auth-server: Return expected 'plan_name' for subscriptions based on subhub implementation ([ec9a287e0](https://github.com/mozilla/fxa/commit/ec9a287e0))
- auth-server: pass missing zen/stripe args ([51470ae36](https://github.com/mozilla/fxa/commit/51470ae36))
- subscriptions: wrap payment token failures in expected error class ([e6f2ea9ec](https://github.com/mozilla/fxa/commit/e6f2ea9ec))
- codes: Verify session first then send push notifications ([7ce324833](https://github.com/mozilla/fxa/commit/7ce324833))

## 1.156.0

### Bug fixes

- subscriptions: ensure direct stripe code includes all parameters for download email (77fac7ad1)

### Other changes

- subscriptions: code clarity tweak for determining subscriptions (0adcb91d6)

## 1.155.0

### New features

- support-panel: display geo info (693339956)
- subscriptions: invalidate cache on 'customer.updated' event (979cd53ef)
- auth-server: update Stripe on email change (f100cd1bb)
- auth-server: use Stripe data for subscriptions ## 1.154.0 capabilities (e46c8a89d)
- auth-server: direct stripe API usage (21bccd703)
- update zendesk email on primary change (3fa78db8b)

### Bug fixes

- oauth: Don't send "new device" email when oauth tokens reuse existing device. (16228ad9b)
- devices: maintain the device id during the token exchange (3abe69355)
- sms: expose sms polling interval as a config option (257c0963c)

### Refactorings

- support-panel: get subscriptions from auth-server (25efa5c24)
- redis: Use lua scripts for session token metadata functions (41498bd9d)
- key_server: cleanup key_server.js (f44a50f6b)
- auth-server: async and setup stripeHelper (d957e10e2)
- git: merge all package gitignores into single root-level gitignore (a238c3d27)

### Other changes

- dependency cleanup: eliminate hapi-fxa-oath dependency (e0ef126c0)

## 1.154.0

### New features

- totp: Require recovery code confirmation before enabling TOTP (ae3bd5a0f)

### Bug fixes

- metrics: Emit the `email_confirmed` metric when user verifies a sign-in (019574c92)

## 1.153.0

### New features

- support: add location to support ticket (8a62b3942)
- reminders: Test verification reminders. (47f58654a)
- event-broker: use proper hapi/sqs filtering (6c9899e64)
- signin: Signin w/ unverified accounts uses codes (f384a7eed)
- emails: Add verify secondary email by code routes (e06b3edf3)

### Bug fixes

- metrics: Update our email experiment metrics (a4943378b)
- user-agent: Parse user agents as 'tablet' for iPads sending desktop headers (27fd3cc20)
- test: Update sign up code previous window test (71b067de9)

### Refactorings

- auth-server: asyncify utils/otp and utils/signup (ab83c956f)
- auth-server: asyncify lib/email (c75e9e558)
- api: prefer async/await in lib/routes/account.js (79f2b050b)
- auth-server: asyncify lib/tokens (811aee303)
- auth-server: asyncify devices/push/AM (2de519da6)
- auth-server: asyncify signer/updates/BS (e914b95ac)
- auth-server: async/await updates (1d44b3dc0)

### Other changes

- metrics: up the default auth server StatsD sampling rate to 1 (d033a1064)
- monorepo: remove stale references to travisci (9b4789125)
- node: updated node to v12 (7169a367e)
- refactor: Add await to `request.app.devices` where needed (9024ec7f5)
- subhub: handle subscription upgrades in stub API (2f9d9b8cc)
- refactor: Remove token code routes, js endpoints and docs (216af8bc2)

## 1.152.1

### Bug fixes

- metrics: Update our email experiment metrics (aee0cff1f)

## 1.152.0

### New features

- payments: use Stripe metadata as source for product name, icon, download URL (eb3a58224)

### Bug fixes

- stats: collect timing stats on failed HTTP API calls (2e592fc29)
- payments: change download URLs in subhub stub metadata to point to 123done (319c708bd)

## 1.151.5

No changes.

## 1.151.4

No changes.

## 1.151.3

No changes.

## 1.151.2

### Bug fixes

- totp: Increase otp code test window (e877f7442)

## 1.151.1

### Bug fixes

- emails: Add email templates for adding secondary email, recovery key, and both after account verified (7e329ffb3)
- totp: Use a shared helper to check otp codes (ebce25c49)

## 1.151.0

### New features

- auth-server: add tiered subs with subhub (c9f202913)
- audit: run npm audit on push instead of in ci (ccd3c2b07)
- cors: Ignore `Origin` header if all origins are allowed. (fd87fd3fd)
- auth-server: support plan upgrade commands (2e692e9fa)
- metrics: Add metrics to subscription account create funnel (6aacf923e)
- auth-server: accept product ## 1.150.9 plan metadata from subhub (384b41dd2)

### Bug fixes

- totp: Use the totp options instead of global options (00696d481)
- deps: Fix a bunch of audit warnings (f8a1da3be)
- auth-server: move stripe dep out of devDependencies (49aec79b5)
- totp: Set TOTP options when used in the route instead of when it is instantiated (c870144a7)
- email: update subscription TOS url to be correct (c474aa025)
- auth-server: tweaks to get subscription upgrade working with latest subhub (d4f859bee)
- event-broker: allow userAgent to be empty (8ce686a02)
- fxa-dev: add basePath to oauth routes on auth-server (c22c36090)
- tests: Add Fairfield to known cities (5d847ac6c)
- email: Ensure the action buttons are translated (843a5535b)
- metrics: Restore high volume oauth events from amplitude logging (a40e8ac05)

### Refactorings

- auth: removed fxa-auth-server/fxa-oauth-server (91ebfcf1d)

### Other changes

- deps: Remove stale nsp exceptions from .nsprc files (f7324a1b2)
- deps: Get audit-filter working for all packages in monorepo (1b0141e2b)
- monorepo: eslint consolidation (0a5e3950f)

## 1.150.9

No changes.

## 1.150.8

### Bug fixes

- auth-server: async/await oops (8a7530344)

## 1.150.7

### Bug fixes

- cors: oauth routes need "origin: ignore" (08b040afc)

## 1.150.6

No changes.

## 1.150.5

No changes.

## 1.150.4

No changes.

## 1.150.3

No changes.

## 1.150.2

### Bug fixes

- tests: Add Fairfield to known cities (61daf8709)
- email: Ensure the action buttons are translated (93bb8851e)

## 1.150.1

### New features

- keys: Explicitly track timestamp of last key rotation. (f8dbdfad9)

### Bug fixes

- metrics: Restore high volume oauth events from amplitude logging (ea3f285e5)
- metrics: restore high volume oauth events from amplitude logging. part 2 (0118e4db3)

## 1.150.0

### New features

- auth-server: add more backend error data (d42d6acdf)
- auth-server: add zendesk API retries (0d448d0ec)
- auth-server: retain backendService errors (959efe028)
- auth-server: add proper support backend err (d9dfec0d1)
- auth-server: add typescript checking capability (a73a2abc5)

### Bug fixes

- auth-server: restore original behavior (7382c554c)
- tests: fix auth-server test initialization (e546ae438)

### Refactorings

- async/await: Update lib/routes/defaults to use async/await (2e19ecda2)
- build: some random dev build changes (3c3a888a8)
- oauth: move oauth-server into auth-server (phase 2) (b5f7df167)
- api: prefer async/await in emails routes (98b4a3e50)

### Other changes

- 04f780116 Review feedback fixes. (04f780116)

## 1.149.4

No changes.

## 1.149.3

No changes.

## 1.149.2

### Bug fixes

- browserid: Let clients specify service=\${client_id} in /certificate/sign (f3467791e)

## 1.149.1

No changes.

## 1.149.0

### New features

- auth-server: capture req data to Sentry (287498d39)
- keys: Report keysChangedAt in assertions and key ids. (3a560824d)
- use email instead of 'Anonymous' for support (abc36f8e5)

### Bug fixes

- metrics: Update app_version to send complete train version number (6f698a6ce)
- auth-server: skip subhub request when local db has no subscriptions (baf4497c4)
- oauth: Revoke access tokens when revoking a refresh token (445f18aa0)
- emails: Fix write-emails-to-disk script (203a0b6f1)
- auth-server: don't notify devices re: sub chg (d7ab39941)
- auth-server: compare message timestamp in milliseconds (00ad95e36)
- subscriptions: properly handle 404 error on unknown subscription from auth DB (90de34410)
- auth-server: check proper code location (1a55d6198)
- config: make Firefox Desktop a public client in dev (a8b1e52f4)
- auth-server: rewrite subhub msg processor (081bf392b)
- email: correct product name and configurable download URL in subscription download email (7f2081a85)
- oauth: Fix getUserProfile tests (28b67c942)
- oauth: Use audience when creating JWTs for auth server (a6f4004e4)

### Refactorings

- db: Remove the memory DB in the OAuth server. (33cb328a6)

### Other changes

- deps: update sentry/node from 5.6.2 to 5.7.1 to address https://www.npmjs.com/advisories/1184 (2fa54b8f6)
- style: make copy in download email bigger (0d5361f2b)

## 1.148.8

### Bug fixes

- auth-server: don't notify devices re: sub chg (5f0f1a7ac)

## 1.148.7

### Bug fixes

- metrics: filter high volume oauth events from amplitude logging (ffc08790a)

## 1.148.6

### Bug fixes

- oauth: fix session token ids for pairing and session token scope (ea2bc7a0a)
- metrics: Fix email metrics not reporting to amplitude (c6425d166)

## 1.148.5

No changes.

## 1.148.4

### Bug fixes

- auth-server: compare message timestamp in milliseconds (07d51be07)
- auth-server: check proper code location (b1d6d9e39)

## 1.148.3

No changes.

## 1.148.2

### Bug fixes

- auth-server: rewrite subhub msg processor (871bf57d2)
- email: correct product name and configurable download URL in subscription download email (a6a83e051)
- errors: Scrub `x-forwarded-for` from response data on a 500 error. (84071414c)
- account deletion: Allow account deletion for users with no subscription (52af1823b)

### Other changes

- style: make copy in download email bigger (2664b29d1)
- release: Merge branch 'train-147' into train-148-merge-147 (66e170d45)

## 1.148.1

### Bug fixes

- oauth: Fix getUserProfile tests (8054f6bfb)
- oauth: Use audience when creating JWTs for auth server (431233461)

## 1.148.0

### New features

- update sentry ## 1.147.4 capture uncaught subhub msgs (e7c3b478f)
- auth-server: send subscription download email immediately on activation (750b54b1e)
- docs: Add a JWT access token doc. (577664006)
- add vscode tasks for running tests and debugger (dac5e8b98)
- auth-server: invalidate per-profile cache on subscription changes (c65b89557)
- metrics: add statsd perf metrics for SNS/SQS in auth server (0dcd04234)

### Bug fixes

- codes: Remove extra spaces from email templates (11bc48a40)
- codes: Update codes expiration text to 5 minutes (5d51a0594)
- auth-server: skip redundant subscription create on subhub message (fd2156110)
- test: Fix the declarative test that timed out. (4247d08f3)
- oauth: refuse default JWT signing key (44412c2d0)
- auth-server: call createAccountSubscription correctly (6cd90dbe8)
- fxa-dev: special case fxa-dev path in ridiculous circus of service calls (baba0870f)
- email: remove old trailhead logic and promote trailhead templates (77a2c2821)
- bug: ensure the jwt audience is set to the oauth-server url (63d30da44)
- email: revert email subjects to sentence casing (2e6f0623b)
- config: fixed missing oauth config types (74ecce68d)
- copy: Changed OTP code to verification code (7eaada317)

### Other changes

- docs: Clarify a couple of things in jwt access token doc (31fa7ee32)
- metrics: update SNS statsd stat names (c41b38800)
- oauth: Phase 1 of oauth->auth server consolidation #1922 (f7431dff5)
- metrics: add config for statsd message buffer size (70471c2e2)

## 1.147.5

### Bug fixes

- errors: Scrub `x-forwarded-for` from response data on a 500 error. (84071414c)
- account deletion: Allow account deletion for users with no subscription (52af1823b)

## 1.147.4

No changes.

## 1.147.3

No changes.

## 1.147.2

### Bug fixes

- auth-server: call createAccountSubscription correctly (2928b077f)

## 1.147.1

No changes.

## 1.147.0

### New features

- jwt-access-tokens: Add subscription info to JWT access tokens (9b1e28e45)
- metrics: collect perf metrics with StatsD on auth server's HTTP API clients (fda7d1f5b)
- oauth: Add RFC7009-compatible token revocation endpoint. (eddea169b)
- oauth: Accept and validate client credentials when destroying a token. (76994dd2d)
- browserid: Assume all BrowserID client are `service=sync` for metrics purposes. (c5bccd8f0)
- event-broker: add performance metrics (5a4ebcab6)

### Bug fixes

- config: Add an environment variable name for the auth server url (483f18b15)
- authorization: Fix timezone issues when trading a code for a token (8e27cd660)
- build: Add nsp exception to auth and profile servers (63e4708ef)
- build: npm audit fix (4839fcc5e)
- oauth: Ignore single-use scopes in the refresh_token grant. (adb2245d2)
- tests: Fix failing OAuth tests by making client_secret default to required. (f2a41a40c)
- oauth: /**lbheartbeat** route; no connect to database (7e783031c)

### Refactorings

- email: reduce email-sending boilerplate (03b72dfb8)

### Other changes

- metrics: add sampling rate config for statsd (1c4f6e75a)
- log: Replace `fatal` error log with `warn` (a7aeb08a9)

## 1.146.4

No changes.

## 1.146.3

### Bug fixes

- codes: Fix resend code for the sign-in code feature (ef14af304)

## 1.146.2

No changes.

## 1.146.1

No changes.

## 1.146.0

### New features

- oauth: support the session token scope for user agent clients (be155ba22)
- support form: include product name in support ticket (d0304551c)

### Bug fixes

- email: link to support form in subscription emails (d56948d1c)
- auth-server: Switch subhub API URL path prefix to /v1/sub (c1c5e2ec1)
- profile-server: ensure profileChangedAt is included in assertion JWT for cache invalidation (b99dfae9c)
- oauth: Make refresh_token grants default to using original scopes. (ec664ee60)

### Refactorings

- codes: Update signup codes to use otp based code (033507d45)
- config: derive subscription URLs from base content URI (330a4926d)
- auth-server: prefer async/await in lib/senders/translator.js (476286847)
- api: prefer async/await in lib/metrics/events.js (0e5666003)
- api: prefer async/await in lib/amplitude.js (a43e4bc6c)
- api: prefer async/await in recovery-key routes (e3640ac24)
- api: prefer async/await in recovery-codes routes (83883dfdf)
- api: prefer async/await in session routes (6a076b94a)

### Other changes

- typo: fix typo in token code logging (c62670fa4)
- fxa-auth-server: make README links relative (430be60c9)
- oauth: remove old oauth clients from dev (b704f9243)
- deps: fxa-auth-server npm audit changes (b245003dc)
- async: converted scrypt.js in auth-server (a2fb35d84)
- async: converted random.js in auth-server (2650d1f02)

## 1.145.5

No changes.

## 1.145.4

No changes.

## 1.145.3

### Bug fixes

- experiment: Fix signup code experiment so it reports to amplitude (8bbc9c0b9)

## 1.145.2

No changes.

## 1.145.1

No changes.

## 1.145.0

### New features

- support form: add subscription plan dropdown (bf89c002d)
- codes: Add the ux for signup codes (37929e13a)
- fortress: add "fortress" relying party (2ffe1334d)

### Bug fixes

- build: fixed fxa-shared build on `npm install` (be709e07d)
- tests: fix broken proxyquire path in redis test (86621f217)

### Refactorings

- api: prefer async/await in token codes routes (9a265905f)
- api: prefer async/await in signin-codes route (26b4871e6)
- api: prefer async/await in sms routes (9c291ecbc)
- api: simplify POST /account/login/send_unblock_code handler (12859adaa)
- api: prefer async/await in device/session routes (36aee9e51)
- db: rename productName to productId (5d709f96d)

### Other changes

- async: Convert totp routes to async/await (3268114b4)
- async: Convert routes/util.js to async/await (8997205d9)
- async: Convert sign route to async/await (2b13d5ad1)
- async: Convert unblock-code routes to async/await (d0c784051)
- ts: convert fxa-shared/l10n/localizeTimestamp to typescript (99f3fce63)
- oauth-server: add introspect endpoint in API.md (a448452fc)
- deps: remove newrelic step one (675c08924)

## 1.144.4

No changes.

## 1.144.3

No changes.

## 1.144.2

No changes.

## 1.144.1

No changes.

## 1.144.0

### New features

- codes: Add routes and emails to verify account by otp code (f2e617f70)
- event-broker: add delete event propagation (f7d6222ee)
- devices: add VR and TV devices types (b9ad28cf3)

### Bug fixes

- devices: fix null dereference in POST /account/device (9c0556c77)
- email: fix broken copy in download subscription email (fc715f395)
- tests: fix this.timeout call in selectEmailServices test (9ef0dfc59)
- tests: add missing coverage for the verification reminder script (b4ec94685)
- auth: remove extra `/lib` from require path (c468a1ccc)
- deps: stop passing the `complete` option to jsonwebtoken.verify (0ec1e3fc2)
- deps: use ../ paths to fxa-shared and fxa-geodb in auth server (d56725405)
- emails: include utm_campaign in unblock code email links (acbcef2c1)
- emails: stop rendering html character entities in plaintext emails (f297d192f)

### Refactorings

- email: remove bounce checks from auth server (635c98d93)
- tests: rename assertFailure to assert.failsAsync (9852a0c9b)
- email: pull selectEmailServices out to its own module (2f17f539f)
- tests: re-use common setup function in email tests (ffbeda522)
- signin: Pull account verify into a helper function for reuse (6aa0b28de)
- tests: eliminate url string boilerplate from email tests (5f820d81c)
- tests: eliminate repetitive boilerplate from local email tests (b04aa6266)

### Other changes

- email: disable translations in download subscription email (41e5694cf)
- subhub: cache the plans list in Redis (98e8e69e8)

## 1.143.4

### Bug fixes

- scripts: add missing mailer arg to verification reminder script (a2bd9a790)

## 1.143.3

### Bug fixes

- auth: remove extra `/lib` from require path (03708e47c)

## 1.143.2

No changes.

## 1.143.1

No changes.

## 1.143.0

### New features

- email: include count in low recovery codes email (1c2c3df85)
- oidc: Basic support for OIDC prompt=none (15d0cbf30)
- email: add a subscription download email (7c84c1525)
- config: Add script for extracting/inserting secret keys from SOPS config. (c579223eb)
- support form: Add subscription support form (c7ec3143d)
- oauth: Support the `resource` parameter when fetching JWT access tokens, ID tokens. (d532c4b06)

### Bug fixes

- email: remove codes from email subjects (d72c491f8)
- emails: sentence-case and simplify the email subjects (abd5d5030)
- security: update HSTS to 31536000 (8c49ee21d)
- subscriptions: properly handle subhub listSubscriptions response (9d67ddbc4)
- config: Make OIDC key file paths relative to project root. (43b6b6c76)
- payments: respond with empty list for no subscriptions in auth-server /v1/account (28861f878)
- api: don't return empty locales from GET /account/profile (c6878a97e)
- subscriptions: rename 'orig_system' to 'origin_system' in subscription creation params (e67aa1eb8)
- subscriptions: respond with empty subscription list fo r 403 error from subhub (725626e36)
- subscriptions: throw correct error for unknown subhub customer (ec14fc412)
- event-broker: handle a missing clientId (6c221b79a)
- typo: fixed typo in scrypt.js (ffdfe9383)

### Refactorings

- tests: have a single assertion for email subjects (19d67bbaf)
- tests: prefer assert.include to custom includes predicate (851111b17)
- tests: use sets instead of arrays to categorise email types (aa318771c)

### Other changes

- deps: bump fxa-shared to 1.0.28 (df90697b5)
- email: bump template versions for subject changes (c212e03fb)
- ci: Remove CI config from within packages subdir. (66990a8f4)
- docs: add note warning that api docs are wrong (393e59445)

## 1.142.1

### Bug fixes

- fxa-shared: Use fxa-shared@1.0.27 in the content/auth servers. (a4cf89ae5)

## 1.142.0

### New features

- jwks: Add scripts and docs for rotating the signing key. (7c320e9db)
- api: add a GET /account endpoint (c5d76cffb)
- routes: securityEvents GET and DELETE added with uid (90750377b)

### Bug fixes

- ppid: Fix the failing ppid test. (b4f7cfc15)
- payments: update origin_system for subhub to (675f4fc44)
- fxa-shared: Use fxa-shared@1.0.27 in the content/auth servers. (f5834c253)
- tests: fix security events test to check for later date (0c3b9a2aa)
- default ppid enabled to false (544e6f022)
- tests: fix stubbed behaviour of subhub.listSubscriptions (57fc8af06)
- openid: fix the openid at_hash calculation (173927f4f)

### Other changes

- tests: Fix flaky OAuth test by enforcing a consistent ordering (48a8894b8)
- deps: Restore `keypair` dependency (3adae5c73)

## 1.141.8

### Bug fixes

- fxa-shared: Use fxa-shared@1.0.27 in the content/auth servers. (a4cf89ae5)

## 1.141.7

### Bug fixes

- test: Fix the test. (3e4b2dace)

## 1.141.6

### New features

- oauth: Add pairwise pseudonymous identifiers in access/id tokens (528fde259)

## 1.141.5

### Bug fixes

- oauth: Ignore unknown refresh_token_id when destroying attached client. (bac54b375)

## 1.141.4

No changes.

## 1.141.3

### Bug fixes

- api: prevent /account/destroy failing due to subhub errors (bfede8ef5)

## 1.141.2

### Other changes

- package: manually bump version strings to 1.141.1 (737265b25)

## 1.141.1

No changes.

## 1.141.0

### New features

- subs: delete customer from subhub when destroying account (14314844e)
- oauth: JWT access tokens. (589b21ae4)
- subscriptions: implement reactivation of cancelled subscriptions (e0391a658)
- auth-server: add support form backend (273d6ea08)

### Bug fixes

- subs: Add display_name field to subhub create subscription API (88bfb1a13)
- emails: update trailhead email styles (c2501bc2e)
- jwks: Set explicit cache-control header on jwks_uri (ef25c88af)
- tests: add missing assertion for subhub.reactivateSubscription (5b1e149ca)
- payments: change ended_at to end_at (ad829a533)
- payments: fix test regression from merge conflict (986402788)
- update subhub validation call to match API (97181f35d)
- payments: validate timestamps as .number() (9d3231c36)
- payments: subhub integration tweaks for auth-server and payments-server (01e005e92)
- db: delete account subscriptions inside db transaction (38827829d)
- lint: Fix several eslint errors in fxa-auth-server. (fd7f7ba45)
- format: fixed up COTRIBUTING.md files (a0422c6ae)

### Refactorings

- api: prefer async/await in POST /account/destroy route (5c686023b)

### Other changes

- subs: remove `|| []` from call to db.fetchAccountSubscriptions (4f816d103)
- format: Format incoming changes from point-release. (b6e05a3d9)
- style: added prettier precommit hook (2820ac733)
- style: added prettier to fxa-auth-server (b22d8cdeb)

## 1.140.3

### Bug fixes

- api: prevent raw location object being returned in clients list (4719789ca)

## 1.140.2

No changes.

## 1.140.1

No changes.

## 1.140.0

### New features

- clients: Add a route for listing all attached clients. (13f0e20ad)
- clients: Add oauth-server endpoint for listing all authorized clients. (4c4b8a8e2)

## 1.139.2

### New features

- oauth: Reject new authorizations for disabled OAuth clients. (2f3a36b33)

## 1.139.1

### New features

- devices: Add feature-flags to help handle rollout of Fenix. (464b87565)
- oauth: Add a config option to disable particular OAuth clients. (985cd1c12)

## 1.139.0

### New features

- event-broker: add GCP pub/sub storing of subscription changes (90d4bf753)
- payment: Add error specific to customer payment update (b4d3c07e1)

### Bug fixes

- trailhead: added ToS link to emails (839eaf08c)
- repo: Fix /**version** to correctly locate git directory in the monorepo. (b92ab09b7)
- emails: translate the view action (af79abc4f)
- test: Fix the recovery codes tests (0fbf0748c)

### Refactorings

- oauth: Get OAuth tokens/grants with sessionToken (c4b1af14b)

### Other changes

- e0988ca84 Point error api url to monorepo (e0988ca84)

## 1.138.4

No changes.

## 1.138.3

No changes.

## 1.138.2

### Bug fixes

- subhub: fix config name to be subhubUpdatesQueueUrl (93ad4a2cf)

## 1.138.1

No changes.

## 1.138.0

### New features

- trailhead: use updated firefox logo on all emails (62208711e)
- trailhead: add the trailhead style hooks to js-client (0086b6f01)
- trailhead: add support for multiple newletters (a701e171a)
- notifications: include client id in outgoing service notifications (6e56ed7b5)
- payments: auth API changes for better subhub interop (ed5ea2665)
- subscriptions: add endpoint to return client capabilities (a3f25a3c0)
- subscriptions: emit subscription update notifications (52ff39f9d)
- trailhead: add trailhead email templates (633e563da)
- payments: Fix #713, update subscriptions from SubHub SQS events (993644c06)
- subscriptions: support deferred cancellation of subscriptions (4ee71842d)
- payments: add /oauth/subscriptions/customer auth server route (1d8246d60)

### Bug fixes

- db: use correct endpoint for cancelAccountSubscription (103e8d3d0)
- subscriptions: include capabilities in subscription update event (a0f5db9b5)
- clients: Include refresh tokens when determining active OAuth clients. (0a42937ba)
- accounts: Ensure scripts/delete-account.js initializes subhub (6fc4ab971)

### Refactorings

- tests: re-use client.doRequest in doRequestWithBearerToken (82f04dacd)
- subscriptions: rename client_id to clientId in response payload (6fee141e6)
- tests: extract remote subscription tests to a separate module (121323836)

### Other changes

- tests: add more remote tests for subscription endpoints (7201de69b)

## 1.137.4

No changes.

## 1.137.3

### Bug fixes

- services: send country code instead of country on login and verified events (873f8bada)

## 1.137.2

No changes.

## 1.137.1

No changes.

## 1.137.0

### New features

- metrics: add country and user agent to login and signup events (0ff422dfb)
- payments: initial rough payment pages (e2bea87a8)
- content-server settings: add button for payments/subscription management to /settings (baea0b5a7)
- subscriptions: Add a dev OAuth entry for the subscriptions page. (d2f141e73)
- subscriptions: Add a dev OAuth entry for the subscriptions page. (b3b90d32d)
- oauth: add back `profileChangedAt` migration for oauth tokens table (930631d4b)

### Bug fixes

- auth:authentication: authentication): Ensure invalid refresh tokens return a 4xx error. (4fecdfad3)
- url: base, homepage, bug url updated for all packages in package.json (cee3dc741)
- backendService: Update test to ensure we don't send a body in GET requests. (5275848f6)
- pooling: Change request payload default from {} to null (a4f0c8cbb)

### Refactorings

- auth-server: use returned value from .deviceDelete in devices-and-sessions (789762ea3)
- totp: can delete TOTP in verified sessions (4e5eb5fcc)

## 1.136.6

No changes.

## 1.136.5

No changes.

## 1.136.4

No changes.

## 1.136.3

No changes.

## 1.136.2

No changes.

## 1.136.1

### New features

- metrics: add new entrypoint params to auth server metrics context (c740bcd6e)

## 1.136.0

### New features

- subscriptions: add APIs to manage subscriptions and report capabilities (de1d4e434)

### Bug fixes

- emails: reverse engineer partials for verification reminders (18095467b)

### Other changes

- 6cef70d28 remove mozlog.config I467 (6cef70d28)

## 1.135.6

No changes.

## 1.135.5

### Bug fixes

- backendService: Update test to ensure we don't send a body in GET requests. (5f1c5dfab)
- pooling: Change request payload default from {} to null (82d352d06)

## 1.135.4

### New features

- email: include flowId and flowBeginTime in reminder metrics (4c944e0ab)

## 1.135.3

No changes.

## 1.135.2

No changes.

## 1.135.1

No changes.

## 1.135.0

### Bug fixes

- events: Include issuer in all service notification events. (0ab522501)
- reminders: output a timestamp with verification reminder logging (107f17086)
- log: force boolean keys property in auth server log.summary (1cdcee75e)
- oauth: mark devices that register with OAuth tokens as 'mobile' (0e1da54d0)
- tests: pick up latest auth db in auth server tests (f78826aa2)
- ci: run all auth server tests in ci (fd0108b2e)
- reminders: auth: verification reminders must not use sinon in production (77f2fe5f6)
- scripts: ignore bouncing accounts in verification reminders (a2527ee1d)
- oauth: bring back the jwk restriction (23651c912)

### Other changes

- packages: remove old release tagging scripts and docs (6f168c244)
- repo: remove husky and associated git hooks (00a5c99fe)

## 1.134.5

### Bug fixes

- scripts: stop forcing NODE_ENV to dev in reminders script (aa9398e11)

## 1.134.4

### Bug fixes

- ci: run all auth server tests in ci (ebc349ce8)
- scripts: log metrics from verification reminder script (a2b7d2556)

## 1.134.3

### Bug fixes

- reminders: output a timestamp with verification reminder logging (8902a33f5)
- reminders: auth: verification reminders must not use sinon in production (58fa7aba6)

## 1.134.2

### Bug fixes

- scripts: ignore bouncing accounts in verification reminders (b11fe4127)

<a name="1.134.0"></a>

# [1.134.0](https://github.com/mozilla/fxa-auth-server/compare/v1.133.1...v1.134.0) (2019-04-02)

### Bug Fixes

- **api:** remove redundant query params from /recovery_email/verify_code ([b8886b0](https://github.com/mozilla/fxa-auth-server/commit/b8886b0))
- **config:** make Fenix canGrant just like the Reference Browser ([5f23915](https://github.com/mozilla/fxa-auth-server/commit/5f23915))
- **config:** remove hash alg from config ([96154d3](https://github.com/mozilla/fxa-auth-server/commit/96154d3))
- **deps:** fix npm advisory 788 ([a87338a](https://github.com/mozilla/fxa-auth-server/commit/a87338a))
- **devices:** return isCurrentDevice for refreshToken device endpoint ([e89d24e](https://github.com/mozilla/fxa-auth-server/commit/e89d24e)), closes [#3003](https://github.com/mozilla/fxa-auth-server/issues/3003)
- **email:** use new copy for verification reminder emails ([0ab024a](https://github.com/mozilla/fxa-auth-server/commit/0ab024a))
- **scripts:** add missing createSenders arg to write-email script ([2d5ce76](https://github.com/mozilla/fxa-auth-server/commit/2d5ce76))
- **scripts:** exit cleanly from write-emails-to-disk script ([2cd624b](https://github.com/mozilla/fxa-auth-server/commit/2cd624b))

### chore

- **docs:** disable the auto-generated api docs script ([66302e1](https://github.com/mozilla/fxa-auth-server/commit/66302e1))
- **package:** update shrinkwrap ([b30037f](https://github.com/mozilla/fxa-auth-server/commit/b30037f))
- **scripts:** force NODE_ENV=dev in write-email script ([4eb4436](https://github.com/mozilla/fxa-auth-server/commit/4eb4436))
- **scripts:** remove legacy_log abstraction ([c081407](https://github.com/mozilla/fxa-auth-server/commit/c081407))

### Features

- **email:** add view actions to verification reminder emails ([a326c28](https://github.com/mozilla/fxa-auth-server/commit/a326c28))
- **email:** reinstate account verification reminder emails ([7bd920e](https://github.com/mozilla/fxa-auth-server/commit/7bd920e))
- **metrics:** amplitude events from the OAuth server for MAU ([9756fde](https://github.com/mozilla/fxa-auth-server/commit/9756fde)), closes [#2957](https://github.com/mozilla/fxa-auth-server/issues/2957)
- **oauth:** Add /oauth/authorization route, authenticated with a sessionToken. ([c3bb754](https://github.com/mozilla/fxa-auth-server/commit/c3bb754))
- **oauth:** Add /oauth/token route, optionally authed via sessionToken ([5efdbc4](https://github.com/mozilla/fxa-auth-server/commit/5efdbc4))
- **oauth:** notify push and email on code exchanges ([2e25c45](https://github.com/mozilla/fxa-auth-server/commit/2e25c45)), closes [#2880](https://github.com/mozilla/fxa-auth-server/issues/2880) [#2955](https://github.com/mozilla/fxa-auth-server/issues/2955)
- **oauth:** Use an assertion to directly grant tokens at /token. ([6db4efb](https://github.com/mozilla/fxa-auth-server/commit/6db4efb))
- **scripts:** add a script to process verification reminders ([b42276f](https://github.com/mozilla/fxa-auth-server/commit/b42276f))

### Refactor

- **config:** cache repetitive calls to conf.get ([ef54799](https://github.com/mozilla/fxa-auth-server/commit/ef54799))
- **fxa-auth-server:** Added no-var rule in .eslintrc ([fca50dc](https://github.com/mozilla/fxa-auth-server/commit/fca50dc))
- **fxa-auth-server:** Added prefer-arrow-callback rule in .eslintrc ([818115f](https://github.com/mozilla/fxa-auth-server/commit/818115f))
- **fxa-auth-server:** Added prefer-const rule in .eslintrc ([2ee331e](https://github.com/mozilla/fxa-auth-server/commit/2ee331e))
- **fxa-auth-server:** Added prefer-template rule in .eslintrc ([4761ad0](https://github.com/mozilla/fxa-auth-server/commit/4761ad0))
- **fxa-auth-server:** Added semicolons(semi rule) ([1b910f0](https://github.com/mozilla/fxa-auth-server/commit/1b910f0))

<a name="1.133.1"></a>

## [1.133.1](https://github.com/mozilla/fxa-auth-server/compare/v1.133.0...v1.133.1) (2019-03-19)

### Features

- **devices:** devices API with refreshTokens ([3b33f41](https://github.com/mozilla/fxa-auth-server/commit/3b33f41)), closes [#2547](https://github.com/mozilla/fxa-auth-server/issues/2547)

<a name="1.133.0"></a>

# [1.133.0](https://github.com/mozilla/fxa-auth-server/compare/v1.132.1...v1.133.0) (2019-03-19)

### Bug Fixes

- **docs:** add note for ops on how to check raw redis email config ([063ef96](https://github.com/mozilla/fxa-auth-server/commit/063ef96))
- **node 8 and scrypt-hash:** removed support for node 8 and scrypt-hash ([5172ed8](https://github.com/mozilla/fxa-auth-server/commit/5172ed8))
- **profile_server_messaging:** fix db constructor signature ([dd7c0e3](https://github.com/mozilla/fxa-auth-server/commit/dd7c0e3)), closes [#2916](https://github.com/mozilla/fxa-auth-server/issues/2916)
- **server:** make sure to log errors on server start crash ([6c6a779](https://github.com/mozilla/fxa-auth-server/commit/6c6a779))

### chore

- **api:** make redis.watch.conflict a 409 instead of 500 error ([5ad4d15](https://github.com/mozilla/fxa-auth-server/commit/5ad4d15))
- **package:** update shrinkwrap ([13dc222](https://github.com/mozilla/fxa-auth-server/commit/13dc222))
- **refactor:** Refactor the /token endpoint to improve clarity. ([b1aafd0](https://github.com/mozilla/fxa-auth-server/commit/b1aafd0))

### Features

- **basket:** Updates to `login` and `verified` events for Basket ([0b02308](https://github.com/mozilla/fxa-auth-server/commit/0b02308)), closes [#2915](https://github.com/mozilla/fxa-auth-server/issues/2915)

### Refactor

- **logging:** Update to Mozlog format. ([0b3e970](https://github.com/mozilla/fxa-auth-server/commit/0b3e970)), closes [#2940](https://github.com/mozilla/fxa-auth-server/issues/2940)
- **oauthdb:** Split OAuthDB implementation across multiple files. ([04986a7](https://github.com/mozilla/fxa-auth-server/commit/04986a7))
- **redis:** use the extracted redis implementation from fxa-shared ([87f1bb0](https://github.com/mozilla/fxa-auth-server/commit/87f1bb0))

<a name="1.132.1"></a>

## [1.132.1](https://github.com/mozilla/fxa-auth-server/compare/v1.132.0...v1.132.1) (2019-03-05)

<a name="1.132.0"></a>

# [1.132.0](https://github.com/mozilla/fxa-auth-server/compare/v1.131.2...v1.132.0) (2019-03-05)

### Bug Fixes

- **db:** Stop using deprecated 'sessionWithDevice' db route. ([8d36529](https://github.com/mozilla/fxa-auth-server/commit/8d36529))
- **errors:** add extra data to internal validation errors ([8bb7856](https://github.com/mozilla/fxa-auth-server/commit/8bb7856))
- **errors:** include request data on unexpected errors ([b0a6d00](https://github.com/mozilla/fxa-auth-server/commit/b0a6d00))
- **errors:** strip pii and sensitive fields from logged payloads ([811e584](https://github.com/mozilla/fxa-auth-server/commit/811e584))

### chore

- **deploy:** upgrade to node 10 ([b7f9273](https://github.com/mozilla/fxa-auth-server/commit/b7f9273))

<a name="1.131.2"></a>

## [1.131.2](https://github.com/mozilla/fxa-auth-server/compare/v1.131.1...v1.131.2) (2019-03-04)

### Bug Fixes

- **pkce:** Check code expiry and ownership in the PKCE flow. ([ff36b14](https://github.com/mozilla/fxa-auth-server/commit/ff36b14))

<a name="1.131.1"></a>

## [1.131.1](https://github.com/mozilla/fxa-auth-server/compare/v1.131.0...v1.131.1) (2019-02-21)

### Bug Fixes

- **api:** add validation for utm params and entrypoint ([9732cf2](https://github.com/mozilla/fxa-auth-server/commit/9732cf2))
- **metrics:** reinstate entrypoint to the metrics context schema ([551467e](https://github.com/mozilla/fxa-auth-server/commit/551467e))

<a name="1.131.0"></a>

# [1.131.0](https://github.com/mozilla/fxa-auth-server/compare/v1.130.1...v1.131.0) (2019-02-20)

### Bug Fixes

- **devices:** return full device response on spurious updates ([24add4d](https://github.com/mozilla/fxa-auth-server/commit/24add4d))

### chore

- **clients:** Add a dev client_id for Fenix ([f6b303a](https://github.com/mozilla/fxa-auth-server/commit/f6b303a))
- **deps:** Update handlebars dependency. ([793bcb8](https://github.com/mozilla/fxa-auth-server/commit/793bcb8))
- **deps:** update shrinkwrap ([f1914d9](https://github.com/mozilla/fxa-auth-server/commit/f1914d9))

### Features

- **email:** Update verification email for OAuth reliers. ([74b48af](https://github.com/mozilla/fxa-auth-server/commit/74b48af)), closes [#2859](https://github.com/mozilla/fxa-auth-server/issues/2859)

<a name="1.130.1"></a>

## [1.130.1](https://github.com/mozilla/fxa-auth-server/compare/v1.130.0...v1.130.1) (2019-02-11)

### Bug Fixes

- **key-data:** fix key-data endpoint for fresh accounts ([ab6ce00](https://github.com/mozilla/fxa-auth-server/commit/ab6ce00)), closes [#2908](https://github.com/mozilla/fxa-auth-server/issues/2908)

<a name="1.130.0"></a>

# [1.130.0](https://github.com/mozilla/fxa-auth-server/compare/v1.129.5...v1.130.0) (2019-02-05)

### Bug Fixes

- **scripts:** sanely handle refreshTokens in the docs script ([59ab662](https://github.com/mozilla/fxa-auth-server/commit/59ab662))
- **sms:** catch errors thrown from phoneNumberUtil.parse ([3900303](https://github.com/mozilla/fxa-auth-server/commit/3900303))

### chore

- **ci:** run tests on node 10 ([5bb853f](https://github.com/mozilla/fxa-auth-server/commit/5bb853f))

### Features

- **l10n:** Enable Catalan (ca) ([5b687de](https://github.com/mozilla/fxa-auth-server/commit/5b687de)), closes [mozilla/fxa-content-server-l10n#322](https://github.com/mozilla/fxa-content-server-l10n/issues/322)
- **metrics:** Emit additional data for the DataFlow fraud detection pipeline. ([0a62639](https://github.com/mozilla/fxa-auth-server/commit/0a62639)), closes [#2858](https://github.com/mozilla/fxa-auth-server/issues/2858)

### Refactor

- **crypto:** fall back to node's scrypt implementation ([6d945c8](https://github.com/mozilla/fxa-auth-server/commit/6d945c8))

<a name="1.129.5"></a>

## [1.129.5](https://github.com/mozilla/fxa-auth-server/compare/v1.129.4...v1.129.5) (2019-01-31)

### Bug Fixes

- **metrics:** Fix entrypoint being overwritten for every event. ([5036912](https://github.com/mozilla/fxa-auth-server/commit/5036912)), closes [mozilla/fxa-shared#46](https://github.com/mozilla/fxa-shared/issues/46)

### chore

- **deps:** update deps ([6294593](https://github.com/mozilla/fxa-auth-server/commit/6294593))

<a name="1.129.4"></a>

## [1.129.4](https://github.com/mozilla/fxa-auth-server/compare/v1.129.3...v1.129.4) (2019-01-28)

### Bug Fixes

- **error:** remove `A` from totpTokenNotFound and totpTokenAlreadyExists errors ([d82232c](https://github.com/mozilla/fxa-auth-server/commit/d82232c))
- **npm:** rewrap ([cdc817d](https://github.com/mozilla/fxa-auth-server/commit/cdc817d))
- **validation:** fix missing validation for client name ([72b2a52](https://github.com/mozilla/fxa-auth-server/commit/72b2a52))

### style

- **lib/senders:** removed right arrows ([d04300c](https://github.com/mozilla/fxa-auth-server/commit/d04300c))

<a name="1.128.5"></a>

## [1.128.5](https://github.com/mozilla/fxa-auth-server/compare/v1.128.4-private...v1.128.5) (2019-01-18)

### Bug Fixes

- **oauth:** Allow keys_jwk through GET /authorization ([d2f82dd](https://github.com/mozilla/fxa-auth-server/commit/d2f82dd)), closes [mozilla/notes#1440](https://github.com/mozilla/notes/issues/1440)

<a name="1.129.3"></a>

## [1.129.3](https://github.com/mozilla/fxa-auth-server/compare/v1.129.2...v1.129.3) (2019-01-25)

### Bug Fixes

- **logs:** rename `code` to `status` on request.summary log lines ([42c4c37](https://github.com/mozilla/fxa-auth-server/commit/42c4c37))

<a name="1.129.2"></a>

## [1.129.2](https://github.com/mozilla/fxa-auth-server/compare/v1.129.1...v1.129.2) (2019-01-24)

### Bug Fixes

- **email:** add missing query params to link in new device email ([f13de2f](https://github.com/mozilla/fxa-auth-server/commit/f13de2f))
- **tests:** ensure assertions cause test failures in local email tests ([3b2e946](https://github.com/mozilla/fxa-auth-server/commit/3b2e946))

<a name="1.129.1"></a>

## [1.129.1](https://github.com/mozilla/fxa-auth-server/compare/v1.129.0...v1.129.1) (2019-01-24)

### Bug Fixes

- **metrics:** stop emitting route flow events for status endpoints ([39c6d31](https://github.com/mozilla/fxa-auth-server/commit/39c6d31))

### chore

- **package:** update shrinkwrap ([4db4081](https://github.com/mozilla/fxa-auth-server/commit/4db4081))

<a name="1.129.0"></a>

# [1.129.0](https://github.com/mozilla/fxa-auth-server/compare/v1.128.3...v1.129.0) (2019-01-24)

### Bug Fixes

- **circle:** version.json "source" should be code repository ([3966cbb](https://github.com/mozilla/fxa-auth-server/commit/3966cbb))
- **config:** remove deprecated urls ([871fdda](https://github.com/mozilla/fxa-auth-server/commit/871fdda)), closes [#2646](https://github.com/mozilla/fxa-auth-server/issues/2646)
- **config:** use local redirect for the reference browser ([33cac8e](https://github.com/mozilla/fxa-auth-server/commit/33cac8e))
- **oauth:** Redirect GET /authorization directly to content server ([69f8f3a](https://github.com/mozilla/fxa-auth-server/commit/69f8f3a)), closes [mozilla/fxa-auth-server#2862](https://github.com/mozilla/fxa-auth-server/issues/2862)

### chore

- **deps:** Update to fxa-shared@1.0.15 ([b8f5b22](https://github.com/mozilla/fxa-auth-server/commit/b8f5b22))
- **package:** disable security advisory 766 for sandbox dependency ([0a5e7f6](https://github.com/mozilla/fxa-auth-server/commit/0a5e7f6))
- **package:** disable security advisory 766 for sandbox dependency ([737be65](https://github.com/mozilla/fxa-auth-server/commit/737be65))

<a name="1.128.5"></a>

## [1.128.5](https://github.com/mozilla/fxa-auth-server/compare/v1.128.3...v1.128.5) (2019-01-18)

### Bug Fixes

- **oauth:** Allow keys_jwk through GET /authorization ([d2f82dd](https://github.com/mozilla/fxa-auth-server/commit/d2f82dd)), closes [mozilla/notes#1440](https://github.com/mozilla/notes/issues/1440)

### chore

- **package:** disable security advisory 766 for sandbox dependency ([0a5e7f6](https://github.com/mozilla/fxa-auth-server/commit/0a5e7f6))

<a name="1.128.4"></a>

## [1.128.4](https://github.com/mozilla/fxa-auth-server/compare/v1.128.3...v1.128.4) (2019-01-17)

### Bug Fixes

- **oauth:** Redirect GET /authorization directly to content server ([69f8f3a](https://github.com/mozilla/fxa-auth-server/commit/69f8f3a)), closes [mozilla/fxa-auth-server#2862](https://github.com/mozilla/fxa-auth-server/issues/2862)

<a name="1.128.3"></a>

## [1.128.3](https://github.com/mozilla/fxa-auth-server/compare/v1.128.2...v1.128.3) (2019-01-17)

### Bug Fixes

- **oauth:** Use correct max length for oauth client name validation. ([9b0fac9](https://github.com/mozilla/fxa-auth-server/commit/9b0fac9))

<a name="1.128.2"></a>

## [1.128.2](https://github.com/mozilla/fxa-auth-server/compare/v1.128.1...v1.128.2) (2019-01-16)

### Bug Fixes

- **log:** use fatal instead of criticial in log ([c09242a](https://github.com/mozilla/fxa-auth-server/commit/c09242a))

<a name="1.128.1"></a>

## [1.128.1](https://github.com/mozilla/fxa-auth-server/compare/v1.128.0...v1.128.1) (2019-01-14)

### Bug Fixes

- **circle:** can never have enough version.json ([adb59b9](https://github.com/mozilla/fxa-auth-server/commit/adb59b9))

<a name="1.128.0"></a>

# [1.128.0](https://github.com/mozilla/fxa-auth-server/compare/v1.126.3...v1.128.0) (2019-01-08)

### Bug Fixes

- **docker:** gen_keys in the OAuth docker container ([1fa4a29](https://github.com/mozilla/fxa-auth-server/commit/1fa4a29)), closes [#412](https://github.com/mozilla/fxa-auth-server/issues/412)
- **docker:** run gen_keys.js after the COPY has been done ([28b0e73](https://github.com/mozilla/fxa-auth-server/commit/28b0e73))
- **docs:** Get write-api-docs script back up and running. ([fdf0b1d](https://github.com/mozilla/fxa-auth-server/commit/fdf0b1d))
- **email:** check for null header values in the email service file ([7e8c9dd](https://github.com/mozilla/fxa-auth-server/commit/7e8c9dd)), closes [#2771](https://github.com/mozilla/fxa-auth-server/issues/2771)
- **purge:** adjust path to package.json ([c64dd9e](https://github.com/mozilla/fxa-auth-server/commit/c64dd9e))

### chore

- **docs:** Fix typo "depricated" -> "deprecated" ([5230d59](https://github.com/mozilla/fxa-auth-server/commit/5230d59))
- **grunt:** remove grunt bump for oauth-server ([8bf2ae4](https://github.com/mozilla/fxa-auth-server/commit/8bf2ae4))

### Features

- **metrics:** add country and region to activity and flow events ([c0c9739](https://github.com/mozilla/fxa-auth-server/commit/c0c9739))
- **npm:** update to latest npmshrink ([ec5236e](https://github.com/mozilla/fxa-auth-server/commit/ec5236e))
- **oauth:** Expose /account/scoped-key-data endpoint, by making backend calls to oauth-serve ([7f13766](https://github.com/mozilla/fxa-auth-server/commit/7f13766))
- **validation:** Have `validators.scope` automatically parse the value to a `ScopeSet`. ([00975dd](https://github.com/mozilla/fxa-auth-server/commit/00975dd))

### Refactor

- **oauth:** combine oauth deps and package.json with auth ([db8ed63](https://github.com/mozilla/fxa-auth-server/commit/db8ed63)), closes [#2748](https://github.com/mozilla/fxa-auth-server/issues/2748)
- **oauth:** remove service clients ([63acef3](https://github.com/mozilla/fxa-auth-server/commit/63acef3)), closes [#2761](https://github.com/mozilla/fxa-auth-server/issues/2761)
- **oauth:** remove unused grunt tasks from oauth-server ([32ead29](https://github.com/mozilla/fxa-auth-server/commit/32ead29))

<a name="1.127.0"></a>

# [1.127.0](https://github.com/mozilla/fxa-auth-server/compare/v1.126.2...v1.127.0) (2018-12-11)

### Bug Fixes

- **email:** add manage devices button in new device login email template ([7d4649b](https://github.com/mozilla/fxa-auth-server/commit/7d4649b))
- **emails:** fix arabic emails, add translator tests ([cde4ce2](https://github.com/mozilla/fxa-auth-server/commit/cde4ce2)), closes [#2714](https://github.com/mozilla/fxa-auth-server/issues/2714)
- **oauth:** remove prod requirement flag ([0f130b3](https://github.com/mozilla/fxa-auth-server/commit/0f130b3))

<a name="1.127.1"></a>

## [1.127.1](https://github.com/mozilla/fxa-auth-server/compare/v1.126.3...v1.127.1) (2018-12-14)

Merge v1.126.3 into train-127

<a name="1.127.0"></a>

# [1.127.0](https://github.com/mozilla/fxa-auth-server/compare/v1.126.2...v1.127.0) (2018-12-11)

- **email:** add manage devices button in new device login email template ([7d4649b](https://github.com/mozilla/fxa-auth-server/commit/7d4649b))
- **emails:** fix arabic emails, add translator tests ([cde4ce2](https://github.com/mozilla/fxa-auth-server/commit/cde4ce2)), closes [#2714](https://github.com/mozilla/fxa-auth-server/issues/2714)
- **oauth:** remove prod requirement flag ([0f130b3](https://github.com/mozilla/fxa-auth-server/commit/0f130b3))

<a name="1.126.3"></a>

## [1.126.3](https://github.com/mozilla/fxa-auth-server/compare/v1.126.2...v1.126.3) (2018-12-14)

### Bug Fixes

- **totp:** fix account reset and totp ([3f73c68](https://github.com/mozilla/fxa-auth-server/commit/3f73c68))

<a name="1.126.2"></a>

## [1.126.2](https://github.com/mozilla/fxa-auth-server/compare/v1.126.1...v1.126.2) (2018-11-29)

### Bug Fixes

- **metrics:** ensure email sent amplitude events include device id ([03a2f2e](https://github.com/mozilla/fxa-auth-server/commit/03a2f2e))

<a name="1.126.1"></a>

## [1.126.1](https://github.com/mozilla/fxa-auth-server/compare/v1.126.0...v1.126.1) (2018-11-28)

### Bug Fixes

- **metrics:** emit login complete amplitude event after reset complete ([becd410](https://github.com/mozilla/fxa-auth-server/commit/becd410))

### chore

- **package:** npm shrinkwrap ([1085780](https://github.com/mozilla/fxa-auth-server/commit/1085780))

<a name="1.126.0"></a>

# [1.126.0](https://github.com/mozilla/fxa-auth-server/compare/v1.125.0...v1.126.0) (2018-11-27)

### Bug Fixes

- **db:** Improve query performance when deleting tokens for public clients. ([d6a673c](https://github.com/mozilla/fxa-auth-server/commit/d6a673c))
- **deps:** drop nodemon ([aa1919f](https://github.com/mozilla/fxa-auth-server/commit/aa1919f))
- **tests:** add Santa Clara to known locations ([689f020](https://github.com/mozilla/fxa-auth-server/commit/689f020))
- **tests:** fix sinon compatbility in backendService ([aca8277](https://github.com/mozilla/fxa-auth-server/commit/aca8277))
- **totp:** don't send totp emails with invalid code ([2ea84c1](https://github.com/mozilla/fxa-auth-server/commit/2ea84c1))

### Features

- **config:** Error out if secret key config items are not overwritten in production. ([df34343](https://github.com/mozilla/fxa-auth-server/commit/df34343))
- **deps:** update dev deps to match with auth-server ([567b0cb](https://github.com/mozilla/fxa-auth-server/commit/567b0cb))
- **deps:** update mozlog, newrelic and raven ([7f0834d](https://github.com/mozilla/fxa-auth-server/commit/7f0834d))
- **deps:** update sinon to latest ([516ffd5](https://github.com/mozilla/fxa-auth-server/commit/516ffd5))
- **oauth:** remove internal server ([0f9793f](https://github.com/mozilla/fxa-auth-server/commit/0f9793f))
- **service:** Create a nice abstraction for calling backend service APIs ([193dc71](https://github.com/mozilla/fxa-auth-server/commit/193dc71))

### Refactor

- **headers:** remove HPKP headers ([d98b10c](https://github.com/mozilla/fxa-auth-server/commit/d98b10c)), closes [#2744](https://github.com/mozilla/fxa-auth-server/issues/2744)

<a name="1.125.0"></a>

# [1.125.0](https://github.com/mozilla/fxa-auth-server/compare/v1.124.4...v1.125.0) (2018-11-14)

### Bug Fixes

- **oauth:** clean up client get route. ([7031e73](https://github.com/mozilla/fxa-auth-server/commit/7031e73))

### chore

- **tests:** make geolocation assertions more robust ([198c628](https://github.com/mozilla/fxa-auth-server/commit/198c628))

<a name="1.124.4"></a>

## [1.124.4](https://github.com/mozilla/fxa-auth-server/compare/v1.124.3...v1.124.4) (2018-11-09)

### Bug Fixes

- **oauth:** clean up client get route. ([8301676](https://github.com/mozilla/fxa-auth-server/commit/8301676))

### chore

- **tests** make geolocation assertions more robust. ([3a21e8b](https://github.com/mozilla/fxa-auth-server/commit/3a21e8b))

<a name="1.124.3"></a>

## [1.124.3](https://github.com/mozilla/fxa-auth-server/compare/v1.124.2...v1.124.3) (2018-11-05)

### Bug Fixes

- **oauth-sentry:** arg to server.events.on is "channels" (plural) ([51833e2](https://github.com/mozilla/fxa-auth-server/commit/51833e2))

<a name="1.124.2"></a>

## [1.124.2](https://github.com/mozilla/fxa-auth-server/compare/v1.124.1...v1.124.2) (2018-11-02)

### Bug Fixes

- **errors:** reinstate bounce error failures/messaging ([42d165e](https://github.com/mozilla/fxa-auth-server/commit/42d165e))

### chore

- **package:** update deps ([aa6c3be](https://github.com/mozilla/fxa-auth-server/commit/aa6c3be))

<a name="1.124.1"></a>

## [1.124.1](https://github.com/mozilla/fxa-auth-server/compare/v1.123.3...v1.124.1) (2018-11-01)

<a name="1.124.0"></a>

# [1.124.0](https://github.com/mozilla/fxa-auth-server/compare/v1.123.2...v1.124.0) (2018-10-30)

### Bug Fixes

- **2fa:** Allow an explicit `null` value for `acr_values` param. ([47f4c61](https://github.com/mozilla/fxa-auth-server/commit/47f4c61))
- **api:** accept and ignore client_secret param in /destroy ([c797ed2](https://github.com/mozilla/fxa-auth-server/commit/c797ed2))
- **api:** allow application/x-form-urlencoded ([6cc91e2](https://github.com/mozilla/fxa-auth-server/commit/6cc91e2))
- **api:** Change InvalidAssertions error code to 401 ([2781b3a](https://github.com/mozilla/fxa-auth-server/commit/2781b3a))
- **api:** clean up response of client-tokens delete endpoint (#3) (#449); r=rfk ([9c63273](https://github.com/mozilla/fxa-auth-server/commit/9c63273)), closes [#3](https://github.com/mozilla/fxa-auth-server/issues/3) [#449](https://github.com/mozilla/fxa-auth-server/issues/449)
- **api:** Correct the error codes changed in 2781b3a ([d0dba7c](https://github.com/mozilla/fxa-auth-server/commit/d0dba7c))
- **api:** ensure /destroy endpoint returns an empty object in response body. ([6efd47d](https://github.com/mozilla/fxa-auth-server/commit/6efd47d))
- **api:** fail on invalid action parameters ([0c73ae7](https://github.com/mozilla/fxa-auth-server/commit/0c73ae7))
- **api:** reject requests with bad content-types ([2667228](https://github.com/mozilla/fxa-auth-server/commit/2667228)), closes [#199](https://github.com/mozilla/fxa-auth-server/issues/199)
- **api:** reject requests with invalid parameters ([3b4fa24](https://github.com/mozilla/fxa-auth-server/commit/3b4fa24)), closes [#210](https://github.com/mozilla/fxa-auth-server/issues/210)
- **api:** remove stray payload restriction from authorization route ([e0d5368](https://github.com/mozilla/fxa-auth-server/commit/e0d5368))
- **api:** set update to return an empty object ([6f334c6](https://github.com/mozilla/fxa-auth-server/commit/6f334c6))
- **api:** tolerate an empty client_secret in /destroy ([25a4d30](https://github.com/mozilla/fxa-auth-server/commit/25a4d30))
- **api:** use invalidRequestParameter instead of invalidRedirect for invalid redirect acti ([55eff2d](https://github.com/mozilla/fxa-auth-server/commit/55eff2d))
- **authorization:** allow empty scope with implicit grant ([1d6ac8e](https://github.com/mozilla/fxa-auth-server/commit/1d6ac8e)), closes [#315](https://github.com/mozilla/fxa-auth-server/issues/315)
- **authorization:** Correctly handle non-existing URL scopes during authorization. (#594) r=@vladiko ([21654a3](https://github.com/mozilla/fxa-auth-server/commit/21654a3)), closes [#594](https://github.com/mozilla/fxa-auth-server/issues/594) [#593](https://github.com/mozilla/fxa-auth-server/issues/593)
- **authorization:** handle action parameter in GET/authorization ([cfa6d97](https://github.com/mozilla/fxa-auth-server/commit/cfa6d97))
- **buffer:** #527 Migrate deprecated buffer calls (#528) r=@vladikoff ([fd85207](https://github.com/mozilla/fxa-auth-server/commit/fd85207)), closes [#527](https://github.com/mozilla/fxa-auth-server/issues/527) [#528](https://github.com/mozilla/fxa-auth-server/issues/528) [#527](https://github.com/mozilla/fxa-auth-server/issues/527)
- **changelog:** Fixes #524 automated changelog is borked (#542) r=@vladikoff ([d743721](https://github.com/mozilla/fxa-auth-server/commit/d743721)), closes [#524](https://github.com/mozilla/fxa-auth-server/issues/524) [#542](https://github.com/mozilla/fxa-auth-server/issues/542)
- **changelog:** update to latest changelog version (#556) ([bc9256e](https://github.com/mozilla/fxa-auth-server/commit/bc9256e)), closes [#556](https://github.com/mozilla/fxa-auth-server/issues/556)
- **ci:** remove geodb workaround ([521f4fe](https://github.com/mozilla/fxa-auth-server/commit/521f4fe))
- **ci:** remove nsp (#602) ([64ade86](https://github.com/mozilla/fxa-auth-server/commit/64ade86)), closes [#602](https://github.com/mozilla/fxa-auth-server/issues/602) [#596](https://github.com/mozilla/fxa-auth-server/issues/596) [#597](https://github.com/mozilla/fxa-auth-server/issues/597)
- **ci:** Run MySQL tests in Circle (#586) r=@vbudhram ([4b1c4e4](https://github.com/mozilla/fxa-auth-server/commit/4b1c4e4)), closes [#586](https://github.com/mozilla/fxa-auth-server/issues/586) [#581](https://github.com/mozilla/fxa-auth-server/issues/581)
- **ci:** turn on memcached in travis and circle ([eb86a37](https://github.com/mozilla/fxa-auth-server/commit/eb86a37)), closes [#2681](https://github.com/mozilla/fxa-auth-server/issues/2681)
- **clients:** fix server error when omitting optional fields in client registration ([80768c5](https://github.com/mozilla/fxa-auth-server/commit/80768c5)), closes [#203](https://github.com/mozilla/fxa-auth-server/issues/203)
- **clients:** fixes client endpoint for clients with no redirect_uri ([6d47110](https://github.com/mozilla/fxa-auth-server/commit/6d47110)), closes [#228](https://github.com/mozilla/fxa-auth-server/issues/228)
- **clients:** fixes client registration to use payload.whitelisted ([83e145b](https://github.com/mozilla/fxa-auth-server/commit/83e145b))
- **clients:** match the notes client with fxa-dev and other envs (#585); r=rfk ([e24a582](https://github.com/mozilla/fxa-auth-server/commit/e24a582)), closes [#585](https://github.com/mozilla/fxa-auth-server/issues/585)
- **clients:** support client/client_id route via the internal server ([ce04da7](https://github.com/mozilla/fxa-auth-server/commit/ce04da7))
- **clients:** update email validation ([92d4bfc](https://github.com/mozilla/fxa-auth-server/commit/92d4bfc))
- **codes:** Remove authorization codes after use. ([e0f8961](https://github.com/mozilla/fxa-auth-server/commit/e0f8961))
- **config:** Add environment config options ([14a9b4a](https://github.com/mozilla/fxa-auth-server/commit/14a9b4a))
- **config:** expose clients config as OAUTH_CLIENTS ([04ebf6f](https://github.com/mozilla/fxa-auth-server/commit/04ebf6f))
- **config:** expose more environment variables for config ([7a1dd19](https://github.com/mozilla/fxa-auth-server/commit/7a1dd19))
- **config:** For dev, the openid issuer is http://127.0.0.1:3030 (#583) r=@vladikoff ([38e1d73](https://github.com/mozilla/fxa-auth-server/commit/38e1d73)), closes [#583](https://github.com/mozilla/fxa-auth-server/issues/583) [mozilla/fxa-content-server#6362](https://github.com/mozilla/fxa-content-server/issues/6362)
- **config:** mark config sentryDsn and mysql password sensitive (#511) r=@vladikoff ([d98fbcd](https://github.com/mozilla/fxa-auth-server/commit/d98fbcd)), closes [#511](https://github.com/mozilla/fxa-auth-server/issues/511)
- **config:** option autoUpdateClients, will be disable in prod/stage ([802a0b2](https://github.com/mozilla/fxa-auth-server/commit/802a0b2))
- **config:** remove 00000... from hashedSecrets ([8dcfd56](https://github.com/mozilla/fxa-auth-server/commit/8dcfd56)), closes [#339](https://github.com/mozilla/fxa-auth-server/issues/339)
- **config:** reverting 'mark config sentryDsn and mysql password sensitive (#511) r=@vladikof ([41bd7c0](https://github.com/mozilla/fxa-auth-server/commit/41bd7c0)), closes [#511](https://github.com/mozilla/fxa-auth-server/issues/511)
- **config:** set expiration.accessToken default to 2 weeks ([7a4742d](https://github.com/mozilla/fxa-auth-server/commit/7a4742d))
- **config:** update config to use getProperties ([c2ed6eb](https://github.com/mozilla/fxa-auth-server/commit/c2ed6eb)), closes [#349](https://github.com/mozilla/fxa-auth-server/issues/349)
- **config:** Update contentUrl ([e1622b2](https://github.com/mozilla/fxa-auth-server/commit/e1622b2))
- **config:** Update name and redirectUri ([2a16cdd](https://github.com/mozilla/fxa-auth-server/commit/2a16cdd))
- **config:** update redirect_uri values to not be blank ([5267c62](https://github.com/mozilla/fxa-auth-server/commit/5267c62))
- **db:** don't change client database at startup; footgun ([8877f81](https://github.com/mozilla/fxa-auth-server/commit/8877f81))
- **db:** Drop foreign key constraints. ([7ee117c](https://github.com/mozilla/fxa-auth-server/commit/7ee117c))
- **db:** ensure strict mode (#448) r=rfk,seanmonstar ([8d309c5](https://github.com/mozilla/fxa-auth-server/commit/8d309c5)), closes [#448](https://github.com/mozilla/fxa-auth-server/issues/448) [#446](https://github.com/mozilla/fxa-auth-server/issues/446)
- **db:** Fix an old db patch to apply cleanly in local dev. ([c7fa633](https://github.com/mozilla/fxa-auth-server/commit/c7fa633))
- **db:** Fix case-consistency of SQL query from #612 ([9e55714](https://github.com/mozilla/fxa-auth-server/commit/9e55714)), closes [#612](https://github.com/mozilla/fxa-auth-server/issues/612)
- **db:** make schema.sql accuratley reflect latest patch state ([b17b000](https://github.com/mozilla/fxa-auth-server/commit/b17b000))
- **db:** make the clients key mandatory in the config file ([ac7a39e](https://github.com/mozilla/fxa-auth-server/commit/ac7a39e))
- **db:** remove db name from clients ([c724439](https://github.com/mozilla/fxa-auth-server/commit/c724439))
- **db:** Restore foreign key constraints on core tables. ([2bd0845](https://github.com/mozilla/fxa-auth-server/commit/2bd0845))
- **db:** we need to enforce only a minimum patch level (not {n,n+1}) ([e12f54d](https://github.com/mozilla/fxa-auth-server/commit/e12f54d))
- **dependencies:** move fxa-jwtool from dev-dependencies to dependencies ([79b0427](https://github.com/mozilla/fxa-auth-server/commit/79b0427)), closes [#345](https://github.com/mozilla/fxa-auth-server/issues/345)
- **dependencies:** switch back to main generate-rsa-keypair now that my fix to it was merged ([1c1268b](https://github.com/mozilla/fxa-auth-server/commit/1c1268b))
- **deps:** add filtered npm audit ([71048b3](https://github.com/mozilla/fxa-auth-server/commit/71048b3)), closes [mozilla/fxa#303](https://github.com/mozilla/fxa/issues/303)
- **deps:** ignore npm advisories 39, 48, 658 ([238b0a1](https://github.com/mozilla/fxa-auth-server/commit/238b0a1)), closes [/github.com/mozilla/fxa-auth-server/pull/2643/files#r220807985](https://github.com//github.com/mozilla/fxa-auth-server/pull/2643/files/issues/r220807985)
- **deps:** switch from URIjs to urijs ([ecdf31e](https://github.com/mozilla/fxa-auth-server/commit/ecdf31e)), closes [#347](https://github.com/mozilla/fxa-auth-server/issues/347)
- **deps:** update mocha and other dev deps ([b99e82d](https://github.com/mozilla/fxa-auth-server/commit/b99e82d))
- **deps:** update newrelic and request r=@shane-tomlinson ([b6d6c93](https://github.com/mozilla/fxa-auth-server/commit/b6d6c93))
- **deps:** update some dependencies ([09aa7b0](https://github.com/mozilla/fxa-auth-server/commit/09aa7b0))
- **deps:** update to hapi 14 and joi 9 ([9bc87c0](https://github.com/mozilla/fxa-auth-server/commit/9bc87c0)), closes [#424](https://github.com/mozilla/fxa-auth-server/issues/424)
- **deps:** update to hapi 16, add srinkwrap scripts, update other prod deps ([c102046](https://github.com/mozilla/fxa-auth-server/commit/c102046))
- **deps:** update to mozlog 2.0.2 ([29342a9](https://github.com/mozilla/fxa-auth-server/commit/29342a9)), closes [#337](https://github.com/mozilla/fxa-auth-server/issues/337)
- **doc:** Putting a little emphasis on email first (#584) r=@shane-tomlinson ([8ad17c1](https://github.com/mozilla/fxa-auth-server/commit/8ad17c1)), closes [#584](https://github.com/mozilla/fxa-auth-server/issues/584)
- **docker:** base image node:8-alpine and upgrade to npm6 (#567) r=@jbuck,@vladikoff ([d4060be](https://github.com/mozilla/fxa-auth-server/commit/d4060be)), closes [#567](https://github.com/mozilla/fxa-auth-server/issues/567)
- **docs:** add git guidelines link ([a00167c](https://github.com/mozilla/fxa-auth-server/commit/a00167c))
- **docs:** Change Status Code for Invalid Assertion based ([780aaee](https://github.com/mozilla/fxa-auth-server/commit/780aaee))
- **docs:** document keys and verification_redirect options ([ef8c47a](https://github.com/mozilla/fxa-auth-server/commit/ef8c47a))
- **docs:** minor spelling fixes ([33ad1ec](https://github.com/mozilla/fxa-auth-server/commit/33ad1ec))
- **docs:** note that codes are single use ([6fe39f7](https://github.com/mozilla/fxa-auth-server/commit/6fe39f7)), closes [#214](https://github.com/mozilla/fxa-auth-server/issues/214)
- **docs:** Update description of the `action` param to match latest reality. ([b475fcb](https://github.com/mozilla/fxa-auth-server/commit/b475fcb))
- **email:** ensure mock senders take precedence over the email service ([29f379d](https://github.com/mozilla/fxa-auth-server/commit/29f379d))
- **error:** AppError uses Error.captureStackTrace ([2337f80](https://github.com/mozilla/fxa-auth-server/commit/2337f80)), closes [#164](https://github.com/mozilla/fxa-auth-server/issues/164)
- **events:** require events to be configured in production ([1bef9e0](https://github.com/mozilla/fxa-auth-server/commit/1bef9e0))
- **fatal-error:** Exit with non-zero exit code for fatal errors ([7c90ff0](https://github.com/mozilla/fxa-auth-server/commit/7c90ff0)), closes [#244](https://github.com/mozilla/fxa-auth-server/issues/244)
- **headers:** add cache-control headers to api endpoints; extend tests ([5a81ef9](https://github.com/mozilla/fxa-auth-server/commit/5a81ef9))
- **headers:** make "cache-control" value configurable ([5ba82ea](https://github.com/mozilla/fxa-auth-server/commit/5ba82ea))
- **key-data:** Correctly handle non-existent scopes when finding key data. ([34d9493](https://github.com/mozilla/fxa-auth-server/commit/34d9493))
- **key-data:** Fail cleanly when the client has no allowedScopes. ([fafcef5](https://github.com/mozilla/fxa-auth-server/commit/fafcef5))
- **keys:** Generate unique 'kid' field when regenerating JWK keys ([5b9acae](https://github.com/mozilla/fxa-auth-server/commit/5b9acae))
- **keys:** replace scope key TLD (#505) r=@rfk ([a5e6d8f](https://github.com/mozilla/fxa-auth-server/commit/a5e6d8f)), closes [#505](https://github.com/mozilla/fxa-auth-server/issues/505)
- **log:** add remoteAddressChain to summary (#417) ([568cfa6](https://github.com/mozilla/fxa-auth-server/commit/568cfa6)), closes [#417](https://github.com/mozilla/fxa-auth-server/issues/417) [#415](https://github.com/mozilla/fxa-auth-server/issues/415)
- **log:** avoid crashing on bad payload (#411) r=rfk,jrgm ([19ebed5](https://github.com/mozilla/fxa-auth-server/commit/19ebed5)), closes [#411](https://github.com/mozilla/fxa-auth-server/issues/411) [#410](https://github.com/mozilla/fxa-auth-server/issues/410)
- **logging:** log the reason for account deletions ([3092ac1](https://github.com/mozilla/fxa-auth-server/commit/3092ac1))
- **logging:** use route.path in debug message, not route.url ([7d9efc2](https://github.com/mozilla/fxa-auth-server/commit/7d9efc2))
- **logging:** use space-free tokens for mozlog ([11f73f9](https://github.com/mozilla/fxa-auth-server/commit/11f73f9))
- **logs:** add scope and client_id logs to verify route (#447) r=seanmonstar ([33eb39e](https://github.com/mozilla/fxa-auth-server/commit/33eb39e)), closes [#447](https://github.com/mozilla/fxa-auth-server/issues/447) [#444](https://github.com/mozilla/fxa-auth-server/issues/444)
- **mailer:** Fix the bulk-mailer, add lots of tests. ([806129d](https://github.com/mozilla/fxa-auth-server/commit/806129d))
- **memorydb:** token createdAt used instead of client createdAt (#436) r=vladikoff,seanmonstar ([02dec66](https://github.com/mozilla/fxa-auth-server/commit/02dec66)), closes [#436](https://github.com/mozilla/fxa-auth-server/issues/436) [#421](https://github.com/mozilla/fxa-auth-server/issues/421)
- **metrics:** use correct format for email service notifications ([ec3ff7b](https://github.com/mozilla/fxa-auth-server/commit/ec3ff7b))
- **monorepo:** Update CI config for oauth-server import. ([6a5675c](https://github.com/mozilla/fxa-auth-server/commit/6a5675c))
- **mysql:** Correctly aggregate tokens by clientid. (#576) r=@vladikoff ([2c2cd22](https://github.com/mozilla/fxa-auth-server/commit/2c2cd22)), closes [#576](https://github.com/mozilla/fxa-auth-server/issues/576)
- **newrelic:** update to v2.1.0 ([87a3aee](https://github.com/mozilla/fxa-auth-server/commit/87a3aee))
- **node:** use node 6.12.0 (#501) r=@vladikoff ([167c973](https://github.com/mozilla/fxa-auth-server/commit/167c973)), closes [#501](https://github.com/mozilla/fxa-auth-server/issues/501)
- **node:** use node 6.12.3 (#510) r=@vladikoff ([adc1fc0](https://github.com/mozilla/fxa-auth-server/commit/adc1fc0)), closes [#510](https://github.com/mozilla/fxa-auth-server/issues/510)
- **node:** Use Node.js v6.14.0 (#537) ([f32a3d7](https://github.com/mozilla/fxa-auth-server/commit/f32a3d7)), closes [#537](https://github.com/mozilla/fxa-auth-server/issues/537)
- **nodejs:** update to 6.11.1 for security fixes ([a0520c0](https://github.com/mozilla/fxa-auth-server/commit/a0520c0))
- **oauth:** another notes dev client (#546) ([9d5ec8e](https://github.com/mozilla/fxa-auth-server/commit/9d5ec8e)), closes [#546](https://github.com/mozilla/fxa-auth-server/issues/546)
- **openid:** Generate openid keys on npm postinstall to file ([5f15afa](https://github.com/mozilla/fxa-auth-server/commit/5f15afa))
- **patcher:** Fix patcher with no pre-loaded clients ([dcc47b9](https://github.com/mozilla/fxa-auth-server/commit/dcc47b9))
- **pkce:** Don't require PKCE in the direct grant flow. (#566) r=@vladikoff ([d70fe6d](https://github.com/mozilla/fxa-auth-server/commit/d70fe6d)), closes [#566](https://github.com/mozilla/fxa-auth-server/issues/566) [#559](https://github.com/mozilla/fxa-auth-server/issues/559)
- **pkce:** match pkce implementation to specifications (#498) r=rfk ([cf1c836](https://github.com/mozilla/fxa-auth-server/commit/cf1c836)), closes [#498](https://github.com/mozilla/fxa-auth-server/issues/498) [#495](https://github.com/mozilla/fxa-auth-server/issues/495)
- **profile:** remove the `profileChangedAt` column on tokens table ([5e87bce](https://github.com/mozilla/fxa-auth-server/commit/5e87bce))
- **purge:** add purgeExpiredTokensById to select, then delete by primary key (#580); r=rfk ([adfff65](https://github.com/mozilla/fxa-auth-server/commit/adfff65)), closes [#580](https://github.com/mozilla/fxa-auth-server/issues/580)
- **purge-expired:** accept a list of pocket-id's ([1c843a9](https://github.com/mozilla/fxa-auth-server/commit/1c843a9))
- **purge-expired:** log uncaughtException; minimum log level of info ([264271e](https://github.com/mozilla/fxa-auth-server/commit/264271e))
- **purge-expired:** moar logging ([80c360e](https://github.com/mozilla/fxa-auth-server/commit/80c360e))
- **purge-expired:** Promise.delay takes milliseconds; allow subsecond delay ([10c6103](https://github.com/mozilla/fxa-auth-server/commit/10c6103))
- **purge-expired:** set db.autoUpdateClients config to false ([bc66fc3](https://github.com/mozilla/fxa-auth-server/commit/bc66fc3))
- **purge-expired:** use db.getClient() to check for unknown clientId ([c33f1d9](https://github.com/mozilla/fxa-auth-server/commit/c33f1d9))
- **route:** make email false by default (#533) r=@rfk ([aa68fb9](https://github.com/mozilla/fxa-auth-server/commit/aa68fb9)), closes [#533](https://github.com/mozilla/fxa-auth-server/issues/533)
- **scopes:** Document scope-handling rules, use shared code to enforce them. (#551); r=vbudhr ([237886d](https://github.com/mozilla/fxa-auth-server/commit/237886d)), closes [#551](https://github.com/mozilla/fxa-auth-server/issues/551)
- **scopes:** Dont treat `foo:write` as a sub-scope of `foo`. ([b4b30c2](https://github.com/mozilla/fxa-auth-server/commit/b4b30c2))
- **scripts:** Fix varname typo in test runner script. (#535) ([02804a8](https://github.com/mozilla/fxa-auth-server/commit/02804a8)), closes [#535](https://github.com/mozilla/fxa-auth-server/issues/535)
- **scripts:** Use pure JS module to generate RSA keypairs (#439) r=vladikoff ([3380e1c](https://github.com/mozilla/fxa-auth-server/commit/3380e1c)), closes [#439](https://github.com/mozilla/fxa-auth-server/issues/439)
- **security:** enable x-content-type-options nosniff ([5ea5001](https://github.com/mozilla/fxa-auth-server/commit/5ea5001))
- **security:** enable X-XSS-Protection 1; mode=block ([52ca1e5](https://github.com/mozilla/fxa-auth-server/commit/52ca1e5))
- **security:** set x-frame-options deny ([21ea05d](https://github.com/mozilla/fxa-auth-server/commit/21ea05d))
- **server:** exit if db patch level is wrong ([78d6382](https://github.com/mozilla/fxa-auth-server/commit/78d6382))
- **shrinkwrap:** restore deleted npm-shrinkwrap.json ([6383481](https://github.com/mozilla/fxa-auth-server/commit/6383481))
- **spelling:** minor spelling fix in tests (#403) r=vladikoff ([d4ff105](https://github.com/mozilla/fxa-auth-server/commit/d4ff105)), closes [#403](https://github.com/mozilla/fxa-auth-server/issues/403)
- **sql:** fix the schema issue with the trailing comma ([069caeb](https://github.com/mozilla/fxa-auth-server/commit/069caeb)), closes [#299](https://github.com/mozilla/fxa-auth-server/issues/299)
- **sql:** remove references to the `whitelisted` column; this is now the `trusted` column ([6b4d1ec](https://github.com/mozilla/fxa-auth-server/commit/6b4d1ec))
- **sql:** undo 155d2ce; for mysql-patcher fix up that database ([eb9f40d](https://github.com/mozilla/fxa-auth-server/commit/eb9f40d)), closes [#301](https://github.com/mozilla/fxa-auth-server/issues/301)
- **test:** encrypt refresh_token on db query (#414) r=seanmonstar,vladikoff ([7f52d46](https://github.com/mozilla/fxa-auth-server/commit/7f52d46)), closes [#414](https://github.com/mozilla/fxa-auth-server/issues/414) [#413](https://github.com/mozilla/fxa-auth-server/issues/413)
- **test:** fix unhandled rejection error with memory db impl (#454) r=vladikoff ([c870eba](https://github.com/mozilla/fxa-auth-server/commit/c870eba)), closes [#454](https://github.com/mozilla/fxa-auth-server/issues/454)
- **tests:** check insert of utf8mb4 ([4e6a77a](https://github.com/mozilla/fxa-auth-server/commit/4e6a77a))
- **tests:** double before hook timeout for tests on slow machines ([2333416](https://github.com/mozilla/fxa-auth-server/commit/2333416))
- **tests:** mock outstanding error logs in test suite r=@vladikoff ([6a5d3ce](https://github.com/mozilla/fxa-auth-server/commit/6a5d3ce)), closes [#334](https://github.com/mozilla/fxa-auth-server/issues/334)
- **tests:** More reliable generation of RSA keys for tests ([981d0b7](https://github.com/mozilla/fxa-auth-server/commit/981d0b7))
- **tests:** Refactor use of process.exit() to be outside of code under test. ([47f4f17](https://github.com/mozilla/fxa-auth-server/commit/47f4f17))
- **tests:** remove assertions of profileChangedAt property ([60af54f](https://github.com/mozilla/fxa-auth-server/commit/60af54f))
- **tests:** sleep additional half second to adjust for mysql round of timestamp ([a02f516](https://github.com/mozilla/fxa-auth-server/commit/a02f516))
- **tests:** speed up and upgrade the test runner (#467) r=seanmonstar ([2e76c9e](https://github.com/mozilla/fxa-auth-server/commit/2e76c9e)), closes [#467](https://github.com/mozilla/fxa-auth-server/issues/467)
- **token:** disable expiration error ([c9547a8](https://github.com/mozilla/fxa-auth-server/commit/c9547a8))
- **tokens:** Added scripts that purge expired access tokens. ([10bbb24](https://github.com/mozilla/fxa-auth-server/commit/10bbb24))
- **tokens:** Avoid quadratic behaviour when listing active clients. (#9); r=vladikoff ([15c3065](https://github.com/mozilla/fxa-auth-server/commit/15c3065)), closes [#9](https://github.com/mozilla/fxa-auth-server/issues/9)
- **tokens:** Begin expiring access tokens beyond a configurable epoch. ([b346326](https://github.com/mozilla/fxa-auth-server/commit/b346326))
- **tokens:** invalidate refresh tokens on client-token DELETE action (#508) ([df0ca82](https://github.com/mozilla/fxa-auth-server/commit/df0ca82)), closes [#508](https://github.com/mozilla/fxa-auth-server/issues/508) [#507](https://github.com/mozilla/fxa-auth-server/issues/507)
- **tokens:** ttl parameter must be positive (#429) r=vladikoff ([1764d73](https://github.com/mozilla/fxa-auth-server/commit/1764d73)), closes [#429](https://github.com/mozilla/fxa-auth-server/issues/429)
- **travis:** build on node 0.10, 0.12, 4, no allowed failures ([6684e8c](https://github.com/mozilla/fxa-auth-server/commit/6684e8c))
- **travis:** install libgmp3-dev so optionaldep bigint will be built for browserid-crypto ([a64cb18](https://github.com/mozilla/fxa-auth-server/commit/a64cb18))
- **travis:** remove broken validate shrinkwrap ([1729764](https://github.com/mozilla/fxa-auth-server/commit/1729764))
- **travis:** run tests with 6 and 8 (#497) r=vladikoff ([a49b272](https://github.com/mozilla/fxa-auth-server/commit/a49b272)), closes [#497](https://github.com/mozilla/fxa-auth-server/issues/497)
- **travis:** test on node4/node6 with default npm & g++-4.8 ([b4e1dd8](https://github.com/mozilla/fxa-auth-server/commit/b4e1dd8))
- **validation:** Allow redirect uris with existing query params. (#548); r=philbooth ([b93e6a1](https://github.com/mozilla/fxa-auth-server/commit/b93e6a1)), closes [#548](https://github.com/mozilla/fxa-auth-server/issues/548)
- **validation:** Restrict characters allowed in 'scope' parameter. ([7dd2a39](https://github.com/mozilla/fxa-auth-server/commit/7dd2a39))
- **version:** use cwd and env var to get version (#452) r=vladikoff ([a3b1aa2](https://github.com/mozilla/fxa-auth-server/commit/a3b1aa2)), closes [#452](https://github.com/mozilla/fxa-auth-server/issues/452)
- **version:** use explicit path with git-config ([e0af8bc](https://github.com/mozilla/fxa-auth-server/commit/e0af8bc))

### chore

- **api:** remove metrics context data from deprecated endpoints ([d884148](https://github.com/mozilla/fxa-auth-server/commit/d884148)), closes [#2496](https://github.com/mozilla/fxa-auth-server/issues/2496)
- **awsbox:** remove unused awsbox ([f053c9f](https://github.com/mozilla/fxa-auth-server/commit/f053c9f))
- **build:** Bump eslint-config-fxa to latest version ([fe45e0b](https://github.com/mozilla/fxa-auth-server/commit/fe45e0b))
- **build:** create changelogs each release ([16f1f5b](https://github.com/mozilla/fxa-auth-server/commit/16f1f5b)), closes [#158](https://github.com/mozilla/fxa-auth-server/issues/158)
- **build:** switch to grunt-nsp ([ac31672](https://github.com/mozilla/fxa-auth-server/commit/ac31672))
- **ci:** drop node 4 as a supported env (#478) ([176c828](https://github.com/mozilla/fxa-auth-server/commit/176c828)), closes [#478](https://github.com/mozilla/fxa-auth-server/issues/478)
- **clients:** add credentials for FF/FFOS/Fennec/FxA clients in dev ([b501abe](https://github.com/mozilla/fxa-auth-server/commit/b501abe))
- **clients:** remove deprecated 'whitelisted' column from clients table. ([cf16f8a](https://github.com/mozilla/fxa-auth-server/commit/cf16f8a))
- **clients:** rename "whitelisted" property to "trusted". ([b8927a8](https://github.com/mozilla/fxa-auth-server/commit/b8927a8))
- **config:** add local loop dev credentials ([70cc480](https://github.com/mozilla/fxa-auth-server/commit/70cc480))
- **config:** add Notes trailing slash to redirect in dev.json (#536) ([e8bf2e5](https://github.com/mozilla/fxa-auth-server/commit/e8bf2e5)), closes [#536](https://github.com/mozilla/fxa-auth-server/issues/536)
- **config:** add oauth console into dev config ([14d7bab](https://github.com/mozilla/fxa-auth-server/commit/14d7bab))
- **config:** remove duplicate 'canGrant' field in config file ([259da3d](https://github.com/mozilla/fxa-auth-server/commit/259da3d))
- **config:** Update convict and switch on strict validation. ([1f49ad4](https://github.com/mozilla/fxa-auth-server/commit/1f49ad4))
- **db:** Add db migration to revert change that couldn't go to production. ([9382239](https://github.com/mozilla/fxa-auth-server/commit/9382239))
- **dep:** replaced bidcrypto dep with fxa-jwtool ([7d71239](https://github.com/mozilla/fxa-auth-server/commit/7d71239))
- **dependencies:** bump hapi version ([13c2d57](https://github.com/mozilla/fxa-auth-server/commit/13c2d57))
- **dependencies:** dependency upgrades ([4430228](https://github.com/mozilla/fxa-auth-server/commit/4430228))
- **dependencies:** update 'jwcrypto' dependency to 'browserid-crypto' ([b9bf102](https://github.com/mozilla/fxa-auth-server/commit/b9bf102)), closes [#151](https://github.com/mozilla/fxa-auth-server/issues/151)
- **dependencies:** update convict ([8dfa52f](https://github.com/mozilla/fxa-auth-server/commit/8dfa52f))
- **dependencies:** update most dependencies ([ad61ecb](https://github.com/mozilla/fxa-auth-server/commit/ad61ecb))
- **dependencies:** updating deps ([e412925](https://github.com/mozilla/fxa-auth-server/commit/e412925))
- **dependencies:** upgrade mozlog to 2.0.3 ([262bbc9](https://github.com/mozilla/fxa-auth-server/commit/262bbc9))
- **deps:** Generate shrinkwrap for latest dependency updates ([84e69b5](https://github.com/mozilla/fxa-auth-server/commit/84e69b5))
- **deps:** update deps, fix nsp (#517) r=@philbooth ([9f12267](https://github.com/mozilla/fxa-auth-server/commit/9f12267)), closes [#517](https://github.com/mozilla/fxa-auth-server/issues/517)
- **deps:** Update hapi dependency. (#457), r=@vbudhram ([24a570f](https://github.com/mozilla/fxa-auth-server/commit/24a570f)), closes [#457](https://github.com/mozilla/fxa-auth-server/issues/457)
- **deps:** Update hapi to latest version (#482) r=vladikoff ([6b2810e](https://github.com/mozilla/fxa-auth-server/commit/6b2810e)), closes [#482](https://github.com/mozilla/fxa-auth-server/issues/482)
- **deps:** Update hapi to v16.6.3 (#526) ([78c88ad](https://github.com/mozilla/fxa-auth-server/commit/78c88ad)), closes [#526](https://github.com/mozilla/fxa-auth-server/issues/526)
- **deps:** Update request package to latest version (#407) r=vladikoff ([b8ef1d7](https://github.com/mozilla/fxa-auth-server/commit/b8ef1d7)), closes [#407](https://github.com/mozilla/fxa-auth-server/issues/407)
- **dev:** add 321Done untrusted client ([a291205](https://github.com/mozilla/fxa-auth-server/commit/a291205))
- **dev:** add Firefox Notes Web Extension client to development config ([3960e5f](https://github.com/mozilla/fxa-auth-server/commit/3960e5f))
- **dev:** add Notes supprot scope in dev (#492) ([85af2a2](https://github.com/mozilla/fxa-auth-server/commit/85af2a2)), closes [#492](https://github.com/mozilla/fxa-auth-server/issues/492)
- **docker:** remove old docker self-host files ([9f5247f](https://github.com/mozilla/fxa-auth-server/commit/9f5247f))
- **docker:** Update to node 6.11.5 (#494) ([6eb07cf](https://github.com/mozilla/fxa-auth-server/commit/6eb07cf)), closes [#494](https://github.com/mozilla/fxa-auth-server/issues/494)
- **docker:** Use official node image & update to Node.js v4.8.2 (#462) r=vladikoff ([b1924b0](https://github.com/mozilla/fxa-auth-server/commit/b1924b0)), closes [#462](https://github.com/mozilla/fxa-auth-server/issues/462)
- **docs:** Add a comment about privKey/pubKey confusion in gen_keys ([d2edd4b](https://github.com/mozilla/fxa-auth-server/commit/d2edd4b))
- **docs:** add a note about dev envs ([0663c19](https://github.com/mozilla/fxa-auth-server/commit/0663c19)), closes [#148](https://github.com/mozilla/fxa-auth-server/issues/148)
- **docs:** add CircleCI badge to readme ([acff566](https://github.com/mozilla/fxa-auth-server/commit/acff566))
- **docs:** move self-host docker file ([2180f92](https://github.com/mozilla/fxa-auth-server/commit/2180f92))
- **docs:** remove older Docker files (#426) ([370c898](https://github.com/mozilla/fxa-auth-server/commit/370c898)), closes [#426](https://github.com/mozilla/fxa-auth-server/issues/426)
- **grunt:** make 'grunt release' generate changelog also ([87d5861](https://github.com/mozilla/fxa-auth-server/commit/87d5861))
- **license:** Update license to be SPDX compliant ([ff83ec2](https://github.com/mozilla/fxa-auth-server/commit/ff83ec2))
- **lint:** add ESLint ([1531061](https://github.com/mozilla/fxa-auth-server/commit/1531061)), closes [#274](https://github.com/mozilla/fxa-auth-server/issues/274)
- **logging:** Log additional details for debugging expired tokens ([22cf3ab](https://github.com/mozilla/fxa-auth-server/commit/22cf3ab))
- **npm:** update to npm5 (#522) r=@vbudhram ([3783605](https://github.com/mozilla/fxa-auth-server/commit/3783605)), closes [#522](https://github.com/mozilla/fxa-auth-server/issues/522)
- **package:** npm shrinkwrap ([8ba20b0](https://github.com/mozilla/fxa-auth-server/commit/8ba20b0))
- **package:** pin blanket to 1.1.6 ([072385b](https://github.com/mozilla/fxa-auth-server/commit/072385b))
- **package:** remove main from package.json ([ebc60a5](https://github.com/mozilla/fxa-auth-server/commit/ebc60a5)), closes [#206](https://github.com/mozilla/fxa-auth-server/issues/206)
- **release:** add tasks "grunt version" and "grunt version:patch" to create release tags ([1be1380](https://github.com/mozilla/fxa-auth-server/commit/1be1380))
- **release:** use CHANGELOG.md instead of CHANGELOG during bump ([520b39c](https://github.com/mozilla/fxa-auth-server/commit/520b39c))
- **tests:** remove weird mocking magic ([47389fa](https://github.com/mozilla/fxa-auth-server/commit/47389fa))
- **tests:** Uniformly use promises rather than done() callback. ([2a4731f](https://github.com/mozilla/fxa-auth-server/commit/2a4731f))
- **tokens:** add a comment about why we're inserting an empty string for email ([eed414b](https://github.com/mozilla/fxa-auth-server/commit/eed414b))
- **travis:** drop node 0.12 support ([b4eba46](https://github.com/mozilla/fxa-auth-server/commit/b4eba46))
- **travis:** Only install libgmp3-dev on Travis ([cfafb19](https://github.com/mozilla/fxa-auth-server/commit/cfafb19))
- **travis:** Tell Travis to use #fxa-bots ([17134db](https://github.com/mozilla/fxa-auth-server/commit/17134db))
- **travis:** use npm@2 for more stable installs ([3c3e127](https://github.com/mozilla/fxa-auth-server/commit/3c3e127))
- **version:** add /**version** route with source repo ([37a08f2](https://github.com/mozilla/fxa-auth-server/commit/37a08f2))
- **version:** generate legacy-format output for ./config/version.json ([51b5f3b](https://github.com/mozilla/fxa-auth-server/commit/51b5f3b))

### docs

- **api:** Update `email` behavior for GET /v1/authorization. ([755ec9a](https://github.com/mozilla/fxa-auth-server/commit/755ec9a))
- **authorization:** Document email param in GET /authorization ([fbf1eb7](https://github.com/mozilla/fxa-auth-server/commit/fbf1eb7))
- **service-clients:** Document Service Clients, JKUs, and JWTs ([d2f1ef3](https://github.com/mozilla/fxa-auth-server/commit/d2f1ef3)), closes [#329](https://github.com/mozilla/fxa-auth-server/issues/329)
- **service-clients:** Document Service Clients, JKUs, and JWTs ([799f0e2](https://github.com/mozilla/fxa-auth-server/commit/799f0e2)), closes [#329](https://github.com/mozilla/fxa-auth-server/issues/329)
- **verify:** fix misnamed 'scopes' response property ([b5728cf](https://github.com/mozilla/fxa-auth-server/commit/b5728cf)), closes [#261](https://github.com/mozilla/fxa-auth-server/issues/261)
- **workflow:** fixes workflow typo ([318d9e1](https://github.com/mozilla/fxa-auth-server/commit/318d9e1))

### Features

- **2fa:** check acr values during authorization flow ([c20682a](https://github.com/mozilla/fxa-auth-server/commit/c20682a))
- **amr:** Report `amr` and `acr` claims in the id_token. (#530); r=vbudhram ([8181f7f](https://github.com/mozilla/fxa-auth-server/commit/8181f7f)), closes [#530](https://github.com/mozilla/fxa-auth-server/issues/530)
- **api:** Add `action=force_auth` to GET /v1/authorization. ([33603bd](https://github.com/mozilla/fxa-auth-server/commit/33603bd)), closes [#190](https://github.com/mozilla/fxa-auth-server/issues/190)
- **api:** add `auth_at` to token response schema. ([bc8454d](https://github.com/mozilla/fxa-auth-server/commit/bc8454d)), closes [#181](https://github.com/mozilla/fxa-auth-server/issues/181)
- **api:** add ttl parameter to POST /authorization ([36087fe](https://github.com/mozilla/fxa-auth-server/commit/36087fe))
- **api:** allow destroying token without client_secret ([7b4d01f](https://github.com/mozilla/fxa-auth-server/commit/7b4d01f))
- **auth:** Accept client credentials in the Authorization header. (#514); r=philbooth ([1c50807](https://github.com/mozilla/fxa-auth-server/commit/1c50807)), closes [#514](https://github.com/mozilla/fxa-auth-server/issues/514)
- **auth:** redirect to content-server oauth root by default ([34ad867](https://github.com/mozilla/fxa-auth-server/commit/34ad867)), closes [#245](https://github.com/mozilla/fxa-auth-server/issues/245)
- **authorization:** add uri validation on the authorization endpoint (#428) r=jrgm,seanmonstar ([fcc0b52](https://github.com/mozilla/fxa-auth-server/commit/fcc0b52)), closes [#428](https://github.com/mozilla/fxa-auth-server/issues/428) [#387](https://github.com/mozilla/fxa-auth-server/issues/387) [#388](https://github.com/mozilla/fxa-auth-server/issues/388)
- **authorization:** Directly return `code` in authorization response. (#541); r=philbooth ([7ad1e56](https://github.com/mozilla/fxa-auth-server/commit/7ad1e56)), closes [#541](https://github.com/mozilla/fxa-auth-server/issues/541)
- **authorization:** exit early if assertion invalid returns first ([5a27ee6](https://github.com/mozilla/fxa-auth-server/commit/5a27ee6))
- **authorization:** Require tokenVerified=true for key-bearing scopes. (#561) r=@vladikoff ([f9ad63e](https://github.com/mozilla/fxa-auth-server/commit/f9ad63e)), closes [#561](https://github.com/mozilla/fxa-auth-server/issues/561) [/github.com/mozilla-services/tokenserver/blob/master/tokenserver/views.py#L140](https://github.com//github.com/mozilla-services/tokenserver/blob/master/tokenserver/views.py/issues/L140)
- **ci:** move to CircleCI 2 (#554) r=@jbuck ([97e4f62](https://github.com/mozilla/fxa-auth-server/commit/97e4f62)), closes [#554](https://github.com/mozilla/fxa-auth-server/issues/554)
- **clients:** add `terms_uri` and `privacy_uri` properties to clients. ([51ae904](https://github.com/mozilla/fxa-auth-server/commit/51ae904))
- **clients:** add notion of Service Clients in config ([8cfdffe](https://github.com/mozilla/fxa-auth-server/commit/8cfdffe)), closes [#327](https://github.com/mozilla/fxa-auth-server/issues/327)
- **clients:** Added initial support for using previous client secret ([4f9df20](https://github.com/mozilla/fxa-auth-server/commit/4f9df20))
- **clients:** client registration apis ([1a80294](https://github.com/mozilla/fxa-auth-server/commit/1a80294)), closes [#60](https://github.com/mozilla/fxa-auth-server/issues/60)
- **clients:** move client management api to a separate port ([07a61af](https://github.com/mozilla/fxa-auth-server/commit/07a61af))
- **clients:** remove obsolete generate-client.js script ([62ab0ad](https://github.com/mozilla/fxa-auth-server/commit/62ab0ad)), closes [#231](https://github.com/mozilla/fxa-auth-server/issues/231)
- **clients:** report `trusted` property in GET /client/:id ([c58d237](https://github.com/mozilla/fxa-auth-server/commit/c58d237))
- **codes:** Delete authorization codes when revoking client access. (#578); r=philbooth ([b905b7c](https://github.com/mozilla/fxa-auth-server/commit/b905b7c)), closes [#578](https://github.com/mozilla/fxa-auth-server/issues/578)
- **config:** add browserid pool maxSockets option ([0bb40ba](https://github.com/mozilla/fxa-auth-server/commit/0bb40ba))
- **config:** add mysql pool conectionLimit option ([ca220ae](https://github.com/mozilla/fxa-auth-server/commit/ca220ae))
- **db:** add basic migration infrastructure to mysql backend ([012e605](https://github.com/mozilla/fxa-auth-server/commit/012e605)), closes [#183](https://github.com/mozilla/fxa-auth-server/issues/183)
- **db:** remove clients.secret column ([0e39d1e](https://github.com/mozilla/fxa-auth-server/commit/0e39d1e)), closes [#323](https://github.com/mozilla/fxa-auth-server/issues/323)
- **deps:** update server dependencies ([80ac3cf](https://github.com/mozilla/fxa-auth-server/commit/80ac3cf))
- **deps:** update to bluebird 3 ([8f4c664](https://github.com/mozilla/fxa-auth-server/commit/8f4c664)), closes [#570](https://github.com/mozilla/fxa-auth-server/issues/570)
- **developers:** adds support for oauth developers ([abe0e52](https://github.com/mozilla/fxa-auth-server/commit/abe0e52))
- **docker:** Add CloudOps Dockerfile & CircleCI build instructions ([a80b4b4](https://github.com/mozilla/fxa-auth-server/commit/a80b4b4))
- **docker:** Additional Dockerfile for self-hosting ([83a8b6c](https://github.com/mozilla/fxa-auth-server/commit/83a8b6c))
- **docker:** Dockerfile and README update for basic docker development workflow ([342d87b](https://github.com/mozilla/fxa-auth-server/commit/342d87b))
- **docker:** Shrink Docker image size (#438) r=vladikoff ([13d13b9](https://github.com/mozilla/fxa-auth-server/commit/13d13b9)), closes [#438](https://github.com/mozilla/fxa-auth-server/issues/438)
- **docker:** support feature branches (#464) r=jrgm ([f94fd61](https://github.com/mozilla/fxa-auth-server/commit/f94fd61)), closes [#464](https://github.com/mozilla/fxa-auth-server/issues/464)
- **email-first:** Add support for the email-first flow. (#540); r=philbooth,rfk ([cb11145](https://github.com/mozilla/fxa-auth-server/commit/cb11145)), closes [#540](https://github.com/mozilla/fxa-auth-server/issues/540) [#539](https://github.com/mozilla/fxa-auth-server/issues/539)
- **error:** add info property with link to docs ([681044c](https://github.com/mozilla/fxa-auth-server/commit/681044c))
- **hpkp:** Add the hpkp headers to all requests (#416) r=vladikoff ([6b8a8c8](https://github.com/mozilla/fxa-auth-server/commit/6b8a8c8)), closes [#416](https://github.com/mozilla/fxa-auth-server/issues/416)
- **keys:** Add created-at timestamp to our public keys. (#453); r=seanmonstar,vladikoff ([511d9a6](https://github.com/mozilla/fxa-auth-server/commit/511d9a6)), closes [#453](https://github.com/mozilla/fxa-auth-server/issues/453)
- **keys:** add key-data docs, move client_id into payload (#491); r=rfk ([a9152c3](https://github.com/mozilla/fxa-auth-server/commit/a9152c3)), closes [#491](https://github.com/mozilla/fxa-auth-server/issues/491)
- **keys:** add keys_jwe support (#486) r=rfk ([6a4efd1](https://github.com/mozilla/fxa-auth-server/commit/6a4efd1)), closes [#486](https://github.com/mozilla/fxa-auth-server/issues/486) [#484](https://github.com/mozilla/fxa-auth-server/issues/484)
- **keys:** Check lastAuthAt freshness when fetching key data. (#502) r=@vladikoff ([855adee](https://github.com/mozilla/fxa-auth-server/commit/855adee)), closes [#502](https://github.com/mozilla/fxa-auth-server/issues/502)
- **keys:** Check lastAuthAt freshness when fetching key data. (#506) r=@vladikoff ([e0de2f3](https://github.com/mozilla/fxa-auth-server/commit/e0de2f3)), closes [#506](https://github.com/mozilla/fxa-auth-server/issues/506)
- **lb:** Add `__lbheartbeat__` endpoint (#458), r=@jbuck ([c387907](https://github.com/mozilla/fxa-auth-server/commit/c387907)), closes [#458](https://github.com/mozilla/fxa-auth-server/issues/458)
- **logging:** add log of time taken in authorization endpoint ([02ec0d2](https://github.com/mozilla/fxa-auth-server/commit/02ec0d2))
- **logging:** add log when mysql pool enqueues ([461b5c1](https://github.com/mozilla/fxa-auth-server/commit/461b5c1))
- **logging:** add method, payload, and auth to summary ([df57e23](https://github.com/mozilla/fxa-auth-server/commit/df57e23)), closes [#174](https://github.com/mozilla/fxa-auth-server/issues/174)
- **logging:** log details when generating code ([81933f7](https://github.com/mozilla/fxa-auth-server/commit/81933f7))
- **logging:** switch logging to mozlog ([ec0f5db](https://github.com/mozilla/fxa-auth-server/commit/ec0f5db)), closes [#156](https://github.com/mozilla/fxa-auth-server/issues/156)
- **logs:** add sentry support (#499), r=@vbudhram ([ef34859](https://github.com/mozilla/fxa-auth-server/commit/ef34859)), closes [#499](https://github.com/mozilla/fxa-auth-server/issues/499)
- **metrics:** add code and config for email service notification queue ([ccd5556](https://github.com/mozilla/fxa-auth-server/commit/ccd5556)), closes [#2633](https://github.com/mozilla/fxa-auth-server/issues/2633)
- **monorepo:** Move everything into a subdirectory. ([8453f6e](https://github.com/mozilla/fxa-auth-server/commit/8453f6e))
- **node:** update to node 8 (#544) r=@jrgm ([e9b08ae](https://github.com/mozilla/fxa-auth-server/commit/e9b08ae)), closes [#544](https://github.com/mozilla/fxa-auth-server/issues/544)
- **node:** upgrade to node 6 ([57c61ab](https://github.com/mozilla/fxa-auth-server/commit/57c61ab))
- **oauth:** add methods to support oauth client management (#405) r=seanmonstar ([2748510](https://github.com/mozilla/fxa-auth-server/commit/2748510)), closes [#405](https://github.com/mozilla/fxa-auth-server/issues/405)
- **oauth:** make server compatible with AppAuth (#534) r=@rfk ([ff9e422](https://github.com/mozilla/fxa-auth-server/commit/ff9e422)), closes [#534](https://github.com/mozilla/fxa-auth-server/issues/534)
- **oauth:** Track last time refreshToken was used (#412) r=vladikoff,seanmonstar ([25c455a](https://github.com/mozilla/fxa-auth-server/commit/25c455a)), closes [#412](https://github.com/mozilla/fxa-auth-server/issues/412) [#275](https://github.com/mozilla/fxa-auth-server/issues/275)
- **openid:** add initial OpenID Connect support ([93f8758](https://github.com/mozilla/fxa-auth-server/commit/93f8758)), closes [#362](https://github.com/mozilla/fxa-auth-server/issues/362)
- **openid:** add profileChangedAt to claims (#607), r=@rfk ([f6e93eb](https://github.com/mozilla/fxa-auth-server/commit/f6e93eb)), closes [#607](https://github.com/mozilla/fxa-auth-server/issues/607)
- **openid:** Add support for OIDC `login_hint` query param. ([200ce43](https://github.com/mozilla/fxa-auth-server/commit/200ce43))
- **openid:** add the openid connect `at_hash` value (#598), r=@rfk ([d08310e](https://github.com/mozilla/fxa-auth-server/commit/d08310e)), closes [#598](https://github.com/mozilla/fxa-auth-server/issues/598)
- **openid:** Allow untrusted reliers to request `openid` scope. (#516), r=@vbudhram ([f764dc8](https://github.com/mozilla/fxa-auth-server/commit/f764dc8)), closes [#516](https://github.com/mozilla/fxa-auth-server/issues/516)
- **pkce:** add ability for PKCE clients to use refresh_tokens (#476) r=seanmonstar ([7b401eb](https://github.com/mozilla/fxa-auth-server/commit/7b401eb)), closes [#476](https://github.com/mozilla/fxa-auth-server/issues/476) [#472](https://github.com/mozilla/fxa-auth-server/issues/472)
- **pkce:** add PKCE support to the oauth server (#466) r=seanmonstar ([ed59c0e](https://github.com/mozilla/fxa-auth-server/commit/ed59c0e)), closes [#466](https://github.com/mozilla/fxa-auth-server/issues/466)
- **refresh_tokens:** add refresh_tokens to /token endpoint ([16e787f](https://github.com/mozilla/fxa-auth-server/commit/16e787f)), closes [#209](https://github.com/mozilla/fxa-auth-server/issues/209)
- **scopes:** add key-data and scope support (#487) r=rfk ([f3fcae5](https://github.com/mozilla/fxa-auth-server/commit/f3fcae5)), closes [#487](https://github.com/mozilla/fxa-auth-server/issues/487) [#483](https://github.com/mozilla/fxa-auth-server/issues/483)
- **scopes:** allow https:// scopes (#490); r=rfk ([f892bcb](https://github.com/mozilla/fxa-auth-server/commit/f892bcb)), closes [#490](https://github.com/mozilla/fxa-auth-server/issues/490) [#489](https://github.com/mozilla/fxa-auth-server/issues/489)
- **scripts:** Add script to generate an oauth client ([f21f657](https://github.com/mozilla/fxa-auth-server/commit/f21f657))
- **server:** set HSTS header for 180 days ([d43accb](https://github.com/mozilla/fxa-auth-server/commit/d43accb))
- **server:** update to Hapi 17 ([0ebfebe](https://github.com/mozilla/fxa-auth-server/commit/0ebfebe))
- **shared:** add new locales ([d6e88df](https://github.com/mozilla/fxa-auth-server/commit/d6e88df))
- **sync:** add local test client for sync (#549) ([61ed2e7](https://github.com/mozilla/fxa-auth-server/commit/61ed2e7)), closes [#549](https://github.com/mozilla/fxa-auth-server/issues/549)
- **sync:** add oldsync scope (#550) r=@rfk ([f2e7bb4](https://github.com/mozilla/fxa-auth-server/commit/f2e7bb4)), closes [#550](https://github.com/mozilla/fxa-auth-server/issues/550)
- **token:** reject expired tokens ([4f519ca](https://github.com/mozilla/fxa-auth-server/commit/4f519ca)), closes [#365](https://github.com/mozilla/fxa-auth-server/issues/365)
- **tokens:** add support for password change and reset event (#485) r=rfk ([f5873f9](https://github.com/mozilla/fxa-auth-server/commit/f5873f9)), closes [#485](https://github.com/mozilla/fxa-auth-server/issues/485) [#481](https://github.com/mozilla/fxa-auth-server/issues/481)
- **tokens:** allow using JWT grants from Service Clients ([55f88a9](https://github.com/mozilla/fxa-auth-server/commit/55f88a9)), closes [#328](https://github.com/mozilla/fxa-auth-server/issues/328)
- **tokens:** allow using JWT grants from Service Clients ([0a0e303](https://github.com/mozilla/fxa-auth-server/commit/0a0e303)), closes [#328](https://github.com/mozilla/fxa-auth-server/issues/328)
- **untrusted-clients:** restrict scopes that untrusted clients can request ([8fd228a](https://github.com/mozilla/fxa-auth-server/commit/8fd228a)), closes [#243](https://github.com/mozilla/fxa-auth-server/issues/243)
- **verify:** add opt out parameter to verify endpoint ([e4c54ff](https://github.com/mozilla/fxa-auth-server/commit/e4c54ff)), closes [#358](https://github.com/mozilla/fxa-auth-server/issues/358)
- **verify:** added 'client' to /verify response ([4c57551](https://github.com/mozilla/fxa-auth-server/commit/4c57551)), closes [#149](https://github.com/mozilla/fxa-auth-server/issues/149)

### JsonFormatter

- outputs JSON in same format as fxa-auth-server ([c89ca92](https://github.com/mozilla/fxa-auth-server/commit/c89ca92))

### Refactor

- **client:** scope added in memory and sql (#445) r=vladikoff ([4efc383](https://github.com/mozilla/fxa-auth-server/commit/4efc383)), closes [#445](https://github.com/mozilla/fxa-auth-server/issues/445) [#431](https://github.com/mozilla/fxa-auth-server/issues/431)
- **clients:** remove terms and privacy uris ([5c1e0be](https://github.com/mozilla/fxa-auth-server/commit/5c1e0be)), closes [#406](https://github.com/mozilla/fxa-auth-server/issues/406)
- **config:** Use human-readable duration values in config ([20aa8fa](https://github.com/mozilla/fxa-auth-server/commit/20aa8fa))
- **db:** add hashedSecret column to clients ([9ceaf1f](https://github.com/mozilla/fxa-auth-server/commit/9ceaf1f)), closes [#155](https://github.com/mozilla/fxa-auth-server/issues/155)
- **db:** clients.secret to clients.hashedSecret, remove clients.whitelisted ([155d2ce](https://github.com/mozilla/fxa-auth-server/commit/155d2ce)), closes [#155](https://github.com/mozilla/fxa-auth-server/issues/155) [#267](https://github.com/mozilla/fxa-auth-server/issues/267)
- **email:** Fixes #352 Remove ability to fetch email address (#543) r=@shane-tomlinson ([068bd4b](https://github.com/mozilla/fxa-auth-server/commit/068bd4b)), closes [#352](https://github.com/mozilla/fxa-auth-server/issues/352) [#543](https://github.com/mozilla/fxa-auth-server/issues/543)
- **keys:** rename keyMaterial, timestamp to keyRotationSecret, k… (#500) r=@rfk ([48ec2a3](https://github.com/mozilla/fxa-auth-server/commit/48ec2a3)), closes [#500](https://github.com/mozilla/fxa-auth-server/issues/500)
- **lint:** remove jscs, update eslint rules (#477), r=@vbudhram ([8bc148a](https://github.com/mozilla/fxa-auth-server/commit/8bc148a)), closes [#477](https://github.com/mozilla/fxa-auth-server/issues/477)

### Reverts

- **keys:** Check lastAuthAt freshness when fetching key data ([5d772f6](https://github.com/mozilla/fxa-auth-server/commit/5d772f6))
- **service-tokens): Revert "docs(service-clients:** Document Service Clients, JKUs, and JWTs" ([6be9ac2](https://github.com/mozilla/fxa-auth-server/commit/6be9ac2))
- **service-tokens): Revert "feat(tokens:** allow using JWT grants from Service Clients" ([d3cc78a](https://github.com/mozilla/fxa-auth-server/commit/d3cc78a))
- **tokens:** dont reject expired tokens, again ([e8b563e](https://github.com/mozilla/fxa-auth-server/commit/e8b563e))

### test

- **api:** rename assertRequestParam to assertInvalidRequestParam ([3f00eb3](https://github.com/mozilla/fxa-auth-server/commit/3f00eb3)), closes [#280](https://github.com/mozilla/fxa-auth-server/issues/280)
- **db:** fixing db.removeUser tests for mysql ([94f96bf](https://github.com/mozilla/fxa-auth-server/commit/94f96bf))

### BREAKING CHANGES

- [object Object]
- [object Object]
- [object Object]

<a name="1.124.0"></a>

# [1.124.0](https://github.com/mozilla/fxa-auth-server/compare/v1.123.2...v1.124.0) (2018-10-30)

### Bug Fixes

- **2fa:** Allow an explicit `null` value for `acr_values` param. ([47f4c61](https://github.com/mozilla/fxa-auth-server/commit/47f4c61))
- **api:** accept and ignore client_secret param in /destroy ([c797ed2](https://github.com/mozilla/fxa-auth-server/commit/c797ed2))
- **api:** allow application/x-form-urlencoded ([6cc91e2](https://github.com/mozilla/fxa-auth-server/commit/6cc91e2))
- **api:** Change InvalidAssertions error code to 401 ([2781b3a](https://github.com/mozilla/fxa-auth-server/commit/2781b3a))
- **api:** clean up response of client-tokens delete endpoint (#3) (#449); r=rfk ([9c63273](https://github.com/mozilla/fxa-auth-server/commit/9c63273)), closes [#3](https://github.com/mozilla/fxa-auth-server/issues/3) [#449](https://github.com/mozilla/fxa-auth-server/issues/449)
- **api:** Correct the error codes changed in 2781b3a ([d0dba7c](https://github.com/mozilla/fxa-auth-server/commit/d0dba7c))
- **api:** ensure /destroy endpoint returns an empty object in response body. ([6efd47d](https://github.com/mozilla/fxa-auth-server/commit/6efd47d))
- **api:** fail on invalid action parameters ([0c73ae7](https://github.com/mozilla/fxa-auth-server/commit/0c73ae7))
- **api:** reject requests with bad content-types ([2667228](https://github.com/mozilla/fxa-auth-server/commit/2667228)), closes [#199](https://github.com/mozilla/fxa-auth-server/issues/199)
- **api:** reject requests with invalid parameters ([3b4fa24](https://github.com/mozilla/fxa-auth-server/commit/3b4fa24)), closes [#210](https://github.com/mozilla/fxa-auth-server/issues/210)
- **api:** remove stray payload restriction from authorization route ([e0d5368](https://github.com/mozilla/fxa-auth-server/commit/e0d5368))
- **api:** set update to return an empty object ([6f334c6](https://github.com/mozilla/fxa-auth-server/commit/6f334c6))
- **api:** tolerate an empty client_secret in /destroy ([25a4d30](https://github.com/mozilla/fxa-auth-server/commit/25a4d30))
- **api:** use invalidRequestParameter instead of invalidRedirect for invalid redirect acti ([55eff2d](https://github.com/mozilla/fxa-auth-server/commit/55eff2d))
- **authorization:** allow empty scope with implicit grant ([1d6ac8e](https://github.com/mozilla/fxa-auth-server/commit/1d6ac8e)), closes [#315](https://github.com/mozilla/fxa-auth-server/issues/315)
- **authorization:** Correctly handle non-existing URL scopes during authorization. (#594) r=@vladiko ([21654a3](https://github.com/mozilla/fxa-auth-server/commit/21654a3)), closes [#594](https://github.com/mozilla/fxa-auth-server/issues/594) [#593](https://github.com/mozilla/fxa-auth-server/issues/593)
- **authorization:** handle action parameter in GET/authorization ([cfa6d97](https://github.com/mozilla/fxa-auth-server/commit/cfa6d97))
- **buffer:** #527 Migrate deprecated buffer calls (#528) r=@vladikoff ([fd85207](https://github.com/mozilla/fxa-auth-server/commit/fd85207)), closes [#527](https://github.com/mozilla/fxa-auth-server/issues/527) [#528](https://github.com/mozilla/fxa-auth-server/issues/528) [#527](https://github.com/mozilla/fxa-auth-server/issues/527)
- **changelog:** Fixes #524 automated changelog is borked (#542) r=@vladikoff ([d743721](https://github.com/mozilla/fxa-auth-server/commit/d743721)), closes [#524](https://github.com/mozilla/fxa-auth-server/issues/524) [#542](https://github.com/mozilla/fxa-auth-server/issues/542)
- **changelog:** update to latest changelog version (#556) ([bc9256e](https://github.com/mozilla/fxa-auth-server/commit/bc9256e)), closes [#556](https://github.com/mozilla/fxa-auth-server/issues/556)
- **ci:** remove geodb workaround ([521f4fe](https://github.com/mozilla/fxa-auth-server/commit/521f4fe))
- **ci:** remove nsp (#602) ([64ade86](https://github.com/mozilla/fxa-auth-server/commit/64ade86)), closes [#602](https://github.com/mozilla/fxa-auth-server/issues/602) [#596](https://github.com/mozilla/fxa-auth-server/issues/596) [#597](https://github.com/mozilla/fxa-auth-server/issues/597)
- **ci:** Run MySQL tests in Circle (#586) r=@vbudhram ([4b1c4e4](https://github.com/mozilla/fxa-auth-server/commit/4b1c4e4)), closes [#586](https://github.com/mozilla/fxa-auth-server/issues/586) [#581](https://github.com/mozilla/fxa-auth-server/issues/581)
- **ci:** turn on memcached in travis and circle ([eb86a37](https://github.com/mozilla/fxa-auth-server/commit/eb86a37)), closes [#2681](https://github.com/mozilla/fxa-auth-server/issues/2681)
- **clients:** fix server error when omitting optional fields in client registration ([80768c5](https://github.com/mozilla/fxa-auth-server/commit/80768c5)), closes [#203](https://github.com/mozilla/fxa-auth-server/issues/203)
- **clients:** fixes client endpoint for clients with no redirect_uri ([6d47110](https://github.com/mozilla/fxa-auth-server/commit/6d47110)), closes [#228](https://github.com/mozilla/fxa-auth-server/issues/228)
- **clients:** fixes client registration to use payload.whitelisted ([83e145b](https://github.com/mozilla/fxa-auth-server/commit/83e145b))
- **clients:** match the notes client with fxa-dev and other envs (#585); r=rfk ([e24a582](https://github.com/mozilla/fxa-auth-server/commit/e24a582)), closes [#585](https://github.com/mozilla/fxa-auth-server/issues/585)
- **clients:** support client/client_id route via the internal server ([ce04da7](https://github.com/mozilla/fxa-auth-server/commit/ce04da7))
- **clients:** update email validation ([92d4bfc](https://github.com/mozilla/fxa-auth-server/commit/92d4bfc))
- **codes:** Remove authorization codes after use. ([e0f8961](https://github.com/mozilla/fxa-auth-server/commit/e0f8961))
- **config:** Add environment config options ([14a9b4a](https://github.com/mozilla/fxa-auth-server/commit/14a9b4a))
- **config:** expose clients config as OAUTH_CLIENTS ([04ebf6f](https://github.com/mozilla/fxa-auth-server/commit/04ebf6f))
- **config:** expose more environment variables for config ([7a1dd19](https://github.com/mozilla/fxa-auth-server/commit/7a1dd19))
- **config:** For dev, the openid issuer is http://127.0.0.1:3030 (#583) r=@vladikoff ([38e1d73](https://github.com/mozilla/fxa-auth-server/commit/38e1d73)), closes [#583](https://github.com/mozilla/fxa-auth-server/issues/583) [mozilla/fxa-content-server#6362](https://github.com/mozilla/fxa-content-server/issues/6362)
- **config:** mark config sentryDsn and mysql password sensitive (#511) r=@vladikoff ([d98fbcd](https://github.com/mozilla/fxa-auth-server/commit/d98fbcd)), closes [#511](https://github.com/mozilla/fxa-auth-server/issues/511)
- **config:** option autoUpdateClients, will be disable in prod/stage ([802a0b2](https://github.com/mozilla/fxa-auth-server/commit/802a0b2))
- **config:** remove 00000... from hashedSecrets ([8dcfd56](https://github.com/mozilla/fxa-auth-server/commit/8dcfd56)), closes [#339](https://github.com/mozilla/fxa-auth-server/issues/339)
- **config:** reverting 'mark config sentryDsn and mysql password sensitive (#511) r=@vladikof ([41bd7c0](https://github.com/mozilla/fxa-auth-server/commit/41bd7c0)), closes [#511](https://github.com/mozilla/fxa-auth-server/issues/511)
- **config:** set expiration.accessToken default to 2 weeks ([7a4742d](https://github.com/mozilla/fxa-auth-server/commit/7a4742d))
- **config:** update config to use getProperties ([c2ed6eb](https://github.com/mozilla/fxa-auth-server/commit/c2ed6eb)), closes [#349](https://github.com/mozilla/fxa-auth-server/issues/349)
- **config:** Update contentUrl ([e1622b2](https://github.com/mozilla/fxa-auth-server/commit/e1622b2))
- **config:** Update name and redirectUri ([2a16cdd](https://github.com/mozilla/fxa-auth-server/commit/2a16cdd))
- **config:** update redirect_uri values to not be blank ([5267c62](https://github.com/mozilla/fxa-auth-server/commit/5267c62))
- **db:** don't change client database at startup; footgun ([8877f81](https://github.com/mozilla/fxa-auth-server/commit/8877f81))
- **db:** Drop foreign key constraints. ([7ee117c](https://github.com/mozilla/fxa-auth-server/commit/7ee117c))
- **db:** ensure strict mode (#448) r=rfk,seanmonstar ([8d309c5](https://github.com/mozilla/fxa-auth-server/commit/8d309c5)), closes [#448](https://github.com/mozilla/fxa-auth-server/issues/448) [#446](https://github.com/mozilla/fxa-auth-server/issues/446)
- **db:** Fix an old db patch to apply cleanly in local dev. ([c7fa633](https://github.com/mozilla/fxa-auth-server/commit/c7fa633))
- **db:** Fix case-consistency of SQL query from #612 ([9e55714](https://github.com/mozilla/fxa-auth-server/commit/9e55714)), closes [#612](https://github.com/mozilla/fxa-auth-server/issues/612)
- **db:** make schema.sql accuratley reflect latest patch state ([b17b000](https://github.com/mozilla/fxa-auth-server/commit/b17b000))
- **db:** make the clients key mandatory in the config file ([ac7a39e](https://github.com/mozilla/fxa-auth-server/commit/ac7a39e))
- **db:** remove db name from clients ([c724439](https://github.com/mozilla/fxa-auth-server/commit/c724439))
- **db:** Restore foreign key constraints on core tables. ([2bd0845](https://github.com/mozilla/fxa-auth-server/commit/2bd0845))
- **db:** we need to enforce only a minimum patch level (not {n,n+1}) ([e12f54d](https://github.com/mozilla/fxa-auth-server/commit/e12f54d))
- **dependencies:** move fxa-jwtool from dev-dependencies to dependencies ([79b0427](https://github.com/mozilla/fxa-auth-server/commit/79b0427)), closes [#345](https://github.com/mozilla/fxa-auth-server/issues/345)
- **dependencies:** switch back to main generate-rsa-keypair now that my fix to it was merged ([1c1268b](https://github.com/mozilla/fxa-auth-server/commit/1c1268b))
- **deps:** add filtered npm audit ([71048b3](https://github.com/mozilla/fxa-auth-server/commit/71048b3)), closes [mozilla/fxa#303](https://github.com/mozilla/fxa/issues/303)
- **deps:** ignore npm advisories 39, 48, 658 ([238b0a1](https://github.com/mozilla/fxa-auth-server/commit/238b0a1)), closes [/github.com/mozilla/fxa-auth-server/pull/2643/files#r220807985](https://github.com//github.com/mozilla/fxa-auth-server/pull/2643/files/issues/r220807985)
- **deps:** switch from URIjs to urijs ([ecdf31e](https://github.com/mozilla/fxa-auth-server/commit/ecdf31e)), closes [#347](https://github.com/mozilla/fxa-auth-server/issues/347)
- **deps:** update mocha and other dev deps ([b99e82d](https://github.com/mozilla/fxa-auth-server/commit/b99e82d))
- **deps:** update newrelic and request r=@shane-tomlinson ([b6d6c93](https://github.com/mozilla/fxa-auth-server/commit/b6d6c93))
- **deps:** update some dependencies ([09aa7b0](https://github.com/mozilla/fxa-auth-server/commit/09aa7b0))
- **deps:** update to hapi 14 and joi 9 ([9bc87c0](https://github.com/mozilla/fxa-auth-server/commit/9bc87c0)), closes [#424](https://github.com/mozilla/fxa-auth-server/issues/424)
- **deps:** update to hapi 16, add srinkwrap scripts, update other prod deps ([c102046](https://github.com/mozilla/fxa-auth-server/commit/c102046))
- **deps:** update to mozlog 2.0.2 ([29342a9](https://github.com/mozilla/fxa-auth-server/commit/29342a9)), closes [#337](https://github.com/mozilla/fxa-auth-server/issues/337)
- **doc:** Putting a little emphasis on email first (#584) r=@shane-tomlinson ([8ad17c1](https://github.com/mozilla/fxa-auth-server/commit/8ad17c1)), closes [#584](https://github.com/mozilla/fxa-auth-server/issues/584)
- **docker:** base image node:8-alpine and upgrade to npm6 (#567) r=@jbuck,@vladikoff ([d4060be](https://github.com/mozilla/fxa-auth-server/commit/d4060be)), closes [#567](https://github.com/mozilla/fxa-auth-server/issues/567)
- **docs:** add git guidelines link ([a00167c](https://github.com/mozilla/fxa-auth-server/commit/a00167c))
- **docs:** Change Status Code for Invalid Assertion based ([780aaee](https://github.com/mozilla/fxa-auth-server/commit/780aaee))
- **docs:** document keys and verification_redirect options ([ef8c47a](https://github.com/mozilla/fxa-auth-server/commit/ef8c47a))
- **docs:** minor spelling fixes ([33ad1ec](https://github.com/mozilla/fxa-auth-server/commit/33ad1ec))
- **docs:** note that codes are single use ([6fe39f7](https://github.com/mozilla/fxa-auth-server/commit/6fe39f7)), closes [#214](https://github.com/mozilla/fxa-auth-server/issues/214)
- **docs:** Update description of the `action` param to match latest reality. ([b475fcb](https://github.com/mozilla/fxa-auth-server/commit/b475fcb))
- **email:** ensure mock senders take precedence over the email service ([29f379d](https://github.com/mozilla/fxa-auth-server/commit/29f379d))
- **error:** AppError uses Error.captureStackTrace ([2337f80](https://github.com/mozilla/fxa-auth-server/commit/2337f80)), closes [#164](https://github.com/mozilla/fxa-auth-server/issues/164)
- **events:** require events to be configured in production ([1bef9e0](https://github.com/mozilla/fxa-auth-server/commit/1bef9e0))
- **fatal-error:** Exit with non-zero exit code for fatal errors ([7c90ff0](https://github.com/mozilla/fxa-auth-server/commit/7c90ff0)), closes [#244](https://github.com/mozilla/fxa-auth-server/issues/244)
- **headers:** add cache-control headers to api endpoints; extend tests ([5a81ef9](https://github.com/mozilla/fxa-auth-server/commit/5a81ef9))
- **headers:** make "cache-control" value configurable ([5ba82ea](https://github.com/mozilla/fxa-auth-server/commit/5ba82ea))
- **key-data:** Correctly handle non-existent scopes when finding key data. ([34d9493](https://github.com/mozilla/fxa-auth-server/commit/34d9493))
- **key-data:** Fail cleanly when the client has no allowedScopes. ([fafcef5](https://github.com/mozilla/fxa-auth-server/commit/fafcef5))
- **keys:** Generate unique 'kid' field when regenerating JWK keys ([5b9acae](https://github.com/mozilla/fxa-auth-server/commit/5b9acae))
- **keys:** replace scope key TLD (#505) r=@rfk ([a5e6d8f](https://github.com/mozilla/fxa-auth-server/commit/a5e6d8f)), closes [#505](https://github.com/mozilla/fxa-auth-server/issues/505)
- **log:** add remoteAddressChain to summary (#417) ([568cfa6](https://github.com/mozilla/fxa-auth-server/commit/568cfa6)), closes [#417](https://github.com/mozilla/fxa-auth-server/issues/417) [#415](https://github.com/mozilla/fxa-auth-server/issues/415)
- **log:** avoid crashing on bad payload (#411) r=rfk,jrgm ([19ebed5](https://github.com/mozilla/fxa-auth-server/commit/19ebed5)), closes [#411](https://github.com/mozilla/fxa-auth-server/issues/411) [#410](https://github.com/mozilla/fxa-auth-server/issues/410)
- **logging:** log the reason for account deletions ([3092ac1](https://github.com/mozilla/fxa-auth-server/commit/3092ac1))
- **logging:** use route.path in debug message, not route.url ([7d9efc2](https://github.com/mozilla/fxa-auth-server/commit/7d9efc2))
- **logging:** use space-free tokens for mozlog ([11f73f9](https://github.com/mozilla/fxa-auth-server/commit/11f73f9))
- **logs:** add scope and client_id logs to verify route (#447) r=seanmonstar ([33eb39e](https://github.com/mozilla/fxa-auth-server/commit/33eb39e)), closes [#447](https://github.com/mozilla/fxa-auth-server/issues/447) [#444](https://github.com/mozilla/fxa-auth-server/issues/444)
- **mailer:** Fix the bulk-mailer, add lots of tests. ([806129d](https://github.com/mozilla/fxa-auth-server/commit/806129d))
- **memorydb:** token createdAt used instead of client createdAt (#436) r=vladikoff,seanmonstar ([02dec66](https://github.com/mozilla/fxa-auth-server/commit/02dec66)), closes [#436](https://github.com/mozilla/fxa-auth-server/issues/436) [#421](https://github.com/mozilla/fxa-auth-server/issues/421)
- **metrics:** use correct format for email service notifications ([ec3ff7b](https://github.com/mozilla/fxa-auth-server/commit/ec3ff7b))
- **monorepo:** Update CI config for oauth-server import. ([6a5675c](https://github.com/mozilla/fxa-auth-server/commit/6a5675c))
- **mysql:** Correctly aggregate tokens by clientid. (#576) r=@vladikoff ([2c2cd22](https://github.com/mozilla/fxa-auth-server/commit/2c2cd22)), closes [#576](https://github.com/mozilla/fxa-auth-server/issues/576)
- **newrelic:** update to v2.1.0 ([87a3aee](https://github.com/mozilla/fxa-auth-server/commit/87a3aee))
- **node:** use node 6.12.0 (#501) r=@vladikoff ([167c973](https://github.com/mozilla/fxa-auth-server/commit/167c973)), closes [#501](https://github.com/mozilla/fxa-auth-server/issues/501)
- **node:** use node 6.12.3 (#510) r=@vladikoff ([adc1fc0](https://github.com/mozilla/fxa-auth-server/commit/adc1fc0)), closes [#510](https://github.com/mozilla/fxa-auth-server/issues/510)
- **node:** Use Node.js v6.14.0 (#537) ([f32a3d7](https://github.com/mozilla/fxa-auth-server/commit/f32a3d7)), closes [#537](https://github.com/mozilla/fxa-auth-server/issues/537)
- **nodejs:** update to 6.11.1 for security fixes ([a0520c0](https://github.com/mozilla/fxa-auth-server/commit/a0520c0))
- **oauth:** another notes dev client (#546) ([9d5ec8e](https://github.com/mozilla/fxa-auth-server/commit/9d5ec8e)), closes [#546](https://github.com/mozilla/fxa-auth-server/issues/546)
- **openid:** Generate openid keys on npm postinstall to file ([5f15afa](https://github.com/mozilla/fxa-auth-server/commit/5f15afa))
- **patcher:** Fix patcher with no pre-loaded clients ([dcc47b9](https://github.com/mozilla/fxa-auth-server/commit/dcc47b9))
- **pkce:** Don't require PKCE in the direct grant flow. (#566) r=@vladikoff ([d70fe6d](https://github.com/mozilla/fxa-auth-server/commit/d70fe6d)), closes [#566](https://github.com/mozilla/fxa-auth-server/issues/566) [#559](https://github.com/mozilla/fxa-auth-server/issues/559)
- **pkce:** match pkce implementation to specifications (#498) r=rfk ([cf1c836](https://github.com/mozilla/fxa-auth-server/commit/cf1c836)), closes [#498](https://github.com/mozilla/fxa-auth-server/issues/498) [#495](https://github.com/mozilla/fxa-auth-server/issues/495)
- **profile:** remove the `profileChangedAt` column on tokens table ([5e87bce](https://github.com/mozilla/fxa-auth-server/commit/5e87bce))
- **purge:** add purgeExpiredTokensById to select, then delete by primary key (#580); r=rfk ([adfff65](https://github.com/mozilla/fxa-auth-server/commit/adfff65)), closes [#580](https://github.com/mozilla/fxa-auth-server/issues/580)
- **purge-expired:** accept a list of pocket-id's ([1c843a9](https://github.com/mozilla/fxa-auth-server/commit/1c843a9))
- **purge-expired:** log uncaughtException; minimum log level of info ([264271e](https://github.com/mozilla/fxa-auth-server/commit/264271e))
- **purge-expired:** moar logging ([80c360e](https://github.com/mozilla/fxa-auth-server/commit/80c360e))
- **purge-expired:** Promise.delay takes milliseconds; allow subsecond delay ([10c6103](https://github.com/mozilla/fxa-auth-server/commit/10c6103))
- **purge-expired:** set db.autoUpdateClients config to false ([bc66fc3](https://github.com/mozilla/fxa-auth-server/commit/bc66fc3))
- **purge-expired:** use db.getClient() to check for unknown clientId ([c33f1d9](https://github.com/mozilla/fxa-auth-server/commit/c33f1d9))
- **route:** make email false by default (#533) r=@rfk ([aa68fb9](https://github.com/mozilla/fxa-auth-server/commit/aa68fb9)), closes [#533](https://github.com/mozilla/fxa-auth-server/issues/533)
- **scopes:** Document scope-handling rules, use shared code to enforce them. (#551); r=vbudhr ([237886d](https://github.com/mozilla/fxa-auth-server/commit/237886d)), closes [#551](https://github.com/mozilla/fxa-auth-server/issues/551)
- **scopes:** Dont treat `foo:write` as a sub-scope of `foo`. ([b4b30c2](https://github.com/mozilla/fxa-auth-server/commit/b4b30c2))
- **scripts:** Fix varname typo in test runner script. (#535) ([02804a8](https://github.com/mozilla/fxa-auth-server/commit/02804a8)), closes [#535](https://github.com/mozilla/fxa-auth-server/issues/535)
- **scripts:** Use pure JS module to generate RSA keypairs (#439) r=vladikoff ([3380e1c](https://github.com/mozilla/fxa-auth-server/commit/3380e1c)), closes [#439](https://github.com/mozilla/fxa-auth-server/issues/439)
- **security:** enable x-content-type-options nosniff ([5ea5001](https://github.com/mozilla/fxa-auth-server/commit/5ea5001))
- **security:** enable X-XSS-Protection 1; mode=block ([52ca1e5](https://github.com/mozilla/fxa-auth-server/commit/52ca1e5))
- **security:** set x-frame-options deny ([21ea05d](https://github.com/mozilla/fxa-auth-server/commit/21ea05d))
- **server:** exit if db patch level is wrong ([78d6382](https://github.com/mozilla/fxa-auth-server/commit/78d6382))
- **shrinkwrap:** restore deleted npm-shrinkwrap.json ([6383481](https://github.com/mozilla/fxa-auth-server/commit/6383481))
- **spelling:** minor spelling fix in tests (#403) r=vladikoff ([d4ff105](https://github.com/mozilla/fxa-auth-server/commit/d4ff105)), closes [#403](https://github.com/mozilla/fxa-auth-server/issues/403)
- **sql:** fix the schema issue with the trailing comma ([069caeb](https://github.com/mozilla/fxa-auth-server/commit/069caeb)), closes [#299](https://github.com/mozilla/fxa-auth-server/issues/299)
- **sql:** remove references to the `whitelisted` column; this is now the `trusted` column ([6b4d1ec](https://github.com/mozilla/fxa-auth-server/commit/6b4d1ec))
- **sql:** undo 155d2ce; for mysql-patcher fix up that database ([eb9f40d](https://github.com/mozilla/fxa-auth-server/commit/eb9f40d)), closes [#301](https://github.com/mozilla/fxa-auth-server/issues/301)
- **test:** encrypt refresh_token on db query (#414) r=seanmonstar,vladikoff ([7f52d46](https://github.com/mozilla/fxa-auth-server/commit/7f52d46)), closes [#414](https://github.com/mozilla/fxa-auth-server/issues/414) [#413](https://github.com/mozilla/fxa-auth-server/issues/413)
- **test:** fix unhandled rejection error with memory db impl (#454) r=vladikoff ([c870eba](https://github.com/mozilla/fxa-auth-server/commit/c870eba)), closes [#454](https://github.com/mozilla/fxa-auth-server/issues/454)
- **tests:** check insert of utf8mb4 ([4e6a77a](https://github.com/mozilla/fxa-auth-server/commit/4e6a77a))
- **tests:** double before hook timeout for tests on slow machines ([2333416](https://github.com/mozilla/fxa-auth-server/commit/2333416))
- **tests:** mock outstanding error logs in test suite r=@vladikoff ([6a5d3ce](https://github.com/mozilla/fxa-auth-server/commit/6a5d3ce)), closes [#334](https://github.com/mozilla/fxa-auth-server/issues/334)
- **tests:** More reliable generation of RSA keys for tests ([981d0b7](https://github.com/mozilla/fxa-auth-server/commit/981d0b7))
- **tests:** Refactor use of process.exit() to be outside of code under test. ([47f4f17](https://github.com/mozilla/fxa-auth-server/commit/47f4f17))
- **tests:** remove assertions of profileChangedAt property ([60af54f](https://github.com/mozilla/fxa-auth-server/commit/60af54f))
- **tests:** sleep additional half second to adjust for mysql round of timestamp ([a02f516](https://github.com/mozilla/fxa-auth-server/commit/a02f516))
- **tests:** speed up and upgrade the test runner (#467) r=seanmonstar ([2e76c9e](https://github.com/mozilla/fxa-auth-server/commit/2e76c9e)), closes [#467](https://github.com/mozilla/fxa-auth-server/issues/467)
- **token:** disable expiration error ([c9547a8](https://github.com/mozilla/fxa-auth-server/commit/c9547a8))
- **tokens:** Added scripts that purge expired access tokens. ([10bbb24](https://github.com/mozilla/fxa-auth-server/commit/10bbb24))
- **tokens:** Avoid quadratic behaviour when listing active clients. (#9); r=vladikoff ([15c3065](https://github.com/mozilla/fxa-auth-server/commit/15c3065)), closes [#9](https://github.com/mozilla/fxa-auth-server/issues/9)
- **tokens:** Begin expiring access tokens beyond a configurable epoch. ([b346326](https://github.com/mozilla/fxa-auth-server/commit/b346326))
- **tokens:** invalidate refresh tokens on client-token DELETE action (#508) ([df0ca82](https://github.com/mozilla/fxa-auth-server/commit/df0ca82)), closes [#508](https://github.com/mozilla/fxa-auth-server/issues/508) [#507](https://github.com/mozilla/fxa-auth-server/issues/507)
- **tokens:** ttl parameter must be positive (#429) r=vladikoff ([1764d73](https://github.com/mozilla/fxa-auth-server/commit/1764d73)), closes [#429](https://github.com/mozilla/fxa-auth-server/issues/429)
- **travis:** build on node 0.10, 0.12, 4, no allowed failures ([6684e8c](https://github.com/mozilla/fxa-auth-server/commit/6684e8c))
- **travis:** install libgmp3-dev so optionaldep bigint will be built for browserid-crypto ([a64cb18](https://github.com/mozilla/fxa-auth-server/commit/a64cb18))
- **travis:** remove broken validate shrinkwrap ([1729764](https://github.com/mozilla/fxa-auth-server/commit/1729764))
- **travis:** run tests with 6 and 8 (#497) r=vladikoff ([a49b272](https://github.com/mozilla/fxa-auth-server/commit/a49b272)), closes [#497](https://github.com/mozilla/fxa-auth-server/issues/497)
- **travis:** test on node4/node6 with default npm & g++-4.8 ([b4e1dd8](https://github.com/mozilla/fxa-auth-server/commit/b4e1dd8))
- **validation:** Allow redirect uris with existing query params. (#548); r=philbooth ([b93e6a1](https://github.com/mozilla/fxa-auth-server/commit/b93e6a1)), closes [#548](https://github.com/mozilla/fxa-auth-server/issues/548)
- **validation:** Restrict characters allowed in 'scope' parameter. ([7dd2a39](https://github.com/mozilla/fxa-auth-server/commit/7dd2a39))
- **version:** use cwd and env var to get version (#452) r=vladikoff ([a3b1aa2](https://github.com/mozilla/fxa-auth-server/commit/a3b1aa2)), closes [#452](https://github.com/mozilla/fxa-auth-server/issues/452)
- **version:** use explicit path with git-config ([e0af8bc](https://github.com/mozilla/fxa-auth-server/commit/e0af8bc))

### chore

- **api:** remove metrics context data from deprecated endpoints ([d884148](https://github.com/mozilla/fxa-auth-server/commit/d884148)), closes [#2496](https://github.com/mozilla/fxa-auth-server/issues/2496)
- **awsbox:** remove unused awsbox ([f053c9f](https://github.com/mozilla/fxa-auth-server/commit/f053c9f))
- **build:** Bump eslint-config-fxa to latest version ([fe45e0b](https://github.com/mozilla/fxa-auth-server/commit/fe45e0b))
- **build:** create changelogs each release ([16f1f5b](https://github.com/mozilla/fxa-auth-server/commit/16f1f5b)), closes [#158](https://github.com/mozilla/fxa-auth-server/issues/158)
- **build:** switch to grunt-nsp ([ac31672](https://github.com/mozilla/fxa-auth-server/commit/ac31672))
- **ci:** drop node 4 as a supported env (#478) ([176c828](https://github.com/mozilla/fxa-auth-server/commit/176c828)), closes [#478](https://github.com/mozilla/fxa-auth-server/issues/478)
- **clients:** add credentials for FF/FFOS/Fennec/FxA clients in dev ([b501abe](https://github.com/mozilla/fxa-auth-server/commit/b501abe))
- **clients:** remove deprecated 'whitelisted' column from clients table. ([cf16f8a](https://github.com/mozilla/fxa-auth-server/commit/cf16f8a))
- **clients:** rename "whitelisted" property to "trusted". ([b8927a8](https://github.com/mozilla/fxa-auth-server/commit/b8927a8))
- **config:** add local loop dev credentials ([70cc480](https://github.com/mozilla/fxa-auth-server/commit/70cc480))
- **config:** add Notes trailing slash to redirect in dev.json (#536) ([e8bf2e5](https://github.com/mozilla/fxa-auth-server/commit/e8bf2e5)), closes [#536](https://github.com/mozilla/fxa-auth-server/issues/536)
- **config:** add oauth console into dev config ([14d7bab](https://github.com/mozilla/fxa-auth-server/commit/14d7bab))
- **config:** remove duplicate 'canGrant' field in config file ([259da3d](https://github.com/mozilla/fxa-auth-server/commit/259da3d))
- **config:** Update convict and switch on strict validation. ([1f49ad4](https://github.com/mozilla/fxa-auth-server/commit/1f49ad4))
- **db:** Add db migration to revert change that couldn't go to production. ([9382239](https://github.com/mozilla/fxa-auth-server/commit/9382239))
- **dep:** replaced bidcrypto dep with fxa-jwtool ([7d71239](https://github.com/mozilla/fxa-auth-server/commit/7d71239))
- **dependencies:** bump hapi version ([13c2d57](https://github.com/mozilla/fxa-auth-server/commit/13c2d57))
- **dependencies:** dependency upgrades ([4430228](https://github.com/mozilla/fxa-auth-server/commit/4430228))
- **dependencies:** update 'jwcrypto' dependency to 'browserid-crypto' ([b9bf102](https://github.com/mozilla/fxa-auth-server/commit/b9bf102)), closes [#151](https://github.com/mozilla/fxa-auth-server/issues/151)
- **dependencies:** update convict ([8dfa52f](https://github.com/mozilla/fxa-auth-server/commit/8dfa52f))
- **dependencies:** update most dependencies ([ad61ecb](https://github.com/mozilla/fxa-auth-server/commit/ad61ecb))
- **dependencies:** updating deps ([e412925](https://github.com/mozilla/fxa-auth-server/commit/e412925))
- **dependencies:** upgrade mozlog to 2.0.3 ([262bbc9](https://github.com/mozilla/fxa-auth-server/commit/262bbc9))
- **deps:** Generate shrinkwrap for latest dependency updates ([84e69b5](https://github.com/mozilla/fxa-auth-server/commit/84e69b5))
- **deps:** update deps, fix nsp (#517) r=@philbooth ([9f12267](https://github.com/mozilla/fxa-auth-server/commit/9f12267)), closes [#517](https://github.com/mozilla/fxa-auth-server/issues/517)
- **deps:** Update hapi dependency. (#457), r=@vbudhram ([24a570f](https://github.com/mozilla/fxa-auth-server/commit/24a570f)), closes [#457](https://github.com/mozilla/fxa-auth-server/issues/457)
- **deps:** Update hapi to latest version (#482) r=vladikoff ([6b2810e](https://github.com/mozilla/fxa-auth-server/commit/6b2810e)), closes [#482](https://github.com/mozilla/fxa-auth-server/issues/482)
- **deps:** Update hapi to v16.6.3 (#526) ([78c88ad](https://github.com/mozilla/fxa-auth-server/commit/78c88ad)), closes [#526](https://github.com/mozilla/fxa-auth-server/issues/526)
- **deps:** Update request package to latest version (#407) r=vladikoff ([b8ef1d7](https://github.com/mozilla/fxa-auth-server/commit/b8ef1d7)), closes [#407](https://github.com/mozilla/fxa-auth-server/issues/407)
- **dev:** add 321Done untrusted client ([a291205](https://github.com/mozilla/fxa-auth-server/commit/a291205))
- **dev:** add Firefox Notes Web Extension client to development config ([3960e5f](https://github.com/mozilla/fxa-auth-server/commit/3960e5f))
- **dev:** add Notes supprot scope in dev (#492) ([85af2a2](https://github.com/mozilla/fxa-auth-server/commit/85af2a2)), closes [#492](https://github.com/mozilla/fxa-auth-server/issues/492)
- **docker:** remove old docker self-host files ([9f5247f](https://github.com/mozilla/fxa-auth-server/commit/9f5247f))
- **docker:** Update to node 6.11.5 (#494) ([6eb07cf](https://github.com/mozilla/fxa-auth-server/commit/6eb07cf)), closes [#494](https://github.com/mozilla/fxa-auth-server/issues/494)
- **docker:** Use official node image & update to Node.js v4.8.2 (#462) r=vladikoff ([b1924b0](https://github.com/mozilla/fxa-auth-server/commit/b1924b0)), closes [#462](https://github.com/mozilla/fxa-auth-server/issues/462)
- **docs:** Add a comment about privKey/pubKey confusion in gen_keys ([d2edd4b](https://github.com/mozilla/fxa-auth-server/commit/d2edd4b))
- **docs:** add a note about dev envs ([0663c19](https://github.com/mozilla/fxa-auth-server/commit/0663c19)), closes [#148](https://github.com/mozilla/fxa-auth-server/issues/148)
- **docs:** add CircleCI badge to readme ([acff566](https://github.com/mozilla/fxa-auth-server/commit/acff566))
- **docs:** move self-host docker file ([2180f92](https://github.com/mozilla/fxa-auth-server/commit/2180f92))
- **docs:** remove older Docker files (#426) ([370c898](https://github.com/mozilla/fxa-auth-server/commit/370c898)), closes [#426](https://github.com/mozilla/fxa-auth-server/issues/426)
- **grunt:** make 'grunt release' generate changelog also ([87d5861](https://github.com/mozilla/fxa-auth-server/commit/87d5861))
- **license:** Update license to be SPDX compliant ([ff83ec2](https://github.com/mozilla/fxa-auth-server/commit/ff83ec2))
- **lint:** add ESLint ([1531061](https://github.com/mozilla/fxa-auth-server/commit/1531061)), closes [#274](https://github.com/mozilla/fxa-auth-server/issues/274)
- **logging:** Log additional details for debugging expired tokens ([22cf3ab](https://github.com/mozilla/fxa-auth-server/commit/22cf3ab))
- **npm:** update to npm5 (#522) r=@vbudhram ([3783605](https://github.com/mozilla/fxa-auth-server/commit/3783605)), closes [#522](https://github.com/mozilla/fxa-auth-server/issues/522)
- **package:** npm shrinkwrap ([8ba20b0](https://github.com/mozilla/fxa-auth-server/commit/8ba20b0))
- **package:** pin blanket to 1.1.6 ([072385b](https://github.com/mozilla/fxa-auth-server/commit/072385b))
- **package:** remove main from package.json ([ebc60a5](https://github.com/mozilla/fxa-auth-server/commit/ebc60a5)), closes [#206](https://github.com/mozilla/fxa-auth-server/issues/206)
- **release:** add tasks "grunt version" and "grunt version:patch" to create release tags ([1be1380](https://github.com/mozilla/fxa-auth-server/commit/1be1380))
- **release:** use CHANGELOG.md instead of CHANGELOG during bump ([520b39c](https://github.com/mozilla/fxa-auth-server/commit/520b39c))
- **tests:** remove weird mocking magic ([47389fa](https://github.com/mozilla/fxa-auth-server/commit/47389fa))
- **tests:** Uniformly use promises rather than done() callback. ([2a4731f](https://github.com/mozilla/fxa-auth-server/commit/2a4731f))
- **tokens:** add a comment about why we're inserting an empty string for email ([eed414b](https://github.com/mozilla/fxa-auth-server/commit/eed414b))
- **travis:** drop node 0.12 support ([b4eba46](https://github.com/mozilla/fxa-auth-server/commit/b4eba46))
- **travis:** Only install libgmp3-dev on Travis ([cfafb19](https://github.com/mozilla/fxa-auth-server/commit/cfafb19))
- **travis:** Tell Travis to use #fxa-bots ([17134db](https://github.com/mozilla/fxa-auth-server/commit/17134db))
- **travis:** use npm@2 for more stable installs ([3c3e127](https://github.com/mozilla/fxa-auth-server/commit/3c3e127))
- **version:** add /**version** route with source repo ([37a08f2](https://github.com/mozilla/fxa-auth-server/commit/37a08f2))
- **version:** generate legacy-format output for ./config/version.json ([51b5f3b](https://github.com/mozilla/fxa-auth-server/commit/51b5f3b))

### docs

- **api:** Update `email` behavior for GET /v1/authorization. ([755ec9a](https://github.com/mozilla/fxa-auth-server/commit/755ec9a))
- **authorization:** Document email param in GET /authorization ([fbf1eb7](https://github.com/mozilla/fxa-auth-server/commit/fbf1eb7))
- **service-clients:** Document Service Clients, JKUs, and JWTs ([d2f1ef3](https://github.com/mozilla/fxa-auth-server/commit/d2f1ef3)), closes [#329](https://github.com/mozilla/fxa-auth-server/issues/329)
- **service-clients:** Document Service Clients, JKUs, and JWTs ([799f0e2](https://github.com/mozilla/fxa-auth-server/commit/799f0e2)), closes [#329](https://github.com/mozilla/fxa-auth-server/issues/329)
- **verify:** fix misnamed 'scopes' response property ([b5728cf](https://github.com/mozilla/fxa-auth-server/commit/b5728cf)), closes [#261](https://github.com/mozilla/fxa-auth-server/issues/261)
- **workflow:** fixes workflow typo ([318d9e1](https://github.com/mozilla/fxa-auth-server/commit/318d9e1))

### Features

- **2fa:** check acr values during authorization flow ([c20682a](https://github.com/mozilla/fxa-auth-server/commit/c20682a))
- **amr:** Report `amr` and `acr` claims in the id_token. (#530); r=vbudhram ([8181f7f](https://github.com/mozilla/fxa-auth-server/commit/8181f7f)), closes [#530](https://github.com/mozilla/fxa-auth-server/issues/530)
- **api:** Add `action=force_auth` to GET /v1/authorization. ([33603bd](https://github.com/mozilla/fxa-auth-server/commit/33603bd)), closes [#190](https://github.com/mozilla/fxa-auth-server/issues/190)
- **api:** add `auth_at` to token response schema. ([bc8454d](https://github.com/mozilla/fxa-auth-server/commit/bc8454d)), closes [#181](https://github.com/mozilla/fxa-auth-server/issues/181)
- **api:** add ttl parameter to POST /authorization ([36087fe](https://github.com/mozilla/fxa-auth-server/commit/36087fe))
- **api:** allow destroying token without client_secret ([7b4d01f](https://github.com/mozilla/fxa-auth-server/commit/7b4d01f))
- **auth:** Accept client credentials in the Authorization header. (#514); r=philbooth ([1c50807](https://github.com/mozilla/fxa-auth-server/commit/1c50807)), closes [#514](https://github.com/mozilla/fxa-auth-server/issues/514)
- **auth:** redirect to content-server oauth root by default ([34ad867](https://github.com/mozilla/fxa-auth-server/commit/34ad867)), closes [#245](https://github.com/mozilla/fxa-auth-server/issues/245)
- **authorization:** add uri validation on the authorization endpoint (#428) r=jrgm,seanmonstar ([fcc0b52](https://github.com/mozilla/fxa-auth-server/commit/fcc0b52)), closes [#428](https://github.com/mozilla/fxa-auth-server/issues/428) [#387](https://github.com/mozilla/fxa-auth-server/issues/387) [#388](https://github.com/mozilla/fxa-auth-server/issues/388)
- **authorization:** Directly return `code` in authorization response. (#541); r=philbooth ([7ad1e56](https://github.com/mozilla/fxa-auth-server/commit/7ad1e56)), closes [#541](https://github.com/mozilla/fxa-auth-server/issues/541)
- **authorization:** exit early if assertion invalid returns first ([5a27ee6](https://github.com/mozilla/fxa-auth-server/commit/5a27ee6))
- **authorization:** Require tokenVerified=true for key-bearing scopes. (#561) r=@vladikoff ([f9ad63e](https://github.com/mozilla/fxa-auth-server/commit/f9ad63e)), closes [#561](https://github.com/mozilla/fxa-auth-server/issues/561) [/github.com/mozilla-services/tokenserver/blob/master/tokenserver/views.py#L140](https://github.com//github.com/mozilla-services/tokenserver/blob/master/tokenserver/views.py/issues/L140)
- **ci:** move to CircleCI 2 (#554) r=@jbuck ([97e4f62](https://github.com/mozilla/fxa-auth-server/commit/97e4f62)), closes [#554](https://github.com/mozilla/fxa-auth-server/issues/554)
- **clients:** add `terms_uri` and `privacy_uri` properties to clients. ([51ae904](https://github.com/mozilla/fxa-auth-server/commit/51ae904))
- **clients:** add notion of Service Clients in config ([8cfdffe](https://github.com/mozilla/fxa-auth-server/commit/8cfdffe)), closes [#327](https://github.com/mozilla/fxa-auth-server/issues/327)
- **clients:** Added initial support for using previous client secret ([4f9df20](https://github.com/mozilla/fxa-auth-server/commit/4f9df20))
- **clients:** client registration apis ([1a80294](https://github.com/mozilla/fxa-auth-server/commit/1a80294)), closes [#60](https://github.com/mozilla/fxa-auth-server/issues/60)
- **clients:** move client management api to a separate port ([07a61af](https://github.com/mozilla/fxa-auth-server/commit/07a61af))
- **clients:** remove obsolete generate-client.js script ([62ab0ad](https://github.com/mozilla/fxa-auth-server/commit/62ab0ad)), closes [#231](https://github.com/mozilla/fxa-auth-server/issues/231)
- **clients:** report `trusted` property in GET /client/:id ([c58d237](https://github.com/mozilla/fxa-auth-server/commit/c58d237))
- **codes:** Delete authorization codes when revoking client access. (#578); r=philbooth ([b905b7c](https://github.com/mozilla/fxa-auth-server/commit/b905b7c)), closes [#578](https://github.com/mozilla/fxa-auth-server/issues/578)
- **config:** add browserid pool maxSockets option ([0bb40ba](https://github.com/mozilla/fxa-auth-server/commit/0bb40ba))
- **config:** add mysql pool conectionLimit option ([ca220ae](https://github.com/mozilla/fxa-auth-server/commit/ca220ae))
- **db:** add basic migration infrastructure to mysql backend ([012e605](https://github.com/mozilla/fxa-auth-server/commit/012e605)), closes [#183](https://github.com/mozilla/fxa-auth-server/issues/183)
- **db:** remove clients.secret column ([0e39d1e](https://github.com/mozilla/fxa-auth-server/commit/0e39d1e)), closes [#323](https://github.com/mozilla/fxa-auth-server/issues/323)
- **deps:** update server dependencies ([80ac3cf](https://github.com/mozilla/fxa-auth-server/commit/80ac3cf))
- **deps:** update to bluebird 3 ([8f4c664](https://github.com/mozilla/fxa-auth-server/commit/8f4c664)), closes [#570](https://github.com/mozilla/fxa-auth-server/issues/570)
- **developers:** adds support for oauth developers ([abe0e52](https://github.com/mozilla/fxa-auth-server/commit/abe0e52))
- **docker:** Add CloudOps Dockerfile & CircleCI build instructions ([a80b4b4](https://github.com/mozilla/fxa-auth-server/commit/a80b4b4))
- **docker:** Additional Dockerfile for self-hosting ([83a8b6c](https://github.com/mozilla/fxa-auth-server/commit/83a8b6c))
- **docker:** Dockerfile and README update for basic docker development workflow ([342d87b](https://github.com/mozilla/fxa-auth-server/commit/342d87b))
- **docker:** Shrink Docker image size (#438) r=vladikoff ([13d13b9](https://github.com/mozilla/fxa-auth-server/commit/13d13b9)), closes [#438](https://github.com/mozilla/fxa-auth-server/issues/438)
- **docker:** support feature branches (#464) r=jrgm ([f94fd61](https://github.com/mozilla/fxa-auth-server/commit/f94fd61)), closes [#464](https://github.com/mozilla/fxa-auth-server/issues/464)
- **email-first:** Add support for the email-first flow. (#540); r=philbooth,rfk ([cb11145](https://github.com/mozilla/fxa-auth-server/commit/cb11145)), closes [#540](https://github.com/mozilla/fxa-auth-server/issues/540) [#539](https://github.com/mozilla/fxa-auth-server/issues/539)
- **error:** add info property with link to docs ([681044c](https://github.com/mozilla/fxa-auth-server/commit/681044c))
- **hpkp:** Add the hpkp headers to all requests (#416) r=vladikoff ([6b8a8c8](https://github.com/mozilla/fxa-auth-server/commit/6b8a8c8)), closes [#416](https://github.com/mozilla/fxa-auth-server/issues/416)
- **keys:** Add created-at timestamp to our public keys. (#453); r=seanmonstar,vladikoff ([511d9a6](https://github.com/mozilla/fxa-auth-server/commit/511d9a6)), closes [#453](https://github.com/mozilla/fxa-auth-server/issues/453)
- **keys:** add key-data docs, move client_id into payload (#491); r=rfk ([a9152c3](https://github.com/mozilla/fxa-auth-server/commit/a9152c3)), closes [#491](https://github.com/mozilla/fxa-auth-server/issues/491)
- **keys:** add keys_jwe support (#486) r=rfk ([6a4efd1](https://github.com/mozilla/fxa-auth-server/commit/6a4efd1)), closes [#486](https://github.com/mozilla/fxa-auth-server/issues/486) [#484](https://github.com/mozilla/fxa-auth-server/issues/484)
- **keys:** Check lastAuthAt freshness when fetching key data. (#502) r=@vladikoff ([855adee](https://github.com/mozilla/fxa-auth-server/commit/855adee)), closes [#502](https://github.com/mozilla/fxa-auth-server/issues/502)
- **keys:** Check lastAuthAt freshness when fetching key data. (#506) r=@vladikoff ([e0de2f3](https://github.com/mozilla/fxa-auth-server/commit/e0de2f3)), closes [#506](https://github.com/mozilla/fxa-auth-server/issues/506)
- **lb:** Add `__lbheartbeat__` endpoint (#458), r=@jbuck ([c387907](https://github.com/mozilla/fxa-auth-server/commit/c387907)), closes [#458](https://github.com/mozilla/fxa-auth-server/issues/458)
- **logging:** add log of time taken in authorization endpoint ([02ec0d2](https://github.com/mozilla/fxa-auth-server/commit/02ec0d2))
- **logging:** add log when mysql pool enqueues ([461b5c1](https://github.com/mozilla/fxa-auth-server/commit/461b5c1))
- **logging:** add method, payload, and auth to summary ([df57e23](https://github.com/mozilla/fxa-auth-server/commit/df57e23)), closes [#174](https://github.com/mozilla/fxa-auth-server/issues/174)
- **logging:** log details when generating code ([81933f7](https://github.com/mozilla/fxa-auth-server/commit/81933f7))
- **logging:** switch logging to mozlog ([ec0f5db](https://github.com/mozilla/fxa-auth-server/commit/ec0f5db)), closes [#156](https://github.com/mozilla/fxa-auth-server/issues/156)
- **logs:** add sentry support (#499), r=@vbudhram ([ef34859](https://github.com/mozilla/fxa-auth-server/commit/ef34859)), closes [#499](https://github.com/mozilla/fxa-auth-server/issues/499)
- **metrics:** add code and config for email service notification queue ([ccd5556](https://github.com/mozilla/fxa-auth-server/commit/ccd5556)), closes [#2633](https://github.com/mozilla/fxa-auth-server/issues/2633)
- **monorepo:** Move everything into a subdirectory. ([8453f6e](https://github.com/mozilla/fxa-auth-server/commit/8453f6e))
- **node:** update to node 8 (#544) r=@jrgm ([e9b08ae](https://github.com/mozilla/fxa-auth-server/commit/e9b08ae)), closes [#544](https://github.com/mozilla/fxa-auth-server/issues/544)
- **node:** upgrade to node 6 ([57c61ab](https://github.com/mozilla/fxa-auth-server/commit/57c61ab))
- **oauth:** add methods to support oauth client management (#405) r=seanmonstar ([2748510](https://github.com/mozilla/fxa-auth-server/commit/2748510)), closes [#405](https://github.com/mozilla/fxa-auth-server/issues/405)
- **oauth:** make server compatible with AppAuth (#534) r=@rfk ([ff9e422](https://github.com/mozilla/fxa-auth-server/commit/ff9e422)), closes [#534](https://github.com/mozilla/fxa-auth-server/issues/534)
- **oauth:** Track last time refreshToken was used (#412) r=vladikoff,seanmonstar ([25c455a](https://github.com/mozilla/fxa-auth-server/commit/25c455a)), closes [#412](https://github.com/mozilla/fxa-auth-server/issues/412) [#275](https://github.com/mozilla/fxa-auth-server/issues/275)
- **openid:** add initial OpenID Connect support ([93f8758](https://github.com/mozilla/fxa-auth-server/commit/93f8758)), closes [#362](https://github.com/mozilla/fxa-auth-server/issues/362)
- **openid:** add profileChangedAt to claims (#607), r=@rfk ([f6e93eb](https://github.com/mozilla/fxa-auth-server/commit/f6e93eb)), closes [#607](https://github.com/mozilla/fxa-auth-server/issues/607)
- **openid:** Add support for OIDC `login_hint` query param. ([200ce43](https://github.com/mozilla/fxa-auth-server/commit/200ce43))
- **openid:** add the openid connect `at_hash` value (#598), r=@rfk ([d08310e](https://github.com/mozilla/fxa-auth-server/commit/d08310e)), closes [#598](https://github.com/mozilla/fxa-auth-server/issues/598)
- **openid:** Allow untrusted reliers to request `openid` scope. (#516), r=@vbudhram ([f764dc8](https://github.com/mozilla/fxa-auth-server/commit/f764dc8)), closes [#516](https://github.com/mozilla/fxa-auth-server/issues/516)
- **pkce:** add ability for PKCE clients to use refresh_tokens (#476) r=seanmonstar ([7b401eb](https://github.com/mozilla/fxa-auth-server/commit/7b401eb)), closes [#476](https://github.com/mozilla/fxa-auth-server/issues/476) [#472](https://github.com/mozilla/fxa-auth-server/issues/472)
- **pkce:** add PKCE support to the oauth server (#466) r=seanmonstar ([ed59c0e](https://github.com/mozilla/fxa-auth-server/commit/ed59c0e)), closes [#466](https://github.com/mozilla/fxa-auth-server/issues/466)
- **refresh_tokens:** add refresh_tokens to /token endpoint ([16e787f](https://github.com/mozilla/fxa-auth-server/commit/16e787f)), closes [#209](https://github.com/mozilla/fxa-auth-server/issues/209)
- **scopes:** add key-data and scope support (#487) r=rfk ([f3fcae5](https://github.com/mozilla/fxa-auth-server/commit/f3fcae5)), closes [#487](https://github.com/mozilla/fxa-auth-server/issues/487) [#483](https://github.com/mozilla/fxa-auth-server/issues/483)
- **scopes:** allow https:// scopes (#490); r=rfk ([f892bcb](https://github.com/mozilla/fxa-auth-server/commit/f892bcb)), closes [#490](https://github.com/mozilla/fxa-auth-server/issues/490) [#489](https://github.com/mozilla/fxa-auth-server/issues/489)
- **scripts:** Add script to generate an oauth client ([f21f657](https://github.com/mozilla/fxa-auth-server/commit/f21f657))
- **server:** set HSTS header for 180 days ([d43accb](https://github.com/mozilla/fxa-auth-server/commit/d43accb))
- **server:** update to Hapi 17 ([0ebfebe](https://github.com/mozilla/fxa-auth-server/commit/0ebfebe))
- **shared:** add new locales ([d6e88df](https://github.com/mozilla/fxa-auth-server/commit/d6e88df))
- **sync:** add local test client for sync (#549) ([61ed2e7](https://github.com/mozilla/fxa-auth-server/commit/61ed2e7)), closes [#549](https://github.com/mozilla/fxa-auth-server/issues/549)
- **sync:** add oldsync scope (#550) r=@rfk ([f2e7bb4](https://github.com/mozilla/fxa-auth-server/commit/f2e7bb4)), closes [#550](https://github.com/mozilla/fxa-auth-server/issues/550)
- **token:** reject expired tokens ([4f519ca](https://github.com/mozilla/fxa-auth-server/commit/4f519ca)), closes [#365](https://github.com/mozilla/fxa-auth-server/issues/365)
- **tokens:** add support for password change and reset event (#485) r=rfk ([f5873f9](https://github.com/mozilla/fxa-auth-server/commit/f5873f9)), closes [#485](https://github.com/mozilla/fxa-auth-server/issues/485) [#481](https://github.com/mozilla/fxa-auth-server/issues/481)
- **tokens:** allow using JWT grants from Service Clients ([55f88a9](https://github.com/mozilla/fxa-auth-server/commit/55f88a9)), closes [#328](https://github.com/mozilla/fxa-auth-server/issues/328)
- **tokens:** allow using JWT grants from Service Clients ([0a0e303](https://github.com/mozilla/fxa-auth-server/commit/0a0e303)), closes [#328](https://github.com/mozilla/fxa-auth-server/issues/328)
- **untrusted-clients:** restrict scopes that untrusted clients can request ([8fd228a](https://github.com/mozilla/fxa-auth-server/commit/8fd228a)), closes [#243](https://github.com/mozilla/fxa-auth-server/issues/243)
- **verify:** add opt out parameter to verify endpoint ([e4c54ff](https://github.com/mozilla/fxa-auth-server/commit/e4c54ff)), closes [#358](https://github.com/mozilla/fxa-auth-server/issues/358)
- **verify:** added 'client' to /verify response ([4c57551](https://github.com/mozilla/fxa-auth-server/commit/4c57551)), closes [#149](https://github.com/mozilla/fxa-auth-server/issues/149)

### JsonFormatter

- outputs JSON in same format as fxa-auth-server ([c89ca92](https://github.com/mozilla/fxa-auth-server/commit/c89ca92))

### Refactor

- **client:** scope added in memory and sql (#445) r=vladikoff ([4efc383](https://github.com/mozilla/fxa-auth-server/commit/4efc383)), closes [#445](https://github.com/mozilla/fxa-auth-server/issues/445) [#431](https://github.com/mozilla/fxa-auth-server/issues/431)
- **clients:** remove terms and privacy uris ([5c1e0be](https://github.com/mozilla/fxa-auth-server/commit/5c1e0be)), closes [#406](https://github.com/mozilla/fxa-auth-server/issues/406)
- **config:** Use human-readable duration values in config ([20aa8fa](https://github.com/mozilla/fxa-auth-server/commit/20aa8fa))
- **db:** add hashedSecret column to clients ([9ceaf1f](https://github.com/mozilla/fxa-auth-server/commit/9ceaf1f)), closes [#155](https://github.com/mozilla/fxa-auth-server/issues/155)
- **db:** clients.secret to clients.hashedSecret, remove clients.whitelisted ([155d2ce](https://github.com/mozilla/fxa-auth-server/commit/155d2ce)), closes [#155](https://github.com/mozilla/fxa-auth-server/issues/155) [#267](https://github.com/mozilla/fxa-auth-server/issues/267)
- **email:** Fixes #352 Remove ability to fetch email address (#543) r=@shane-tomlinson ([068bd4b](https://github.com/mozilla/fxa-auth-server/commit/068bd4b)), closes [#352](https://github.com/mozilla/fxa-auth-server/issues/352) [#543](https://github.com/mozilla/fxa-auth-server/issues/543)
- **keys:** rename keyMaterial, timestamp to keyRotationSecret, k… (#500) r=@rfk ([48ec2a3](https://github.com/mozilla/fxa-auth-server/commit/48ec2a3)), closes [#500](https://github.com/mozilla/fxa-auth-server/issues/500)
- **lint:** remove jscs, update eslint rules (#477), r=@vbudhram ([8bc148a](https://github.com/mozilla/fxa-auth-server/commit/8bc148a)), closes [#477](https://github.com/mozilla/fxa-auth-server/issues/477)

### Reverts

- **keys:** Check lastAuthAt freshness when fetching key data ([5d772f6](https://github.com/mozilla/fxa-auth-server/commit/5d772f6))
- **service-tokens): Revert "docs(service-clients:** Document Service Clients, JKUs, and JWTs" ([6be9ac2](https://github.com/mozilla/fxa-auth-server/commit/6be9ac2))
- **service-tokens): Revert "feat(tokens:** allow using JWT grants from Service Clients" ([d3cc78a](https://github.com/mozilla/fxa-auth-server/commit/d3cc78a))
- **tokens:** dont reject expired tokens, again ([e8b563e](https://github.com/mozilla/fxa-auth-server/commit/e8b563e))

### test

- **api:** rename assertRequestParam to assertInvalidRequestParam ([3f00eb3](https://github.com/mozilla/fxa-auth-server/commit/3f00eb3)), closes [#280](https://github.com/mozilla/fxa-auth-server/issues/280)
- **db:** fixing db.removeUser tests for mysql ([94f96bf](https://github.com/mozilla/fxa-auth-server/commit/94f96bf))

### BREAKING CHANGES

- [object Object]
- [object Object]
- [object Object]

<a name="1.123.3"></a>

## [1.123.3](https://github.com/mozilla/fxa-auth-server/compare/v1.123.2...v1.123.3) (2018-11-01)

### Bug Fixes

- **tests:** fix the geodb location assertions again ([90449d4](https://github.com/mozilla/fxa-auth-server/commit/90449d4))
- **tests:** remove assertions of profileChangedAt property ([565d2c8](https://github.com/mozilla/fxa-auth-server/commit/565d2c8))

### chore

- **errors:** make email-sending errors a 422 for new addresses ([17e787b](https://github.com/mozilla/fxa-auth-server/commit/17e787b))

<a name="1.123.2"></a>

## [1.123.2](https://github.com/mozilla/fxa-auth-server/compare/v1.123.1...v1.123.2) (2018-10-24)

### Bug Fixes

- **metrics:** ensure metrics context is propagated from /account/reset ([48ed7be](https://github.com/mozilla/fxa-auth-server/commit/48ed7be))

<a name="1.123.1"></a>

## [1.123.1](https://github.com/mozilla/fxa-auth-server/compare/v1.123.0...v1.123.1) (2018-10-23)

### Bug Fixes

- **metrics:** ensure email events use stashed flow data where applicable ([2168ea7](https://github.com/mozilla/fxa-auth-server/commit/2168ea7))

<a name="1.123.0"></a>

# [1.123.0](https://github.com/mozilla/fxa-auth-server/compare/v1.122.2...v1.123.0) (2018-10-16)

### Bug Fixes

- **email:** handle the new error structure from fxa-email-service ([787031f](https://github.com/mozilla/fxa-auth-server/commit/787031f))
- **email:** include data from headers in email sent events ([28a4a53](https://github.com/mozilla/fxa-auth-server/commit/28a4a53))
- **email:** throw error for failed emails during account creation ([75815f2](https://github.com/mozilla/fxa-auth-server/commit/75815f2)), closes [#2565](https://github.com/mozilla/fxa-auth-server/issues/2565)
- **emails:** expose config to append domain to verification emails ([510bf08](https://github.com/mozilla/fxa-auth-server/commit/510bf08))

### chore

- **deps:** Update commander, jsxgettext-recursive to remove security warnings. ([7185ad8](https://github.com/mozilla/fxa-auth-server/commit/7185ad8))

<a name="1.122.2"></a>

## [1.122.2](https://github.com/mozilla/fxa-auth-server/compare/v1.122.1...v1.122.2) (2018-10-04)

### Bug Fixes

- **commands:** Assign default TTL to send-tab commands ([6afb0e3](https://github.com/mozilla/fxa-auth-server/commit/6afb0e3))

<a name="1.122.1"></a>

## [1.122.1](https://github.com/mozilla/fxa-auth-server/compare/v1.122.0...v1.122.1) (2018-10-03)

### chore

- **docs:** add missing private releases to change log ([47ea091](https://github.com/mozilla/fxa-auth-server/commit/47ea091))
- **package:** npm shrinkwrap ([081f7d8](https://github.com/mozilla/fxa-auth-server/commit/081f7d8))

<a name="1.122.0"></a>

# [1.122.0](https://github.com/mozilla/fxa-auth-server/compare/v1.121.0...v1.122.0) (2018-10-02)

### Bug Fixes

- **codes:** increase token code font size in email ([28ed315](https://github.com/mozilla/fxa-auth-server/commit/28ed315))
- **customs:** increase customs timeout to 3000ms ([973815e](https://github.com/mozilla/fxa-auth-server/commit/973815e))
- **deps:** Update i18n-abide to remove `npm audit` warnings ([055788c](https://github.com/mozilla/fxa-auth-server/commit/055788c))
- **metrics:** prohibit overwriting stashed metrics context ([fafccce](https://github.com/mozilla/fxa-auth-server/commit/fafccce))
- **metrics:** stash metrics context during the account reset flow ([804907a](https://github.com/mozilla/fxa-auth-server/commit/804907a))
- **npm:** use npm ci for npm install ([3e66f67](https://github.com/mozilla/fxa-auth-server/commit/3e66f67)), closes [#2614](https://github.com/mozilla/fxa-auth-server/issues/2614)
- **profile:** add profileChangedAt to cert sign ([cca665d](https://github.com/mozilla/fxa-auth-server/commit/cca665d))
- **scripts:** make tls-shrink script portable ([721c069](https://github.com/mozilla/fxa-auth-server/commit/721c069))
- **sms:** use a five minute period on polling ([57e82a5](https://github.com/mozilla/fxa-auth-server/commit/57e82a5))
- **tests:** fetch cities db from S3 ([9d370fb](https://github.com/mozilla/fxa-auth-server/commit/9d370fb))

### chore

- **memcached:** remove the cache.set method ([2a88926](https://github.com/mozilla/fxa-auth-server/commit/2a88926))
- **package:** bump fxa-shared to 1.0.14 + npm shrinkwrap ([04bd8f2](https://github.com/mozilla/fxa-auth-server/commit/04bd8f2))
- **sms:** log JSON-serialised result if we fail to parse max spend ([f0b5d08](https://github.com/mozilla/fxa-auth-server/commit/f0b5d08))

### Features

- **scripts:** force registry links in shrinkwrap to use tls ([eae04fc](https://github.com/mozilla/fxa-auth-server/commit/eae04fc))

<a name="1.121.1"></a>

## [1.121.1](https://github.com/mozilla/fxa-auth-server/compare/v1.121.0...v1.121.1) (2018-10-02)

### Bug Fixes

- **random:** Reduce bias when generating random base-10 codes. ([65dab2b](https://github.com/mozilla/fxa-auth-server/commit/65dab2b))

<a name="1.121.0"></a>

# [1.121.0](https://github.com/mozilla/fxa-auth-server/compare/v1.120.2...v1.121.0) (2018-09-18)

### Bug Fixes

- **keys:** return proper error when failing to create duplicate recovery key ([4954b69](https://github.com/mozilla/fxa-auth-server/commit/4954b69))
- **tests:** separate remote and local test runs ([499c9fa](https://github.com/mozilla/fxa-auth-server/commit/499c9fa))

### Features

- **totp:** allow reliers to request totp on login ([fa98878](https://github.com/mozilla/fxa-auth-server/commit/fa98878))

<a name="1.120.2"></a>

## [1.120.2](https://github.com/mozilla/fxa-auth-server/compare/v1.119.6...v1.120.2) (2018-09-10)

<a name="1.120.0"></a>

# [1.120.0](https://github.com/mozilla/fxa-auth-server/compare/v1.119.3...v1.120.0) (2018-09-06)

### Bug Fixes

- **config:** update correct recoveryCodes config (#2604), r=@philbooth ([67b7053](https://github.com/mozilla/fxa-auth-server/commit/67b7053)), closes [#2604](https://github.com/mozilla/fxa-auth-server/issues/2604)
- **errors:** Surface a backendServiceFailure when connection to db fails. (#2600) r=@philboot ([2e9b9e6](https://github.com/mozilla/fxa-auth-server/commit/2e9b9e6)), closes [#2600](https://github.com/mozilla/fxa-auth-server/issues/2600) [#2599](https://github.com/mozilla/fxa-auth-server/issues/2599)
- **logging:** log errors when reading/parsing live email config ([9fe542e](https://github.com/mozilla/fxa-auth-server/commit/9fe542e))
- **mail_helper:** remove '<' from to headers in email service requests (#2595) r=@vladikoff ([87f0d61](https://github.com/mozilla/fxa-auth-server/commit/87f0d61)), closes [#2595](https://github.com/mozilla/fxa-auth-server/issues/2595) [mozilla/fxa-content-server#6470](https://github.com/mozilla/fxa-content-server/issues/6470)
- **recovery:** update to support hashing recoveryKeyId ([e9bb25c](https://github.com/mozilla/fxa-auth-server/commit/e9bb25c))
- **test:** update to latest token requirements (#2601), r=@philbooth ([000b15d](https://github.com/mozilla/fxa-auth-server/commit/000b15d)), closes [#2601](https://github.com/mozilla/fxa-auth-server/issues/2601)
- **tests:** update to mocha 5 (#2590) r=@shane-tomlinson ([e504e39](https://github.com/mozilla/fxa-auth-server/commit/e504e39)), closes [#2590](https://github.com/mozilla/fxa-auth-server/issues/2590) [#2531](https://github.com/mozilla/fxa-auth-server/issues/2531)

### chore

- **docs:** add badges for LGTM analysis and alerts ([45975d6](https://github.com/mozilla/fxa-auth-server/commit/45975d6))
- **email:** force value to boolean in account deletion check ([a00dcac](https://github.com/mozilla/fxa-auth-server/commit/a00dcac))
- **tests:** switch from insist to chai for assertions (#2608) r=@vladikoff ([1b47186](https://github.com/mozilla/fxa-auth-server/commit/1b47186)), closes [#2608](https://github.com/mozilla/fxa-auth-server/issues/2608)

<a name="1.120.1"></a>

## [1.120.1](https://github.com/mozilla/fxa-auth-server/compare/v1.121.0...v1.120.1) (2018-09-06)

<a name="1.120.0"></a>

# [1.120.0](https://github.com/mozilla/fxa-auth-server/compare/v1.119.3...v1.120.0) (2018-09-06)

### Bug Fixes

- **config:** update correct recoveryCodes config (#2604), r=@philbooth ([67b7053](https://github.com/mozilla/fxa-auth-server/commit/67b7053)), closes [#2604](https://github.com/mozilla/fxa-auth-server/issues/2604)
- **errors:** Surface a backendServiceFailure when connection to db fails. (#2600) r=@philboot ([2e9b9e6](https://github.com/mozilla/fxa-auth-server/commit/2e9b9e6)), closes [#2600](https://github.com/mozilla/fxa-auth-server/issues/2600) [#2599](https://github.com/mozilla/fxa-auth-server/issues/2599)
- **logging:** log errors when reading/parsing live email config ([9fe542e](https://github.com/mozilla/fxa-auth-server/commit/9fe542e))
- **mail_helper:** remove '<' from to headers in email service requests (#2595) r=@vladikoff ([87f0d61](https://github.com/mozilla/fxa-auth-server/commit/87f0d61)), closes [#2595](https://github.com/mozilla/fxa-auth-server/issues/2595) [mozilla/fxa-content-server#6470](https://github.com/mozilla/fxa-content-server/issues/6470)
- **recovery:** update to support hashing recoveryKeyId ([e9bb25c](https://github.com/mozilla/fxa-auth-server/commit/e9bb25c))
- **test:** update to latest token requirements (#2601), r=@philbooth ([000b15d](https://github.com/mozilla/fxa-auth-server/commit/000b15d)), closes [#2601](https://github.com/mozilla/fxa-auth-server/issues/2601)
- **tests:** update to mocha 5 (#2590) r=@shane-tomlinson ([e504e39](https://github.com/mozilla/fxa-auth-server/commit/e504e39)), closes [#2590](https://github.com/mozilla/fxa-auth-server/issues/2590) [#2531](https://github.com/mozilla/fxa-auth-server/issues/2531)

### chore

- **docs:** add badges for LGTM analysis and alerts ([45975d6](https://github.com/mozilla/fxa-auth-server/commit/45975d6))
- **email:** force value to boolean in account deletion check ([a00dcac](https://github.com/mozilla/fxa-auth-server/commit/a00dcac))
- **tests:** switch from insist to chai for assertions (#2608) r=@vladikoff ([1b47186](https://github.com/mozilla/fxa-auth-server/commit/1b47186)), closes [#2608](https://github.com/mozilla/fxa-auth-server/issues/2608)

<a name="1.120.0"></a>

# [1.120.0](https://github.com/mozilla/fxa-auth-server/compare/v1.119.3...v1.120.0) (2018-09-06)

### Bug Fixes

- **config:** update correct recoveryCodes config (#2604), r=@philbooth ([67b7053](https://github.com/mozilla/fxa-auth-server/commit/67b7053)), closes [#2604](https://github.com/mozilla/fxa-auth-server/issues/2604)
- **errors:** Surface a backendServiceFailure when connection to db fails. (#2600) r=@philboot ([2e9b9e6](https://github.com/mozilla/fxa-auth-server/commit/2e9b9e6)), closes [#2600](https://github.com/mozilla/fxa-auth-server/issues/2600) [#2599](https://github.com/mozilla/fxa-auth-server/issues/2599)
- **logging:** log errors when reading/parsing live email config ([9fe542e](https://github.com/mozilla/fxa-auth-server/commit/9fe542e))
- **mail_helper:** remove '<' from to headers in email service requests (#2595) r=@vladikoff ([87f0d61](https://github.com/mozilla/fxa-auth-server/commit/87f0d61)), closes [#2595](https://github.com/mozilla/fxa-auth-server/issues/2595) [mozilla/fxa-content-server#6470](https://github.com/mozilla/fxa-content-server/issues/6470)
- **recovery:** update to support hashing recoveryKeyId ([e9bb25c](https://github.com/mozilla/fxa-auth-server/commit/e9bb25c))
- **test:** update to latest token requirements (#2601), r=@philbooth ([000b15d](https://github.com/mozilla/fxa-auth-server/commit/000b15d)), closes [#2601](https://github.com/mozilla/fxa-auth-server/issues/2601)
- **tests:** update to mocha 5 (#2590) r=@shane-tomlinson ([e504e39](https://github.com/mozilla/fxa-auth-server/commit/e504e39)), closes [#2590](https://github.com/mozilla/fxa-auth-server/issues/2590) [#2531](https://github.com/mozilla/fxa-auth-server/issues/2531)

### chore

- **docs:** add badges for LGTM analysis and alerts ([45975d6](https://github.com/mozilla/fxa-auth-server/commit/45975d6))
- **email:** force value to boolean in account deletion check ([a00dcac](https://github.com/mozilla/fxa-auth-server/commit/a00dcac))
- **tests:** switch from insist to chai for assertions (#2608) r=@vladikoff ([1b47186](https://github.com/mozilla/fxa-auth-server/commit/1b47186)), closes [#2608](https://github.com/mozilla/fxa-auth-server/issues/2608)

<a name="1.119.6"></a>

## [1.119.6](https://github.com/mozilla/fxa-auth-server/compare/v1.119.5...v1.119.6) (2018-09-07)

### Bug Fixes

- **tests:** comment out flaky tests ([c505991](https://github.com/mozilla/fxa-auth-server/commit/c505991))
- **tests:** comment out flaky tests ([c50acaf](https://github.com/mozilla/fxa-auth-server/commit/c50acaf))
- **validation:** allow https pushCallback URLs that contain :443 ([e41522f](https://github.com/mozilla/fxa-auth-server/commit/e41522f))

<a name="1.119.5"></a>

## [1.119.5](https://github.com/mozilla/fxa-auth-server/compare/v1.119.4...v1.119.5) (2018-09-07)

### Bug Fixes

- **deps:** Pin auth-db-mysql dependency for train-119 ([3c09697](https://github.com/mozilla/fxa-auth-server/commit/3c09697))

<a name="1.119.4"></a>

## [1.119.4](https://github.com/mozilla/fxa-auth-server/compare/v1.119.3...v1.119.4) (2018-09-06)

- **push:** support port numbers in push urls ([8a9859f](https://github.com/mozilla/fxa-auth-server/commit/8a9859f))
- **tests:** add port test ([f258387](https://github.com/mozilla/fxa-auth-server/commit/f258387))
- **tests:** adjust geodb city for now ([fd751b2](https://github.com/mozilla/fxa-auth-server/commit/fd751b2))

<a name="1.119.3"></a>

## [1.119.3](https://github.com/mozilla/fxa-auth-server/compare/v1.119.1...v1.119.3) (2018-08-23)

### Bug Fixes

- **mysql:** fix pushbox mysql (#2597) r=@philbooth ([cd5b5cd](https://github.com/mozilla/fxa-auth-server/commit/cd5b5cd)), closes [#2597](https://github.com/mozilla/fxa-auth-server/issues/2597)

<a name="1.119.2"></a>

## [1.119.2](https://github.com/mozilla/fxa-auth-server/compare/v1.119.1...v1.119.2) (2018-08-23)

### Bug Fixes

- **devices:** Add feature-flag for the "device commands" functionality. (#2591) r=@vladikoff ([85889ee](https://github.com/mozilla/fxa-auth-server/commit/85889ee)), closes [#2591](https://github.com/mozilla/fxa-auth-server/issues/2591)
- **npm:** new shrinkwrap

<a name="1.119.1"></a>

## [1.119.1](https://github.com/mozilla/fxa-auth-server/compare/v1.119.0...v1.119.1) (2018-08-21)

### Bug Fixes

- **devices:** disable cached devices in account destroy (#2588) r=@philbooth ([326881b](https://github.com/mozilla/fxa-auth-server/commit/326881b)), closes [#2588](https://github.com/mozilla/fxa-auth-server/issues/2588)

<a name="1.119.0"></a>

# [1.119.0](https://github.com/mozilla/fxa-auth-server/compare/v1.117.1...v1.119.0) (2018-08-21)

### Bug Fixes

- **devices:** check token.deviceAvailableCommands before dereferencing ([eedf321](https://github.com/mozilla/fxa-auth-server/commit/eedf321))
- **devices:** treat matching device commands as spurious updates ([71f8c18](https://github.com/mozilla/fxa-auth-server/commit/71f8c18))
- **devices:** used cached devices property during requests ([3015a40](https://github.com/mozilla/fxa-auth-server/commit/3015a40))
- **email:** ensure email-service errors fail the call to sendMail ([bdc7c7a](https://github.com/mozilla/fxa-auth-server/commit/bdc7c7a))
- **email:** JSON.parse live email config after reading from redis ([dd262a9](https://github.com/mozilla/fxa-auth-server/commit/dd262a9))
- **redis:** Close the redis pool when closing the DB. ([855d681](https://github.com/mozilla/fxa-auth-server/commit/855d681))
- **redis:** recover from invalid token JSON in Redis ([db8022f](https://github.com/mozilla/fxa-auth-server/commit/db8022f))
- **reset:** update must-verify script to use string instead of buffer (#2551) r=@vladikoff ([2a2eeab](https://github.com/mozilla/fxa-auth-server/commit/2a2eeab)), closes [#2551](https://github.com/mozilla/fxa-auth-server/issues/2551)
- **scripts:** fix the broken api docs generator script ([fedaa23](https://github.com/mozilla/fxa-auth-server/commit/fedaa23)), closes [#2521](https://github.com/mozilla/fxa-auth-server/issues/2521)
- **scripts:** improve regex validation for email-config script ([14694e4](https://github.com/mozilla/fxa-auth-server/commit/14694e4))
- **scripts:** stop email-config script logging config to stdout ([807e4ac](https://github.com/mozilla/fxa-auth-server/commit/807e4ac))
- **sentry:** server.events.on takes channels, not channel ([7d69830](https://github.com/mozilla/fxa-auth-server/commit/7d69830))
- **server:** do not return customs.flag in the destroy route (#2573) ([4998f2b](https://github.com/mozilla/fxa-auth-server/commit/4998f2b)), closes [#2573](https://github.com/mozilla/fxa-auth-server/issues/2573) [#2563](https://github.com/mozilla/fxa-auth-server/issues/2563)
- **sessionTokens:** actually prune expired session tokens ([72809f8](https://github.com/mozilla/fxa-auth-server/commit/72809f8))
- **test:** increase totp code window (#2548), r=@vladikoff ([fecc9e3](https://github.com/mozilla/fxa-auth-server/commit/fecc9e3)), closes [#2548](https://github.com/mozilla/fxa-auth-server/issues/2548)
- **test:** set default test timeout to 5000 (#2560), r=@philbooth ([5caedf3](https://github.com/mozilla/fxa-auth-server/commit/5caedf3)), closes [#2560](https://github.com/mozilla/fxa-auth-server/issues/2560)
- **tests:** add a check from sentry setup ([7f60f8c](https://github.com/mozilla/fxa-auth-server/commit/7f60f8c))
- **tests:** adjust async tests ([9e20e69](https://github.com/mozilla/fxa-auth-server/commit/9e20e69))
- **tests:** increase timeout on selectEmailService integration tests ([cd5f341](https://github.com/mozilla/fxa-auth-server/commit/cd5f341))
- **tests:** temporarily disable deviceCommands assertions ([08f5ee9](https://github.com/mozilla/fxa-auth-server/commit/08f5ee9))
- **validation:** don't treat `+-\/` as a character range in email regex ([cfb9704](https://github.com/mozilla/fxa-auth-server/commit/cfb9704))
- **validation:** validate length of user and domain email address parts ([a872363](https://github.com/mozilla/fxa-auth-server/commit/a872363)), closes [#2568](https://github.com/mozilla/fxa-auth-server/issues/2568)

### chore

- **install:** Only clone the l10n repo if needed. (#2546) r=@vladikoff ([0e91f45](https://github.com/mozilla/fxa-auth-server/commit/0e91f45)), closes [#2546](https://github.com/mozilla/fxa-auth-server/issues/2546)
- **package:** update shrinkwrap ([842aae4](https://github.com/mozilla/fxa-auth-server/commit/842aae4))
- **tests:** add tests to email_service.js ([abfb6be](https://github.com/mozilla/fxa-auth-server/commit/abfb6be))

### Features

- **admin:** Add an admin script to delete an account. ([2074d56](https://github.com/mozilla/fxa-auth-server/commit/2074d56))
- **ci:** update to circle 2 (#2529), r=@vbudhram ([395a02e](https://github.com/mozilla/fxa-auth-server/commit/395a02e)), closes [#2529](https://github.com/mozilla/fxa-auth-server/issues/2529)
- **codes:** expose verificationMethod as optional (#2564), r=@philbooth ([fb256ff](https://github.com/mozilla/fxa-auth-server/commit/fb256ff)), closes [#2564](https://github.com/mozilla/fxa-auth-server/issues/2564)
- **email:** change the email service errno values to numbers ([577237d](https://github.com/mozilla/fxa-auth-server/commit/577237d)), closes [#2569](https://github.com/mozilla/fxa-auth-server/issues/2569)
- **email:** read live email-sending config from redis ([bc55e8b](https://github.com/mozilla/fxa-auth-server/commit/bc55e8b))
- **email:** write live email-sending config to redis ([c6ad402](https://github.com/mozilla/fxa-auth-server/commit/c6ad402))
- **pushbox:** activate pushbox in dev environments (#2567) r=@vladikoff ([03e1e6e](https://github.com/mozilla/fxa-auth-server/commit/03e1e6e)), closes [#2567](https://github.com/mozilla/fxa-auth-server/issues/2567) [mozilla/fxa-local-dev#122](https://github.com/mozilla/fxa-local-dev/issues/122)
- **recovery:** add account recovery email templates (#2553), r=philbooth ([8f36f62](https://github.com/mozilla/fxa-auth-server/commit/8f36f62)), closes [#2553](https://github.com/mozilla/fxa-auth-server/issues/2553)
- **scripts:** validate inputs in the email-config script ([122ce3b](https://github.com/mozilla/fxa-auth-server/commit/122ce3b))
- **tests:** write unit tests for email address validation ([eaf3615](https://github.com/mozilla/fxa-auth-server/commit/eaf3615))

### Refactor

- **devices:** extract and write tests for devices.isSpuriousUpdate ([bebee79](https://github.com/mozilla/fxa-auth-server/commit/bebee79))
- **devices:** shortcut redundant tests for spurious device updates ([0bce944](https://github.com/mozilla/fxa-auth-server/commit/0bce944))
- **validation:** simplify the validation logic for email addresses ([8dee2e8](https://github.com/mozilla/fxa-auth-server/commit/8dee2e8))

<a name="1.118.0"></a>

# [1.118.0](https://github.com/mozilla/fxa-auth-server/compare/v1.117.1...v1.118.0) (2018-08-08)

### Bug Fixes

- **email:** ensure email-service errors fail the call to sendMail ([bdc7c7a](https://github.com/mozilla/fxa-auth-server/commit/bdc7c7a))
- **redis:** Close the redis pool when closing the DB. ([855d681](https://github.com/mozilla/fxa-auth-server/commit/855d681))
- **redis:** recover from invalid token JSON in Redis ([db8022f](https://github.com/mozilla/fxa-auth-server/commit/db8022f))
- **reset:** update must-verify script to use string instead of buffer (#2551) r=@vladikoff ([2a2eeab](https://github.com/mozilla/fxa-auth-server/commit/2a2eeab)), closes [#2551](https://github.com/mozilla/fxa-auth-server/issues/2551)
- **sentry:** server.events.on takes channels, not channel ([7d69830](https://github.com/mozilla/fxa-auth-server/commit/7d69830))
- **sessionTokens:** actually prune expired session tokens ([72809f8](https://github.com/mozilla/fxa-auth-server/commit/72809f8))
- **test:** increase totp code window (#2548), r=@vladikoff ([fecc9e3](https://github.com/mozilla/fxa-auth-server/commit/fecc9e3)), closes [#2548](https://github.com/mozilla/fxa-auth-server/issues/2548)
- **test:** set default test timeout to 5000 (#2560), r=@philbooth ([5caedf3](https://github.com/mozilla/fxa-auth-server/commit/5caedf3)), closes [#2560](https://github.com/mozilla/fxa-auth-server/issues/2560)
- **tests:** add a check from sentry setup ([7f60f8c](https://github.com/mozilla/fxa-auth-server/commit/7f60f8c))

### chore

- **install:** Only clone the l10n repo if needed. (#2546) r=@vladikoff ([0e91f45](https://github.com/mozilla/fxa-auth-server/commit/0e91f45)), closes [#2546](https://github.com/mozilla/fxa-auth-server/issues/2546)
- **tests:** add tests to email_service.js ([abfb6be](https://github.com/mozilla/fxa-auth-server/commit/abfb6be))

### Features

- **admin:** Add an admin script to delete an account. ([2074d56](https://github.com/mozilla/fxa-auth-server/commit/2074d56))
- **ci:** update to circle 2 (#2529), r=@vbudhram ([395a02e](https://github.com/mozilla/fxa-auth-server/commit/395a02e)), closes [#2529](https://github.com/mozilla/fxa-auth-server/issues/2529)
- **codes:** expose verificationMethod as optional (#2564), r=@philbooth ([fb256ff](https://github.com/mozilla/fxa-auth-server/commit/fb256ff)), closes [#2564](https://github.com/mozilla/fxa-auth-server/issues/2564)
- **email:** read live email-sending config from redis ([bc55e8b](https://github.com/mozilla/fxa-auth-server/commit/bc55e8b))
- **recovery:** add account recovery email templates (#2553), r=philbooth ([8f36f62](https://github.com/mozilla/fxa-auth-server/commit/8f36f62)), closes [#2553](https://github.com/mozilla/fxa-auth-server/issues/2553)

<a name="1.117.2"></a>

## [1.117.2](https://github.com/mozilla/fxa-auth-server/compare/v1.117.1...v1.117.2) (2018-08-01)

### Bug Fixes

- **sentry:** server.events.on takes channels, not channel ([5bc7b87](https://github.com/mozilla/fxa-auth-server/commit/5bc7b87))

<a name="1.117.1"></a>

## [1.117.1](https://github.com/mozilla/fxa-auth-server/compare/v1.117.0...v1.117.1) (2018-07-26)

### Bug Fixes

- **hapi:** use the new server event error handler (#2543) r=@rfk ([2d52887](https://github.com/mozilla/fxa-auth-server/commit/2d52887)), closes [#2543](https://github.com/mozilla/fxa-auth-server/issues/2543) [#2542](https://github.com/mozilla/fxa-auth-server/issues/2542) [hapijs/hapi#3658](https://github.com/hapijs/hapi/issues/3658)

<a name="1.117.0"></a>

# [1.117.0](https://github.com/mozilla/fxa-auth-server/compare/v1.116.1...v1.117.0) (2018-07-24)

### Bug Fixes

- **email:** make config.sesConfigurationSet default the empty string ([35ac5f0](https://github.com/mozilla/fxa-auth-server/commit/35ac5f0))
- **package:** fixes for npm security audit ([2bfa482](https://github.com/mozilla/fxa-auth-server/commit/2bfa482))
- **push:** send FxA commands push messages to iOS devices (#2517) r=@vladikoff,@eoger ([c020798](https://github.com/mozilla/fxa-auth-server/commit/c020798)), closes [#2517](https://github.com/mozilla/fxa-auth-server/issues/2517)

### chore

- **browserid:** Remove unnecessary browserid routes. (#2539); r=philbooth,stomlinson ([a1e64dd](https://github.com/mozilla/fxa-auth-server/commit/a1e64dd)), closes [#2539](https://github.com/mozilla/fxa-auth-server/issues/2539)
- **emails:** log smtp port in mail_helper.js (#2519) ([6dbf15a](https://github.com/mozilla/fxa-auth-server/commit/6dbf15a)), closes [#2519](https://github.com/mozilla/fxa-auth-server/issues/2519)

### Features

- **email:** add a service property to the X-SES-MESSAGE-TAGS header ([b6908b9](https://github.com/mozilla/fxa-auth-server/commit/b6908b9))
- **recovery:** update delete recovery key and get recovery key endpoints (#2518), r=@rfk ([4d109a0](https://github.com/mozilla/fxa-auth-server/commit/4d109a0)), closes [#2518](https://github.com/mozilla/fxa-auth-server/issues/2518)
- **scopes:** Use shared code lib for checking OAuth scopes. (#2501); r=vbudhram,shane-tomlins ([59de0ae](https://github.com/mozilla/fxa-auth-server/commit/59de0ae)), closes [#2501](https://github.com/mozilla/fxa-auth-server/issues/2501)
- **server:** Update to hapi 17 (#2486) r=@vbudhram,@philbooth ([63738c8](https://github.com/mozilla/fxa-auth-server/commit/63738c8)), closes [#2486](https://github.com/mozilla/fxa-auth-server/issues/2486) [#2438](https://github.com/mozilla/fxa-auth-server/issues/2438)

<a name="1.116.1"></a>

## [1.116.1](https://github.com/mozilla/fxa-auth-server/compare/v1.116.0...v1.116.1) (2018-07-16)

### Bug Fixes

- **email:** fix broken X-SES-CONFIGURATION-SET header (#2523) r=@vladikoff ([a3c994f](https://github.com/mozilla/fxa-auth-server/commit/a3c994f)), closes [#2523](https://github.com/mozilla/fxa-auth-server/issues/2523)

<a name="1.116.0"></a>

# [1.116.0](https://github.com/mozilla/fxa-auth-server/compare/v1.115.1...v1.116.0) (2018-07-11)

### Bug Fixes

- **customs:** Fail closed if customs-server gives an error. (#2483) r=@vladikoff,@shane-tomlin ([acef9ef](https://github.com/mozilla/fxa-auth-server/commit/acef9ef)), closes [#2483](https://github.com/mozilla/fxa-auth-server/issues/2483)
- **email:** gracefully handle errors from fxa-email-service (#2510) r=@vladikoff ([d46526f](https://github.com/mozilla/fxa-auth-server/commit/d46526f)), closes [#2510](https://github.com/mozilla/fxa-auth-server/issues/2510) [#2509](https://github.com/mozilla/fxa-auth-server/issues/2509)
- **metrics:** don't force utm_source=email on links in emails ([e47b710](https://github.com/mozilla/fxa-auth-server/commit/e47b710))

### Features

- **email:** use fxa-email-server for specific email addresses ([4b5bd9a](https://github.com/mozilla/fxa-auth-server/commit/4b5bd9a))
- **metrics:** add amplitude event properties for email service/sender ([55b3290](https://github.com/mozilla/fxa-auth-server/commit/55b3290))

<a name="1.115.1"></a>

## [1.115.1](https://github.com/mozilla/fxa-auth-server/compare/v1.115.0...v1.115.1) (2018-06-28)

### Bug Fixes

- **devices:** Fix race between real and placeholder device registration. (#2492); r=philbooth ([4c0bab6](https://github.com/mozilla/fxa-auth-server/commit/4c0bab6)), closes [#2492](https://github.com/mozilla/fxa-auth-server/issues/2492)

<a name="1.115.0"></a>

# [1.115.0](https://github.com/mozilla/fxa-auth-server/compare/v1.114.2...v1.115.0) (2018-06-27)

### Features

- **devices:** Introduce infrastructure for "device commands". (#2449); r=philbooth,eoger ([f359006](https://github.com/mozilla/fxa-auth-server/commit/f359006)), closes [#2449](https://github.com/mozilla/fxa-auth-server/issues/2449)
- **recovery:** account recovery apis (#2463), r=@rfk ([ba27d41](https://github.com/mozilla/fxa-auth-server/commit/ba27d41)), closes [#2463](https://github.com/mozilla/fxa-auth-server/issues/2463)

<a name="1.114.3"></a>

## [1.114.3](https://github.com/mozilla/fxa-auth-server/compare/v1.114.2...v1.114.3) (2018-06-21)

### Bug Fixes

- **recovery-codes:** Correctly rate-limit recovery code consumption. ([e6b3043](https://github.com/mozilla/fxa-auth-server/commit/e6b3043))

### chore

- **release:** Reverse merge train-114 into master (#2475) r=@vbudhram ([177fa46](https://github.com/mozilla/fxa-auth-server/commit/177fa46)), closes [#2475](https://github.com/mozilla/fxa-auth-server/issues/2475)

<a name="1.114.2"></a>

## [1.114.2](https://github.com/mozilla/fxa-auth-server/compare/v1.114.1...v1.114.2) (2018-06-19)

### Bug Fixes

- **devices:** Do not echo 'capabilities' field in device registration response. (#2478); r=jrg ([9bbc715](https://github.com/mozilla/fxa-auth-server/commit/9bbc715)), closes [#2478](https://github.com/mozilla/fxa-auth-server/issues/2478)

<a name="1.114.1"></a>

## [1.114.1](https://github.com/mozilla/fxa-auth-server/compare/v1.114.0...v1.114.1) (2018-06-14)

### Bug Fixes

- **l10n:** Enable nb-NO locale by updating fxa-shared (#2474) r=@philbooth,@vladikoff ([3a60d05](https://github.com/mozilla/fxa-auth-server/commit/3a60d05)), closes [#2474](https://github.com/mozilla/fxa-auth-server/issues/2474)

<a name="1.114.0"></a>

# [1.114.0](https://github.com/mozilla/fxa-auth-server/compare/v1.113.3...v1.114.0) (2018-06-13)

### Bug Fixes

- **devices:** Remove the unused "device capabilities" API. (#2460); r=eoger ([9e53247](https://github.com/mozilla/fxa-auth-server/commit/9e53247)), closes [#2460](https://github.com/mozilla/fxa-auth-server/issues/2460)
- **docker:** base image node:8-alpine and upgrade to npm6 (#2470) r=@jbuck ([e990d39](https://github.com/mozilla/fxa-auth-server/commit/e990d39)), closes [#2470](https://github.com/mozilla/fxa-auth-server/issues/2470)

### chore

- **merge:** Reverse merge v1.113.5-private into origin/master (#2472) r=@vbudhram ([be7e6f1](https://github.com/mozilla/fxa-auth-server/commit/be7e6f1)), closes [#2472](https://github.com/mozilla/fxa-auth-server/issues/2472)

<a name="1.113.5"></a>

## [1.113.5](https://github.com/mozilla/fxa-auth-server/compare/v1.113.4-private...v1.113.5) (2018-06-08)

### Bug Fixes

- **2FA:** enforce 2FA on /reauth (#75) r=@rfk,@vbudhram ([181a7ec](https://github.com/mozilla/fxa-auth-server/commit/181a7ec)), closes [#75](https://github.com/mozilla/fxa-auth-server/issues/75) [#76](https://github.com/mozilla/fxa-auth-server/issues/76)

<a name="1.113.4"></a>

## [1.113.4](https://github.com/mozilla/fxa-auth-server/compare/v1.113.3...v1.113.4-private) (2018-06-07)

### Bug Fixes

- **signing:** Don't let mustVerify sessions sign a certificate if unverified. ([706541a](https://github.com/mozilla/fxa-auth-server/commit/706541a))

<a name="1.113.3"></a>

## [1.113.3](https://github.com/mozilla/fxa-auth-server/compare/v1.113.2...v1.113.3) (2018-05-31)

### Bug Fixes

- **deps:** Really use v1.113.1 of auth-db-mysql (#2461); r=jrgm ([2f2c00c](https://github.com/mozilla/fxa-auth-server/commit/2f2c00c)), closes [#2461](https://github.com/mozilla/fxa-auth-server/issues/2461)

<a name="1.113.2"></a>

## [1.113.2](https://github.com/mozilla/fxa-auth-server/compare/v1.113.1...v1.113.2) (2018-05-31)

<a name="1.113.1"></a>

## [1.113.1](https://github.com/mozilla/fxa-auth-server/compare/v1.113.0...v1.113.1) (2018-05-30)

### Bug Fixes

- **deps:** Use v1.113.1 of auth-db-mysql ([f8ca91c](https://github.com/mozilla/fxa-auth-server/commit/f8ca91c))

<a name="1.113.0"></a>

# [1.113.0](https://github.com/mozilla/fxa-auth-server/compare/v1.112.1...v1.113.0) (2018-05-30)

### Bug Fixes

- **deps:** Update fxa-geodb version, remove nexmo (#2446) r=@philbooth ([44e9dac](https://github.com/mozilla/fxa-auth-server/commit/44e9dac)), closes [#2446](https://github.com/mozilla/fxa-auth-server/issues/2446)
- **params:** remove query param for verificationMethod (#2456) r=@vladikoff ([dc1bb44](https://github.com/mozilla/fxa-auth-server/commit/dc1bb44)), closes [#2456](https://github.com/mozilla/fxa-auth-server/issues/2456)
- **sms:** follow documented conventions for AWS GetMetricStatistics call ([95c3364](https://github.com/mozilla/fxa-auth-server/commit/95c3364))

### chore

- **ci:** Remove coveralls from travis config. (#2452) ([aedd180](https://github.com/mozilla/fxa-auth-server/commit/aedd180)), closes [#2452](https://github.com/mozilla/fxa-auth-server/issues/2452)
- **devices:** Remove notifyUpdate and filter target devices in the /devices/notify handler ([a9c6e0e](https://github.com/mozilla/fxa-auth-server/commit/a9c6e0e))

### Features

- **pool:** Allow pool requests to specify headers and query params. ([1f63621](https://github.com/mozilla/fxa-auth-server/commit/1f63621))

### Refactor

- **metrics:** move amplitude email types back here from fxa-shared ([c2767f5](https://github.com/mozilla/fxa-auth-server/commit/c2767f5))

<a name="1.112.1"></a>

## [1.112.1](https://github.com/mozilla/fxa-auth-server/compare/v1.112.0...v1.112.1) (2018-05-17)

### Bug Fixes

- **docs:** fix devices validation output of the doc generator (#2440) r=@vladikoff ([957c760](https://github.com/mozilla/fxa-auth-server/commit/957c760)), closes [#2440](https://github.com/mozilla/fxa-auth-server/issues/2440) [#2434](https://github.com/mozilla/fxa-auth-server/issues/2434)
- **nsp:** fix nsp warnings ([2b663dd](https://github.com/mozilla/fxa-auth-server/commit/2b663dd))

<a name="1.112.0"></a>

# [1.112.0](https://github.com/mozilla/fxa-auth-server/compare/v1.111.1...v1.112.0) (2018-05-16)

### Bug Fixes

- **deps:** update shrink (#2431) r=@vladikoff ([291713a](https://github.com/mozilla/fxa-auth-server/commit/291713a)), closes [#2431](https://github.com/mozilla/fxa-auth-server/issues/2431)
- **logging:** log successful sms budget checks ([9731a08](https://github.com/mozilla/fxa-auth-server/commit/9731a08))
- **metrics:** don't emit route flow events for 404s ([f8bbfff](https://github.com/mozilla/fxa-auth-server/commit/f8bbfff))
- **newrelic:** update newrelic module (#2424) r=@vladikoff ([690ba82](https://github.com/mozilla/fxa-auth-server/commit/690ba82)), closes [#2424](https://github.com/mozilla/fxa-auth-server/issues/2424)
- **nsp:** update nsp for constantinople (#2430), r=@philbooth ([57118d6](https://github.com/mozilla/fxa-auth-server/commit/57118d6)), closes [#2430](https://github.com/mozilla/fxa-auth-server/issues/2430)
- **password:** require totp verified session to change password (#2437), r=@rfk ([ab05574](https://github.com/mozilla/fxa-auth-server/commit/ab05574)), closes [#2437](https://github.com/mozilla/fxa-auth-server/issues/2437)

### chore

- **logging:** downgrade location translation error to warning ([6b58bf9](https://github.com/mozilla/fxa-auth-server/commit/6b58bf9))

### Features

- **emails:** notify users when they are running low on recovery codes (#2429), r=@shane-tomli ([a9c8aca](https://github.com/mozilla/fxa-auth-server/commit/a9c8aca)), closes [#2429](https://github.com/mozilla/fxa-auth-server/issues/2429)

<a name="1.111.1"></a>

## [1.111.1](https://github.com/mozilla/fxa-auth-server/compare/v1.111.0...v1.111.1) (2018-05-04)

### Bug Fixes

- **metrics:** remove old flow signature fallback code ([4fc70a0](https://github.com/mozilla/fxa-auth-server/commit/4fc70a0))

<a name="1.111.0"></a>

# [1.111.0](https://github.com/mozilla/fxa-auth-server/compare/v1.110.1...v1.111.0) (2018-05-02)

### Bug Fixes

- **docs:** add missing closing code-quote ([0204096](https://github.com/mozilla/fxa-auth-server/commit/0204096))
- **scripts:** Remove obsolete `bufferize` call from must-reset script. (#2414); r=philbooth,st ([56b00e3](https://github.com/mozilla/fxa-auth-server/commit/56b00e3)), closes [#2414](https://github.com/mozilla/fxa-auth-server/issues/2414)
- **totp:** check totp before account deletion (#2405), r=@philbooth ([7793de3](https://github.com/mozilla/fxa-auth-server/commit/7793de3)), closes [#2405](https://github.com/mozilla/fxa-auth-server/issues/2405)

### chore

- **config:** update redirect domain for dev.json (#2403) r=@vladikoff ([4ce2726](https://github.com/mozilla/fxa-auth-server/commit/4ce2726)), closes [#2403](https://github.com/mozilla/fxa-auth-server/issues/2403)
- **deps:** Update web-push to latest release. (#2407) r=@vladikoff ([9ed5a33](https://github.com/mozilla/fxa-auth-server/commit/9ed5a33)), closes [#2407](https://github.com/mozilla/fxa-auth-server/issues/2407)

### Features

- **emails:** add email to all manage account email links (#2392), r=@philbooth, @shane-tomlin ([308d7ff](https://github.com/mozilla/fxa-auth-server/commit/308d7ff)), closes [#2392](https://github.com/mozilla/fxa-auth-server/issues/2392)
- **node:** update to node 8 (#2404) r=@jrgm ([b43fd28](https://github.com/mozilla/fxa-auth-server/commit/b43fd28)), closes [#2404](https://github.com/mozilla/fxa-auth-server/issues/2404)
- **notifications:** Add SNS msg attributes for service notification filtering (#2412); r=philbooth ([0cf1bc4](https://github.com/mozilla/fxa-auth-server/commit/0cf1bc4)), closes [#2412](https://github.com/mozilla/fxa-auth-server/issues/2412)
- **sms:** query the available budget in /sms/status ([7aedef2](https://github.com/mozilla/fxa-auth-server/commit/7aedef2))

<a name="1.110.1"></a>

## [1.110.1](https://github.com/mozilla/fxa-auth-server/compare/v1.110.0...v1.110.1) (2018-04-19)

### Refactor

- **email:** remove email parameter from config (#2400) r=@vladikoff,@rfk ([4a021c6](https://github.com/mozilla/fxa-auth-server/commit/4a021c6)), closes [#2400](https://github.com/mozilla/fxa-auth-server/issues/2400)

<a name="1.110.0"></a>

# [1.110.0](https://github.com/mozilla/fxa-auth-server/compare/v1.109.0...v1.110.0) (2018-04-18)

### Bug Fixes

- **devices:** Rename pushbox capability to messages in tests (#2389) r=@rfk ([9462e34](https://github.com/mozilla/fxa-auth-server/commit/9462e34)), closes [#2389](https://github.com/mozilla/fxa-auth-server/issues/2389)
- **docs:** remove old/misleading information about the locale property (#2382) r=@vladikoff ([098f990](https://github.com/mozilla/fxa-auth-server/commit/098f990)), closes [#2382](https://github.com/mozilla/fxa-auth-server/issues/2382)
- **email:** only send new sign-in emails for sync when verifying with totp (#2381), r=@philb ([35da0bd](https://github.com/mozilla/fxa-auth-server/commit/35da0bd)), closes [#2381](https://github.com/mozilla/fxa-auth-server/issues/2381)
- **metrics:** stop using user-agent string in flow id check ([445cf30](https://github.com/mozilla/fxa-auth-server/commit/445cf30))
- **recovery:** set assuranceLevel when verifying with recovery code (#2388), r=@rfk ([b830707](https://github.com/mozilla/fxa-auth-server/commit/b830707)), closes [#2388](https://github.com/mozilla/fxa-auth-server/issues/2388)
- **recovery:** update to latest recovery code requirements (#2397), r=@philbooth ([ed3d99e](https://github.com/mozilla/fxa-auth-server/commit/ed3d99e)), closes [#2397](https://github.com/mozilla/fxa-auth-server/issues/2397)
- **totp:** Change 2FA removed email title to `Two-step authentication disabled` (#2396) r=@ ([5128fd8](https://github.com/mozilla/fxa-auth-server/commit/5128fd8)), closes [#2396](https://github.com/mozilla/fxa-auth-server/issues/2396) [mozilla/fxa-content-server#6073](https://github.com/mozilla/fxa-content-server/issues/6073)

### chore

- **logging:** use a less confusing op on flow event errors ([778fc33](https://github.com/mozilla/fxa-auth-server/commit/778fc33))
- **tests:** remove duplicate mocking code ([25f2404](https://github.com/mozilla/fxa-auth-server/commit/25f2404)), closes [#2383](https://github.com/mozilla/fxa-auth-server/issues/2383)

### Features

- **docs:** Add documentation for "attached service" notification events. (#2362); r=vladiko ([766fb16](https://github.com/mozilla/fxa-auth-server/commit/766fb16)), closes [#2362](https://github.com/mozilla/fxa-auth-server/issues/2362)
- **profile:** Send "profileDataChanged" event when modifying 2FA status. (#2390); r=vbudhram ([19162ff](https://github.com/mozilla/fxa-auth-server/commit/19162ff)), closes [#2390](https://github.com/mozilla/fxa-auth-server/issues/2390)
- **totp:** rate limit totp verify actions (#2386), r=@rfk ([4a89201](https://github.com/mozilla/fxa-auth-server/commit/4a89201)), closes [#2386](https://github.com/mozilla/fxa-auth-server/issues/2386)

### Refactor

- **metrics:** use boiler-plate amplitude code from fxa-shared ([a6069e0](https://github.com/mozilla/fxa-auth-server/commit/a6069e0))

<a name="1.109.0"></a>

# [1.109.0](https://github.com/mozilla/fxa-auth-server/compare/v1.107.4...v1.109.0) (2018-04-04)

### Bug Fixes

- **metrics:** count 28 days per metric month ([e327e4f](https://github.com/mozilla/fxa-auth-server/commit/e327e4f))
- **metrics:** emit route flow events from more endpoints ([35544c7](https://github.com/mozilla/fxa-auth-server/commit/35544c7))
- **metrics:** include full version information in event data (#2356) ([85da7f2](https://github.com/mozilla/fxa-auth-server/commit/85da7f2)), closes [#2356](https://github.com/mozilla/fxa-auth-server/issues/2356) [mozilla/fxa-amplitude-send#58](https://github.com/mozilla/fxa-amplitude-send/issues/58)
- **metrics:** pass metricsContext to consumeRecoveryCode (#2367) r=@vladikoff ([6e0b56c](https://github.com/mozilla/fxa-auth-server/commit/6e0b56c)), closes [#2367](https://github.com/mozilla/fxa-auth-server/issues/2367)
- **node:** Use Node.js v6.14.0 (#2374) ([632dc35](https://github.com/mozilla/fxa-auth-server/commit/632dc35)), closes [#2374](https://github.com/mozilla/fxa-auth-server/issues/2374)
- **server:** validate ip addresses before setting them on request object ([b181738](https://github.com/mozilla/fxa-auth-server/commit/b181738))
- **sessions:** only return major rev for browser version (#2363) r=@vladikoff ([be6cc00](https://github.com/mozilla/fxa-auth-server/commit/be6cc00)), closes [#2363](https://github.com/mozilla/fxa-auth-server/issues/2363)
- **totp:** add totp code window validation config (#2371), r=@vladikoff ([110190d](https://github.com/mozilla/fxa-auth-server/commit/110190d)), closes [#2371](https://github.com/mozilla/fxa-auth-server/issues/2371)
- **totp:** ensure correct session verification state before deleting totp (#2365), r=@rfk ([0b1d075](https://github.com/mozilla/fxa-auth-server/commit/0b1d075)), closes [#2365](https://github.com/mozilla/fxa-auth-server/issues/2365)
- **totp:** throw unverified session in promise chain (#2364), r=@rfk ([575b899](https://github.com/mozilla/fxa-auth-server/commit/575b899)), closes [#2364](https://github.com/mozilla/fxa-auth-server/issues/2364)
- **validation:** Reject URLs with unexpected characters. (#2370); r=pb ([10e934f](https://github.com/mozilla/fxa-auth-server/commit/10e934f)), closes [#2370](https://github.com/mozilla/fxa-auth-server/issues/2370)

### chore

- **db:** prevent the possibility of future url-injection bugs ([fd26a4a](https://github.com/mozilla/fxa-auth-server/commit/fd26a4a))
- **deps:** upgrade joi to 12.0.0 (#2358) ([5040060](https://github.com/mozilla/fxa-auth-server/commit/5040060)), closes [#2358](https://github.com/mozilla/fxa-auth-server/issues/2358)
- **emails:** use popular email domain list from fxa-shared ([d3eeab1](https://github.com/mozilla/fxa-auth-server/commit/d3eeab1))

### Features

- **metrics:** add user properties for active device counts ([a23eeaa](https://github.com/mozilla/fxa-auth-server/commit/a23eeaa)), closes [mozilla/fxa-amplitude-send#60](https://github.com/mozilla/fxa-amplitude-send/issues/60)
- **totp:** initial recovery codes (#2349), r=@philbooth ([81700da](https://github.com/mozilla/fxa-auth-server/commit/81700da)), closes [#2349](https://github.com/mozilla/fxa-auth-server/issues/2349)

<a name="1.108.0"></a>

# [1.108.0](https://github.com/mozilla/fxa-auth-server/compare/v1.107.3-private...v1.108.0) (2018-03-21)

### Bug Fixes

- **buffers:** migrate from 'Buffer()' constructor calls r=@vladikoff ([4815505](https://github.com/mozilla/fxa-auth-server/commit/4815505)), closes [#2333](https://github.com/mozilla/fxa-auth-server/issues/2333)
- **codes:** Take token-code uid from the token, not the request payload. (#2339), r=@vbudhra ([ab17bf8](https://github.com/mozilla/fxa-auth-server/commit/ab17bf8)), closes [#2339](https://github.com/mozilla/fxa-auth-server/issues/2339)
- **deprecation:** check for deprecated APIs r=@vladikoff ([2262ce8](https://github.com/mozilla/fxa-auth-server/commit/2262ce8)), closes [#2343](https://github.com/mozilla/fxa-auth-server/issues/2343)
- **emails:** add location to `verify primary email` (#2341), r=@philbooth ([ab7ba5a](https://github.com/mozilla/fxa-auth-server/commit/ab7ba5a)), closes [#2341](https://github.com/mozilla/fxa-auth-server/issues/2341)
- **metrics:** ensure service is set when possible on amplitude events ([c681053](https://github.com/mozilla/fxa-auth-server/commit/c681053))
- **params:** use default parameters in options (#2332) r=@vladikoff ([65f9802](https://github.com/mozilla/fxa-auth-server/commit/65f9802)), closes [#2332](https://github.com/mozilla/fxa-auth-server/issues/2332)
- **totp:** Restrict allowed chars in TOTP code input. (#2340); r=vbudhram ([86de08b](https://github.com/mozilla/fxa-auth-server/commit/86de08b)), closes [#2340](https://github.com/mozilla/fxa-auth-server/issues/2340)

### Features

- **amr:** Report AMR and AAL in relier-facing APIs. (#2346); r=vbudhram ([517f482](https://github.com/mozilla/fxa-auth-server/commit/517f482)), closes [#2346](https://github.com/mozilla/fxa-auth-server/issues/2346)
- **devices:** Devices capabilities (#2350) r=@philbooth ([2067dba](https://github.com/mozilla/fxa-auth-server/commit/2067dba)), closes [#2350](https://github.com/mozilla/fxa-auth-server/issues/2350)
- **emails:** totp notification emails (#2331), r=@philbooth ([8d3928d](https://github.com/mozilla/fxa-auth-server/commit/8d3928d)), closes [#2331](https://github.com/mozilla/fxa-auth-server/issues/2331)
- **node:** update to node v6.13.1 r=@jbuck ([75d8737](https://github.com/mozilla/fxa-auth-server/commit/75d8737))

<a name="1.108.0"></a>

# [1.108.0](https://github.com/mozilla/fxa-auth-server/compare/v1.107.3-private...v1.108.0) (2018-03-21)

### Bug Fixes

- **buffers:** migrate from 'Buffer()' constructor calls r=@vladikoff ([4815505](https://github.com/mozilla/fxa-auth-server/commit/4815505)), closes [#2333](https://github.com/mozilla/fxa-auth-server/issues/2333)
- **codes:** Take token-code uid from the token, not the request payload. (#2339), r=@vbudhra ([ab17bf8](https://github.com/mozilla/fxa-auth-server/commit/ab17bf8)), closes [#2339](https://github.com/mozilla/fxa-auth-server/issues/2339)
- **deprecation:** check for deprecated APIs r=@vladikoff ([2262ce8](https://github.com/mozilla/fxa-auth-server/commit/2262ce8)), closes [#2343](https://github.com/mozilla/fxa-auth-server/issues/2343)
- **emails:** add location to `verify primary email` (#2341), r=@philbooth ([ab7ba5a](https://github.com/mozilla/fxa-auth-server/commit/ab7ba5a)), closes [#2341](https://github.com/mozilla/fxa-auth-server/issues/2341)
- **metrics:** ensure service is set when possible on amplitude events ([c681053](https://github.com/mozilla/fxa-auth-server/commit/c681053))
- **params:** use default parameters in options (#2332) r=@vladikoff ([65f9802](https://github.com/mozilla/fxa-auth-server/commit/65f9802)), closes [#2332](https://github.com/mozilla/fxa-auth-server/issues/2332)
- **totp:** Restrict allowed chars in TOTP code input. (#2340); r=vbudhram ([86de08b](https://github.com/mozilla/fxa-auth-server/commit/86de08b)), closes [#2340](https://github.com/mozilla/fxa-auth-server/issues/2340)

### Features

- **amr:** Report AMR and AAL in relier-facing APIs. (#2346); r=vbudhram ([517f482](https://github.com/mozilla/fxa-auth-server/commit/517f482)), closes [#2346](https://github.com/mozilla/fxa-auth-server/issues/2346)
- **devices:** Devices capabilities (#2350) r=@philbooth ([2067dba](https://github.com/mozilla/fxa-auth-server/commit/2067dba)), closes [#2350](https://github.com/mozilla/fxa-auth-server/issues/2350)
- **emails:** totp notification emails (#2331), r=@philbooth ([8d3928d](https://github.com/mozilla/fxa-auth-server/commit/8d3928d)), closes [#2331](https://github.com/mozilla/fxa-auth-server/issues/2331)
- **node:** update to node v6.13.1 r=@jbuck ([75d8737](https://github.com/mozilla/fxa-auth-server/commit/75d8737))

<a name="1.107.4"></a>

## [1.107.4](https://github.com/mozilla/fxa-auth-server/compare/v1.107.3-private...v1.107.4) (2018-03-21)

### Bug Fixes

- **emails:** Make all DB request paths containing an email use hex encoding (#72); r=philboot ([d275d7a](https://github.com/mozilla/fxa-auth-server/commit/d275d7a)), closes [#72](https://github.com/mozilla/fxa-auth-server/issues/72)

<a name="1.107.3"></a>

## [1.107.3](https://github.com/mozilla/fxa-auth-server/compare/v1.107.2-private-b...v1.107.3) (2018-03-16)

### Bug Fixes

- **validators:** Normalize redirectTo url to avoid parsing edge-cases. (#71) r=@vladikoff ([bb17257](https://github.com/mozilla/fxa-auth-server/commit/bb17257)), closes [#71](https://github.com/mozilla/fxa-auth-server/issues/71)

<a name="1.107.2"></a>

## [1.107.2](https://github.com/mozilla/fxa-auth-server/compare/v1.107.1...v1.107.2) (2018-03-15)

### Bug Fixes

- **emails:** prevent unsafe content from reaching rendered email body ([8da511c](https://github.com/mozilla/fxa-auth-server/commit/8da511c))

<a name="1.107.1"></a>

## [1.107.1](https://github.com/mozilla/fxa-auth-server/compare/v1.107.0...v1.107.1) (2018-03-10)

### chore

- **uplift:** uplift token validation fixes (#2335) r=@vladikoff ([a35411a](https://github.com/mozilla/fxa-auth-server/commit/a35411a)), closes [#2335](https://github.com/mozilla/fxa-auth-server/issues/2335)

<a name="1.107.0"></a>

# [1.107.0](https://github.com/mozilla/fxa-auth-server/compare/v1.106.0...v1.107.0) (2018-03-07)

### Bug Fixes

- **redis:** delete clashing tokens from redis in createSessionToken ([e9ec39d](https://github.com/mozilla/fxa-auth-server/commit/e9ec39d))
- **tests:** Make email-polling-expiry tests pass in March. (#2324) r=@vladikoff ([597bfab](https://github.com/mozilla/fxa-auth-server/commit/597bfab)), closes [#2324](https://github.com/mozilla/fxa-auth-server/issues/2324)

### chore

- **deps:** Update hapi to v16.6.3 (#2330) ([ad1888a](https://github.com/mozilla/fxa-auth-server/commit/ad1888a)), closes [#2330](https://github.com/mozilla/fxa-auth-server/issues/2330)

### Features

- **emails:** delete bounced registrations that are younger than 6 hours (#2305); r=rfk ([e2d2a7e](https://github.com/mozilla/fxa-auth-server/commit/e2d2a7e)), closes [#2305](https://github.com/mozilla/fxa-auth-server/issues/2305)
- **totp:** update to use new verification methods (#2321), r=@philbooth, @vladikoff ([45ae7b2](https://github.com/mozilla/fxa-auth-server/commit/45ae7b2)), closes [#2321](https://github.com/mozilla/fxa-auth-server/issues/2321)

<a name="1.106.0"></a>

# [1.106.0](https://github.com/mozilla/fxa-auth-server/compare/v1.105.0...v1.106.0) (2018-02-21)

### Bug Fixes

- **api:** make authentication required on GET /account/profile (#2290) r=@vladikoff ([6411c5a](https://github.com/mozilla/fxa-auth-server/commit/6411c5a)), closes [#2290](https://github.com/mozilla/fxa-auth-server/issues/2290)
- **docs:** Support declaration of extra error types in route config. ([9254e31](https://github.com/mozilla/fxa-auth-server/commit/9254e31))
- **logging:** Make oauth_client_info use shared logging instance. (#2299) r=@vladikoff ([bb2c677](https://github.com/mozilla/fxa-auth-server/commit/bb2c677)), closes [#2299](https://github.com/mozilla/fxa-auth-server/issues/2299)
- **reauth:** Don't send a "new device" email during session re-auth. ([e2cd9f9](https://github.com/mozilla/fxa-auth-server/commit/e2cd9f9))
- **tests:** Add `verifyTokenCode` support for mem keyFetchToken (#2287), r=@philbooth ([5cb76e5](https://github.com/mozilla/fxa-auth-server/commit/5cb76e5)), closes [#2287](https://github.com/mozilla/fxa-auth-server/issues/2287)
- **tests:** Test that unauthenticated /account/profile rejects cleanly. (#2296) r=@philbooth ([79b2876](https://github.com/mozilla/fxa-auth-server/commit/79b2876)), closes [#2296](https://github.com/mozilla/fxa-auth-server/issues/2296)

### chore

- **emails:** delete bin/mailer_server.js (#2303) r=@vladikoff ([d8bd876](https://github.com/mozilla/fxa-auth-server/commit/d8bd876)), closes [#2303](https://github.com/mozilla/fxa-auth-server/issues/2303)
- **emails:** remove all verification reminder code ([a33756e](https://github.com/mozilla/fxa-auth-server/commit/a33756e))
- **logging:** downgrade redis.watch.conflict to warning level (#2307) r=@vladikoff ([d219cdd](https://github.com/mozilla/fxa-auth-server/commit/d219cdd)), closes [#2307](https://github.com/mozilla/fxa-auth-server/issues/2307)
- **nsp:** ignore hoek warning ([695499a](https://github.com/mozilla/fxa-auth-server/commit/695499a))

### Features

- **cad:** change destination of CAD in email to FxA-controlled page (#2297) r=@philbooth ([2a05116](https://github.com/mozilla/fxa-auth-server/commit/2a05116)), closes [#2297](https://github.com/mozilla/fxa-auth-server/issues/2297) [#1860](https://github.com/mozilla/fxa-auth-server/issues/1860)
- **emails:** fetch service names from OAuth servers, use in emails (#2284) r=@rfk ([f0ecf0a](https://github.com/mozilla/fxa-auth-server/commit/f0ecf0a)), closes [#2284](https://github.com/mozilla/fxa-auth-server/issues/2284) [#2213](https://github.com/mozilla/fxa-auth-server/issues/2213) [#2249](https://github.com/mozilla/fxa-auth-server/issues/2249)
- **reset:** improve reset for reliers (#2298) r=@ryanfeeley,@vbudhram ([a937c16](https://github.com/mozilla/fxa-auth-server/commit/a937c16)), closes [#2298](https://github.com/mozilla/fxa-auth-server/issues/2298) [mozilla/fxa-content-server#5776](https://github.com/mozilla/fxa-content-server/issues/5776) [mozilla/fxa-content-server#5896](https://github.com/mozilla/fxa-content-server/issues/5896)
- **sessions:** Add ability to reauth within an existing login session. ([aa388cc](https://github.com/mozilla/fxa-auth-server/commit/aa388cc))
- **totp:** TOTP Management APIs (#2300), r=@philbooth ([c805f9c](https://github.com/mozilla/fxa-auth-server/commit/c805f9c)), closes [#2300](https://github.com/mozilla/fxa-auth-server/issues/2300)

<a name="1.105.0"></a>

# [1.105.0](https://github.com/mozilla/fxa-auth-server/compare/v1.104.1...v1.105.0) (2018-02-06)

### Bug Fixes

- **bounce:** Update bounces lib to use `accountRecord` (#2273) r=@rfk,@vladikoff ([3953051](https://github.com/mozilla/fxa-auth-server/commit/3953051)), closes [#2273](https://github.com/mozilla/fxa-auth-server/issues/2273) [#2272](https://github.com/mozilla/fxa-auth-server/issues/2272)
- **email:** log to recipient alongside smtp message-id ([993fd02](https://github.com/mozilla/fxa-auth-server/commit/993fd02))
- **emails:** Reset account tokens when deleting an email address. (#2266); r=philbooth ([70d0f96](https://github.com/mozilla/fxa-auth-server/commit/70d0f96)), closes [#2266](https://github.com/mozilla/fxa-auth-server/issues/2266)
- **redis:** delete session tokens from redis in db.deleteDevice ([11f7024](https://github.com/mozilla/fxa-auth-server/commit/11f7024))
- **tests:** Use higher test timeout under Windows Subsystem for Linux ([c9baa00](https://github.com/mozilla/fxa-auth-server/commit/c9baa00))
- **unblock:** Send correct primary email when blocked (#2271), r=@rfk ([0e4b77f](https://github.com/mozilla/fxa-auth-server/commit/0e4b77f)), closes [#2271](https://github.com/mozilla/fxa-auth-server/issues/2271)

### chore

- **ci:** stop setting USE_REDIS in the test invocations (#2281), r=@vbudhram ([26a5a8a](https://github.com/mozilla/fxa-auth-server/commit/26a5a8a)), closes [#2281](https://github.com/mozilla/fxa-auth-server/issues/2281)
- **code:** eliminate duplicate pool and db modules ([924e8ca](https://github.com/mozilla/fxa-auth-server/commit/924e8ca))
- **tests:** Set defaults for env vars in test-local.sh script. ([0960eaf](https://github.com/mozilla/fxa-auth-server/commit/0960eaf))

### Features

- **sessions:** Add /session/duplicate API ([669f59a](https://github.com/mozilla/fxa-auth-server/commit/669f59a))

<a name="1.104.1"></a>

## [1.104.1](https://github.com/mozilla/fxa-auth-server/compare/v1.104.0...v1.104.1) (2018-01-29)

### Bug Fixes

- **metrics:** ensure amplitude events always have a metrics context ([f7ce4d0](https://github.com/mozilla/fxa-auth-server/commit/f7ce4d0))

<a name="1.104.0"></a>

# [1.104.0](https://github.com/mozilla/fxa-auth-server/compare/v1.103.0...v1.104.0) (2018-01-24)

### Bug Fixes

- **redis:** pack redis tokens inside db.deleteSessionToken ([1b2d1d9](https://github.com/mozilla/fxa-auth-server/commit/1b2d1d9))
- **tests:** Fix account destroy device test (#2263), r=@rfk ([220d57d](https://github.com/mozilla/fxa-auth-server/commit/220d57d)), closes [#2263](https://github.com/mozilla/fxa-auth-server/issues/2263)

### chore

- **deps:** update fxa-geodb ([e7bbb86](https://github.com/mozilla/fxa-auth-server/commit/e7bbb86))

### Features

- **auth:** Enable hawk payload validation for additional replay protection (#2252); r=pboot ([af3a9eb](https://github.com/mozilla/fxa-auth-server/commit/af3a9eb)), closes [#2252](https://github.com/mozilla/fxa-auth-server/issues/2252)
- **redis:** eliminate property names from redis-stored tokens ([fcddf0b](https://github.com/mozilla/fxa-auth-server/commit/fcddf0b))
- **redis:** prune expired session tokens from redis ([a9a61f0](https://github.com/mozilla/fxa-auth-server/commit/a9a61f0))

<a name="1.103.0"></a>

# [1.103.0](https://github.com/mozilla/fxa-auth-server/compare/v1.102.0...v1.103.0) (2018-01-09)

### Bug Fixes

- **node:** use node 6.12.3 (#2251) r=@vladikoff ([c804acd](https://github.com/mozilla/fxa-auth-server/commit/c804acd)), closes [#2251](https://github.com/mozilla/fxa-auth-server/issues/2251)
- **scripts:** use latest Husky module for git hooks (#2250); r=rfk ([f76015c](https://github.com/mozilla/fxa-auth-server/commit/f76015c)), closes [#2250](https://github.com/mozilla/fxa-auth-server/issues/2250) [#2128](https://github.com/mozilla/fxa-auth-server/issues/2128)
- **tests:** fix failing geolocation tests (#2253) r=@vladikoff ([804344d](https://github.com/mozilla/fxa-auth-server/commit/804344d)), closes [#2253](https://github.com/mozilla/fxa-auth-server/issues/2253)

### Features

- **sms:** Enable SMS in australia (#2248) r=@rfk ([86369d0](https://github.com/mozilla/fxa-auth-server/commit/86369d0)), closes [#2248](https://github.com/mozilla/fxa-auth-server/issues/2248)

<a name="1.102.0"></a>

# [1.102.0](https://github.com/mozilla/fxa-auth-server/compare/v1.101.1...v1.102.0) (2017-12-13)

### Features

- **codes:** don't send delete notification when deleting unverified email (#2246), r=@rfk ([ae36ddf](https://github.com/mozilla/fxa-auth-server/commit/ae36ddf))
- **sms:** Enable SMS in Denmark (DK) and the Netherlands (NL) (#2238) r=@vladikoff,@vbudhr ([c8e55fe](https://github.com/mozilla/fxa-auth-server/commit/c8e55fe)), closes [#2237](https://github.com/mozilla/fxa-auth-server/issues/2237)

<a name="1.101.1"></a>

## [1.101.1](https://github.com/mozilla/fxa-auth-server/compare/v1.101.0...v1.101.1) (2017-12-05)

### Bug Fixes

- **push:** Send a notification to the device that's being disconnected. (#2245); r=eoger ([9da5305](https://github.com/mozilla/fxa-auth-server/commit/9da5305))

<a name="1.101.0"></a>

# [1.101.0](https://github.com/mozilla/fxa-auth-server/compare/v1.100.0...v1.101.0) (2017-11-29)

### Bug Fixes

- **db:** implement safe redis write semantics ([91cd539](https://github.com/mozilla/fxa-auth-server/commit/91cd539))
- **metrics:** include oauth_client_id in amplitude event properties (#2240); r=rfk ([3034a41](https://github.com/mozilla/fxa-auth-server/commit/3034a41))
- **metrics:** stop sending raw client ids to amplitude (#2239) r=@vladikoff ([0069873](https://github.com/mozilla/fxa-auth-server/commit/0069873))
- **tests:** test against actual redis instance ([f68e4bb](https://github.com/mozilla/fxa-auth-server/commit/f68e4bb))

### chore

- **email:** remove check_can_add_secondary_address route (#2234), r=@philbooth ([90646b9](https://github.com/mozilla/fxa-auth-server/commit/90646b9))
- **email:** Remove FF57 gating logic (#2232), r=@philbooth ([2617b5a](https://github.com/mozilla/fxa-auth-server/commit/2617b5a))
- **nsp:** ignore warning about redos for date parsing in moment ([a5e0a2c](https://github.com/mozilla/fxa-auth-server/commit/a5e0a2c))

### Features

- **sms:** Enable SMS in Spain (ES), Portugal (PT), Italy (IT) (#2229) r=@philbooth ([043ee6c](https://github.com/mozilla/fxa-auth-server/commit/043ee6c)), closes [#2228](https://github.com/mozilla/fxa-auth-server/issues/2228)

<a name="1.100.0"></a>

# [1.100.0](https://github.com/mozilla/fxa-auth-server/compare/v1.99.2...v1.100.0) (2017-11-15)

### Bug Fixes

- **db:** sanely handle redis errors ([8826364](https://github.com/mozilla/fxa-auth-server/commit/8826364))
- **emails:** update accountExists to check for secondary emails (#2216); r=rfk ([a8130d3](https://github.com/mozilla/fxa-auth-server/commit/a8130d3))
- **newrelic:** allow enabling newrelic in background daemons r=@vladikoff ([2d59a0c](https://github.com/mozilla/fxa-auth-server/commit/2d59a0c))

### chore

- **nodejs:** update to 6.12.0 (#2219) r=@vladikoff ([983c369](https://github.com/mozilla/fxa-auth-server/commit/983c369))

### Features

- **sms:** Enable SMS in Belgium, France, Luxembourg (#2211) r=@vladikoff ([afccd3a](https://github.com/mozilla/fxa-auth-server/commit/afccd3a))

<a name="1.99.2"></a>

## [1.99.2](https://github.com/mozilla/fxa-auth-server/compare/v1.99.1...v1.99.2) (2017-11-03)

### Bug Fixes

- **emails:** add post change email template (#2194), r=@philbooth ([f3261a6](https://github.com/mozilla/fxa-auth-server/commit/f3261a6))
- **links:** use a custom url when verifying primary email (#2196), r=@vladikoff ([e6da576](https://github.com/mozilla/fxa-auth-server/commit/e6da576))
- **logo:** fix FF57 logo width and height (#2204) r=@ryanfeeley ([9f74735](https://github.com/mozilla/fxa-auth-server/commit/9f74735)), closes [#2204](https://github.com/mozilla/fxa-auth-server/issues/2204) [#2203](https://github.com/mozilla/fxa-auth-server/issues/2203)
- **tests:** add local test coverage for english device locations (#2201), r=@vbudhram ([686c3eb](https://github.com/mozilla/fxa-auth-server/commit/686c3eb))
- **travis:** run tests with 6 and 8 (#2195); r=rfk ([d6910cd](https://github.com/mozilla/fxa-auth-server/commit/d6910cd))

<a name="1.99.1"></a>

## [1.99.1](https://github.com/mozilla/fxa-auth-server/compare/v1.99.0...v1.99.1) (2017-11-02)

### Bug Fixes

- **logging:** don't log errors if location is not set (#2200) ([ddb3bc9](https://github.com/mozilla/fxa-auth-server/commit/ddb3bc9))

<a name="1.99.0"></a>

# [1.99.0](https://github.com/mozilla/fxa-auth-server/compare/v1.98.2...v1.99.0) (2017-10-31)

### Bug Fixes

- **email:** add missing whitespace after semi-colon (#2192), r=@vbudhram ([0a5ea8c](https://github.com/mozilla/fxa-auth-server/commit/0a5ea8c))
- **email:** Added secondary to subject line (#2174), r=@vbudhram ([163dd9c](https://github.com/mozilla/fxa-auth-server/commit/163dd9c))

### chore

- **deps:** update shrinkwrap ([f170820](https://github.com/mozilla/fxa-auth-server/commit/f170820))
- **email:** regenerate templates from partials (#2193) r=vladikoff ([23c54c1](https://github.com/mozilla/fxa-auth-server/commit/23c54c1))

### Features

- **devices:** return approximateLastAccessTime for old devices ([b498fbd](https://github.com/mozilla/fxa-auth-server/commit/b498fbd))
- **devices:** translate location in devices and sessions response ([b18079f](https://github.com/mozilla/fxa-auth-server/commit/b18079f))
- **metrics:** add newsletter_state property to amplitude events ([b55bfb0](https://github.com/mozilla/fxa-auth-server/commit/b55bfb0))
- **scripts:** warn about no work in email template version bumper ([84a567d](https://github.com/mozilla/fxa-auth-server/commit/84a567d))
- **session:** Add email templates (#2184), r=@philbooth ([dd68d88](https://github.com/mozilla/fxa-auth-server/commit/dd68d88))
- **sms:** Enable SMS in Austria, Germany. (#2179) r=@philbooth ([2e6fcd6](https://github.com/mozilla/fxa-auth-server/commit/2e6fcd6)), closes [#2177](https://github.com/mozilla/fxa-auth-server/issues/2177)
- **tokens:** add city and stateCode to sessionTokens ([563851f](https://github.com/mozilla/fxa-auth-server/commit/563851f))

<a name="1.98.2"></a>

## [1.98.2](https://github.com/mozilla/fxa-auth-server/compare/v1.98.1...v1.98.2) (2017-10-30)

### chore

- **logo:** add new logo to email templates (#2190), r=@philbooth ([a5c4105](https://github.com/mozilla/fxa-auth-server/commit/a5c4105))

<a name="1.98.1"></a>

## [1.98.1](https://github.com/mozilla/fxa-auth-server/compare/v1.98.0...v1.98.1) (2017-10-26)

### chore

- **docker:** Update to node v6.11.5 for security fix ([2e7c769](https://github.com/mozilla/fxa-auth-server/commit/2e7c769))

<a name="1.98.0"></a>

# [1.98.0](https://github.com/mozilla/fxa-auth-server/compare/v1.97.5...v1.98.0) (2017-10-18)

### Bug Fixes

- **config:** add smsmock to dev config ([6852ce6](https://github.com/mozilla/fxa-auth-server/commit/6852ce6))
- **devices:** Avoid reporting stale last-access times when feature is disabled. (#2144); r=phi ([e8ce382](https://github.com/mozilla/fxa-auth-server/commit/e8ce382))
- **logging:** more clearly distinguish amplitude error messages ([d205c9a](https://github.com/mozilla/fxa-auth-server/commit/d205c9a))
- **logging:** silence annoying redis log noise (#2164), r=@vbudhram ([a397b67](https://github.com/mozilla/fxa-auth-server/commit/a397b67))
- **metrics:** don't emit os_version if os_name is unset (#2165), r=@vbudhram ([c60f198](https://github.com/mozilla/fxa-auth-server/commit/c60f198))
- **metrics:** map service event property from client id ([5be3475](https://github.com/mozilla/fxa-auth-server/commit/5be3475))
- **push:** Allow sending verification messages from /devices/notify (#2161), r=@rfk ([717253f](https://github.com/mozilla/fxa-auth-server/commit/717253f))
- **push:** Target `Firefox Beta` for account verification messages (#2167), r=@rfk (#2170) ([37349fe](https://github.com/mozilla/fxa-auth-server/commit/37349fe))
- **tests:** unify the mock log implementations ([d959491](https://github.com/mozilla/fxa-auth-server/commit/d959491))

### Features

- **sqs:** Add timestamp to notify services sqs message (#2168), r=@rfk ([89e1ad1](https://github.com/mozilla/fxa-auth-server/commit/89e1ad1))

### Refactor

- **tokens:** prefer token.id to token.tokenId ([80d3de1](https://github.com/mozilla/fxa-auth-server/commit/80d3de1))

<a name="1.97.5"></a>

## [1.97.5](https://github.com/mozilla/fxa-auth-server/compare/v1.97.4...v1.97.5) (2017-10-17)

### Bug Fixes

- **devices:** Always report a name and type in device registration response. ([00e69f2](https://github.com/mozilla/fxa-auth-server/commit/00e69f2))

<a name="1.97.2"></a>

## [1.97.2](https://github.com/mozilla/fxa-auth-server/compare/v1.97.1...v1.97.2) (2017-10-05)

### chore

- **logging:** log email headers to diagnose #2133 ([8d23ca9](https://github.com/mozilla/fxa-auth-server/commit/8d23ca9))

<a name="1.97.1"></a>

## [1.97.1](https://github.com/mozilla/fxa-auth-server/compare/v1.97.0...v1.97.1) (2017-10-05)

### Bug Fixes

- **email:** Make blocking rule for complaints match that for hard bounces (#2152), r=@vbudhr ([272a4cf](https://github.com/mozilla/fxa-auth-server/commit/272a4cf))

### Features

- **push:** Drop collection_changed push notifications for first sync sent to iOS devices (# ([b6d9490](https://github.com/mozilla/fxa-auth-server/commit/b6d9490))

<a name="1.97.0"></a>

# [1.97.0](https://github.com/mozilla/fxa-auth-server/compare/v1.96.3...v1.97.0) (2017-10-04)

### Bug Fixes

- **deps:** update deps (#2143), r=@vbudhram ([b328873](https://github.com/mozilla/fxa-auth-server/commit/b328873))
- **devices:** return the whole device record in POST /device response (#2132); r=rfk ([6fe2dac](https://github.com/mozilla/fxa-auth-server/commit/6fe2dac))
- **docs:** update dependencies for api doc generation (#2131), r=@vbudhram ([06071b5](https://github.com/mozilla/fxa-auth-server/commit/06071b5))
- **email:** Show proper error and delete email if postfix fails to send (#2147), r=@vladikof ([f4c54da](https://github.com/mozilla/fxa-auth-server/commit/f4c54da)), closes [#2147](https://github.com/mozilla/fxa-auth-server/issues/2147)
- **email:** Update secondary email footers (#2136), r=@rfk ([1d834a9](https://github.com/mozilla/fxa-auth-server/commit/1d834a9))
- **sessions:** update the access time on /sign checking (#2149) r=rfk ([2543bf0](https://github.com/mozilla/fxa-auth-server/commit/2543bf0))

### Features

- **metrics:** implement email_version amplitude property ([925760a](https://github.com/mozilla/fxa-auth-server/commit/925760a))

<a name="1.96.3"></a>

## [1.96.3](https://github.com/mozilla/fxa-auth-server/compare/v1.96.2...v1.96.3) (2017-09-25)

### Bug Fixes

- **metrics:** fix the data on email sent events ([4f6f367](https://github.com/mozilla/fxa-auth-server/commit/4f6f367))
- **metrics:** prefer standard amplitude properties ([8a255c9](https://github.com/mozilla/fxa-auth-server/commit/8a255c9))

<a name="1.96.2"></a>

## [1.96.2](https://github.com/mozilla/fxa-auth-server/compare/v1.96.1...v1.96.2) (2017-09-22)

### chore

- **logs:** log error if headers are missing in email notifications ([34bf492](https://github.com/mozilla/fxa-auth-server/commit/34bf492))

<a name="1.96.1"></a>

## [1.96.1](https://github.com/mozilla/fxa-auth-server/compare/v1.96.0...v1.96.1) (2017-09-20)

### Bug Fixes

- **push:** return pushEndpointExpired as a boolean (#2127); r=rfk ([eec0a43](https://github.com/mozilla/fxa-auth-server/commit/eec0a43))

### chore

- **package:** update shrinkwrap ([cd32fd8](https://github.com/mozilla/fxa-auth-server/commit/cd32fd8))

### Features

- **email:** Throw error when attempting to resend email code for email that doesn't belong t ([4325eb0](https://github.com/mozilla/fxa-auth-server/commit/4325eb0))
- **metrics:** include fxa_services_used in amplitude user properties ([938ef5c](https://github.com/mozilla/fxa-auth-server/commit/938ef5c))

### Refactor

- **server:** extract unblock_codes routes to a separate module (#2126) r=vladikoff ([189240f](https://github.com/mozilla/fxa-auth-server/commit/189240f)), closes [#1445](https://github.com/mozilla/fxa-auth-server/issues/1445)

<a name="1.96.0"></a>

# [1.96.0](https://github.com/mozilla/fxa-auth-server/compare/v1.95.2...v1.96.0) (2017-09-19)

### Bug Fixes

- **basket:** reinstate utm params to the metrics context bundle ([549b891](https://github.com/mozilla/fxa-auth-server/commit/549b891))
- **metrics:** include missing user_properties on amplitude events ([0567350](https://github.com/mozilla/fxa-auth-server/commit/0567350))
- **server:** enforce 'use strict' everywhere (#2124), r=@vbudhram ([df6cd60](https://github.com/mozilla/fxa-auth-server/commit/df6cd60))
- **tests:** silence obnoxious "possible memory leak detected" warning ([dae0e58](https://github.com/mozilla/fxa-auth-server/commit/dae0e58))

### chore

- **deps:** Update hapi to latest version ([68e2c12](https://github.com/mozilla/fxa-auth-server/commit/68e2c12))
- **docs:** update docs for node 6 (#2120) r=rfk ([0c0ef30](https://github.com/mozilla/fxa-auth-server/commit/0c0ef30))

### Features

- **logs:** add Sentry integration (#2116) r=vbudhram ([ceab903](https://github.com/mozilla/fxa-auth-server/commit/ceab903)), closes [#2115](https://github.com/mozilla/fxa-auth-server/issues/2115)
- **password:** notify attached services when a user changes their password (#2117); r=rfk ([e8cc49d](https://github.com/mozilla/fxa-auth-server/commit/e8cc49d))
- **server:** lazily get all request.app properties ([3518b0c](https://github.com/mozilla/fxa-auth-server/commit/3518b0c))
- **server:** lazily get devices array on the request object (#2107) r=vladikoff,vbudhram ([f084830](https://github.com/mozilla/fxa-auth-server/commit/f084830)), closes [#2106](https://github.com/mozilla/fxa-auth-server/issues/2106)

### Refactor

- **secondary-email:** Remove "add secondary email" feature flag. (#2121), r=@vbudhram ([359caeb](https://github.com/mozilla/fxa-auth-server/commit/359caeb))

<a name="1.95.3"></a>

## [1.95.3](https://github.com/mozilla/fxa-auth-server/compare/v1.95.1...v1.95.3) (2017-09-13)

### chore

- **deps:** Update hapi to latest version ([eed3203](https://github.com/mozilla/fxa-auth-server/commit/eed3203))

<a name="1.95.2"></a>

## [1.95.2](https://github.com/mozilla/fxa-auth-server/compare/v1.95.1...v1.95.2) (2017-09-12)

### Bug Fixes

- **email:** Block sending if gated primary and unverified secondary. (#2098), r=@vbudhram ([36ba048](https://github.com/mozilla/fxa-auth-server/commit/36ba048))
- **profile:** progress logging for handleProfileUpdated (#2094) r=vladikoff,eoger ([55e1a91](https://github.com/mozilla/fxa-auth-server/commit/55e1a91))
- **server:** make geo data lazily available on the request ([2238b37](https://github.com/mozilla/fxa-auth-server/commit/2238b37))

### Features

- **db:** allow BMP chars in device name (#2053) r=rfk,jbuck ([2e8e674](https://github.com/mozilla/fxa-auth-server/commit/2e8e674))

### Refactor

- **l10n:** take l10n repo out of node_modules (#2079) ([1f36c6d](https://github.com/mozilla/fxa-auth-server/commit/1f36c6d)), closes [#1678](https://github.com/mozilla/fxa-auth-server/issues/1678)

<a name="1.95.1"></a>

## [1.95.1](https://github.com/mozilla/fxa-auth-server/compare/v1.95.0...v1.95.1) (2017-09-12)

### Bug Fixes

- **push:** Only send device connection push msgs to iOS 10+ (#2108) r=vladikoff ([6b1f73d](https://github.com/mozilla/fxa-auth-server/commit/6b1f73d))

<a name="1.95.0"></a>

# [1.95.0](https://github.com/mozilla/fxa-auth-server/compare/v1.94.2...v1.95.0) (2017-09-06)

### Bug Fixes

- **bounces:** Handle mis-formatted bounce addrs as best we can. (#2090); r=jrgm ([a2e3d1e](https://github.com/mozilla/fxa-auth-server/commit/a2e3d1e))
- **metrics:** add missing device_id and user_id amplitude properties ([b36ea32](https://github.com/mozilla/fxa-auth-server/commit/b36ea32))
- **metrics:** remove the forgot_sent amplitude event (#2078) r=vladikoff ([32f2caa](https://github.com/mozilla/fxa-auth-server/commit/32f2caa))
- **profile:** Handle incoming uids as strings, not buffers. (#2089) r=philbooth ([a6d8bc0](https://github.com/mozilla/fxa-auth-server/commit/a6d8bc0))
- **push:** Allow device connection push messages for Firefox iOS >= 9.0 (#2088); r=vbudhram ([d04778c](https://github.com/mozilla/fxa-auth-server/commit/d04778c))
- **push:** send push notification after a device is deleted ([87a410e](https://github.com/mozilla/fxa-auth-server/commit/87a410e))

### chore

- **docs:** Auto-generated docs update ([a45cbc3](https://github.com/mozilla/fxa-auth-server/commit/a45cbc3))
- **package:** update shrinkwrap ([bd9b53a](https://github.com/mozilla/fxa-auth-server/commit/bd9b53a))

### Features

- **logging:** send amplitude events to the logs ([5800418](https://github.com/mozilla/fxa-auth-server/commit/5800418))
- **push:** add a pushEndpointExpired flag for devices that need to re-register their push e ([735f323](https://github.com/mozilla/fxa-auth-server/commit/735f323))

### Refactor

- **api:** extract device schema to a common definition ([f136268](https://github.com/mozilla/fxa-auth-server/commit/f136268))
- **mailer:** automatically pass through args to mailer methods (#2075) r=vladikoff,shane-toml ([cc2da2a](https://github.com/mozilla/fxa-auth-server/commit/cc2da2a))

<a name="1.94.2"></a>

## [1.94.2](https://github.com/mozilla/fxa-auth-server/compare/v1.93.1...v1.94.2) (2017-08-23)

### Bug Fixes

- **deps:** update shrinkwrap ([4694cd1](https://github.com/mozilla/fxa-auth-server/commit/4694cd1))
- **devices:** saner mobile/tablet recognition for devices (#2051), r=@vbudhram ([3e5859f](https://github.com/mozilla/fxa-auth-server/commit/3e5859f))
- **l10n:** fix l10n updates ([2d3c4ab](https://github.com/mozilla/fxa-auth-server/commit/2d3c4ab))
- **senders:** update gettext dependency that can parse es6 syntax (#2057) r=vladikoff ([12dd0fe](https://github.com/mozilla/fxa-auth-server/commit/12dd0fe))
- **strings:** change "to" to "for" for verify secondary email (#2048), r=@vbudhram ([742be75](https://github.com/mozilla/fxa-auth-server/commit/742be75))
- **tests:** update remote db tests for uaFormFactor column ([c4d1e50](https://github.com/mozilla/fxa-auth-server/commit/c4d1e50))

### chore

- **ci:** remove node4 test target from travis-ci (#2054) r=vladikoff ([e1de16d](https://github.com/mozilla/fxa-auth-server/commit/e1de16d))
- **docs:** update precommit doc script to use grunt-newer ([fd62a8d](https://github.com/mozilla/fxa-auth-server/commit/fd62a8d))
- **eslint:** fix eslint task config so newer works (#2055) r=vladikoff ([12a14fc](https://github.com/mozilla/fxa-auth-server/commit/12a14fc)), closes [#2055](https://github.com/mozilla/fxa-auth-server/issues/2055)
- **git:** remove prepush git hook (#2058) r=vladikoff ([8e1de31](https://github.com/mozilla/fxa-auth-server/commit/8e1de31))

### Features

- **email:** Notify services when user changes primary email (#2066) r=vladikoff,rfk ([7bbdd44](https://github.com/mozilla/fxa-auth-server/commit/7bbdd44))
- **server:** add parsed user agent info to the request object (#2061), r=@vbudhram ([cc69b36](https://github.com/mozilla/fxa-auth-server/commit/cc69b36))

### Refactor

- **email:** extract common flow id boilerplate (#2065) r=vladikoff ([8d5f2b0](https://github.com/mozilla/fxa-auth-server/commit/8d5f2b0))
- **sms:** unleash es6 in senders/sms (#2064), r=@vbudhram ([a37589c](https://github.com/mozilla/fxa-auth-server/commit/a37589c))

<a name="1.94.1"></a>

## [1.94.1](https://github.com/mozilla/fxa-auth-server/compare/v1.94.0...v1.94.1) (2017-08-23)

### Bug Fixes

- **deps:** update shrinkwrap ([4694cd1](https://github.com/mozilla/fxa-auth-server/commit/4694cd1))

<a name="1.94.0"></a>

# [1.94.0](https://github.com/mozilla/fxa-auth-server/compare/v1.93.1...v1.94.0) (2017-08-22)

### Bug Fixes

- **devices:** saner mobile/tablet recognition for devices (#2051), r=@vbudhram ([3e5859f](https://github.com/mozilla/fxa-auth-server/commit/3e5859f))
- **l10n:** fix l10n updates ([2d3c4ab](https://github.com/mozilla/fxa-auth-server/commit/2d3c4ab))
- **senders:** update gettext dependency that can parse es6 syntax (#2057) r=vladikoff ([12dd0fe](https://github.com/mozilla/fxa-auth-server/commit/12dd0fe))
- **strings:** change "to" to "for" for verify secondary email (#2048), r=@vbudhram ([742be75](https://github.com/mozilla/fxa-auth-server/commit/742be75))

### chore

- **ci:** remove node4 test target from travis-ci (#2054) r=vladikoff ([e1de16d](https://github.com/mozilla/fxa-auth-server/commit/e1de16d))
- **docs:** update precommit doc script to use grunt-newer ([fd62a8d](https://github.com/mozilla/fxa-auth-server/commit/fd62a8d))
- **eslint:** fix eslint task config so newer works (#2055) r=vladikoff ([12a14fc](https://github.com/mozilla/fxa-auth-server/commit/12a14fc)), closes [#2055](https://github.com/mozilla/fxa-auth-server/issues/2055)
- **git:** remove prepush git hook (#2058) r=vladikoff ([8e1de31](https://github.com/mozilla/fxa-auth-server/commit/8e1de31))

### Features

- **email:** Notify services when user changes primary email (#2066) r=vladikoff,rfk ([7bbdd44](https://github.com/mozilla/fxa-auth-server/commit/7bbdd44))
- **server:** add parsed user agent info to the request object (#2061), r=@vbudhram ([cc69b36](https://github.com/mozilla/fxa-auth-server/commit/cc69b36))

### Refactor

- **email:** extract common flow id boilerplate (#2065) r=vladikoff ([8d5f2b0](https://github.com/mozilla/fxa-auth-server/commit/8d5f2b0))
- **sms:** unleash es6 in senders/sms (#2064), r=@vbudhram ([a37589c](https://github.com/mozilla/fxa-auth-server/commit/a37589c))

<a name="1.93.1"></a>

## [1.93.1](https://github.com/mozilla/fxa-auth-server/compare/v1.93.0...v1.93.1) (2017-08-11)

### Bug Fixes

- **devices:** ditch OS in synthesized name if form factor is present (#2047) r=vladikoff ([d96f299](https://github.com/mozilla/fxa-auth-server/commit/d96f299))

<a name="1.93.0"></a>

# [1.93.0](https://github.com/mozilla/fxa-auth-server/compare/v1.92.0...v1.93.0) (2017-08-09)

### Bug Fixes

- **db:** expose config options for Poolee timeout and maxPending (#2027) ([bfecf6d](https://github.com/mozilla/fxa-auth-server/commit/bfecf6d))
- **email:** Fix issue where you couldn't delete account after changing email (#2036) r=vladi ([5eca134](https://github.com/mozilla/fxa-auth-server/commit/5eca134)), closes [#2036](https://github.com/mozilla/fxa-auth-server/issues/2036)
- **email:** Notify all verified emails when a secondary email is removed (#2016) r=vladikoff ([4c394cf](https://github.com/mozilla/fxa-auth-server/commit/4c394cf)), closes [#1948](https://github.com/mozilla/fxa-auth-server/issues/1948)
- **push:** Send push notification to devices when email has changed (#2038), r=@philbooth ([26f6104](https://github.com/mozilla/fxa-auth-server/commit/26f6104))
- **redisSessions:** improve redis session lookup performance (#2026) r=vladikoff,rfk ([10e8310](https://github.com/mozilla/fxa-auth-server/commit/10e8310)), closes [#2025](https://github.com/mozilla/fxa-auth-server/issues/2025)
- **sms:** make the sms copy friendlier ([1d80d81](https://github.com/mozilla/fxa-auth-server/commit/1d80d81))
- **tests:** add coverage for failing redis requests ([3cced62](https://github.com/mozilla/fxa-auth-server/commit/3cced62))

### chore

- **docs:** regular maintenance for the metrics doc ([8e0af2e](https://github.com/mozilla/fxa-auth-server/commit/8e0af2e))
- **docs:** update AUTHORS list (#2024) ([4143efc](https://github.com/mozilla/fxa-auth-server/commit/4143efc))
- **logs:** add log when stale emails hit recovery endpoint (#2020) r=vladikoff ([b58e822](https://github.com/mozilla/fxa-auth-server/commit/b58e822))
- **tests:** tidy up the remote db session token tests ([3031098](https://github.com/mozilla/fxa-auth-server/commit/3031098))

### Features

- **devices:** include form factor in synthesized device name ([5a59afa](https://github.com/mozilla/fxa-auth-server/commit/5a59afa))
- **session:** add location to sessions query (#1993) r=vladikoff,philbooth ([27ca0e4](https://github.com/mozilla/fxa-auth-server/commit/27ca0e4))

<a name="1.92.0"></a>

# [1.92.0](https://github.com/mozilla/fxa-auth-server/compare/v1.91.3...v1.92.0) (2017-07-26)

### Bug Fixes

- **config:** set token updates to true by default (#1994) r=udaraweerasinghege ([bdf7db6](https://github.com/mozilla/fxa-auth-server/commit/bdf7db6))
- **emails:** check against original account email (#2011), r=@philbooth ([76aedd2](https://github.com/mozilla/fxa-auth-server/commit/76aedd2))
- **tokens:** add is memory token property to sessions (#2004) r=vladikoff ([1f57821](https://github.com/mozilla/fxa-auth-server/commit/1f57821))

### chore

- **timestamps:** add two timestamps to sessions and devices (#2009) r=vladikoff ([516826b](https://github.com/mozilla/fxa-auth-server/commit/516826b))

### Features

- **emails:** Add ability to change email (#1983), r=@philbooth ([0541f13](https://github.com/mozilla/fxa-auth-server/commit/0541f13))
- **errors:** include conflicting device id in errno 124 response ([0217750](https://github.com/mozilla/fxa-auth-server/commit/0217750))
- **metrics:** emit route performance events ([50c55f1](https://github.com/mozilla/fxa-auth-server/commit/50c55f1))
- **signin:** Skip signin confirmation for new accounts by default (#1992) r=vladikoff ([9900c42](https://github.com/mozilla/fxa-auth-server/commit/9900c42)), closes [#1991](https://github.com/mozilla/fxa-auth-server/issues/1991)
- **style:** update to new device image (#2014) r=ryanfeeley ([9568c70](https://github.com/mozilla/fxa-auth-server/commit/9568c70)), closes [#1914](https://github.com/mozilla/fxa-auth-server/issues/1914)
- **tokens:** delete account all reset tokens on password reset (#1979) r=vladikoff ([310e199](https://github.com/mozilla/fxa-auth-server/commit/310e199))
- **tokens:** expire session tokens that have no device record ([4941dd5](https://github.com/mozilla/fxa-auth-server/commit/4941dd5))

### Refactor

- **server:** extract email-related routes to a separate module (#1989), r=@vbudhram ([2903609](https://github.com/mozilla/fxa-auth-server/commit/2903609))

<a name="1.91.2"></a>

## [1.91.2](https://github.com/mozilla/fxa-auth-server/compare/v1.91.1...v1.91.2) (2017-07-18)

### Bug Fixes

- **tests:** update tests to match recent db changes (#1995), r=@vbudhram ([c059518](https://github.com/mozilla/fxa-auth-server/commit/c059518))

<a name="1.91.1"></a>

## [1.91.1](https://github.com/mozilla/fxa-auth-server/compare/v1.91.0...v1.91.1) (2017-07-12)

### Bug Fixes

- **nodejs:** update to 6.11.1 for security fixes ([b653e4c](https://github.com/mozilla/fxa-auth-server/commit/b653e4c))

<a name="1.91.0"></a>

# [1.91.0](https://github.com/mozilla/fxa-auth-server/compare/v1.90.2...v1.91.0) (2017-07-12)

### Bug Fixes

- **hawk:** key passed to hawk must be a Buffer ([8d2a861](https://github.com/mozilla/fxa-auth-server/commit/8d2a861))
- **nodejs:** update to node:4.8.4-alpine ([2945ef9](https://github.com/mozilla/fxa-auth-server/commit/2945ef9))
- **push:** Don't notify the originating device about pwd change. (#1931) r=mhammond,vladiko ([baed71d](https://github.com/mozilla/fxa-auth-server/commit/baed71d))
- **server:** return sane user agent from /account/sessions ([2f10d1b](https://github.com/mozilla/fxa-auth-server/commit/2f10d1b))
- **tests:** update db tests to match recent session token changes (#1986), r=@vbudhram ([aecb7f1](https://github.com/mozilla/fxa-auth-server/commit/aecb7f1))

### chore

- **docs:** git add generated api docs in precommit hook ([a1f3373](https://github.com/mozilla/fxa-auth-server/commit/a1f3373))
- **package:** update api docs on precommit (#1972) r=vladikoff ([7d59790](https://github.com/mozilla/fxa-auth-server/commit/7d59790))

### Features

- **account:** receive marketingOptIn when verifying email codes ([1d2a9f4](https://github.com/mozilla/fxa-auth-server/commit/1d2a9f4))
- **account:** send marketingOptIn to attached services on registration ([ea93642](https://github.com/mozilla/fxa-auth-server/commit/ea93642)), closes [#1973](https://github.com/mozilla/fxa-auth-server/issues/1973)
- **email:** When primary email gated, send to secondary email if avalible (#1954), r=@seanmo ([979968a](https://github.com/mozilla/fxa-auth-server/commit/979968a))
- **node:** upgrade to Nodejs 6!!! ([c9be152](https://github.com/mozilla/fxa-auth-server/commit/c9be152))

### Refactor

- **lib:** use strings instead of buffers for as much as possible ([0cfd39c](https://github.com/mozilla/fxa-auth-server/commit/0cfd39c))
- **routes:** break out device-related routes to a separate module ([ba5c927](https://github.com/mozilla/fxa-auth-server/commit/ba5c927))
- **server:** eliminate some unnecessary serial invocation (#1965), r=@vbudhram ([91f8e43](https://github.com/mozilla/fxa-auth-server/commit/91f8e43))

<a name="1.90.2"></a>

## [1.90.2](https://github.com/mozilla/fxa-auth-server/compare/v1.90.1...v1.90.2) (2017-07-06)

<a name="1.90.1"></a>

## [1.90.1](https://github.com/mozilla/fxa-auth-server/compare/v1.90.0...v1.90.1) (2017-07-05)

### Bug Fixes

- **server:** stop using raw user agent string for browser name ([14f0bf9](https://github.com/mozilla/fxa-auth-server/commit/14f0bf9))

<a name="1.90.0"></a>

# [1.90.0](https://github.com/mozilla/fxa-auth-server/compare/v1.89.1...v1.90.0) (2017-06-28)

### Bug Fixes

- **ios:** only notify ios devices for collection change events (#1960) r=vladikoff ([111bfbb](https://github.com/mozilla/fxa-auth-server/commit/111bfbb))
- **notifications:** Make data fields consistent across all notifyAttachedServices calls. (#1879); r= ([88a9fc8](https://github.com/mozilla/fxa-auth-server/commit/88a9fc8))
- **server:** do not return flowId from consumeSigninCodes endpoint ([6fd020d](https://github.com/mozilla/fxa-auth-server/commit/6fd020d))
- **server:** step in before node-uap parses Sync UA strings ([3f78f6e](https://github.com/mozilla/fxa-auth-server/commit/3f78f6e))
- **test:** Make db tests more independent and update auth-db dev version ([ed4d9ad](https://github.com/mozilla/fxa-auth-server/commit/ed4d9ad))

### chore

- **docs:** document the newsletter flow events ([307f24c](https://github.com/mozilla/fxa-auth-server/commit/307f24c))

### Features

- **metrics:** emit a flow.continued event for signinCodes ([13eeab2](https://github.com/mozilla/fxa-auth-server/commit/13eeab2))

<a name="1.89.1"></a>

## [1.89.1](https://github.com/mozilla/fxa-auth-server/compare/v1.89.0...v1.89.1) (2017-06-28)

### Features

- **sms:** Switch to AWS SNS for SMS ([7ce5c05](https://github.com/mozilla/fxa-auth-server/commit/7ce5c05))

<a name="1.89.0"></a>

# [1.89.0](https://github.com/mozilla/fxa-auth-server/compare/v1.88.1...v1.89.0) (2017-06-14)

### Bug Fixes

- **CAD:** Document CAD flow events. ([aa789f8](https://github.com/mozilla/fxa-auth-server/commit/aa789f8))
- **CAD:** Fix connectMethod table formatting. (#1941), r=@philbooth ([fa9ebc7](https://github.com/mozilla/fxa-auth-server/commit/fa9ebc7)), closes [#1941](https://github.com/mozilla/fxa-auth-server/issues/1941)
- **email:** Escape device name in HTML emails. (#1944), r=@philbooth ([bcad58c](https://github.com/mozilla/fxa-auth-server/commit/bcad58c))
- **email:** log a 'sent' email event for each CC address (#1936), r=@vbudhram ([82b24e2](https://github.com/mozilla/fxa-auth-server/commit/82b24e2))
- **server:** remove duplicate URL-safe base 64 validator ([50f6303](https://github.com/mozilla/fxa-auth-server/commit/50f6303))
- **sms:** Use the real email sender when sending via MockNexmo ([577db70](https://github.com/mozilla/fxa-auth-server/commit/577db70))
- **test:** Add tests for the `sender` and `from` fields in mock-nexmo. ([068791a](https://github.com/mozilla/fxa-auth-server/commit/068791a))
- **test:** Fix the broken smsSend test. ([ef2cc2a](https://github.com/mozilla/fxa-auth-server/commit/ef2cc2a))
- **tests:** add CC suport to mail_helper (#1937) r=vbudhram ([8dfb5e3](https://github.com/mozilla/fxa-auth-server/commit/8dfb5e3))
- **tests:** Update loadtests to cope with sign-in confirmation (#1890) r=jrgm,vladikoff ([be2d1ef](https://github.com/mozilla/fxa-auth-server/commit/be2d1ef))

### chore

- **log:** Remove datadog/statsd integration (#1921); r=vladikoff ([3f7ed68](https://github.com/mozilla/fxa-auth-server/commit/3f7ed68))

### Features

- **bounces:** add tiers to bounce blocklist ([09e18e5](https://github.com/mozilla/fxa-auth-server/commit/09e18e5)), closes [#1893](https://github.com/mozilla/fxa-auth-server/issues/1893)
- **emails:** Add email metrics documentation (#1919) r=vladikoff,davismtl ([ae0a4f8](https://github.com/mozilla/fxa-auth-server/commit/ae0a4f8))
- **emails:** Add endpoint to check if secondary emails are enabled (#1926), r=@philbooth, @rf ([a459ff1](https://github.com/mozilla/fxa-auth-server/commit/a459ff1))

<a name="1.88.1"></a>

## [1.88.1](https://github.com/mozilla/fxa-auth-server/compare/v1.88.0...v1.88.1) (2017-06-01)

### Bug Fixes

- **sms:** ditch the balance checks due to rate-limiting woe ([2394652](https://github.com/mozilla/fxa-auth-server/commit/2394652))

<a name="1.88.0"></a>

# [1.88.0](https://github.com/mozilla/fxa-auth-server/compare/v1.87.0...v1.88.0) (2017-05-31)

### Bug Fixes

- **devices:** handle new user agent string from Sync client lib ([009428e](https://github.com/mozilla/fxa-auth-server/commit/009428e))
- **docs:** overhaul the metrics events documentation ([2d5943c](https://github.com/mozilla/fxa-auth-server/commit/2d5943c))
- **email:** check case insensitive headers in EmailSent event (#1916), r=@philbooth, @vbudhr ([23593c7](https://github.com/mozilla/fxa-auth-server/commit/23593c7))
- **notifications:** Send disable notification to all devices ([91ce14c](https://github.com/mozilla/fxa-auth-server/commit/91ce14c))
- **push:** add extra logs ([5362c64](https://github.com/mozilla/fxa-auth-server/commit/5362c64))
- **push:** correct params types in push.js ([7ba4f67](https://github.com/mozilla/fxa-auth-server/commit/7ba4f67))
- **push:** Validate push public keys at registration time. ([8920a01](https://github.com/mozilla/fxa-auth-server/commit/8920a01))
- **tests:** adjust public keys in tests ([43b8fd8](https://github.com/mozilla/fxa-auth-server/commit/43b8fd8))

### chore

- **ci:** always get most recent node 4 on travis ([4e9b8b4](https://github.com/mozilla/fxa-auth-server/commit/4e9b8b4))
- **push:** Add a link to nodejs ECDH issue in code comments. ([0503479](https://github.com/mozilla/fxa-auth-server/commit/0503479))

### Features

- **docs:** automatically generate API docs from the code ([643ed85](https://github.com/mozilla/fxa-auth-server/commit/643ed85))
- **push:** send push notification on account deletion ([163e2f4](https://github.com/mozilla/fxa-auth-server/commit/163e2f4))
- **server:** add endpoint for consuming signinCodes ([f10655d](https://github.com/mozilla/fxa-auth-server/commit/f10655d))
- **server:** include signinCode in the installFirefox SMS ([2610d2f](https://github.com/mozilla/fxa-auth-server/commit/2610d2f))
- **sms:** Show SMS links in the mail helper. ([fd4b85a](https://github.com/mozilla/fxa-auth-server/commit/fd4b85a))

<a name="1.87.1"></a>

## [1.87.1](https://github.com/mozilla/fxa-auth-server/compare/v1.87.0...v1.87.1) (2017-05-26)

### Bug Fixes

- **push:** add extra logs ([5362c64](https://github.com/mozilla/fxa-auth-server/commit/5362c64))
- **push:** Validate push public keys at registration time. ([8920a01](https://github.com/mozilla/fxa-auth-server/commit/8920a01))

<a name="1.87.0"></a>

# [1.87.0](https://github.com/mozilla/fxa-auth-server/compare/v1.86.0...v1.87.0) (2017-05-17)

### Bug Fixes

- **config:** Add email regex feature flag for secondary email ([d62995e](https://github.com/mozilla/fxa-auth-server/commit/d62995e))
- **config:** Update secondary email config to support softvision and restmail (#1894) r=vladi ([b3edcef](https://github.com/mozilla/fxa-auth-server/commit/b3edcef)), closes [#1891](https://github.com/mozilla/fxa-auth-server/issues/1891)
- **devices:** Add test for unicode device names. (#1758) r=vladikoff ([46861c3](https://github.com/mozilla/fxa-auth-server/commit/46861c3))
- **emails:** Can create secondary email if it is unverified in another account (#1892) r=vlad ([34e3841](https://github.com/mozilla/fxa-auth-server/commit/34e3841))
- **emails:** Fix issue where change password link was undefined (#1886) r=vladikoff ([e62aab1](https://github.com/mozilla/fxa-auth-server/commit/e62aab1)), closes [#1886](https://github.com/mozilla/fxa-auth-server/issues/1886)
- **emails:** Only send email notifications to verified secondary emails (#1888) r=rfk,philboo ([3bc36eb](https://github.com/mozilla/fxa-auth-server/commit/3bc36eb)), closes [#1887](https://github.com/mozilla/fxa-auth-server/issues/1887)
- **metrics:** handle and log missing payload (#1875) r=vbudhram ([36ec6f7](https://github.com/mozilla/fxa-auth-server/commit/36ec6f7)), closes [#1817](https://github.com/mozilla/fxa-auth-server/issues/1817)
- **push:** add support for dev and stage push servers (#1895) r=vbudhram ([495acd6](https://github.com/mozilla/fxa-auth-server/commit/495acd6)), closes [#1799](https://github.com/mozilla/fxa-auth-server/issues/1799)

### chore

- **deps:** update nexmo (#1899), r=@vbudhram ([362aa6b](https://github.com/mozilla/fxa-auth-server/commit/362aa6b))

### Features

- **emails:** enable secondary email for matching emails (#1896), r=@vbudhram ([ff78b04](https://github.com/mozilla/fxa-auth-server/commit/ff78b04))
- **mailer:** disable X-Mailer header in emails (#1881) r=vladikoff,philbooth ([4948a7e](https://github.com/mozilla/fxa-auth-server/commit/4948a7e))

<a name="1.86.0"></a>

# [1.86.0](https://github.com/mozilla/fxa-auth-server/compare/v1.85.1...v1.86.0) (2017-05-03)

### Bug Fixes

- **circle:** fix string comparison on docker push (#1870) r=vladikoff ([9f660d4](https://github.com/mozilla/fxa-auth-server/commit/9f660d4)), closes [#1870](https://github.com/mozilla/fxa-auth-server/issues/1870)
- **circle:** if branch master, tag is latest (#1869) r=vladikoff ([6462d6c](https://github.com/mozilla/fxa-auth-server/commit/6462d6c))
- **config:** Add config for unverified account to exist before secondary email can be create ([d0b5976](https://github.com/mozilla/fxa-auth-server/commit/d0b5976))
- **config:** Correctly resolve isSecondaryEmailEnabled and add more checks for config (#1872) ([ae95582](https://github.com/mozilla/fxa-auth-server/commit/ae95582)), closes [#1872](https://github.com/mozilla/fxa-auth-server/issues/1872)
- **mailer:** escape json output (#1853) r=vladikoff ([b06033e](https://github.com/mozilla/fxa-auth-server/commit/b06033e))
- **metrics:** include template name in sms.sent event ([2e9963c](https://github.com/mozilla/fxa-auth-server/commit/2e9963c))
- **notifier:** disable notifier in key_server.js (#1852) r=jrgm ([bb35ed2](https://github.com/mozilla/fxa-auth-server/commit/bb35ed2))
- **tests:** Add timeout for sms (#1866) r=vladikoff ([93bb872](https://github.com/mozilla/fxa-auth-server/commit/93bb872))

### chore

- **deps:** update shrinkwrap and latest eslint (#1868) ([10d5b56](https://github.com/mozilla/fxa-auth-server/commit/10d5b56))
- **docker:** Use official node image & update to Node.js v4.8.2 (#1840) r=vladikoff ([3d80e82](https://github.com/mozilla/fxa-auth-server/commit/3d80e82))
- **email:** Remove unused `emailSent` (#1846) r=vladikoff,philbooth ([a5ff7ca](https://github.com/mozilla/fxa-auth-server/commit/a5ff7ca))

### Features

- **deps:** update shrinkwrap ([5e80168](https://github.com/mozilla/fxa-auth-server/commit/5e80168))
- **devices:** return OS from user agent os (#1848) r=philbooth ([3fd0418](https://github.com/mozilla/fxa-auth-server/commit/3fd0418)), closes [#1829](https://github.com/mozilla/fxa-auth-server/issues/1829)
- **docker:** add feature branches (#1865) ([cb7e8c3](https://github.com/mozilla/fxa-auth-server/commit/cb7e8c3))
- **emails:** Add custom error for users logging in with secondary email (#1850), r=@vladikoff ([f509bcb](https://github.com/mozilla/fxa-auth-server/commit/f509bcb))
- **emails:** Throw unique error if initiating password reset from secondary email (#1874) r=v ([d1fae0d](https://github.com/mozilla/fxa-auth-server/commit/d1fae0d)), closes [mozilla/fxa-content-server#4996](https://github.com/mozilla/fxa-content-server/issues/4996)
- **emails:** Use new verification link, pass type, pass email verified (#1864), r=@vladikoff ([e7697e0](https://github.com/mozilla/fxa-auth-server/commit/e7697e0))
- **session:** add a 'state' property in `/session/status` ([a74a1f7](https://github.com/mozilla/fxa-auth-server/commit/a74a1f7))

### Refactor

- **server:** extract memcached usage to a dedicated module ([5698537](https://github.com/mozilla/fxa-auth-server/commit/5698537))
- **server:** remove separate notifier process (#1800) r=vbudhram ([7414ee8](https://github.com/mozilla/fxa-auth-server/commit/7414ee8))

<a name="1.85.1"></a>

## [1.85.1](https://github.com/mozilla/fxa-auth-server/compare/v1.85.0...v1.85.1) (2017-04-18)

### Bug Fixes

- **starup:** handle promise rejected on bind failure (#1838) r=vladikoff,seanmonstar ([7fd45e3](https://github.com/mozilla/fxa-auth-server/commit/7fd45e3))

<a name="1.85.0"></a>

# [1.85.0](https://github.com/mozilla/fxa-auth-server/compare/v1.84.2...v1.85.0) (2017-04-18)

### Bug Fixes

- **config:** bring back signin confirmation in dev (#1830) ([e9f8c23](https://github.com/mozilla/fxa-auth-server/commit/e9f8c23))
- **config:** change default BOUNCES_SOFT_DURATION to '5 minutes' (#1813) r=vladikoff ([9cb75ac](https://github.com/mozilla/fxa-auth-server/commit/9cb75ac))
- **config:** Merge auth and mailer configs (#1798), r=@philbooth ([64c96d6](https://github.com/mozilla/fxa-auth-server/commit/64c96d6))
- **config:** stop using envc; interferes with docker --env-file (#1833) r=vladikoff ([82bd9b5](https://github.com/mozilla/fxa-auth-server/commit/82bd9b5))
- **mailer:** bring back process ports for mailer_server.js (#1815) r=jrgm ([4a4df8e](https://github.com/mozilla/fxa-auth-server/commit/4a4df8e)), closes [#1814](https://github.com/mozilla/fxa-auth-server/issues/1814)
- **metrics:** fix metrics context errors ([fb5997e](https://github.com/mozilla/fxa-auth-server/commit/fb5997e))
- **promise:** log unhandled rejections instead of throwing (#1818) r=vladikoff ([adc6d3e](https://github.com/mozilla/fxa-auth-server/commit/adc6d3e))
- **routes:** Add a /**lbheartbeat** route. (#1807) r=vladikoff ([89f5cac](https://github.com/mozilla/fxa-auth-server/commit/89f5cac))
- **test:** remove obsolete test check (#1824) r=vladikoff ([c8dece9](https://github.com/mozilla/fxa-auth-server/commit/c8dece9))
- **tests:** add remote tests for POST /sms ([9ac11ac](https://github.com/mozilla/fxa-auth-server/commit/9ac11ac))
- **tests:** remove leftover ./test/.env.dev file (#1836) r=vladikoff ([646fa64](https://github.com/mozilla/fxa-auth-server/commit/646fa64))

### chore

- **config:** remove verifier version (#1834) ([e396ea6](https://github.com/mozilla/fxa-auth-server/commit/e396ea6))
- **docs:** add npm test LOG_LEVEL docs ([7631997](https://github.com/mozilla/fxa-auth-server/commit/7631997))

### Features

- **db:** update to latest db v1.85.0 (#1837) r=jrgm ([f1a02f0](https://github.com/mozilla/fxa-auth-server/commit/f1a02f0))
- **emails:** Add secondary emails api support Part 2 (#1768) r=vladikoff ([7ecad75](https://github.com/mozilla/fxa-auth-server/commit/7ecad75))

<a name="1.84.1"></a>

## [1.84.1](https://github.com/mozilla/fxa-auth-server/compare/v1.83.4...v1.84.1) (2017-04-05)

### Bug Fixes

- **locale:** Fix merge conflicts (#1794) ([5a7e4a7](https://github.com/mozilla/fxa-auth-server/commit/5a7e4a7)), closes [#1794](https://github.com/mozilla/fxa-auth-server/issues/1794)

<a name="1.83.4"></a>

## [1.83.4](https://github.com/mozilla/fxa-auth-server/compare/v1.84.0...v1.83.4) (2017-04-05)

### Bug Fixes

- **server:** remove crippled isLocaleAcceptable functionality (#1793), r=@vbudhram, @rfk ([748fcee](https://github.com/mozilla/fxa-auth-server/commit/748fcee))

<a name="1.84.4"></a>

## [1.84.4](https://github.com/mozilla/fxa-auth-server/compare/v1.84.3...v1.84.4) (2017-04-13)

### Bug Fixes

- **metrics:** fix metrics context errors ([7880d41](https://github.com/mozilla/fxa-auth-server/commit/7880d41))

<a name="1.84.3"></a>

## [1.84.3](https://github.com/mozilla/fxa-auth-server/compare/v1.84.2...v1.84.3) (2017-04-13)

### Bug Fixes

- **promise:** log unhandled rejections instead of throwing ([9f90711](https://github.com/mozilla/fxa-auth-server/commit/9f90711))
- **server:** set useDomains to true ([bf96223](https://github.com/mozilla/fxa-auth-server/commit/bf96223))

<a name="1.84.2"></a>

## [1.84.2](https://github.com/mozilla/fxa-auth-server/compare/v1.84.0...v1.84.2) (2017-04-11)

### Bug Fixes

- **config:** update the default SMS install link ([f82797c](https://github.com/mozilla/fxa-auth-server/commit/f82797c))
- **locale:** Fix merge conflicts (#1794) ([5406b56](https://github.com/mozilla/fxa-auth-server/commit/5406b56)), closes [#1794](https://github.com/mozilla/fxa-auth-server/issues/1794)

### Features

- **keys:** Add key id and created-at timestamp to our public keys. (#1734); r=seanmonstar ([59cdb4c](https://github.com/mozilla/fxa-auth-server/commit/59cdb4c))

<a name="1.84.1"></a>

## [1.84.1](https://github.com/mozilla/fxa-auth-server/compare/v1.84.0...v1.84.1) (2017-04-05)

### Bug Fixes

- **locale:** Fix merge conflicts (#1794) ([5406b56](https://github.com/mozilla/fxa-auth-server/commit/5406b56)), closes [#1794](https://github.com/mozilla/fxa-auth-server/issues/1794)

### Features

- **keys:** Add key id and created-at timestamp to our public keys. (#1734); r=seanmonstar ([59cdb4c](https://github.com/mozilla/fxa-auth-server/commit/59cdb4c))

<a name="1.84.0"></a>

# [1.84.0](https://github.com/mozilla/fxa-auth-server/compare/v1.83.3...v1.84.0) (2017-04-04)

### Bug Fixes

- **config:** environment expose verification reminder config ([3a71789](https://github.com/mozilla/fxa-auth-server/commit/3a71789))
- **config:** Graduate security history and ip profiling ([2b7e712](https://github.com/mozilla/fxa-auth-server/commit/2b7e712))
- **logging:** don't emit null or undefined uid on flow events ([23c58b9](https://github.com/mozilla/fxa-auth-server/commit/23c58b9))
- **push:** reject extra push-payloads properties instead of removing them ([c90719a](https://github.com/mozilla/fxa-auth-server/commit/c90719a))
- **script:** fix broken write email template script (#1775) r=vladikoff ([3697246](https://github.com/mozilla/fxa-auth-server/commit/3697246)), closes [#1775](https://github.com/mozilla/fxa-auth-server/issues/1775)
- **scripts:** fix the broken sms scripts (#1773), r=@vbudhram ([5c78f7f](https://github.com/mozilla/fxa-auth-server/commit/5c78f7f)), closes [#1773](https://github.com/mozilla/fxa-auth-server/issues/1773)
- **server:** recognise the new iOS client UA string ([72687c2](https://github.com/mozilla/fxa-auth-server/commit/72687c2))
- **tests:** add missing require statement (#1784), r=@vbudhram ([79488e4](https://github.com/mozilla/fxa-auth-server/commit/79488e4))

### chore

- **ci:** kill the broken cross-repo tests (#1723) r=vladikoff ([6b310a1](https://github.com/mozilla/fxa-auth-server/commit/6b310a1))
- **config:** Added environment variable support for verificationReminders.pollTime ([c77df31](https://github.com/mozilla/fxa-auth-server/commit/c77df31))
- **docs:** document the flow_experiments table (#1780), r=@vbudhram ([ef2878e](https://github.com/mozilla/fxa-auth-server/commit/ef2878e))
- **docs:** update node version in docs ([9c49c5f](https://github.com/mozilla/fxa-auth-server/commit/9c49c5f))
- **files:** remove vagrant config ([48f3ee9](https://github.com/mozilla/fxa-auth-server/commit/48f3ee9))
- **test:** fix mail_helper to run if require.main is mail_helper (#1763) ([a77c591](https://github.com/mozilla/fxa-auth-server/commit/a77c591)), closes [#1763](https://github.com/mozilla/fxa-auth-server/issues/1763) [#1762](https://github.com/mozilla/fxa-auth-server/issues/1762)
- **tests:** move test/local/lib/\* up to test/local/ (#1790) r=vladikoff ([597371c](https://github.com/mozilla/fxa-auth-server/commit/597371c))

### Features

- **emails:** Mailer accept multiple emails Part 1 (#1767), r=@philbooth ([b06b0da](https://github.com/mozilla/fxa-auth-server/commit/b06b0da))
- **metrics:** emit a flow event for the sms region ([b062d79](https://github.com/mozilla/fxa-auth-server/commit/b062d79))
- **profile:** send push notifications after a profile update ([2e83420](https://github.com/mozilla/fxa-auth-server/commit/2e83420))
- **sms:** Mock out Nexmo for functional tests. ([e8a932d](https://github.com/mozilla/fxa-auth-server/commit/e8a932d))
- **sms:** return country code from /sms/status ([e9ed457](https://github.com/mozilla/fxa-auth-server/commit/e9ed457))

### Refactor

- **bounces:** pull bounce logic into separate module ([48d7625](https://github.com/mozilla/fxa-auth-server/commit/48d7625))
- **db:** remove unnecessary dependency injection for DB ([cbad916](https://github.com/mozilla/fxa-auth-server/commit/cbad916))
- **routes:** remove unnecessary dependency injection in routes ([a6b97a7](https://github.com/mozilla/fxa-auth-server/commit/a6b97a7))
- **token:** remove ability to pass createdAt to Token.create ([dac8f64](https://github.com/mozilla/fxa-auth-server/commit/dac8f64))
- **tokens:** reduce unnecessary dependency injection in Tokens ([a393413](https://github.com/mozilla/fxa-auth-server/commit/a393413))

### test

- **mailer:** simplify TestServer using in mailer remote tests ([93da89b](https://github.com/mozilla/fxa-auth-server/commit/93da89b))
- **remote:** refactor to run remote tests in a single process ([8d5c1ed](https://github.com/mozilla/fxa-auth-server/commit/8d5c1ed))

<a name="1.83.4"></a>

## [1.83.4](https://github.com/mozilla/fxa-auth-server/compare/v1.83.3...v1.83.4) (2017-04-05)

### Bug Fixes

- **server:** remove crippled isLocaleAcceptable functionality (#1793), r=@vbudhram, @rfk ([748fcee](https://github.com/mozilla/fxa-auth-server/commit/748fcee))

<a name="1.83.3"></a>

## [1.83.3](https://github.com/mozilla/fxa-auth-server/compare/v1.83.2...v1.83.3) (2017-03-28)

### Bug Fixes

- **sms:** propagate countryCode through our fxa-geodb wrapper ([176c63e](https://github.com/mozilla/fxa-auth-server/commit/176c63e))

<a name="1.83.1"></a>

## [1.83.1](https://github.com/mozilla/fxa-auth-server/compare/v1.83.0...v1.83.1) (2017-03-21)

### Features

- **email:** Pass correct args to verify_email (#1754), r=@philbooth ([1fc8617](https://github.com/mozilla/fxa-auth-server/commit/1fc8617))

<a name="1.83.0"></a>

# [1.83.0](https://github.com/mozilla/fxa-auth-server/compare/v1.82.2...v1.83.0) (2017-03-21)

### Bug Fixes

- **config:** sync up both auth and mailer configs (#58) r=jrgm ([ac1e208](https://github.com/mozilla/fxa-auth-server/commit/ac1e208))
- **config:** Use a more generic server url pattern for push registrations. ([3099acc](https://github.com/mozilla/fxa-auth-server/commit/3099acc))
- **docker:** prevent duplicate installation of dev dependencies (#1730) r=vladikoff ([ef8f1c1](https://github.com/mozilla/fxa-auth-server/commit/ef8f1c1))
- **docs:** fix broken links in metrics events docs (#1738) r=vladikoff ([a843f74](https://github.com/mozilla/fxa-auth-server/commit/a843f74)), closes [#1738](https://github.com/mozilla/fxa-auth-server/issues/1738)
- **errors:** fix misleading error string for featureNotEnabled ([1c8511a](https://github.com/mozilla/fxa-auth-server/commit/1c8511a))
- **mailer:** fix sender from field. uplift ([ba6a8de](https://github.com/mozilla/fxa-auth-server/commit/ba6a8de))
- **mailer:** fix sender from field. uplift ([461c52f](https://github.com/mozilla/fxa-auth-server/commit/461c52f))
- **metrics:** log locale instead of accept languages on flow events ([2a5d3d0](https://github.com/mozilla/fxa-auth-server/commit/2a5d3d0))
- **metrics:** suppress route flow events if metrics context is invalid ([c2dc6fc](https://github.com/mozilla/fxa-auth-server/commit/c2dc6fc))
- **push:** fix push payload validation and disallow additional props (#57) r=vladikoff ([32750a2](https://github.com/mozilla/fxa-auth-server/commit/32750a2)), closes [#57](https://github.com/mozilla/fxa-auth-server/issues/57)
- **scripts:** mend the broken write-emails-to-disk script (#1701) r=vladikoff,vbudhram ([56a6538](https://github.com/mozilla/fxa-auth-server/commit/56a6538))
- **sessions:** improve tests and fix incorrect buffer conversion (#1708) r=vbuhdram ([bbdaa64](https://github.com/mozilla/fxa-auth-server/commit/bbdaa64)), closes [#1708](https://github.com/mozilla/fxa-auth-server/issues/1708)
- **sms:** ditch the silly ad-hoc config file for sender ids ([4cd6f9e](https://github.com/mozilla/fxa-auth-server/commit/4cd6f9e))
- **tests:** fix bad assertion in mailer tests ([fb916c2](https://github.com/mozilla/fxa-auth-server/commit/fb916c2))
- **tests:** invoke mocha recursively on test directories ([1a907f7](https://github.com/mozilla/fxa-auth-server/commit/1a907f7))
- **tokens:** Don't override createdAt when deserializing an existing token. (#1744); r=philbo ([3be60f3](https://github.com/mozilla/fxa-auth-server/commit/3be60f3))
- **tokens:** ensure account reset tokens get a fresh createdAt ([efed703](https://github.com/mozilla/fxa-auth-server/commit/efed703))
- **version:** use cwd and env var to get version in dev ([a456c76](https://github.com/mozilla/fxa-auth-server/commit/a456c76))

### chore

- **config:** change SMS region config from regex to array (#1743) r=vladikoff ([33041e9](https://github.com/mozilla/fxa-auth-server/commit/33041e9))
- **docs:** add circle badge (#1703) ([5a1561b](https://github.com/mozilla/fxa-auth-server/commit/5a1561b))
- **docs:** update the metrics documentation (#1732), r=@vbudhram ([917d7d8](https://github.com/mozilla/fxa-auth-server/commit/917d7d8))

### Features

- **db:** make database fault tolerant of db server (#1716) r=vladikoff ([5138ad7](https://github.com/mozilla/fxa-auth-server/commit/5138ad7))
- **docker:** add docker support with circle-ci (#1692) r=vladikoff,jbuck ([4fbc25f](https://github.com/mozilla/fxa-auth-server/commit/4fbc25f))
- **logging:** Use correct logging format (#60) r=vladikoff ([1932afe](https://github.com/mozilla/fxa-auth-server/commit/1932afe))
- **mailer:** check for hard bounced or complaints before sending emails ([51f85ce](https://github.com/mozilla/fxa-auth-server/commit/51f85ce))
- **metrics:** Log metrics event for sending a tab between devices. (#1700); r=pb,vbudhram,sean ([e2942c2](https://github.com/mozilla/fxa-auth-server/commit/e2942c2))
- **sessions:** add /sessions support (#1617) r=vbudhram ([d79f63a](https://github.com/mozilla/fxa-auth-server/commit/d79f63a))

### Refactor

- **logging:** Log email domain if popular otherwise log `other` (#1666), r=@rfk, @vladikoff ([357d2f7](https://github.com/mozilla/fxa-auth-server/commit/357d2f7))
- **logging:** Log email domain if popular otherwise log `other` (#1666), r=@rfk, @vladikoff (# ([37d6569](https://github.com/mozilla/fxa-auth-server/commit/37d6569))
- **routes:** remove preVerifyToken support (#1690) r=rfk ([e440d8f](https://github.com/mozilla/fxa-auth-server/commit/e440d8f)), closes [#1599](https://github.com/mozilla/fxa-auth-server/issues/1599)

<a name="1.82.7"></a>

## [1.82.7](https://github.com/mozilla/fxa-auth-server/compare/v1.82.6-private...v1.82.7) (2017-03-17)

### Features

- **logging:** Use correct logging format (#60) r=vladikoff ([1932afe](https://github.com/mozilla/fxa-auth-server/commit/1932afe))

<a name="1.82.6"></a>

## [1.82.6](https://github.com/mozilla/fxa-auth-server/compare/v1.82.5-private...v1.82.6) (2017-03-17)

### Refactor

- **logging:** Log email domain if popular otherwise log `other` (#1666), r=@rfk, @vladikoff (# ([37d6569](https://github.com/mozilla/fxa-auth-server/commit/37d6569))

<a name="1.82.5"></a>

## [1.82.5](https://github.com/mozilla/fxa-auth-server/compare/v1.82.4-private...v1.82.5) (2017-03-16)

### Bug Fixes

- **config:** sync up both auth and mailer configs (#58) r=jrgm ([ac1e208](https://github.com/mozilla/fxa-auth-server/commit/ac1e208))

<a name="1.82.4"></a>

## [1.82.4](https://github.com/mozilla/fxa-auth-server/compare/v1.82.3-private...v1.82.4) (2017-03-11)

### Bug Fixes

- **mailer:** fix sender from field. uplift ([ba6a8de](https://github.com/mozilla/fxa-auth-server/commit/ba6a8de))

<a name="1.82.3"></a>

## [1.82.3](https://github.com/mozilla/fxa-auth-server/compare/v1.82.2...v1.82.3) (2017-03-08)

### Bug Fixes

- **push:** fix push payload validation and disallow additional props (#57) r=vladikoff ([32750a2](https://github.com/mozilla/fxa-auth-server/commit/32750a2)), closes [#57](https://github.com/mozilla/fxa-auth-server/issues/57)

<a name="1.82.2"></a>

## [1.82.2](https://github.com/mozilla/fxa-auth-server/compare/v1.82.1...v1.82.2) (2017-03-08)

### Features

- **metrics:** Log metrics event for sending a tab between devices. (#1700); r=pb,vbudhram,sean ([55bba26](https://github.com/mozilla/fxa-auth-server/commit/55bba26))

<a name="1.82.1"></a>

## [1.82.1](https://github.com/mozilla/fxa-auth-server/compare/v1.82.0...v1.82.1) (2017-03-06)

### Bug Fixes

- **push:** add extra validation to pushCallback payload param (#1698) r=rfk ([9fd2ca3](https://github.com/mozilla/fxa-auth-server/commit/9fd2ca3))

<a name="1.82.0"></a>

# [1.82.0](https://github.com/mozilla/fxa-auth-server/compare/v1.81.0...v1.82.0) (2017-03-06)

### Bug Fixes

- **config:** change reminder poll for many servers (#257), r=@vbudhram ([a721920](https://github.com/mozilla/fxa-auth-server/commit/a721920))
- **db:** update to latest db ([3a6101f](https://github.com/mozilla/fxa-auth-server/commit/3a6101f))
- **dependencies:** update bluebird, nodemailer, convict, moment-timezone (#251) r=vladikoff ([02fbda3](https://github.com/mozilla/fxa-auth-server/commit/02fbda3))
- **git:** update husky to unbreak git hooks on ubuntu (#258) r=vladikoff ([83e9458](https://github.com/mozilla/fxa-auth-server/commit/83e9458))
- **merge:** update shrinkwrap and library refs ([f32a867](https://github.com/mozilla/fxa-auth-server/commit/f32a867))
- **project:** move mailer files into proper directories (#1676) r=vladikoff ([d09759c](https://github.com/mozilla/fxa-auth-server/commit/d09759c))
- **push:** don't wait on push methods to reply in account/devices/notify r=vladikoff ([09e2e00](https://github.com/mozilla/fxa-auth-server/commit/09e2e00)), closes [#1657](https://github.com/mozilla/fxa-auth-server/issues/1657)

### chore

- **ci:** clean up travis ci files and docs ([4e1bab6](https://github.com/mozilla/fxa-auth-server/commit/4e1bab6))
- **deps:** update bluebird (#1688) r=vladikoff ([838b602](https://github.com/mozilla/fxa-auth-server/commit/838b602))
- **deps:** update to latest db-mysql ([31f8d6b](https://github.com/mozilla/fxa-auth-server/commit/31f8d6b))
- **docs:** add coverage badge ([6f49d99](https://github.com/mozilla/fxa-auth-server/commit/6f49d99))
- **docs:** remove extra AUTHORS file ([404fdec](https://github.com/mozilla/fxa-auth-server/commit/404fdec))
- **docs:** update docs, AUTHORS ([c71e577](https://github.com/mozilla/fxa-auth-server/commit/c71e577))
- **docs:** update mailer docs ([87d97e2](https://github.com/mozilla/fxa-auth-server/commit/87d97e2))
- **git:** move repo into subdir ([458cc46](https://github.com/mozilla/fxa-auth-server/commit/458cc46))
- **scripts:** install mailer during install ([8f647a4](https://github.com/mozilla/fxa-auth-server/commit/8f647a4))
- **style:** update eslint styles and .gitignore ([df8070a](https://github.com/mozilla/fxa-auth-server/commit/df8070a))

### Features

- **logs:** disable statsd reporting in config (#1673), r=@vbudhram ([0c52a7c](https://github.com/mozilla/fxa-auth-server/commit/0c52a7c))
- **mailer:** add support for sending SMS messages ([3bc1027](https://github.com/mozilla/fxa-auth-server/commit/3bc1027))
- **server:** implement GET /sms/status ([34f4390](https://github.com/mozilla/fxa-auth-server/commit/34f4390))

### Refactor

- **sms:** swap out ad hoc error structures for lib/error (#1696) r=vladikoff ([388fd50](https://github.com/mozilla/fxa-auth-server/commit/388fd50))

<a name="1.81.0"></a>

# [1.81.0](https://github.com/mozilla/fxa-auth-server/compare/v1.80.0...v1.81.0) (2017-02-22)

### Bug Fixes

- **dev:** disable ip profile in dev (#1643) r=vbudhram ([d9b6bd9](https://github.com/mozilla/fxa-auth-server/commit/d9b6bd9))
- **docs:** Document that devices should reigster before attempting to sync. (#1667); r=phil ([496be0e](https://github.com/mozilla/fxa-auth-server/commit/496be0e))
- **docs:** document the /sms endpoint ([7226ce0](https://github.com/mozilla/fxa-auth-server/commit/7226ce0))
- **logging:** log errors when we encounter unexpected createdAt values ([a3d4f56](https://github.com/mozilla/fxa-auth-server/commit/a3d4f56))
- **push:** notify a device connected only when account verified ([901525b](https://github.com/mozilla/fxa-auth-server/commit/901525b)), closes [#1651](https://github.com/mozilla/fxa-auth-server/issues/1651)
- **server:** disallow any query or payload params without validation (#1668) r=vladikoff ([0acab56](https://github.com/mozilla/fxa-auth-server/commit/0acab56))
- **sms:** make the fallback error case work sanely ([3eff2d3](https://github.com/mozilla/fxa-auth-server/commit/3eff2d3))
- **tests:** add missing tests for log.begin and log.summary calls ([e1265ff](https://github.com/mozilla/fxa-auth-server/commit/e1265ff))

### chore

- **docs:** Add some more details on metrics db column contents. ([06913c6](https://github.com/mozilla/fxa-auth-server/commit/06913c6))

### Features

- **api:** add an endpoint for sending SMS messages ([d35d442](https://github.com/mozilla/fxa-auth-server/commit/d35d442))
- **email:** record email bounces in database ([b4279c1](https://github.com/mozilla/fxa-auth-server/commit/b4279c1))
- **logging:** add optional uid and locale to flow event data ([038d457](https://github.com/mozilla/fxa-auth-server/commit/038d457))
- **server:** auto-unbuffer binary data when crossing API boundaries ([35115f9](https://github.com/mozilla/fxa-auth-server/commit/35115f9))

### Refactor

- **server:** unify the unbuffering functions to one place ([a649b78](https://github.com/mozilla/fxa-auth-server/commit/a649b78))
- **unblock:** Graduate sign-in unblock ([5f07f22](https://github.com/mozilla/fxa-auth-server/commit/5f07f22))

### style

- **lib:** update let to const when possible ([29c9f39](https://github.com/mozilla/fxa-auth-server/commit/29c9f39))

<a name="1.80.0"></a>

# [1.80.0](https://github.com/mozilla/fxa-auth-server/compare/v1.78.0...v1.80.0) (2017-02-07)

### Bug Fixes

- **docs:** document recent flow event changes (#1630), r=@vbudhram ([e5eaccf](https://github.com/mozilla/fxa-auth-server/commit/e5eaccf))
- **email:** turn on SES Event Publishing metrics ([9105f87](https://github.com/mozilla/fxa-auth-server/commit/9105f87))
- **logging:** Log bounced complaint ([0fa378e](https://github.com/mozilla/fxa-auth-server/commit/0fa378e))
- **logging:** Log templates that don't have flow event data (#1618), r=@philbooth ([e6a1b87](https://github.com/mozilla/fxa-auth-server/commit/e6a1b87))
- **push:** Try to always send a deviceName in the 'device connected' push message. (#1633); ([2b4777a](https://github.com/mozilla/fxa-auth-server/commit/2b4777a))
- **shrinkwrap:** update shrinkwrap to latest version ([1a709fa](https://github.com/mozilla/fxa-auth-server/commit/1a709fa))
- **style:** adjust config code style issue ([bb5f5d0](https://github.com/mozilla/fxa-auth-server/commit/bb5f5d0))

### chore

- **mailer:** update fxa-auth-mailer (and other shrinkwrap) (#1620) ([04aa467](https://github.com/mozilla/fxa-auth-server/commit/04aa467))
- **travis:** add node6 test target (#1632) r=vladikoff ([05f9dd6](https://github.com/mozilla/fxa-auth-server/commit/05f9dd6))

### Features

- **ci:** add config for cross-repo testing ([81428f3](https://github.com/mozilla/fxa-auth-server/commit/81428f3))
- **docs:** document the fix for duplicate flow events (#1634) r=vladikoff ([da5edc5](https://github.com/mozilla/fxa-auth-server/commit/da5edc5)), closes [#1634](https://github.com/mozilla/fxa-auth-server/issues/1634)
- **email:** Add flow events for email delivery notifications (#1626), r=@philbooth ([2e84e07](https://github.com/mozilla/fxa-auth-server/commit/2e84e07))
- **ip-profiling:** make IP Profiling allowed recency use config (#1615), r=@vbudhram ([ca4419a](https://github.com/mozilla/fxa-auth-server/commit/ca4419a)), closes [#1614](https://github.com/mozilla/fxa-auth-server/issues/1614)
- **logs:** log endpoint errors for better debugging (#1627) r=vbudhram,philbooth ([3719437](https://github.com/mozilla/fxa-auth-server/commit/3719437))

### Refactor

- **email:** Don't flag logins with incorrect email case (#1623). r=@rfk ([88cd267](https://github.com/mozilla/fxa-auth-server/commit/88cd267))
- **tests:** Reorganize local tests (#1629) r=vladikoff,philbooth ([38d4957](https://github.com/mozilla/fxa-auth-server/commit/38d4957))

<a name="1.79.0"></a>

# [1.79.0](https://github.com/mozilla/fxa-auth-server/compare/v1.78.0...v1.79.0) (2017-01-30)

### Bug Fixes

- **email:** turn on SES Event Publishing metrics ([9105f87](https://github.com/mozilla/fxa-auth-server/commit/9105f87))
- **logging:** Log bounced complaint ([0fa378e](https://github.com/mozilla/fxa-auth-server/commit/0fa378e))
- **logging:** Log templates that don't have flow event data (#1618), r=@philbooth ([e6a1b87](https://github.com/mozilla/fxa-auth-server/commit/e6a1b87))

### chore

- **mailer:** update fxa-auth-mailer (and other shrinkwrap) (#1620) ([04aa467](https://github.com/mozilla/fxa-auth-server/commit/04aa467))

### Features

- **ci:** add config for cross-repo testing ([81428f3](https://github.com/mozilla/fxa-auth-server/commit/81428f3))
- **email:** Add flow events for email delivery notifications (#1626), r=@philbooth ([2e84e07](https://github.com/mozilla/fxa-auth-server/commit/2e84e07))
- **ip-profiling:** make IP Profiling allowed recency use config (#1615), r=@vbudhram ([ca4419a](https://github.com/mozilla/fxa-auth-server/commit/ca4419a)), closes [#1614](https://github.com/mozilla/fxa-auth-server/issues/1614)
- **logs:** log endpoint errors for better debugging (#1627) r=vbudhram,philbooth ([3719437](https://github.com/mozilla/fxa-auth-server/commit/3719437))

### Refactor

- **email:** Don't flag logins with incorrect email case (#1623). r=@rfk ([88cd267](https://github.com/mozilla/fxa-auth-server/commit/88cd267))
- **tests:** Reorganize local tests (#1629) r=vladikoff,philbooth ([38d4957](https://github.com/mozilla/fxa-auth-server/commit/38d4957))

<a name="1.78.2"></a>

## [1.78.2](https://github.com/mozilla/fxa-auth-server/compare/v1.78.1...v1.78.2) (2017-01-18)

<a name="1.78.1"></a>

## [1.78.1](https://github.com/mozilla/fxa-auth-server/compare/v1.78.0...v1.78.1) (2017-01-12)

### Bug Fixes

- **tokens:** Do not override the `createdAt` field on existing tokens. ([af0eb33](https://github.com/mozilla/fxa-auth-server/commit/af0eb33))

<a name="1.78.0"></a>

# [1.78.0](https://github.com/mozilla/fxa-auth-server/compare/v1.77.0...v1.78.0) (2017-01-11)

### Bug Fixes

- **logging:** handle /v1 path prefix in route summary flow events ([686306e](https://github.com/mozilla/fxa-auth-server/commit/686306e))

### Refactor

- **logging:** remove request argument from log methods ([a8f8c4a](https://github.com/mozilla/fxa-auth-server/commit/a8f8c4a))

<a name="1.77.0"></a>

# [1.77.0](https://github.com/mozilla/fxa-auth-server/compare/v1.76.1...v1.77.0) (2017-01-04)

### Bug Fixes

- **customs:** Mark suspicious requests, even if they were rate-limited. ([02e8f19](https://github.com/mozilla/fxa-auth-server/commit/02e8f19))
- **docs:** add unblock code API docs ([3655cfd](https://github.com/mozilla/fxa-auth-server/commit/3655cfd)), closes [#1577](https://github.com/mozilla/fxa-auth-server/issues/1577)
- **emails:** remove /v1/ api prefix (#1605); r=rfk ([5e99cf3](https://github.com/mozilla/fxa-auth-server/commit/5e99cf3)), closes [#1605](https://github.com/mozilla/fxa-auth-server/issues/1605) [#1059](https://github.com/mozilla/fxa-auth-server/issues/1059)
- **unblock:** Use normalized email address for feature-flag calculation. ([83ef76a](https://github.com/mozilla/fxa-auth-server/commit/83ef76a))

### Refactor

- **server:** eliminate duplicate calls to user-agent parser ([4ac625c](https://github.com/mozilla/fxa-auth-server/commit/4ac625c))
- **signin:** Add support for sending flow metrics in email (#1593); r=pb,vladikoff ([6955261](https://github.com/mozilla/fxa-auth-server/commit/6955261))
- **signin:** Extract unblock-code-checking into a separate helper function. ([0c4beb7](https://github.com/mozilla/fxa-auth-server/commit/0c4beb7))
- **signin:** Use new verify account sync template and add location data to others (#1600), r= ([6fc0c50](https://github.com/mozilla/fxa-auth-server/commit/6fc0c50))

<a name="1.76.1"></a>

## [1.76.1](https://github.com/mozilla/fxa-auth-server/compare/v1.76.0...v1.76.1) (2016-12-21)

### Bug Fixes

- **logging:** silence spurious "missing token" error noise ([f8f8a21](https://github.com/mozilla/fxa-auth-server/commit/f8f8a21))
- **pool:** Reject with an Error instance for HTTP errors. ([60c15c8](https://github.com/mozilla/fxa-auth-server/commit/60c15c8))

### Refactor

- **signin:** Skip sign-in confirmation depending on account age (#1591), r=@seanmonstar, @rfk ([1d1fa41](https://github.com/mozilla/fxa-auth-server/commit/1d1fa41))

<a name="1.76.0"></a>

# [1.76.0](https://github.com/mozilla/fxa-auth-server/compare/v1.75.2...v1.76.0) (2016-12-14)

### Bug Fixes

- **server:** remove redundant metrics context fields ([f027f0b](https://github.com/mozilla/fxa-auth-server/commit/f027f0b))
- **server:** tolerate missing payload in AppError.translate ([a19ff6d](https://github.com/mozilla/fxa-auth-server/commit/a19ff6d))
- **signup:** Return canonical email address in 'account exists' error. (#1589), r=@vbudhram ([ddd4fdb](https://github.com/mozilla/fxa-auth-server/commit/ddd4fdb))

<a name="1.75.2"></a>

## [1.75.2](https://github.com/mozilla/fxa-auth-server/compare/v1.75.1...v1.75.2) (2016-12-05)

### Bug Fixes

- **docs:** add links to prs under "significant changes" (#1582) r=vladikoff ([1d49428](https://github.com/mozilla/fxa-auth-server/commit/1d49428))
- **server:** make account.reset a flow event ([ed9ec79](https://github.com/mozilla/fxa-auth-server/commit/ed9ec79))
- **unblock:** Remove 'context' check from unblock feature-flag. ([764c96a](https://github.com/mozilla/fxa-auth-server/commit/764c96a))

### chore

- **login:** Remove the legacy `contentToken` parameter from login ([505b627](https://github.com/mozilla/fxa-auth-server/commit/505b627))

<a name="1.75.1"></a>

## [1.75.1](https://github.com/mozilla/fxa-auth-server/compare/v1.75.0...v1.75.1) (2016-12-02)

<a name="1.75.0"></a>

# [1.75.0](https://github.com/mozilla/fxa-auth-server/compare/v1.74.1...v1.75.0) (2016-11-30)

### Bug Fixes

- **bypass:** Don't bypass sign-in confirmation for forced emails (#1554), r=@seanmonstar ([1fa95a9](https://github.com/mozilla/fxa-auth-server/commit/1fa95a9))
- **customs:** Sanitize 'oldAuthPW' field when sending to customs ([76aad23](https://github.com/mozilla/fxa-auth-server/commit/76aad23))
- **devices:** add special-case recognition of Firefox-iOS (#1558) r=vladikoff ([1d1d16b](https://github.com/mozilla/fxa-auth-server/commit/1d1d16b))
- **docs:** document recent fix that affects flow events (#1560), r=@vbudhram ([70ff376](https://github.com/mozilla/fxa-auth-server/commit/70ff376)), closes [#1560](https://github.com/mozilla/fxa-auth-server/issues/1560)
- **docs:** document recent flow event changes ([7c97bb8](https://github.com/mozilla/fxa-auth-server/commit/7c97bb8))
- **error:** Include more specific error messages in invalidToken(). ([b38bace](https://github.com/mozilla/fxa-auth-server/commit/b38bace))
- **logging:** remove raw token data from error log (#1572) r=vladikoff ([f9112d1](https://github.com/mozilla/fxa-auth-server/commit/f9112d1))
- **server:** propagate metrics context in /account/reset ([30ec03d](https://github.com/mozilla/fxa-auth-server/commit/30ec03d))
- **tests:** Test fixes for upcoming change to db-mysql behaviour (#1552); r=vladikoff ([8cd0a8e](https://github.com/mozilla/fxa-auth-server/commit/8cd0a8e)), closes [#1552](https://github.com/mozilla/fxa-auth-server/issues/1552)

### chore

- **debug:** Expose debug port for spawned process (#1550) r=vladikoff ([767d53d](https://github.com/mozilla/fxa-auth-server/commit/767d53d))
- **shrinkwrap:** add npm script for shrinkwrap (#1568) r=vladikoff ([3be3e63](https://github.com/mozilla/fxa-auth-server/commit/3be3e63)), closes [#1564](https://github.com/mozilla/fxa-auth-server/issues/1564)
- **tests:** Make remote db tests independent ([d3635e3](https://github.com/mozilla/fxa-auth-server/commit/d3635e3))
- **travis:** remove the old tmp workaround ([5032982](https://github.com/mozilla/fxa-auth-server/commit/5032982))

### Features

- **metrics:** log flowEvents of all requests ([7153da7](https://github.com/mozilla/fxa-auth-server/commit/7153da7))
- **signin:** Remove feature flag from sign-in confirmation. (#1530); r=vbudhram ([5f0f3ba](https://github.com/mozilla/fxa-auth-server/commit/5f0f3ba))

<a name="1.74.1"></a>

## [1.74.1](https://github.com/mozilla/fxa-auth-server/compare/v1.74.0...v1.74.1) (2016-11-16)

### Bug Fixes

- **unblock:** rethrow customs server error when account is unknown ([b5bda6b](https://github.com/mozilla/fxa-auth-server/commit/b5bda6b))

<a name="1.74.0"></a>

# [1.74.0](https://github.com/mozilla/fxa-auth-server/compare/v1.73.1...v1.74.0) (2016-11-15)

### Bug Fixes

- **docs:** document the recent flow event changes ([0a31229](https://github.com/mozilla/fxa-auth-server/commit/0a31229))
- **logging:** drop invalid metrics context data ([97ad615](https://github.com/mozilla/fxa-auth-server/commit/97ad615))

### chore

- **cleanup:** Remove signer-stub.js (#1541), r=@seanmonstar ([edcc433](https://github.com/mozilla/fxa-auth-server/commit/edcc433))

### Features

- **metrics:** Emit an `account.changedPassword` activity event. ([37c408d](https://github.com/mozilla/fxa-auth-server/commit/37c408d))
- **profiling:** IP Profiling (#1525), r=@seanmonstar ([21723e8](https://github.com/mozilla/fxa-auth-server/commit/21723e8))
- **unblock:** log when an unverfied user successfully unblocked ([b9a7111](https://github.com/mozilla/fxa-auth-server/commit/b9a7111))

### test

- **all:** switch tap runner for mocha ([6c815d0](https://github.com/mozilla/fxa-auth-server/commit/6c815d0))

<a name="1.73.1"></a>

## [1.73.1](https://github.com/mozilla/fxa-auth-server/compare/v1.73.0...v1.73.1) (2016-11-07)

### Bug Fixes

- **reminders:** fix disabled state (#1536) r=vbudhram ([d01e115](https://github.com/mozilla/fxa-auth-server/commit/d01e115)), closes [#1536](https://github.com/mozilla/fxa-auth-server/issues/1536) [#1408](https://github.com/mozilla/fxa-auth-server/issues/1408)

<a name="1.73.0"></a>

# [1.73.0](https://github.com/mozilla/fxa-auth-server/compare/v1.72.0...v1.73.0) (2016-11-02)

### Bug Fixes

- **lib:** make all calls to crypto.randomBytes async ([9f59235](https://github.com/mozilla/fxa-auth-server/commit/9f59235)), closes [#1474](https://github.com/mozilla/fxa-auth-server/issues/1474)
- **push:** do not throw if push fails on the notify endpoint ([90b37d5](https://github.com/mozilla/fxa-auth-server/commit/90b37d5)), closes [#1510](https://github.com/mozilla/fxa-auth-server/issues/1510)
- **unblock:** Fix db.createUnblockCode - code generation is async. ([2d1a6a2](https://github.com/mozilla/fxa-auth-server/commit/2d1a6a2)), closes [#1531](https://github.com/mozilla/fxa-auth-server/issues/1531)

### Features

- **docs:** document the event data available in redshift/redash ([9611019](https://github.com/mozilla/fxa-auth-server/commit/9611019))
- **logging:** emit a flow.complete event ([44e044b](https://github.com/mozilla/fxa-auth-server/commit/44e044b))
- **metrics:** add account.login.blocked flow event ([15cd8d8](https://github.com/mozilla/fxa-auth-server/commit/15cd8d8))
- **metrics:** add account.login.invalidUnblockCode flow event ([2e3ea80](https://github.com/mozilla/fxa-auth-server/commit/2e3ea80))
- **metrics:** add flow events for email sent and clicked" ([d903b6c](https://github.com/mozilla/fxa-auth-server/commit/d903b6c)), closes [#1511](https://github.com/mozilla/fxa-auth-server/issues/1511)
- **metrics:** Add password reset flow metrics (#1520), r=@philbooth ([145d537](https://github.com/mozilla/fxa-auth-server/commit/145d537))
- **metrics:** set metricsContext expiry to 2 hours ([2f03ce5](https://github.com/mozilla/fxa-auth-server/commit/2f03ce5)), closes [#1513](https://github.com/mozilla/fxa-auth-server/issues/1513)
- **unblock:** change unblock codes to base32 (#1529) r=vladikoff ([f82db02](https://github.com/mozilla/fxa-auth-server/commit/f82db02)), closes [#1497](https://github.com/mozilla/fxa-auth-server/issues/1497)

### style

- **error:** order ERRNO constant numerically ([2f6b203](https://github.com/mozilla/fxa-auth-server/commit/2f6b203)), closes [#1518](https://github.com/mozilla/fxa-auth-server/issues/1518)

### test

- **lint:** add lint for synchronous randomBytes usage ([f4d02a1](https://github.com/mozilla/fxa-auth-server/commit/f4d02a1))

<a name="1.72.0"></a>

# [1.72.0](https://github.com/mozilla/fxa-auth-server/compare/v1.71.1...v1.72.0) (2016-10-19)

### Bug Fixes

- **deps:** Update shrinkwrap for the new auth-mailer ([05da657](https://github.com/mozilla/fxa-auth-server/commit/05da657))
- **logging:** device.created is not a flow event ([82e579c](https://github.com/mozilla/fxa-auth-server/commit/82e579c))
- **logging:** emit flow events for sign-in unblock, not activity events (#1508); r=seanmonstar ([9a4e89c](https://github.com/mozilla/fxa-auth-server/commit/9a4e89c))
- **node6:** update to scrypt-hash@1.1.14 for node6 compat (#1494) r=vladikoff ([aee737c](https://github.com/mozilla/fxa-auth-server/commit/aee737c))
- **push:** Add metrics events for reason=accountConfirm ([d2dc5c0](https://github.com/mozilla/fxa-auth-server/commit/d2dc5c0))
- **scripts:** nicely stringify regexps when logging config ([479b034](https://github.com/mozilla/fxa-auth-server/commit/479b034))

### Features

- **hpkp:** Add hpkp support (#1499), r=@philbooth ([9b77446](https://github.com/mozilla/fxa-auth-server/commit/9b77446))
- **push:** Add VAPID identification to push messages. (#1468); r=philbooth ([6e6b28c](https://github.com/mozilla/fxa-auth-server/commit/6e6b28c))
- **unblock:** add Signin Unblock feature ([c3a66c2](https://github.com/mozilla/fxa-auth-server/commit/c3a66c2)), closes [#1398](https://github.com/mozilla/fxa-auth-server/issues/1398)

### Refactor

- **email:** Fix lint ([383198a](https://github.com/mozilla/fxa-auth-server/commit/383198a))
- **email:** Remove `sendEmailIfUnverified` ([d742d67](https://github.com/mozilla/fxa-auth-server/commit/d742d67))
- **logging:** decorate request object with metricsContext methods ([16cf030](https://github.com/mozilla/fxa-auth-server/commit/16cf030))
- **logging:** eliminate the event argument from stash and gather ([4dd3f7e](https://github.com/mozilla/fxa-auth-server/commit/4dd3f7e))
- **logging:** move activity/flow event decision out of log object ([957a883](https://github.com/mozilla/fxa-auth-server/commit/957a883))

<a name="1.71.2"></a>

## [1.71.2](https://github.com/mozilla/fxa-auth-server/compare/v1.71.1...v1.71.2) (2016-10-11)

### Bug Fixes

- **push:** Add metrics events for reason=accountConfirm; r=seanmonstar ([45dfa20](https://github.com/mozilla/fxa-auth-server/commit/45dfa20))

<a name="1.71.1"></a>

## [1.71.1](https://github.com/mozilla/fxa-auth-server/compare/v1.71.0...v1.71.1) (2016-10-05)

### Bug Fixes

- **tests:** es-ES is now 100% supported (#1493) ([23234c6](https://github.com/mozilla/fxa-auth-server/commit/23234c6))

<a name="1.71.0"></a>

# [1.71.0](https://github.com/mozilla/fxa-auth-server/compare/v1.70.1...v1.71.0) (2016-10-05)

### Bug Fixes

- **config:** increase flowId expiration to 2 hours (#1487); r=jrgm,rfk ([798ef83](https://github.com/mozilla/fxa-auth-server/commit/798ef83))
- **config:** return parsed RegExp instances from config ([020235f](https://github.com/mozilla/fxa-auth-server/commit/020235f))
- **deps:** downgrade to hapi 14 (#1485) r=seanmonstar ([fe803da](https://github.com/mozilla/fxa-auth-server/commit/fe803da))
- **logging:** device.created is not a flow event (#1483), r=@vbudhram ([7337af0](https://github.com/mozilla/fxa-auth-server/commit/7337af0))
- **push:** notify devices after successful sign-in confirmation ([190442f](https://github.com/mozilla/fxa-auth-server/commit/190442f))
- **server:** add unit tests for the request helpers ([9a4954d](https://github.com/mozilla/fxa-auth-server/commit/9a4954d))
- **server:** hide session token lastAccessTime updates behind a flag ([51d7cdd](https://github.com/mozilla/fxa-auth-server/commit/51d7cdd))

### chore

- **deps:** update l10n, shrinkwrap ([16d3d99](https://github.com/mozilla/fxa-auth-server/commit/16d3d99))
- **git:** ignore npm-debug.log ([3529d47](https://github.com/mozilla/fxa-auth-server/commit/3529d47))
- **mocks:** Extract mockCustoms into shared helper. ([39bd65a](https://github.com/mozilla/fxa-auth-server/commit/39bd65a))

### Features

- **customs:** Rate-limit verification of email codes. ([2580333](https://github.com/mozilla/fxa-auth-server/commit/2580333))
- **geo:** add state code to location response (#1478) r=vbudhram ([eabfcc6](https://github.com/mozilla/fxa-auth-server/commit/eabfcc6))
- **logging:** Log email template header if available (#1466), r=@jbuck ([cccd899](https://github.com/mozilla/fxa-auth-server/commit/cccd899))
- **reset:** Accept metricsContext bundle on password-reset endpoints. ([05a3b4e](https://github.com/mozilla/fxa-auth-server/commit/05a3b4e))

<a name="1.70.1"></a>

## [1.70.1](https://github.com/mozilla/fxa-auth-server/compare/v1.70.0...v1.70.1) (2016-10-03)

### Bug Fixes

- **deps:** downgrade to hapi 14 ([7c6d5f7](https://github.com/mozilla/fxa-auth-server/commit/7c6d5f7))

<a name="1.70.0"></a>

# [1.70.0](https://github.com/mozilla/fxa-auth-server/compare/v1.69.0...v1.70.0) (2016-09-24)

### Bug Fixes

- **deps:** update dev deps and latest eslint ([a929f9c](https://github.com/mozilla/fxa-auth-server/commit/a929f9c))
- **email:** Refactor to send `sendEmailIfUnverified` via query params, add `emailSent` to re ([19753fc](https://github.com/mozilla/fxa-auth-server/commit/19753fc))
- **emails:** Fix bug when signin with unverified session and not using signin confirmation ([ad9272c](https://github.com/mozilla/fxa-auth-server/commit/ad9272c))
- **emails:** Fixed comment ([aaccab2](https://github.com/mozilla/fxa-auth-server/commit/aaccab2))
- **emails:** Fixed regression where verification email was being sent to already verified ema ([41f4632](https://github.com/mozilla/fxa-auth-server/commit/41f4632))
- **emails:** PR Fixes ([9d30cc0](https://github.com/mozilla/fxa-auth-server/commit/9d30cc0))
- **emails:** Remove extra `customs.flag` mock ([7929de7](https://github.com/mozilla/fxa-auth-server/commit/7929de7))
- **logging:** ignore account.signed flow events from the content server ([f3f2468](https://github.com/mozilla/fxa-auth-server/commit/f3f2468))
- **process:** remove process.domain in token.js (#1456) r=rfk ([9fb1f71](https://github.com/mozilla/fxa-auth-server/commit/9fb1f71)), closes [#740](https://github.com/mozilla/fxa-auth-server/issues/740)
- **push:** Fix and re-enable the end-to-end push tests. (#1467) r=vladikoff ([f5f3abf](https://github.com/mozilla/fxa-auth-server/commit/f5f3abf)), closes [(#1467](https://github.com/(/issues/1467)
- **security:** Fix the security event calls to the DB. ([f780e59](https://github.com/mozilla/fxa-auth-server/commit/f780e59)), closes [#1464](https://github.com/mozilla/fxa-auth-server/issues/1464)
- **security:** Use correct param names in call to db-server ([abb23af](https://github.com/mozilla/fxa-auth-server/commit/abb23af))
- **tests:** make stub implementation of gather match reality ([94c377f](https://github.com/mozilla/fxa-auth-server/commit/94c377f))

### chore

- **deps:** update to latest version of hapi (#1330) r=rfk,seanmonstar,vbudhram ([b3adbcf](https://github.com/mozilla/fxa-auth-server/commit/b3adbcf))
- **nsp:** remove exceptions (#1455) r=seanmonstar ([55e93b6](https://github.com/mozilla/fxa-auth-server/commit/55e93b6))

### Features

- **customs:** return localized retry after data (#1453) r=vbudhram ([5603ad3](https://github.com/mozilla/fxa-auth-server/commit/5603ad3))
- **devices:** add tablet detection ([e09406a](https://github.com/mozilla/fxa-auth-server/commit/e09406a))
- **security:** record event names and ip addresses for important events ([05485b4](https://github.com/mozilla/fxa-auth-server/commit/05485b4))

<a name="1.69.0"></a>

# [1.69.0](https://github.com/mozilla/fxa-auth-server/compare/v1.68.0...v1.69.0) (2016-09-09)

### Bug Fixes

- **config:** Remove unused URL opions from mailer config. ([8de1230](https://github.com/mozilla/fxa-auth-server/commit/8de1230))
- **deps:** use poolee@1.0.1 (#1436) ([ba11125](https://github.com/mozilla/fxa-auth-server/commit/ba11125))
- **emails:** On login, delegate email sending to auth-server (#1435), r=@rfk ([e072e35](https://github.com/mozilla/fxa-auth-server/commit/e072e35))
- **geodb:** 8.8.8.8 in latest data not in Mountain View; point to moz MTV ([db23e8e](https://github.com/mozilla/fxa-auth-server/commit/db23e8e))

### chore

- **deps:** update shrinkwrap ([aa14433](https://github.com/mozilla/fxa-auth-server/commit/aa14433))

### feature

- **newrelic:** add optional newrelic integration ([c811ebe](https://github.com/mozilla/fxa-auth-server/commit/c811ebe))

<a name="1.68.0"></a>

# [1.68.0](https://github.com/mozilla/fxa-auth-server/compare/v1.67.0...v1.68.0) (2016-08-24)

### Bug Fixes

- **docs:** document the new flow events ([7ffa73c](https://github.com/mozilla/fxa-auth-server/commit/7ffa73c))
- **geodb:** if you write a module that takes a hash argument, call it with a hash argument ([3feefa6](https://github.com/mozilla/fxa-auth-server/commit/3feefa6))
- **geodb:** load at startup and log configuration used (#1414) r=vladikoff ([4085c78](https://github.com/mozilla/fxa-auth-server/commit/4085c78))
- **geodb:** update to fxa-geodb 0.0.7 (#1418) ([b8b6e2b](https://github.com/mozilla/fxa-auth-server/commit/b8b6e2b))
- **logging:** not all activity events are flow events (#1416) r=vladikoff ([1a6c3af](https://github.com/mozilla/fxa-auth-server/commit/1a6c3af))
- **logs:** account.verified & account.confirmed are mutually exclusive ([d59edd3](https://github.com/mozilla/fxa-auth-server/commit/d59edd3))
- **logs:** look in response.source for uid ([2224f87](https://github.com/mozilla/fxa-auth-server/commit/2224f87))
- **password:** Remove raw token support ([882317d](https://github.com/mozilla/fxa-auth-server/commit/882317d)), closes [#1351](https://github.com/mozilla/fxa-auth-server/issues/1351)
- **reminders:** fix issue with reminder rate (#1410) ([c4c087e](https://github.com/mozilla/fxa-auth-server/commit/c4c087e)), closes [(#1410](https://github.com/(/issues/1410) [#1408](https://github.com/mozilla/fxa-auth-server/issues/1408)
- **server:** reinstate default user agent fallback (#1422) r=vladikoff ([470fd52](https://github.com/mozilla/fxa-auth-server/commit/470fd52))

### chore

- **deps:** update dev deps, fix husky issues (#1430), r=@vbudhram ([a610337](https://github.com/mozilla/fxa-auth-server/commit/a610337)), closes [(#1430](https://github.com/(/issues/1430) [#1429](https://github.com/mozilla/fxa-auth-server/issues/1429)

### Features

- **l10n:** localize device list (#1420) r=vbudhram ([7a91f31](https://github.com/mozilla/fxa-auth-server/commit/7a91f31)), closes [#1404](https://github.com/mozilla/fxa-auth-server/issues/1404)
- **metrics:** add flowEvent support to all activityEvents and customs (#1409) r=philbooth ([8d36f00](https://github.com/mozilla/fxa-auth-server/commit/8d36f00)), closes [#1403](https://github.com/mozilla/fxa-auth-server/issues/1403)

### Refactor

- **l10n:** use fxa-shared locale list (#1411) ([b70caed](https://github.com/mozilla/fxa-auth-server/commit/b70caed))

<a name="1.67.0"></a>

# [1.67.0](https://github.com/mozilla/fxa-auth-server/compare/v1.66.1...v1.67.0) (2016-08-11)

### Bug Fixes

- **config:** Added new url configs for mailer (#1397) r=vladikoff ([d44cb56](https://github.com/mozilla/fxa-auth-server/commit/d44cb56))
- **deps:** update shrinkwrap, add missing deps (#1407) r=vbudhram ([5062a66](https://github.com/mozilla/fxa-auth-server/commit/5062a66))
- **device:** remember devices to push-notify before resetting account on password change/rese ([69c1eef](https://github.com/mozilla/fxa-auth-server/commit/69c1eef)), closes [#1391](https://github.com/mozilla/fxa-auth-server/issues/1391)
- **devices:** serialize push payload in /devices/notify route ([b91a982](https://github.com/mozilla/fxa-auth-server/commit/b91a982)), closes [#1386](https://github.com/mozilla/fxa-auth-server/issues/1386)
- **e2e-email:** fix e2e-email test ([4e1d200](https://github.com/mozilla/fxa-auth-server/commit/4e1d200))
- **login:** fix handling of sign-in confirmation for keyless logins ([3f03557](https://github.com/mozilla/fxa-auth-server/commit/3f03557))
- **password:** Remove raw token support ([bb5f28b](https://github.com/mozilla/fxa-auth-server/commit/bb5f28b)), closes [#1351](https://github.com/mozilla/fxa-auth-server/issues/1351)
- **server:** assign fresh createdAt timestamp to passwordForgotTokens ([21c5df7](https://github.com/mozilla/fxa-auth-server/commit/21c5df7))
- **server:** ensure tokens get a fresh createdAt timestamp (#1389) r=vladikoff ([6acb9e0](https://github.com/mozilla/fxa-auth-server/commit/6acb9e0))
- **server:** reinstate placeholder devices for sync sessions ([e12cd08](https://github.com/mozilla/fxa-auth-server/commit/e12cd08))
- **server:** remove unused createAccountResetToken method ([2c95903](https://github.com/mozilla/fxa-auth-server/commit/2c95903))
- **ses:** add status and diagnosticCode for bounce (#1401) r=seanmonstar,vbudhram ([61941e8](https://github.com/mozilla/fxa-auth-server/commit/61941e8)), closes [#834](https://github.com/mozilla/fxa-auth-server/issues/834)
- **tests:** remove duplicate assignment ([7659b58](https://github.com/mozilla/fxa-auth-server/commit/7659b58))

### chore

- **deps:** update shrinkwrap ([10f857a](https://github.com/mozilla/fxa-auth-server/commit/10f857a))

### Features

- **geolocation:** add geolocation data to emails (#1334) ([8132d55](https://github.com/mozilla/fxa-auth-server/commit/8132d55))
- **logging:** emit an account.confirmed activity event ([4107e58](https://github.com/mozilla/fxa-auth-server/commit/4107e58))
- **push:** Send proper push messages for password change/reset (#1381) r=vladikoff,rfk ([8cd9403](https://github.com/mozilla/fxa-auth-server/commit/8cd9403)), closes [#1380](https://github.com/mozilla/fxa-auth-server/issues/1380)
- **server:** Rate limit account/devices/notify with the new UIDRecord (#1394) r=vladikoff ([09aee43](https://github.com/mozilla/fxa-auth-server/commit/09aee43)), closes [#1372](https://github.com/mozilla/fxa-auth-server/issues/1372)

<a name="1.66.1"></a>

## [1.66.1](https://github.com/mozilla/fxa-auth-server/compare/v1.66.0...v1.66.1) (2016-07-29)

### Bug Fixes

- **signin:** No signin confirmation for email regexp match if keys not requested ([61d1de4](https://github.com/mozilla/fxa-auth-server/commit/61d1de4)), closes [#1374](https://github.com/mozilla/fxa-auth-server/issues/1374)

### chore

- **signin:** Add commentary about temporary workarounds in sign-in confirmation config. ([e62b1c0](https://github.com/mozilla/fxa-auth-server/commit/e62b1c0))

<a name="1.66.0"></a>

# [1.66.0](https://github.com/mozilla/fxa-auth-server/compare/v1.65.3...v1.66.0) (2016-07-27)

### Bug Fixes

- **deps:** update fxa-content-server-l10n dependency ([ab3b232](https://github.com/mozilla/fxa-auth-server/commit/ab3b232))
- **deps:** update most dev dependencies ([dc4c5ff](https://github.com/mozilla/fxa-auth-server/commit/dc4c5ff))
- **deps:** update request to latest version (#1370) r=vbudhram ([0e3c463](https://github.com/mozilla/fxa-auth-server/commit/0e3c463))
- **deps:** update tap and db mysql dependencies (#1356) r=vladikoff ([93723eb](https://github.com/mozilla/fxa-auth-server/commit/93723eb)), closes [#1353](https://github.com/mozilla/fxa-auth-server/issues/1353)
- **server:** Fixes based on @vladikoff and @rfk feedback. ([29d7fde](https://github.com/mozilla/fxa-auth-server/commit/29d7fde))
- **server:** remove metricsContext from payloads where it is never sent ([0649a30](https://github.com/mozilla/fxa-auth-server/commit/0649a30))
- **server:** remove placeholder device records for sync sessions ([c4c6733](https://github.com/mozilla/fxa-auth-server/commit/c4c6733))
- **server:** Return undefined from Customs.prototype.flag if everyting is OK ([e265694](https://github.com/mozilla/fxa-auth-server/commit/e265694))
- **tests:** disable e2e tests until push server fixed (#1369) r=vbudhram ([bf72778](https://github.com/mozilla/fxa-auth-server/commit/bf72778)), closes [(#1369](https://github.com/(/issues/1369)
- **tests:** fix test runner to exit with proper exit code ([b978b6e](https://github.com/mozilla/fxa-auth-server/commit/b978b6e))
- **tests:** switch coverage tool, adjust log_tests (#1348) r=vbudhram ([8451a56](https://github.com/mozilla/fxa-auth-server/commit/8451a56)), closes [#1340](https://github.com/mozilla/fxa-auth-server/issues/1340)

### chore

- **deps:** update tap testing to latest version (#1339) r=vladikoff ([6648da0](https://github.com/mozilla/fxa-auth-server/commit/6648da0))
- **server:** Add some comments about why a some strange patterns are used. ([2fba045](https://github.com/mozilla/fxa-auth-server/commit/2fba045))

### Features

- **account:** devices push notify endpoint ([699caa1](https://github.com/mozilla/fxa-auth-server/commit/699caa1)), closes [#1357](https://github.com/mozilla/fxa-auth-server/issues/1357)
- **server:** Remove the account lockout feature. ([df3b0de](https://github.com/mozilla/fxa-auth-server/commit/df3b0de)), closes [#1359](https://github.com/mozilla/fxa-auth-server/issues/1359)
- **signin:** Always do sign-in confirmation on suspicious requests. ([cb8f33b](https://github.com/mozilla/fxa-auth-server/commit/cb8f33b))

### Refactor

- **customs:** Add function to scrub payload before performing customs check ([f44872d](https://github.com/mozilla/fxa-auth-server/commit/f44872d))
- **push:** provide pushToDevice, pushToDevices and pushToAllDevices methods ([89083cd](https://github.com/mozilla/fxa-auth-server/commit/89083cd))

<a name="1.65.3"></a>

## [1.65.3](https://github.com/mozilla/fxa-auth-server/compare/v1.65.2...v1.65.3) (2016-07-21)

### Bug Fixes

- **l10n:** bump content-server-l10n to current HEAD ([e097090](https://github.com/mozilla/fxa-auth-server/commit/e097090))

<a name="1.65.2"></a>

## [1.65.2](https://github.com/mozilla/fxa-auth-server/compare/v1.65.0...v1.65.2) (2016-07-19)

### Bug Fixes

- **server:** remove placeholder device records for sync sessions ([1af5624](https://github.com/mozilla/fxa-auth-server/commit/1af5624))

<a name="1.65.0"></a>

# [1.65.0](https://github.com/mozilla/fxa-auth-server/compare/v1.64.0...v1.65.0) (2016-07-14)

### Bug Fixes

- **config:** adjust local dev config to support signin confirmation (#1313) r=vbudhram,shane- ([282271b](https://github.com/mozilla/fxa-auth-server/commit/282271b))
- **customs:** Report errno to customs when password check fails. ([bdd5d0c](https://github.com/mozilla/fxa-auth-server/commit/bdd5d0c))
- **deps:** update npm-shrinkwrap.json w/ newest auth-mailer & fxa-content-server-l10n (#129 ([56b6ad1](https://github.com/mozilla/fxa-auth-server/commit/56b6ad1))
- **docs:** correct the acitvity event data documentation (#1322) r=vladikoff ([9b8747b](https://github.com/mozilla/fxa-auth-server/commit/9b8747b))
- **log:** Add comments and clarify naming for logging methods. ([35c7f68](https://github.com/mozilla/fxa-auth-server/commit/35c7f68))
- **server:** fix bad sessionTokenId arg in call to updateDevice (#1324) r=vladikoff ([4777a8a](https://github.com/mozilla/fxa-auth-server/commit/4777a8a)), closes [(#1324](https://github.com/(/issues/1324)
- **server:** remove default user agent fallback pending legal ok ([8b8f00d](https://github.com/mozilla/fxa-auth-server/commit/8b8f00d))
- **signin:** Let /password/change/finish accept session tokens by id. ([b589b79](https://github.com/mozilla/fxa-auth-server/commit/b589b79))
- **verify:** Don't sent post-verify email when `service` is blank. ([06bf05a](https://github.com/mozilla/fxa-auth-server/commit/06bf05a))

### chore

- **docs:** add more docs to activity events. (#1304) r=philbooth ([31177ad](https://github.com/mozilla/fxa-auth-server/commit/31177ad)), closes [#1202](https://github.com/mozilla/fxa-auth-server/issues/1202)
- **nsp:** Add NSP exception for https://nodesecurity.io/advisories/121 ([9465a99](https://github.com/mozilla/fxa-auth-server/commit/9465a99))
- **scripts:** Add stricter error handling to bash scripts ([7d595c2](https://github.com/mozilla/fxa-auth-server/commit/7d595c2))
- **tests:** allow passing a glob to npm test ([37f0fe4](https://github.com/mozilla/fxa-auth-server/commit/37f0fe4))

### docs

- **config:** clarify sample rate for sign in confirmation (#1315) r=vladikoff ([bc9d79d](https://github.com/mozilla/fxa-auth-server/commit/bc9d79d))

### Features

- **customs:** Send more request metadata to customs-server for checking. ([70944d3](https://github.com/mozilla/fxa-auth-server/commit/70944d3))
- **docs:** document the new activity events ([62b1255](https://github.com/mozilla/fxa-auth-server/commit/62b1255))
- **logging:** emit account.deleted activity event ([01828ab](https://github.com/mozilla/fxa-auth-server/commit/01828ab))
- **metrics:** Drop invalid flowids so they dont confuse our metrics. ([8827b91](https://github.com/mozilla/fxa-auth-server/commit/8827b91))
- **server:** emit new activity events for kpi dashboards ([ace64e7](https://github.com/mozilla/fxa-auth-server/commit/ace64e7))
- **server:** synthesize device records for sync sessions ([b536fd7](https://github.com/mozilla/fxa-auth-server/commit/b536fd7))
- **signin:** Add support for keyFetchToken verification (#1320), r=@rfk ([10ee322](https://github.com/mozilla/fxa-auth-server/commit/10ee322))

### Refactor

- **openid:** remove openid login support ([8cb651e](https://github.com/mozilla/fxa-auth-server/commit/8cb651e)), closes [#1336](https://github.com/mozilla/fxa-auth-server/issues/1336)

<a name="1.64.0"></a>

# [1.64.0](https://github.com/mozilla/fxa-auth-server/compare/v1.63.0...v1.64.0) (2016-06-23)

### Bug Fixes

- **account:** fix payload typo in device update ([673dd5d](https://github.com/mozilla/fxa-auth-server/commit/673dd5d))
- **config:** improve sign-in confirmation email regex ([33301c5](https://github.com/mozilla/fxa-auth-server/commit/33301c5))
- **logs:** Log the uid when reporting push errors. ([db9e5f4](https://github.com/mozilla/fxa-auth-server/commit/db9e5f4))
- **mail:** Remove the "resend blackout period". ([27082be](https://github.com/mozilla/fxa-auth-server/commit/27082be))
- **metrics:** Monitor for clients sending obsolete contentToken parameter. ([1d58b3e](https://github.com/mozilla/fxa-auth-server/commit/1d58b3e))
- **push:** Avoid blocking event loop when pushing to lots of devices. ([1be85c3](https://github.com/mozilla/fxa-auth-server/commit/1be85c3))
- **tests:** add verify_code tests ([e4eb4d8](https://github.com/mozilla/fxa-auth-server/commit/e4eb4d8))

### Features

- **config:** accept CORS requests from multiple origins ([f792d35](https://github.com/mozilla/fxa-auth-server/commit/f792d35))
- **email:** add verification reminders ([5007b4d](https://github.com/mozilla/fxa-auth-server/commit/5007b4d)), closes [#1081](https://github.com/mozilla/fxa-auth-server/issues/1081)
- **login:** Log an error on login if account has too many active sessions. ([ca9524b](https://github.com/mozilla/fxa-auth-server/commit/ca9524b))
- **metrics:** add metrics for reminder queries ([aca4185](https://github.com/mozilla/fxa-auth-server/commit/aca4185))
- **push:** Log an error if pushing notifications to too many active devices. ([5b81e10](https://github.com/mozilla/fxa-auth-server/commit/5b81e10))
- **signin:** Add regex for enabling signin confirmation (#1290) r=pbooth ([fa02ee8](https://github.com/mozilla/fxa-auth-server/commit/fa02ee8))

### Refactor

- **tests:** eliminate duplicate setup in local route tests ([e8cd5df](https://github.com/mozilla/fxa-auth-server/commit/e8cd5df))

### chore

- **changelog:** Generate changelog for v1.63.0 release ([0ca8367](https://github.com/mozilla/fxa-auth-server/commit/0ca8367))
- **deps:** Update to latest version of mozlog ([aa3b4e7](https://github.com/mozilla/fxa-auth-server/commit/aa3b4e7)), closes [#1279](https://github.com/mozilla/fxa-auth-server/issues/1279)
- **nsp:** update .nsprc and travis.yml ([9d047b5](https://github.com/mozilla/fxa-auth-server/commit/9d047b5)), closes [#1295](https://github.com/mozilla/fxa-auth-server/issues/1295)
- **shrinkwrap:** update fxa-auth-mailer ([1ced8c9](https://github.com/mozilla/fxa-auth-server/commit/1ced8c9))

<a name="1.63.0"></a>

## [1.63.0](https://github.com/mozilla/fxa-auth-server/compare/v1.62.1...v1.63.0) (2016-06-06)

### Bug Fixes

- **api:** remove device registration from signup/login endpoints ([21ad7f3](https://github.com/mozilla/fxa-auth-server/commit/21ad7f3))
- **e2e-email:** fix e2e-email for all locales ([0250e50](https://github.com/mozilla/fxa-auth-server/commit/0250e50))
- **mail:** Remove the "resend blackout period". ([27082be](https://github.com/mozilla/fxa-auth-server/commit/27082be))
- **push:** add verification push event to push log ([e5d609a](https://github.com/mozilla/fxa-auth-server/commit/e5d609a))
- **verify:** Only send post-verify email when service=sync ([e0cacf8](https://github.com/mozilla/fxa-auth-server/commit/e0cacf8))

### chore

- **deps:** Update to latest version of fxa-auth-mailer ([bc1ae49](https://github.com/mozilla/fxa-auth-server/commit/bc1ae49))
- **git:** Run a quick linting task on pre-push ([0c8767a](https://github.com/mozilla/fxa-auth-server/commit/0c8767a))

### Features

- **device:** emit create and delete events to SNS ([c90e44e](https://github.com/mozilla/fxa-auth-server/commit/c90e44e)), closes [#1186](https://github.com/mozilla/fxa-auth-server/issues/1186)
- **devices:** notify a device when it has been disconnected ([fcb9e80](https://github.com/mozilla/fxa-auth-server/commit/fcb9e80)), closes [#1139](https://github.com/mozilla/fxa-auth-server/issues/1139)
- **devices:** notify other devices of a new device ([6ed2697](https://github.com/mozilla/fxa-auth-server/commit/6ed2697)), closes [#1250](https://github.com/mozilla/fxa-auth-server/issues/1250)
- **events:** Include metrics context in SQS events ([d5dc75b](https://github.com/mozilla/fxa-auth-server/commit/d5dc75b))
- **metrics:** Log metrics about whether metrics are transmitted correctly. ([c4119f1](https://github.com/mozilla/fxa-auth-server/commit/c4119f1))
- **signin:** Updated password/change/finish and account/reset ([333451e](https://github.com/mozilla/fxa-auth-server/commit/333451e))

<a name="1.62.5"></a>

## [1.62.5](https://github.com/mozilla/fxa-auth-server/compare/v1.62.4...v1.62.5) (2016-05-27)

### Bug Fixes

- **l10n:** update to fix broken lt locale ([512576d](https://github.com/mozilla/fxa-auth-server/commit/512576d))

<a name="1.62.4"></a>

## [1.62.4](https://github.com/mozilla/fxa-auth-server/compare/v1.62.3...v1.62.4) (2016-05-24)

<a name="1.62.3"></a>

## [1.62.3](https://github.com/mozilla/fxa-auth-server/compare/v1.62.2...v1.62.3) (2016-05-24)

### chore

- **shrinkwrap:** update auth-mailer/content-server-l10n on v1.62.2 ([3e1027a](https://github.com/mozilla/fxa-auth-server/commit/3e1027a))

<a name="1.62.2"></a>

## [1.62.2](https://github.com/mozilla/fxa-auth-server/compare/v1.62.1...v1.62.2) (2016-05-20)

### Bug Fixes

- **token:** Use new REQUEST_BLOCKED error for bad content tokens. ([c0696be](https://github.com/mozilla/fxa-auth-server/commit/c0696be))

<a name="1.62.1"></a>

## [1.62.1](https://github.com/mozilla/fxa-auth-server/compare/v1.62.0...v1.62.1) (2016-05-20)

### Bug Fixes

- **deps:** Update to auth-db-mysql train-62 ([685054d](https://github.com/mozilla/fxa-auth-server/commit/685054d))

<a name="1.62.0"></a>

# [1.62.0](https://github.com/mozilla/fxa-auth-server/compare/v1.61.0...v1.62.0) (2016-05-19)

### Bug Fixes

- **clientAddress:** Cope better with X-Forwarded-For having fewer items than expected. ([fd85359](https://github.com/mozilla/fxa-auth-server/commit/fd85359))
- **push:** adjust metrics increment logs ([8120c76](https://github.com/mozilla/fxa-auth-server/commit/8120c76)), closes [#1253](https://github.com/mozilla/fxa-auth-server/issues/1253)

### Features

- **errors:** Add API and docs for new "request blocked" errno 125. ([d7edef8](https://github.com/mozilla/fxa-auth-server/commit/d7edef8))
- **locale:** add Arabic locale support ([a13e32a](https://github.com/mozilla/fxa-auth-server/commit/a13e32a))
- **locale:** add Finnish locale ([8646591](https://github.com/mozilla/fxa-auth-server/commit/8646591))
- **push:** document the format of the push payloads ([9fa65ce](https://github.com/mozilla/fxa-auth-server/commit/9fa65ce))
- **push:** Prepare codebase for data payloads ([b60c464](https://github.com/mozilla/fxa-auth-server/commit/b60c464))

### Refactor

- **reset:** Adds sessionToken as an optional param for /account/reset (#1265) ([8b796b3](https://github.com/mozilla/fxa-auth-server/commit/8b796b3))

<a name="1.61.0"></a>

# [1.61.0](https://github.com/mozilla/fxa-auth-server/compare/v1.60.0...v1.61.0) (2016-05-04)

### Bug Fixes

- **device:** Restrict device name to display-safe unicode characters ([79acb18](https://github.com/mozilla/fxa-auth-server/commit/79acb18))
- **devices:** Avoid spurious writes to device record if nothing has changed ([4330f2d](https://github.com/mozilla/fxa-auth-server/commit/4330f2d))
- **push:** Disallow storing of public-key values until we're ready to use them. ([12265c3](https://github.com/mozilla/fxa-auth-server/commit/12265c3))
- **tests:** Fix typo in test name ([dbc0de0](https://github.com/mozilla/fxa-auth-server/commit/dbc0de0))

### Features

- **devices:** Add metrics on device updates, and a flag to disable them ([af748be](https://github.com/mozilla/fxa-auth-server/commit/af748be))
- **log:** includes uid in summary for account create and login ([1232f95](https://github.com/mozilla/fxa-auth-server/commit/1232f95)), closes [#1225](https://github.com/mozilla/fxa-auth-server/issues/1225)
- **mailer:** Add "re-confirm your email" templates. ([f7508cb](https://github.com/mozilla/fxa-auth-server/commit/f7508cb))
- **push:** Add event logging for password changes and resets. ([0db73f5](https://github.com/mozilla/fxa-auth-server/commit/0db73f5))
- **push:** Notify devices when the password is changed or reset. ([77e53bf](https://github.com/mozilla/fxa-auth-server/commit/77e53bf))

### chore

- **nsp:** Update convict, add .nsprc file to silence some NSP warnings ([038f46e](https://github.com/mozilla/fxa-auth-server/commit/038f46e))

<a name="1.60.4"></a>

## [1.60.4](https://github.com/mozilla/fxa-auth-server/compare/v1.60.3...v1.60.4) (2016-04-29)

### Bug Fixes

- **devices:** Avoid spurious writes to device record if nothing has changed ([5017913](https://github.com/mozilla/fxa-auth-server/commit/5017913))
- **token:** Tweak regex for samsung user-agents in content-token allow list ([13e13b2](https://github.com/mozilla/fxa-auth-server/commit/13e13b2))

<a name="1.60.3"></a>

## [1.60.3](https://github.com/mozilla/fxa-auth-server/compare/v1.60.2...v1.60.3) (2016-04-20)

### Bug Fixes

- **token:** Add end-of-string anchor in contenttoken email regex. ([c1aae28](https://github.com/mozilla/fxa-auth-server/commit/c1aae28))

<a name="1.60.2"></a>

## [1.60.2](https://github.com/mozilla/fxa-auth-server/compare/v1.60.1...v1.60.2) (2016-04-19)

### Bug Fixes

- **token:** Add samsung user-agents to content-token allow list ([96f2190](https://github.com/mozilla/fxa-auth-server/commit/96f2190))

<a name="1.60.1"></a>

## [1.60.1](https://github.com/mozilla/fxa-auth-server/compare/v1.60.0...v1.60.1) (2016-04-19)

### Bug Fixes

- **account:** flag unknown attempts for the emailRecord ([b4fa3f6](https://github.com/mozilla/fxa-auth-server/commit/b4fa3f6))
- **bulk-mailer:** Remove the locale prefix on filenames w/ --write ([3c9d584](https://github.com/mozilla/fxa-auth-server/commit/3c9d584))
- **bulk-mailer:** Set error rate to 0, we are done testing. ([06b4c91](https://github.com/mozilla/fxa-auth-server/commit/06b4c91))
- **clientAddress:** allow location of the client ip address in forward headers to be specified in co ([3440484](https://github.com/mozilla/fxa-auth-server/commit/3440484))
- **contentToken:** don't let hapi give validation errors about contentToken ([5725061](https://github.com/mozilla/fxa-auth-server/commit/5725061))
- **contentToken:** fix docs ([dd68374](https://github.com/mozilla/fxa-auth-server/commit/dd68374))
- **contentToken:** update metrics, remove ip ([89dd85b](https://github.com/mozilla/fxa-auth-server/commit/89dd85b))
- **customs:** Check more password-related actions with customs-server. ([cf76513](https://github.com/mozilla/fxa-auth-server/commit/cf76513))
- **customs:** fix type for form.email ([398c98e](https://github.com/mozilla/fxa-auth-server/commit/398c98e))
- **customs:** provide email properly to customs ([b28fb17](https://github.com/mozilla/fxa-auth-server/commit/b28fb17))
- **email:** Add feature-flag for new-login notification email. ([1868914](https://github.com/mozilla/fxa-auth-server/commit/1868914))
- **email:** Point to private fork of auth-mailer for prod deploy. ([26f7b3a](https://github.com/mozilla/fxa-auth-server/commit/26f7b3a))
- **email:** reinstate new sync device emails ([9f7ff9f](https://github.com/mozilla/fxa-auth-server/commit/9f7ff9f))
- **email:** send additional template data for new-login email. ([e35eba8](https://github.com/mozilla/fxa-auth-server/commit/e35eba8))
- **errors:** move bad content error up ([e67990c](https://github.com/mozilla/fxa-auth-server/commit/e67990c))
- **must-reset:** exit code 1 on reset account error ([3774ea8](https://github.com/mozilla/fxa-auth-server/commit/3774ea8))
- **tests:** Build and test fixes for latest fxa-auth-mailer update. ([e3eb504](https://github.com/mozilla/fxa-auth-server/commit/e3eb504))
- **token:** Allow certain emails to bypass the content-token restriction (#27) ([2a162e6](https://github.com/mozilla/fxa-auth-server/commit/2a162e6)), closes [#27](https://github.com/mozilla/fxa-auth-server/issues/27)
- **token:** Allow the UA for a specific partner device. ([6401431](https://github.com/mozilla/fxa-auth-server/commit/6401431))
- **token:** Fix test bustage from missing contentToken config ([6924d5c](https://github.com/mozilla/fxa-auth-server/commit/6924d5c))
- **token:** More diagnostic logging for content-token errors. (#25) ([33f6307](https://github.com/mozilla/fxa-auth-server/commit/33f6307)), closes [#25](https://github.com/mozilla/fxa-auth-server/issues/25)
- **token:** Validate and log metrics on content-tokens even when they're optional ([002219b](https://github.com/mozilla/fxa-auth-server/commit/002219b))

### chore

- **bulk-mailer:** Settle on the "password_reset_required" template ([90de303](https://github.com/mozilla/fxa-auth-server/commit/90de303))
- **bulk-mailer:** Stop all processing on error. ([ae83d72](https://github.com/mozilla/fxa-auth-server/commit/ae83d72))
- **customs:** use named error constant for UNEXPECTED_ERROR ([ead6134](https://github.com/mozilla/fxa-auth-server/commit/ead6134))
- **doc:** add usage info to scripts/must-reset.js ([8d02f8b](https://github.com/mozilla/fxa-auth-server/commit/8d02f8b))
- **docs:** Add more docs to the reset-send-batch script. ([975132e](https://github.com/mozilla/fxa-auth-server/commit/975132e))
- **shrinkwrap:** pick up new versions auth-mailer and content-l10n ([3fb3186](https://github.com/mozilla/fxa-auth-server/commit/3fb3186))

### Features

- **bulk-mailer:** `--errors` and `--unsent` now have defaults. ([61c092d](https://github.com/mozilla/fxa-auth-server/commit/61c092d))
- **bulk-mailer:** Add some utilities to work with batches ([21a9033](https://github.com/mozilla/fxa-auth-server/commit/21a9033))
- **contentToken:** add customs flag on bad token ([e811ced](https://github.com/mozilla/fxa-auth-server/commit/e811ced))
- **contentToken:** add tests, add new error code ([8372a62](https://github.com/mozilla/fxa-auth-server/commit/8372a62))
- **contentToken:** adjust user agents ([70bc661](https://github.com/mozilla/fxa-auth-server/commit/70bc661))
- **customs:** include errno in customs flags ([d50f959](https://github.com/mozilla/fxa-auth-server/commit/d50f959))
- **login:** add content token support ([a2ac3ad](https://github.com/mozilla/fxa-auth-server/commit/a2ac3ad))
- **reset:** Added "must reset account" error state ([e86d16f](https://github.com/mozilla/fxa-auth-server/commit/e86d16f))
- **scripts:** Add a bulk mailer ([09c2671](https://github.com/mozilla/fxa-auth-server/commit/09c2671))

<a name="1.60.0"></a>

# [1.60.0](https://github.com/mozilla/fxa-auth-server/compare/v1.59.0...v1.60.0) (2016-04-19)

### Bug Fixes

- **bulk-mailer:** Remove the locale prefix on filenames w/ --write ([1c0959d](https://github.com/mozilla/fxa-auth-server/commit/1c0959d))
- **bulk-mailer:** Set error rate to 0, we are done testing. ([897de10](https://github.com/mozilla/fxa-auth-server/commit/897de10))
- **clientAddress:** allow location of the client ip address in forward headers to be specified in co ([517fbff](https://github.com/mozilla/fxa-auth-server/commit/517fbff))
- **customs:** Check more password-related actions with customs-server. ([8ceedb6](https://github.com/mozilla/fxa-auth-server/commit/8ceedb6))
- **deps:** fix node-uap commit sha ([e2aa184](https://github.com/mozilla/fxa-auth-server/commit/e2aa184))
- **email:** Add feature-flag for new-login notification email. ([3d4d5f9](https://github.com/mozilla/fxa-auth-server/commit/3d4d5f9))
- **email:** Point to latest auth-mailer ([17123ee](https://github.com/mozilla/fxa-auth-server/commit/17123ee))
- **email:** reinstate new sync device emails ([93a78de](https://github.com/mozilla/fxa-auth-server/commit/93a78de))
- **email:** send additional template data for new-login email. ([177e192](https://github.com/mozilla/fxa-auth-server/commit/177e192))
- **must-reset:** exit code 1 on reset account error ([c100a48](https://github.com/mozilla/fxa-auth-server/commit/c100a48))
- **tests:** Build and test fixes for latest fxa-auth-mailer update. ([493f917](https://github.com/mozilla/fxa-auth-server/commit/493f917))

### Features

- **bulk-mailer:** `--errors` and `--unsent` now have defaults. ([eec2e72](https://github.com/mozilla/fxa-auth-server/commit/eec2e72))
- **customs:** include errno in customs flags and merge fixes ([3dcdaf8](https://github.com/mozilla/fxa-auth-server/commit/3dcdaf8))
- **reset:** Ability to put a users account in a "must reset" state, per dannycoates (PATCH) ([d7638a6](https://github.com/mozilla/fxa-auth-server/commit/d7638a6))
- **scripts:** Add a bulk mailer ([296f152](https://github.com/mozilla/fxa-auth-server/commit/296f152))

### chore

- **bulk-mailer:** Settle on the "password_reset_required" template ([f02e292](https://github.com/mozilla/fxa-auth-server/commit/f02e292))
- **bulk-mailer:** Stop all processing on error. ([de8e355](https://github.com/mozilla/fxa-auth-server/commit/de8e355))
- **convict:** use convict .getProperties(), not deprecated .root() ([4fa61c0](https://github.com/mozilla/fxa-auth-server/commit/4fa61c0))
- **customs:** use named error constant for UNEXPECTED_ERROR ([d417644](https://github.com/mozilla/fxa-auth-server/commit/d417644))
- **docs:** Add more docs to the reset-send-batch script. ([107062a](https://github.com/mozilla/fxa-auth-server/commit/107062a))

<a name="1.59.0"></a>

# [1.59.0](https://github.com/mozilla/fxa-auth-server/compare/v1.58.1...v1.59.0) (2016-03-28)

### Bug Fixes

- **email:** Clean up accounts with invalid emails on status poll. ([5233391](https://github.com/mozilla/fxa-auth-server/commit/5233391))

### Features

- **logging:** add metrics context metadata to activity events ([09d3851](https://github.com/mozilla/fxa-auth-server/commit/09d3851))
- **metrics:** track push email status checks ([eb3920e](https://github.com/mozilla/fxa-auth-server/commit/eb3920e)), closes [#1220](https://github.com/mozilla/fxa-auth-server/issues/1220)

### Reverts

- **metrics:** disable logging hask skew to datadog ([7a1bc82](https://github.com/mozilla/fxa-auth-server/commit/7a1bc82)), closes [#1215](https://github.com/mozilla/fxa-auth-server/issues/1215)

### chore

- **changelog:** Remove duplicate changelog entries ([18b8899](https://github.com/mozilla/fxa-auth-server/commit/18b8899))
- **shrinkwrap:** bump to auth-mailer#f4098f9 and content-l10n#b61acfa and no other changes ([72b5d55](https://github.com/mozilla/fxa-auth-server/commit/72b5d55))
- **shrinkwrap:** bump to fxa-auth-db-mysql#v0.59.0 ([bf01283](https://github.com/mozilla/fxa-auth-server/commit/bf01283))

<a name="1.58.1"></a>

## [1.58.1](https://github.com/mozilla/fxa-auth-server/compare/v1.58.0...v1.58.1) (2016-03-17)

### chore

- **deps:** fix shrinkwrap for latest auth-db-mysql version ([2880e67](https://github.com/mozilla/fxa-auth-server/commit/2880e67))

<a name="1.58.0"></a>

# [1.58.0](https://github.com/mozilla/fxa-auth-server/compare/v1.57.0...v1.58.0) (2016-03-17)

### Bug Fixes

- **api:** permit null lastAccessTime in devices response ([474032d](https://github.com/mozilla/fxa-auth-server/commit/474032d))
- **api:** reject emails without a dot in the domain ([434e460](https://github.com/mozilla/fxa-auth-server/commit/434e460))
- **tests:** sanely handle unicode email addresses in account tests ([71e4126](https://github.com/mozilla/fxa-auth-server/commit/71e4126))

### chore

- **api:** Add signin config value ([0beade7](https://github.com/mozilla/fxa-auth-server/commit/0beade7))

<a name="1.57.1"></a>

## [1.57.1](https://github.com/mozilla/fxa-auth-server/compare/v1.57.0...v1.57.1) (2016-03-04)

### Bug Fixes

- **email:** Restrict unicode chars allowed in email addresses. ([81a42de](https://github.com/mozilla/fxa-auth-server/commit/81a42de))

<a name="1.57.0"></a>

# [1.57.0](https://github.com/mozilla/fxa-auth-server/compare/v1.56.0...v1.57.0) (2016-03-01)

### Bug Fixes

- **api:** permit lastAccessTime 0 in devices response ([4059323](https://github.com/mozilla/fxa-auth-server/commit/4059323))
- **bounces:** Cope with quoted email addresses in bounce notifications. ([9b976e7](https://github.com/mozilla/fxa-auth-server/commit/9b976e7))
- **config:** adjust localized post-verification links ([c7c73c9](https://github.com/mozilla/fxa-auth-server/commit/c7c73c9))
- **deps:** Migrate to more up-to-date user-agent parsing lib. ([8106c8b](https://github.com/mozilla/fxa-auth-server/commit/8106c8b))
- **e2e-email:** fix expected link s@/en-US/firefox/sync/@/firefox/sync/@ ([5396868](https://github.com/mozilla/fxa-auth-server/commit/5396868))
- **logging:** Remove PII from logged error object details. ([9e4bcde](https://github.com/mozilla/fxa-auth-server/commit/9e4bcde))
- **push:** add TTL to push requests ([ed98cc6](https://github.com/mozilla/fxa-auth-server/commit/ed98cc6)), closes [#1187](https://github.com/mozilla/fxa-auth-server/issues/1187)

### Features

- **api:** Add get account status by email endpoint ([5d7ca53](https://github.com/mozilla/fxa-auth-server/commit/5d7ca53))
- **devices:** added fxa-deviceId to the signed certificate ([a866e8f](https://github.com/mozilla/fxa-auth-server/commit/a866e8f))
- **logging:** Log hawk timestamp skew to statsd for easier analysis. ([0c153fb](https://github.com/mozilla/fxa-auth-server/commit/0c153fb))

### Refactor

- **bounces:** Make bounce-handling code testable, add some tests. ([a1da228](https://github.com/mozilla/fxa-auth-server/commit/a1da228))
- **errors:** Define named constants for errno values. ([8680d22](https://github.com/mozilla/fxa-auth-server/commit/8680d22))
- **tests:** Use a shared helper function for mocking out logging. ([52dc521](https://github.com/mozilla/fxa-auth-server/commit/52dc521))

### chore

- **dependencies:** upgrade mozlog to 2.0.3 ([afa5926](https://github.com/mozilla/fxa-auth-server/commit/afa5926))
- **shrinkwrap:** update fxa-content-server-l10n to 4bf305a1 ([efeef25](https://github.com/mozilla/fxa-auth-server/commit/efeef25))
- **test:** no need to test with node v0.12 ([3ae34da](https://github.com/mozilla/fxa-auth-server/commit/3ae34da))

<a name="1.56.0"></a>

# [1.56.0](https://github.com/mozilla/fxa-auth-server/compare/v1.55.1...v1.56.0) (2016-02-11)

### Bug Fixes

- **config:** Pass 'options.extra.email' to hapi-fxa-oauth, not 'options.email'. ([68572fa](https://github.com/mozilla/fxa-auth-server/commit/68572fa))
- **e2e-email:** adjust expected query arguments for auth-mailer#118 ([b8b345c](https://github.com/mozilla/fxa-auth-server/commit/b8b345c))
- **hawk:** Update to latest hapi-auth-hawk ([078ddc0](https://github.com/mozilla/fxa-auth-server/commit/078ddc0))
- **tests:** Update tests for new fxa-auth-mailer behaviour ([0f25ddd](https://github.com/mozilla/fxa-auth-server/commit/0f25ddd))

### Features

- **config:** Add 'oauth.keepAlive' config option. ([f8abfe2](https://github.com/mozilla/fxa-auth-server/commit/f8abfe2))
- **push:** respond to 400 level errors from the push server by clearing device push info ([b37dc91](https://github.com/mozilla/fxa-auth-server/commit/b37dc91)), closes [#1151](https://github.com/mozilla/fxa-auth-server/issues/1151)

### chore

- **e2e-email:** bg is now translated for 'Firefox Account Verified' ([e5baead](https://github.com/mozilla/fxa-auth-server/commit/e5baead))
- **shrinkwrap:** update shrinkwrap to pick up fxa-auth-mailer#01f8ee75 ([64ca8c0](https://github.com/mozilla/fxa-auth-server/commit/64ca8c0))

<a name="1.55.1"></a>

## [1.55.1](https://github.com/mozilla/fxa-auth-server/compare/v1.55.0...v1.55.1) (2016-01-31)

### Bug Fixes

- **sessiontokens:** effectively disable sessionToken updates ([8c9597d](https://github.com/mozilla/fxa-auth-server/commit/8c9597d))

<a name="1.55.0"></a>

# [1.55.0](https://github.com/mozilla/fxa-auth-server/compare/v1.53.0...v1.55.0) (2016-01-28)

### Bug Fixes

- **tokens:** extend token freshness threshold to 6 hours ([cffc099](https://github.com/mozilla/fxa-auth-server/commit/cffc099))

### Features

- **docker:** Add Dockerfile for self-hosting ([c96cec1](https://github.com/mozilla/fxa-auth-server/commit/c96cec1))
- **metrics:** Added additional user info on statsd messages ([fff4624](https://github.com/mozilla/fxa-auth-server/commit/fff4624))
- **push:** add account verification push updates ([b4d5822](https://github.com/mozilla/fxa-auth-server/commit/b4d5822)), closes [#1141](https://github.com/mozilla/fxa-auth-server/issues/1141)

### chore

- **deps:** update changelog template to 1.1.0 ([4f9af41](https://github.com/mozilla/fxa-auth-server/commit/4f9af41)), closes [#1152](https://github.com/mozilla/fxa-auth-server/issues/1152)
- **docs:** add activity events log ([6c6c307](https://github.com/mozilla/fxa-auth-server/commit/6c6c307)), closes [#312](https://github.com/mozilla/fxa-auth-server/issues/312)
- **e2e-email:** ko is now translated for some email strings ([4aaf43f](https://github.com/mozilla/fxa-auth-server/commit/4aaf43f))
- **shrinkwrap:** update shrinkwrap, notably for auth-mailer and content-server-l10n ([789cb8d](https://github.com/mozilla/fxa-auth-server/commit/789cb8d))

### docs

- **contributing:** Mention git commit guidelines ([d7bf16f](https://github.com/mozilla/fxa-auth-server/commit/d7bf16f))

<a name="1.53.0"></a>

# [1.53.0](https://github.com/mozilla/fxa-auth-server/compare/v1.51.1...v1.53.0) (2016-01-12)

### Bug Fixes

- **events:** emit an event for account reset so sync can update the generation ([7a8a0ad](https://github.com/mozilla/fxa-auth-server/commit/7a8a0ad)
- **e2e-email:** update localQuirks for new translations (cy) ([fb08283](https://github.com/mozilla/fxa-auth-server/commit/fb08283))
- **log:** add mozlog fmt properly ([35d8291](https://github.com/mozilla/fxa-auth-server/commit/35d8291)), closes [#1138](https://github.com/mozilla/fxa-auth-server/issues/1138)

### Features

- **activity:** log successful account resets ([f244af6](https://github.com/mozilla/fxa-auth-server/commit/f244af6)), closes [#1144](https://github.com/mozilla/fxa-auth-server/issues/1144)

<a name="1.51.1"></a>

## [1.51.1](https://github.com/mozilla/fxa-auth-server/compare/v1.51.0...v1.51.1) (2015-12-15)

### Bug Fixes

- **e2e-email:** update localQuirks for new translations ([f9f31d6](https://github.com/mozilla/fxa-auth-server/commit/f9f31d6))

<a name="1.51.0"></a>

# [1.51.0](https://github.com/mozilla/fxa-auth-server/compare/v1.50.1...v1.51.0) (2015-12-14)

### Bug Fixes

- **server:** add missing lastAccessTime field to devices response ([e28a4fa](https://github.com/mozilla/fxa-auth-server/commit/e28a4fa))
- **server:** require device name to be set explicitly ([417f494](https://github.com/mozilla/fxa-auth-server/commit/417f494))
- **travis:** install/use g++-4.8 for node 4.x build of scrypt-hash ([f129b7b](https://github.com/mozilla/fxa-auth-server/commit/f129b7b))

<a name="1.50.1"></a>

## [1.50.1](https://github.com/mozilla/fxa-auth-server/compare/v1.50.0...v1.50.1) (2015-11-23)

### Bug Fixes

- **auth-db-mysql:** update to latest fxa-auth-db-mysql @ 939f04e ([34f2ffb](https://github.com/mozilla/fxa-auth-server/commit/34f2ffb))
- **server:** permit null values in devices response ([3407f4e](https://github.com/mozilla/fxa-auth-server/commit/3407f4e))
- **server:** return isCurrentDevice from /account/devices ([c75a8a3](https://github.com/mozilla/fxa-auth-server/commit/c75a8a3))
- **tests:** ignore error on listen (when auth-db-mysql is already bound) ([0bab602](https://github.com/mozilla/fxa-auth-server/commit/0bab602))
- **tests:** repair travis-ci mysql testing to ensure auth-db-mysql is used ([6eb3639](https://github.com/mozilla/fxa-auth-server/commit/6eb3639))
- **tests:** unskip tests now that they are translated (GH-995) ([ebb60b6](https://github.com/mozilla/fxa-auth-server/commit/ebb60b6))
- **travis-ci:** check that auth-db-mysql reports "MySql" as constructor class name ([cd0e28e](https://github.com/mozilla/fxa-auth-server/commit/cd0e28e))

### Features

- **metrics:** send email-bounce-related metrics to statsd. ([203c054](https://github.com/mozilla/fxa-auth-server/commit/203c054))

<a name="1.50.0"></a>

# [1.50.0](https://github.com/mozilla/fxa-auth-server/compare/v1.49.0...v1.50.0) (2015-11-18)

### Bug Fixes

- **docs:** fix docs typo ([d238fa4](https://github.com/mozilla/fxa-auth-server/commit/d238fa4))
- **locale:** reenable pt-PT locale ([e6617f9](https://github.com/mozilla/fxa-auth-server/commit/e6617f9))
- **mail:** update email support url ([f051b21](https://github.com/mozilla/fxa-auth-server/commit/f051b21))
- **oauth:** look for the correct 'scope' param in oauth response, not 'scopes' ([7fc5030](https://github.com/mozilla/fxa-auth-server/commit/7fc5030))
- **server:** eliminate device validation discrepancies ([6722204](https://github.com/mozilla/fxa-auth-server/commit/6722204))
- **server:** refactor account promise chains to named functions ([05e50aa](https://github.com/mozilla/fxa-auth-server/commit/05e50aa))

### Features

- **oauth:** pass email=false when verifying oauth tokens ([f1306c9](https://github.com/mozilla/fxa-auth-server/commit/f1306c9)), closes [#1109](https://github.com/mozilla/fxa-auth-server/issues/1109)
- **server:** implement device registration api ([d7e976b](https://github.com/mozilla/fxa-auth-server/commit/d7e976b))

<a name="1.49.0"></a>

# [1.49.0](https://github.com/mozilla/fxa-auth-server/compare/v1.48.3...v1.49.0) (2015-11-04)

### Bug Fixes

- **e2e-email:** update for sr localization of subject ([40068d6](https://github.com/mozilla/fxa-auth-server/commit/40068d6))
- **tests:** Eliminate race condition in teardown of concurrent_tests ([bc85618](https://github.com/mozilla/fxa-auth-server/commit/bc85618))
- **tests:** wait for email delivery in concurrent_tests ([fe279ff](https://github.com/mozilla/fxa-auth-server/commit/fe279ff))

### Features

- **profile:** Add oauth-authenticated /account/profile endpoint. ([9ebec1a](https://github.com/mozilla/fxa-auth-server/commit/9ebec1a))

<a name="1.48.3"></a>

## [1.48.3](https://github.com/mozilla/fxa-auth-server/compare/v1.48.2...v1.48.3) (2015-10-29)

### Bug Fixes

- **e2e-email:** exit 1 on error ([5420049](https://github.com/mozilla/fxa-auth-server/commit/5420049))
- **startup:** if error on startup, log and exit ([2c4df03](https://github.com/mozilla/fxa-auth-server/commit/2c4df03))

<a name="1.48.2"></a>

## [1.48.2](https://github.com/mozilla/fxa-auth-server/compare/v1.48.1...v1.48.2) (2015-10-23)

<a name="1.48.1"></a>

## [1.48.1](https://github.com/mozilla/fxa-auth-server/compare/v1.48.0...v1.48.1) (2015-10-21)

### Bug Fixes

- **deps:** shrinkwrap excludes fxa-jwtool->pem-jwk dep if pem-jwk is a devDep ([ffe145e](https://github.com/mozilla/fxa-auth-server/commit/ffe145e))
- **deps:** shrinkwrap excludes fxa-jwtool->pem-jwk dep if pem-jwk is a devDep ([08f0dca](https://github.com/mozilla/fxa-auth-server/commit/08f0dca))

<a name="1.48.0"></a>

# [1.48.0](https://github.com/mozilla/fxa-auth-server/compare/v1.47.1...v1.48.0) (2015-10-21)

### Bug Fixes

- **email:** stop sending new sync device emails ([b7dcef4](https://github.com/mozilla/fxa-auth-server/commit/b7dcef4))

### Features

- **server:** optionally enforce a strict CORS origin ([664d73e](https://github.com/mozilla/fxa-auth-server/commit/664d73e))

<a name="1.47.1"></a>

## [1.47.1](https://github.com/mozilla/fxa-auth-server/compare/v1.47.0...v1.47.1) (2015-10-13)

<a name="1.47.0"></a>

# [1.47.0](https://github.com/mozilla/fxa-auth-server/compare/v1.46.0...v1.47.0) (2015-10-08)

### Features

- **i18n:** Enable Romainian `ro` support. ([c0f419b](https://github.com/mozilla/fxa-auth-server/commit/c0f419b)), closes [mozilla/fxa-content-server#3125](https://github.com/mozilla/fxa-content-server/issues/3125)
- **metrics:** send account verification time to statsd ([65870d3](https://github.com/mozilla/fxa-auth-server/commit/65870d3))

<a name="1.46.0"></a>

# [1.46.0](https://github.com/mozilla/fxa-auth-server/compare/v1.45.1...v1.46.0) (2015-09-23)

### Bug Fixes

- **logging:** use service query parameter in activityEvent ([243879a](https://github.com/mozilla/fxa-auth-server/commit/243879a))
- **tests:** changes for "Firefox Account Verified" in train-46 ([e630ed6](https://github.com/mozilla/fxa-auth-server/commit/e630ed6))
- **tests:** run mysql tests on travis ([f90a8c1](https://github.com/mozilla/fxa-auth-server/commit/f90a8c1)), closes [#1032](https://github.com/mozilla/fxa-auth-server/issues/1032)

### Features

- **basket:** send sync login events to basket ([28842c7](https://github.com/mozilla/fxa-auth-server/commit/28842c7))
- **db:** add function to return user's sessions array ([bfaddc5](https://github.com/mozilla/fxa-auth-server/commit/bfaddc5))
- **logging:** add createdAt to account.signed activity event ([ab4d815](https://github.com/mozilla/fxa-auth-server/commit/ab4d815))

<a name="1.45.0"></a>

# [1.45.0](https://github.com/mozilla/fxa-auth-server/compare/v1.44.1...v1.45.0) (2015-09-14)

### Bug Fixes

- **db:** decrease session token update frequency ([6924fba](https://github.com/mozilla/fxa-auth-server/commit/6924fba))
- **db:** properly encapsulate session token update logic ([92c94c1](https://github.com/mozilla/fxa-auth-server/commit/92c94c1))
- **loadtest:** adjust url for /.well-known/browserid ([85ddb43](https://github.com/mozilla/fxa-auth-server/commit/85ddb43))
- **metrics:** properly report account.uid for account.created ([da29324](https://github.com/mozilla/fxa-auth-server/commit/da29324))
- **tests:** changes to allow setting accept-language for some requests ([bdc9c36](https://github.com/mozilla/fxa-auth-server/commit/bdc9c36))
- **tests:** improved script to checking email of all supported locales ([67ffcd1](https://github.com/mozilla/fxa-auth-server/commit/67ffcd1))
- **tests:** update loadtest build script to work with latest PyFxA. ([08f4d2d](https://github.com/mozilla/fxa-auth-server/commit/08f4d2d))
- **version:** use explicit path with git-config ([986b5b8](https://github.com/mozilla/fxa-auth-server/commit/986b5b8))

<a name="1.44.0"></a>

# [1.44.0](https://github.com/mozilla/fxa-auth-server/compare/v1.42.0...v1.44.0) (2015-08-28)

### Bug Fixes

- **config:** update convict .root() to .getProperties() calls ([4b6cab9](https://github.com/mozilla/fxa-auth-server/commit/4b6cab9))
- **notifier:** calling undefined log.level method throws ([e413713](https://github.com/mozilla/fxa-auth-server/commit/e413713))
- **server:** check errno on database errors ([28627ee](https://github.com/mozilla/fxa-auth-server/commit/28627ee))
- **server:** improve identification of mobile user agents ([cf947d2](https://github.com/mozilla/fxa-auth-server/commit/cf947d2))
- **tests:** make smtp.redirectDomain configurable in remote tests ([6adc10f](https://github.com/mozilla/fxa-auth-server/commit/6adc10f))
- **tests:** unset user-agent fields are null ([a2a7b10](https://github.com/mozilla/fxa-auth-server/commit/a2a7b10))

### Features

- **db:** store user agent and last-access time in sessionTokens ([f0d80ff](https://github.com/mozilla/fxa-auth-server/commit/f0d80ff))
- **l10n:** add en-GB as a supported locale. ([980236a](https://github.com/mozilla/fxa-auth-server/commit/980236a))
- **l10n:** add fa as a supported locale. ([c4b3bd2](https://github.com/mozilla/fxa-auth-server/commit/c4b3bd2))
- **metrics:** add DataDog to activity events, email verified activity events ([63842b0](https://github.com/mozilla/fxa-auth-server/commit/63842b0)), closes [#922](https://github.com/mozilla/fxa-auth-server/issues/922)

<a name="1.42.0"></a>

# [1.42.0](https://github.com/mozilla/fxa-auth-server/compare/v1.41.0...v1.42.0) (2015-07-24)

### Bug Fixes

- **api:** accept service as a query parameter ([3d49b51](https://github.com/mozilla/fxa-auth-server/commit/3d49b51)), closes [#961](https://github.com/mozilla/fxa-auth-server/issues/961)
- **errors:** convert missing parameter errors correctly ([2bbdc7e](https://github.com/mozilla/fxa-auth-server/commit/2bbdc7e))
- **tests:** add an EventEmitter to test/mailbox ([4d0f95a](https://github.com/mozilla/fxa-auth-server/commit/4d0f95a))
- **tests:** skip 3 pt-BR specific tests due to no translation yet ([4659017](https://github.com/mozilla/fxa-auth-server/commit/4659017))
- **tests:** verifyHash should no longer be returned ([7db5996](https://github.com/mozilla/fxa-auth-server/commit/7db5996))

<a name="1.41.0"></a>

# [1.41.0](https://github.com/mozilla/fxa-auth-server/compare/v1.40.0...v1.41.0) (2015-07-07)

<a name="1.40.0"></a>

# [1.40.0](https://github.com/mozilla/fxa-auth-server/compare/v1.39.1...v1.40.0) (2015-06-30)

### Bug Fixes

- **db:** Test for 400 from checkPassword, which shows incorrect password ([45c1ea3](https://github.com/mozilla/fxa-auth-server/commit/45c1ea3))
- **password:** Revert changes induced by #954 pull request ([d3e3462](https://github.com/mozilla/fxa-auth-server/commit/d3e3462))

### Features

- Add account notification emails. ([34ae5d0](https://github.com/mozilla/fxa-auth-server/commit/34ae5d0))

<a name="1.39.0"></a>

# [1.39.0](https://github.com/mozilla/fxa-auth-server/compare/v1.38.0...v1.39.0) (2015-06-11)

### Bug Fixes

- **docs:** Fix Markdown link in api.md ([b65a5a6](https://github.com/mozilla/fxa-auth-server/commit/b65a5a6))
- **docs:** update documentation for example verification code, from 64 to 32 chars ([5c3bf0b](https://github.com/mozilla/fxa-auth-server/commit/5c3bf0b)), closes [#937](https://github.com/mozilla/fxa-auth-server/issues/937)
- **password:** revert part of GH-943; currently in broken state ([4a82735](https://github.com/mozilla/fxa-auth-server/commit/4a82735))
- **test:** add missing .bind's to deferred handlers ([0eaf5b4](https://github.com/mozilla/fxa-auth-server/commit/0eaf5b4))

### Features

- **log:** Add logging of various account event ([8b22c23](https://github.com/mozilla/fxa-auth-server/commit/8b22c23))

<a name="1.38.0"></a>

# [1.38.0](https://github.com/mozilla/fxa-auth-server/compare/v1.37.0...v1.38.0) (2015-05-27)

### Bug Fixes

- **env:** set RESEND_BLACKOUT_PERIOD to zero in development ([068820c](https://github.com/mozilla/fxa-auth-server/commit/068820c))
- **env:** updated development TRUSTED_JKUS to bring back support for the untrusted relier ([1472e74](https://github.com/mozilla/fxa-auth-server/commit/1472e74))
- **test:** use a version of node-ass with updated node-temp ([3b31c52](https://github.com/mozilla/fxa-auth-server/commit/3b31c52))

### Features

- **server:** Log the `service` and `reason` parameters for `/account/login`. ([fa7d1bd](https://github.com/mozilla/fxa-auth-server/commit/fa7d1bd))

<a name="1.37.0"></a>

# [1.37.0](https://github.com/mozilla/fxa-auth-server/compare/v1.36.0...v1.37.0) (2015-05-15)

### Bug Fixes

- **logging:** configuration changes per @whd ([f65106d](https://github.com/mozilla/fxa-auth-server/commit/f65106d))
- **pool:** Stop retrying requests to db-server ([179e1b5](https://github.com/mozilla/fxa-auth-server/commit/179e1b5)), closes [#921](https://github.com/mozilla/fxa-auth-server/issues/921)

<a name="1.36.0"></a>

# [1.36.0](https://github.com/mozilla/fxa-auth-server/compare/v1.35.0...v1.36.0) (2015-04-28)

### Bug Fixes

- **l10n:** pass config.i18n.defaultLanguage to fxa-auth-mailer ([eddc014](https://github.com/mozilla/fxa-auth-server/commit/eddc014))
- **mailer:** add a soft check that we are using the same locales as content-server ([0aa3da7](https://github.com/mozilla/fxa-auth-server/commit/0aa3da7))
- **mailer:** add some tests of various supported, unsupported and non-existent locales ([341a512](https://github.com/mozilla/fxa-auth-server/commit/341a512))
- **mailer:** split out the list of supported locales, for easier maintenance ([0251cb8](https://github.com/mozilla/fxa-auth-server/commit/0251cb8))
- **tests:** a config update now makes uk,hsb,dsb available ([a18ceae](https://github.com/mozilla/fxa-auth-server/commit/a18ceae))
- **tests:** update for some locales that have now translated fxa-auth-mailer strings ([92a444b](https://github.com/mozilla/fxa-auth-server/commit/92a444b))

<a name="1.35.0"></a>

# [1.35.0](https://github.com/mozilla/fxa-auth-server/compare/v1.34.1...v1.35.0) (2015-04-14)

### Bug Fixes

- **httpdb:** Set verifierSetAt for resetAccount() ([791ab91](https://github.com/mozilla/fxa-auth-server/commit/791ab91))
- **options:** -L, --locale <en[,zh-TW,de,...]>; Test only this csv list of locales ([e0a79ae](https://github.com/mozilla/fxa-auth-server/commit/e0a79ae))
- **travis:** set --force flag on validate-shrinkwrap ([327e4c3](https://github.com/mozilla/fxa-auth-server/commit/327e4c3))

<a name="1.33.0"></a>

# [1.33.0](https://github.com/mozilla/fxa-auth-server/compare/03aae55...v1.33.0) (2015-03-17)

### Bug Fixes

- **logging:** log emailRecord.uid as a hex string, not a byte array ([b9a1f67](https://github.com/mozilla/fxa-auth-server/commit/b9a1f67))
- **server:** Fix the "Cannot call method 'tooManyRequests' of undefined error. ([03aae55](https://github.com/mozilla/fxa-auth-server/commit/03aae55)), closes [#665](https://github.com/mozilla/fxa-auth-server/issues/665)

# Older versions

train-32

- Add ability to put an account in "lockout" state after many auth failures - #867

train-32

- Add ability to put an account in "lockout" state after many auth failures - #867

train-31

- Don't forward restmail.net email addresses to basket API - #870

train-30

- Add more fine-grained logging on basket API errors - #839, #856
- Increase passwordForgotToken lifetime to 60mins - #862, #845
- Tell basket that locale="en-US" when the user doesn't provide one explicitly - #863
- Use shiny new PyFxA library for the python loadtests - #844

train-29

- increased basket logging #857
- deleted unused code #847

train-28

- updated hapi to 7.5.3

train-27

- updated fxa-auth-mailer for mail template changes
- added locale to basket api response logging

train-26

- no changes

train-25

- no changes

train-24

- added uid to /session/status #830
- updated dependencies

train-23

- improved operational affordances for scrypt max-pending limit #819
- Fixed JWT related bugs for preVerifyToken #824 #825

train-22

- basket API #818

train-21

- added 'preVerifyToken' optional parameter to /account/create #784
- reset customs state on password reset #798
- added 'resume' optional parameter to email sending endpoints #793

train-20

- limit the number of pending scrypt hashes #783

train-19

- belated major version 1 bump but maintain minor version count
- fixed uid logging issue #755
- nonceFunc logging is now trace instead of info level
- updated many dependencies
- removed awsbox

train-18

- fixed internal server error on /certificate/sign #771
- removed mysql and heap DB implementations #769
- fixed log uid encoding issue #765
- updated documentation

train-17

- added locale to account #751
- better db related error messages for httpdb #754
- updated customs-server #756

train-16

- updated hapi to 6.0.2

train-15

- allow routes to use a base path for hosting in a subdirectory
- updated dependencies
- use poolee module for HTTP requests
- code reorganization

train-14

- moved email sending into fxa-auth-mailer #730
- updated hapi-auth-hawk to mitigate bug (#700) #731
- added `use_https` config option #728
- always return an error on `__heartbeat__` failure #726
- updated documentation

train-13

- added contributing file #719
- added MPL license file
- fix for certificate sign requests when the provided key is invalid #717
- fixed hawk payload verification bug #713
- updated base email templates #709

train-12

- verify an account if its unverified when forgot password verification succeeds #694
- added 'accountRecreated' flag to the request summary log line #695
- deprecate smtp.verificationUrl and passwordResetUrl in favor of contentServer.url #696
- Update the URL for the customs server #702
- add http datastore api #684

train-11

- moved customs-server (fraud/abuse) to its own repo #685
- improved the email based rate-limiting behavior

train-10

- added email_bouncer.js for processing SES email bounces #678
- fixed an email validation bug #681

train-09

- noop

train-08

- added /account/status #656
- added basic email rate limiting #664

train-07

- improve concurrent duplicate request handling #626
- improved test coverage #628
- added SNS account delete notifier #629
- added fxa-verifiedEmail to the signed certificate #630
- removed dependency on redis #634
- added db_patcher for db migrations #643
- improved redirectTo domain validation
- updated readme design doc link #616
- added /password/forgot/status endpoint #636
- added /session/status endpoint #637
- exit key_server when stdout is piped and the other process exits
- improved mysql connection error handling

train-06

- stop logging OPTIONS requests #619
- fixed /verify_email uid parameter validation
- default config.env to prod #614

train-05

- fixed some i18n issues #611
- use npm shrinkwrap #603
- don't send verify emails to verified accounts #609

train-04

- added `lockdown` for stable dependencies #19
- refactored mysql.js #588
- allow repeat signup against unverified emails #593
- added cache-control to /.well-known/browserid #597
- collect loggable data before authentication #601

train-03

- upgrade hapi to 2.4.0
- fixed password reset account lockout bug #575
- upgrade mysql to 2.1.0
- added mysql stat log lines
- default mysql pools to 10 connections instead of 100
- improved mysql connection error handling #581
- check and cache ts+nonce pairs, not just plain nonces #584
- disable HAWK timestamp checking in authentication #585

train-02

- added `fxa-lastAuthAt` to signed certificates #547
- load test enhancements
- fixed redirectTo bug in /recovery_email/resend_code #563
- updated mysql module from 2.0.0 to 2.0.1
- improved mysql error handling #566
- implemented new request logging convention #565
- fixed remote test timing issue #512
- more comprehensive email address validation #573
- added CHANGELOG :)

train-01

- all the things
