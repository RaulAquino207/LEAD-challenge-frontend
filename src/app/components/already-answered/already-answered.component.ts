import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-already-answered',
  templateUrl: './already-answered.component.html',
  styleUrls: ['./already-answered.component.scss']
})
export class AlreadyAnsweredComponent{

  constructor(private router : Router) { }
  onClick(){
    this.router.navigateByUrl('home');
  }
}
