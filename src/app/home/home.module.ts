import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ModuloComponent } from './modulo/modulo.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from '../app-routing.module';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { TurnoModule } from '../turno/turno.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    ModuloComponent,
    FooterComponent,
    ErrorComponent,
    UbicacionComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TurnoModule
  
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
