import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BUTTON_TYPE } from "../../../shared/helpers/constants";

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    eventSubject = new BehaviorSubject(BUTTON_TYPE.PLAY);
    endCounterSubject = new BehaviorSubject(false);
    constructor(){}

    sendEventOrder(event: BUTTON_TYPE){
        this.eventSubject.next(event)
    }

    recibeEventOrder(): Observable<BUTTON_TYPE>{
        return this.eventSubject.asObservable();
    }

    endCounter(){
        this.endCounterSubject.next(true);
    }

    getEndCounter(): Observable<boolean>{
        return this.endCounterSubject.asObservable();
    }
}