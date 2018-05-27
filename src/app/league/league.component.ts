import { Component, OnInit } from '@angular/core';
import {LeagueService} from './league.service';
import {ActivatedRoute} from '@angular/router';

import {filter, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {League} from './league';

// import 'rxjs/operators/filter';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  league_data: League;
  constructor(
    private league: LeagueService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.league_data =
      this.ar
      .params.pipe(
      filter(res => res['cid']),
      map(res => res['cid']),
    switchMap(res => this.league.get(res))

  )
      .subscribe(res => this.league_data = res);
    // this.league.get()
  }

}
