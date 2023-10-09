import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { CounterService } from '../counter/services/counter.service';
import { ProgressBarService } from './progress-bar.service';



@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule
  ],
  providers: [CounterService, ProgressBarService],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule { }
