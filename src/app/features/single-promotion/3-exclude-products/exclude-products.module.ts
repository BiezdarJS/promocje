import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcludeProductsComponent } from './exclude-products/exclude-products.component';



@NgModule({
  declarations: [
    ExcludeProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExcludeProductsComponent
  ]
})
export class ExcludeProductsModule { }
