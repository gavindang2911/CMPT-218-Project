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
  // dataDefault: Array<any>;
  // dataFederal= [];
  sortedColumn: string;
  // @Input() defaultFilter;
  @Input() dataDefault;
  // @Input() dataFederal;
  defaultFilter: Stats;

  constructor(private ps: DataService, private fs: FilterService) {
    this.defaultFilter = fs.filter;
  }

  ngOnInit(): void {
  }


}
