import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FilterService } from '../filter.service';
import { Stats } from '../stats.type';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements OnInit {
  // dataDefault: Array<any>;
  // dataFederal= [];
  sortedColumn: string;
  // @Input() defaultFilter;
  @Input() saveFilterData;
  // @Input() dataFederal;
  @Input() filter: Stats;

  constructor(private ps: DataService, private fs: FilterService) {
  }

  ngOnInit(): void {
  }
}
