import { Page, Locator } from '@playwright/test';
import { ProductCard } from '../components/product-card.component';
import { Header } from '../components/header.component';

export class InventoryPage {
    public header: Header;
    public productCards: ProductCard[] = [];

    public constructor(public readonly page: Page) {
        this.header = new Header(page);
    }

    public async init(): Promise<void> {
        await this.page.waitForSelector('.inventory_item');

        const items = this.page.locator('.inventory_item');
        const count = await items.count();

        this.productCards = [];
        for (let i = 0; i < count; i++) {
            const cardLocator = items.nth(i);
            this.productCards.push(new ProductCard(cardLocator));
        }
    }

    public async addItemToCart(index: number): Promise<void> {
        await this.productCards[index].addToCart();
    }

    public get cartBadge(): Locator {
        return this.page.locator('.shopping_cart_badge');
    }
}
