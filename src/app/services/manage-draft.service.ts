import { Injectable } from '@angular/core';
// Form
import { FormGroup } from '@angular/forms';

@Injectable()


export class ManageDraftService {


  // Save Draft
  saveDraft(stepName:string, value:JSON) {
    localStorage.setItem(stepName, JSON.stringify(value));
  }

  // Remove Draft
  removeDraft(stepName:string) {
    localStorage.removeItem(stepName);
  }


  // Get Data from the localstorage
  getLocalStorageData(stepName:string) {
    return localStorage.getItem(stepName);
  }

  // Fill out form fields with data from localstorage
  fillForm(currentForm:FormGroup, stepName:string) {
    const localStorageData = this.getLocalStorageData(stepName);

    // check if data from localstorage exists
    if (localStorageData !== null) {
      // if data does exist, use that data to setValue on the form
      currentForm.setValue(JSON.parse(localStorageData));
    }
  }

}
