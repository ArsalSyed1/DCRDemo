# DCR Test Automation

## Overview
This repository contains automated end-to-end tests for the DCR Portal using [Cypress](https://www.cypress.io/). The project is configured to run tests in different environments and generate test reports.

## Prerequisites
Ensure you have the following installed before setting up the project:

- **Node.js**: `22.11.0`
- **npm**: Comes with Node.js

## Installation
Install dependencies:

```sh
npm install
```

## Running Tests

### Run Tests in Specific Environments in Headless Mode
- **Test Environment**:
  ```sh
  npm run cy:run_test
  ```
- **Production Environment**:
  ```sh
  npm run cy:run_production
  ```
- **Demo Environment**:
  ```sh
  npm run cy:run_demo
  ```

### Run Tests in Browser (Non-Headless Mode)
- **Test Environment**:
  ```sh
 npx cypress open --e2e --browser chrome --env ENV=test
  ```
- **Demo Environment**:
  ```sh
  npx cypress open --e2e --browser chrome --env ENV=demo
  ```
- **Production Environment**:
  ```sh
  npx cypress open --e2e --browser chrome --env ENV=production

- **Run On Cypress Dashboard**:

npx cypress run --record `
  --parallel `
  --group "Local Parallel Run" `
  --ci-build-id local-parallel-002 `
  --key 70d21fe5-f8d4-4b3e-9df8-79b8b9bedebf

  ```

  for ($i = 1; $i -le 5; $i++) {
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "npx cypress run --record --parallel --group 'Local Parallel Run' --ci-build-id local-parallel-002 --key 70d21fe5-f8d4-4b3e-9df8-79b8b9bedebf"
}


## Generating Reports
### Mochawesome Report
1. Merge test reports:
   ```sh
   npm run report:merge
   ```
2. Generate HTML report:
   ```sh
   npm run report:generate
   ```

## Project Structure
- **cypress/**: Contains test specs, fixtures, and support files.
- **cypress/reports/**: Stores test reports.
- **cypress/plugins/**: Cypress plugin configuration.
- **cypress/support/**: Custom Cypress commands and utilities.
- **generate-report.js**: Script for generating test reports.

## Author
**Muhammad Uzair Khan**

## License
This project is licensed under the **ISC License**.