import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
    private readonly page: Page;

    // Shipping form
    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly addressInput: Locator;
    private readonly continueButton: Locator;

    // Payment form
    private readonly cardNumberInput: Locator;
    private readonly nameOnCardInput: Locator;
    private readonly expiryDateInput: Locator;
    private readonly cvvInput: Locator;
    private readonly placeOrderButton: Locator;


    // Order placed confirmation
    readonly orderPlacedConfirmation: Locator;
    readonly transactionId: Locator;

    // Error message
    readonly paymentError: Locator;

    readonly url: string = '/checkout';

    constructor(page: Page) {
        this.page = page;
        // Shipping form
        this.nameInput = page.locator('[data-testid=shipping-name]');
        this.emailInput = page.locator('[data-testid=shipping-email]');
        this.addressInput = page.locator('[data-testid=shipping-address]');
        this.continueButton = page.locator('[data-testid=continue-to-payment-button]');
        // Payment form
        this.cardNumberInput = page.locator('[data-testid=card-number-input]');
        this.nameOnCardInput = page.locator('[data-testid=card-name-input]');
        this.expiryDateInput = page.locator('[data-testid=expiry-date-input]');
        this.cvvInput = page.locator('[data-testid=cvv-input]');
        this.placeOrderButton = page.locator('[data-testid=place-order-button]');
        // Order placed confirmation
        this.orderPlacedConfirmation = page.locator('h2');
        this.transactionId = page.locator('[data-testid=transaction-id]');
        // Error message
        this.paymentError = page.locator('[data-testid=payment-error]');

    }

    async fillShippingInfo(name: string, email: string, shippingAddress: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.addressInput.fill(shippingAddress);
        await this.continueButton.click();
    }

    async fillPaymentForm(cardNumber: string, cardName: string, expiryDate: string, cvv: string) {
        await this.cardNumberInput.fill(cardNumber);
        await this.nameOnCardInput.fill(cardName);
        await this.expiryDateInput.fill(expiryDate);
        await this.cvvInput.fill(cvv);
        await this.placeOrderButton.click();
    }

}