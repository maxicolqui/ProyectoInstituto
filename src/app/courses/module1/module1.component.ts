import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listaMember } from 'src/app/data/datos';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  listaMember1: Member[] = listaMember;
    title = 'team';
  t:any;
  constructor( private router : Router){

  }

  ngOnInit(): void {
    console.log(listaMember1)
  }

}
