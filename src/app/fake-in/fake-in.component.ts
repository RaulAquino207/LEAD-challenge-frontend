import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-fake-in',
  templateUrl: './fake-in.component.html',
  styleUrls: ['./fake-in.component.scss']
})
export class FakeInComponent{
  
  email! : string;

  constructor(private service : FormServiceService, private router : Router) { }

  emailSubmit(){
    console.log(this.email);

    this.service.verify_email(this.email).subscribe((result) => {
      console.log('result', result);
      const { status, user } = result;
      if(status == false){
        this.router.navigate(['already-answered']);
      } else {
        if (user.status == true){
          this.router.navigate(['already-answered']);
        }
      }
    })


    this.router.navigate(['nps'], {queryParams : {'email' : this.email}});
  }

}
