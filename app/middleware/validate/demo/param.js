'use strict';


const Joi = require('@hapi/joi');

const { Validate, Constant } = require('../../../common');
const { FooError, ERR_CODE } = Constant.Err;
const { RES_BODY } = Constant.Response;
const { ERR_PARAM_ILLEGAL } = ERR_CODE;

const {
  addOperationSchemaJson,
  minusOperationSchemaJson,
  divideOperationSchemaJson,
} = Validate.Demo.Foo;


async function addOperationBodyValidator(ctx, next) {

  ctx.extLogger.info('addOperationBodyValidator');

  try {
    await Joi.validate(ctx.request.body, addOperationSchemaJson);
  } catch (err) {
    let errCode = ERR_PARAM_ILLEGAL;
    const message = `${RES_BODY[errCode].msg}, ${err.toString()}`;

    ctx.extLogger.error(`addOperationBodyValidator, Joi.validate err: ${err.toString()}`);

    throw new FooError({ code: errCode, message });
  }

  await next();
}


async function minusOperationBodyValidator(ctx, next) {

  ctx.extLogger.info('minusOperationBodyValidator');

  try {
    await Joi.validate(ctx.request.body, minusOperationSchemaJson);
  } catch (err) {
    let errCode = ERR_PARAM_ILLEGAL;
    const message = `${RES_BODY[errCode].msg}, ${err.toString()}`;

    ctx.extLogger.error(`minusOperationBodyValidator, Joi.validate err: ${err.toString()}`);

    throw new FooError({ code: errCode, message });
  }

  await next();
}


async function divideOperationBodyValidator(ctx, next) {

  ctx.extLogger.info('divideOperationBodyValidator');

  try {
    await Joi.validate(ctx.request.body, divideOperationSchemaJson);
  } catch (err) {
    let errCode = ERR_PARAM_ILLEGAL;
    const message = `${RES_BODY[errCode].msg}, ${err.toString()}`;

    ctx.extLogger.error(`divideOperationBodyValidator, Joi.validate err: ${err.toString()}`);

    throw new FooError({ code: errCode, message });
  }

  await next();
}


module.exports = (apiName) => {
  switch (apiName) {
    case 'ADD_OPERATION':
      return addOperationBodyValidator;
    case 'MINUS_OPERATION':
      return minusOperationBodyValidator;
    case 'DIVIDE_OPERATION':
      return divideOperationBodyValidator;
    default:
      return null;
  }
};
