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
        const {access_token, role, status } = result;
          // console.log("🚀 ~ file: fake-in.component.ts ~ line 22 ~ FakeInComponent ~ this.service.login ~ access_token", access_token);
          // console.log("🚀 ~ file: fake-in.component.ts ~ line 22 ~ FakeInComponent ~ this.service.login ~ role", role);
          localStorage.setItem("token", access_token);
          if(role == 'admin'){
            this.router.navigate(['dashboard']);
          }

          else if(role == 'user'){
            if(status == true){
              this.router.navigate(['already-answered']);
            } else {
              this.router.navigate(['nps'], {queryParams : {'email' : this.email}});
            }
          }

      }, (error) => {
        console.log('error', error);
        alert(error.statusText);
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
