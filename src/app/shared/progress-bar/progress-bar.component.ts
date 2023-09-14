import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {

  @Input() initProgress: number = 0;
  @Input() totalSeconds: number = 0;
  initProgressCounter: number = 0;
  progressBar: number = 100;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['initProgress'] !== undefined){
      this.initProgressCounter = changes['initProgress'].currentValue;
    }

    if(this.initProgressCounter !== 0 && changes['totalSeconds']?.previousValue > 0 ){
      this.progressBar =  100 - (this.initProgressCounter - changes['totalSeconds']?.currentValue) * 100 / this.initProgressCounter;
    }
  }

}
