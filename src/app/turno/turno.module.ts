import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ClassModule } from '../class/class.module';
import { ReservasComponent } from './reservas/reservas.component';
import { CrearComponent } from './crear/crear.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';



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
    ClassModule,
    FormsModule
    
  ],
  exports: [
    ViewComponent
  ]
})
export class TurnoModule { }
