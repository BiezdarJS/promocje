import { Component, EventEmitter, Input, Output } from '@angular/core';
// Angular Material
import { MatDialog } from '@angular/material/dialog';
// Router
import { Router } from '@angular/router';
// Components
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
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
  result: string = '';


  constructor(
    private promotionS: PromotionService,
    private router: Router,
    public dialog: MatDialog
  ) {}



  onDelete(id: string) {
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
            // Refresh current component
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/']);
          }
        })
      }
    });
  }




}
