import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// Router
import { Router } from '@angular/router';
import { CurrentPromotionIdNotificationService } from 'src/app/services/current-promotion-id-notification.service';
// Services
import { PromotionService } from 'src/app/services/promotion.service';


@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.scss'],
  providers: [ PromotionService ]
})
export class DeleteBtnComponent {

  @Input('id') id: string;
  @Output() openPopupEvent = new EventEmitter();


  constructor(
    private currentPromotionIdS: CurrentPromotionIdNotificationService,
  ) {}



  onDelete(id: string) {
    // Set ID of the Current Promotion
    this.currentPromotionIdS.sendCurrentPromotionIdNotification(id);
    // Emit event to Show Modal
    this.openPopupEvent.emit();
  }


}
