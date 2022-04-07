import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // dataDefault: Array<any>;
  // dataFederal= [];
  sortedColumn: string;
  @Input() defaultFilter;
  @Input() dataDefault;
  @Input() dataFederal;

  constructor(private ps: DataService) {}

  ngOnInit(): void {
    // this.dataDefault = this.ps.getDataDefault();
    // this.ps.getDataFederal().subscribe((observer: any) => {
    //   observer.summary.forEach((e: any) => {
    //     this.dataFederal.push(e);
    //   });
    // });
  }


}
