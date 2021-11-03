'use strict';


module.exports = app => {
    const { router, controller, middleware, config } = app;

    const demoParamValidator = middleware.validate.demo.param;
    const demoMathValidator = middleware.validate.demo.math;

    router.post('/demo/foo/add',
        demoParamValidator('ADD_OPERATION'),
        controller.demo.foo.add
    );


    router.post('/demo/foo/minus',
        demoParamValidator('MINUS_OPERATION'),
        controller.demo.foo.minus
    );


    router.post('/demo/foo/divide',
        demoParamValidator('DIVIDE_OPERATION'),
        demoMathValidator(config),
        controller.demo.foo.divide
    );
};
