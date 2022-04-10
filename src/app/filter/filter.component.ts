import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { canada_cal, hr_cal, prov_cal } from '../calculation.pipe';
import { DataService } from '../data.service';
import { FilterService } from '../filter.service';
import { HistoryService } from '../history.service';
import SaveData from '../SaveData';
import { convertString } from '../stats.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  clicked = false;
  clicked2 = true;
  defaultFilter;
  @Input() dataDefault;
  @Output() onFilterChange = new EventEmitter();
  form!: FormGroup;

  constructor(
    private fs: FilterService,
    private router: Router,
    private hs: HistoryService
  ) {
    this.defaultFilter = this.fs.filter;
  }

  onChange(e) {
    if (Date.parse(e.startdate) > Date.parse(e.enddate)) {
      window.alert('Invalid start day');
    } else {
      this.defaultFilter.cases = <boolean>e.cases;
      this.defaultFilter.cumulative_cases = <boolean>e.cumulative_cases;
      this.defaultFilter.deaths = <boolean>e.deaths;
      this.defaultFilter.cumulative_deaths = <boolean>e.cumulative_deaths;
      this.defaultFilter.recovered = <boolean>e.recovered;
      this.defaultFilter.cumulative_recovered = <boolean>e.cumulative_recovered;
      this.defaultFilter.location = <string>e.location;
      this.defaultFilter.startdate = <string>e.startdate;
      this.defaultFilter.enddate = <string>e.enddate;
      this.onFilterChange.emit(this.defaultFilter);
    }
  }

  ngOnInit(): void {
    let day: Date = new Date(new Date());
    day.setDate(new Date().getDate() - 1);
    let date: string = day.toISOString().split('T')[0];

    this.form = new FormGroup({
      cases: new FormControl(true),
      cumulative_cases: new FormControl(false),
      deaths: new FormControl(true),
      cumulative_deaths: new FormControl(false),
      recovered: new FormControl(true),
      cumulative_recovered: new FormControl(false),
      location: new FormControl('prov'),
      startdate: new FormControl(date),
      enddate: new FormControl(date),
    });
  }

  saveData() {
    // this.clicked2 = true;

    let save: SaveData = new SaveData();
    save.time_save = new Date().toLocaleString();
    for (const key in this.fs.filter) {
      if (this.fs.filter[key] == true) {
        save.stat.push(convertString(key));
      }
    }
    if (this.fs.filter.location == 'canada') {
      save.location.push('Federal');
    } else if (this.fs.filter.location == 'prov') {
      save.location.push('Province');
    } else {
      save.location.push('Province');
      save.location.push('Regional');
    }

    save.time.push(this.fs.filter.startdate);
    save.time.push(this.fs.filter.enddate);

    console.log(save);

    this.hs.add(save).subscribe((data) => {
      this.router.navigateByUrl('/history');
    });
  }

  actionMethod() {
    this.clicked2 = false;
  }
}
