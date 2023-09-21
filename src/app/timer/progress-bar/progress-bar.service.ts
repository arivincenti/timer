import { Injectable } from '@angular/core';

@Injectable()
export class ProgressBarService {

  constructor() { }

  setBarColor(progressBarPercentage: number): string{
    if(progressBarPercentage >= 70){
      return 'darkgreen'
    }else if(progressBarPercentage >= 30){
      return 'orange'
    }else{
      return 'rgb(180, 0, 0)'
    }
  }
}
