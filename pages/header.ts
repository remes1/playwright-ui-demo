import { Page, Locator } from "@playwright/test";

export class HeaderPage {
    private readonly page: Page;
    private readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('a[href="/cart"]');
    }

    async clickCartLink() {
        await this.cartLink.click();
    }
}