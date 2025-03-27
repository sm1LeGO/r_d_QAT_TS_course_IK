import { test, expect } from '@playwright/test';
import { WikipediaPage } from '../pages/wikipedia-page';

test.describe('Wikipedia Tests', () => {
    test('Check header', async ({ page }) => {
        const wikiPage = new WikipediaPage(page);
        await wikiPage.visit();

        await expect(page).toHaveTitle(/Wikipedia/);
    });

    test('Check Search', async ({ page }) => {
        const wikiPage = new WikipediaPage(page);
        await wikiPage.visit();
        await wikiPage.search('Playwright');

        await expect(page).toHaveURL(/(wiki\/Playwright|search)/);
    });

    test('Chack language change', async ({ page }) => {
        const wikiPage = new WikipediaPage(page);
        await wikiPage.visit();
        await wikiPage.switchToUkrainian();

        await expect(page).toHaveURL(/uk\.wikipedia\.org/);
    });
});
