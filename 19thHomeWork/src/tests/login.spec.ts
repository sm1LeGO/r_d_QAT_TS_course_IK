import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Successful entry', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Error displayed after incorrect user login', async () => {
        await loginPage.login('wrong_user', 'wrong_pass');
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    });
});
