import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CounterComponent]
})
export class CounterModule { }
