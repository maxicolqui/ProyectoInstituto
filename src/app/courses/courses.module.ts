import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1/module1.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    Module1Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CoursesModule { }
