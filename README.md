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
