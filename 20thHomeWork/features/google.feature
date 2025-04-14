Feature: Google Search functionality

        Scenario: User searches for a term on Google
            Given the user is on the Google homepage
             When the user enters a search term "Cucumber.js"
              And the user submits the search
             Then the search results page is displayed
              And the results contain "Cucumber.js"
