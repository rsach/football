import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(
    private http: HttpClient
  ) { }

  get (tid) {
    return this.http.get(`api/teams/${tid}/fixtures`);
  }
}
