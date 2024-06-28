const browsers = ['chromium', 'firefox', 'webkit'];
const { test, expect, chromium, firefox, webkit } = require('@playwright/test');

browsers.forEach(browser => {
    test(`Login to Flipkart - ${browser}`, async ({ page }) => {
        let browserInstance;

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

        const context = await browserInstance.newContext();
        page = await context.newPage();
        
        await page.goto('https://www.flipkart.com');
        
        await browserInstance.close();
    });
});