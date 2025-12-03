import { Page, Locator } from "@playwright/test";

export class ProductsPage{
    private readonly page: Page;
    private readonly firstProductAddToCartBtn: Locator;
    private readonly firstProductPrice: Locator;
    private readonly firstProductTitle: Locator;

    readonly url: string = '/products';

    constructor(page: Page){
        this.page = page;
        this.firstProductAddToCartBtn = page.locator('[data-testid=add-to-cart-button]').first();
        this.firstProductPrice = page.locator('main:nth-child(2) > div:nth-child(1)');
        this.firstProductTitle = page.locator('[data-testid=product-title]').first();
    }

    async addFirstProductToCart(){
        await this.firstProductAddToCartBtn.click();
    }

}