import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrentPromotionIdNotificationService {

  // Current Promotion Id Notification
  public currentPromotionIdSubject: BehaviorSubject<string> = new BehaviorSubject('');
  currentPromotionId$ = this.currentPromotionIdSubject.asObservable();

  sendCurrentPromotionIdNotification(data:any) {
    this.currentPromotionIdSubject.next(data);
  }


}
