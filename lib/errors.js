'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on bitcore-payment-protocol Module: {0}'
};

module.exports = require('bitcore-lib-mue2').errors.extend(spec);
