# End-to-End JavaScript Testing with Cypress

This project demonstrates end-to-end testing using Cypress with a React + Vite application. The project consists of two main parts:

1. A React application (in the `target-app` directory)
2. Cypress tests (in the `cypress` directory)

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/shankersingh01/end-to-end-javascript-testing-with-cypress.git
cd end-to-end-javascript-testing-with-cypress
```

2. Install dependencies for the main project (Cypress):

```bash
npm install
```

3. Install dependencies for the target application:

```bash
cd target-app
npm install
```

## Running the Application

1. Start the React application (needs to be running for Cypress tests):

```bash
cd target-app
npm run dev
```

The application will be available at http://localhost:5173

## Running Cypress Tests

There are two ways to run Cypress tests:

### 1. Interactive Mode (Cypress Test Runner)

From the root directory:

```bash
npx cypress open
```

This will open the Cypress Test Runner where you can:

- Select E2E Testing
- Choose a browser
- Click on any test file to run it

### 2. Headless Mode (Command Line)

From the root directory:

```bash
npx cypress run
```

This will run all tests in headless mode and generate test results in the terminal.

## Project Structure

- `/cypress`
  - `/e2e` - Contains all test files
  - `/fixtures` - Test data files
  - `/support` - Custom commands and global configurations
- `/target-app`
  - React application being tested

## Available Test Files

The following test files are available in the `cypress/e2e` directory:

- `assertions.cy.js` - Examples of different types of assertions
- `before-each.cy.js` - Test setup examples
- `challenge-1.cy.js` - Challenge implementation tests
- `interactions.cy.js` - User interaction tests
- `max-char-input.cy.js` - Input validation tests
- `my-first-test.cy.js` - Basic test examples
- `prompt-testing.cy.js` - Prompt handling tests
- `results.cy.js` - Results verification tests
- `selecting.cy.js` - Element selection examples

## Configuration

The Cypress configuration is in `cypress.config.js`. Key settings include:

- Base URL: http://localhost:5173
- Project ID: v34v29
- Experimental features: Prompt testing enabled

## Additional Information

- Test results and screenshots are stored in the `cypress/screenshots` directory
- The target application is built with React + Vite and includes HMR (Hot Module Replacement)
- ESLint is configured for both the main project and the target application
