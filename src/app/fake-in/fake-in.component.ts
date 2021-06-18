import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fake-in',
  templateUrl: './fake-in.component.html',
  styleUrls: ['./fake-in.component.scss']
})
export class FakeInComponent{

  email! : string;

  constructor(private router : Router) { }

  email_submit(){
    console.log(this.email);
    this.router.navigateByUrl('nps');
  }

}
