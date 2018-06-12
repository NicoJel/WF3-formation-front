$(function() {




    
    // je recupere l'input
    $('#search').on('input', function(){
        //$('.resultat .membre').remove(); 
        $('.resultat').empty(); // au lieu de remove, empty vide completement resultat
        let keyword = ($('#search').val());
        console.log(keyword);

        // je recupere la liste de membres
        $.ajax('https://jsonplaceholder.typicode.com/users').done(function(membres) {
            
            console.log(membres);

            if (keyword.length >0){
            //boucles parcourant la liste
            for (i=0; i<membres.length; i++){

                console.log(membres[i]);


                let namei = (membres[i].name);
                let usernamei = (membres[i].username);
                let emaili = (membres[i].email);
                let phonei = (membres[i].phone);

                // je verifie si ce qu'il y a dans l'input correspond a un nom/pseudo/email/tel (passé en minuscule)
                if(    namei.toLowerCase().search(keyword) != -1  || usernamei.toLowerCase().search(keyword) != -1 
                    || emaili.toLowerCase().search(keyword) != -1 || phonei.toLowerCase().search(keyword) != -1){
                    
                    $(`
                    <div class="membre">
                        <div class="membre_informations">
                            <p>Nom Complet : ${membres[i].name}</p>
                            <p>Username : ${membres[i].username}</p>
                            <p>Email : ${membres[i].email}</p>
                            <p>Téléphone : ${membres[i].phone}</p>
                        </div>
                    </div>
                    `).appendTo('.resultat');
                    console.log('check verifié !');
             }
             
             $('.membre').unmark().mark(keyword);
        }
        $('.contact').slideup();
    }
        });
    
    });
});