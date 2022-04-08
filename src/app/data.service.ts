import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private fs: FilterService) {
  }

  getDataDefault() {
    console.log(this.fs.filter)
    console.log(this.fs.filter.location)
    console.log(this.fs.filter.startdate)
    console.log(this.fs.filter.enddate)
    return this.http.get(`https://api.opencovid.ca/summary?loc=${this.fs.filter.location}&after=${this.fs.filter.startdate}&before=${this.fs.filter.enddate}`);
  }
}
