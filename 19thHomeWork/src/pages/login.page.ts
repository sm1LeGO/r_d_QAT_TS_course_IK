import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {
    public constructor(public page: Page) {}

    public get usernameInput(): Locator {
        return this.page.locator('#user-name');
    }

    public get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    public get loginButton(): Locator {
        return this.page.locator('#login-button');
    }

    public get errorMessage(): Locator {
        return this.page.locator('[data-test="error"]');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    public async isAtLoginScreen(): Promise<boolean> {
        return await this.usernameInput.isVisible();
    }
}
