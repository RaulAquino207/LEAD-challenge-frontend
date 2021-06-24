import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  email!: string;
  password!: string;

  constructor(private service: FormServiceService, private router: Router) { }

  userSubmission(){
    console.log(this.email);
    console.log(this.password);


  }

}
