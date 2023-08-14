import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsLimitsComponent } from './clients-limits/clients-limits.component';



@NgModule({
  declarations: [
    ClientsLimitsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientsLimitsComponent
  ]
})
export class ClientsLimitsModule { }
