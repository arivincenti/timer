import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonsComponent } from './counter-buttons.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterService } from '../counter/services/counter.service';



@NgModule({
  declarations: [CounterButtonsComponent, CounterButtonComponent],
  imports: [
    CommonModule
  ],
  providers: [CounterService],
  exports: [CounterButtonsComponent]
})
export class CounterButtonsModule { }
