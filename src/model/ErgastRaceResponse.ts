import { ErgastMetadata } from "./ErgastMetadata";
import { ErgastRaceTable } from "./ErgastRaceTable";

export interface ErgastRaceResponse {
  MRData: ErgastRaceTable & ErgastMetadata
};