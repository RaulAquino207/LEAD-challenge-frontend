import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterContentChecked {

  currentRoute = '';
  loginRoute = '/login';
  homeRoute = '/home';
  registrationRoute = '/registration';


  constructor(private router : Router) { }


  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  ngAfterContentChecked() {
    this.currentRoute = this.router.url;
  }


}
