export interface Competition {
  _links: Link;
  id: number;
  caption: string;
  league: string;
  year: string;
  currentMatchday: number;
  numberOfMatchdays: number;
  numberOfTeams: number;
  numberOfGames:  number;
  lastUpdated: Date;
}


export  interface  Link {
  self?: Href;
  team?: Href;
  fixtures?: Href;
  leagueTable?: Href;
}


export interface Href {
  href: string;
}
