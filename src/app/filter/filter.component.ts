import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  defaultFilter;
  @Output() onFilterChange = new EventEmitter();
  form!: FormGroup;

  constructor( private fs: FilterService) {
    this.defaultFilter = fs.filter;
  }

  onChange(e) {
    // if (e.target) {
    //   let name = (<HTMLInputElement>e.target).name;
    //   let value = (<HTMLInputElement>e.target).checked;

    //   console.log(name);
    //   console.log(value);

    //   if (name == "startdate") {
    //     let start = (<HTMLInputElement>e.target).value;
    //     this.defaultFilter[name] = start;
    //   } else if (name == "enddate") {
    //     let end = (<HTMLInputElement>e.target).value;
    //     this.defaultFilter[name] = end;
    //   } else if (name == "federal") {
    //     this.defaultFilter.location = 'canada';
    //   }  else if (name == "provincial") {
    //     this.defaultFilter.location = 'prov';
    //   }  else if (name == "regional") {
    //     this.defaultFilter.location = 'hr';
    //   }
    //   else {
    //     this.defaultFilter[name] = value;
    //   }

    //   console.log(this.defaultFilter);
    //   this.onFilterChange.emit({ ...this.defaultFilter });
    // }

    if (Date.parse(e.startdate) > Date.parse(e.enddate)) {
      window.alert('Invalid start day');
    } else {
      this.defaultFilter.cases = <boolean>e.cases;
      this.defaultFilter.cumulative_cases = <boolean>(
        e.cumulative_cases
      );
      this.defaultFilter.deaths = <boolean>e.deaths;
      this.defaultFilter.cumulative_deaths = <boolean>(
        e.cumulative_deaths
      );
      this.defaultFilter.recovered = <boolean>(
        e.recovered
      );
      this.defaultFilter.cumulative_recovered = <boolean>(
        e.cumulative_recovered
      );
      this.defaultFilter.location = <string>e.location;
      this.defaultFilter.startdate = <string>e.startdate;
      this.defaultFilter.enddate = <string>e.enddate;
      this.onFilterChange.emit(this.defaultFilter);
    }
  }

  ngOnInit(): void {
    let day: Date = new Date(new Date());
    day.setDate(new Date().getDate() - 2);
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

}
