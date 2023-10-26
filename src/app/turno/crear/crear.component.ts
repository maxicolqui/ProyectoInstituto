import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materia } from 'src/app/models/Materia';
import { Profesor } from 'src/app/models/Profesor';
import { MateriaService } from 'src/app/services/materia.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  ListaMateria: Materia[]=[]
  listaProfesor: Profesor[]=[]
  idCourseEnd:number;
  cEnd:Profesor;
  courseListSecondary=[]
  idC:number;
  buscado1=[]


  constructor(private materiaService: ProfesorService, private activateRouter:ActivatedRoute ){

  }

  ngOnInit(): void {
    this.materiaService.viewAll().subscribe(response =>{
      console.log("lista de las materias:",response);
      this.listaProfesor= response;
      console.log("lista de las materias del TS:",this.listaProfesor);
      console.log(this.listaProfesor)
    })

    this.activateRouter.paramMap.subscribe(param => {
    this.idCourseEnd =+ param.get('e.dni');
      console.log(this.idCourseEnd);
    let valorEnd=String(this.idCourseEnd)
    console.log(valorEnd)
    let end = this.listaProfesor.find(p => p.id === 1);
    console.log("lista filtrada:",end)
  
  })

    this.buscarxid();
    
  }

  buscarxid():void{
    this.activateRouter.paramMap.subscribe(param =>{
      this.idC =+ param.get('e.dni');
      console.log(this.idC)
      let valorF=String(this.idC)
      this.buscado1.push(this.listaProfesor.find(e => e.id===1))
      console.log("ultimo intento:",this.buscado1)
    })
  }

}
