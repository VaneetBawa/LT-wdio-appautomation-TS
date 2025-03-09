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

    user: "vaneetb",
    key: "8iwAZa7mEGu7pc41aIkNJpnvHFc5lcIgy1cF4joZatI0lWvP1u",

    services: [
        [
            "lambdatest",
            {
                tunnel: false
            }
        ]
    ],
    
    specs: [
        './../test/specs/android_test/test.e2e.ts'

    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        app: "lt://APP10160492431717497753131402",
        "deviceName": "Pixel .*",
        "platformVersion": "12",
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
