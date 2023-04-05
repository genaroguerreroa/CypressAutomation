# CypressAutomation


This repository contains a test suite built using Cypress for end-to-end testing of demoBlaze/website.

## Prerequisites

Before running the tests, make sure you have the following installed:

- <a href="https://nodejs.org/" target="_new">Node.js</a>
- <a href="https://www.npmjs.com/" target="_new">npm</a>

## Installation
1. Clone this repository:

 ~~~sh
git clone https://github.com/genaroguerreroa/CypressAutomation.git
 ~~~
 
2. Install the dependencies:

~~~sh
npm install
~~~


## Usage 

To open the Cypress Test Runner and run the tests interactively, use the following command:

~~~sh
node_modules/.bin/cypress open
~~~

This will open the Cypress Test Runner, where you can select and run individual tests.

## Configuration
You can configure the tests using the following environment variables:

CYPRESS_BASE_URL: The base URL of the {application/website} being tested. Defaults to http://localhost:3000.
{other environment variables, if any}

## Cypress Test Suite Project Structure

This Cypress test suite uses the Page Object Model (POM) design pattern, which separates the test code from the page-specific code. The POM helps make tests more maintainable, scalable, and easier to read by providing a clear structure and abstraction layer.

This Cypress test suite is structured in the following way:

~~~sh
cypress/
├── fixtures/
├── pages/
│   ├── account.page.js
│   ├── browsing.page.js
│   └── contact.page.js
├── plugins/
└── integration/examples
│    ├── aboutUs.js
│    └── Login.js
├── plugins/
└── support/
    ├── commands.js
    └── index.js
~~~

- fixtures/: This directory contains any static test data that is required by the tests. # not used for the demo

- pages/: This directory contains all the Page Object to interact with elements.

- integration/examples: This directory contains the actual tests. The tests are organized by page or feature, and each test file contains one or more tests. The file names are descriptive of the feature or page being tested, and the tests within each file use the page objects located in the support/pages/ directory.

- plugins/: This directory contains any Cypress plugins that are used by the test suite.

- support/: This directory contains any reusable code or configuration options that are used across multiple tests. This can include custom Cypress commands, configuration options, or utility functions. The support/pages/ directory contains the page objects for each page or feature being tested.

## Page Object Classes
This Cypress test suite uses the following page object classes:

Base Page: This is the base page class that all other page classes extend from. It contains common methods and properties that are used across all pages, such as visit() and getUrl().

Page: This is a page-specific class that represents a page or feature being tested. It contains methods and properties that are specific to that page, such as getTitle() or getButton(). It extends from the Base Page class.

## Writing Tests
When writing tests for this Cypress test suite using the POM, there are a few guidelines to follow:

Use the cy.visit() command to navigate to the page being tested.
Create a new instance of the page object for the page being tested.
Use the methods and properties of the page object to interact with the UI and make assertions about the state of the page.
Use fixtures to set up any required test data.
Here's an example test using the POM:

~~~sh

import LoginPage from '/cypress/pages/login.page.js'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should have the correct title', () => {
    Login.getTitle().should('equal', 'Expected Title');
  });

  it('should display a button', () => {
    Login.getButton().should('be.visible');
  });
});
~~~
