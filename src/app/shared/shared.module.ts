import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DigitHandlerComponent } from './digit-handler/digit-handler.component';
import { DigitHandlerButtonComponent } from './digit-handler-button/digit-handler-button.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterService } from '../timer/counter/services/counter.service';



@NgModule({
  declarations: [
    ProgressBarComponent,
    DigitHandlerComponent,
    DigitHandlerButtonComponent,
    CounterButtonComponent,
    CounterButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterButtonsComponent,
    ProgressBarComponent,
    DigitHandlerComponent
  ]
})
export class SharedModule { }
