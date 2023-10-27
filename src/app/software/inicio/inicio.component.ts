import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/services/profesor.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user:string = '';
  password:string = '';
  error:boolean = false;
  listaProfesor: Profesor[]=[]
  contra:string

  constructor(private profesorService: ProfesorService , private router:Router) {

  }

  ngOnInit(): void {
    this.profesorService.viewAll().subscribe( response => {
      console.log("lista de Profesores:",response);
      this.listaProfesor= response;
      console.log("lista de profesores del ts: ",this.listaProfesor);
      const list=this.listaProfesor[0]
      console.log()
    })
  }

  // metodo de validacion en la parte para el inicio de de sesion
  validate():void {
    for(const e of this.listaProfesor){
      this.contra = String(e.dni)
      if (this.user=== this.contra) {
        this.router.navigate(['pagina',e.dni]);
      } else {
        this.error=true;
      }
    }   
    
  }

  
}
