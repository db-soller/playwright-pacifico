@checkout
Feature: Proceso de compra
 
@happypath @compra
Scenario: El usuario puede completar el proceso de compra hasta la confirmación
    Given que ha agregado productos al carrito
    And está en la página del carrito
    When hace clic en el botón de verificar "Checkout"
    And ingresa su información de compra:
      | First Name | Last Name | Zip Code |
      | John       | Doe       | 12345    |
    And hace clic en el botón de continuar "Continue"
    And revisa los detalles de la compra
    And hace clic en el botón de finalizar "Finish"
    Then debería ver el mensaje de confirmación "Thank you for your order!"