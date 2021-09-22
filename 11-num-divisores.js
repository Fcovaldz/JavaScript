/** Mostrar numeros divisores de un numero introducido */

var n = prompt('Digite un número');

var cont = 1;
for(i = 1; i <= n; i++){
    if(n % i == 0) {
        
        document.write("["+ i + "]");
        
    }
   
}
