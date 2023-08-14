import { Component, OnDestroy, OnInit } from '@angular/core';
// Models
import { IPromotion } from 'src/app/models/promotion.model';
// Enums
import { StepsEnum } from 'src/app/enums/steps.enum';
// Router
import { Router } from '@angular/router';
// RxJS
import { Subscription } from 'rxjs';
// Services
import { ManageDraftService } from 'src/app/services/manage-draft.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { SummaryBtnModeNotificationService } from 'src/app/services/summary-btn-mode-notification.service';
import { CurrentPromotionIdNotificationService } from 'src/app/services/current-promotion-id-notification.service';



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  providers: [
    ManageDraftService,
    PromotionService
  ],
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  // new promotion object
  promotion!: IPromotion;
  // submited object reference
  newPromotion!: any;
  // Summary Btn subscription
  summaryBtnSubscription: Subscription;
  summaryBtnMode: string;
  // Current Promotion Id subscription
  currentPromotionIdSubscription: Subscription;
  currentPromotionId: string;

  constructor(
    private promotionS: PromotionService,
    private manageDraftS: ManageDraftService,
    private summaryBtnModeS: SummaryBtnModeNotificationService,
    private currentPromotionIdS: CurrentPromotionIdNotificationService,
    private router: Router
  ) {}

  ngOnInit():void {
    // Subscribe to Summary Btn Notification
    this.summaryBtnSubscription = this.summaryBtnModeS.summaryBtnMode$.subscribe(d => {
      this.summaryBtnMode = d;
    });
    // Subscribe to Current Promotion Id Notification
    this.currentPromotionIdSubscription = this.currentPromotionIdS.currentPromotionId$.subscribe(d => {
      this.currentPromotionId = d;
    });
  }


  // Save Data
  save() {
      // Build and Object (which will be saved to the database) with data from the drafts
      this.promotion = {
        definition: JSON.parse(this.manageDraftS.getLocalStorageData(StepsEnum.Definition) || '{}'),
        choose_products: JSON.parse(this.manageDraftS.getLocalStorageData(StepsEnum.ChooseProducts) || '{}'),
      }
      // add new promotion case
      if (this.summaryBtnMode === 'Add') {
      // Save an Object to the Database
      this.newPromotion = this.promotionS.postPromotion(this.promotion);
      this.newPromotion.subscribe({
        complete: () => {
          // Redirect to the tasks grid
          this.router.navigate(['/']);
        }
      });
    } else

    // edit promotion case
    if (this.summaryBtnMode === 'Edit') {
      this.newPromotion = this.promotionS.updatePromotion(this.currentPromotionId,this.promotion);
      this.newPromotion.subscribe({
        complete: () => {
          // Redirect to Table
          this.router.navigate(['/']);
        }
      });
    }
  }




  ngOnDestroy():void {
    // Unsubscribe from Summary Btn Notification
    this.summaryBtnSubscription.unsubscribe();
    // Unsubscribe from Current Promotion Id Notification
    this.currentPromotionIdSubscription.unsubscribe();
  }


}
