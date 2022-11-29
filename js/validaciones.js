function validarEmail(email) {
    if ( !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return "No ingresaste un email válido."
    }

    return "";
};

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter.';
    }

    if (nombre.length > 20) {
        return 'Este campo debe tener menos de 20 caracteres';
    }

    if (!/^[A-z]+$/.test(nombre)) {
        return "Este campo debe tener solo letras";
    }

    return "";
}

function validarMensaje(mensaje) {

    if (mensaje.length >= 300) {
        return "Tu mensaje no debe contener más que 300 carácteres."
    }

    if (mensaje.length === 0) {
        return "No ingresaste nada."
    }

    if (!/^[A-z0-9,.\s¿?¡!]+$/.test(mensaje)) {
        return "Tu mensaje debe contener solo números, letras, espacios, puntos, comas, signos de exclamación o interrogación."
    }

    return "";
}
