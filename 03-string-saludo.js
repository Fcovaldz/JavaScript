const nombre = prompt("Como te llamas?");
const edad = prompt("¿Cuantos años tienes");

console.log("Hola" + nombre + "Whats up!, tienes " + edad + "años");

const saludo = `<h1> ¡Que onda tilin! ${nombre} saludos. Tilin tu edad es ${edad} años </h1>`;

document.write(saludo)