import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FilterService } from './filter.service';
import DEFAULT_FILTER, { Stats } from './stats.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Covid Tracker';
  defaultFilter:Stats;
  dataDefault = [];
  d: any;

  constructor(private ps: DataService, private fs: FilterService) {
    this.defaultFilter = fs.filter;
  }

  ngOnInit() {
    this.ps.getDataDefault().subscribe((data) => {
      this.d = data;
      this.dataDefault = this.d.summary.map((e) => e);
      // console.log(this.DataArr);
    });
  }

  updateStats(newStats: Stats) {
    this.defaultFilter = newStats;
    return this.ps.getDataDefault().subscribe((data) => {
      this.d = data;
      this.dataDefault = this.d.summary.map((e) => e);
      console.log(this.dataDefault);
    });
  }
}
