import { ErgastMetadata } from "./ErgastMetadata";
import { ErgastSeasonTable } from "./ErgastSeasonTable";

export interface ErgastSeasonResponse {
  MRData: ErgastMetadata & ErgastSeasonTable
}