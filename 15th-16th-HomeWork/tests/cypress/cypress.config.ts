import { defineConfig } from 'cypress';

export default defineConfig({
    projectId: 'n4iypy',
    e2e: {
        baseUrl: 'https://www.nhl.com',
        supportFile: false,
        specPattern: 'tests/cypress/e2e/**/*.cy.{js,ts}',
        setupNodeEvents(on, config) {
        }
    }
});
