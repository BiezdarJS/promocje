import { Directive, ElementRef, HostListener } from '@angular/core';
import { CurrentStepNotificationService } from '../services/current-step-notification.service';


@Directive({
  selector: '[setCurrentStep]'
})
export class SetCurrentStepDirective {


  constructor(
    private elRef: ElementRef,
    private currentStepNotificationS: CurrentStepNotificationService
  ) { }

  @HostListener('click')
  getStep() {
    const selectedData = this.elRef.nativeElement.getAttribute('data-id');
    this.currentStepNotificationS.sendStepNotification(selectedData);
  }



}
