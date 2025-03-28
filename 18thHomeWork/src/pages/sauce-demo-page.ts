import { Page, Locator } from '@playwright/test';

export class SauceDemoPage {
    public page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    private get usernameInput(): Locator {
        return this.page.locator('#user-name');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    private get loginButton(): Locator {
        return this.page.locator('#login-button');
    }

    private get inventoryItem(): Locator {
        return this.page.locator('.inventory_item:first-of-type .btn_inventory');
    }

    private get cartIcon(): Locator {
        return this.page.locator('.shopping_cart_link');
    }

    private get checkoutButton(): Locator {
        return this.page.locator('#checkout');
    }

    private get firstNameInput(): Locator {
        return this.page.locator('#first-name');
    }

    private get lastNameInput(): Locator {
        return this.page.locator('#last-name');
    }

    private get postalCodeInput(): Locator {
        return this.page.locator('#postal-code');
    }

    private get continueButton(): Locator {
        return this.page.locator('#continue');
    }

    private get finishButton(): Locator {
        return this.page.locator('#finish');
    }

    private get orderCompleteText(): Locator {
        return this.page.locator('.complete-header');
    }

    private get sortDropdown(): Locator {
        return this.page.locator('.product_sort_container');
    }

    public async visit(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    public async addFirstItemToCart(): Promise<void> {
        await this.inventoryItem.click();
    }

    public async goToCart(): Promise<void> {
        await this.cartIcon.click();
    }

    public async checkout(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.checkoutButton.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
        await this.finishButton.click();
    }

    public async isOrderComplete(): Promise<boolean> {
        return await this.orderCompleteText.isVisible();
    }

    public async logout(): Promise<void> {
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('#logout_sidebar_link').click();
    }

    public async sortProductsBy(option: string): Promise<void> {
        await this.sortDropdown.selectOption(option);
    }

    public async getFirstItemPrice(): Promise<number> {
        const priceText = await this.page.locator('.inventory_item_price').first().innerText();
        return parseFloat(priceText.replace('$', ''));
    }

    public async getLastItemPrice(): Promise<number> {
        const priceText = await this.page.locator('.inventory_item_price').last().innerText();
        return parseFloat(priceText.replace('$', ''));
    }
}
