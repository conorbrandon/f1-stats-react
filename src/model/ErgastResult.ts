import { ErgastConstructor } from "./ErgastConstructor"
import { ErgastDriver } from "./ErgastDriver"
import { ErgastFastestLap } from "./ErgastFastestLap"
import { ErgastResultStatus } from "./ErgastResultStatus"
import { ErgastTime } from "./ErgastTime"

export interface ErgastResult {
  "number": string,
  "position": string,
  "positionText": string,
  "points": string,
  "Driver": ErgastDriver,
  "Constructor": ErgastConstructor,
  "grid": string,
  "laps": string,
  "status": ErgastResultStatus,
  "Time"?: ErgastTime,
  "FastestLap"?: ErgastFastestLap,
  "posGained"?: number
};