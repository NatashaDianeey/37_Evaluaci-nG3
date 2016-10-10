//Ejercicio 1: Haz el juego de piedra papel o tijera con 3 turnos

/*Pseudocodigo
-Inicio
-Declarar variables (piedra, papel, tijeras)
-Inicializar contador para pedirle al usuario 3 veces que ingrese las variables
-Declarar variables para pedir al usuario que elija entres las 3 variables
-Crear una estructura condicional que compare el resultado de ambos usuarios
-Imprimir resultado despues de cada comparacion
-Imprimir resultado final
-Fin
 */ 

var piedra = 3;
var papel = 1;
var tijeras = 2;
var ganador = 0;
var resultado = 0;
for(i=0; i<3; i++) {

	var usuario1 = prompt('Usuario 1: Ingresa piedra, papel o tijeras')
	var usuario2 = prompt('Usuario 2: Ingresa piedra, papel o tijeras')

	if (usuario1>usuario2) {
		alert('Gana Usuario 1');
		ganador = ganador + usuario1;
	} else if (usuario2>usuario1) {
		alert('Gana usuario2');
		ganador = ganador + usuario2
	} else {
		alert('Empatan');
	}
	resultado = resultado + ganador ;
} alert(i + resultado)