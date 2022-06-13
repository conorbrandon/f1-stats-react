export interface ErgastLapTimings {
  "driverId": string,
  "position": string,
  "time": string
}

export interface ErgastLap {
  number: string,
  Timings: ErgastLapTimings[]
}