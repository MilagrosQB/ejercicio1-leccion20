function suma(num1) {
var num2 = 0;
	return function(num2) {
		return num1 + num2;
	}
}

var sum2 = suma(2);
console.log(suma2(5)); //Debería mostrar 7 de resultado

var suma12 = suma(12);
console.log(suma12(76)); //Debería mostrar 88 de resultado


//Este ejercicio debe contener el README.md indicando el código inicial y luego la solución planteada