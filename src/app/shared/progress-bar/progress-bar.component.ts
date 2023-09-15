import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterService } from 'src/app/timer/counter/services/counter.service';
import { BUTTON_TYPE } from '../helpers/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() initProgress: number = 0;
  @Input() totalSeconds: number = 0;
  initProgressCounter: number = 0;
  progressBar: number = 100;
  subscription: Subscription = new Subscription();

  constructor(private readonly counterService: CounterService){}

  ngOnInit(): void {
    this.subscription.add(
      this.counterService.recibeEventOrder().subscribe({
        next: (order) => {
          if(order === BUTTON_TYPE.STOP){
            this.progressBar = 100;
          }
        },
        error: (err: any) => console.log(err)
      })
    )

    this.subscription.add(
      this.counterService.getEndCounter().subscribe({
        next: () => this.progressBar = 100,
        error: (err) => console.log(err)
      })
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['initProgress'] !== undefined){
      this.initProgressCounter = changes['initProgress'].currentValue;
    }

    if(this.initProgressCounter !== 0 && changes['totalSeconds']?.previousValue > 0 ){
      this.progressBar =  100 - (this.initProgressCounter - changes['totalSeconds']?.currentValue) * 100 / this.initProgressCounter;
    }
  }

}
