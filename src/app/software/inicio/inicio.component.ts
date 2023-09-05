import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user:string = '';
  password:string = '';
  error:boolean = false;

  constructor(private route: Router) {

  }

  ngOnInit(): void {
    
  }

  validate():void {
    console.log(this.user);
    if (this.user==='admin' && this.password==='admin') {
      this.route.navigate(['pagina']);

    } else {
      this.error=true;
    }
  }

  
}
