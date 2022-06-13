import { ErgastRace } from "./ErgastRace";

export interface ErgastRaceTable {
  RaceTable: {
    season: string,
    round?: string,
    Races: ErgastRace[]
  }
}