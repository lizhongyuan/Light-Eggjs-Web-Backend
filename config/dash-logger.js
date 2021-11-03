'use strict';


const homeDir = require('os').homedir();


exports.extLoggerConfig = {
  dataPattern: '-YYYY.MM.DD',
  isDatePrefix: false,
  filename: 'general-light-eggjs-web-backend',
  dir: 'logs',
  level: 'info',
  console: false,
  needErrorFile: true,
  autoTraceId: true,
}
