import { Page } from "playwright";

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto("https://www.saucedemo.com");
    }

    async enterUsername(username: string): Promise<void> {
        await this.page.fill("#user-name", username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.page.fill("#password", password);
    }

    async clickLoginButton(): Promise<void> {
        await this.page.click("#login-button");
    }

    async isOnProductsPage(): Promise<boolean> {
        return this.page.url().includes("inventory.html");
    }
    
    async getErrorMessage(): Promise<string> {
        return await this.page.textContent("[data-test='error']");
    }
}