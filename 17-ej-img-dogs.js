/**
 * Hacer referencia al boton.
*/
const $btnDog = document.querySelector('#btnDog');
/**
 * Hacer referencia a div.
 */
const $divDogs = document.querySelector('#dogs');
/**
 * Agregar evento a boton.
 */
$btnDog.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imgDog = document.createElement('img');
        imgDog.src = data.message;
        imgDog.width = '300';
        
        $divDogs.appendChild(imgDog);
    });
});

