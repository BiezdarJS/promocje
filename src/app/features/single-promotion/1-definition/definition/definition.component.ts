import { Component, OnInit } from '@angular/core';
// Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Enums
import { StepsEnum } from 'src/app/enums/steps.enum';
// Services
import { ManageDraftService } from 'src/app/services/manage-draft.service';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  providers: [ ManageDraftService ]
})
export class DefinitionComponent implements OnInit {

  definitionForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private manageDraftS: ManageDraftService,
    public stepActivationS: StepActivationService,
  ) {}

  async ngOnInit() {


    // Form setup
    this.definitionForm = this.fb.group({
      marketing_name: ['', Validators.required],
      technical_name: [''],
      description: [''],
      portal: ['', Validators.required],
      type: ['', Validators.required],
      start_date: [''],
      finish_date: [''],
    });

    // Fill out form fields (on init) with data
    this.manageDraftS.fillForm(this.definitionForm, StepsEnum.Definition);
    // Listen to Form Value Changes to set new Values inside the form
    this.definitionForm.valueChanges.subscribe(value => {
      this.manageDraftS.saveDraft(StepsEnum.Definition, value);
    });
  }



  onChange() {
    // this.stepActivationS.text = event.target.value;
    this.stepActivationS.isEmpty()
  }





}
