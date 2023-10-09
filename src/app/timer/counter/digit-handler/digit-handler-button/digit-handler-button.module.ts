import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitHandlerButtonComponent } from './digit-handler-button.component';
import { CounterService } from '../../services/counter.service';



@NgModule({
  declarations: [DigitHandlerButtonComponent],
  imports: [
    CommonModule
  ],
  providers: [CounterService],
  exports: [DigitHandlerButtonComponent]
})
export class DigitHandlerButtonModule { }
