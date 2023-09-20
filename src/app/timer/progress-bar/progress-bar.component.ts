import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from 'src/app/timer/counter/services/counter.service';
import { BUTTON_TYPE } from '../../shared/helpers/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  initProgress: number;
  totalSeconds: number;
  initProgressCounter;
  progressBar: number = 100;
  subscription: Subscription = new Subscription();

  constructor(private readonly counterService: CounterService){
    this.totalSeconds = 0;
    this.initProgress = 0;
    this.initProgressCounter = 0;
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
        next: () => this.progressBar = 100,
        error: (err) => console.log(err)
      })
    )

    this.subscription.add(
      this.counterService.getProgressCounter().subscribe({
        next: (progress) => {
          this.progressBar =  100 - (this.totalSeconds - progress) * 100 / this.totalSeconds;
          console.log('totalSeconds', this.totalSeconds);
          console.log('progress', this.progressBar);
        },
        error: (err) => console.error(err)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
