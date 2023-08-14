import { NgModule } from '@angular/core';
import { EditBtnComponent } from './edit-btn/edit-btn.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    EditBtnComponent
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    EditBtnComponent
  ]
})
export class EditBtnModule { }
