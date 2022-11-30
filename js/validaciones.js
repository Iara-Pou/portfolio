function validarNombre(nombre) {

    nombre = _.deburr(nombre);

    if (nombre.trim().length === 0) {
        return 'Este campo debe tener al menos 1 caracter.';
    }

    if (nombre.length > 20) {
        return 'Este campo debe tener menos de 20 caracteres.';
    }

    if (!/^[A-z]+$/.test(nombre)) {
        return "Este campo debe tener solo letras.";
    }

    return "";
}

function validarEmail(email) {
    if(! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return "No ingresaste un email válido."
    }

    return "";
};

function validarComentario(comentario) {

    comentario = _.deburr(comentario);

    if (comentario.trim().length === 0) {
        return "No ingresaste nada."
    }

    if (comentario.length >= 400) {
        return "Tu mensaje no debe contener más que 400 carácteres."
    }

    if (!/^[A-z0-9,\.\s¿?¡!]+$/.test(comentario)) {
        return "Tu mensaje debe contener solo números, letras, espacios, puntos, comas, signos de exclamación o interrogación."
    }

    return "";

}
