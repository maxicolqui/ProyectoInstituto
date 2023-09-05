import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftComponent } from './soft/soft.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> c4547bc6fba5beaa1a06282961a93f3def1b77f7



@NgModule({
  declarations: [
    SoftComponent,
<<<<<<< HEAD
    InicioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
=======
    InicioComponent
  ],
  imports: [
    CommonModule,
>>>>>>> c4547bc6fba5beaa1a06282961a93f3def1b77f7
    FormsModule
  ],
  exports:[
    SoftComponent,
    InicioComponent,
    AppRoutingModule
  ]
})
export class SoftwareModule { }
