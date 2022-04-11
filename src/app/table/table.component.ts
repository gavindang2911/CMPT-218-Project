import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FilterService } from '../filter.service';
import { Stats } from '../stats.type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  sortedColumn: string;
  dataDefault = [];
  d: any;

  defaultFilter: Stats;

  constructor(private ps: DataService, private fs: FilterService) {
    this.defaultFilter = fs.filter;
  }

  ngOnInit(): void {
    this.ps.getDataDefault().subscribe((data) => {
      this.d = data;
      this.dataDefault = this.d.summary.map((e) => e);
    });
  }

  updateStats(newStats: Stats) {
    this.defaultFilter = newStats;
    return this.ps.getDataDefault().subscribe((data) => {
      this.d = data;
      this.dataDefault = this.d.summary.map((e) => e);
    });
  }
}
