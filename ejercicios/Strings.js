//Strings

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var cad = 'Monumento a la Bandera'
console.log(cad.toUpperCase())

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/

var cadOriginal = 'Spiderman';
var nuevaCadena = cadOriginal.substring(0, 5);
console.log('La nueva palabra es: ' + nuevaCadena);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/

var cadOriginal = 'Spiderman'
var nuevaCadena = cadOriginal.substring(cadOriginal.length-3)
console.log('La nueva palabra es: ' + nuevaCadena);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/

var cadOriginal = 'rOSARIGASINO';
var nuevaCadena = cadOriginal.substring(0, 1).toUpperCase() + cadOriginal.substring(1).toLowerCase();
console.log('La palabra queda asi: ' + nuevaCadena);


/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/

var cad = 'Puente Victoria';
var posicionEspacio = cad.indexOf(" ");
console.log('La posición del espacio en blanco es: ' + posicionEspacio);


/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).*/

var cadOriginal = 'rOSARIO cENTRAL';

var posicionEspacio = cadOriginal.indexOf(' ');

var primeraLetra1 = cadOriginal.substring(0, 1).toUpperCase();
var primeraLetra2 = cadOriginal.substring(posicionEspacio + 1, posicionEspacio + 2).toUpperCase();

var restoPalabra1 = cadOriginal.substring(1, posicionEspacio).toLowerCase();
var restoPalabra2 = cadOriginal.substring(posicionEspacio + 2).toLowerCase();

var stringFinal = primeraLetra1 + restoPalabra1 + " " + primeraLetra2 + restoPalabra2;

console.log('El nuevo String es: ' + stringFinal);
