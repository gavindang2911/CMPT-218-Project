import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private http: HttpClient) {
  }

  getHistory(): Observable<Object> {
    return this.http.get('https://218.selfip.net/apps/DlcvZDIxKs/collections/history/documents/');
  }

  add(save) {
    return this.http.post(
      'https://218.selfip.net/apps/DlcvZDIxKs/collections/history/documents/',
      { "key": Date.now(), "data": save }
    );
  }
}
