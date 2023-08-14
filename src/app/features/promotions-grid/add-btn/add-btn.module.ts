import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddBtnComponent } from './add-btn/add-btn.component';




@NgModule({
  declarations: [
    AddBtnComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    AddBtnComponent
  ]
})
export class AddBtnModule { }
