'use strict';


const { Service } = require('egg');
const { Decimal } = require('decimal.js');


class FooService extends Service {

  constructor(ctx) {
    super(ctx);
    this.service = ctx.service;
    this.dao = ctx.service.dao;
    this.model = ctx.model;
  }


  async add(operand1, operand2) {
    const { ctx } = this;
    ctx.extLogger.info(`service/demo/add, operand1: ${operand1}, operand2: ${operand2}`);

    const sum = operand1 + operand2;

    return sum;
  }


  async minus(minuend, subtrahend) {
    const { ctx } = this;
    ctx.extLogger.info(`service/demo/minus, minuend: ${minuend}, subtrahend: ${subtrahend}`);

    const res = minuend - subtrahend;

    return res;
  }


  async divide(dividend, divisor) {
    const { ctx } = this;
    ctx.extLogger.info(`service/demo/divide, dividend: ${dividend}, divisor: ${divisor}`);

    const res = Decimal(dividend) / Decimal(divisor);

    return res;
  }
}


module.exports = FooService;
