import { Component } from '@angular/core';
// Services
import { SummaryBtnModeNotificationService } from 'src/app/services/summary-btn-mode-notification.service';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent {

  constructor(
    private summaryBtnModeS: SummaryBtnModeNotificationService
  ) {}

  onAdd() {
    // change summary btn text value to 'Add'
    this.summaryBtnModeS.sendSummaryBtnNotification('Add');
  }

}
