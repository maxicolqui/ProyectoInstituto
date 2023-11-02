import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from 'src/app/models/Profesor';
import { Reserva } from 'src/app/models/Reserva';
import { ProfesorService } from 'src/app/services/profesor.service';
import { ReservaService } from 'src/app/services/reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  idCourseEnd: string;
  reservas:Reserva[] = [];
  listaReserva:Reserva[]=[];
  ocultar: boolean = true;

  constructor(private reservaService: ReservaService, private activateRouter:ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(param => {
      this.idCourseEnd = String(+ param.get('e.dni'))
      console.log(this.idCourseEnd)
    })

    this.reservaService.viewAll().subscribe(response => {
      this.listaReserva = response;
      console.log("lista hfjkdsa:", this.listaReserva);
      for (const e of this.listaReserva) {
        if(e.profesor.dni == this.idCourseEnd) {
          this.reservas.push(e);
        }
      }
      console.log(this.reservas)
      //this.lis = this.listaReserva.find(p => p.profesor.dni === this.idCourseEnd);
      //console.log("solo reserva", this.lis)
    })
  }
  
  eliminar(id: number): void {
    this.reservaService.delete(id).subscribe(Response => {

    })
    this.verTodo()
    this.ocultar = false;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        

        )
        this.ocultar = true;
      }
    })

    
    

  }
  
  verTodo(): void {
      
      //this.lis = this.listaReserva.find(p => p.profesor.dni === this.idCourseEnd);
      //console.log("solo reserva", this.lis)
  }
 
  
}
