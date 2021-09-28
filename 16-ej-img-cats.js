/**
 * Hacer referencia al boton.
*/
const $btnCat = document.querySelector('#btnCat');
/**
 * Hacer referencia a div.
 */
const $divCats = document.querySelector('#cats');
/**
 * Agregar evento a boton.
 */
$btnCat.addEventListener('click', () =>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        imgCat.width = '300';
        /* 
        * document.body.append(imgCat);
        */
        $divCats.appendChild(imgCat);
    });
});



/**
 * Desestructuración.
 * Se usa para extraer elementos de un arreglo u objeto.
 *  const [cat] = data
/**const [cat] = data; == const cat = data[0]; 

console.log(cat);
const {url} = cat;
 */
/**
 imgCat.src = url;
 */