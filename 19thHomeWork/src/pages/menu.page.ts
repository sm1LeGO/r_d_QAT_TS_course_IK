import { Page, Locator } from '@playwright/test';

export class MenuPage {
    public constructor(private readonly page: Page) {}

    public get menuButton(): Locator {
        return this.page.locator('#react-burger-menu-btn');
    }

    public get logoutButton(): Locator {
        return this.page.locator('#logout_sidebar_link');
    }

    public async logout(): Promise<void> {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}
