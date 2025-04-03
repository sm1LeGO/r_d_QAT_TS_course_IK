import { Page, Locator } from '@playwright/test';

export class WikipediaPage {
    public page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    private get searchInput(): Locator {
        return this.page.locator('input[name="search"]');
    }

    private get searchButton(): Locator {
        return this.page.locator('button.pure-button');
    }

    private get languageDropdown(): Locator {
        return this.page.locator('#js-lang-list-button');
    }

    private get ukrainianLangOption(): Locator {
        return this.page.locator('a[lang="uk"]');
    }

    public async visit(): Promise<void> {
        await this.page.goto('https://www.wikipedia.org/');
    }

    public async search(term: string): Promise<void> {
        await this.searchInput.fill(term);
        await this.searchButton.click();
    }

    public async changeLanguageToUkrainian(): Promise<void> {
        await this.languageDropdown.click();
        await this.ukrainianLangOption.click();
    }
}
