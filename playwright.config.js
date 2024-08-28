const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  workers: 4,
  retries: 1, // Number of retries for failing tests
  use: {
    headless: false, // Run tests in headless mode
    screenshot: 'on', // Take screenshots only on test failure
    video: 'on', // Record video only on test failure
    trace: 'on-first-retry',
  },
  /* Configure projects for major browsers */
  projects: [
     {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
  reporter: [['list'], ['allure-playwright']],
});

