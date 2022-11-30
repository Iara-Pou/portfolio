const $formulario = document.querySelector("#formulario");
const $botonEnvio = document.querySelector("#botonEnviar");
const $contenedorErrores = document.querySelector("#errores");

$botonEnvio.onclick = function validarDatos(){
    
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const comentario = document.querySelector("#comentario").value;

    const errores = {
        nombre : validarNombre(nombre), 
        email : validarEmail(email),
        comentario : validarComentario(comentario)
    }

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {

        $formulario.classList.add("oculto");
        $contenedorErrores.classList.add("oculto");
        
        document.querySelector("#mensaje-exito").classList.remove("oculto");
        //enviar form
    
    }

    return false;
}

function manejarErrores(errores) {

    borrarErroresAnteriores();

    const llaves = Object.keys(errores);
    let contadorErrores = 0;

    llaves.forEach(llave => {
        const error = errores[llave];
        if (error) {
            contadorErrores++;
            $formulario[llave].classList.add("error");

            let textoError = document.createElement("p");
            textoError.textContent = error;
            $contenedorErrores.appendChild(textoError);

            $contenedorErrores.classList.remove("oculto");

        } else {
            $formulario[llave].classList.remove("error");
        }
    })

    return contadorErrores;

}

function borrarErroresAnteriores(){
    let $contenedorErrores = document.querySelector("#errores");
    $contenedorErrores.textContent = "";
}
