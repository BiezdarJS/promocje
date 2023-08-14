import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePromotionComponent } from './@single-promotion/single-promotion.component';
import { DefinitionModule } from './1-definition/definition.module';
import { ChooseProductsModule } from './2-choose-products/choose-products.module';
import { SetCurrentStepDirective } from 'src/app/directives/set-current-step.directive';
import { ExcludeProductsModule } from './3-exclude-products/exclude-products.module';
import { BonusProductsModule } from './4-bonus-products/bonus-products.module';
import { ProductsLimitsModule } from './5-products-limits/products-limits.module';
import { ChooseClientsModule } from './6-choose-clients/choose-clients.module';
import { ExcludeClientsModule } from './7-exclude-clients/exclude-clients.module';
import { ClientsLimitsModule } from './8-clients-limits/clients-limits.module';
import { SummaryModule } from './9-summary/summary.module';
import { BackButtonDirective } from 'src/app/directives/go-back.directive';





@NgModule({
  declarations: [
    SinglePromotionComponent,
    SetCurrentStepDirective,
    BackButtonDirective
  ],
  imports: [
    CommonModule,
    DefinitionModule,
    ChooseProductsModule,
    ExcludeProductsModule,
    BonusProductsModule,
    ProductsLimitsModule,
    ChooseClientsModule,
    ExcludeClientsModule,
    ClientsLimitsModule,
    SummaryModule
  ],
  exports: [
    SinglePromotionComponent,
  ]
})
export class SinglePromotionModule { }
