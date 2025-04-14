import { Page, Locator } from '@playwright/test';

export class Header {
    public menuButton: Locator;
    public cartButton: Locator;
    public title: Locator;

    public constructor(private readonly page: Page) {
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.cartButton = page.locator('.shopping_cart_link');
        this.title = page.locator('.app_logo');
    }

    public async clickMenuButton(): Promise<void> {
        await this.menuButton.click();
    }

    public async clickCartButton(): Promise<void> {
        await this.cartButton.click();
    }

    public async getTitle(): Promise<string> {
        return this.title.innerText();
    }
}
