import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  list:Profesor[]=[]

  constructor(private profesorService: ProfesorService){

  }

  ngOnInit(): void {
    this.profesorService.viewAll().subscribe( response => {
      console.log("lista de Profesores:",response);
      this.list= response;
      console.log("lista de profesores del ts: ",this.list);
      const list=this.list[0]
      console.log()
    })
  }
  
  
}
