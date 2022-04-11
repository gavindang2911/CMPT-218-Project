import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HistoryService } from '../history.service';
import SaveData from '../SaveData';
import { convertStat, Stats } from '../stats.type';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  saveFilterData = [];
  d: any;
  temp: any;
  history: SaveData[];
  input: Stats = {
    cases: false,
    cumulative_cases: false,
    deaths: false,
    cumulative_deaths: false,
    recovered: false,
    cumulative_recovered: false,
    location: '',
    startdate: '',
    enddate: '',
  };
  constructor(
    private hs: HistoryService,
    private router: Router,
    private ps: DataService
  ) {}

  ngOnInit(): void {
    this.hs.getHistory().subscribe((data) => {
      this.d = data;
      this.history = this.d.map((e) => e.data);
    });
  }

  deleteThisFilter(e) {
    this.hs.delete(e).subscribe((data) => {
      this.history = this.history.filter((r) => r !== e);
      this.router.navigateByUrl('/history');
    });
  }

  more(e) {
    this.input = {
      cases: false,
      cumulative_cases: false,
      deaths: false,
      cumulative_deaths: false,
      recovered: false,
      cumulative_recovered: false,
      location: '',
      startdate: '',
      enddate: '',
    };

    for (const key in e.stat) {
      Object.keys(this.input).forEach((a) => {
        if (a == convertStat(e.stat[key])) {
          this.input[a] = true;
        }
      });
    }

    if (e.location == 'Federal') {
      this.input.location = 'canada';
    } else if (e.location == 'Province') {
      this.input.location = 'prov';
    } else {
      this.input.location = 'hr';
    }

    this.input.startdate = e.time[0];
    this.input.enddate = e.time[1];

    console.log(this.input);
    this.ps.getDataFromHistory(this.input).subscribe((data) => {
      this.temp = data;
      this.saveFilterData = this.temp.summary.map((e) => e);
    });
  }
}
