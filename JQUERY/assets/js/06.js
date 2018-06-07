 

 /* ----------------------- LES SELECTEURS D'ENFANT jQUERY --------------------*/

 $(function(){
     l = e => console.log(e);
 

 // -- je souhaite selectionner ttes les balises divs de ma page
 l($('div'));

 // -- je souhaite selectionner ttes les balises nav de ma page
 l($('nav'));

 // -- je souhaite selectionner tous les descendant direct (les enfants) qui sont dans "nav"
 l($('#menu').children() );

 // -- parmis ces descendant je veux uniquement l'élément ul
 l($('#menu').children("ul") );

 // --  Je souhaite recuperer tous les éléments li de mon ul
 l($('#menu').children("ul").find("li") );

 // --  Je souhaite récuperer uniquement le 2e élément de mes li
 l($('#menu').find("li").eq(1) );

 // --  Je souhaite connaitre le voisin immédiat de mon menu
 l($('#menu').next() );
 l($('#menu').next().next() ); // le voisin du voisin           

 l($('#menu').prev() ); // le voisin d'avant

 // -- Les parents

 l($('#menu').parent() );


});