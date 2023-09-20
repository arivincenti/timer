import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { CounterModule } from './counter/counter.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { CounterButtonsModule } from './counter-buttons/counter-buttons.module';



@NgModule({
  declarations: [
    TimerComponent,
  ],
  imports: [
    CommonModule,
    CounterModule,
    ProgressBarModule,
    CounterButtonsModule
  ],
  exports: [TimerComponent]
})
export class TimerModule { }
