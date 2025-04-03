import { expect } from 'expect-webdriverio';
import { browser } from '@wdio/globals';
import { NhlPage } from '../src/pages/nhl.page';

describe('NHL.com WebdriverIO Tests', () => {
    let nhlPage: NhlPage;

    before(async () => {
        nhlPage = new NhlPage();
        await nhlPage.open();
    });

    it('Check Philadelphia Flyers has more than one video and story', async () => {
        await nhlPage.search('Flyers');

        const stories = await nhlPage.storyFilters;
        const videos = await nhlPage.videoFilters;

        expect(stories.length).toBeGreaterThan(0);
        expect(videos.length).toBeGreaterThan(0);
    });

    it('"Contact Us" form can be completed and sent', async () => {
        await nhlPage.openContactUs();
        await nhlPage.fillContactForm();

        await browser.waitUntil(async () => !(await nhlPage.submitButton.getAttribute('disabled')));

        await nhlPage.submitButton.click();
        await browser.waitUntil(async () => (await browser.getUrl()).includes('formstack.com'));

        expect(await browser.getUrl()).toContain('formstack.com/forms/index.php');
    });
});
