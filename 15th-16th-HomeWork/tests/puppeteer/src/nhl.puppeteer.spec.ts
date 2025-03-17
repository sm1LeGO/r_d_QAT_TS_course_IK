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

    it(
        'Check Philadelphia Flyers has more than one video and story',
        async () => {
            await page.waitForSelector('a.nhl-c-header__btn--search');
            await page.click('a.nhl-c-header__btn--search');

            await page.waitForSelector('input#input-search-query');
            await page.type('input#input-search-query', 'Flyers');
            await page.keyboard.press('Enter');

            await page.waitForSelector('.nhl-o-search-facets__list');

            const videoFilter = await page.$('.nhl-o-search-facets__item a[href*="type=entityCode&value=video"]');
            const storyFilter = await page.$('.nhl-o-search-facets__item a[href*="type=type&value=story"]');

            expect(videoFilter).not.toBeNull();
            expect(storyFilter).not.toBeNull();

            const videoText = await page.$eval(
                '.nhl-o-search-facets__item a[href*="type=entityCode&value=video"] .nhl-o-menu__txt',
                el => el.textContent
            );

            const storyText = await page.$eval(
                '.nhl-o-search-facets__item a[href*="type=type&value=story"] .nhl-o-menu__txt',
                el => el.textContent
            );

            const videoCount = parseInt(videoText?.match(/\d+/)?.[0] || '0', 10);
            const storyCount = parseInt(storyText?.match(/\d+/)?.[0] || '0', 10);

            console.log(`🔍 Founded: ${videoCount}, Stories: ${storyCount}`);

            expect(videoCount).toBeGreaterThan(1);
            expect(storyCount).toBeGreaterThan(1);
        },
        15000
    );
    it(
        '"Contact Us" form can be completed and send',
        async () => {
            await page.waitForSelector('.nhl-o-menu__link--more', { timeout: 10000 });
            await page.click('.nhl-o-menu__link--more');

            await page.waitForSelector('#bd5ddadd-d50d-4800-85eb-88ac552c1501', { timeout: 10000 });
            await page.waitForSelector('a[href="/info/contact-us"]', { timeout: 10000 });
            await page.click('a[href="/info/contact-us"]');

            await page.waitForSelector('#fsForm4937559', { timeout: 10000 });
            await page.waitForSelector('#field129743091-first', { timeout: 10000 });
            await page.waitForSelector('#field129743091-last', { timeout: 10000 });
            await page.waitForSelector('#field129743092', { timeout: 10000 });
            await page.waitForSelector('#field129743102', { timeout: 10000 });
            await page.waitForSelector('#field129743095', { timeout: 10000 });

            await page.type('#field129743091-first', 'Robot');
            await page.type('#field129743091-last', 'Dreams');
            await page.type('#field129743092', 'test@test.com');
            await page.select('#field129743102', 'NHL.com');
            await page.type('#field129743095', 'ignore this message it\'s for testing purposes');

            expect(await page.$eval('#field129743091-first', el => (el as HTMLInputElement).value)).toBe('Robot');
            expect(await page.$eval('#field129743091-last', el => (el as HTMLInputElement).value)).toBe('Dreams');
            expect(await page.$eval('#field129743092', el => (el as HTMLInputElement).value)).toBe('test@test.com');
            expect(await page.$eval('#field129743102', el => (el as HTMLSelectElement).value)).toBe('NHL.com');
            expect(await page.$eval('#field129743095', el => (el as HTMLTextAreaElement).value)).toBe('ignore this message it\'s for testing purposes');

            await page.click('#fsSubmitButton4937559');
            await page.waitForFunction(
                () => window.location.href === 'https://nhl-nhwkf.formstack.com/forms/index.php',
                { timeout: 10000 }
            );
        },
        20000
    );
});

