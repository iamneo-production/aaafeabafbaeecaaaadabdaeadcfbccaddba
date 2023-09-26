
const puppeteer = require('puppeteer');
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    specReporter: {
      maxLogLines: 5,          
      suppressErrorSummary: true,
      suppressFailed: false,     
      suppressPassed: false,     
      suppressSkipped: true,  
      showSpecTiming: false,      
      failFast: true,            
      prefixes: {
        success: '    OK: ',     
        failure: 'FAILED: ',    
        skipped: 'SKIPPED: '      
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['CustomChromeHeadless'],
    customLaunchers: {
      CustomChromeHeadless: {
        base: 'Chrome',
        flags: ['--headless','--disable-gpu','--remote-debugging-port=9222','--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: '/usr/bin/chromium-browser'
      },
    },
    singleRun: true,
    restartOnFileChange: false
  });
};
