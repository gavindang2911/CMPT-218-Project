import { Injectable } from '@angular/core';
import DEFAULT_FILTER, { Stats } from './stats.type';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filter: Stats;
  constructor() {
    this.filter = DEFAULT_FILTER;
    let date = new Date();
    let day = date.getDate() - 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    this.filter.startdate = year + '-' + month + '-' + '-' +day;
  }
}
