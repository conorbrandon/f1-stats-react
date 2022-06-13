import { ErgastDriverTable } from "./ErgastDriverTable";
import { ErgastMetadata } from "./ErgastMetadata";

export interface ErgastDriverResponse {
  MRData: ErgastDriverTable & ErgastMetadata
}