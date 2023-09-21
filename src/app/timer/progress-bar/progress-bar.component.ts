import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from 'src/app/timer/counter/services/counter.service';
import { BUTTON_TYPE } from '../../helpers/constants';
import { Subscription } from 'rxjs';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  initProgress: number;
  totalSeconds: number;
  initProgressCounter;
  progressBar: number;
  subscription: Subscription = new Subscription();
  progressBarColor: string;

  constructor(
    private readonly counterService: CounterService,
    private readonly progressBarService: ProgressBarService
    ){
    this.totalSeconds = 0;
    this.initProgress = 0;
    this.initProgressCounter = 0;
    this.progressBar = 100;
    this.progressBarColor = 'darkgreen'
  }

  ngOnInit(): void {
    this.subscription.add(
      this.counterService.getEventOrder().subscribe({
        next: (order) => {
          if(order === BUTTON_TYPE.STOP){
            this.progressBar = 100;
          }
        },
        error: (err: any) => console.log(err)
      })
    )

    this.subscription.add(
      this.counterService.getTotalTimeInSeconds().subscribe(
        {
          next: (seconds => this.totalSeconds = seconds),
          error: (err) => {console.error(err)}
        }
      )
    )

    this.subscription.add(
      this.counterService.getEndCounter().subscribe({
        next: () => {this.counterService.setProgressCounter(100)},
        error: (err) => console.log(err)
      })
    )

    this.subscription.add(
      this.counterService.getProgressCounter().subscribe({
        next: (progress) => {
          if(this.totalSeconds > 0){
            this.progressBar =  100 - (this.totalSeconds - progress) * 100 / this.totalSeconds;
          }
          this.progressBarColor = this.progressBarService.setBarColor(this.progressBar);
        },
        error: (err) => console.error(err)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
