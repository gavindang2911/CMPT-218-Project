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

  constructor() {
  }

  ngOnInit() {
  }
}
