<?php
    // Decodifico el parametro persona que me envian//Traduzco el contenido de JSON a código
    $persona = json_decode($_GET['persona']);

     
    // Fichero donde voy a crear las personas
    $fichero = "personas.json";
 
    
 
    //Leo el contenido del archivo en JSON
    $datosJSON = file_get_contents("personas.json");
    
    //Traduzco el contenido del archivo de JSON a código. Obtengo un array de objetos y lo guardo en $personas
    $personas = json_decode($datosJSON, true);
    
    //Añado el objeto enviado desde el cliente al array de objetos
    array_push($personas, $persona );

    $datosJSON = json_encode($personas);


// Abro el fichero en modo escritura
    $fd = fopen($fichero,"w");
    // Escribo el objeto codificado
    fputs($fd,$datosJSON);
 
    // cierro el fichero
    fclose($fd);
 
    // Vuelvo a mandar a la persona en la respuesta
    echo($datosJSON);
?>