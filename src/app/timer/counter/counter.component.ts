import {  Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { BUTTON_TYPE, DIGIT_HANDLER_TITLE } from 'src/app/helpers/constants';
import { CounterService } from 'src/app/timer/counter/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  digitTitle = DIGIT_HANDLER_TITLE;
  currentType: string = '';
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  private subscription = new Subscription();
  private totalTimeInSeconds: number = 0;
  private timer: any = null;
  private flag: boolean = true;

  constructor(private readonly counterService: CounterService){}

  ngOnInit(): void {
    this.subscription.add(
      this.counterService.getEventOrder().subscribe({
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
      })
    )
  }

  getCurrentValue($event: number){
    if(this.currentType === DIGIT_HANDLER_TITLE.HOURS) {
      this.hours = $event;
    }else if(this.currentType === DIGIT_HANDLER_TITLE.MINUTES) {
      this.minutes = $event;
    }else {
      this.seconds = $event;
    }

    this.totalTimeInSeconds = this.calculateTotalTimeInSeconds(this.seconds, this.minutes, this.hours);
    this.counterService.setTotalTimeInSeconds(this.totalTimeInSeconds);
  }

  startCountdown(){
    if(this.hours > 0 || this.minutes > 0 ||this.seconds > 0){
      if(this.flag){
        this.flag = false;
        this.counterService.setTotalTimeInSeconds(this.totalTimeInSeconds);
      }
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
        this.counterService.setProgressCounter(this.totalTimeInSeconds);
      }
      this.checkCounter();
    }, 1000)
  }

  stopCounter(){
    if(this.timer){
      clearTimeout(this.timer);
      this.flag = true;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.totalTimeInSeconds = 0;
      this.counterService.setTotalTimeInSeconds(this.totalTimeInSeconds);
      this.counterService.setProgressCounter(this.totalTimeInSeconds);
      this.counterService.setEndCounter();
    }
  }

  pauseCounter(){
    this.flag = false;
    if(this.timer){
      clearTimeout(this.timer);
    }
  }

  checkCounter(){
    if(this.hours > 0 || this.minutes > 0 ||this.seconds > 0){
      this.doCountDown();
    }else {
      console.log('EndCountDown')
    }
  }

  calculateTotalTimeInSeconds(seconds: number, minutes: number, hours: number){
    return seconds + (minutes * 60) + ((hours * 60) * 60);
  }

  getCurrentType($event: string){
    this.currentType = $event;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
