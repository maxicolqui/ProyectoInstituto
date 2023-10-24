import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit{
  
  habilitarForm:boolean=false;
  habilitarReserva:boolean=false;
  habilitarEliminar:boolean=false;
  
  
  constructor(){

  }


  ngOnInit(): void {
    
  }

  mostrarFormulario():void{
    this.habilitarForm=true;
  }
  mostrarReserva():void{
    this.habilitarReserva=true;
  }
  
  mostrarEliminar():void{
    this.habilitarEliminar=true;
  }

}
