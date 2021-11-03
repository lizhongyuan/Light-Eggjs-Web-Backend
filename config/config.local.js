'use strict';

module.exports = cfg => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = cfg.name + '_1547202592910_4042';

  config.middleware = [
    'errorHandler'
  ];

  return config;
};
