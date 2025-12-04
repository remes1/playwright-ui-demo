import { Page, test, expect } from "@playwright/test";
import { LoginPage } from '../pages/login';
import { ProductsPage } from '../pages/products';
import { HeaderPage } from '../pages/header';
import { CartPage } from '../pages/cart';
import { CheckoutPage } from '../pages/checkout';
import paymentInformation from '../data/payment-info.json'

export class E2E {

    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly productsPage: ProductsPage;
    private readonly headerPage: HeaderPage;
    private readonly cartPage: CartPage;
    private readonly checkoutPage: CheckoutPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productsPage = new ProductsPage(page);
        this.headerPage = new HeaderPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
    }

    async processPayment(username: string, password: string) {

        await test.step('Login', async () => {
            await this.loginPage.openLogin();
            await this.loginPage.doLogin(username, password);
        })

        await test.step('Navigate to the products page and add product to the cart', async () => {
            await expect(this.page).toHaveURL(this.productsPage.url);
            await this.productsPage.addFirstProductToCart();
        })

        await test.step('Navigate to the cart page and proceed to Checkout', async () => {
            await this.headerPage.clickCartLink();
            await expect(this.page).toHaveURL(this.cartPage.url);
            await this.cartPage.clickCheckoutButton();
        })

        await test.step('Fill in Shipping Information', async () => {
            await expect(this.page).toHaveURL(this.checkoutPage.url);
            await this.checkoutPage.fillShippingInfo(
                paymentInformation.shippingInformation.name,
                paymentInformation.shippingInformation.email,
                paymentInformation.shippingInformation.address);
            await this.checkoutPage.fillPaymentForm(paymentInformation.paymentInformation.cardNumber,
                paymentInformation.paymentInformation.cardName,
                paymentInformation.paymentInformation.expiryDate,
                paymentInformation.paymentInformation.cvv);
        })

    }

}