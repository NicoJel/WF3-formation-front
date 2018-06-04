

/* --------------- LA MANIPULATION DES CONTENU ---------------------*/

/* function l(e) {
    console.log(e);
}

nouvelle syntaxe ECMA 6  avec les fonctions flechées
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
*/
l = e => console.log(e);

// - je souhaite récupérer mon lien Google ; comment procéder?
var google = document.getElementById('google');
l(google);

// -- Mainteantn je souhaite acceder aux informations de ce lien...

    // -- A :  le lien vers lequel pointe la balise

    l(google.href);

    // -- B l'ID de la balise

    l(google.id);

    // -- C : la classe de la balise

    l(google.className);

    // -- D : Le texte de la balise

    l(google.textcontent);

// --  Maintenant je souhaite modifier le contenu de mon lien !

    google.textContent = "Mon lien veeeers gooogogogogogogle";


// -- Ajouter un élément dans ma page

    // nous allons passer par 2 etapes

    /* - 1. la fonction document.creatElement() va permettre de generer un nouvel élément dans le DOM, 
    je pourrais le modifier par la suite avec les methodes que nous venons de voir

    ps: ce nouvel élément est placé en mémoire */

    // Definition de l'élément

    var span = document.createElement('span');

    // Si je souhaite lui donner un ID

    span.id = "MonSpan"

    // Je souhaite lui attribuer du contenu

    span.textContent = "Texte en JS youpi"

    // Comment ajouter l'élément à ma page?

    google.appendChild(span);




    /* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

var h = document.createElement('h1');
var a = document.getElementById('google');
h.appendChild(a);
document.body.appendChild(h);
a.href="https://www.google.fr"
a.textContent = "Titre de mon article";
a.style.color = "#ff0000";
a.style.textDecoration = "none";
