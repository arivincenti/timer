import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DIGIT_HANDLER_BUTTON_TYPE, DIGIT_HANDLER_TITLE } from '../helpers/constants';

@Component({
  selector: 'app-digit-handler',
  templateUrl: './digit-handler.component.html',
  styleUrls: ['./digit-handler.component.scss']
})
export class DigitHandlerComponent{
  @Input() digitHandlerTitle: string = DIGIT_HANDLER_TITLE.HOURS;
  @Input() initValue: number = 0;
  @Output() currentValue = new EventEmitter<number>();
  @Output() currentType = new EventEmitter<string>();
  types = DIGIT_HANDLER_BUTTON_TYPE;

  constructor(){}

  updateValue($event: string){
    if($event == DIGIT_HANDLER_BUTTON_TYPE.DECREASE){
      if(this.initValue > 0){
        this.initValue--;
        this.currentType.emit(this.digitHandlerTitle);
        this.currentValue.emit(this.initValue);
      }
    }else {
      if(this.initValue < 59){
        this.initValue++;
        this.currentType.emit(this.digitHandlerTitle);
        this.currentValue.emit(this.initValue);
      }
    }
  }
}
