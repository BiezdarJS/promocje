import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcludeClientsComponent } from './exclude-clients/exclude-clients.component';



@NgModule({
  declarations: [
    ExcludeClientsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExcludeClientsComponent
  ]
})
export class ExcludeClientsModule { }
