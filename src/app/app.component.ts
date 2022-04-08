import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FilterService } from './filter.service';
import DEFAULT_FILTER, { FetchData, Stats } from './stats.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Covid Tracker';
  defaultFilter:Stats;
  dataDefault = [];

  constructor(private ps: DataService, private fs: FilterService) {
    this.defaultFilter = fs.filter;
  }

  ngOnInit() {

    this.ps.getDataDefault().subscribe((data: any) => {
      data.summary.forEach((e: any) => {
        this.dataDefault.push(e);
      });
      console.log(this.dataDefault);

    });
  }

  updateStats(newStats: Stats) {
    this.defaultFilter = newStats;
    this.dataDefault = [];
    this.ps.getDataDefault().subscribe((data: any) => {
      data.summary.forEach((e: any) => {
        this.dataDefault.push(e);
      });
    });
  }
}
