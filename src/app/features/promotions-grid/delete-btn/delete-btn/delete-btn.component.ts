import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// Router
import { Router } from '@angular/router';
// Services
import { CurrentPromotionIdNotificationService } from 'src/app/services/current-promotion-id-notification.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.scss'],
  providers: [ PromotionService ]
})
export class DeleteBtnComponent {

  @Input('id') id: string;
  @Output() openPopupEvent = new EventEmitter();
  result: string = '';


  constructor(
    private promotionS: PromotionService,
    private router: Router,
    public dialog: MatDialog
  ) {}



  onDelete(id: string) {
    // Set ID of the Current Promotion
    // this.currentPromotionIdS.sendCurrentPromotionIdNotification(id);
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Usuń',
        message: 'Czy na pewno chcesz usunąć daną promocję ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.promotionS.deletePromotion(id)
        .subscribe({
          complete: () => {
            // Redirect to the tasks grid
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/']);
          }
        })
      }
    });













    // // Emit event to Show Modal
    // this.openPopupEvent.emit();
  }


}
