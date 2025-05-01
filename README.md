Author - Kavuri Karthikeyan
Date - 1-5-2025

# SauceDemo Playwright Automation

Automated tests for SauceDemo.com using Playwright with Page Object Model.

## Test Scenario
1. Login as standard user
2. Sort products by Price (high to low)
3. Add three cheapest products to basket
4. Open the basket
5. Remove the cheapest product
6. Enter checkout information
7. Complete purchase

## Installation
```bash
npm install
npx playwright install
```

## Running Tests
```bash
# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run Particular test
npx playwright test checkoutFlow.spec.js --headed

# Generate report
npx playwright show-report
npx playwright show-report reports\html
```
