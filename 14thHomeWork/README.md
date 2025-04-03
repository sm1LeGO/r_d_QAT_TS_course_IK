# ts-eslint-config
recommended config from me for programming on a TypeScript

In order to use this config you have to install the following NPM packages
```
npm i -D typescript ts-node eslint typescript-eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin @stylistic/eslint-plugin-ts eslint-plugin-prettier eslint-plugin-unicorn prettier globals
```

# Part related to HW API test using local server

For testing purposes used Postman collection from 12th HomeWork
 - used vitest framework and axios
 - added additional setup to launch local server (described under server.ts)
 
Test Summary:
 - should return a random joke with correct structure: Validates that the joke returned from the API contains a setup and a punchline field.
 - should return valid joke types: Checks that the joke type returned from the API is a valid type (e.g., 'general', 'programming', 'knock-knock', etc.).
 - should return 5 random jokes: Ensures the API returns 5 random jokes.
 - should return unique jokes: Verifies that the jokes returned are unique and not duplicates.
 - should not contain HTML in jokes: Ensures there is no HTML content in the joke text.

 In addition fixed all eslint issues
