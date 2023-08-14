import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalHostDirective } from 'src/app/directives/modal-host.directive';
// Enums
import { StepsEnum } from 'src/app/enums/steps.enum';
// Services
import { ManageDraftService } from 'src/app/services/manage-draft.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { ModalComponent } from '../modal/modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    ManageDraftService,
    PromotionService
  ]
})

export class TableComponent implements OnInit, AfterViewInit {

  // New Task
  @ViewChild(ModalHostDirective, {static:true}) modalHost!: ModalHostDirective;
  modalContainerRef!: any;

  allPromotions!: any;

  constructor(
    private manageDraftS: ManageDraftService,
    private promotionsS: PromotionService
  ) {}

  ngOnInit():void {



    // fetch Promotions
    this.promotionsS.fetchPromotions()
    .subscribe(response => {
      this.allPromotions = response;
    });
    // clear LocalStorage
    Object.values(StepsEnum).forEach(stepName => {
      this.manageDraftS.removeDraft(stepName);
    })

  }


  ngAfterViewInit(): void {
    // console.log(this.deletePopupHost);
    this.modalContainerRef = this.modalHost.viewContainerRef;
  }


  // Add Delete Modal
  showDeleteModal() {
    this.modalContainerRef.createComponent(ModalComponent);
  }







}
