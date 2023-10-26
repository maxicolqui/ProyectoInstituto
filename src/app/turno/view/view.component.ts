import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   constructor(private profesorService: ProfesorService){

   }

   ngOnInit(): void {
     
   }
}
