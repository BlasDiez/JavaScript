// Añado un evento para que se ejecute el código cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", () => {
    //Creo un objeto persona con los datos introducidos por el usuario
    const persona = {
        nombre: prompt("Introduce el nombre:"),
        apellido: prompt("Introduce el apellido:"),
        profesion: prompt("Introduce la profesión:")
    };

    //Creo una función para enviar la persona al servidor
    function enviarPersona(persona) {
        //Devuelvo una promesa
        return new Promise((resolve, reject) => {
            //Creo un objeto XMLHttpRequest
            const xhr = new XMLHttpRequest();
            //Abro la conexión con el servidor
            xhr.open("GET", `guardarPersonas.php?persona=${encodeURIComponent(JSON.stringify(persona))}`, true);
            //Añado un evento para que se ejecute cuando la petición termine
            xhr.onload = () => xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.statusText);
            //Añado un evento para que se ejecute si hay un error de red
            xhr.onerror = () => reject("Error de red");
            //Envío la petición
            xhr.send();
        });
    }

    //Llamo a la función enviarPersona con la persona como argumento
    enviarPersona(persona)
        //Si la promesa se resuelve correctamente, muestro la respuesta del servidor en la consola
        .then(data => console.log("Respuesta del servidor:", data))
        //Si la promesa se rechaza, muestro el error en la consola
        .catch(error => console.error("Error:", error));
});
