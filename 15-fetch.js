/**
 * JSON = Javascript Object Notation.
 * Accedemos a un recurso de un servidor.
 * .then(): promesa.
 */

/*
 * Fetch nos permite hacer peticiones http desde javascript.
 */
const peticion = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(resp => resp.json()).then(data => {
    console.log(data);
}).catch(e => {
    /**
     * (e): hace referencia al error.
     */
    console.log(e)
});
console.log(peticion);