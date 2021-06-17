import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'net-promoter-score';

  list : number[] = [1,2,3,4,5,6,7,8,9,10];

}
