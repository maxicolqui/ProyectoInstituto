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
  listaProfe: any[]=[]
  idCourseEnd:number;
  cEnd:any[]=[]
  courseListSecondary=[]
  idC:number;
  buscado1=[]
  amd:any[]=[]
  


  constructor(private materiaService: ProfesorService, private activateRouter:ActivatedRoute ){

  }

  ngOnInit(): void {
    this.materiaService.viewAll().subscribe(response =>{
      console.log("lista de las materias:",response);
      this.listaProfe= response;
      console.log("lista de las materias del TS:",this.listaProfe);
      console.log(this.listaProfe)
    })

    this.activateRouter.paramMap.subscribe(param => {
    this.idCourseEnd =+ param.get('e.dni');
    console.log(this.idCourseEnd);
    let amc = this.listaProfe.find(p => p.dni === 39200);
    console.log("lista filtrada:",amc)
  
  })
    
  }

  lis:any[]=[]
  conseguirFor():void{
    for(const e of this.listaProfe){
      if (e.dni==this.idCourseEnd) {
        let lis= this.listaProfe.find(p => p.dni === this.idCourseEnd);
        console.log("lista filtrada:",lis)
        console.log("se encontro el dni")
      }else{
        console.log("no se encontro")
      }
    }
  }

}
