import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteBtnComponent } from './delete-btn/delete-btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeleteBtnComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    DeleteBtnComponent
  ]
})
export class DeleteBtnModule { }
