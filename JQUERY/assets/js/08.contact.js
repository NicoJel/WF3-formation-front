

$('#contact').submit(function(event){

//PREVENT
event.preventDefault();

// RECUP DES VARIABLES

nom = $('#nom');
prenom = $('#prenom');
email = $('#email');
tel = $('#tel');
contacts = $('LesContacts'); // tableau contact



// MESSAGE D'ERREUR


$('#form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
      // handle the invalid form...
    } else {
      // everything looks good!
    }
  })


  
if ( nom.val().length === 0) {
    nom.addClass('is-invalid');
    $(`
        <div class="invalid-feedback">
            vous devez saisir votre nom.
        </div>
    `).appendTo(nom.parent());
};

if ( prenom.val().length === 0) {
    prenom.addClass('is-invalid');
    $(`
        <div class="invalid-feedback">
            vous devez saisir votre prenom.
        </div>
    `).appendTo(prenom.parent());
};

email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
if(!email_regex.test(email.val())){
    email.addClass('is-invalid');
    $(`
        <div class="invalid-feedback">
            cet email n'est pas valide
        </div>
    `).appendTo(email.parent());  }

    var regExp = ("(0|\\+33|0033)[1-9][0-9]{8}")
    var phone = tel.val().match(regExp);
    if (!phone) {
        tel.addClass('is-invalid');
    $(`
        <div class="invalid-feedback">
            ce tel n'est pas valide
        </div>
    `).appendTo(tel.parent());  }
        
    if( $(this).find('.is-invalid').length === 0 ) {

        $(this).replaceWith(`
            <div class="alert alert-success" role="alert">
                Votre contact à bien été transmis !
                Nous vous répondrons dans les meilleurs délais.
            </div>
        `);

        } else {

        $(this).prepend(`
            <div class="alert alert-danger" role="alert">
                Nous n'avons pas été en mesure de valider votre contact. 
                Vérifiez vos informations.
            </div>
        `);

        }



});