// Selección de los elementos del DOM
const div = document.getElementById('myDiv');
const p = document.getElementById('myP');
const botonBubbling = document.getElementById('botBub');
const botonCapturing = document.getElementById('botCapt');
const botonStop = document.getElementById('botStop');

// Asignación de los botones para activar o desactivar eventos
botonBubbling.addEventListener('click', activateBubbling);
botonCapturing.addEventListener('click', activateCapturing, true);
botonStop.addEventListener('click', deactivateEvents);

function activateBubbling() {

    div.firstElementChild.textContent = 'Bubbling';
    div.addEventListener('click', bublingDivClick);
    p.addEventListener('click', bublingPClick);

}

function bublingDivClick() {
    alert("Has hecho click en el naranja");
}

function bublingPClick() {
        alert("Has hecho clic en el blanco");
}

function activateCapturing() {

    div.firstElementChild.textContent = 'Capturing';
    div.addEventListener('click', capturingDivClick, true);
    p.addEventListener('click', capturingPClick, true);
}

function capturingDivClick() {

        alert("Has hecho click en el naranja");
}

function capturingPClick() {

        alert("Has hecho clic en el blanco");
}

function deactivateEvents() {

    div.firstElementChild.textContent = 'EVENTO CLIC DESACTIVADO';
    div.removeEventListener('click', bublingDivClick);
    p.removeEventListener('click', bublingPClick);
    div.removeEventListener('click', capturingDivClick, true);
    p.removeEventListener('click', capturingPClick, true);

}