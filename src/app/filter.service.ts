import { Injectable } from '@angular/core';
import DEFAULT_FILTER, { Stats } from './stats.type';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filter: Stats;
  constructor() {
    this.filter = DEFAULT_FILTER;
    let a: Date = new Date(new Date());
    a.setDate(new Date().getDate() - 1);
    let b: string = a.toISOString().split('T')[0];

    this.filter.startdate = b;
    this.filter.enddate = b;
  }
}
