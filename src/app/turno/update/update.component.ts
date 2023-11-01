import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/Profesor';
import { Reserva } from 'src/app/models/Reserva';
import { ProfesorService } from 'src/app/services/profesor.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  listaReserva:Reserva[]=[];
  constructor(private reservaService: ReservaService){
  }

  ngOnInit(): void {
    this.reservaService.viewAll().subscribe(response => {
      this.listaReserva = response;
      console.log("lista de las profesores:", this.listaReserva);
    })
    
  }
}
