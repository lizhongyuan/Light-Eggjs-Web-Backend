'use strict';

// had enabled by egg
// exports.static = true;


exports.cors = {
  enable: true,
  package: 'egg-cors'
};

/*
exports.passport = {
  enable: true,
  package: 'egg-passport'
};


exports.validate = {
  enable: true,
  package: 'egg-validate'
};
 */


exports.mongoose = {
  enable: true,
  package: 'egg-mongoose'
};
