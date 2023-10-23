import { Component, OnInit, SimpleChange } from '@angular/core';
import { turnoDia } from 'src/app/data/dia';
import { turnoNoche } from 'src/app/data/noche';
import { listaHoy } from 'src/app/data/reservaTurno';
import { turnoTarde } from 'src/app/data/tarde';
import { Filtrado } from 'src/app/model/Filtrado';
import { Turno } from 'src/app/model/Turno';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservaComponent implements OnInit {
  // debocrear una lisa y a esta la filtro en las otras
  lista1:Turno[] = turnoDia;
  lista2:Turno[] = turnoTarde;
  lista3:Turno[] = turnoNoche;
  turnoDia:boolean = false;
  turnoTarde:boolean = false;
  turnoNoche:boolean = false;

  listaReserva: Filtrado[] = listaHoy;




  // no se que es esto
  app = document.getElementById('inputDate');


  // el array debe tener los dato ya filtraos por defecto 

  constructor() {

  }

  ngOnInit(): void {
    
  }


  cambioTurno(turno:number):void {
    if(turno===0) {
      this.turnoDia=false;
      this.turnoTarde=false;
      this.turnoNoche=false;
    }
    if(turno===1) {
      this.turnoDia=true;
      this.turnoTarde=false;
      this.turnoNoche=false;
    }
    if(turno===2) {
      this.turnoDia=false;
      this.turnoTarde=true;
      this.turnoNoche=false;
    }
    if(turno===3) {
      this.turnoDia=false;
      this.turnoTarde=false;
      this.turnoNoche=true;
    }
  }

  mostrar():boolean {
    return true;
  }
}
