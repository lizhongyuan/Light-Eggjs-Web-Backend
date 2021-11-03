'use strict';


const { Constant } = require('../../../common');
const { FooError, ERR_CODE } = Constant.Err;
const { ERR_PARAM_ILLEGAL } = ERR_CODE;


module.exports = config => {

  return async function divisorValidator(ctx, next) {
    const { divisor } = ctx.request.body;

    if (divisor === 0) {
      ctx.extLogger.error("Divisor is 0, illegal.");

      const err = new FooError({ code: ERR_PARAM_ILLEGAL});
      return Promise.reject(err);
    }

    await next();
  };
};
