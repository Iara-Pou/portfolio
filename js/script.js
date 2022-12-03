const $formulario = document.querySelector("#formulario");
const $botonEnvio = document.querySelector("#botonEnviar");
const $contenedorErrores = document.querySelector("#errores");

window.onbeforeunload = () => {
    $formulario.reset();
}


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
        enviarFormulario();
    
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
            textoError.classList = "form-text text-danger"
            $formulario[llave].after(textoError);

        } else {
            $formulario[llave].classList.remove("error");
            //si formulario[llave] no tiene clase error, sacarle el mensaje. un if usando includes. que el elemento que le sigue sea eliminado formulario[llave].p
            document.querySelectorAll(".form-text").forEach(texto => texto.remove())
        }
    })

    return contadorErrores;

}

function enviarFormulario(){
    setTimeout(()=> {
        $formulario.submit();
    } ,2000)
}

function borrarErroresAnteriores(){
    document.querySelectorAll(".form-text").forEach(texto => texto.remove())
}
