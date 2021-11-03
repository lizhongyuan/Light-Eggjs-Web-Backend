'use strict';


const { Controller } = require('egg');


class FooController extends Controller {

    constructor(ctx) {
        super(ctx);

        this.service = ctx.service;
        this.reqBody = ctx.request.body;
    }

    async add() {

        const { ctx } = this;

        // ctx.logger.info('controller/demo/foo/add');
        ctx.extLogger.info('controller/demo/foo/add');

        const { operand1, operand2 } = this.reqBody;

        var res = await this.service.demo.foo.add(operand1, operand2);

        ctx.setSuccessResBody(res, 'add finished');
    }

    async minus() {

        const { ctx } = this;

        ctx.extLogger.info('controller/demo/foo/minus');

        const { minuend, subtrahend } = this.reqBody;

        var res = await this.service.demo.foo.minus(minuend, subtrahend);

        ctx.setSuccessResBody(res, 'minus finished');
    }


    async divide() {

        const { ctx } = this;

        ctx.extLogger.info('controller/demo/foo/divide');

        const { dividend, divisor } = this.reqBody;

        var res = await this.service.demo.foo.divide(dividend, divisor);

        ctx.setSuccessResBody(res, 'divide finished');
    }
}


module.exports = FooController;
