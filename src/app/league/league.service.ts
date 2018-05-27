import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {League} from './league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(
    private http: HttpClient
  ) { }

  get(cid): Observable<any> {
    return this.http.get(`api/competitions/${cid}/leagueTable`);
  }
}
