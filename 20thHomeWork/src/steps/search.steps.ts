import { Given, When, Then } from '@cucumber/cucumber';
import { GooglePage } from '../pages/google-page';

let googlePage: GooglePage;

Given('the user is on the Google homepage', async function () {
    googlePage = new GooglePage(this.page);
    await googlePage.goTo();
});

When('the user enters a search term {string}', async function (term: string) {
    await googlePage.searchFor(term);
});

Then('the search results page is displayed', async function () {
    const results = await googlePage.getResults();
    if (await results.count() === 0) {
        throw new Error('No search results found');
    }
});

Then('the results contain {string}', async function (term: string) {
    const results = await googlePage.getResults();
    const resultsText = await results.first().textContent();

    if (!resultsText || !resultsText.includes(term)) {
        throw new Error(`Results do not contain the term: ${term}`);
    }
});
