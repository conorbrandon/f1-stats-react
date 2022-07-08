import { ErgastDriver } from "../../model/ErgastDriver";
import { ErgastDriverResponse } from "../../model/ErgastDriverResponse";
import { ErgastRace } from "../../model/ErgastRace";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { MockDriverResponse, EmptyDriverResponse, MockDriversResponse } from "../mocks/MockResponse";
import { EmptySeasonsResponse, MockDriversSeasonsResponse, MockDriversResultsResponse2017, MockDriversResultsResponse2016, MockDriversQualifyingResponse2017, MockDriversQualifyingResponse2016 } from "../mocks/MockBySeason";
import { ErgastSeasonResponse } from "../../model/ErgastSeasonResponse";
import { ErgastSeason } from "../../model/ErgastSeason";
import { MockAllFormula1DriversResponse } from "../mocks/MockAllTimeResponse";
import { sleep } from "./ErgastAPI";
import { ergastBaseUrl as baseUrl, ergastCache } from "./ErgastAPI";

export async function getDriver(driverID: string | undefined): Promise<ErgastDriver> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!driverID) return EmptyDriverResponse.MRData.DriverTable.Drivers[0];
    if (driverID === "massa") return MockDriverResponse.MRData.DriverTable.Drivers[0];
    else return EmptyDriverResponse.MRData.DriverTable.Drivers[0];
  }
  const url = `${baseUrl}/drivers/${driverID}.json`;
  if (ergastCache.driver[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.driver[url].MRData.DriverTable.Drivers[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastDriverResponse = await data.json();
  ergastCache.driver[url] = json;
  return json.MRData.DriverTable.Drivers[0];
}
export async function getDriverSeasons(driverID: string): Promise<ErgastSeason[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!driverID) return EmptySeasonsResponse.MRData.SeasonTable.Seasons;
    if (driverID === "massa") return MockDriversSeasonsResponse.MRData.SeasonTable.Seasons;
    else return EmptySeasonsResponse.MRData.SeasonTable.Seasons;
  }
  const url = `${baseUrl}/drivers/${driverID}/seasons.json?limit=1000`;
  if (ergastCache.season[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.season[url].MRData.SeasonTable.Seasons;
  }
  const data: Response = await fetch(url);
  const json: ErgastSeasonResponse = await data.json();
  ergastCache.season[url] = json;
  return json.MRData.SeasonTable.Seasons;
}
export async function getDriverResults(year: string, driverID: string): Promise<ErgastRace[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!driverID) return [];
    if (driverID === "massa" && year === "2017") return MockDriversResultsResponse2017.MRData.RaceTable.Races;
    else if (driverID === "massa" && year === "2016") return MockDriversQualifyingResponse2016.MRData.RaceTable.Races;
    else return [];
  }
  const url = `${baseUrl}/${year}/drivers/${driverID}/results.json?limit=100`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races;
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races;
}
export async function getDriverQualifying(year: string, driverID: string): Promise<ErgastRace[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!driverID) return [];
    if (driverID === "massa" && year === "2017") return MockDriversQualifyingResponse2017.MRData.RaceTable.Races;
    else if (driverID === "massa" && year === "2016") return MockDriversResultsResponse2016.MRData.RaceTable.Races;
    else return [];
  }
  const url = `${baseUrl}/${year}/drivers/${driverID}/qualifying.json?limit=100`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races;
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races;
}
export async function getAllF1Drivers(): Promise<ErgastDriver[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    return MockAllFormula1DriversResponse.MRData.DriverTable.Drivers;
  }
  const url = `${baseUrl}/drivers.json?limit=1000`;
  if (ergastCache.driver[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.driver[url].MRData.DriverTable.Drivers;
  }
  const data: Response = await fetch(url);
  const json: ErgastDriverResponse = await data.json();
  ergastCache.driver[url] = json;
  return json.MRData.DriverTable.Drivers;
}
export async function getDriversByYear(year: string): Promise<ErgastDriver[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === "2008") return MockDriversResponse.MRData.DriverTable.Drivers;
    else return EmptyDriverResponse.MRData.DriverTable.Drivers;
  }
  const url = `${baseUrl}/${year}/drivers.json?limit=100`;
  if (ergastCache.driver[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.driver[url].MRData.DriverTable.Drivers;
  }
  const data: Response = await fetch(url);
  const json: ErgastDriverResponse = await data.json();
  ergastCache.driver[url] = json;
  return json.MRData.DriverTable.Drivers;
}