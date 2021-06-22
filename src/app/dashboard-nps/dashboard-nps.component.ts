import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './dashboard-nps.component.html',
  styleUrls: ['./dashboard-nps.component.scss']
})
export class DashboardNpsComponent implements OnInit {
  // Doughnut
  // doughnutChartData! : any;

  constructor(private service : FormServiceService) { }

  detratores : number = 0;
  neutros : number = 0;
  promotores : number = 0;

  public doughnutChartLabels: Label[] = ['Detratores', 'Neutros', 'Promotores'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.service.infos_nps().subscribe((result) => {
      this.handleData(result);
      this.doughnutChartData = [
        [this.detratores, this.neutros, this.promotores]
      ];
      console.log(result);
    })
  }

  handleData(data: any){

    for (let index = 0; index < data.length; index++) {
          switch (data[index]) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            this.detratores++;
            break;
          case 7:
          case 8:
            this.neutros++;
            break;
            
          case 9:
          case 10:
            this.promotores++;
            break;
        }

      }

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}