# ts-eslint-config
recommended config for programming on a TypeScript

In order to use this config you have to install the following NPM packages
```
npm i -D typescript ts-node eslint typescript-eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin @stylistic/eslint-plugin-ts eslint-plugin-prettier eslint-plugin-unicorn prettier globals
```
or using >>> npm i

# Info related to 9th HomeWork

Homework is about OOP in TypeScript and SOLID/DRY principles

To complete task mentioned under https://lms.robotdreams.cc/course/2479/lesson/45541/homework/24954 

Write a code where we describe transport driving on highway 
 - Separate code under 3 folders located in src >>> interface/models/service
 - code can be launched under main.ts file
 - ReadMe adjusted
 - Fixed eslint issues  

 HW can be counted as done after we got approval from a reviewers and PR is merged into master.
    - If any threads will be opened during review, they will be resolved in same PR on new commit.

After comments where added to initial PR done:

 - Adjust interfaces (created IFuelable & IChargeable)
 - Reworked car class (replaced with electrical and hybrid cars)
 - Reworked vehicle.ts it just exports abstarct class
 - according to changes edited main.ts file
 - Updated ReadMe 

 # Part related to 10th HomeWork

 - Added tests folder with different frameworks as mocha/jest/vitest under 9thHomeWork folder
 - Viacheslav helped me with test setup, to run it correctly
 - now to tun each test you can use command - npx mocha/jest/vitest
 - Viacheslav branch name > lesson10-fixes
 - if additional tests will be requested look forward to add them. 
