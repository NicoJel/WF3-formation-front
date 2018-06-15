$(function(){
    $('#contact').submit(function(event){

        event.preventDefault();
        
        
        $('.selecchat .is-invalid').removeClass('is-invalid');
        $('.raisonchat .is-invalid').removeClass('is-invalid');
        $('.invalid-feedback').remove();
        $('.alert-danger').remove();
        $('.alert-success').remove();

        let chat = $('#selectionduchat');
        let raison = $('#message');
        let divraison =$('.raisonchat')
        
        console.log( "chat et raison : " + chat.val() + " " +raison.val() + raison.val().length);
    
    if ( chat.val() === "-- Selectionnez --") {
        chat.addClass('is-invalid');
        $(`
            <div class="invalid-feedback">
                vous devez sélectionner un chat.
            </div>
        `).appendTo(chat.parent());
    };

    if ( raison.val().length < 15) {
        raison.addClass('is-invalid');
        $(`
            <div class="invalid-feedback">
                Veuillez étoffer votre réponse...
            </div>
        `).appendTo(raison.parent());
    };

    
            
        if( $(this).find('.is-invalid').length === 0 ) {

            $(this).replaceWith(`
                <div class="alert alert-success" role="alert">
                    Nous avons bien pris en compte votre demande !
                    Nous vous répondrons dans les meilleurs délais.
                </div>
            `);

            } else {

            $(this).prepend(`
                <div class="alert alert-danger" role="alert">
                    Nous n'avons pas été en mesure de valider votre choix. 
                    Vérifiez que les champs sont bien remplis.
                </div>
            `);

            }



});
});


  