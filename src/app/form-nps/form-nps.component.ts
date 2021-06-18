import { Component, OnInit } from '@angular/core';
import { Vote } from '../models/vote.model';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-form-nps',
  templateUrl: './form-nps.component.html',
  styleUrls: ['./form-nps.component.scss']
})
export class FormNpsComponent {
  title = 'net-promoter-score';
  list : number[] = [1,2,3,4,5,6,7,8,9,10];
  test_id = '4c224fb7-7c71-4cfd-a884-1be410206630';
  value : number = 0;

  // constructor(private service : FormServiceService) { }
  constructor(private service : FormServiceService) {
   }
  

  onClick(value : number){
    // this.bntStyle = 'btn-change';
    this.value = value
  }

  sendReply(){
    console.log(this.test_id);
    console.log(this.value);

    const valueEmit : Vote = {description : this.value}

    this.service.add_vote(this.test_id, valueEmit).subscribe((result) => {
      console.log('result', result);
    }, (error) => {
      console.log('error', error);
    });
  }

}
