import { ErgastSeason } from "./ErgastSeason"

export interface ErgastSeasonTable {
  SeasonTable: {
    driverId?: string,
    constructorId?: string,
    circuitId?: string,
    statudId?: string,
    Seasons: ErgastSeason[]
  }
}