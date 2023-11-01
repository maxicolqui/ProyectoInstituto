import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){

  }

  ngOnInit(): void {
    
  }

  mostrar(){
    let date: Date = new Date("yyyy-MM-dd");
    console.log("Date = " + date);
  }

}
