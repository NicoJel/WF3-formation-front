/**
 * Pour déclarer une classe comme composant de
 * notre application, on importe "Component"
 * via @angular/core.
 */
import {Component, OnInit} from '@angular/core';
import {Contact} from './Shared/models/contact';
import {UserApiService} from './Shared/Services/user/user-api.service';


/**
 * @Component est ce qu'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>.
   * Vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture !
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',
  /**
   * La déclaration des Styles avec
   * "styleUrls" ou "styles[]"
   */
  styleUrls: ['./app.component.css'],
  /*template: `
    <h1>Bienvenue à Paris IV !</h1>
    <h3>Les meilleurs à RISK et PUBG...</h3>
    <p>Les apprenants sont entrain de souffrir avec Hugo !</p>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]*/
})

/**
 * La classe contient les données du composant,
 * mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au ViewModel.
 */
export class AppComponent implements OnInit {
  constructor(private userApiService: UserApiService) {}
  ngOnInit(): void {
    this.userApiService.getUsers().subscribe(
      contacts => {
        console.log(contacts);
      }
    );
  }

  // -- Déclaration d'une variable titre
  title = 'Contact App';

  // -- contact choisi par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un Objet Contact

  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'wf3@hl-media.fr',
  };

  //Tableau de contacts
  mesContacts: Contact[] = [
    {id: 1,
    name: 'Hugo LIEGARD',
    username: 'hugoliegeard',
    email: 'wf3@hl-media.fr'},

    {id: 2,
      name: 'pouet pouet',
      username: 'pouuuet',
      email: 'pouet@hl-media.fr'},

    {id: 3,
      name: 'Yo Yo',
      username: 'yoyo',
      email: 'yoyo@hl-media.fr'},

    {id: 4,
      name: 'Youpi Youpi',
      username: 'yoyoupipi',
      email: 'yoyopipi@hl-media.fr'}
  ];

  /**
   * Ma fonction displaycontact prend un contact en parametre et le transmet à la variable contactactif
   * @param {Contact} contactcliqueparlutilisateur
   */
  choisirContact(contactcliqueparlutilisateur: Contact) {
    this.contactActif = contactcliqueparlutilisateur;
    console.log (this.contactActif);
  }

  /**
   * Fonction qui permet de rajouter un nouveau contact dans la liste.
   * @param event
   */

  ajouterContactDansListe(event: any) {

    //aperçu dans la console
    console.log(event);

    // -- Récupération du Contact dans l'évenement
    const leContact: Contact = event.leContact;

    // --Ajout du Contact dans le tableau
    this.mesContacts.push(leContact);
  }



}

