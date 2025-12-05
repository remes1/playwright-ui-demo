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

## 🚀 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/remes1/playwright-ui-demo.git
cd playwright-ui-demo
npm install
npx playwright install
```

### ▶ Running Tests

To launch tests in headed mode in chromium:

```bash
npm run test:chromium:headed
```

To launch tests in headless mode in chromium:

```bash
npm run test:chromium:headless
```

