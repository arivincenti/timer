import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BUTTON_TYPE } from "../../../shared/helpers/constants";

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    eventSubject = new BehaviorSubject(BUTTON_TYPE.PLAY);
    endCounterSubject = new BehaviorSubject(false);
    totalTimeInSeconds$ = new BehaviorSubject(0);
    counterProgress$ = new BehaviorSubject(0);
    constructor(){}

    setEventOrder(event: BUTTON_TYPE){
        this.eventSubject.next(event)
    }

    getEventOrder(): Observable<BUTTON_TYPE>{
        return this.eventSubject.asObservable();
    }

    setEndCounter(){
        this.endCounterSubject.next(true);
    }

    getEndCounter(): Observable<boolean>{
        return this.endCounterSubject.asObservable();
    }

    setTotalTimeInSeconds(totalTime: number){
        this.totalTimeInSeconds$.next(totalTime);
    }

    getTotalTimeInSeconds(){
        return this.totalTimeInSeconds$.asObservable();
    }

    setProgressCounter(progress: number){
        this.counterProgress$.next(progress);
    }

    getProgressCounter(){
        return this.counterProgress$.asObservable();
    }
}