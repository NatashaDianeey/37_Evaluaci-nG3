//Ejercicio 2: Declara un arreglo vacío denominado nombres. 
//Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. 
//A continuación muestra el contenido en un mensaje.


/*Pseudocodigo
-Inicio
-Declarar variable vacia llamada nombres
-Inicializar contador para pedirle al usuario 3 nombres
-Declarar variable para guardar nombres
-Añadir con push los nombres pedidos al usuario a la variable de nombres 
-Al terminar el ciclo mandar alert con los nombres
-Fin
-*/

var nombres = [];

for(i=0; i<3; i++) {
	
	var nombresUsuario =  prompt('Ingrese nombre');

	nombres.push(nombresUsuario);
}

alert(nombres);