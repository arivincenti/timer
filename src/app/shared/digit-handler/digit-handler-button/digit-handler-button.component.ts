import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DIGIT_HANDLER_BUTTON_TYPE } from '../../helpers/constants';

@Component({
  selector: 'app-digit-handler-button',
  templateUrl: './digit-handler-button.component.html',
  styleUrls: ['./digit-handler-button.component.scss']
})
export class DigitHandlerButtonComponent implements OnInit {
  @Input() type: string = DIGIT_HANDLER_BUTTON_TYPE.INCREASE;
  @Output() operationSelected = new EventEmitter<string>();

  buttonIcon: string = ''

  contructor(){}

  ngOnInit(): void {
    this.type === DIGIT_HANDLER_BUTTON_TYPE.INCREASE ? this.buttonIcon = 'stat_1' : this.buttonIcon = 'stat_minus_1'
  }

  updateValue(){
    if(this.type === DIGIT_HANDLER_BUTTON_TYPE.INCREASE){
      this.operationSelected.emit(this.type);
    }else{
      this.operationSelected.emit(this.type);
    }
  }
}
