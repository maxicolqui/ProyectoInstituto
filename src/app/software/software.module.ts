import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftComponent } from './soft/soft.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SoftComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SoftComponent,
    InicioComponent,
    AppRoutingModule
  ]
})
export class SoftwareModule { }
