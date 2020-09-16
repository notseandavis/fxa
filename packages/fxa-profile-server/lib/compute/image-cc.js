/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
const sharp = require('sharp');
const config = require('../config');
const img = require('../img');
const logger = require('../logging')('compute.image-cc');

const CONTENT_TYPE_PNG = 'image/png';

logger.info('worker.config', { config: config.get('img') });

function processImage(src, width, height) {
  return sharp(src)
    .resize(width, height, { withoutEnlargement: true })
    .png()
    .toBuffer();
}

function compute(msg, callback) {
  var id = msg.id;
  var variant = msg.suffix || 'default';
  var suffix = msg.suffix ? '_' + msg.suffix : '';
  var src = Buffer.from(msg.payload);
  var start = Date.now();
  var s3Start = start;
  logger.debug('process.start', { bytes: src.length, variant: variant });
  processImage(src, msg.width, msg.height)
    .then(function (out) {
      s3Start = Date.now();
      logger.info('time.ms.gm.' + variant, { duration: s3Start - start });
      logger.debug('process.end', { bytes: out.length, variant: variant });
      return img.upload(id + suffix, out, CONTENT_TYPE_PNG);
    })
    .then(
      function () {
        logger.info('time.ms.s3.' + variant, {
          duration: Date.now() - s3Start,
        });
        callback({ id: id });
      },
      function (err) {
        logger.error('compute', err);
        callback({ id: id, error: err.message });
      }
    );
}
exports.compute = compute;

function response(res) {
  process.send(res);
}

process.on('message', function onMessage(msg) {
  logger.debug('onMessage', msg.id);
  compute(msg, response);
});
