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

  vistaTurno(): void {
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
  }

  carga(): void {
    if(1 === 1) {
      this.verFiltro(this.fecha, this.turno);
    }
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
