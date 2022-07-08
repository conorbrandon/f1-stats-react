import { ErgastCircuitTable } from "./ErgastCircuitTable";
import { ErgastMetadata } from "./ErgastMetadata";

export interface ErgastCircuitResponse {
  MRData: ErgastMetadata & ErgastCircuitTable
}