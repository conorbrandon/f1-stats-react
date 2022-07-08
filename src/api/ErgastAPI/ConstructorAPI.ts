import { ErgastRace } from "../../model/ErgastRace";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { MockConstructorResponse, EmptyConstructorsResponse, MockConstructorsResponse } from "../mocks/MockResponse";
import { ErgastConstructor } from "../../model/ErgastConstructor";
import { ErgastConstructorsResponse } from "../../model/ErgastConstructorsResponse";
import { EmptySeasonsResponse, MockConstructorResultsResponse2022, MockConstructorResultsResponse2021, MockConstructorsSeasonsResponse, MockConstructorQualifyingResponse2022, MockConstructorQualifyingResponse2021 } from "../mocks/MockBySeason";
import { ErgastSeasonResponse } from "../../model/ErgastSeasonResponse";
import { ErgastSeason } from "../../model/ErgastSeason";
import { MockAllFormula1ConstructorsResponse } from "../mocks/MockAllTimeResponse";
import { sleep } from "./ErgastAPI";
import { ergastBaseUrl as baseUrl, ergastCache } from "./ErgastAPI";

export async function getConstructor(constructorID: string | undefined): Promise<ErgastConstructor> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!constructorID) return EmptyConstructorsResponse.MRData.ConstructorTable.Constructors[0];
    if (constructorID === "ferrari") return MockConstructorResponse.MRData.ConstructorTable.Constructors[0];
    else return EmptyConstructorsResponse.MRData.ConstructorTable.Constructors[0];
  }
  const url = `${baseUrl}/constructors/${constructorID}.json`;
  if (ergastCache.constructor[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.constructor[url].MRData.ConstructorTable.Constructors[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastConstructorsResponse = await data.json();
  ergastCache.constructor[url] = json;
  return json.MRData.ConstructorTable.Constructors[0];
}
export async function getConstructorSeasons(constructorID: string): Promise<ErgastSeason[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!constructorID) return EmptySeasonsResponse.MRData.SeasonTable.Seasons;
    if (constructorID === "ferrari") return MockConstructorsSeasonsResponse.MRData.SeasonTable.Seasons;
    else return EmptySeasonsResponse.MRData.SeasonTable.Seasons;
  }
  const url = `${baseUrl}/constructors/${constructorID}/seasons.json?limit=1000`;
  if (ergastCache.season[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.season[url].MRData.SeasonTable.Seasons;
  }
  const data: Response = await fetch(url);
  const json: ErgastSeasonResponse = await data.json();
  ergastCache.season[url] = json;
  return json.MRData.SeasonTable.Seasons;
}
export async function getConstructorResults(year: string, constructorID: string): Promise<ErgastRace[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!constructorID) return [];
    if (constructorID === "ferrari" && year === "2022") return MockConstructorResultsResponse2022.MRData.RaceTable.Races;
    else if (constructorID === "ferrari" && year === "2021") return MockConstructorResultsResponse2021.MRData.RaceTable.Races;
    else return [];
  }
  const url = `${baseUrl}/${year}/constructors/${constructorID}/results.json?limit=1000`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races;
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races;
}
export async function getConstructorQualifying(year: string, constructorID: string): Promise<ErgastRace[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!constructorID) return [];
    if (constructorID === "ferrari" && year === "2022") return MockConstructorQualifyingResponse2022.MRData.RaceTable.Races;
    else if (constructorID === "ferrari" && year === "2021") return MockConstructorQualifyingResponse2021.MRData.RaceTable.Races;
    else return [];
  }
  const url = `${baseUrl}/${year}/constructors/${constructorID}/qualifying.json?limit=1000`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races;
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races;
}
export async function getAllF1Constructors(): Promise<ErgastConstructor[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    return MockAllFormula1ConstructorsResponse.MRData.ConstructorTable.Constructors;
  }
  const url = `${baseUrl}/constructors.json?limit=1000`;
  if (ergastCache.constructor[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.constructor[url].MRData.ConstructorTable.Constructors;
  }
  const data: Response = await fetch(url);
  const json: ErgastConstructorsResponse = await data.json();
  ergastCache.constructor[url] = json;
  return json.MRData.ConstructorTable.Constructors;
}
export async function getConstructorsByYear(year: string): Promise<ErgastConstructor[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === "2008") return MockConstructorsResponse.MRData.ConstructorTable.Constructors;
    else return EmptyConstructorsResponse.MRData.ConstructorTable.Constructors;
  }
  const url = `${baseUrl}/${year}/constructors.json?limit=100`;
  if (ergastCache.constructor[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.constructor[url].MRData.ConstructorTable.Constructors;
  }
  const data: Response = await fetch(url);
  const json: ErgastConstructorsResponse = await data.json();
  ergastCache.constructor[url] = json;
  return json.MRData.ConstructorTable.Constructors;
}