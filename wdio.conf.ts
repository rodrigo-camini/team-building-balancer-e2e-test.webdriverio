import type { Options } from '@wdio/types'
require('dotenv').config();
import path from 'path'

export const config: WebdriverIO.Config = {

    //@ts-ignore
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true,
        },
    },

    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: [
        // './test/specs/**/*.ts',
        './tests/login/login.test.ts'
    ],
    suites: {
        login: [
            './tests/login/**/*.ts'
        ],
        register: [
            './tests/register/**/*.ts'
        ],
        otherFeature: [
            // ...
        ]
    },

    exclude: [
    ],

    maxInstances: 10,

    capabilities: [
        // {
        //     browserName: 'chrome',
        //     'goog:chromeOptions': {
        //         args: [
        //             '--window-size=1400,1050',
        //             'disable-gpu'
        //         ]
        //     }
        // },
        // {
        //     browserName: 'firefox',
        //     'moz:firefoxOptions': {
        //         args: ['--window-size=1400,1050']
        //     }
        // },
        {
            browserName: 'msedge',
            'ms:edgeOptions': {
                args: [
                    '--window-size=1400,1050',
                ]
            }
        },
        // {
        //     browserName: 'MicrosoftEdge'
        // }
    ],

    logLevel: 'silent',

    bail: 0,

    baseUrl: '',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    specFileRetries: 1,

    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: path.resolve('./reports/'),
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
