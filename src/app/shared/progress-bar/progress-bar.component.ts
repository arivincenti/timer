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
  progressBar: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['initProgress'] !== undefined){
      this.initProgressCounter = changes['initProgress'].currentValue;
    }

    if(this.initProgressCounter !== 0){
      this.progressBar = (this.initProgressCounter - changes['totalSeconds']?.currentValue) / this.initProgressCounter * 100;
      console.log('progressBar', this.progressBar);
    }
  }

}
