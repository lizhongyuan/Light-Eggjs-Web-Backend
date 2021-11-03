'use strict';


const ERR_CODE = {

  SUCCESS: 'SUCCESS',

  ERR_PARAM_ILLEGAL: 'ERR_PARAM_ILLEGAL',

  ERR_BIZ_FORBIDDEN: 'ERR_BIZ_FORBIDDEN',

  ERR_API_WRONG: 'ERR_API_WRONG',

  ERR_SERVICE_WRONG: 'ERR_SERVICE_WRONG',

  /* todo: add ERR CODE as business */
};


class WebServiceError extends Error {

  constructor(param) {
    super();

    const { code, message, detail, info } = param;

    this.code = code;
    this.message = message;
    this.data = detail;
    this.info = info;
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      data: this.data,
      info: this.info
    };
  }

  toString() {
    return this.toJSON().toString();
  }
}


module.exports = {
  ERR_CODE,
  FooError: WebServiceError
};
