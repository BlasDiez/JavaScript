//Añado un evento para que se ejecute el código cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", () => {
    //Creo un objeto persona con los datos introducidos por el usuario
    const persona = {
        nombre: prompt("Introduce el nombre:"),
        apellido: prompt("Introduce el apellido:"),
        profesion: prompt("Introduce la profesión:")
    };

    //Creo un objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    //Abro la conexión con el servidor
    xhr.open("POST", "guardarPersonas.php", true);
    //Establezco el tipo de contenido de la petición
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //Añado un evento para que se ejecute cuando el estado de la petición cambie
    xhr.onreadystatechange = function () {
        //Si la petición ha terminado y la respuesta del servidor es correcta
        if (xhr.readyState === 4 && xhr.status === 200) {
            //Muestro la respuesta del servidor en la consola
            console.log("Respuesta del servidor:", JSON.parse(xhr.responseText));
        }
    };
    //Envío la petición
    xhr.send(`persona=${encodeURIComponent(JSON.stringify(persona))}`);
});
