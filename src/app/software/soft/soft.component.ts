import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materia } from 'src/app/models/Materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  listaMateria: Materia[] = [];
  carrera: string;

  constructor(private materiaService: MateriaService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.carrera = param.get('c');
    });
    this.verCarrera(this.carrera);
  }

  verCarrera(c: string): void {
    this.materiaService.viewCarrera(c).subscribe(resp => {
      this.listaMateria = resp;
    });
  }


}
