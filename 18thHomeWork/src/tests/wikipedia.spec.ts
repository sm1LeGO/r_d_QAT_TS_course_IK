import { test, expect } from '@playwright/test';
import { WikipediaPage } from '../pages/wikipedia-page';

test.describe('Wikipedia Tests', () => {
    let wikiPage: WikipediaPage;

    test.beforeEach(async ({ page }) => {
        wikiPage = new WikipediaPage(page);
        await wikiPage.visit();
    });

    test('Search info', async () => {
        await wikiPage.search('Playwright');
        await expect(wikiPage.page).toHaveURL(/Playwright/);
    });

    test('Language change to Ukrainian', async () => {
        await wikiPage.changeLanguageToUkrainian();
        await expect(wikiPage.page).toHaveURL(/uk.wikipedia.org/);
    });
});
