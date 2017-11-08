
    var estado_titulo = true;
    //llenar_tablero();

    ////////////////////////////////////////////////////////////////////////////
    //                          LLENAR TABLERO
    ///////////////////////////////////////////////////////////////////////////

    $(".btn-reinicio").on('click', function () {
      $("[class|='col']").empty();
      $(this).text('Reiniciar');
      llenar_tablero();


    });

    ////////////////////////////////////////////////////////////////////////////

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

    ////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////
    //                      COMPROBACION DE DULCES
    ////////////////////////////////////////////////////////////////////////////


  $(document).on('click', '.elemento', function() { // <-- se usa DOCUMENT para escuchar el evento ya que es un elemento que no existia al cargar el DOM.
    //OBTENCION DEL ELEMENTO PADRE PARA DETERMINAR EL NUMERO DE COLUMNA
    var padre = $(this).parent().attr('class');
    var str = padre.substring(4,5); // <-- extraer el numero de la clase
    col = parseInt(str); // <--- convertir el string a INT <--- numero de la columna
    //col = str-1; //

    //OBTENCION DEL INDICE DEL ELEMENTO SELECCIONADO
    var selIndex = $(this).index();
    var selItem = $(this);

    console.log(selIndex, col, selItem);

    //INVOCAR LA FUNCION PARA VERIFICAR LAS COMBINACIONES DE LOS DULCES
    comprobar_vertical(col, selIndex, selItem);


  });


    function comprobar_vertical (col, selIndex, selItem) {

      // PARAMETROS RECIBIDOS
      var col = col;
      var selIndex = selIndex;
      var selItem = selItem;

      // ATRUBUTO SRC (RUTA DE LA IMAGEN) DEL ELEMENTO SELECCIONADO
      var selSrc = selItem.attr('src');

      if (selIndex !== 0 && selIndex !== 6) {
        //console.log('Soy distinto a 0 y 6');
        switch (selIndex) {
          case 1:

          var item0 = selItem.prev('img');
          var item2 = selItem.next('img');
          var item3 = selItem.next('img').next('img');
          var item4 = selItem.next('img').next('img').next('img');
          var item5 = selItem.next('img').next('img').next('img').next('img');
          var item6 = selItem.next('img').next('img').next('img').next('img').next('img');

          //ATRIBUTO SRC
          var item0Atr = item0.attr('src');
          var item2Atr = item2.attr('src');
          var item3Atr = item3.attr('src');
          var item4Atr = item4.attr('src');
          var item5Atr = item5.attr('src');
          var item6Atr = item6.attr('src');

          if (selSrc == item0Atr && selSrc == item2Atr) { // <-- 1. 1=0 y 1=2
            item0.remove();
            selItem.remove();
            item2.remove();
            if (selSrc == item3Atr) {
              item3.remove();
              if (selSrc == item4Atr) {
                item4.remove();
                if (selSrc == item5Atr) {
                  item5.remove();
                  if (selSrc == item6Atr) {
                    item6.remove();
                  }
                }
              }
            }
          }

          if (selSrc !== item0Atr && selSrc == item2Atr) { // <-- 2. 1!=0 y 1=2
            if (selSrc == item3Atr) {
              selItem.remove();
              item2.remove();
              item3.remove();
              if (selSrc == item4Atr) {
                item4.remove();
                if (selSrc == item5Atr) {
                  item5.remove();
                  if (selSrc == item6Atr) {
                    item6.remove();
                  }
                }
              }
            }
          }



          //console.log(upAtr, downAtr, downAtr2);

            break;
          case 2:
            //console.log('hola soy 2');

            var item0 = selItem.prev('img').prev('img');
            var item1 = selItem.prev('img');
            var item3 = selItem.next('img');
            var item4 = selItem.next('img').next('img');
            var item5 = selItem.next('img').next('img').next('img');
            var item6 = selItem.next('img').next('img').next('img').next('img');

            //ATRIBUTO SRC
            var item0Atr = item0.attr('src');
            var item1Atr = item1.attr('src');
            var item3Atr = item3.attr('src');
            var item4Atr = item4.attr('src');
            var item5Atr = item5.attr('src');
            var item6Atr = item6.attr('src');

            if (selSrc == item1Atr && selSrc == item3Atr) { // <-- 1. 2=1 y 2=3
              if (selSrc == item0Atr) {
                item0.remove();
              }
              item1.remove();
              selItem.remove();
              item3.remove();
              if (selSrc == item4Atr) {
                item4.remove();
                if (selSrc == item5Atr) {
                  item5.remove();
                  if (selSrc == item6Atr) {
                    item6.remove();
                  }
                }
              }

            }

            if (selSrc == item1Atr && selSrc !== item3Atr) { // <-- 2. 2=1 y 2!=3
              if (selSrc == item0Atr) {
                item0.remove();
                item1.remove();
                selItem.remove();
              }
            }

            if (selSrc !== item1Atr && selSrc == item3Atr) { // <-- 3. 2!=1 y 2=3
              if (selSrc == item4Atr) {
                selItem.remove();
                item3.remove();
                item4.remove();
                if (selSrc == item5Atr) {
                  item5.remove();
                  if (selSrc == item6Atr) {
                    item6.remove();
                  }
                }
              }
            }


            break;
          case 3:
            //console.log('hola soy 3');
            var item0 = selItem.prev('img').prev('img').prev('img');
            var item1 = selItem.prev('img').prev('img');
            var item2 = selItem.prev('img');
            var item4 = selItem.next('img');
            var item5 = selItem.next('img').next('img');
            var item6 = selItem.next('img').next('img').next('img');

            //ATRIBUTO SRC
            var item0Atr = item0.attr('src');
            var item1Atr = item1.attr('src');
            var item2Atr = item2.attr('src');
            var item4Atr = item4.attr('src');
            var item5Atr = item5.attr('src');
            var item6Atr = item6.attr('src');

            if (selSrc == item2Atr && selSrc == item4Atr) {  //<-- 1. 3=2 y 3=4
              item2.remove();
              selItem.remove();
              item4.remove();
              if (selSrc == item1Atr) {
                item1.remove();
                if (selSrc == item0Atr) {
                  item0.remove();
                }
              }
              if (selSrc == item5Atr) {
                item5.remove();
                if (selSrc == item6Atr) {
                  item6.remove();
                }
              }
            }
            if (selSrc == item2Atr && selSrc !== item4Atr) { // <-- 2. 3=2 y 3!=4
              if (selSrc == item1Atr) {
                item1.remove();
                item2.remove();
                selItem.remove();
                if (selSrc == item0Atr) {
                  item0.remove();
                }
              }
            }
            if (selSrc !== item2Atr && selSrc == item4Atr) { // <-- 3!=2 y 3=4
              if (selSrc == item5Atr) {
                selItem.remove();
                item4.remove();
                item5.remove();
                if (selSrc == item6Atr) {
                  item6.remove();
                }
              }
            }

            break;

          case 4:

            var item0 = selItem.prev('img').prev('img').prev('img').prev('img');
            var item1 = selItem.prev('img').prev('img').prev('img');
            var item2 = selItem.prev('img').prev('img');
            var item3 = selItem.prev('img');
            var item5 = selItem.next('img');
            var item6 = selItem.next('img').next('img');

            //ATRIBUTO SRC
            var item0Atr = item0.attr('src');
            var item1Atr = item1.attr('src');
            var item2Atr = item2.attr('src');
            var item3Atr = item3.attr('src');
            var item5Atr = item5.attr('src');
            var item6Atr = item6.attr('src');

            if (selSrc == item3Atr && selSrc == item5Atr) { // <-- 4=3 y 4=5
              if (selSrc == item6Atr) {
                item6.remove();
                item5.remove();
                selItem.remove();
                item3.remove();
              }
              item5.remove();
              selItem.remove();
              item3.remove();
              if (selSrc == item2Atr) {
                item2.remove();
                if (selSrc == item1Atr) {
                  item1.remove();
                  if (selSrc == item0Atr) {
                    item0.remove();
                  }
                }
              }
            }

            if (selSrc == item3Atr && selSrc !== item5Atr) { // <-- 4=3 y 4!=5
              if (selSrc == item2Atr) {
                selItem.remove();
                item3.remove();
                item2.remove();
                if (selSrc == item1Atr) {
                  item1.remove();
                  if (selSrc == item0Atr) {
                    item0.remove();
                  }
                }
              }
            }

            if (selSrc !== item3Atr && selSrc == item5Atr) { // <-- 4!=3 y 4=5
              if (selSrc == item6Atr) {
                selItem.remove();
                item5.remove();
                item6.remove();
              }
            }

            break;

          case 5:

            var item0 = selItem.prev('img').prev('img').prev('img').prev('img').prev('img');
            var item1 = selItem.prev('img').prev('img').prev('img').prev('img');
            var item2 = selItem.prev('img').prev('img').prev('img');
            var item3 = selItem.prev('img').prev('img');
            var item4 = selItem.prev('img');
            var item6 = selItem.next('img');

            //ATRIBUTO SRC
            var item0Atr = item0.attr('src');
            var item1Atr = item1.attr('src');
            var item2Atr = item2.attr('src');
            var item3Atr = item3.attr('src');
            var item4Atr = item4.attr('src');
            var item6Atr = item6.attr('src');

            if (selSrc == item6Atr && selSrc == item4Atr) { // <-- 5=6 y 5=4
              item6.remove();
              selItem.remove();
              item4.remove();
              if (selSrc == item3Atr) {
                item3.remove();
                if (selSrc == item2Atr) {
                  item2.remove();
                  if (selSrc == item1Atr) {
                    item1.remove();
                    if (selSrc == item0Atr) {
                      item0.remove();
                    }
                  }
                }
              }
            }

            if (selSrc !== item6Atr && selSrc == item4Atr) { // <-- 5!=6 y 5=4
              if (selSrc == item3Atr) {
                selItem.remove();
                item4.remove();
                item3.remove();
                if (selSrc == item2Atr) {
                  item2.remove();
                  if (selSrc == item1Atr) {
                    item1.remove();
                    if (selSrc == item0Atr) {
                      item0.remove();
                    }
                  }
                }
              }
            }


            break;


          default:

        }


      } else if (selIndex == 0) {

        var item1 = selItem.next('img');
        var item2 = selItem.next('img').next('img');
        var item3 = selItem.next('img').next('img').next('img');
        var item4 = selItem.next('img').next('img').next('img').next('img');
        var item5 = selItem.next('img').next('img').next('img').next('img').next('img');
        var item6 = selItem.next('img').next('img').next('img').next('img').next('img').next('img');

        //ATRIBUTO SRC
        var item1Atr = item1.attr('src');
        var item2Atr = item2.attr('src');
        var item3Atr = item3.attr('src');
        var item4Atr = item4.attr('src');
        var item5Atr = item5.attr('src');
        var item6Atr = item6.attr('src');

        if (selSrc == item1Atr && selSrc == item2Atr) {
          selItem.remove();
          item1.remove();
          item2.remove();
          if (selSrc == item3Atr) {
            item3.remove();
            if (selSrc == item4Atr) {
              item4.remove();
              if (selSrc == item5Atr) {
                item5.remove();
                if (selSrc == item6Atr) {
                  item6.remove();
                }
              }
            }
          }
        }

      } else if (selIndex == 6) {
        //console.log('soy igual a 6');
        var item0 = selItem.prev('img').prev('img').prev('img').prev('img').prev('img').prev('img');
        var item1 = selItem.prev('img').prev('img').prev('img').prev('img').prev('img');
        var item2 = selItem.prev('img').prev('img').prev('img').prev('img');
        var item3 = selItem.prev('img').prev('img').prev('img');
        var item4 = selItem.prev('img').prev('img');
        var item5 = selItem.prev('img');

        //ATRIBUTO SRC
        var item0Atr = item0.attr('src');
        var item1Atr = item1.attr('src');
        var item2Atr = item2.attr('src');
        var item3Atr = item3.attr('src');
        var item4Atr = item4.attr('src');
        var item5Atr = item5.attr('src');

        if (selSrc == item5Atr && selSrc == item4Atr) {
          selItem.remove();
          item5.remove();
          item4.remove();
          if (selSrc == item3Atr) {
            item3.remove();
            if (selSrc == item2Atr) {
              item2.remove();
              if (selSrc == item1Atr) {
                item1.remove();
                if (selSrc == item0Atr) {
                  item0.remove();
                }
              }
            }
          }
        }


      }
    } //<-- FIN DE LA FUNCION COMPROBAR VERTICAL


    /*

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
