import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { EditBtnModule } from './edit-btn/edit-btn.module';
import { DeleteBtnModule } from './delete-btn/delete-btn.module';
import { SinglePromotionModule } from '../single-promotion/single-promotion.module';
import { AddBtnModule } from './add-btn/add-btn.module';
import { ModalModule } from './modal/modal.module';
import { ModalHostDirective } from 'src/app/directives/modal-host.directive';




@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    SinglePromotionModule,
    AddBtnModule,
    EditBtnModule,
    DeleteBtnModule,
    ModalModule,
    ModalHostDirective
  ],
  exports: [
    TableComponent
  ]
})
export class PromotionsGridModule { }
