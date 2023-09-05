import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SoftwareModule } from './software/software.module';
import { TurnoModule } from './turno/turno.module';
import { ClassModule } from './class/class.module';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> c4547bc6fba5beaa1a06282961a93f3def1b77f7

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SoftwareModule,
    TurnoModule,
    ClassModule,
<<<<<<< HEAD
    ReactiveFormsModule
  
=======
    

>>>>>>> c4547bc6fba5beaa1a06282961a93f3def1b77f7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
