/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// -- Les Flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}


var PremierTrimestre = [
    {
        nom: "Nicolas Jelsch",
        matiere: {
            HTML : 20, CSS : 20, JS : 19, reveilmatin : 2
            },
            
    },
    {
        nom: "Robin Desbois",
        matiere: {
            chocolat: 20, Math: 5, JS: 16
            },
            
    },
    {
        nom: "CD",
        matiere: {
            francais : 5, anglais : 4, math : 19, physique : 5
            },
            
    },
    {
        nom: "Lou Lou",
        matiere: {
            série : 20, anglais : 20, HTML : 15, CSS : 12, JS : -5
            },
            
    },
    {
        nom: "coco lasticot",
        matiere: {
            metro : 15, boulot : 2, dodo: 20, cordeasauter : 55
            },
            
    },

];


// je parcours chaque étudiant, j'affiche le nom, les matieres et notes, puis myenne gen

for (i=0; i<PremierTrimestre.length; i++) {
    w(PremierTrimestre[i].nom + "<br>")
    w("<ul>" + "<li>" + PremierTrimestre[i].matiere + "</li>" + "</ul>")
}
