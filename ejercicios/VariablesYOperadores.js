// Variables y Operadores

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

var num1, num2, res;
num1 = 3;
num2 = 5;
res = num1 + num2;
console.log(res)

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

var cad1, cad2, conc;
cad1 = 'Rosario';
cad2 = 'Central';
conc = cad1 + ' ' +cad2;
console.log(conc);

//c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

var cad1 = "Ezequiel";
var cad2 = "Alderete";
var longitudCad = cad1.length + cad2.length;
console.log("El total de la longitud es de: " + longitudCad);
