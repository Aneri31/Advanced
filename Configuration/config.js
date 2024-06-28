const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '../tests', 
  timeout: 30000,
  use: {
    // Common settings for all browsers
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
  workers: 3, // Specify the number of workers for parallel execution
  reporter: [
    ['list'], // Keep the default list reporter
    ['html', { outputFolder: 'test-results/html-report' }]
  ],
});
