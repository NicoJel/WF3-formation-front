

// ----------------------------- LA CONCATENATIONN -----------------------

var Debutdephrase = "Aujourd'hui ";
var Datedujour = new Date();
var Suitedephrase = ", sont présents : ";
var Nombredestagiaire = 16;
var Findephrase = " apprenants.<br>";

/*Nous souhaitons tout afficher en un seul morceau*/



document.write(Debutdephrase+Datedujour.getDate()+ "/" +(Datedujour.getMonth()+1)+ "/" +Datedujour.getFullYear()+Suitedephrase+Nombredestagiaire+Findephrase);