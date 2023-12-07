import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filtroDia, filtroNoche, filtroTarde } from 'src/app/data/turnos';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  listaDia: Reserva[] = filtroDia;
  listaTarde: Reserva[] = filtroTarde;
  listaNoche: Reserva[] = filtroNoche;
  listaFiltro: Reserva[] = [];
  listaService: Reserva[] = [];
  pipe = new DatePipe('en-US');
  fecha: string = this.pipe.transform(Date.now(), "YYYY-MM-dd");
  turno: string = 'tarde';

  // listaService: Reserva[] = [
  //   {id: 5, fecha:'2023-12-03', turno:'dia', hora:'10:40', materia: null, profesor: null},
  //   {id: 6, fecha:'2023-12-03', turno:'dia', hora:'11:20', materia: null, profesor: null},
  //   {id: 7, fecha:'2023-12-04', turno:'dia', hora:'12:00', materia: null, profesor: null},
  //   {id: 8, fecha:'2023-12-05', turno:'dia', hora:'12:40', materia: null, profesor: null},
  //   {id: 9, fecha:'2023-12-04', turno:'tarde', hora:'13:20', materia: null, profesor: null},
  //   {id: 10, fecha:'2023-12-03', turno:'tarde', hora:'14:00', materia: null, profesor: null},
  //   {id: 11, fecha:'2023-12-04', turno:'tarde', hora:'14:40', materia: null, profesor: null}
  // ]

  constructor(private reservaService: ReservaService){

  }

  ngOnInit(): void {
    this.verFiltro(this.fecha, this.turno);
  }

  verFiltro(f: string, t: string): void {
    this.reservaService.filterDateTurn(f, t).subscribe(resp => {
      this.listaService = resp;
    })
  }

  cambios(): void {
    this.carga();
  }

  vistaTurno(): Reserva[] {
    this.listaFiltro = [];
    if(this.turno == 'dia') {
      this.listaFiltro = this.listaDia;
    }
    if(this.turno == 'tarde') {
      this.listaFiltro = this.listaTarde;
    }
    if(this.turno == 'noche') {
      this.listaFiltro = this.listaNoche;
    }
    return this.listaFiltro;
  }

  carga(): void {
    if(1 == 1) {
      this.vistaTurno();
      this.verFiltro(this.fecha, this.turno);
    }
    console.log('service' ,this.listaService);
    console.log('filtro', this.listaFiltro);
    for (const i of this.listaFiltro) {
      for (const j of this.listaService) {
        if(i.hora == j.hora) {
          
        }
      }
    }
  }

  rese() {
    this.listaFiltro = [];
  }
}
