import { test, expect } from '../fixtures/custom-fixtures';

test.describe('Inventory Page', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Show item list', async ({ inventoryPage }) => {
        const count = await inventoryPage.getItemCount();
        expect(count).toBeGreaterThan(0);
    });

    test('Check first item title', async ({ inventoryPage }) => {
        await expect(inventoryPage.firstItemTitle).toBeVisible();
        const name = await inventoryPage.firstItemTitle.textContent();
        expect(name).toContain('Sauce');
    });

    test('Add item to the cart', async ({ inventoryPage }) => {
        await inventoryPage.addItemToCart();
        await expect(inventoryPage.cartBadge).toHaveText('1');
    });
});
