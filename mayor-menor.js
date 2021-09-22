const numero1 = parseInt(prompt('Digite un numero'))
const numero2 = parseInt(prompt('Digite otro numero'))

if (numero1 > numero2) {
    resultado1 = numero1 + numero2;
    resultado2 = numero1 - numero2;
    document.write("suma: " + resultado1 + "diferencia: " + resultado2);
    
} else {
    resultado1 = numero2 / numero1;
    resultado2 = numero2 * numero1;
    document.write("Division: " + resultado1 + " Producto: " + resultado2);
}
