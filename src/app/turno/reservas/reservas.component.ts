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
  listaProfesor: Profesor[] = []
  idCourseEnd: string;
  cEnd: any[] = []
  courseListSecondary = []
  idC: number;
  buscado1 = []

  // Variavles para guardar turno
  turno: string;
  materia: Materia;
  idMateria: number;
  hora: string;
  diaReserva: string;

  constructor(private reservaService: ReservaService, private materiaService: MateriaService, private profesorService: ProfesorService , private activateRouter: ActivatedRoute) {

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

    this.profesorService.viewAll().subscribe(resp => {
      this.listaProfesor = resp;
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
    this.turno = 'mañana';
    this.tarde = false;
    this.noche = false;
  }

  verTarde(): void {
    this.dia = false;
    this.tarde = true;
    this.turno = 'tarde';
    this.noche = false;
  }

  verNoche(): void {
    this.dia = false;
    this.tarde = false;
    this.noche = true;
    this.turno = 'noche';
  }

  // Metodos de guardado
  materiaElegida: Materia;
  horario: Turno;
  profeElegido:Profesor;
  reservaCreada: Reserva;
  guardar(): void {
    this.reservaCreada = {
      id: null,
      fecha: this.diaReserva,
      hora: this.hora,
      turno: this.turno,
      profesor: this.listaProfesor.find(p => p.dni == this.idCourseEnd),
      materia: this.listaMateria.find(p => p.id == this.idMateria)
    }
    console.log("datos de reserva")
    this.profeElegido =this.listaProfesor.find(p => p.dni == this.idCourseEnd);
    console.log(this.profeElegido);
    console.log(this.hora)
    console.log(this.diaReserva)
    this.materiaElegida = this.listaMateria.find(p => p.id == this.idMateria);
    console.log(this.materiaElegida);
    console.log(this.turno)
    //console.log(this.listaMateria);
    //console.log(this.idMateria)
    this.habilitarForm = false;

    this.crearReserva(this.reservaCreada);
  }

  crearReserva(reserva: Reserva): void {
    this.reservaService.create(reserva).subscribe(resp => {
      console.log(reserva)
    });
  }
}