import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import SaveData from '../SaveData';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  objectKeys = Object.keys;
  objectValues = Object.values;
  d: any;
  history: SaveData[];
  constructor(private hs: HistoryService) { }

  ngOnInit(): void {
    this.hs.getHistory().subscribe((data) => {
      this.d = data;
      this.history = this.d.map((e) => e.data);
      console.log(this.history)
    });
  }

}
