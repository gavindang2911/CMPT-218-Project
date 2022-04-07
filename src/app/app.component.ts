import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import DEFAULT_FILTER, { Stats } from './stats.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Covid Tracker';
  defaultFilter = DEFAULT_FILTER;
  dateDefault;
  dataDefault = [];
  dataFederal = [];

  constructor(private ps: DataService) {}

  ngOnInit() {
    this.dateDefault = this.ps.getDateDefault();

    this.ps.getDataDefault(this.dateDefault).subscribe((data: any) => {
      data.summary.forEach((e: any) => {
        this.dataDefault.push(e);
      });
    });

    this.ps.getDataFederal(this.dateDefault).subscribe((data: any) => {
      data.summary.forEach((e: any) => {
        this.dataFederal.push(e);
      });
    });
  }

  updateStats(newStats: Stats) {
    this.defaultFilter = newStats;
  }
}
