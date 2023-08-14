import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePromotionComponent } from '../single-promotion/@single-promotion/single-promotion.component';
import { TableComponent } from './table/table.component';
import { PromotionsGridModule } from './promotions-grid.module';
import { SinglePromotionModule } from '../single-promotion/single-promotion.module';



const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  { path: 'add',
    component: SinglePromotionComponent,
  },
  { path: 'edit',
    component: SinglePromotionComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PromotionsGridModule,
    SinglePromotionModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class PromotionsGridRoutingModule { }
