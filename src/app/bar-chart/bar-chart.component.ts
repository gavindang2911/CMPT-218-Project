import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { canada_cal, hr_cal, prov_cal } from '../calculation.pipe';
import { DataService } from '../data.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnChanges {
  province = [];
  dataSet = [];
  temp;
  @Input() dataDefault;
  temp2;

  dataDefault1 = [];
  // dataFederal;

  title = 'angular-ng2-charts-demo';
  myChart;
  // barChartData = {
  //   labels: [],
  //   datasets: [],
  // };
  // chartOptions: ChartOptions = {
  //   responsive: true,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'Provincial Total',
  //     },
  //   },
  // };

  constructor(private ps: DataService, private fs: FilterService) {}

  ngOnInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  ngOnChanges(): void {
    let arr = [];
    for (const key in this.fs.filter) {
      if (this.fs.filter[key] == true) {
        arr.push(key);
      }
    }
    this.myChart.data.labels = [];
    this.myChart.data.datasets = [];
    if (this.fs.filter.location == 'canada') {
      this.dataDefault = canada_cal(this.dataDefault);
    } else if (this.fs.filter.location == 'prov') {
      this.dataDefault = prov_cal(this.dataDefault);
    } else {
      this.dataDefault = hr_cal(this.dataDefault);
    }
    for (let i = 0; i < arr.length; i++) {
      let obj = {
        label: '',
        data: [],
      };

      this.dataDefault.forEach((e) => {
        if (i == 0) {
          this.myChart.data.labels.push(e.province);
        }
        obj.label = arr[i];
        obj.data.push(e[arr[i]]);
      });
      this.myChart.data.datasets.push(obj);

    }
    this.myChart.update();
  }

  // initChart(chartData: any) {
  //   Object.values(chartData).forEach(e => {
  //     this.temp = e;
  //     console.log(this.temp);
  //     this.barChartData.labels.push(this.temp.province);
  //     this.fs.filter
  //   })
  //   this.barChartData = {
  //     labels :  [],
  //     datasets : [
  //       { label: 'Cases', data: [] },
  //       { label: 'Deaths', data: []},
  //       { label: 'Recover', data: [] },
  //     ]
  //   }
  // }
}
