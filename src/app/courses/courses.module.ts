import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1/module1.component';
import { AppRoutingModule } from '../app-routing.module';
import { SoftwareComponent } from './software/software.component';



@NgModule({
  declarations: [
    Module1Component,
    SoftwareComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CoursesModule { }
