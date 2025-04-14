import { Locator } from 'playwright';

export class SearchBoxElement {
    public constructor(private searchBox: Locator) {}

    public async enterSearchTerm(term: string): Promise<void> {
        await this.searchBox.fill(term);
    }

    public async getSearchTerm(): Promise<string> {
        return await this.searchBox.inputValue();
    }

    public async submitSearch(): Promise<void> {
        await this.searchBox.press('Enter');
    }
}
