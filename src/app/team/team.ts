import {Link} from '../competition/competition';

export interface Team {
  code: string;

  crestUrl: string;
  name: string;
  shortName: string;
  squadMarketValue: string;
  _links: Link;
}
