import { Page, Locator } from "@playwright/test";

export class CartPage {
    private readonly page: Page;
    private readonly checkoutButton: Locator;
    private readonly cartTotal: Locator;

    readonly url: string = '/cart';

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('a[href="/checkout"]');
        this.cartTotal = page.locator('[data-testid=cart-total]');
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

}