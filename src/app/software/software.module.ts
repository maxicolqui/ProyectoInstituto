import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftComponent } from './soft/soft.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnfermeriaComponent } from './enfermeria/enfermeria.component';



@NgModule({
  declarations: [
    SoftComponent,
    InicioComponent,
    EnfermeriaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SoftComponent,
    InicioComponent,
    AppRoutingModule
  ]
})
export class SoftwareModule { }
