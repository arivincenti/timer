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

  ngOnInit(): void {}

  manageTimer($event: string){
    console.log($event);
    this.timerEvent = $event;
  }
}
