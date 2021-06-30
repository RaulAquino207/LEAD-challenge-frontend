import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-fake-in',
  templateUrl: './fake-in.component.html',
  styleUrls: ['./fake-in.component.scss']
})
export class FakeInComponent{

  email! : string;
  password! : string;

  constructor(private service : FormServiceService, private router : Router) { }

  loginSubmit(){


      this.service.login(this.email, this.password).subscribe((result) => {
        const {access_token } = result;
          console.log('access_token', access_token);
          localStorage.setItem("token", access_token);
      })

    // this.service.verify_email(this.email).subscribe((result) => {
    //   console.log('result', result);
    //   const { status, user } = result;

    //   if(user.tag == 'admin'){
    //     console.log('entrou nesse IF');
    //     this.router.navigate(['dashboard']);
    //   }
    //   if(status == false){
    //     this.router.navigate(['already-answered']);
    //   } else {
    //     if (user.status == true){
    //       this.router.navigate(['already-answered']);
    //     }
    //   }
    // })


    // this.router.navigate(['nps'], {queryParams : {'email' : this.email}});
  }

}
