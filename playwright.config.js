const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests/specs',
  timeout: 30000, // Increased global timeout
  expect: {
    timeout: 5000 // Assertion timeout
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['list'],
    ['junit', { outputFile: 'reports/junit/results.xml' }]
  ],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10000, // Action-specific timeout
    navigationTimeout: 15000 // Navigation timeout
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 }
      },
    },
  ],
};

module.exports = config;