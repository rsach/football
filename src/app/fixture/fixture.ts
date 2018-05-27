export interface Fixture {
  awayTeamName: string;
  date: Date;
  homeTeamName: string;
  matchday: number;
  odds: number;
  result: Result;
  goalsAwayTeam: number;
  goalsHomeTeam: number;
  halfTime: HalfTime
  status: string;
}


export interface Result {

  goalsHomeTeam: number;
  goalsAwayTeam: number;
  halfTime: HalfTime
}

export interface HalfTime {

  goalsHomeTeam: number;
  goalsAwayTeam: number;
}
