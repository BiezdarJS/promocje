import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentStepNotificationService } from 'src/app/services/current-step-notification.service';
import { StepActivationService } from 'src/app/services/step-activation.service';


@Component({
  selector: 'app-single-promotion',
  templateUrl: './single-promotion.component.html',
  providers: [
    StepActivationService,
    CurrentStepNotificationService
  ],
  styleUrls: ['./single-promotion.component.scss']
})

export class SinglePromotionComponent implements OnInit, AfterViewInit {

  isDisabled: boolean = true;
  // current step subscription
  currentStepSubscription!: Subscription;
  currentStep!: string;
  // Are 2 first fields in definition component Empty ?
  isEmptySubscription!: Subscription;
  isEmpty!: boolean;


  constructor(
    public stepActivationS: StepActivationService,
    private currentStepNotificationS: CurrentStepNotificationService
  ) {}

  ngOnInit():void {
    // Subscribe to Current Step string value
    this.currentStepSubscription = this.currentStepNotificationS.currentStep$.subscribe(d => {
      this.currentStep = d;
    });
    // Subscribe to isEmpty boolean
    this.isEmptySubscription = this.stepActivationS.isEmpty$.subscribe(d => {
      this.isEmpty = d;
    });

  }

  ngAfterViewInit() {
    // Check if 2 first fields are empty
    this.stepActivationS.isEmpty();
  }



  ngOnDestroy():void {
    // Unsubscribe from Current Step
    this.currentStepSubscription.unsubscribe();
    // Unsubscribe from isEmpty
    this.isEmptySubscription.unsubscribe();
  }

}
