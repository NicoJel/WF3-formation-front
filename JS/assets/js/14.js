

/* --------------------- LES EVENEMENT -------------------- */


    /* Les évenement vont me permettre de déclancher une fonction, 
    cad une série d'instruction suite à une action de mon utilisateur...
    
    OBJECTIF : Etre en mesure de captuer ces evenements afin d'executer une fonction.
    
    Les Evenements : MOUSE ( souris )

        click : au clic sur un élément
        mouseenter : la souris passe au dessus de la zone d'un élément
        mouseleave : la souris sors de cette zone
    
    Les Evenements : KEYBOARD ( clavier )

        keyup : une touche du clavier a été relachée
        keydown : une touche est enfoncée

    Les evenements WINDOW ( fenetre )

        scroll : défilement de la fenêtre
        resize : redimensionnement de la fenêtre

    Les Evenements FORM (formulaire)

        change : pour les éléments <input>, <select> et <textarea>
        submit : à l'envoi (soumission)  du formulaire
        input : pour capter la saisie d'un utilisateur sur un champ <input>

    il en existe d'autres...


    ------------------ LES ECOUTEURS D'EVENEMENTS -------------------

    Pour attacher un évenement à un élément, ou autrement dit
    pour déclarer un écouteur d'évènement qui se chargera de déclancher une fonction, 
    je vais utiliser la syntaxe suivante :
    */

/*
var p = document.getElementById('MonParagraphe');

// - je souhaite que mon paragraphe soit rouge au clic de la souris

function changercouleur(){
    p.style.color = "red";
}

p.addEventListener('click', changercouleur);*/


/* ---------- EXERCICE ----------

A l'aide de javascript, créer un champ "input" type text avec un ID unique. 
Afficher ensuite dans une alerte la saisie de l'utilisateur */

// creation du champs input

var input = document.createElement('input');

// j'ajoute des attributs

input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'dites coucou');
input.id = "MonInput";

// ajout dans la page

document.body.appendChild(input);


function alerte(){
    
    alert(input.value);
}

input.addEventListener('change', alerte);



