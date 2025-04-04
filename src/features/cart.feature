@carrito
Feature: Carrito de compras
 
@happypath @carrito_agregar
Scenario: El usuario puede agregar un producto al carrito desde la página de productos
    Given el usuario ha iniciado sesión exitosamente
    And está en la página de productos
    When hace clic en el botón "Add to cart" del producto "Sauce Labs Backpack"
    Then el contador del carrito debería mostrar "1"

@happypath @carrito_visualizar
Scenario: El usuario puede ver los productos en el carrito
    Given el usuario ha agregado productos al carrito desde la página de productos
    When hace clic en el ícono del carrito
    Then debería ver los productos agregados en la lista del carrito