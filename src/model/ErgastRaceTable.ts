import { ErgastRace } from "./ErgastRace";
import { ErgastMetadata } from "./ErgastMetadata";

export interface ErgastRaceTable {
  RaceTable: {
    season: string,
    round?: string,
    Races: ErgastRace[]
  }
}