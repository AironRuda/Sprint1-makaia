# Sprint1-makaia

<ul>En el repositorio se encuentra 3 documentos:
  <li>“ProyectoSprint1.pdf” documento que contiene las directrices para desarrollar la actividad</li>
  <li>“Inderx.html” que será el documento que se debe ejecutar en el navegador para que el código corra adecuadamente</li>
  <li>“cajero.js” que contiene las funciones y lógicas necesarias requeridas en el documento pdf</li>
</ul>

<hr>
# Funcionamiento

Se le debe ingresar al programa el id de un usuario, si el usuario no está registrado se indicará en pantalla, de lo contrario se procede a pedir la contraseña registrada del usuario, si la contraseña es incorrecta, se indica en pantalla, de lo contrario se identifica que tipo de usuario es en pantalla y procede de diferente manera si el usuario es administrador o cliente.
En el arreglo de usuarios se registraron 4 perfiles, en los que se identifica el nombre, id, contraseña y tipo de usuario (1. Administrador, 2. Cliente)

## usuario 1

    	name: “Airon”
    	id: 123
    	pass: 123
    	type: 1

## usuario 2

    	name: “Steven”
    	id: 456
    	pass: 456
    	type: 2

## usuario 3

    	name: “Dayan”
    	id: 789
    	pass: 789
    	type: 2

## usuario 4

    	name: “Vanessa”
    	id: 741
    	pass: 741
    	type: 2

Usando el id y las contraseñas correctamente se puede ingresar, en caso de ser un usuario:

### Administrador

Se debe indicar cuantos billetes de cada denominación se quieren ingresar al cajero (Una denominación a la vez), luego esta información se presentará en pantalla. Y se procederá a ingresar nuevamente un id de usuario.

### Cliente

Se debe indicar cuánto dinero se desea retirar, en caso de que el monto requerido supere al monto disponible, se indicará en pantalla, en caso de que el retiro se pueda efectuar, se indicará cuantos billetes de cada denominación fueron retirados.
