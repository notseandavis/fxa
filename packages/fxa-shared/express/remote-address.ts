/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Utility function to parse the client IP address from request headers.

import express from 'express';
import joi from 'joi';

const IP_ADDRESS = joi.string().ip().required();

const remoteAddress =
  (clientIpAddressDepth: number) => (request: express.Request) => {
    let ipAddresses = ((request.headers['x-forwarded-for'] as string) || '')
      .split(',')
      .map((address) => address.trim());
    ipAddresses.push(
      request.ip || (request.connection.remoteAddress as string)
    );
    ipAddresses = ipAddresses.filter(
      (ipAddress) => !IP_ADDRESS.validate(ipAddress).error
    );

    let clientAddressIndex = ipAddresses.length - clientIpAddressDepth;
    if (clientAddressIndex < 0) {
      clientAddressIndex = 0;
    }

    return {
      addresses: ipAddresses,
      clientAddress: ipAddresses[clientAddressIndex],
    };
  };

export default remoteAddress;
module.exports = remoteAddress;
