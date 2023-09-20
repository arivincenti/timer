import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitHandlerComponent } from './digit-handler/digit-handler.component';
import { DigitHandlerButtonComponent } from './digit-handler/digit-handler-button/digit-handler-button.component';
import { CounterButtonComponent } from '../timer/counter-buttons/counter-button/counter-button.component';
import { CounterButtonsComponent } from '../timer/counter-buttons/counter-buttons.component';



@NgModule({
  declarations: [
    DigitHandlerComponent,
    DigitHandlerButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DigitHandlerComponent
  ]
})
export class SharedModule { }
