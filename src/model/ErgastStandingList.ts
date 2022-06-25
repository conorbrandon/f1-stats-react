import { ErgastStanding } from "./ErgastStanding";

export interface ErgastStandingList {
  season: string,
  round: string,
  DriverStandings: ErgastStanding[]
}