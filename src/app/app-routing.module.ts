import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './home/error/error.component';
import { SoftComponent } from './software/soft/soft.component';
import { InicioComponent } from './software/inicio/inicio.component';
import { ReservaComponent } from './turno/reserva/reserva.component';


const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"software",component:SoftComponent},
  {path:"logeo",component:InicioComponent},
  {path:"pagina",component:ReservaComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
