import { Page, Locator } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;
    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly buttonLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('[data-testid=login-username]');
        this.passwordField = page.locator('[data-testid=login-password]');
        this.buttonLogin = page.locator('[data-testid=login-button]');
    }

    async openLogin() {
        await this.page.goto('/login');
    }

    async doLogin(email: string, password: string) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await Promise.all([
            this.page.waitForURL('/products'),
            this.buttonLogin.click(),
        ]);
    }
}