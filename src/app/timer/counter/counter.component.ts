import {  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BUTTON_TYPE, DIGIT_HANDLER_TITLE } from 'src/app/shared/helpers/constants';
import { CounterService } from 'src/app/timer/counter/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Output() counterProgress = new EventEmitter<number>();
  @Output() initCounterProgress = new EventEmitter<number>();
  digitTitle = DIGIT_HANDLER_TITLE;
  currentType: string = '';
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  private totalTimeInSeconds: number = 0;
  private timer: any = null;

  constructor(private readonly counterService: CounterService){}

  ngOnInit(): void {
    this.counterService.recibeEventOrder().subscribe({
      next: (order) => {
        if(order === BUTTON_TYPE.PLAY){
          this.startCountdown();
        }else if(order === BUTTON_TYPE.PAUSE) {
          this.pauseCounter();
        }else {
          this.stopCounter()
        }
      },
      error: (error) => console.log(error)
    });
  }

  getCurrentValue($event: number){
    if(this.currentType === DIGIT_HANDLER_TITLE.HOURS) {
      this.hours = $event;
    }else if(this.currentType === DIGIT_HANDLER_TITLE.MINUTES) {
      this.minutes = $event;
    }else {
      this.seconds = $event;
    }

    console.log('Total Time', this.calculateTotalTimeInSeconds(this.seconds, this.minutes, this.hours));
    this.totalTimeInSeconds = this.calculateTotalTimeInSeconds(this.seconds, this.minutes, this.hours);
    this.counterProgress.emit(this.totalTimeInSeconds);
  }

  startCountdown(){
    if(this.hours > 0 || this.minutes > 0 ||this.seconds > 0){
      console.log('se activa el contuntdown');
      this.initCounterProgress.emit(this.totalTimeInSeconds);
      this.doCountDown();
    }
  }

  doCountDown(){
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if(this.seconds >= 0){

        if(this.minutes > 0 && this.seconds === 0){
          this.minutes--;
          this.seconds = 60;
        }

        if(this.hours > 0 && this.minutes === 0 && this.seconds === 0){
          this.hours--;
          this.minutes = 59;
          this.seconds = 60;
        }

        this.totalTimeInSeconds--
        this.seconds--;
        this.counterProgress.emit(this.totalTimeInSeconds);
      }
      this.checkCounter();
    }, 1000)
  }

  stopCounter(){
    if(this.timer){
      clearTimeout(this.timer);
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.totalTimeInSeconds = 0;
      this.counterProgress.emit(this.totalTimeInSeconds);
      this.initCounterProgress.emit(0)
      this.counterService.endCounter();
    }
  }

  pauseCounter(){
    if(this.timer){
      clearTimeout(this.timer);
    }
  }

  checkCounter(){
    if(this.hours > 0 || this.minutes > 0 ||this.seconds > 0){
      this.doCountDown();
    }else {
      console.log('end-count-down')
    }
  }

  calculateTotalTimeInSeconds(seconds: number, minutes: number, hours: number){
    return seconds + (minutes * 60) + ((hours * 60) * 60);
  }

  getCurrentType($event: string){
    this.currentType = $event;
  }
}
