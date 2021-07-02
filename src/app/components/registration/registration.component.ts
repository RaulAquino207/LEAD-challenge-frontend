import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  email! : string;
  name! : string;
  password! : string;
  confirmation_password! : string;


  constructor(private router : Router, private service : FormServiceService) { }

  loginSubmit(){
    console.log(this.email, this.name, this.password, this.confirmation_password);
    this.service.createUser(this.email, this.name, this.password, this.confirmation_password).subscribe((result) => {
      console.log(result);

      this.router.navigateByUrl('login');
    }, ({error}) => {
      console.log(error);
      alert(error.message);
    })
  }

}
