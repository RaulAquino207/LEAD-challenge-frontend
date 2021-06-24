import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { FormServiceService } from 'src/app/services/form-service.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {

  constructor( private service : FormServiceService) { }

  // detratores_01 : number = 0;
  // detratores_02 : number = 0;
  // detratores_03 : number = 0;
  // detratores_04 : number = 0;
  // detratores_05 : number = 0;
  // detratores_06 : number = 0;
  // neutros_07 : number = 0;
  // neutros_08 : number = 0;
  // promotores_09 : number = 0;
  // promotores_10 : number = 0;

  detratores_01 : number = 10;
  detratores_02 : number = 80;
  detratores_03 : number = 60;
  detratores_04 : number = 10;
  detratores_05 : number = 20;
  detratores_06 : number = 50;
  neutros_07 : number = 50;
  neutros_08 : number = 30;
  promotores_09 : number = 20;
  promotores_10 : number = 10;


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
  // public barChartData: ChartDataSets[] = [];
  // public barChartColors: Colors[] = [];


  public barChartData: ChartDataSets[] = [
    { data: [
      this.detratores_01,
      this.detratores_02,
      this.detratores_03,
      this.detratores_04,
      this.detratores_05,
      this.detratores_06,
      0,
      0,
      0,
      0,
    ], label:"Detractors"},
    { data: [
      0,
      0,
      0,
      0,
      0,
      0,
      this.neutros_07,
      this.neutros_08,
      0,
      0,
    ], label:"Passives"},
    { data: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      this.promotores_09,
      this.promotores_10,
    ], label:" Promoters"},
  ];

  public barChartColors = [
    {backgroundColor: '#DC143C'},
    {backgroundColor: '#FFFF00'},
    {backgroundColor: '#7FFF00'}
  ]


  ngOnInit(): void {

    this.service.infos_nps().subscribe((result) => {
      this.handleData(result);
      this.barChartData = [
        { data: [
          this.detratores_01,
          this.detratores_02,
          this.detratores_03,
          this.detratores_04,
          this.detratores_05,
          this.detratores_06,
          0,
          0,
          0,
          0,
        ], label:"Detractors"},
        { data: [
          0,
          0,
          0,
          0,
          0,
          0,
          this.neutros_07,
          this.neutros_08,
          0,
          0,
        ], label:"Passives"},
        { data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          this.promotores_09,
          this.promotores_10,
        ], label:" Promoters"},
      ]
      // this.barChartColors = [
      //   {backgroundColor: '#DC143C'},
      //   {backgroundColor: '#FFFF00'},
      //   {backgroundColor: '#7FFF00'},
      // ]
    })
  }

  handleData(data: any) {
    for (let index = 0; index < data.length; index++) {
          switch (data[index]) {
          case 1:
            this.detratores_01++;
            break;
          case 2:
            this.detratores_02++;
            break;
          case 3:
            this.detratores_03++;
            break;
          case 4:
            this.detratores_04++;
            break;
          case 5:
            this.detratores_05++;
            break;
          case 6:
            this.detratores_06++;
            break;
          case 7:
            this.neutros_07++;
            break;
          case 8:
            this.neutros_08++;
            break;
          case 9:
            this.promotores_09++;
            break;
          case 10:
            this.promotores_10++;
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

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40 ];
  // }

}
