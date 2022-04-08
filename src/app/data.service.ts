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
    return this.http.get(`https://api.opencovid.ca/summary?loc=${this.fs.filter.location}&after=${this.fs.filter.startdate}&before=${this.fs.filter.enddate}`);
  }
}
