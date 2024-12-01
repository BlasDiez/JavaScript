// Función principal de validación que se ejecutará al enviar el formulario
function validarFormulario() {
    let errores = [];

    // Validación del campo Nombre
    if (!validarNombreApellidos("nombre")) {
        errores.push("El nombre es obligatorio y solo puede contener letras.");
        document.getElementById("nombre").focus();
    }

    // Validación del campo Apellidos
    if (!validarNombreApellidos("apellidos")) {
        errores.push("Los apellidos son obligatorios y solo pueden contener letras.");
        document.getElementById("apellidos").focus();
    }

    // Validación de la Edad
    if (!validarEdad()) {
        errores.push("La edad debe ser un número entre 0 y 105.");
        document.getElementById("edad").focus();
    }

    // Validación del NIF
    if (!validarNIF()) {
        errores.push("El NIF debe seguir el formato 12345678-A.");
        document.getElementById("nif").focus();
    }

    // Validación del Email
    if (!validarEmail()) {
        errores.push("El email no tiene un formato válido.");
        document.getElementById("email").focus();
    }

    // Validación de la Provincia
    if (!validarProvincia()) {
        errores.push("Debe seleccionar una provincia.");
        document.getElementById("provincia").focus();
    }

    // Validación de la Fecha
    if (!validarFecha()) {
        errores.push("La fecha debe estar en formato dd-mm-aaaa.");
        document.getElementById("fecha").focus();
    }

    // Validación del Teléfono
    if (!validarTelefono()) {
        errores.push("El teléfono debe tener 9 dígitos.");
        document.getElementById("telefono").focus();
    }

    // Validación de la Hora
    if (!validarHora()) {
        errores.push("La hora debe seguir el formato hh:mm.");
        document.getElementById("hora").focus();
    }

    // Mostrar errores en el contenedor "errores"
    document.getElementById("errores").innerHTML = errores.join("<br>");

    return errores.length === 0; // Solo enviar si no hay errores
}

function validarNombreApellidos(id) {
    const campo = document.getElementById(id);
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(campo.value.trim());
}

function validarEdad() {
    const edad = document.getElementById("edad").value.trim();
    const regex = /^[0-9]{1,3}$/;
    return regex.test(edad) && edad >= 0 && edad <= 105;
}

function validarNIF() {
    const nif = document.getElementById("nif").value.trim();
    /*
         ^ significa que la cadena debe empezar por lo que sigue
         [0-9]{8}[-] significa que debe haber 8 dígitos del 0 al 9 seguidos de un guion
         y [A-Z] significa que debe haber una letra mayúscula
         $ que la cadena debe terminar ahí
    */
    const regex = /^[0-9]{8}-[A-Z]$/;
    return regex.test(nif);
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    /*
        ^ indica que la cadena debe empezar por lo que sigue
        [a-zA-Z0-9._%+-]+ indica que puede haber letras, números, puntos, guiones bajos, porcentajes y signos más y menos
        @ indica que debe haber una arroba
        [a-zA-Z0-9.-]+ indica que puede haber letras, números, puntos y guiones
        \. Indica que debe haber un punto
        [a-zA-Z]{2,4} indica que debe haber entre 2 y 4 letras
        $ indica que la cadena debe terminar ahí
     */
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function validarProvincia() {
    const provincia = document.getElementById("provincia").value;
    return provincia !== "0";
}

function validarFecha() {
    const fecha = document.getElementById("fecha").value.trim();
    /*
        ^ indica que la cadena debe empezar por lo que sigue
        (0[1-9]|[12][0-9]|3[01]) indica que el día debe ser 01-09, 10-29 o 30-31
        - indica que debe haber una barra o un guion
        (0[1-9]|1[0-2]) indica que el mes debe ser 01-09 o 10-12
        - indica que debe haber una barra o un guion
        \d{4} indica que debe haber 4 dígitos
        $ indica que la cadena debe terminar ahí
    */
    const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    return regex.test(fecha);
}

function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    /*
        ^ indica que la cadena debe empezar por lo que sigue
        [0-9]{9}
        $ indica que la cadena debe terminar ahí
    */
    const regex = /^[0-9]{9}$/;
    return regex.test(telefono);
}

function validarHora() {
    const hora = document.getElementById("hora").value.trim();

    /*
        ^ indica que la cadena debe empezar por lo que sigue
        (0[0-9]|1[0-9]|2[0-3]) indica que la hora debe ser entre 00 y 23
        : indica que debe haber dos puntos
        [0-5][0-9] indica que los minutos deben ser 00-59
        $ indica que la cadena debe terminar ahí
     */
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(hora);
}

document.getElementById("formulario").onsubmit = function() {
    return validarFormulario();
};
