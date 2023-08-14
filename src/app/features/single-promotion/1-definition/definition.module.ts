import { NgModule } from '@angular/core';
import { DefinitionComponent } from './definition/definition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DefinitionComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DefinitionComponent
  ]
})
export class DefinitionModule {

}
