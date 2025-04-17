import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'src/tests',
    timeout: 30000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 }
    },
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['allure-playwright'],
      ]
});
