import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// Enums
import { StepsEnum } from 'src/app/enums/steps.enum';
// RxJS
import { Subscription } from 'rxjs';
// Services
import { ManageDraftService } from 'src/app/services/manage-draft.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { SummaryBtnModeNotificationService } from 'src/app/services/summary-btn-mode-notification.service';
import { CurrentPromotionIdNotificationService } from 'src/app/services/current-promotion-id-notification.service';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.scss'],
  providers: [
    ManageDraftService,
    PromotionService
  ]
})
export class EditBtnComponent implements OnInit, OnDestroy {

  @Input('id') id: string;
  // all Promotions
  allPromotions!: any;


  // Summary Btn subscription
  summaryBtnSubscription: Subscription;
  summaryBtnMode: string;

  constructor(
    private promotionsS: PromotionService,
    private manageDraftS: ManageDraftService,
    private summaryBtnModeS: SummaryBtnModeNotificationService,
    private currentPromotionIdS: CurrentPromotionIdNotificationService
  ) {}

  ngOnInit():void {
    // Fetch Promotions
    this.promotionsS.fetchPromotions()
    .subscribe(response => {
      this.allPromotions = response;
    });
    // Subscribe to Summary Btn Notification
    this.summaryBtnSubscription = this.summaryBtnModeS.summaryBtnMode$.subscribe(d => {
      this.summaryBtnMode = d;
    });
  }

  onEdit(id) {
    // First, send ID notification which will be needed in summary component to edit
    this.currentPromotionIdS.sendCurrentPromotionIdNotification(id);
    // Then, change summary btn text value to 'Edit'
    this.summaryBtnModeS.sendSummaryBtnNotification('Edit');
    // Get product (which will be updated) based on Id collected from parent component
    let currentPromotion = this.allPromotions.find(p => p.id === id);
    // Populate localstorage which next will be used by the fillForm method on each step initialization
    if (currentPromotion.definition) {
      this.manageDraftS.saveDraft(StepsEnum.Definition, currentPromotion.definition);
    }
    if (currentPromotion.choose_products) {
      this.manageDraftS.saveDraft(StepsEnum.ChooseProducts, currentPromotion.choose_products);
    }
  }


  ngOnDestroy():void {
    // Unsubscribe from Summary Btn Notification
    this.summaryBtnSubscription.unsubscribe();
  }

}
