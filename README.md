# Playwright UI Demo

A set of UI test examples implemented using Playwright + TypeScript. This project demonstrates how to set up a testing environment, organize tests, structure folders, and can serve as a template for your own UI automation.

## 📦 Project Structure

- `tests/` — test spec files  
- `pages/` — Page Object Models / page definitions  
- `fixtures/` — fixtures and common test setups  
- `data/` — test data / input data for tests  
- `utils/` — helper utilities / reusable code  
- `playwright.config.ts` — Playwright configuration  
- `package.json`, `package-lock.json` — dependencies and project metadata  

## 🧠 Purpose

- A quick starting point for UI automation with Playwright + TypeScript.  
- Scalable structure for adding new tests, pages, utilities, and data.  
- Demonstrates best practices for maintainable tests: Page Objects, fixtures, separation of code and data.
- Demonstrates cross-browser UI testing with Playwright.
- CI runs tests in matrix jobs and uploads HTML reports as artifacts.


## 🚀 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/remes1/playwright-ui-demo.git
cd playwright-ui-demo
npm install
npx playwright install
```

### ▶ Running Tests locally

Create file:

```.env```

Сontent:

```
SUCCESS_USERNAME=test_user
SUCCESS_PASSWORD=test_pass
FAILED_USERNAME=test_failure
FAILED_PASSWORD=test_pass
```

To launch tests in headless mode in specific browser:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### 📝 Reports

- HTML reports are generated after each run: `playwright-report/`
- Screenshots, videos, and traces are saved on failure
- In CI, each browser job uploads its own HTML report as artifact