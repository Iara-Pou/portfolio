const $botonEnvio = document.querySelector("#botonEnviar");

$botonEnvio.onclick = function validarDatos(){
    
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const comentario = document.querySelector("#comentario").value;

