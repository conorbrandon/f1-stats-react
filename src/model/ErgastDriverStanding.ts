import { ErgastConstructor } from "./ErgastConstructor";
import { ErgastDriver } from "./ErgastDriver";

export interface ErgastDriverStanding {
  position: string,
  positionText: string,
  points: string,
  wins: string,
  Driver: ErgastDriver,
  Constructors: ErgastConstructor[]
}