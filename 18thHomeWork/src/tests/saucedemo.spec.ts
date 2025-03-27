import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/sauce-demo-page';

test.describe('SauceDemo Tests', () => {
    test('Authorization form', async ({ page }) => {
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.visit();
        await sauceDemo.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory/);
    });

    test('Add product to your cart', async ({ page }) => {
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.visit();
        await sauceDemo.login('standard_user', 'secret_sauce');
        await sauceDemo.addFirstItemToCart();
        await sauceDemo.goToCart();

        const cartItems = page.locator('.cart_item');
        await expect(cartItems).toHaveCount(1);
    });

    test('Prepare Order', async ({ page }) => {
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.visit();
        await sauceDemo.login('standard_user', 'secret_sauce');
        await sauceDemo.addFirstItemToCart();
        await sauceDemo.goToCart();
        await sauceDemo.checkout('Ilja', 'Kravecs', '12345');

        await expect(await sauceDemo.isOrderComplete()).toBeTruthy();
    });

    test('Exit from account', async ({ page }) => {
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.visit();
        await sauceDemo.login('standard_user', 'secret_sauce');
        await sauceDemo.logout();

        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    test('Product sorting: from high price to low', async ({ page }) => {
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.visit();
        await sauceDemo.login('standard_user', 'secret_sauce');

        await sauceDemo.sortProductsBy('hilo');

        const firstItem = await page.locator('.inventory_item_price').first().innerText();
        const lastItem = await page.locator('.inventory_item_price').last().innerText();

        expect(parseFloat(firstItem.replace('$', ''))).toBeGreaterThan(parseFloat(lastItem.replace('$', '')));
    });
});
