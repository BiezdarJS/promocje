import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { EditBtnModule } from './edit-btn/edit-btn.module';
import { DeleteBtnModule } from './delete-btn/delete-btn.module';
import { SinglePromotionModule } from '../single-promotion/single-promotion.module';
import { AddBtnModule } from './add-btn/add-btn.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    TableComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    SinglePromotionModule,
    AddBtnModule,
    EditBtnModule,
    DeleteBtnModule,
    MatDialogModule,
  ],
  exports: [
    TableComponent,
  ]
})
export class PromotionsGridModule { }
