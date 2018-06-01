

/* ----------------------------- LES BOUCLES --------------------------*/

for(let i=0 ; i<=10 ; i++){
    document.write("<p>Instruction executée : <strong>" + i + "</strong></p>");
}
document.write("<hr>");


var j = 1 
while( j <= 10) {
    document.write("<p>Instruction executée : <strong>" + j + "</strong></p>");

    //ne pas oublier l'incrementation à la fin!
    j++;
}
document.write("<hr>");


// - exercice

var prenom = ["jean", "marc", "maththieu", "luc", "pierre", "paul", "hugo", "jacques"];

//grace a une boucle for afficher la lise des prénoms du tableau

let nb = prenom.length; //déclarer la variable avant rend le code plus rapide, il ne recompte pas a chaque iteration

for(let i=0 ; i<nb ; i++){
    document.write("<p><strong>" + prenom[i] + "</strong></p>");
}

var j = 0;
while (j<nb){
    document.write("<p><strong>" + prenom[i] + "</strong></p>");
    j++;
}

// avec la boucle forEach :

prenom.forEach(afficheunprenom);

function afficheunprenom(prenom, i){
    console.log(i + " " + prenom);
}

