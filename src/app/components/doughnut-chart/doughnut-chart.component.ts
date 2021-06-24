import { Component, ElementRef, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions, SingleDataSet } from 'ng2-charts';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private service : FormServiceService) { }

  detratores : number = 0;
  neutros : number = 0;
  promotores : number = 0;

  public doughnutChartLabels: Label[] = ['Detratores', 'Neutros', 'Promotores'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Array<any> = [];
  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
    afterDraw(chart) {
      const ctx = chart.ctx;

      var nps_value : any;

      chart.config.data?.datasets?.map((result) =>{
        // console.log('data',result.data![2]);
        let aux = 0;
        let percent_detrat = 0;
        let percent_promot = 0;
        for (let index = 0; index < result.data!.length; index++) {
          aux = aux + Number(result.data![index])
        }

        for (let index = 0; index < result.data!.length; index++) {

          // console.log(result.data![index]);

          if(index == 0){
            percent_detrat = Number(result.data![index]) / aux
          }else if(index == 2){
            percent_promot = Number(result.data![index]) / aux
          }
        }

        nps_value = (percent_promot - percent_detrat) * 100;
        nps_value = Math.ceil(nps_value);

        }
      );

      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

      ctx!.fillText(nps_value, centerX, centerY);

    }
  }];

  ngOnInit(): void {

    this.service.infos_nps().subscribe((result) => {
      this.handleData(result);
      this.doughnutChartData = [
        [this.detratores, this.neutros, this.promotores]
      ];
      this.doughnutChartColors = [
        {backgroundColor:['#DC143C', '#FFFF00', '#7FFF00']},
      ]
      // console.log(result);

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


