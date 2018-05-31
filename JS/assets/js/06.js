


/*-------------------------LES FONCTIONS ------------------------*/

//declarer une fonction

function bonjour (){  // quand j'appelerai cette fonction voila ce qui va s'executer
    alert('Bonjour !');
}

bonjour(); // j'appelle bonjour!

// fonction Nomdemafonction ( argument1, argument2, argument n){
//    instructions de la fonction...
//}

function ditbonjour(prenom, nom){
    document.write("<p>Bonjour <strong>" + prenom + " " + nom + "</strong> !</p>")
}

// appeler une fonction avec des arguments
ditbonjour("nico", "gossbo")


/*exercice :
créez une fonction permettant d'effectuer l'addition de deux nombres passés en parametre*/

function addition(nb1, nb2){
    return nb1 + nb2;
}

document.write("<p>" + addition(5, 6) + "</p>");
