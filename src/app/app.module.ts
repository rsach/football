import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import {CompetitionsService} from './competitions/competitions.service';
import {LeagueComponent} from './league/league.component';
import {TeamComponent} from './team/team.component';
import {LeagueService} from './league/league.service';
import {TeamService} from './team/team.service';
import {MatCardModule} from '@angular/material';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CompetitionsComponent} from './competitions/competitions.component';
import {PlayerComponent} from './player/player.component';
import {PlayerService} from './player/player.service';
import {FixtureService} from './fixture/fixture.service';
import {FixtureComponent} from './fixture/fixture.component';
import {I1} from './intercept/intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    LeagueComponent,
    TeamComponent,
    CompetitionsComponent,
    PlayerComponent,
    FixtureComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CompetitionsService,
    LeagueService,
    TeamService,
    PlayerService,
    FixtureService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I1,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
