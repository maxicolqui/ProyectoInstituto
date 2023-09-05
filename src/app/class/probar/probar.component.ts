import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-probar',
  templateUrl: './probar.component.html',
  styleUrls: ['./probar.component.css']
})
export class ProbarComponent implements OnInit{
  listaCurso: string[]=['HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR'];
  listaNivel: string[]=['Princiapiate', 'intermedio', 'avanzado'];
  listaPago: string[]=['De Pago', 'Gratuito'];
  constructor() {

  }

  ngOnInit(): void {
    
  }

  filtro:boolean = false;
  mostrarFiltro(): void {
    this.filtro = !this.filtro;
  }

}
