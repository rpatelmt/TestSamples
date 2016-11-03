'use strict';

// Karma configuration

module.exports = function (config) {
    config.set({

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-ng-html2js-preprocessor',
            //'karma-ie-launcher',
            'karma-chrome-launcher',
            //'karma-firefox-launcher',
            //'karma-safari-launcher',
	    'karma-phantomjs-launcher',
            //'karma-html-reporter',
            'karma-mocha-reporter'
        ],

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        preprocessors: {
            'content/js/DirectiveExample/myTemplate.html': ['ng-html2js']
        },

        //This preprocessor converts HTML files into JS strings and generates Angular modules. 
        //These modules, when loaded, puts these HTML files into the $templateCache and therefore Angular won't try to fetch them from the server.
        ngHtml2JsPreprocessor:{
            prependPrefix: '/',
            moduleName: 'my.templates'
        },

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],

        // list of files / patterns to load in the browser
        files: [
            './node_modules/angular/angular.js',                              // angular
            './node_modules/angular-ui-router/release/angular-ui-router.js',  // ui-router
            './node_modules/angular-mocks/angular-mocks.js',                  // loads our modules for tests
            'content/js/Users/app.module.js',                                 // our Users module
            'content/js/Users/users.service.js',                              // our Users service
            'content/js/Users/users.controller.js',                           // our Users controller
            'content/test/Users/users-spec.js',                               // our test file for our Users service
            //'content/js/PasswordChecker/passwordChekerApp.module.js',       // our password checker app module
            //'content/js/PasswordChecker/passwordCheker.controller.js',      // our password checker controller
            //'content/test/PasswordChecker/passwordStrength-spec.js'         // our test file for our password checker controller
            //'content/js/DirectiveExample/app.js',
            //'content/js/DirectiveExample/directive.js',
            //'content/js/DirectiveExample/directive.controller.js',
            //'content/js/DirectiveExample/myTemplate.html',
            //'content/test/DirectiveExample/directive-spec.js',
        ],

        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ['progress'],
        //reporters: ['progress', 'html'],
        reporters: ['mocha'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['PhantomJS', 'IE', 'Chrome', 'Firefox', 'Safari'],
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
