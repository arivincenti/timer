import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitHandlerComponent } from './digit-handler.component';
import { DigitHandlerButtonModule } from './digit-handler-button/digit-handler-button.module';




@NgModule({
  declarations: [DigitHandlerComponent],
  imports: [
    CommonModule,
    DigitHandlerButtonModule
  ],
  exports: [DigitHandlerComponent]
})
export class DigitHandlerModule { }
