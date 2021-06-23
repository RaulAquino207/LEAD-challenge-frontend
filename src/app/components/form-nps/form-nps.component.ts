import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vote } from '../../models/vote.model';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-form-nps',
  templateUrl: './form-nps.component.html',
  styleUrls: ['./form-nps.component.scss']
})
export class FormNpsComponent {
  title = 'net-promoter-score';
  list : number[] = [1,2,3,4,5,6,7,8,9,10];
  id! : string;
  value : number = 0;

  // constructor(private service : FormServiceService) { }
  constructor(private service : FormServiceService, private route: ActivatedRoute, private router : Router) {

    const { email } = this.route.snapshot.queryParams;
    console.log(email);
    this.router.navigate([], {
      queryParams: {
        'email': null,
      },
      queryParamsHandling: 'merge'
    })

    this.service.verify_email(email).subscribe((result) => {
      const { status, user } = result;
      if(status == false){
        this.router.navigate(['already-answered']);
      } else {
        if (user.status == true){
          this.router.navigate(['already-answered']);
        } else {
          this.id = user.id;
        }
      }
    })

   }


  onClick(value : number){
    // this.bntStyle = 'btn-change';
    this.value = value
  }

  sendReply(){
    console.log(this.id);
    console.log(this.value);

    const valueEmit : Vote = {description : this.value}

    this.service.add_vote(this.id, valueEmit).subscribe((result) => {
      console.log('result', result);
      this.router.navigateByUrl('answer-saved');
    }, (error) => {
      console.log('error', error);
    });
  }

}
