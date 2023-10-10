import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { DigitHandlerModule } from './digit-handler/digit-handler.module';



@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    DigitHandlerModule
  ],
  exports: [CounterComponent]
})
export class CounterModule { }
