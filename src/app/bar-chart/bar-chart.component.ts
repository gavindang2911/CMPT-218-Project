import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnChanges {
  province = [];
  dataSet = [];
  temp;
  @Input() defaultFilter;
  @Input() dataDefault;
  @Input() dataFederal;
  dataDefault1 = [];
  // dataFederal;

  title = 'angular-ng2-charts-demo';

  barChartData = {
    labels: [],
    datasets: []
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Provincial Total',
      },
    },
  };

  constructor(private ps: DataService) {
    this.barChartData = {
      labels :  [],
      datasets : [
      ]
    }
  }

  ngOnInit(): void {


    // this.ps.getDataDefault(this.ps.getDateDefault()).subscribe((data: any) => {

    //   data.summary.forEach((e: any) => {
    //     this.dataDefault1.push(e);
    //     this.barChartData.labels.push(e.province); // A
    //     this.barChartData.datasets[0].data.push(e.cases)
    //     this.barChartData.datasets[1].data.push(e.deaths)
    //     this.barChartData.datasets[2].data.push(e.recovered)
    //   });
    // });
    let x = 1;

    let title = [];
    let object = {
      label:'',
      data: [],
    };
    let barChartData2 = {
      labels: [],
      datasets: []
    };
    Object.keys(this.defaultFilter).forEach(e => {
      if (this.defaultFilter[e] == true && e != 'provincial') {

        this.ps.getDataDefault(this.ps.getDateDefault()).subscribe((response: any) => {
          response.summary.forEach((a: any) => {
            // title.push(a.province)
            if (x == 1) {
              this.barChartData.labels.push(a.province);
            }
            object.data.push(a[e]); // 5514, 0 , 0 , 0 ,339

          });
          object.label = e
          console.log(object.data)
          this.barChartData.datasets.push(object);
          console.log(this.barChartData)
          // barChartData2.labels = title;
          // barChartData2.datasets.push(object);

          // title = [];
          object.label = ''
          object.data = []
          x = x +1;
        });

      }
    })





  }
  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   if (propName == 'defaultFilter') {
        // const change = changes[propName].currentValue;
        // console.log(change);
        // console.log(change.length);

        // for (let i = 0; i < change.length; i++) {
        //   console.log('asdasd');

        // }
        // const changeFilter = changes['defaultFilter'].currentValue;

        // this.dataSet = [];
        // let title = [];
        // let object = {
        //   label:'',
        //   data: [],
        // };
        // let barChartData2 = {
        //   labels: [],
        //   datasets: []
        // };


        // Object.keys(changeFilter).forEach(e => {
        //   if (changeFilter[e] == true && e!= 'provincial') {
        //     // console.log(e);

        //     // object.label = e; // Cases Deaths Recorve
        //     //{ label: 'Cases', data: [], tension: 0.5 },
        //     this.ps.getDataDefault(this.ps.getDateDefault()).subscribe((response: any) => {
        //       response.summary.forEach((a: any) => {
        //         title.push(a.province)
        //         object.data.push(a[e]); // 5514, 0 , 0 , 0 ,339
        //       });
        //       object.label = e
        //       barChartData2.labels = title;
        //       barChartData2.datasets.push(object);
        //       console.log(barChartData2)
        //       title = [];
        //       object.label = ''
        //       object.data = []
        //     });

        //     this.barChartData = barChartData2;

        //   }
        // });

  }
}
