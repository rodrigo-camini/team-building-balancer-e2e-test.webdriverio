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
        './tests/**/*.ts',
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
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--window-size=1400,1050', // Defina o tamanho da janela do navegador
                    'disable-gpu', // Se necessário, desative a aceleração de GPU
                    //'--headless', // Opcional, se você quiser rodar os testes sem abrir a janela do navegador
                ],
            },
        },
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

    /**
    * Function to be executed before a test (in Mocha/Jasmine) starts.
    */
    beforeTest: async function (test, context) {
        // Verifica a variável de ambiente MOBILE
        const mobileEnabled = process.env.MOBILE === 'true';
        console.log(`MOBILE is set to: ${mobileEnabled}`);

        if (mobileEnabled) {
            // Emula o dispositivo móvel usando o nome do dispositivo
            await browser.emulate('device', 'iPhone 14 Plus');
        } else {
            console.log('Mobile emulation is disabled');
        }
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
