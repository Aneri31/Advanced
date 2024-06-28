const { test, expect, chromium, firefox, webkit } = require('@playwright/test');
const CommonUtils = require('./commonutils');

const browsers = ['chromium', 'firefox', 'webkit'];

browsers.forEach(browser => {
    test.describe(`Amazon Product Tests - ${browser}`, () => {
        let browserInstance;
        let page;
        let commonUtils;

        test.beforeEach(async ({}) => {
            switch (browser) {
                case 'chromium':
                    browserInstance = await chromium.launch({ headless: false });
                    break;
                case 'firefox':
                    browserInstance = await firefox.launch({ headless: false });
                    break;
                case 'webkit':
                    browserInstance = await webkit.launch({ headless: false });
                    break;
                default:
                    throw new Error(`Unsupported browser type: ${browser}`);
            }
            page = await browserInstance.newPage();
            commonUtils = new CommonUtils(page);
        });

        test.afterEach(async () => {
            await browserInstance.close();
        });

        test('Search Product', async () => {
            await commonUtils.searchProduct('iPhone 14');
        });

        test('Other Test', async () => {
            await console.log("123");
        });

        test('Another Test', async () => {
            await console.log("1235678");
        });
    });
});
