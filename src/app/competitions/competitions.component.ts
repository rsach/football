import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CompetitionsService} from './competitions.service';
import {Competition} from '../competition/competition';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  list_competitions: Observable<any>;
  constructor(
    private competitions: CompetitionsService
  ) { }

  ngOnInit() {
    this.list_competitions = this.competitions.get();
  }

}
