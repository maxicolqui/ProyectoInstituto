import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materia } from 'src/app/models/Materia';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  // Variables del componente
  habilitarForm: boolean = false;
  habilitarReserva: boolean = false;
  habilitarEliminar: boolean = false;

  // Variables del service
  listaProfe: any[] = []
  idCourseEnd: string;
  cEnd: any[] = []
  courseListSecondary = []
  idC: number;
  buscado1 = []

  constructor(private profeService: ProfesorService, private activateRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.profeService.viewAll().subscribe(response => {
      this.listaProfe = response;
      console.log("lista de las profesores:", this.listaProfe);
    })

    this.activateRouter.paramMap.subscribe(param => {
      this.idCourseEnd = String(+ param.get('e.dni'));  
    })
  }

  lis: Profesor;
  mostrarFormulario(): void {
    this.lis = this.listaProfe.find(p => p.dni === this.idCourseEnd);
    //console.log("lista del form:", this.lis)
    this.habilitarForm = true;
  }

  mostrarReserva(): void {
    this.habilitarReserva = true;
  }

  mostrarEliminar(): void {
    this.habilitarEliminar = true;
  }
}