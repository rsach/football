import {Component, Input, OnInit} from '@angular/core';
import {CompetitionsService} from '../competitions/competitions.service';
import {Observable} from 'rxjs';
import {a} from '@angular/core/src/render3';
import {Competition} from './competition';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  @Input() competition: Competition;
  constructor(
  ) { }

  ngOnInit() {
    }

}
