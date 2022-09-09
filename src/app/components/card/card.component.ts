import { Component, Input} from '@angular/core';
import { Personaje } from 'src/app/interface/Personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() personaje!: Personaje;

  constructor() { }

}
