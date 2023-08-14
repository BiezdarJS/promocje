import { Component, OnInit } from '@angular/core';
// Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Enums
import { StepsEnum } from 'src/app/enums/steps.enum';
// Services
import { ManageDraftService } from 'src/app/services/manage-draft.service';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-choose-products',
  templateUrl: './choose-products.component.html',
  styleUrls: ['./choose-products.component.scss'],
  providers: [ ManageDraftService ]
})
export class ChooseProductsComponent implements OnInit {


  chooseProductsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private manageDraftS: ManageDraftService,
    public stepActivationS: StepActivationService,
  ) {}

  ngOnInit():void {
    // Form setup
    this.chooseProductsForm = this.fb.group({
      product_1: ['', Validators.required],
      product_2: ['', Validators.required],
      product_3: ['', Validators.required],
      product_4: ['', Validators.required]
    });
    // Fill out form fields (on init) with data from localstorage
    this.manageDraftS.fillForm(this.chooseProductsForm, StepsEnum.ChooseProducts);
    // Listen to Form Value Changes to set new Values inside the form
    this.chooseProductsForm.valueChanges.subscribe(value => {
      this.manageDraftS.saveDraft(StepsEnum.ChooseProducts, value);
    });
  }



}
