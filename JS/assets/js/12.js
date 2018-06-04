

/* ------------------ LE DOM --------------------------- */

/* Le DOM est une interface de développement JS pour HTML. 
Grace au dom je vais être en mesure d'acceder et modifier mon html.

L'objet "document" est le point d'entrée vers mon html.

Chaque page chargée dans mon navigateur à un objet "document". */


/* Mais comment faire pour recuperer les différentes info de ma page html?? */

/* -- document.getElementById --

document.getElementById() est une fonction qui permet de recuperer un élément html à partir de son identifiant unique : ID */


var bonjour = document.getElementById("bonjour");
console.log(bonjour);

/* -- document.getElementByClassName -- 

document.getElementByClassName() est une fonction qui va permettre de recuperer un ou plusieurs éléments (une liste) html à partir de leur classe.*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// |--> renvoie un tableau JS avec mes éléments html (collection html)

/* -- document.getElementsByTagName -- 

document.getElementByTagName() est une fonction qui permet de recuperer un ou plusieurs éléments (une liste) html à partir de leur nom de balise*/

var span = document.getElementsByTagName('span');
console.log(span);