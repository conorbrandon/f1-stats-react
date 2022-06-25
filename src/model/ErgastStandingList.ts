import { ErgastConstructorStanding } from "./ErgastConstructorStanding";
import { ErgastDriverStanding } from "./ErgastDriverStanding";

export interface ErgastStandingList {
  season: string,
  round: string,
  DriverStandings?: ErgastDriverStanding[],
  ConstructorStandings?: ErgastConstructorStanding[]
}