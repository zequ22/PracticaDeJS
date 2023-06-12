//Arrays

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Mes 5:", meses[4]);
console.log("Mes 11:", meses[10]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.sort();
console.log("Array ordenado:", meses);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.unshift("Elemento 1");
meses.push("Elemento 2");
console.log("Array actualizado:", meses);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

var meses = ["Elemento 1", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Elemento 2"];

meses.shift();
meses.pop();
console.log("Array actualizado:", meses);

//e. Invertir el orden del array (utilizar reverse).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.reverse();
console.log("Array actualizado:", meses);

//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var resultado = meses.join("-");
console.log("String final:", resultado);

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var copia = meses.slice(4, 11);
console.log("Copia del array de meses:", copia);