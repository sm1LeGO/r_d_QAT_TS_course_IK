import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    public constructor(private readonly page: Page) {}

    public get firstItemTitle(): Locator {
        return this.page.locator('.inventory_item_name').first();
    }

    public get addToCartButtons(): Locator {
        return this.page.locator('button[data-test^="add-to-cart"]');
    }

    public get cartBadge(): Locator {
        return this.page.locator('.shopping_cart_badge');
    }

    public async getItemCount(): Promise<number> {
        return await this.addToCartButtons.count();
    }

    public async addItemToCart(index = 0): Promise<void> {
        const button = this.addToCartButtons.nth(index);
        await button.click();
    }
}
