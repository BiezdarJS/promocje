import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[modalHost]'
})
export class ModalHostDirective {

  constructor( public viewContainerRef: ViewContainerRef) { }


}
