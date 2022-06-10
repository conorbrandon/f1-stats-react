import { ErgastCircuit } from "./ErgastCircuit";
import { ErgastDate } from "./ErgastDate";
import { ErgastResult } from "./ErgastResult";

export interface ErgastRace {
  "season": string,
  "round": string,
  "url": string,
  "raceName": string,
  "Circuit": ErgastCircuit,
  "date": string,
  "time": string,
  // "FirstPractice": ErgastDate,
  // "SecondPractice": ErgastDate,
  // "ThirdPractice": ErgastDate,
  // "Qualifying": ErgastDate
  "Results"?: ErgastResult[]
};