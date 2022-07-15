import { ErgastRace } from "../../model/ErgastRace";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { MockResultsResponse2022 } from "../mocks/MockLapsResponse";
import { EmptyScheduleResponse, MockResultsResponse, MockQualifyingResponse, MockQualifyingResponse2022, MockNextRace, MockRace2022, MockRace, MockCurrentLastResultResponse, MockSprintResponse } from "../mocks/MockResponse";
import { sleep } from "./ErgastAPI";
import { ergastBaseUrl as baseUrl, ergastCache } from "./ErgastAPI";

export async function getRace(year: string, round: string): Promise<ErgastRace> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === '2008' && round === '5') return MockRace.MRData.RaceTable.Races[0];
    else if (year === "2022" && round === "5") return MockRace2022.MRData.RaceTable.Races[0];
    else if (year === '2022' && round === '11') return MockNextRace.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
  }
  const url = `${baseUrl}/${year}/${round}.json`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races[0];
}
export async function getRaceResult(year: string, round: string): Promise<ErgastRace> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === '2008' && round === '5') return MockResultsResponse.MRData.RaceTable.Races[0];
    else if (year === "2022" && round === "5") return MockResultsResponse2022.MRData.RaceTable.Races[0];
    else if (year === 'current' && round === "last") return MockCurrentLastResultResponse.MRData.RaceTable.Races[0]
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
  }
  const url = `${baseUrl}/${year}/${round}/results.json`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races[0];
}
export async function getRaceQualifying(year: string, round: string): Promise<ErgastRace> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === '2008' && round === '5') return MockQualifyingResponse.MRData.RaceTable.Races[0];
    else if (year === "2022" && round === "5") return MockQualifyingResponse2022.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
  }
  const url = `${baseUrl}/${year}/${round}/qualifying.json`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races[0];
}
export async function getSprintQualifying(year: string, round: string): Promise<ErgastRace> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === '2022' && round === '4') return MockSprintResponse.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
  }
  const url = `${baseUrl}/${year}/${round}/sprint.json`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races[0];
}