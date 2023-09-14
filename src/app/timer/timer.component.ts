import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  totalSeconds: number = 0;
  initCounterProgress: number = 0;

  updateProgress($event: number){
    this.totalSeconds = $event;
  }

  initProgress($event: number){
    console.log("init", $event)
    this.initCounterProgress = $event;
  }
}
