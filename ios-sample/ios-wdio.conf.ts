import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },

    hostname: 'mobile-hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',
    baseUrl: "https://mobile-hub.lambdatest.com",

    user: "",
    key: "",

    services: [
        [
            "lambdatest",
            {
                tunnel: false
            }
        ]
    ],
    
    specs: [
        './../test/specs/ios_test/ios.e2e.ts'

    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'IOS',
        app: "",
        "deviceName": "iPhone .*",
        "platformVersion": "15",
        "isRealMobile": true
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 1,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
