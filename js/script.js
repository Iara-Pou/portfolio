const $botonEnvio = document.querySelector("#botonEnviar");

$botonEnvio.onclick = function validarDatos(){
    
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const comentario = document.querySelector("#comentario").value;

    const errores = {
        nombre : validarNombre(nombre), 
        email : validarEmail(email),
        comentario : validarComentario(comentario)
    }

    console.log(errores)

    return false;
}
