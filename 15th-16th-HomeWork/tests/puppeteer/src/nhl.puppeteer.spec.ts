import puppeteer, { Browser, Page } from 'puppeteer';
import { describe, it, beforeAll, afterAll, expect } from 'vitest';

describe('NHL.com puppeteer Tests', () => {
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
            args: ['--start-maximized', '--window-size=1920,1080']
        });

        page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto('https://www.nhl.com/', { waitUntil: 'domcontentloaded' });
    });

    afterAll(async () => {
        await browser.close();
    });

    it('Check Philadelphia Flyers has more than one video and story', async () => {
        await page.locator('a.nhl-c-header__btn--search').click();
        await page.locator('input#input-search-query').fill('Flyers');
        await page.keyboard.press('Enter');

        await page.waitForSelector('.nhl-o-search-facets__list');

        const storyFilters = await page.$$('.nhl-o-search-facets__item a[href*="type=type&value=story"]');
        const videoFilters = await page.$$('.nhl-o-search-facets__item a[href*="type=entityCode&value=video"]');

        expect(storyFilters.length).toBeGreaterThan(0);
        expect(videoFilters.length).toBeGreaterThan(0);
    }, 15000);

    it('"Contact Us" form can be completed and send', async () => {
        await page.locator('.nhl-o-menu__link--more').click();
        await page.locator('a[href="/info/contact-us"]').click();

        page.locator('#fsForm4937559');
        await page.locator('#field129743091-first').fill('Robot');
        await page.locator('#field129743091-last').fill('Dreams');
        await page.locator('#field129743092').fill('test@test.com');
        await page.select('#field129743102', 'NHL.com');
        await page.locator('#field129743095').fill('ignore this message its for testing purposes');

        await page.waitForFunction(() => {
            const submitButton = document.querySelector('#fsSubmitButton4937559') as HTMLButtonElement;
            return submitButton && !submitButton.disabled;
        });

        await Promise.all([
            page.locator('#fsSubmitButton4937559').click(),
            page.waitForNavigation({ waitUntil: 'networkidle2' })
        ]);

        expect(page.url()).toBe('https://nhl-nhwkf.formstack.com/forms/index.php');
    }, 30000);
});
