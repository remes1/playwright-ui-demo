import { test as base, expect } from '@playwright/test';
import { E2E } from '../utils/e2e';
import { CheckoutPage } from '../pages/checkout';


type Fixtures = {
  e2e: E2E;
  checkout: CheckoutPage;
};

export const test = base.extend<Fixtures>({
  e2e: async ({ page }, use) => {
    const e2e = new E2E(page);
    await use(e2e);
  },
  checkout: async ({ page }, use) => {
    const checkout = new CheckoutPage(page);
    await use(checkout);
  },
});

export { expect };
