import { Page, Locator } from 'playwright';

export class GooglePage {
    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.google.com');
    }

    public async searchFor(term: string): Promise<void> {
        await this.page.fill('input[name="q"]', term);
        await this.page.keyboard.press('Enter');
    }

    public async getResults(): Promise<Locator> {
        return await this.page.locator('.g');
    }
}
