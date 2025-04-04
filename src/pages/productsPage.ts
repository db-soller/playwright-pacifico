import { Page } from "playwright";

export class ProductsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isOnProductsPage(): Promise<boolean> {
        return this.page.url().includes("inventory.html");
    }

    async addProductToCart(productName: string): Promise<void> {
        const productSelector = `[data-test="add-to-cart-${productName.toLowerCase().replace(/ /g, "-")}"]`;
        await this.page.click(productSelector);
    }

    async getCartCounter(): Promise<string> {
        return await this.page.textContent(".shopping_cart_badge");
    }

    async goToCart(): Promise<void> {
        await this.page.click(".shopping_cart_link");
    }

    async getCartItems(): Promise<string[]> {
        return await this.page.$$eval(".cart_item .inventory_item_name", items =>
            items.map(item => item.textContent?.trim() || "")
        );
    }
}