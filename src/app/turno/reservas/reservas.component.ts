import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { turnoDia, turnoNoche, turnoTarde } from 'src/app/data/dia';
import { Turno } from 'src/app/model/Turno';
import { Materia } from 'src/app/models/Materia';
import { Profesor } from 'src/app/models/Profesor';
import { Reserva } from 'src/app/models/Reserva';
import { MateriaService } from 'src/app/services/materia.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { ReservaService } from 'src/app/services/reserva.service';

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
  listaReserva: Reserva[] = [];
  listaMateria: Materia[] = [];
  idCourseEnd: string;
  cEnd: any[] = []
  courseListSecondary = []
  idC: number;
  buscado1 = []

  // Variavles para guardar turno
  fecha: string;
  materia: Materia;
  idMateria: number;
  idHorario: number;

  constructor(private reservaService: ReservaService, private materiaService: MateriaService, private activateRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.reservaService.viewAll().subscribe(resp => {
      this.listaReserva = resp;
      //console.log(this.listaReserva)

    })

    this.materiaService.viewAll().subscribe(resp => {
      this.listaMateria = resp;
      //console.log("materias", this.listaMateria)
    })


    this.activateRouter.paramMap.subscribe(param => {
      this.idCourseEnd = String(+ param.get('e.dni'))
    })
  }

  // Metodos del formulario
  lis: Reserva;
  lista: Materia[] = [];
  mostrarFormulario(): void {
    this.lis = this.listaReserva.find(p => p.profesor.dni === this.idCourseEnd);
    console.log("lista del form:", this.lis)
    console.log(this.idCourseEnd)
    this.lista = this.lis.profesor['listMateria'];
    console.log(this.lista[0].nombre)
    this.habilitarForm = true;
  }

  ocultarFormulario(): void {
    this.habilitarForm = false;
  }

  mostrarReserva(): void {
    this.habilitarReserva = true;

  }
  cerrar():void{
    this.habilitarReserva = false;
  }
  cerrar2():void{
    this.habilitarEliminar = false;
  }

  mostrarEliminar(): void {
    this.habilitarEliminar = true;
  }

  // Cambiar los turnos
  verDia(): void {
    this.dia = true;
    this.fecha = 'mañana';
    this.tarde = false;
    this.noche = false;
  }

  verTarde(): void {
    this.dia = false;
    this.tarde = true;
    this.fecha = 'tarde';
    this.noche = false;
  }

  verNoche(): void {
    this.dia = false;
    this.tarde = false;
    this.noche = true;
    this.fecha = 'noche';
  }

  // Metodos de guardado
  materiaElegida: Materia;
  horario: Turno;
  guardar(): void {
    if (this.idHorario >= 0 && this.idHorario <= 7) {
      this.horario = this.turnosDia.find(e => e.id == this.idHorario);
      console.log("horario", this.horario)
    } else {
      if (this.idHorario > 7 && this.idHorario < 16) {
        this.horario = this.turnosTarde.find(e => e.id == this.idHorario);
        console.log("horario", this.horario)
      } else {
        if (this.idHorario > 15 && this.idHorario < 22) {
          this.horario = this.turnosNoche.find(e => e.id == this.idHorario);
          console.log("horario", this.horario)
        }
      }
    }

    this.materiaElegida = this.listaMateria.find(p => p.id == this.idMateria);
    console.log(this.fecha)
    //console.log(this.listaMateria);
    //console.log(this.idMateria)
    console.log(this.materiaElegida);
    this.habilitarForm = false;
  }
}