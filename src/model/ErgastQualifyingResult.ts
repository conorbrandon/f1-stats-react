import { ErgastConstructor } from "./ErgastConstructor";
import { ErgastDriver } from "./ErgastDriver";

export interface ErgastQualifyingResult {
  "number": string,
  "position": string,
  "Driver": ErgastDriver,
  Constructor: ErgastConstructor,
  "Q1"?: string,
  "Q2"?: string,
  "Q3"?: string,
  "Q1 Interval"?: number,
  "Q2 Interval"?: number,
  "Q3 Interval"?: number,
}