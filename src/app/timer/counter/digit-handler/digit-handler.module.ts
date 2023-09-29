import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitHandlerComponent } from './digit-handler.component';
import { DigitHandlerButtonModule } from './digit-handler-button/digit-handler-button.module';
import { DoubleNumberPipe } from 'src/app/shared/pipes/double-number.pipe';




@NgModule({
  declarations: [DigitHandlerComponent, DoubleNumberPipe],
  imports: [
    CommonModule,
    DigitHandlerButtonModule
  ],
  exports: [DigitHandlerComponent]
})
export class DigitHandlerModule { }
