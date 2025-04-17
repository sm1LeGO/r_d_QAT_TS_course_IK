import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

interface Fixtures {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },

    inventoryPage: async ({ page }, use) => {
        const pageObject = new InventoryPage(page);
        await pageObject.init();
        await use(pageObject);
    }

});

export { expect } from '@playwright/test';
