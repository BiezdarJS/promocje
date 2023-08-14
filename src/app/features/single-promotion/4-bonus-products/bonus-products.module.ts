import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusProductsComponent } from './bonus-products/bonus-products.component';



@NgModule({
  declarations: [
    BonusProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BonusProductsComponent
  ]
})
export class BonusProductsModule { }
