'use strict';


const Joi = require('@hapi/joi');


const addOperationSchemaJson = {

  // 加数1, (-1000, 1000)
  operand1: Joi.number().integer().min(-1000)
    .max(1000),

  // 加数2, (-1000, 1000)
  operand2: Joi.number().integer().min(-1000)
    .max(1000),
};


const minusOperationSchemaJson = {

  // 被减数, (-1000, 1000)
  minuend: Joi.number().integer().min(-1000)
    .max(1000),

  // 减数, (-1000, 1000)
  subtrahend: Joi.number().integer().min(-1000)
    .max(1000),
};


const divideOperationSchemaJson = {

  // 被除数, (-1000, 1000)
  dividend: Joi.number().integer().min(-1000)
    .max(1000),

  // 除数, (-1000, 1000)
  divisor: Joi.number().integer().min(-1000)
    .max(1000),
};


module.exports = {
  addOperationSchemaJson,
  minusOperationSchemaJson,
  divideOperationSchemaJson,
};
