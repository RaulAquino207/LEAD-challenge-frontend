import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { FormServiceService } from 'src/app/services/form-service.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {

  constructor( private service : FormServiceService) { }

  detratores = [0,0,0,0,0,0,0,0,0,0];
  neutros = [0,0,0,0,0,0,0,0,0,0];
  promotores = [0,0,0,0,0,0,0,0,0,0];


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    legend: { position: 'bottom'},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];

  public barChartColors = [{backgroundColor: '#DC143C'}, {backgroundColor: '#FFFF00'}, {backgroundColor: '#7FFF00'},]

  ngOnInit(): void {

    this.service.infos_nps().subscribe((result) => {
      this.handleData(result);
      this.barChartData = [{
        data : this.detratores, label : 'Detratores'
      },{
        data : this.neutros, label : 'Neutros'
      },{
        data : this.promotores, label : 'Promotores'
      }]
    })
  }

  isInArray(value : any, array: any) {
    return array.indexOf(value) > -1;
  }

  handleData(data: any) {
    console.log(data);
    data.map((value : number) => {
      console.log(value);
      if(this.isInArray(value, [1, 2, 3, 4, 5, 6])){
        this.detratores[value - 1] = this.detratores[value - 1] + 1
      } else if(this.isInArray(value, [7, 8])){
        this.neutros[value - 1] = this.neutros[value - 1] + 1
      } else if (this.isInArray(value, [9, 10])){
        this.promotores[value - 1] = this.promotores[value - 1] + 1
      }
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}