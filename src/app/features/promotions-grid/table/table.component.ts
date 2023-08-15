import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// Enums
import { StepsEnum } from 'src/app/enums/steps.enum';
// Services
import { ManageDraftService } from 'src/app/services/manage-draft.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    ManageDraftService,
    PromotionService
  ]
})

export class TableComponent implements OnInit {


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




}
