import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarService } from './progress-bar.service';



@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule
  ],
  providers: [ ProgressBarService],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule { }
