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

    $(".elemento").on('click', function () {
      //CREACION DE ARREGLOS POR COLUMNAS
      var col1 = $(".col-1").children('img');
      var col2 = $(".col-2").children('img');
      var col3 = $(".col-3").children('img');
      var col4 = $(".col-4").children('img');
      var col5 = $(".col-5").children('img');
      var col6 = $(".col-6").children('img');
      var col7 = $(".col-7").children('img');

      //CREACION DE UNA MATRIZ CON TODOS LOS ELEMENTOS DEL TABLERO
      var matriz = [col1, col2, col3, col4,
                    col5, col6, col7];

      //OBTENCION DEL ELEMENTO PADRE PARA DETERMINAR EL NUMERO DE COLUMNA
      var padre = $(this).parent().attr('class');
      var str = padre.substring(4,5); // <-- extrar el numero de la clase
      str = parseInt(str); // <--- convertir el string a INT
      fila = str-1; // <--- numero de la columna

      //OBTENCION DEL INDICE DEL ELEMENTO SELECCIONADO
      var indice = $(this).index();

      //OBTENCION DE LA RUTA DE LA IMAGEN DEL ELEMENTO SELECCIONADO
      var ruta_imagen = $(this).attr('src');


      console.log(indice, fila, ruta_imagen, matriz[fila][indice]);
      


    });

});

    /*

    function comp_combinacion () {




      //var matriz = [columna1, columna2, columna3, columna4, columna5, columna6, columna7];


      //console.log(matriz);
    }
    */

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
