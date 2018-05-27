import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeagueComponent} from './league/league.component';
import {CompetitionsComponent} from './competitions/competitions.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  {path: '', component: CompetitionsComponent},
  {path: ':cid/league', component: LeagueComponent},
  {path: ':tid/team', component: TeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
