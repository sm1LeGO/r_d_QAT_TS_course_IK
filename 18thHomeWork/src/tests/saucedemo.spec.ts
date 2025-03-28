import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/sauce-demo-page';

test.describe('SauceDemo Tests', () => {
    let sauceDemo: SauceDemoPage;

    test.beforeEach(async ({ page }) => {
        sauceDemo = new SauceDemoPage(page);
        await sauceDemo.visit();
        await sauceDemo.login('standard_user', 'secret_sauce');
    });

    test('Authorization form', async () => {
        await expect(sauceDemo.page).toHaveURL(/inventory/);
    });

    test('Add product to your cart', async () => {
        await sauceDemo.addFirstItemToCart();
        await sauceDemo.goToCart();
        await expect(sauceDemo.page.locator('.cart_item')).toBeVisible();
    });

    test('Prepare Order', async () => {
        await sauceDemo.addFirstItemToCart();
        await sauceDemo.goToCart();
        await sauceDemo.checkout('Elijah', 'Cutter', '141713');
        expect(await sauceDemo.isOrderComplete()).toBeTruthy();
    });

    test('Exit from account', async () => {
        await sauceDemo.logout();
        await expect(sauceDemo.page).toHaveURL('https://www.saucedemo.com/');
    });

    test('Product sorting: from high price to low', async () => {
        await sauceDemo.sortProductsBy('hilo');
        const firstItemPrice = await sauceDemo.getFirstItemPrice();
        const lastItemPrice = await sauceDemo.getLastItemPrice();
        expect(firstItemPrice).toBeGreaterThanOrEqual(lastItemPrice);
    });
});
