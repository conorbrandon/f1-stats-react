import { ErgastStandingList } from "./ErgastStandingList"


export interface ErgastStandingsTable {
  StandingsTable: {
    season: string,
    StandingsLists: ErgastStandingList[]
  }
}