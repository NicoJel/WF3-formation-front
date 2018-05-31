

/* -------------------------- LES CONDITIONS ------------------------*/
/*
var majoritefr = 18;

if (14 >= majoritefr){
    return alert("bienvenue")
}
 // LE ELSE N'EST PAS OBLIGATOIRE
else {
    alert ("va voir chez google si j'y suis");
}
*/



/* EXERCICE

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
*/

/*function secuage(){

    var majoritefr = 18;
    var age = parseInt(prompt("Bonjour, quel age as tu?", "entre ton age ici"));
    console.log(age);
    console.log(typeof age);

    if (age <= majoritefr){
        return [alert("dégage petit"), document.location.href="https://www.google.com"];
    }   
        else{
        return alert("Bienvenue!");
    }
}

secuage();
*/

/* -- LES OPERATEURS DE COMPARAISON --

==  égal à
il permet de verifier que deux variables sont identiques

===  strictement égal à
il va comparer la valeur mais aussi le type

!=  différent de
!==  strictement différent de */

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// // -- 1. Demander à l'utilisateur son adresse email
// var emailUser = prompt("Bonjour, Quel est votre adresse email ?","<Saisir votre email>");

// // -- 2. Je vérifie si l'email saisie correspond avec celle de la BDD
// if( emailUser === email ) {

//     // -- 2a1. Tous est ok, je continue la vérification avec le mot de passe.
//     var mdpUser = prompt("votre mot de passe ?","<Saisir votre mot de passe>");

//     // -- 2a2. Vérification du mot passe
//     if( mdpUser === mdp ) {

//         alert('Bienvenue !');

//     } else {

//         alert("ATTENTION, nous n'avons pas en mesure de reconnaitre votre mot de passe.");

//     }

// } else {

//     // -- 2b. Les emails ne correspondent pas...
//     alert("ATTENTION, nous n'avons pas en mesure de reconnaitre votre adresse email.");

// }

// -- Exemple avec les fonctions

function connexion(emailUser, mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel est votre adresse email ?","<Saisir votre email>");
var mdpUser = prompt("votre mot de passe ?","<Saisir votre mot de passe>");

if( connexion(emailUser, mdpUser) ) {
    alert('Bienvenue ' + emailUser);
} else {
    alert('ATTENTION, email / mot de passe incorrect.');
}

    /* -------------------------------------------------------- *\
   /                 ~ LES OPERATEURS LOGIQUES ~                  \
  /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \
    |                                                           |
    |           ##### L'opérateur ET : && ou AND #####          |
    |                                                           |
    |   Si la combinaison email user et email correspond, ET    |
    |   la combinaison mdpuser et mdp correspond.                |
    |                                                           |
    |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT |
    |   correspondre pour être validée.                        |
    |   Ex. if(emailUser == email && mdpUser == mdp) {...}      |
    |                                                           |
    |           ##### L'opérateur OU : || ou OR #####           |
    |                                                           |
    |   Si la combinaison emailUser et email correspond ET/OU   |
    |   la combinaison mdpUser et mdp correspond.
    |                                                           |
    |   --> Dans cette condition, au moins l'une des deux       |
    |   doit correspondre pour être validée.                    |
    |   Ex. if(emailUser == email || mdpUser == mdp) {...}      |
    |                                                           |
    |        ##### L'opérateur " ! " ou encore NOT #####        |
    |                                                           |
    |   L'Opérateur "!" signifique le CONTRAIRE DE... ou NOT    |
    |                                                           |
    |   var monUtilisateurEstApprouve = true;                   |
    |   if(!monUtilisateurEstAppprouve) {...}                   |
    |   Mon Utilisateur n'est pas approuvé.                     |
    |                                                           |
    |   Reviens à écrire :                                      |
    |   if(monUtilisateurEstApprouve == false) {...}            |
    |                                                           |
    \*---------------------------------------------------------*/