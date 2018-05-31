

/* --------------------- EXERCICE 1 -----------------------------*/

/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

var ObjetDate = new Date();
var anneeactuelle = ObjetDate.getFullYear();



function coucou(){

    var nom = prompt("Entre ton pti nom", "ici!");
    console.log(nom);
    console.log(typeof nom); //pour voir dans la console

    var age = parseInt(prompt("salut " + nom + "!" + " Dis moi t'as quel age?", "ton age ici"));
    //age = parseInt (age);
    console.log(age);
    console.log(typeof age);

    anniv = prompt("ton anniversaire est il passé cette année?");


        if (anniv == "oui") {

            return alert("Ah tu es donc né en " + (anneeactuelle - age));
        }
        
            else {
                return alert("Ah tu es donc né en " + (anneeactuelle - age - 1));
        }
       

    document.write("tu t'appelles donc " + nom + " et tu as " + age + " ans !");

}

coucou();


