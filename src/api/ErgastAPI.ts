import { ErgastRace } from "../model/ErgastRace";
import { EmptyScheduleResponse, MockScheduleResponse } from "./MockResponse";

export class ErgastAPI {
  static getSchedule(year: string): ErgastRace[] {
    if (year === '2012') return MockScheduleResponse.MRData.RaceTable.Races;
    else return EmptyScheduleResponse.MRData.RaceTable.Races;
  };
}