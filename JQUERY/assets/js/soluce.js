// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {

        // Ajouter un Contact dans le tableau de Contacts

        CollectionDeContacts.push(contact);

        // mettre à jour le tableau HTML

        $('.aucuncontact').hide();
        $(`
            <tr>
                <td>${Contact.nom}</td>
                <td>${Contact.prenom}</td>
                <td>${Contact.email}</td>
                <td>${Contact.tel}</td>
            </tr>
        `)
        // réinitialiser le formulaire

        $('#contact')[0].reset();
        $('#contact').get(0).reset();
        $('#contact').trigger('reset')
        $('#contact .form-control').val('');
        document.getElementById('contact').reset();

        // afficher une notification

        $('.alert-contact').fadein().delay(4000).fadeOut();
    }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {}

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {}

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){}

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
        
$('#contact').submit(function(event){

    //PREVENT
    event.preventDefault();
    
    //CLEAR
    $('.container .is-invalid').removeClass('is-invalid');
    $('.container .alert-danger').remove();
    $('.container .alert-success').remove();
    
    // RECUP DES VARIABLES
    
    var nom = $('#nom');
    var prenom = $('#prenom');
    var email = $('#email');
    var tel = $('#tel');
    var contacts = $('#LesContacts'); // tableau contact
    let infovalides = true;
    
    
    // MESSAGE D'ERREUR
    
     
    
        if ( nom.val().length === 0) {
            infovalides = false;
        };
    
    
        if ( prenom.val().length === 0) {
            infovalides = false;
        };

        email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if (!email_regex.test(email.val())){
            infovalides = false;
        };
    
        var regExp = ("(0|\\+33|0033)[1-9][0-9]{8}")
        var phone = tel.val().match(regExp);
        if (!phone) {
            infovalides = false;
        };
    
    
        // CREATION DU TABLEAU
    
    if (infovalides) {
        let contact ={
            nom : nom.val(),                                      
            prenom : prenom.val(), 
            emil : email.val(), 
            tel : tel.val() 
        }
       
            
    function contactpresent(email){
        let estpresent = false;

        for (i=0; i<CollectionDeContacts.length; i++){

            if(UnEmail === CollectionDeContacts[i].email){
                estpresent = true;
                break;
            }
            return estpresent;
        }
    }
            if(!estCeQunContactEstPresent(estpresent)) {
                
                // -- Ajout du Contact
                ajouterContact(Contact);

            } else {                    
                // -- Alert si contact présent
                alert('attention contact dja present')
            }

        } else {
            // -- Alert si erreur dans l'un des champs
            alert('veuillez remplir ts les champs')
        }       

    });

}); // -- Fin de jQuery READY !