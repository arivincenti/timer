import { Component, EventEmitter, Output } from '@angular/core';
import { BUTTON_TYPE } from '../../helpers/constants';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {
  @Output() event = new EventEmitter<string>();
  types = BUTTON_TYPE;

  constructor(){}

  catchOrder($event: string){
    this.event.emit($event);
  }
}
