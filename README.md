# team-building-balancer-e2e-test.webdriverio
This repository hosts an end-to-end (E2E) Test Automation Framework designed for a web application built with Flutter.

## Technologies

This project utilizes the following technologies:

- **WebDriverIO**: A popular WebDriver implementation for Node.js, used for automating web browsers.
- **TypeScript**: A typed superset of JavaScript, offering better tooling and type safety.
- **Mocha**: A testing framework that runs on Node.js, used for executing tests in this project.
- **Allure Reports**: A framework for generating test reports that provide detailed insights into the results of the executed tests.

## Design Pattern

This project is based on the **Page Object Pattern**, which helps to structure the tests in a more maintainable and readable manner. The folder structure is organized as follows:

- **Data**: Contains test data and configurations used across multiple test cases.
- **Interfaces**: Defines TypeScript interfaces for better type safety and to ensure proper data structures are used in the tests.
- **Page**: This folder contains the core of the Page Object Pattern, divided into:
  - **Actions**: Methods that perform actions on the web page (e.g., click buttons, submit forms).
  - **Interactions**: Methods that represent user interactions with the web page (e.g., hover, drag).
  - **Elements**: The elements located on the web page (e.g., buttons, input fields).
- **Reports**: Contains configurations and files for generating test reports using Allure.
- **Tests**: Contains the actual test scripts, which use the Page Objects to interact with the application.
- **Utils**: Contains utility functions or helper methods that are used across the project, such as functions for data manipulation or waiting.

This structure promotes clean, modular, and scalable test code, making it easier to maintain and extend over time.

## Requirements

- Node.js >= 22

## Installation

Setup webdriverio

```
$ npm init wdio@latest .
Need to install the following packages:
create-wdio@8.4.10
Ok to proceed? (y)

                           Webdriver.IO
              Next-gen browser and mobile automation
                    test framework for Node.js


Installing @wdio/cli to initialize project...
✔ Success!

🤖 WDIO Configuration Wizard 🧙


✔ A project named "team-building-balancer-e2e-test.webdriverio" was detected at "C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio", correct? yes    
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
✔ Where is your automation backend located? On my local machine
✔ Which environment you would like to automate? Web - web applications in the browser
✔ With which browser should we start? Chrome, Firefox, Microsoft Edge
✔ Which framework do you want to use? Mocha (https://mochajs.org/)
✔ Do you want to use Typescript to write tests? yes
✔ Do you want WebdriverIO to autogenerate some test files? yes
✔ What should be the location of your spec files? C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio\test\specs\**\*.ts
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? yes
✔ Where are your page objects located? C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio\test\pageobjects\**\*.ts
✔ Which reporter do you want to use? spec, allure
✔ Do you want to add a plugin to your test setup?
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! no
✔ Do you want to add a service to your test setup?
✔ Do you want me to run `npm install` yes


Setting up TypeScript...
✔ Success!

Installing packages using npm:
- @wdio/local-runner@latest
- @wdio/mocha-framework@latest
- @wdio/spec-reporter@latest
- @wdio/allure-reporter@latest

added 73 packages, and audited 479 packages in 14s

107 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
✔ Success!

Creating a WebdriverIO config file...
✔ Success!

Autogenerating test files...
✔ Success!

Adding "wdio" script to package.json
✔ Success!

🤖 Successfully setup project at C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio 🎉

Join our Discord Community Server and instantly find answers to your issues or queries. Or just join and say hi 👋!
  🔗 https://discord.webdriver.io

Visit the project on GitHub to report bugs 🐛 or raise feature requests 💡:
  🔗 https://github.com/webdriverio/webdriverio
```

## Configurations

1. Create a file at the root of the project called .env.
2. Add the following variables:

Preferably, use the **Git Bash** terminal to run commands for this project. 

```
EMAIL="your email here"
PASSWORD="your password here"
```

3. Save the file.

## Installation Instructions
Run the command at the root of the project: 
```npm install```

## Execution test
Run the command to execute all tests created on framework

```npm run wdio```

Run the command to execute a specific suite of test created on package.json

```npm run testSuite```
