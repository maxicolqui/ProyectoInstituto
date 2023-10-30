import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  listaProfe: Profesor[] = [];

   constructor(private profesorService: ProfesorService){

   }

   ngOnInit(): void {
    this.profesorService.viewAll().subscribe(response => {
      this.listaProfe = response;
      console.log("lista en view:", this.listaProfe);
    })
   }


}
