//Funciones

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.*/

function suma(a, b) {
    return a + b;
}
  
var res = suma(12, 3);
console.log(res);
  
/*b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.*/

function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
      alert("Uno de los nros tiene un error");
      return NaN;
    }
    return a + b;
}

var resultado = suma(8, "Pepe");
console.log(resultado);

/*c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

function validateInteger(nro) {
    return nro % 1 === 0;
}

console.log(validateInteger(5));
console.log(validateInteger(3.14));

/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).*/

function validateInteger(nro) {
    return nro % 1 === 0;
}
  
function suma(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("Error. Uno de los números no es entero");
      a = Math.round(a);
      b = Math.round(b);
    }
    return a + b;
}
 
var res = suma(8.4, 12.7);
console.log(res);
  
/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/

function validateInteger(nro) {
    return Number.isInteger(nro);
}
  
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      alert("Error: Uno de los parámetros tiene un error");
      return NaN;
    }
    
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("Error: Los números deben ser enteros");
      a = Math.round(a);
      b = Math.round(b);
    }
    
    return a + b;
}
  
var resultado = suma(9.5, 2);
console.log(resultado);