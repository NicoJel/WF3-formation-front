

/*----------------------------- LES SELECTEURS JQUERY --------------------------*/

// -- Format : $('selecteur');
// -- en jQuery, tous les selecteurs CSS sont disponibles...

$(function(){
    // -- DOM READY
    l = e => console.log(e);

// --  sélectionner toutes les balises SPAN

    // -- JS
    l(document.getElementsByTagName('span'));

    // -- JQ
    l( $('span'));

// -- Je veux sélectionner mon menu grâce à son ID

    // -- JS
    l(document.getElementById('menu'));

    // -- JQ
    l($('#menu'));

// -- Je veux sélectionner ma CLASS

    // -- JS
    l(document.getElementsByClassName('maclasse'));

    // -- JQ
    l($('.maclasse'));

// -- Sélectionner un Attribut

    // -- JQ
    l($('[href="https://www.google.com"]'));
});