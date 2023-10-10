import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { CounterModule } from './counter/counter.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { CounterButtonsModule } from './counter-buttons/counter-buttons.module';
import { CounterService } from './counter/services/counter.service';


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
  // providers: [CounterService],
  exports: [TimerComponent]
})
export class TimerModule { }
