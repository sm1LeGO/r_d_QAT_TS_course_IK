import { $, $$, browser } from '@wdio/globals';
import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

export class NhlPage {
    public get searchButton(): ChainablePromiseElement {
        return $('a.nhl-c-header__btn--search');
    }

    public get searchInput(): ChainablePromiseElement {
        return $('#input-search-query');
    }

    public get searchResultsList(): ChainablePromiseElement {
        return $('.nhl-o-search-facets__list');
    }

    public get storyFilters(): ChainablePromiseArray {
        return $$('a[href*="type=type&value=story"]');
    }

    public get videoFilters(): ChainablePromiseArray {
        return $$('a[href*="type=entityCode&value=video"]');
    }

    public get moreMenu(): ChainablePromiseElement {
        return $('.nhl-o-menu__link--more');
    }

    public get contactUsLink(): ChainablePromiseElement {
        return $('a[href="/info/contact-us"]');
    }

    public get firstNameInput(): ChainablePromiseElement {
        return $('#field129743091-first');
    }

    public get lastNameInput(): ChainablePromiseElement {
        return $('#field129743091-last');
    }

    public get emailInput(): ChainablePromiseElement {
        return $('#field129743092');
    }

    public get topicDropdown(): ChainablePromiseElement {
        return $('#field129743102');
    }

    public get messageInput(): ChainablePromiseElement {
        return $('#field129743095');
    }

    public get submitButton(): ChainablePromiseElement {
        return $('#fsSubmitButton4937559');
    }

    public async open(): Promise<void> {
        await browser.url('https://www.nhl.com/');
    }

    public async search(query: string): Promise<void> {
        await this.searchButton.click();
        await this.searchInput.setValue(query);
        await browser.keys('Enter');
        await this.searchResultsList.waitForDisplayed();
    }

    public async openContactUs(): Promise<void> {
        await this.moreMenu.click();
        await this.contactUsLink.click();
    }

    public async fillContactForm(): Promise<void> {
        await this.firstNameInput.setValue('Robot');
        await this.lastNameInput.setValue('Dreams');
        await this.emailInput.setValue('test@test.com');
        await this.topicDropdown.selectByVisibleText('NHL.com');
        await this.messageInput.setValue('Ignore this message, it’s for testing purposes');
    }
}
