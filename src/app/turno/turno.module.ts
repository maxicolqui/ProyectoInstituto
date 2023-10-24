import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ClassModule } from '../class/class.module';
import { ReservasComponent } from './reservas/reservas.component';
import { CrearComponent } from './crear/crear.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    ReservasComponent,
    CrearComponent,
    ViewComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ClassModule
    
  ],
  exports: [
    ViewComponent
  ]
})
export class TurnoModule { }
