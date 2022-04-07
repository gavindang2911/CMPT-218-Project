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
  filter = [];
  temp;
  @Input() defaultFilter;
  // @Input() dataDefault;
  // @Input() dataFederal;
  dataDefault;
  dataFederal;

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
        { label: 'Cases', data: [], tension: 0.5 },
        { label: 'Deaths', data: [], tension: 0.5 },
        { label: 'Recover', data: [], tension: 0.5 },
      ]
    }
  }

  ngOnInit(): void {


    this.ps.getDataDefault(this.ps.getDateDefault()).subscribe((data: any) => {

      data.summary.forEach((e: any) => {

        this.barChartData.labels.push(e.province); // A
        this.barChartData.datasets[0].data.push(e.cases)
        this.barChartData.datasets[1].data.push(e.deaths)
        this.barChartData.datasets[2].data.push(e.recovered)
      });

    });

    // Object.keys(this.defaultFilter).forEach(e => {
    //   console.log(e)
    //   this.barChartData.labels.push(e)
    // })

  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName == 'defaultFilter') {
        // const change = changes[propName].currentValue;
        // console.log(change);
        // console.log(change.length);

        // for (let i = 0; i < change.length; i++) {
        //   console.log('asdasd');

        // }
        const change = changes[propName].currentValue;
        // Object.values(change).forEach(key => {
        //   // console.log(change[key])
        //   console.log(key)
        // })
        this.filter = [];
        Object.keys(change).forEach(e => {
          if (change[e] == true) {
            this.filter.push(e)
          }
        });
        // console.log(this.filter);
        // console.log(Object.keys(change).length);
      }
    }

  }
}
