

/* -------------------------------- LE CHAINAGE DE METHODE ----------------------*/

$( function() {

    console.log( $('div'));
    $('div').hide('slow', function(){

    
        //alert('fin du hide');
    /*
    Une fois que la methode hide est terminée, mon alerte peut s'executer
    nota bene: la fonction s'executera pour l'ensemble et à chaque éléments du sélécteur.
    */
   $('div').css('background', 'yellow');
   $('div').css('color', 'red');
   $('div').show('slow');
    });


    $('p').hide(1000).css('color', 'blue').css('font-size', '20px').delay(2000).show(500);
    $('p').hide(1000).css({'color': 'blue', 'font-size': '20px'}).delay(2000).show(500);
});