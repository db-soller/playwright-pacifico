import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { CheckoutPage } from "../pages/checkoutPage";
import { expect } from "@playwright/test";

let loginPage: LoginPage;
let productsPage: ProductsPage;
let checkoutPage: CheckoutPage;

Given("que ha agregado productos al carrito", async function () {
    loginPage = new LoginPage(global.page);
    productsPage = new ProductsPage(global.page);
    checkoutPage = new CheckoutPage(global.page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLoginButton();

    await productsPage.addProductToCart("Sauce Labs Backpack");
});

Given("está en la página del carrito", async function () {
    await productsPage.goToCart();
});

When("hace clic en el botón de verificar {string}", async function (buttonText: string) {
    await checkoutPage.clickButton(buttonText);
});

When("ingresa su información de compra:", async function (dataTable) {
    const data = dataTable.raw();
    const firstName = data[1][0];
    const lastName = data[1][1];
    const zipCode = data[1][2];

    await checkoutPage.enterCheckoutInformation(firstName, lastName, zipCode);
});

When("hace clic en el botón de continuar {string}", async function (buttonText: string) {
    await checkoutPage.clickButton(buttonText);
});

When("revisa los detalles de la compra", async function () {
    const isReviewPage = await checkoutPage.isOnReviewPage();
    expect(isReviewPage).toBeTruthy();
});

When("hace clic en el botón de finalizar {string}", async function (buttonText: string) {
    await checkoutPage.clickButton(buttonText);
});

Then("debería ver el mensaje de confirmación {string}", async function (expectedMessage: string) {
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    expect(confirmationMessage).toBe(expectedMessage);
});