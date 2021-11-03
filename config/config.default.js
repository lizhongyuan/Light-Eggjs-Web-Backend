'use strict';


const path = require('path');


module.exports = cfg => {

    const config = exports = {};

    config.keys = cfg.name + '_1547202592910_4042';

    config.middleware = [
        'errorHandler'
    ];

    // ip端口
    config.cluster = {
        listen: {
            port: 3000,
            hostname: '127.0.0.1'
        }
    };

    config.httpclient = {
        request: {
            timeout: 20 * 1000
        }
    };

    // 日志配置
    config.logger = {
        dir: path.join(cfg.root, 'logs'),
        appLogName: `${cfg.name}-web.log`,
        coreLogName: `${cfg.name}-core-web.log1`,
        agentLogName: `${cfg.name}-core-agent.log1`,
        errorLogName: `${cfg.name}-common-error.log`
    };

    config.customLogger = {
        scheduleLogger: {
            file: path.join(cfg.root, 'logs', 'core-schedule.log')
        }
    };

    config.security = {
        csrf: {
            enable: false
        }
    };

    config.bodyParser = {
        jsonLimit: '50mb',
        formLimit: '50mb'
    };

    return config;
};
