import { ErgastCircuit } from "./ErgastCircuit";
import { ErgastDate } from "./ErgastDate";
import { ErgastLap } from "./ErgastLap";
import { ErgastPitStop } from "./ErgastPitStop";
import { ErgastQualifyingResult } from "./ErgastQualifyingResult";
import { ErgastResult } from "./ErgastResult";

export interface ErgastRace {
  "season": string,
  "round": string,
  "url": string,
  "raceName": string,
  "Circuit": ErgastCircuit,
  "date": string,
  "time": string,
  "FirstPractice"?: ErgastDate,
  "SecondPractice"?: ErgastDate,
  "ThirdPractice"?: ErgastDate,
  "Sprint"?: ErgastDate,
  "Qualifying"?: ErgastDate,
  "Results"?: ErgastResult[]
  "QualifyingResults"?: ErgastQualifyingResult[],
  "Laps"?: ErgastLap[],
  "PitStops"?: ErgastPitStop[]
};