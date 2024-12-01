// Añadimos un evento para que se ejecute el código cuando el documento esté cargado.
document.addEventListener("DOMContentLoaded", () => {
    // Creamos un objeto persona con los datos introducidos por el usuario.
    const persona = {
        nombre: prompt("Introduce el nombre:"),
        apellido: prompt("Introduce el apellido:"),
        profesion: prompt("Introduce la profesión:")
    };

    // Creamos una función para enviar la persona al servidor.
    function enviarPersona(persona) {
        // Devolvemos una promesa.
        return new Promise((resolve, reject) => {
            // Creamos un objeto XMLHttpRequest.
            const xhr = new XMLHttpRequest();
            // Abrimos la conexión con el servidor.
            xhr.open("POST", "guardarPersonas.php", true);
            // Establecemos el tipo de contenido de la petición.
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // Añadimos un evento para que se ejecute cuando el estado de la petición cambie.
            xhr.onload = () => xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.statusText);
            // Añadimos un evento para que se ejecute si hay un error de red.
            xhr.onerror = () => reject("Error de red");
            // Enviamos la petición.
            xhr.send(`persona=${encodeURIComponent(JSON.stringify(persona))}`);
        });
    }

    // Llamamos a la función enviarPersona con la persona como argumento.
    enviarPersona(persona)
        // Si la promesa se resuelve correctamente, mostramos la respuesta del servidor en la consola.
        .then(data => console.log("Respuesta del servidor:", data))
        // Si la promesa se rechaza, mostramos el error en la consola.
        .catch(error => console.error("Error:", error));
});
