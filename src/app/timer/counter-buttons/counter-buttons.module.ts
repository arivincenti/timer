import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonsComponent } from './counter-buttons.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';



@NgModule({
  declarations: [CounterButtonsComponent, CounterButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CounterButtonsComponent]
})
export class CounterButtonsModule { }
