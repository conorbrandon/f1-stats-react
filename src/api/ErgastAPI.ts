import React from "react";
import { ErgastRace } from "../model/ErgastRace";
import { ErgastRaceResponse } from "../model/ErgastRaceResponse";
import { EmptyScheduleResponse, MockResultsResponse, MockScheduleResponse, MockQualifyingResponse } from "./MockResponse";

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
}