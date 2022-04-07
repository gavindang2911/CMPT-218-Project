import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() defaultFilter

  @Output() onFilterChange = new EventEmitter();

  constructor() { }

  onChange(e: Event) {
    if (e.target) {
      let name = (<HTMLInputElement>e.target).name;
      let value = (<HTMLInputElement>e.target).checked;

      // console.log(name);
      // console.log(value);

      if (name == "startdate") {
        let start = (<HTMLInputElement>e.target).value;
        this.defaultFilter[name] = start;
      } else if (name == "enddate") {
        let end = (<HTMLInputElement>e.target).value;
        this.defaultFilter[name] = end;
      } else {
        this.defaultFilter[name] = value;
      }


      this.onFilterChange.emit({ ...this.defaultFilter });
    }
  }

  ngOnInit(): void {
  }

}
