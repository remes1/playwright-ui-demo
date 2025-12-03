import { expect, test } from '../fixtures/fixtures';

test.describe('Payment workflows', () => {

    test('Successful payment flow', async ({ e2e, checkout }) => {
        await e2e.processPayment(process.env.SUCCESS_USERNAME!, process.env.SUCCESS_PASSWORD!);
        await checkout.transactionId.waitFor({ state: 'visible' });
        await expect(checkout.orderPlacedConfirmation).toHaveText('Order placed successfully!');
    });

    test('Failed payment flow', async ({ e2e, checkout }) => {
        await e2e.processPayment(process.env.FAILED_USERNAME!, process.env.FAILED_PASSWORD!);
        await checkout.paymentError.waitFor({ state: 'visible' });
        await expect(checkout.paymentError).toHaveText('Payment declined. This test user always fails payments.');
    });

})