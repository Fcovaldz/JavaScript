/* Solcitar número al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado
 */ 
let num1 = parseInt(prompt("Ingresa un número"));
suma = 0,
media = 0;
const numero = [];

while(num1 >= 0) {
    suma++;
    media = media + num1;
    numero.push(num1);

    num1 = parseInt(prompt("Ingresa un número"));
  
}

document.writeln(`<p>Numeros ingresados: <strong>${numero}.</strong></p>`);
document.writeln(`<p>La suma es: <strong>${media}.</strong><br/>El promedio es: <strong>${media/suma}.</strong></p>`);


