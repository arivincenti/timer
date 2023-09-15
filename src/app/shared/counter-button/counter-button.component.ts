import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUTTON_TYPE } from '../helpers/constants';
import { CounterService } from '../../timer/counter/services/counter.service';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {
  @Input() type = BUTTON_TYPE.PLAY;
  buttonType = BUTTON_TYPE;
  icon: string = '';

  constructor(private readonly counterService: CounterService){}

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
    this.counterService.sendEventOrder(this.type);
  }

}
