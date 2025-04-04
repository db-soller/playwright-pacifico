import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { expect } from "@playwright/test";

let loginPage: LoginPage;
let productsPage: ProductsPage;

Given("el usuario ha iniciado sesión exitosamente", async function () {
    loginPage = new LoginPage(global.page);
    productsPage = new ProductsPage(global.page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLoginButton();
});

Given("está en la página de productos", async function () {
    const isOnProductsPage = await productsPage.isOnProductsPage();
    expect(isOnProductsPage).toBeTruthy();
});

When("hace clic en el botón {string} del producto {string}", async function (buttonText: string, productName: string) {
    await productsPage.addProductToCart(productName);
});

Then("el contador del carrito debería mostrar {string}", async function (expectedCount: string) {
    const cartCounter = await productsPage.getCartCounter();
    expect(cartCounter).toBe(expectedCount);
});

Given("el usuario ha agregado productos al carrito desde la página de productos", async function () {
    loginPage = new LoginPage(global.page);
    productsPage = new ProductsPage(global.page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLoginButton();

    await productsPage.addProductToCart("Sauce Labs Backpack");
});

When("hace clic en el ícono del carrito", async function () {
    await productsPage.goToCart();
});

Then("debería ver los productos agregados en la lista del carrito", async function () {
    const cartItems = await productsPage.getCartItems();
    expect(cartItems).toContain("Sauce Labs Backpack");
});