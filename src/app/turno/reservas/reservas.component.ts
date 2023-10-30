import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { turnoDia, turnoNoche, turnoTarde } from 'src/app/data/dia';
import { Turno } from 'src/app/model/Turno';
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

  //Variables del formulario
  dia: boolean = false;
  tarde: boolean = false;
  noche: boolean = false;
  turnosDia: Turno[] = turnoDia;
  turnosTarde: Turno[] = turnoTarde;
  turnosNoche: Turno[] = turnoNoche;

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

  // Metodos del formulario
  lis: Profesor;
  mostrarFormulario(): void {
    this.lis = this.listaProfe.find(p => p.dni === this.idCourseEnd);
    console.log("lista del form:", this.lis)
    this.habilitarForm = true;
  }

  ocultarFormulario(): void {
    this.habilitarForm = false;
  }

  mostrarReserva(): void {
    this.habilitarReserva = true;
  }

  mostrarEliminar(): void {
    this.habilitarEliminar = true;
  }

  // Cambiar los turnos
  verDia(): void {
    this.dia = true;
    this.tarde = false;
    this.noche = false;
  }

  verTarde(): void {
    this.dia = false;
    this.tarde = true;
    this.noche = false;
  }

  verNoche(): void {
    this.dia = false;
    this.tarde = false;
    this.noche = true;
  } 
}