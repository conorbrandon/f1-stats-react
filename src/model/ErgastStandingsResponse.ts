import { ErgastMetadata } from "./ErgastMetadata";
import { ErgastStandingsTable } from "./ErgastStandingsTable";


export interface ErgastStandingsResponse {
  MRData: ErgastStandingsTable & ErgastMetadata
}