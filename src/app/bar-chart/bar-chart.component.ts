import {
  Component, OnInit
} from '@angular/core';
import { Chart } from 'chart.js';
import { canada_cal, hr_cal, prov_cal } from '../calculation.pipe';
import { DataService } from '../data.service';
import { FilterService } from '../filter.service';
import { Stats } from '../stats.type';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  temp: any;
  temp2: any;
  dataDefault = [];
  defaultFilter: Stats;

  title = 'angular-ng2-charts-demo';
  myChart: any;
  pieChar: any;

  constructor(private ps: DataService, private fs: FilterService) {
    this.defaultFilter = fs.filter;
  }

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
    const ctx2 = document.getElementById('pieChart') as HTMLCanvasElement;

    this.pieChar = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [],
      },
    });
    this.ps.getDataDefault().subscribe((data) => {
      this.temp = data;
      this.dataDefault = this.temp.summary.map((e) => e);
      this.updateCharts();
    });
  }

  updateStats(newStats: Stats) {
    this.defaultFilter = newStats;
    return this.ps.getDataDefault().subscribe((data) => {
      this.temp2 = data;
      this.dataDefault = this.temp2.summary.map((e) => e);
      this.updateCharts();
    });
  }

  updateCharts() {
    let arr = [];
    for (const key in this.fs.filter) {
      if (this.fs.filter[key] == true) {
        arr.push(key);
      }
    }
    this.myChart.data.labels = [];
    this.myChart.data.datasets = [];
    this.pieChar.data.labels = [];
    this.pieChar.data.datasets = [];
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
          this.pieChar.data.labels.push(e.province);
        }
        obj.label = arr[i];
        obj.data.push(e[arr[i]]);
      });
      this.myChart.data.datasets.push(obj);
      this.pieChar.data.datasets.push(obj);
    }
    this.myChart.update();
    this.pieChar.update();
  }
}
