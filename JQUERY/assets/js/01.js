

/* ----------------- LA DISPONIBILITE DU DOM ---------------------*/

/* A partir du moment ou mon DOM, cad l'ensemble de l'arborescence de ma page HTML est completement chargé, je peux commencer à utiliser jQuery.
Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelée AUTOMATIQUEMENT par jQuery lorsque le DOM sera entierement défini.

4 façon de faire:
*/


jQuery(document).ready(function() {  //dans kes vieux docs
    // ici le DOM est entierement chargé, je peux proceder à mon code JS
});


$(document).ready(function(){  //encore le plus utilisé
    // ici le DOM est entierement chargé, je peux proceder à mon code JS
});

$(function(){
    // ici le DOM est entierement chargé, je peux proceder à mon code JS
});

$(()=>{  //que ECMA6
    //alert("coucou");

    // -- en JS :
    document.getElementById("texteenjquery").innerHTML = "<strong>Mon texte en JS </strong> " 
    // innerHTML comprend les balises, textcontent non, du coup on peut utiliser textcontent pour des input, ainsi l'utilisateur ne peut pas mettre des balises

    // -- en JQ
    $('#texteenjquery').html('Texte en JQ');

});

