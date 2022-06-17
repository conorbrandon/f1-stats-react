import { ErgastDriver } from "../model/ErgastDriver";
import { ErgastDriverResponse } from "../model/ErgastDriverResponse";
import { ErgastRace } from "../model/ErgastRace";
import { ErgastRaceResponse } from "../model/ErgastRaceResponse";
import { MockLapsResponse, MockLapsResponse2022, MockPitStopResponse2022, MockResultsResponse2022 } from "./MockLapsResponse";
import { EmptyScheduleResponse, MockResultsResponse, MockScheduleResponse, MockQualifyingResponse, MockDriverResponse, EmptyDriverResponse, MockDriversReponse, MockScheduleResponse_2008, MockQualifyingResponse2022, MockScheduleResponse2022 } from "./MockResponse";

const baseUrl = 'https://ergast.com/api/f1';  // URL to web api
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export class ErgastAPI {
  static async getSchedule(year: string): Promise<ErgastRace[]> {
    console.log('getSchedule', year);
    await sleep(1000);
    if (year === '2012') return MockScheduleResponse.MRData.RaceTable.Races;
    else if (year === '2008') return MockScheduleResponse_2008.MRData.RaceTable.Races;
    else if (year === '2022') return MockScheduleResponse2022.MRData.RaceTable.Races;
    else return EmptyScheduleResponse.MRData.RaceTable.Races;
    const url = `${baseUrl}/${year}.json`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races;
  };
  static async getRaceResult(year: string, round: string): Promise<ErgastRace> {
    await sleep(1000);
    if (year === '2008' && round === '5') return MockResultsResponse.MRData.RaceTable.Races[0];
    else if (year === "2022" && round === "5") return MockResultsResponse2022.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
    const url = `${baseUrl}/${year}/${round}/results.json`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races[0];
  }
  static async getRaceQualifying(year: string, round: string): Promise<ErgastRace> {
    await sleep(3000);
    if (year === '2008' && round === '5') return MockQualifyingResponse.MRData.RaceTable.Races[0];
    else if (year === "2022" && round === "5") return MockQualifyingResponse2022.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
    const url = `${baseUrl}/${year}/${round}/qualifying.json`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races[0];
  }
  static async getDriver(driverId: string | undefined): Promise<ErgastDriver> {
    await sleep(2500);
    if (!driverId) return EmptyDriverResponse.MRData.DriverTable.Drivers[0];
    if (driverId === "massa") return MockDriverResponse.MRData.DriverTable.Drivers[0];
    else return EmptyDriverResponse.MRData.DriverTable.Drivers[0];
    const url = `${baseUrl}/drivers/${driverId}.json`;
    const data: Response = await fetch(url);
    const json: ErgastDriverResponse = await data.json();
    return json.MRData.DriverTable.Drivers[0];
  }
  static async getDriversByYear(year: string): Promise<ErgastDriver[]> {
    await sleep(4000);
    if (year === "2008") return MockDriversReponse.MRData.DriverTable.Drivers;
    else return EmptyDriverResponse.MRData.DriverTable.Drivers;
    const url = `${baseUrl}/${year}/drivers.json?limit=100`;
    const data: Response = await fetch(url);
    const json: ErgastDriverResponse = await data.json();
    return json.MRData.DriverTable.Drivers;
  }
  static async getLapTimes(year: string, round: string): Promise<ErgastRace> {
    await sleep(35);
    if (year === "2008" && round === "5") return MockLapsResponse.MRData.RaceTable.Races[0];
    else if (year === "2022" && round === "5") return MockLapsResponse2022.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
    const url = `${baseUrl}/${year}/${round}/laps.json?limit=200`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races[0];
  }
  static async getPitStops(year: string, round: string): Promise<ErgastRace> {
    await sleep(35);
    if (year === "2022" && round === "5") return MockPitStopResponse2022.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
    const url = `${baseUrl}/${year}/${round}/pitstops.json?limit=200`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races[0];
  }
}