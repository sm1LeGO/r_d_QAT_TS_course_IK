import { Locator } from '@playwright/test';

export class ProductCard {
    public title: Locator;
    public addButton: Locator;

    public constructor(private readonly root: Locator) {
        this.title = root.locator('.inventory_item_name');
        this.addButton = root.locator('button');
    }

    public async addToCart(): Promise<void> {
        await this.addButton.click();
    }

    public async getTitle(): Promise<string> {
        return this.title.innerText();
    }
}
