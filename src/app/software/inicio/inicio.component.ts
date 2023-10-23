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

  constructor(private profesorService: ProfesorService , private router:Router) {

  }

  ngOnInit(): void {
    this.profesorService.viewAll().subscribe( response => {
      console.log("lista de Profesores:",response);
      this.listaProfesor= response;
      console.log("lista de profesores del ts: ",this.listaProfesor);

    })
  }

  validate():void {
    
    console.log(this.user);
    if (this.user=== "name") {
      this.router.navigate(['pagina']);

    } else {
      this.error=true;
    }
  }

  
}
