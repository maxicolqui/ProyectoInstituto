import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './home/error/error.component';
import { SoftComponent } from './software/soft/soft.component';
import { InicioComponent } from './software/inicio/inicio.component';
import { ReservaComponent } from './turno/reserva/reserva.component';
import { Module1Component } from './courses/module1/module1.component';
import { NosotrosComponent } from './nosotros/nosotros/nosotros.component';


const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"software",component:SoftComponent},
  {path:"logeo",component:InicioComponent},
  {path:"pagina",component:ReservaComponent},
  {path:"Contacto",component:Module1Component},
  {path:"recuperacion",component:NosotrosComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
