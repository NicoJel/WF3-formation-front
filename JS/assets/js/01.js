


//alert ("youpiiii");

// deux slash pour faire un com uniligne

/*
pour faire un com
sur plusieurs ligne

raccourci : ctrl + :
          : ctrl + shift + : (oopa)
*/

// -1 : Déclarer une variable JS
var Prenom;

// -2 : affecter une valeur
Prenom = "Nico";

// -3 : afficher la valeur de ma variable dans la console
console.log(Prenom);


// ------------ LES TYPES DE VARIABLES ----------------

// type of me permet de connaitre le type de ma variable
console.log(typeof Prenom);

// déclaration et affectation d'un nombre
var Age = 40;

// afficher dans la console
console.log(Age);

// connaitre son type
console.log(typeof Age);

/* ------------- LA PORTEE DES VARIABLES -------------

les variables déclarées directement à la racine du fichier JS sont appelées variables GLOBALES.

Elles sont disponibles dans l'ensemble de votre document, y compris dans les fonctions.

Les variables déclarées à l'interieur d'une fonction sont appelées variables LOCALES.

Elles sont disponibles UNIQUEMENT dans le scope de la fonction.
*/

// - Les variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// - Les Booléens ( TRUE / FALSE)
var unBooleen = false
console.log(unBooleen);
console.log(typeof unBooleen);

// - Les constantes

/* La déclaration CONST permet de créer une constante accessible uniquement en lecture et sa valeur ne pourra pas être modifiée par des réaffectations ultérieures.
Une constante ne peut pas être déclarée à nouveau.
Généralement par convention on les mets en majuscule. */

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// - Je ne peux pas assigner une nouvelle valeur a une constante
// USER = "Nico";
// Uncaught tpeError: Assigment to constant variable.


/*  ----------------- LA MINUTE INFO ----------------------

Au fur et à mesure que l'on affecte ou ré affecte des valeurs à une variable, celle ci prend la nouvelle valeur et le nouveau type.

En Javascript ( ECMA script) ; les variables sont auto typées.

Pour convertir une variable de type NUMBER en STRING et STRING en NUMBER, je peux utiliser les fonctions natives de JS.*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* La fonction parseInt() permet de retourner un Entier à partir de ma chaîne de caractère. */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// - Je réaffecte une valeur à ma variable

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// - Conversion d'un nombre en string avec toString()
unNombre = 10;
console.log(unNombre);
console.log(typeof unNombre);

var monNombreDeTypeString = unNombre.toString();
console.log(monNombreDeTypeString);
console.log(typeof monNombreDeTypeString);

