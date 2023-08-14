import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// RxJS
import { Subscription } from 'rxjs';
// Modal
declare function Modal(): void;
// Services
import { CurrentPromotionIdNotificationService } from 'src/app/services/current-promotion-id-notification.service';
import { PromotionService } from 'src/app/services/promotion.service';
//Components
import { TableComponent } from '../../table/table.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {'class': 'modal__wrap'},
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input('id') id: string;
  @Output() closeModalEvent = new EventEmitter();
  // Delete Modal
  modal!: any;
  // Current Promotion Id subscription
  currentPromotionIdSubscription: Subscription;
  currentPromotionId: string;

  constructor(
    private elRef: ElementRef,
    private promotionS: PromotionService,
    private currentPromotionIdS: CurrentPromotionIdNotificationService,
    private router: Router,
    private parentRef: TableComponent
  ) {}



  ngOnInit():void {
    // modal
    this.modal = new (Modal as any)({
      el: this.elRef.nativeElement,
      backdrop: 'static'
    });
    this.modal.on('show', function(myModal:any) {
      // Do something before we start showing modal
      myModal.el.childNodes[0].classList = 'modal new-goal animate__animated animate__bounceIn';
    });
    this.modal.show();

    // Subscribe to Current Promotion Id Notification
    this.currentPromotionIdSubscription = this.currentPromotionIdS.currentPromotionId$.subscribe(d => {
      this.currentPromotionId = d;
    });
  }


  onDelete() {
    // Hide Modal
    this.modal.hide();
    setTimeout(() => {
      this.parentRef.modalContainerRef.clear();
    }, 1000);
    // Delete promotion
    this.promotionS.deletePromotion(this.currentPromotionId)
    .subscribe({
      complete: () => {
        // Redirect to the tasks grid
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigate(['/']);
      }
    })
  }


  closeModal() {
    this.modal.hide();
    setTimeout(() => {
      this.parentRef.modalContainerRef.clear();
    }, 1000);
  }


  ngOnDestroy():void {
    // Subscribe from Current Promotion Id Notification
    this.currentPromotionIdSubscription.unsubscribe();
  }

}
