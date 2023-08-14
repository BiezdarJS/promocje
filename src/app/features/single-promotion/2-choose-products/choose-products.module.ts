import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseProductsComponent } from './choose-products/choose-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChooseProductsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ChooseProductsComponent
  ]
})
export class ChooseProductsModule { }
