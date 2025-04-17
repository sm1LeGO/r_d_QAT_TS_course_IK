import { Page, Locator } from '@playwright/test';

export class CartPage {
    public constructor(public page: Page) {}

    public get cartLink(): Locator {
        return this.page.locator('.shopping_cart_link');
    }

    public get cartItems(): Locator {
        return this.page.locator('.cart_item');
    }

    public get removeButtons(): Locator {
        return this.page.locator('button[data-test^="remove"]');
    }

    public async openCart(): Promise<void> {
        await this.cartLink.click();
    }

    public async getCartCount(): Promise<number> {
        return await this.cartItems.count();
    }

    public async removeFirstItem(): Promise<void> {
        await this.removeButtons.first().click();
    }
}
