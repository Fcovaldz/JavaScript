/*var numero = parseInt(prompt("Numero", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("Ingrese un numero", 0));
}
if(numero %2 == 0){
    document.write{""}
}
var num;
var num2;
num = prompt("Ingrese un numero", "");
num2 = prompt("Ingrese un numero", "");
//num2 = parseInt(num2);
if(num %2 == 1){
    
}

for(i = num; i <= num2; i++){
   
    document.write(i*2-1+"<br>");
}*/
const numero1 = parseInt(prompt('Digite un numero'))
const numero2 = parseInt(prompt('Digite otro numero'))

if (numero1 < numero2) {
    for(let i = numero1 + 1; i < numero2; i++){
        if(i % 2 != 0){
            document.write(`${i}`);
        }
    }
} else {
    document.write(`<p>el numero es par</p>`)
}