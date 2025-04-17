import { LoginPage } from 'src/pages/login.page';
import { test, expect } from '../fixtures/custom-fixtures';
import { CartPage } from '../pages/cart.page';
import { MenuPage } from '../pages/menu.page';

test.describe('Cart and Logout Tests', () => {
    let cartPage: CartPage;
    let menuPage: MenuPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        menuPage = new MenuPage(page);
        loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('LogOut works', async () => {
        await menuPage.logout();
        await expect(loginPage.usernameInput).toBeVisible();
    });

    test('Cart is empty at start', async () => {
        await cartPage.openCart();
        expect(await cartPage.getCartCount()).toBe(0);
    });

    test('Add item to the cart', async ({ inventoryPage }) => {
        await inventoryPage.addItemToCart(0);
        await inventoryPage.addItemToCart(1);
        await expect(inventoryPage.cartBadge).toHaveText('2');
    });

    test('Remove item from the cart', async ({ inventoryPage }) => {
        await inventoryPage.addItemToCart(0);
        await cartPage.openCart();
        await cartPage.removeFirstItem();
        expect(await cartPage.getCartCount()).toBe(0);
    });
});
