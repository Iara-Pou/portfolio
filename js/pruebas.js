function probarValidacionesEmail() {
    console.assert(validarEmail("aa11.com") === "No ingresaste un email válido.",
        "Validar mail no está negando un caso erróneo.");

    console.assert(validarEmail("iarapou21@hotmail.com") === "",
        "Validar mail no está aceptando un caso válido.");
}

function probarValidacionesNombre() {

    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter.",
        "Validar nombre no validó que el nombre no sea vacío");

    console.assert(validarNombre("aaaaaaaaaaaaaaaaaaaaaaaa") === "Este campo debe tener menos de 20 caracteres",
        "Validar nombre no validó que el nombre tenga menos que 20 carácteres")

    console.assert(
        validarNombre('1111111111111111') === "Este campo debe tener solo letras",
        "Validar nombre no validó que el nombre tenga solo letras",
    );

    console.assert(validarNombre("iara") === "",
        "Validar nombre no funcionó con un caso válido.");

}
function probarValidacionesMensaje() {

    console.assert(validarMensaje("") === "No ingresaste nada.",
        "Validar mensajes no validó que no sea un string vacío");

    console.assert(validarMensaje("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === "Tu mensaje no debe contener más que 300 carácteres.",
        "Validar mensajes no validó que el mensaje tenga menos de 300 carácteres");

    console.assert(validarMensaje("hola! como estás?()(//-") === "Tu mensaje debe contener solo números, letras, espacios, puntos, comas, signos de exclamación o interrogación.",
        "Validar mensajes no validó que el mensaje tenga solo números, letras, espacios, puntos, comas, signos de exclamación o interrogación");

    console.assert(validarMensaje("hola! como estás?") === "",
        "Validar mensajes no validó un mensaje correcto.");
}

probarValidacionesMensaje();
probarValidacionesEmail();
probarValidacionesNombre();
