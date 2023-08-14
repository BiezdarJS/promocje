import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseClientsComponent } from './choose-clients/choose-clients.component';



@NgModule({
  declarations: [
    ChooseClientsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChooseClientsComponent
  ]
})
export class ChooseClientsModule { }
