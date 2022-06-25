import { ErgastConstructor } from "./ErgastConstructor";
import { ErgastDriver } from "./ErgastDriver";

export interface ErgastStanding {
  position: string,
  positionText: string,
  points: string,
  wins: string,
  Driver: ErgastDriver,
  Constructors: ErgastConstructor[]
}