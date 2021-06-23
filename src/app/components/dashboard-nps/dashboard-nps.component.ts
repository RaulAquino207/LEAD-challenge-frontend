import { Component, ElementRef, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions, SingleDataSet } from 'ng2-charts';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './dashboard-nps.component.html',
  styleUrls: ['./dashboard-nps.component.scss']
})
export class DashboardNpsComponent implements OnInit {

  constructor(private service : FormServiceService) { }

  detratores : number = 0;
  neutros : number = 0;
  promotores : number = 0;

  nps_value : number = 0;

  public doughnutChartLabels: Label[] = ['Detratores', 'Neutros', 'Promotores'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Array<any> = [];
  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
    afterDraw(chart) {
      const ctx = chart.ctx;

      var txt2 : any;   
      
      console.log(chart.config.data?.datasets?.map((result) =>{
        // console.log('data',result.data![2]);  

        for (let index = 0; index < result.data!.length; index++) {
          
          console.log('value');
          console.log(result.data![index]);
        }
        }
      ));

      txt2 = chart.config.data
  
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
  
      ctx!.fillText(txt2, centerX, centerY);
  
    }
  }];

  ngOnInit(): void {

    this.service.infos_nps().subscribe((result) => {
      this.handleData(result);
      this.calculateNps(result);
      this.doughnutChartData = [
        [this.detratores, this.neutros, this.promotores]
      ];
      this.doughnutChartColors = [
        {backgroundColor:['#DC143C', '#FFFF00', '#7FFF00']},
      ]
      console.log(result);

    })
    
    
  }

  calculateNps(data : any){
    console.log(data.length);
    let percent_promot = this.promotores;
    let percent_detrat = this.detratores;

    console.log('promotores', this.promotores);
    console.log('detratores', this.detratores);

    this.nps_value = ((percent_promot / data.length) - (percent_detrat / data.length)) * 100;
    this.nps_value = Math.ceil(this.nps_value);
    console.log(this.nps_value);

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
