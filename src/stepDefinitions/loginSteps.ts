import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/loginPage";
import { expect } from "@playwright/test";

let loginPage: LoginPage;

Given("el usuario está en la pagina de inicio", async function () {
    loginPage = new LoginPage(global.page);
    await loginPage.navigateToLoginPage();
});

Given("el usuario está en la página de inicio de sesión", async function () {
    loginPage = new LoginPage(global.page); 
    await loginPage.navigateToLoginPage();
});

When("ingresa el nombre de usuario {string}", async function (username: string) {
    await loginPage.enterUsername(username);
});

When("ingresa la contraseña {string}", async function (password: string) {
    await loginPage.enterPassword(password);
});

When("ingresa una contraseña incorrecta {string}", async function (password: string) {
    await loginPage.enterPassword(password);
});

When("hace clic en el botón de iniciar sesión", async function () {
    await loginPage.clickLoginButton();
});

Then("debería ser redirigido a la página de productos", async function () {
    const isOnProductsPage = await loginPage.isOnProductsPage();
    expect(isOnProductsPage).toBeTruthy();
});

Then("debería ver un mensaje de error {string}", async function (expectedErrorMessage: string) {
    const actualErrorMessage = await loginPage.getErrorMessage();
    expect(actualErrorMessage).toBe(expectedErrorMessage);
});