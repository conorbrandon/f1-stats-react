import { ErgastCircuitTable } from "./ErgastCircuitTable";
import { ErgastRaceTable } from "./ErgastRaceTable";

export interface ErgastTables {
  SeasonTable: any,
  RaceTable?: ErgastRaceTable,
  StandingsTable: any,
  DriverTable: any,
  ConstructorTable: any,
  CircuitTable?: ErgastCircuitTable,
  StatusTable: any
}