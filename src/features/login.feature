@login
Feature: Logueo

@happypath @login_ingresar
Scenario: El usuario puede iniciar sesión con credenciales válidas
    Given el usuario está en la pagina de inicio
    When ingresa el nombre de usuario "standard_user"
    And ingresa la contraseña "secret_sauce"
    And hace clic en el botón de iniciar sesión
    Then debería ser redirigido a la página de productos
 
@unhappypath @login_no_ingresa
Scenario: El usuario no puede iniciar sesión con credenciales inválidas
    Given el usuario está en la página de inicio de sesión
    When ingresa el nombre de usuario "standard_user"
    And ingresa una contraseña incorrecta "clave_incorrecta"
    And hace clic en el botón de iniciar sesión
    Then debería ver un mensaje de error "Epic sadface: Username and password do not match any user in this service"