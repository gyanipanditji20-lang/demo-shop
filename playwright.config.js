const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL || 'https://gyanipanditji20-lang.github.io/demo-shop/',
    video: 'on',
    trace: 'on',
    launchOptions: { slowMo: Number(process.env.SLOWMO || 0) }
  },
  reporter: [['list'], ['html', { open: 'never' }]]
});
