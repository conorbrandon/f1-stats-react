import { ErgastRace } from "./ErgastRace";

export interface ErgastRaceTable {
  RaceTable: {
    season?: string,
    round?: string,
    driverId?: string,
    constructorId?: string,
    circuitId?: string,
    Races: ErgastRace[]
  }
}