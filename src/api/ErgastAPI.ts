import React from "react";
import { ErgastDriver } from "../model/ErgastDriver";
import { ErgastDriverResponse } from "../model/ErgastDriverResponse";
import { ErgastLap } from "../model/ErgastLap";
import { ErgastRace } from "../model/ErgastRace";
import { ErgastRaceResponse } from "../model/ErgastRaceResponse";
import { MockLapsResponse } from "./MockLapsResponse";
import { EmptyScheduleResponse, MockResultsResponse, MockScheduleResponse, MockQualifyingResponse, MockDriverResponse, EmptyDriverResponse, MockDriversReponse } from "./MockResponse";

const baseUrl = 'https://ergast.com/api/f1';  // URL to web api

export class ErgastAPI {
  static async getSchedule(year: string): Promise<ErgastRace[]> {
    if (year === '2012') return MockScheduleResponse.MRData.RaceTable.Races;
    else return EmptyScheduleResponse.MRData.RaceTable.Races;
    const url = `${baseUrl}/${year}.json`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races;
  };
  static async getRaceResult(year: string, round: string): Promise<ErgastRace> {
    if (year === '2008' && round === '5') return MockResultsResponse.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
    const url = `${baseUrl}/${year}/${round}/results.json`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races[0];
  }
  static async getRaceQualifying(year: string, round: string): Promise<ErgastRace> {
    if (year === '2008' && round === '5') return MockQualifyingResponse.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
    const url = `${baseUrl}/${year}/${round}/qualifying.json`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races[0];
  }
  static async getDriver(driverId: string | undefined): Promise<ErgastDriver> {
    if (!driverId) return EmptyDriverResponse.MRData.DriverTable.Drivers[0];
    if (driverId === "massa") return MockDriverResponse.MRData.DriverTable.Drivers[0];
    else return EmptyDriverResponse.MRData.DriverTable.Drivers[0];
    const url = `${baseUrl}/drivers/${driverId}.json`;
    const data: Response = await fetch(url);
    const json: ErgastDriverResponse = await data.json();
    return json.MRData.DriverTable.Drivers[0];
  }
  static async getDriversByYear(year: string): Promise<ErgastDriver[]> {
    if (year === "2008") return MockDriversReponse.MRData.DriverTable.Drivers;
    else return EmptyDriverResponse.MRData.DriverTable.Drivers;
    const url = `${baseUrl}/${year}/drivers.json?limit=100`;
    const data: Response = await fetch(url);
    const json: ErgastDriverResponse = await data.json();
    return json.MRData.DriverTable.Drivers;
  }
  static async getLapTimes(year: string, round: string): Promise<ErgastRace> {
    if (year === "2008" && round === "5") return MockLapsResponse.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
    const url = `${baseUrl}/${year}/${round}/laps.json?limit=200`;
    const data: Response = await fetch(url);
    const json: ErgastRaceResponse = await data.json();
    return json.MRData.RaceTable.Races[0];
  }
}