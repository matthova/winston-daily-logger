const winston = require('winston');
require('winston-daily-rotate-file');

module.exports = function setupLogger() {
  // By default only info, warn, and error are written to the console.
  // Additional changes need to be added to the
  // loggerTransport to write verbose, debug, or silly to console
  // The level written to file is determined by the .env file
  const appName = process.env.APP_NAME || 'app';
  const appId = process.env.APP_ID || 1;
  const loggerTransport = new winston.transports.DailyRotateFile({
    filename: `${appName}-${appId}.log`,
    datePattern: './logs/yyyy-MM-dd-',
    prepend: true,
    level: process.env.LOG_LEVEL || 'info'
  });

  const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      loggerTransport,
    ],
  });

  // Note, the following log levels are available
  // { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
  return logger;
}