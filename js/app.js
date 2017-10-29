$(document).ready(function() {
var estado_titulo = true;

    //LLENADO DEL TABLERO
    llenar_tablero();

    //INTERMITENCIA DEL TITULO
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


  });


    // FUNCION PARA LLENAR EL TABLERO
    function llenar_tablero () {
        var contador = 0;
        var arreglo = new Array(7);

        // COLUMNA 1
        for (var i = 0; i < arreglo.length; i++) {

          //Generar Numero Aleatorio
          arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          //console.log(arreglo[i]);

          //Cambio de ruta de la imagen
          $(".col-1").append("<img class='elemento'></img>");
          $("img:last").attr('src', 'image/'+arreglo[i]+'.png');

        }

        //COLUMNA 2
        for (var i = 0; i < arreglo.length; i++) {

          //Generar Numero Aleatorio
          arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);

          //Cambio de ruta de la imagen
          $(".col-2").append("<img class='elemento'></img>");
          $("img:last").attr('src', 'image/'+arreglo[i]+'.png');

        }

        //COLUMNA 3
        for (var i = 0; i < arreglo.length; i++) {

          //Generar Numero Aleatorio
          arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);

          //Cambio de ruta de la imagen
          $(".col-3").append("<img class='elemento'></img>");
          $("img:last").attr('src', 'image/'+arreglo[i]+'.png');

        }

        //COLUMNA 4
        for (var i = 0; i < arreglo.length; i++) {

          //Generar Numero Aleatorio
          arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);

          //Cambio de ruta de la imagen
          $(".col-4").append("<img class='elemento'></img>");
          $("img:last").attr('src', 'image/'+arreglo[i]+'.png');

        }

        //COLUMNA 5
        for (var i = 0; i < arreglo.length; i++) {

          //Generar Numero Aleatorio
          arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);

          //Cambio de ruta de la imagen
          $(".col-5").append("<img class='elemento'></img>");
          $("img:last").attr('src', 'image/'+arreglo[i]+'.png');

        }

        //COLUMNA 6
        for (var i = 0; i < arreglo.length; i++) {

          //Generar Numero Aleatorio
          arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);

          //Cambio de ruta de la imagen
          $(".col-6").append("<img class='elemento'></img>");
          $("img:last").attr('src', 'image/'+arreglo[i]+'.png');

        }

        //COLUMNA 7
        for (var i = 0; i < arreglo.length; i++) {

          //Generar Numero Aleatorio
          arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);

          //Cambio de ruta de la imagen
          $(".col-7").append("<img class='elemento'></img>");
          $("img:last").attr('src', 'image/'+arreglo[i]+'.png');

        }




    }
