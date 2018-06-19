import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../Shared/models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  /**
   * Ici, on dit à notre composant profil que la variable contact est attendue en entrée.
   */
  @Input() contact: Contact;
  @Output() userhasbeenchanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userHasBeenChanged() {
    this.userhasbeenchanged.emit();
  }
}


