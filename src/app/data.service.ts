import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterService } from './filter.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private fs: FilterService) {
  }

  getDataDefault(): Observable<Object> {
    return this.http.get(`https://api.opencovid.ca/summary?loc=${this.fs.filter.location}&after=${this.fs.filter.startdate}&before=${this.fs.filter.enddate}`);
  }
}
