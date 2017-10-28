$(document).ready(function() {
var estado_titulo = true;

    function cambiar_estado () {
      if (estado_titulo) {
        //console.log(estado_titulo);
        $(".main-titulo").animate({color: "white"}, 2000);
        estado_titulo = false;
      } else {
        $(".main-titulo").animate({color: "yellow"}, 2000);
        estado_titulo = true;
      }
    }

    //Ejecutar la Funcion cada cierto tiempo
    setInterval(cambiar_estado, 2000);

    function llenar_tablero () {

    }




});
