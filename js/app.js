//$(document).ready(function() {
    var estado_titulo = true;
    llenar_tablero();

    $(".btn-reinicio").on('click', function () {

      //LLENADO DEL TABLERO
      $(this).text('Reiniciar')

    })

    ////////////////////////////////////////////////////////////////////////////
    //                      INTERMITENCIA DEL TITULO
    ////////////////////////////////////////////////////////////////////////////
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

      //OBTENCION DEL ELEMENTO PADRE PARA DETERMINAR EL NUMERO DE COLUMNA
      var padre = $(this).parent().attr('class');
      var str = padre.substring(4,5); // <-- extrar el numero de la clase
      col = parseInt(str); // <--- convertir el string a INT <--- numero de la columna
      //col = str-1; //

      //OBTENCION DEL INDICE DEL ELEMENTO SELECCIONADO
      var indice = $(this).index();
      var selected = $(this);

      //INVOCAR LA FUNCION PARA VERIFICAR LAS COMBINACIONES DE LOS DULCES
      comprobar_dulces(col, indice, selected);


    });

//});

    ////////////////////////////////////////////////////////////////////////////
    //              COMPROBACION DE LOS DULCES
    ////////////////////////////////////////////////////////////////////////////

    function comprobar_dulces(col, indice, selected) {

      // VARIABLES GLOBALES DENTRO DE LA FUNCION
      var selectedF;
      var rightF;
      var leftF;

      //////////////////////////////////////////////////////////////
      //    COMPROBACION VERTICAL                                 //
      //////////////////////////////////////////////////////////////

      //OBJETOS ARRIBA Y ABAJO
      var upD = selected.prev('img');
      var downD = selected.next('img');
      var seleD = selected;

      //ATRIBUTO SRC
      var upAtr = upD.attr('src');
      var selAtr = selected.attr('src');
      var downAtr = downD.attr('src');

      if (selAtr == upAtr && selAtr == downAtr && upAtr == downAtr) {
        //RECOGER EL CONTENEDOR PADRE DE LOS ELEMENTOS A ELIMINAR
        selectedF = seleD.parent('div');

        upD.remove();
        seleD.remove();
        downD.remove();

        //ENVIAR EL CONTENEDOR PADRE COMO PARAMETRO PARA LLENARLO
        completar_columna(selectedF, 0, 0);
        //console.log(selectedF);

      } else {

        //////////////////////////////////////////////////////////////
        //    COMPROBACION HORIZONTAL                               //
        //////////////////////////////////////////////////////////////


        //VALORES QUE RECIBE LA FUNCION
        var ind = indice;
        var rightClass = "col-"+(col+1);
        var leftClass = 'col-'+(col-1);

        //DULCES: DERECHA E IZQUIERDA
        var rightD = $("."+rightClass+" img:eq("+ind+")");
        var leftD = $("."+leftClass+" img:eq("+ind+")");

        //ATRIBUTO SRC DE LOS DULCES
        var rightAtr = rightD.attr('src');
        var leftAtr = leftD.attr('src');

        //COMPROBAR SI LOS ATRIBUTOS SON IGUALES
        if (selAtr == rightAtr && selAtr == leftAtr && rightAtr == leftAtr) {

          //OBTENER CONTENEDOR PADRE DE LOS ELEMENTOS

          selectedF = seleD.parent('div');
          rightF = rightD.parent('div');
          leftF = leftD.parent('div');

          console.log(leftD, seleD, rightD);
          seleD.remove();
          rightD.remove();
          leftD.remove();

          //INVOCAR LA FUNCION PARA LLENAR LOS CONTENEDORES PADRE (COLUMNAS)
          completar_columna(selectedF, leftF, rightF);

        } else {
          console.log('No son Iguales');
        }

        //var texto = String(nextD); // <-- FUNCION PARA CONVERTIR VARIABLE A STRING

        //console.log(leftAtr, selAtr, rightAtr);
      }


    }

    ////////////////////////////////////////////////////////////////////////////
    //    FUNCION PARA LLENAR COLUMNAS LUEGO DE ENCONTRAR DULCES IGUALES
    ////////////////////////////////////////////////////////////////////////////

    function completar_columna (selectedF, leftF, rightF) {

      //VALORES QUE RECIBE LA FUNCION
      var rightF = rightF;
      var leftF = leftF;

      var fatherClass = selectedF.attr('class'); // <!-- CLASE DEL PADRE DEL ELEMENTO SELECCIONADO
      var Nhijos = selectedF.children('img').length; // <!-- NO. DE ELEMENTOS QUE CONTIENE EL PADRE
      var total = 7; // <!-- CANTIDAD MAXIMA DE HIJOS QUE DEBE TENER
      var dif = total-Nhijos; // <!-- DIFERENCIA ENTRE LOS HIJOS QUE TIENE Y LOS QUE DEBERIA TENER
      var arreglo = new Array(dif); // <!-- ARRAY CON EL TAMAÑO DE LA DIFERENCIA PARA DELIMITAR LAS ITERACIONES

      // LLENADO DEL PADRE DEL ELEMENTO SELECCIONADO
      for (var i = 0; i < arreglo.length; i++) {
        arreglo[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        //console.log(arreglo[i]);

        //ASIGNACION DE RUTA DE LA IMAGEN
        $("."+fatherClass).prepend("<img class='elemento'></img>");
        $("."+fatherClass+" img:first-child").attr('src', 'image/'+arreglo[i]+'.png');

      }

      // COMPROBAR SI LA FUNCION RECIBIO EL PADRE DE LOS ELEMENTOS DE LAS OTRAS COLUMNAS
      if (leftF !== 0 && rightF !== 0) {

        // LLENAR CONTENEDOR PADRE IZQUIERDA
        var fatherClassLeft = leftF.attr('class');
        var NhijosLeft = leftF.children('img').length;
        var difLeft = total-NhijosLeft;
        var arregloL = new Array(difLeft);

        for (var i = 0; i < arregloL.length; i++) {
          arregloL[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          //console.log(arreglo[i]);

          //ASIGNACION DE RUTA DE LA IMAGEN
          $("."+fatherClassLeft).prepend("<img class='elemento'></img>");
          $("."+fatherClassLeft+" img:first-child").attr('src', 'image/'+arregloL[i]+'.png');

        }

        // LLENAR CONTENEDOR PADRE DERECHA
        var fatherClassRight = rightF.attr('class');
        var NhijosRight = rightF.children('img').length;
        var difRight = total-NhijosRight;
        var arregloR = new Array(difRight);

        for (var i = 0; i < arregloR.length; i++) {
          arregloR[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          //console.log(arreglo[i]);

          //ASIGNACION DE RUTA DE LA IMAGEN
          $("."+fatherClassRight).prepend("<img class='elemento'></img>");
          $("."+fatherClassRight+" img:first-child").attr('src', 'image/'+arregloR[i]+'.png');

        }

      }



    }





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
