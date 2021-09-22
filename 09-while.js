/* Ciclo while
Nos permite repetir de código mientras una condicion sea verdadera */
/*
let num1 = parseInt(prompt('Ingresa un número'));

/* NaN = Not a Number *//*

while(isNaN(num1)) {
     num1 = parseInt(prompt('Ingresa un número'));
}
*/
/*
let num1 = parseInt(prompt("Ingresa un número"));
const num_secreto = 23;
let intentos = 1;

while(num1 !== 23) {
    console.log("No adivinaste el número secreto, intenta de nuevo");
   
    console.log(`Intento: ${intentos}`);
    intentos++;

    num1 = parseInt(prompt("Ingresa un número"));
}

console.log('Felicidades, encontraste el número secreto');
*/

let num1 = parseInt(prompt("Ingresa un número"));
do {
    document.write(`<p>El número introducido es: ${num1}</p>`);
    num1 = parseInt(prompt("Ingresa un número"));
}
while(num1 > 5);