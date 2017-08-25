# winston-daily-logger

An opinionated logger that keeps track of logs by day.  
Ideally, consumers of this logger will declare process.env.APP_NAME and process.env.APP_ID to help create a unique log file for your app.
For example if
```
process.env.APP_NAME = 'MyAwesomeApp'
```
and
```
process.env.APP_ID = '33fcf9d3-9adf-41f6-83c8-311715550f87'
```
A log file will be created with the name of the app, the app's unique ID, and the current date, such as
```
2017-08-25-MyAwesomeApp-33fcf9d3-9adf-41f6-83c8-311715550f87.log
```

To setup your logger, do the following  
  - Install the module
  ```
npm install --save winston-daily-logger
```
  - Be sure to have declared APP_NAME and APP_ID in your process.env
  - Initialize the logger
  ```
global.logger = require('winston-daily-logger')();
logger.info('Logger initialized');
```
