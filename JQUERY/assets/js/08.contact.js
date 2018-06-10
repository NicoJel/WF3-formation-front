
$(document).ready(function(){

    var tableaucontact = []

$('#contact').submit(function(event){

//PREVENT
event.preventDefault();

//CLEAR
$('.container .is-invalid').removeClass('is-invalid');
$('.container .alert-danger').remove();
console.log('remove');
$('.container .alert-success').remove();

// RECUP DES VARIABLES

var nom = $('#nom');
var prenom = $('#prenom');
var email = $('#email');
var tel = $('#tel');
var contacts = $('#LesContacts'); // tableau contact



// MESSAGE D'ERREUR

  
    if ( nom.val().length === 0) {
        nom.addClass('is-invalid');
        
    };

    if ( prenom.val().length === 0) {
        prenom.addClass('is-invalid');
        
    };

    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test(email.val())){
        email.addClass('is-invalid');
     }

    var regExp = ("(0|\\+33|0033)[1-9][0-9]{8}")
    var phone = tel.val().match(regExp);
    if (!phone) {
        tel.addClass('is-invalid');
    }
      
    var check = false;
    if( $(this).find('.is-invalid').length === 0 ) {

        $(contacts).before(`
            <div class="alert alert-success" role="alert">
            <strong>Félicitation !</strong> Votre contact est ajouté.
            </div>
        `);
        check = true;
        } else {

        $(contacts).before(`
            <div class="alert alert-danger" role="alert">
            <strong>Attention !</strong> Veuillez bien remplir tous les champs.
            </div>          
        `);
        

    }

    // CREATION DU TABLEAU

if (check) {
    tableaucontact.push(
        contactn = [ 
            nom.val(),                                      
            prenom.val(), 
            email.val(), 
            tel.val() 
        ]);

    let le = tableaucontact.length;
    var tbody = document.getElementsByClassName('monputaindetbody')[0];

    console.log(tableaucontact);
    console.log(contactn);
        for (i=0; i<le; i++){
            var tr = document.createElement("tr");
            let f = i-1;
            console.log(f);
            for(j=0; j<tableaucontact[i].length; j++){
                var td = document.createElement("td");
                var txt = document.createTextNode(tableaucontact[i][j]);
                
                    if ((f > -1) && (tableaucontact[i][j] == tableaucontact[f][j]) ) {

                        $(contacts).before(`
                        <div class="alert alert-danger" role="alert">
                        <strong>Attention ! </strong>` + tableaucontact[f][j] + ` est déjà utilisé
                        </div>          
                        `);
                        $("tbody :last-child").remove()
                        $('.container .alert-success').remove();
                        
                        break;
                    }

                td.appendChild(txt);
                tr.appendChild(td);
            };
            tbody.appendChild(tr);
        };

        if(le > 0){
            $('#LesContacts .aucuncontact').remove();
        };
    }
      
   
});
});
