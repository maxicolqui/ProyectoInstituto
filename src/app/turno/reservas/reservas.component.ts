import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  habilitarForm: boolean = false;
  habilitarReserva: boolean = false;
  habilitarEliminar: boolean = false;
  listaProfe: any[] = []
  idCourseEnd: number;
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
      this.idCourseEnd = + param.get('e.dni');
    })


  }
  lis: any[] = []
  mostrarFormulario(): void {
    let lis = this.listaProfe.find(p => p.dni === this.idCourseEnd);
    console.log("lista filtrada:",lis)
    this.habilitarForm = true;
 

  }
  mostrarReserva(): void {
    this.habilitarReserva = true;
  }

  mostrarEliminar(): void {
    this.habilitarEliminar = true;
  }

}
