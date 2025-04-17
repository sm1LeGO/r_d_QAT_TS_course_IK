import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test.describe('Inventory Page', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);

        await page.goto('https://www.saucedemo.com/');
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.init();
    });

    test('Show title in header', async () => {
        const title = await inventoryPage.header.getTitle();
        expect(title).toBe('Swag Labs');
    });

    test('Add first product to cart', async () => {
        const firstCard = inventoryPage.productCards[0];
        const productName = await firstCard.getTitle();

        await firstCard.addToCart();

        expect(productName).not.toBe('');
    });
});
