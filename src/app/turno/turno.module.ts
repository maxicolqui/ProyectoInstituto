import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './reserva/reserva.component';
import { AppRoutingModule } from '../app-routing.module';
import { ClassModule } from '../class/class.module';



@NgModule({
  declarations: [
    ReservaComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ClassModule
    
  ],
  exports: [
    ReservaComponent
  ]
})
export class TurnoModule { }
