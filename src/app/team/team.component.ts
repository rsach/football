import { Component, OnInit } from '@angular/core';
import {TeamService} from './team.service';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {PlayerService} from '../player/player.service';
import {Team} from './team';
import {Player} from '../player/player';
import {FixtureService} from '../fixture/fixture.service';
import {Fixture} from '../fixture/fixture';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team_details: Team;
  list_player: Player[];
  list_fixtures: Fixture[] = [];

  constructor(
    private teams: TeamService,
    private ar: ActivatedRoute,
    private players: PlayerService,
    private fixtures: FixtureService
  ) { }

  ngOnInit() {
    const a =
    this.ar.params.pipe(
      filter(res => res['tid']),
      map(res => res['tid']),
    )

    a.pipe(
        switchMap(res => this.players.get(res))
      )
      .subscribe(res => this.list_player = res);
      a.pipe(
        switchMap(res => this.teams.get(res))
      )
        .subscribe(res => this.team_details = res);

      a.pipe(
        switchMap(res => this.fixtures.get(res))
      )
        .subscribe(res => {
          this.list_fixtures = res.fixtures;
          this.list_fixtures = this.list_fixtures.sort((a, b) => {
            const c = new Date(a.date);
            const d = new Date(b.date);
            return (c as any) - (d as any);
          }).reverse().slice(0, 5);
          console.log(this.list_fixtures)
        });

  }

}
