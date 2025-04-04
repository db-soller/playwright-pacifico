import { Page } from "playwright";

export class CheckoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickButton(buttonText: string): Promise<void> {
        const buttonSelector = `button:has-text("${buttonText}"), input[value="${buttonText}"]`;
        await this.page.waitForSelector(buttonSelector, { timeout: 10000 }); 
        await this.page.click(buttonSelector);
    }

    async enterCheckoutInformation(firstName: string, lastName: string, zipCode: string): Promise<void> {
        await this.page.fill("#first-name", firstName);
        await this.page.fill("#last-name", lastName);
        await this.page.fill("#postal-code", zipCode);
    }

    async isOnReviewPage(): Promise<boolean> {
        return this.page.url().includes("checkout-step-two.html");
    }

    async isOnConfirmationPage(): Promise<boolean> {
        return this.page.url().includes("checkout-complete.html");
    }

    async getConfirmationMessage(): Promise<string> {
        return await this.page.textContent(".complete-header");
    }

    async getOrderDetails(): Promise<string> {
        return await this.page.textContent(".complete-text");
    }
}