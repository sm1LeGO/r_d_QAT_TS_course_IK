import { Page } from '@playwright/test';

export class WikipediaPage {
    private page: Page;
    private searchInput = 'input[name=\'search\']';
    private searchButton = 'button.pure-button';
    private languageDropdown = '#js-lang-list-button';
    private ukrainianLangOption = 'a[lang=\'uk\']';

    public constructor(page: Page) {
        this.page = page;
    }

    public async visit(): Promise<void> {
        await this.page.goto('https://www.wikipedia.org/');
    }

    public async search(query: string): Promise<void> {
        await this.page.fill(this.searchInput, query);
        await this.page.click(this.searchButton);
    }

    public async switchToUkrainian(): Promise<void> {
        await this.page.click(this.languageDropdown);
        await this.page.click(this.ukrainianLangOption);
    }
}
