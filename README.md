# Playwright Automation Setup

This project is set up with Playwright for web automation testing.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

The project is already set up with Playwright. If you need to reinstall:

```bash
npm install
npx playwright install
```

## Project Structure

```
Automation/
├── tests/                    # Test files
│   ├── example.spec.ts      # Basic Playwright examples
│   └── google-search.spec.ts # Google search automation
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies and scripts
└── README.md               # This file
```

## Available Scripts

- `npm test` - Run all tests in headless mode
- `npm run test:headed` - Run tests with browser visible
- `npm run test:ui` - Run tests with Playwright UI mode
- `npm run test:debug` - Run tests in debug mode
- `npm run report` - Open the HTML test report

## Running Tests

### Basic Test Execution
```bash
npm test
```

### Run Tests with Browser Visible
```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:ui
```

### Debug Tests
```bash
npm run test:debug
```

### Run Specific Test File
```bash
npx playwright test tests/example.spec.ts
```

### Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Writing Tests

Tests are written in TypeScript and use Playwright's test framework. Here's a basic example:

```typescript
import { test, expect } from '@playwright/test';

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Key Features

- **Cross-browser testing**: Tests run on Chromium, Firefox, and WebKit
- **Parallel execution**: Tests run in parallel for faster execution
- **HTML reports**: Detailed test reports with screenshots and traces
- **Debugging support**: Built-in debugging capabilities
- **Mobile testing**: Support for mobile viewports (commented in config)

## Configuration

The `playwright.config.ts` file contains:
- Test directory configuration
- Browser projects (Chromium, Firefox, WebKit)
- Retry settings
- Reporter configuration
- Shared test options

## Useful Commands

### Generate Tests
```bash
npx playwright codegen https://example.com
```

### Install Browsers
```bash
npx playwright install
```

### Show Report
```bash
npm run report
```

## Next Steps

1. Run the example tests: `npm test`
2. Explore the test files in the `tests/` directory
3. Modify the configuration in `playwright.config.ts` as needed
4. Add your own test files to the `tests/` directory

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Test Generator](https://playwright.dev/docs/codegen)
- [Trace Viewer](https://playwright.dev/docs/trace-viewer) 