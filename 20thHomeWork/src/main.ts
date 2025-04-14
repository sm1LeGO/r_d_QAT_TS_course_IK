import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

setDefaultTimeout(60000);

setWorldConstructor(function () {
    return {
        async before() {
            const browser: Browser = await chromium.launch();
            const context = await browser.newContext();
            const page: Page = await context.newPage();
            (this as any).page = page;
        },

        async after() {
            await (this as any).page.close();
        }
    };
});
