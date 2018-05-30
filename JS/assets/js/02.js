
// - Déclarer un tableau indexé. lun ou l'autre

var monTableau = [];
var myArray = new Array;

monTableau[0] = "Hugo";
monTableau[1] = "Demmy";
monTableau[2] = "Charlotte";

console.log(monTableau);  // - affiche tte les données du tableau
console.log(monTableau [1]); // - Demmy
console.log(monTableau [2]); // - Charlotte

// autre methode plus simple

var NosPrenom = [ "Sylvain", "Wahib", "Marine", "Robin", "Julien", "Nicolas"];
console.log(NosPrenom);

// -  Déclarer et affecter des valeurs à un Objet

var Coordonnee = {
    prenom : "Nicolas",
    nom : "Jelsch",
    age : 28,
};

console.log(Coordonnee);
console.log(Coordonnee ["prenom"]);
console.log(Coordonnee.nom);

var AnnuaireDesApprenants = [

];

// - Exemple avec un tableau 3D

var Contacts = [
    {
        prenom: "Nicolas",
        nom: "Jelsch",
        coordonees: 
        {
            email: "pouet@truc.machin",
            adresse:
            {
                ville: "Paris",
                CP: "75004",
                pays:
                {
                    code: "FR",
                    nom: "France",
                }
            },
            telephone:
            {
                fixe: "0001",
                fax: "0002",
                portable: "0003"
            },

        }
    }
];

console.log(Contacts);
console.log(Contacts[0].coordonees.adresse.pays.nom);

//  -- Exemple avec un tableau 3D

var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            adresse: {
                ville : "Ducos",
                cp: 97224,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 108 328",
                fax: "+596 596 108 632",
                port: "+33 783 97 15 15"
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "wellcommunication@gmail.com",
            adresse: {
                ville : "Fort-de-France",
                cp: 97200,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 XX XX XX",
                fax: "",
                port: "+596 696 07 04 34"
            }
        }
    },
    {
        prenom: "Robin",
        nom: "TOURNIER",
        coordonnees: {
            email: "robin.tournier@gmail.com",
            adresse: {
                ville : "Paris",
                cp: 75016,
                region: "Ile-de-France",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "",
                fax: "",
                port: "+33 XX XX XX XX"
            }
        }
    },
];

console.log(Contacts);
console.log(Contacts[0].coordonnees.adresse.pays.nom);



// -------------------------- AJOUTER UN ELEMENT -------------------------

var couleurs = [ "rouge", "jaune", "vert"];

// - Si je souhaite ajouter un élément dans mon tableau : fonction PUSH


console.log(couleurs);

couleurs.push("orange");

console.log(couleurs);

/* la fonction UNSHIFT() permet d'ajouter un ou plusieurs éléments en début de tableau.*/

couleurs.unshift("bleu");
console.log(couleurs);

/* -----------------------  RECUPERER ET SORTIR LE DERNIER ELEMENT -------------------------*/

/* la fonction pop() me permet de supprimer un ou plusieurs éléménts de mon tableau et d'en récuperer la valeur. 
Je peux accessoirement recuperer cette valeur dans une variable.*/


var monDernierElement = couleurs.pop()
console.log(couleurs);
console.log(monDernierElement);

/* Le même chose est possible avec le premier élément avec la fonction SHIFT()
   La fonction SPLICE() permet de faire sortir un ou plusieurs éléments */






