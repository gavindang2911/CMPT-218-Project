import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = [];
  temp;

  month;
  day;
  year;
  constructor(private http: HttpClient) {
    [this.month, this.day, this.year] = this.getDateDefault();
  }

  //   setTimeout(function getDataDefault(date: string, end?: string), 1000);
  //   getDataDefault(date: string, end?: string) {
  //     let url = `https://api.opencovid.ca/summary?loc=prov&date=${date}`;
  //   this.http.get<Object>(url).subscribe((data) => {
  //     if (data != undefined) {
  //       this.temp = data;

  //       this.temp.summary.forEach((e: any) => {
  //         this.data.push(e);
  //       });
  //       console.log(this.data);
  //       console.log(this.data.length);
  //     }
  //   });

  //   console.log(this.data);
  //   console.log(this.data.length);
  //   return this.data;
  // }
  // }

  // setTimeout(() => {
  // let url = `https://api.opencovid.ca/summary?loc=prov&date=${date}`;
  // this.http.get<Object>(url).subscribe((data) => {
  //   if (data != undefined) {
  //     this.temp = data;

  //     this.temp.summary.forEach((e: any) => {
  //       this.data.push(e);
  //     });
  //     return this.data;
  //   }
  //   else {
  //     return this.data;
  //   }
  // });
  // }, 1000);
  getDateDefault() {
    let date = new Date();
    let day = date.getDate() - 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + '-' + month + '-' + year;
  }
  getDataDefault(date: string, end?: string) {
    return this.http.get(`https://api.opencovid.ca/summary?date=${date}`);
  }

  getDataRegional(date: string) {
    return this.http.get(
      `https://api.opencovid.ca/summary?loc=hr&date=${date}`
    );
  }

  getDataFederal(date: string) {
    return this.http.get(
      `https://api.opencovid.ca/summary?loc=canada&date=${date}`
    );
  }
}
