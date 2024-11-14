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
        errores.push("La fecha debe estar en formato dd/mm/aaaa o dd-mm-aaaa.");
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

// Validar NOMBRE y APELLIDOS (solo letras)
function validarNombreApellidos(id) {
    const campo = document.getElementById(id);
    const regex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    return regex.test(campo.value.trim());
}

// Validar EDAD (números entre 0 y 105)
function validarEdad() {
    const edad = document.getElementById("edad").value.trim();
    const regex = /^[0-9]{1,3}$/;
    return regex.test(edad) && edad >= 0 && edad <= 105;
}

// Validar NIF (8 dígitos, un guion y una letra)
function validarNIF() {
    const nif = document.getElementById("nif").value.trim();
    const regex = /^[0-9]{8}-[A-Za-z]$/; // 8 números, guion y una letra
    return regex.test(nif);
}

// Validar E-MAIL
function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

// Validar PROVINCIA (debe seleccionar una opción distinta de "0")
function validarProvincia() {
    const provincia = document.getElementById("provincia").value;
    return provincia !== "0";
}

// Validar FECHA (formatos dd/mm/aaaa o dd-mm-aaaa)
function validarFecha() {
    const fecha = document.getElementById("fecha").value.trim();
    const regex = /^(0[1-9]|[12][0-9]|3[01])([\/\-])(0[1-9]|1[0-2])\2\d{4}$/;
    return regex.test(fecha);
}

// Validar TELEFONO (9 dígitos)
function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    const regex = /^[0-9]{9}$/;
    return regex.test(telefono);
}

// Validar HORA (formato hh:mm)
function validarHora() {
    const hora = document.getElementById("hora").value.trim();
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(hora);
}

// Asignar evento submit al formulario
document.getElementById("formulario").onsubmit = function() {
    return validarFormulario();
};
