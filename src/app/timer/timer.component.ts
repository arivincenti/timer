import { Component, OnInit } from '@angular/core';
import { BUTTON_TYPE } from '../helpers/constants';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  types = BUTTON_TYPE;

  ngOnInit(): void {}

}
