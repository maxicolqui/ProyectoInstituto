import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProbarComponent } from './probar/probar.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ProbarComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProbarComponent,
    FormComponent
  ]
})
export class ClassModule { }
