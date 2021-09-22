/*
**** ARREGLOS ****
* Estructura de datos.
*/

/*
* Declaración de arreglos.
*/

const arreglo = []; //Forma 1 de declarar arreglo.
const arreglo2 = new Array(); //Forma 2 de declarar arreglo.

let lenguajes = ['Javascript', 'Java', 'PHP', 'Python', 'C#', 'C++', 'Scala', 'Rust', 'Ruby', 'Cobol'];

/*
* forEach : Permite recorrer elementos del arreglo.
* Funcion anonima.
*/
document.write('<ul>');
lenguajes.forEach(function(lenguaje, index) {
    document.write(`<li>${index} - ${lenguaje}</li>`);
});
document.write('</ul>');


/*
* Map, crea un nuevo arreglo con  los resultados.
*/
let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero) {
    return numero * 2;
});

console.log(numeros);
console.log(numeros2);

/*
* Includes: Determina si un arreglo contiene un valor. 
*/
console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('Solidity'));
console.log(!lenguajes.includes('Go'));

/*
* Filter: crear un nuevo arreglo con todos los elementos que cumplan con la condicion.
*/
let filtrados = numeros.filter(function(numero) {
    if(numero > 10) {
        return numero;
    }
});
console.log(filtrados);

/* Arreglo simulando rango *//*
let arrayx = [];
for(let i = 0; i < 10; i++) {
    arrayx.push(i);
}
console.log(arrayx);
*/
