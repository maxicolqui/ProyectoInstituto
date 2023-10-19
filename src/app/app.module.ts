import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SoftwareModule } from './software/software.module';
import { TurnoModule } from './turno/turno.module';
import { ClassModule } from './class/class.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesModule } from './courses/courses.module';

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
    ReactiveFormsModule,
    CoursesModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
