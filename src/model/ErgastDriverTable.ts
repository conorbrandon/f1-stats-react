import { ErgastDriver } from "./ErgastDriver";

export interface ErgastDriverTable {
  DriverTable: {
    driverId?: string,
    season?: string,
    Drivers: ErgastDriver[]
  }
}