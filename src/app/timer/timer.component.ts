import { Component, OnInit } from '@angular/core';
import { BUTTON_TYPE } from '../shared/helpers/constants';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  types = BUTTON_TYPE;
  timerEvent: string = '';
  totalSeconds: number = 0;
  initCounterProgress: number = 0;

  ngOnInit(): void {
    this.totalSeconds = 0;
    this.initCounterProgress = 0;
  }

  updateProgress($event: number){
    this.totalSeconds = $event;
  }

  initProgress($event: number){
    console.log("init", $event)
    this.initCounterProgress = $event;
  }

  manageTimer($event: string){
    console.log($event);
    this.timerEvent = $event;
  }
}
