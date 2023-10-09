import { Component, OnInit } from '@angular/core';
import { BUTTON_TYPE } from '../helpers/constants';
import { CounterService } from './counter/services/counter.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [CounterService]
})
export class TimerComponent implements OnInit{
  types = BUTTON_TYPE;

  constructor(){}

  ngOnInit(): void {}

}
