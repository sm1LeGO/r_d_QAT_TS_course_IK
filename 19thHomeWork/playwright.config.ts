import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    use: {
        headless: true,
        baseURL: 'https://www.saucedemo.com',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
});
