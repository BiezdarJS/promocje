import { ElementRef, Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';

@Injectable()


export class StepActivationService {

  text: string = '';

  constructor(
    private elRef: ElementRef
  ) { }


  // Behavior Subject
  isEmptySubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isEmpty$ = this.isEmptySubject.asObservable();

  fieldsAreEmptyNotification(data:any) {
    this.isEmptySubject.next(data);
  }

  // Check Empty Method
  isEmpty() {
    let isEmpty;
    const componentRef = this.elRef.nativeElement;
    const marketingNameInput = componentRef.querySelector('input[name=marketing_name]');
    const technicalNameInput = componentRef.querySelector('input[name=technical_name]');
    if (marketingNameInput.value === '' && technicalNameInput.value === '') {
      isEmpty = true;
    } else {
      isEmpty = false;
    }
    this.fieldsAreEmptyNotification(isEmpty);
  }


}
