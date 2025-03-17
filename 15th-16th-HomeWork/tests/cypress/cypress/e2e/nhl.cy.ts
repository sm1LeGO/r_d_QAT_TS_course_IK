describe('NHL.com Tests with Cypress', () => {
    beforeEach(() => {
        cy.visit('https://www.nhl.com/');
        cy.viewport(1920, 1080);
        cy.get('body').then(($body) => {
            if ($body.find('#onetrust-accept-btn-handler').length > 0) {
                cy.get('#onetrust-accept-btn-handler').click();
            }
        });
    });

    it('Check Team is on Pacific list and you transfered correctly to Florida Panthers site', () => {
        cy.contains('Teams').click();

        cy.get('h4').should('contain.text', 'Atlantic');
        cy.get('.nhl-c-team-list__team-menu').should('have.length.greaterThan', 5);
        cy.contains('Florida Panthers').click();
        cy.url().should('include', 'panthers');
    });

    it('Check that proposed Podcasts contains Spotify option', () => {
        cy.contains('Video').click();
        cy.contains('More').click();
        cy.get('ul[data-overflow-nav]')
            .contains('Podcasts').click();
        cy.wait(3000);

        cy.get('div.nhl-c-podcast__sources.nhl-c-cta-row').each(($sourceBlock) => {
            cy.wrap($sourceBlock)
                .find('a.nhl-c-podcast__source')
                .should('have.length.greaterThan', 0)
                .contains('Spotify');
        });
    });
});
