import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUTTON_TYPE } from '../../../helpers/constants';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {
  @Input() type = BUTTON_TYPE.PLAY;
  @Output() order = new EventEmitter<BUTTON_TYPE>();
  buttonType = BUTTON_TYPE;
  icon: string = '';

  constructor(){}

  ngOnInit(): void {
    if(this.type === BUTTON_TYPE.PLAY){
      this.icon = 'play_circle';
    }else if(this.type === BUTTON_TYPE.STOP){
      this.icon = 'stop_circle'
    }else{
      this.icon = 'pause_circle'
    }
  }
  
  sendOrder(){
    this.order.emit(this.type);
  }

}
