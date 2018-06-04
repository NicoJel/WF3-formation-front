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
            HTML : 20, CSS : 20, JS : 19, ReveilMatin : 2, Modestie : -15
            },          
    },
    {
        nom: "Robin",
        matiere: {
            Chocolat: 20, Madeleine : 18, Gauffre : 18, AisanceAuTableau: 5, 
            },         
    },
    {
        nom: "Sunny",
        matiere: {
            LunetteDeSoleil : 20, Business : 17, PartirA17h30 : 4, JS : 5
            },          
    },
    {
        nom: "Lou",
        matiere: {
            Séries : 20, Anglais : 20, HTML : 4, CSS : 4, JS : -2, FollowersHunting : 18
            },        
    },
    {
        nom: "Louis",
        matiere: {
            SupporterLou : 18, MaitriseDeLaSaladeComposee : 17, 
            },        
    },
    {
        nom: "Marine",
            matiere: {
                Mix : 19, JS : 15, Epilation: 2, 
                },        
        },

    {
        nom: "Hugo",
            matiere: {
                Humour : 7, FaireDesCadeaux : 15, ParlerDeSaFianceePourFaireCroireQuilEnAUne: 20, 
                },
                
        },

];




// je parcours chaque étudiant, j'affiche le nom, les matieres et notes, puis myenne gen


let ol = document.createElement('ol');
function printmatiere (matiere, trimestre){
   
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let p = document.createElement('p');
    let h = document.createElement('h3'); 

    h.textContent = trimestre.nom;
    li1.appendChild(h); // place les h dans li1
    ol.appendChild(li1); // place li1 dans ol

    document.querySelector('body').appendChild(ol);  // place ol dans body, tout le reste est dans ol

    let notetotale = 0;
    let nbdenote = Object.keys(matiere).length;
    
    Object.keys(matiere).forEach(function (key) { 
        
        let li2 = document.createElement('li'); 
        let note = matiere[key];
        li2.textContent = key + ' : ' + note;      
        notetotale += note;
        ul.appendChild(li2);        
        
    });
    let moyenne = "moyenne = " + (notetotale / nbdenote).toFixed(2);
    p.textContent = moyenne;
    li1.appendChild(ul); 
    li1.appendChild(p); 
      
    
}


  for (var i = 0; i < PremierTrimestre.length; i++) {
      printmatiere (PremierTrimestre[i].matiere, PremierTrimestre[i]);
      
  }



