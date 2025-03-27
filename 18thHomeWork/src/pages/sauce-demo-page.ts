import { Page } from '@playwright/test';

export class SauceDemoPage {
    private page: Page;
    private usernameInput = '#user-name';
    private passwordInput = '#password';
    private loginButton = '#login-button';
    private inventoryItem = '.inventory_item:first-of-type .btn_inventory';
    private cartIcon = '.shopping_cart_link';
    private checkoutButton = '#checkout';
    private firstNameInput = '#first-name';
    private lastNameInput = '#last-name';
    private postalCodeInput = '#postal-code';
    private continueButton = '#continue';
    private finishButton = '#finish';
    private orderCompleteText = '.complete-header';

    public constructor(page: Page) {
        this.page = page;
    }

    public async visit(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    public async addFirstItemToCart(): Promise<void> {
        await this.page.click(this.inventoryItem);
    }

    public async goToCart(): Promise<void> {
        await this.page.click(this.cartIcon);
    }

    public async checkout(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.page.click(this.checkoutButton);
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.postalCodeInput, postalCode);
        await this.page.click(this.continueButton);
        await this.page.click(this.finishButton);
    }

    public async isOrderComplete(): Promise<boolean> {
        return await this.page.locator(this.orderCompleteText).isVisible();
    }

    public async logout(): Promise<void> {
        await this.page.click('#react-burger-menu-btn');
        await this.page.click('#logout_sidebar_link');
    }

    public async sortProductsBy(option: string): Promise<void> {
        await this.page.selectOption('.product_sort_container', option);
    }
}
