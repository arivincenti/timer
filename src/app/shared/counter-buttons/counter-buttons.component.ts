import { Component } from '@angular/core';
import { BUTTON_TYPE } from '../helpers/constants';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {
  types = BUTTON_TYPE;

  constructor(){}
}
