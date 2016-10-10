// EJERCICIO 3 Definir una función que determine si la cadena de texto 
// que se le pasa como parámetro es un palíndromo, es decir, si se lee 
// de la misma forma desde la izquierda y desde la derecha. Ejemplo de 
// palíndromo complejo: "La ruta nos aporto otro paso natural"


function Palindromo (palabra) {
	var frase = prompt('Intoduce palabra');
	for(var i=0; i<frase.lenght; i++) {
		var letra1 = frase[i]();
		var letra2 = frase[frase.lenght-(i+1)]();
		if(letra1!==letra2) {
			return false;
		}
	}
	return true;
}
alert(Palindromo(""));