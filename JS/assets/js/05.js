

/* -------------------------------- INCREMENTATION & DECREMENTATION -------------------------------*/

// - INCREMENTATION

var nb1 = 1;
nb1 = nb1 + 1;
nb1++;  // ecriture simplifiée

// - DECREMENTATION

nb1--;

// - SUBTILITE - pour affichage, ne change rien pour le calcul

nb1 = 0;
console.log( nb1++ ) // affiche le résultat avant l'incrementation

nb1 = 0;
console.log( ++nb1 ) // affiche le résultat apres l'incrementation