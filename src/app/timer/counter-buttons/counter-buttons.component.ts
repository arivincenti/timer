import { Component, OnInit } from '@angular/core';
import { BUTTON_TYPE } from '../../helpers/constants';
import { CounterService } from '../counter/services/counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit{
  types = BUTTON_TYPE;
  actualEvent$ = new Observable<string>();

  constructor(
    private readonly counterService: CounterService
  ){}
  
  ngOnInit(): void {
      this.actualEvent$ = this.counterService.getEventOrder();
  }

  sendOrder($event: BUTTON_TYPE){
    this.counterService.setEventOrder($event);
  }
}
