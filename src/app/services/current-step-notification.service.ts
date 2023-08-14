import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';
// Enums
import { StepsEnum } from '../enums/steps.enum';

@Injectable()

export class CurrentStepNotificationService {


  constructor() { }

  // Current Step Notification
  public currentStepSubject: BehaviorSubject<string | any> = new BehaviorSubject(StepsEnum.Definition);
  currentStep$ = this.currentStepSubject.asObservable();

  sendStepNotification(data:any) {
    this.currentStepSubject.next(data);
  }


}
