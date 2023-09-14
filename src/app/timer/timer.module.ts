import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TimerComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TimerComponent]
})
export class TimerModule { }
