import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './home/error/error.component';
import { SoftComponent } from './software/soft/soft.component';
import { InicioComponent } from './software/inicio/inicio.component';
import { Module1Component } from './courses/module1/module1.component';
import { NosotrosComponent } from './nosotros/nosotros/nosotros.component';
import { ReservasComponent } from './turno/reservas/reservas.component';
import { EnfermeriaComponent } from './software/enfermeria/enfermeria.component';


const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"enfermeria",component:EnfermeriaComponent},
  {path:"software",component:SoftComponent},
  {path:"logeo",component:InicioComponent},
  {path:"pagina/:e.dni",component:ReservasComponent},
  {path:"Contacto",component:Module1Component},
  {path:"recuperacion",component:NosotrosComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
