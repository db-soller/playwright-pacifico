# Playwright Pacifico

## Descripción del Proyecto
Playwright Pacifico es un proyecto de pruebas automatizadas diseñado para validar el flujo de compra en la aplicación Sauce Demo. Este proyecto utiliza **Playwright** como framework de automatización y **Cucumber** para la definición de escenarios en lenguaje Gherkin, siguiendo el patrón de diseño **Page Object Model (POM)**.

El objetivo principal es garantizar que los usuarios puedan iniciar sesión, agregar productos al carrito y completar una compra, cumpliendo con los criterios de aceptación definidos.

---

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

playwright-pacifico/
├── config/
│   └── cucumber.js          # Configuración de Cucumber
├── src/
│   ├── features/            # Archivos .feature escritos en Gherkin
│   │   ├── login.feature     # Escenarios de inicio de sesión
│   │   ├── cart.feature      # Escenarios del carrito de compras
│   │   └── checkout.feature  # Escenarios del proceso de compra
│   ├── pages/               # Clases del patrón Page Object Model
│   │   ├── loginPage.ts      # Página de inicio de sesión
│   │   ├── productsPage.ts   # Página de productos
│   │   └── checkoutPage.ts   # Página de checkout
│   └── stepDefinitions/     # Implementaciones de los pasos en Type
│       ├── loginSteps.ts     # Pasos para inicio de sesión
│       ├── cartSteps.ts      # Pasos para el carrito de compras
│       └── checkoutSteps.ts  # Pasos para el proceso de compra
├── test-results/            # Resultados de las pruebas
├── package.json             # Dependencias del proyecto
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto

## Explicación de la Estructura

### **1. config/**
Contiene configuraciones del proyecto, como el archivo `cucumber.js` para Cucumber.

### **2. src/features/**
Contiene los archivos `.feature` escritos en Gherkin, que describen los escenarios de prueba:
- **`login.feature`**: Escenarios relacionados con el inicio de sesión.
- **`cart.feature`**: Escenarios relacionados con el carrito de compras.
- **`checkout.feature`**: Escenario relacionados con el proceso de compra.

### **3. src/pages/**
Implementa el patrón **Page Object Model (POM)**, encapsulando la lógica de interacción con las páginas:
- **`loginPage.ts`**: Métodos para interactuar con la página de inicio de sesión.
- **`productsPage.ts`**: Métodos para interactuar con la página de productos.
- **`checkoutPage.ts`**: Métodos para interactuar con la página de checkout.

### **4. src/stepDefinitions/**
Contiene las implementaciones de los pasos definidos en los archivos `.feature`:
- **`loginSteps.ts`**: Pasos para los escenarios de inicio de sesión.
- **`cartSteps.ts`**: Pasos para los escenarios del carrito de compras.
- **`checkoutSteps.ts`**: Pasos para los escenarios del proceso de compra.

### **5. test-results/**
Carpeta donde se almacenan los resultados de las pruebas (HTML, JSON, etc.).

### **6. package.json**
Archivo que define las dependencias del proyecto y los scripts de ejecución.

### **7. tsconfig.json**
Configuración de TypeScript para el proyecto.

### **8. README.md**
Documentación del proyecto.

---

## Requisitos Previos
Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes:
- **Node.js** (v16 o superior)
- **npm** (incluido con Node.js)
- **Playwright** (instalado como dependencia del proyecto)

---

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd playwright-pacifico
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Instala los navegadores necesarios para Playwright:
   ```bash
   npx playwright install
   ```

---

## Ejecución de Pruebas

### Ejecutar todos los escenarios:
```bash
npx cucumber-js
```

### Ejecutar escenarios específicos por etiqueta:
- Escenarios de inicio de sesión:
  ```bash
  npx cucumber-js --tags @login
  ```
- Escenarios del carrito de compras:
  ```bash
  npx cucumber-js --tags @carrito
  ```
- Escenarios del proceso de compra:
  ```bash
  npx cucumber-js --tags @checkout
  ```

---

## Escenarios Cubiertos

### **1. Inicio de Sesión**
- **Escenario 1:** El usuario puede iniciar sesión con credenciales válidas.
- **Escenario 2:** El usuario no puede iniciar sesión con credenciales inválidas (e.g., `locked_out_user`).

### **2. Carrito de Compras**
- **Escenario 1:** El usuario puede agregar un producto al carrito desde la página de productos.
- **Escenario 2:** El usuario puede ver los productos en el carrito.

### **3. Proceso de Compra**
- **Escenario 1:** El usuario puede completar el proceso de compra hasta la confirmación.

---

## Patrones de Diseño
El proyecto utiliza el patrón **Page Object Model (POM)** para mantener el código modular y reutilizable. Cada página de la aplicación está representada por una clase que encapsula los selectores y métodos necesarios para interactuar con los elementos de la página.

### Ejemplo: Clase `LoginPage`
```typescript
// import { Page } from "playwright";

// export class LoginPage {
//     private page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }

//     async navigateToLoginPage(): Promise<void> {
//         await this.page.goto("https://www.saucedemo.com/");
//     }

//     async enterUsername(username: string): Promise<void> {
//         await this.page.fill("#user-name", username);
//     }

//     async enterPassword(password: string): Promise<void> {
//         await this.page.fill("#password", password);
//     }

//     async clickLoginButton(): Promise<void> {
//         await this.page.click("#login-button");
//     }

//     async isOnProductsPage(): Promise<boolean> {
//         return this.page.url().includes("inventory.html");
//     }
// }
```

---

## Resultados de las Pruebas
Los resultados de las pruebas se generan en formato **HTML** y **JSON** en la carpeta `test-results/`. Para visualizar el reporte HTML:
1. Ejecuta las pruebas.
2. Abre el archivo `test-results/reports/cucumber-report.html` en tu navegador.

---

## Subir Cambios al Repositorio
1. Asegúrate de que todos los archivos estén en el repositorio local:
   ```bash
   git add .
   git commit -m "Implementación de pruebas automatizadas para Sauce Demo"
   ```

2. Sube los cambios al repositorio remoto:
   ```bash
   git push origin main
   ```

---

## Notas Adicionales
- **Usuarios de Prueba:**
  - Usuario estándar: `standard_user`
  - Usuario bloqueado: `locked_out_user`
  - Contraseña para ambos: `secret_sauce`
- **Navegadores Compatibles:** Playwright soporta Chromium, Firefox y WebKit. Asegúrate de que los navegadores estén instalados correctamente.

---

## Contacto
Si tienes preguntas o necesitas soporte, no dudes en contactarme.
