# ts-eslint-config
recommended config from me for programming on a TypeScript

In order to use this config you have to install the following NPM packages
```
npm i -D typescript ts-node eslint typescript-eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin @stylistic/eslint-plugin-ts eslint-plugin-prettier eslint-plugin-unicorn prettier globals
```
Or Use >> npm i

# Part related to 19th homework tests on PlayWright

What has been added to the project >>>> 
Page Object classes have been implemented for various pages of the web application:

   - LoginPage: for the login page.
   - InventoryPage: for the inventory page.
   - CartPage: for the cart page.
   - MenuPage: for site navigation.

Several tests have been written using Playwright:

   - Login Tests: checking successful login and errors with incorrect credentials.
   - Inventory Tests: checking the display of products and adding products to the cart.
   - Cart Tests: checking the addition of products to the cart, removing products, and login functionality.

Fixtures:

   - beforeEach and beforeAll are used to prepare data before running tests (e.g., logging in before each test).

Logout Logic:

   - Tests have been added to verify user logout functionality and redirection to the login page.

I addition fixed all eslint errors and updated ReadMe File
