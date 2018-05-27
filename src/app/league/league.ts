import {Link} from '../competition/competition';

export interface League {
  leagueCaption: string;
  matchday: number;
  standing: Team[];
    __links: Link;
}

export interface Team {
  away: Away;
  crestURI: number;
  draws: number;
  goalDifference: number;
  goals: number;
  goalsAgainst: number;
  home: Home;
  losses: number;
  playedGames: number;
  points: number;
  position: number;
  teamName: string;
  wins: number;
  _links: Link;
}

export interface Away {
  draws: number;
  goals: number;
  losses: number;
  wins: number;
}

export interface Home {
  draws: number;
  goals: number;
  goalsAgainst: number;
  losses: number;
  wins: number;
}
