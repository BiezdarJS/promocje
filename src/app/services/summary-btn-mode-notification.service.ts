import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SummaryBtnModeNotificationService {

  // Summary Btn Notification
  public summaryBtnModeSubject: BehaviorSubject<string> = new BehaviorSubject('Add');
  summaryBtnMode$ = this.summaryBtnModeSubject.asObservable();

  sendSummaryBtnNotification(data:any) {
    this.summaryBtnModeSubject.next(data);
  }



}
