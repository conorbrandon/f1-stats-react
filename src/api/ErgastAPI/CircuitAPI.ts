import { ErgastRace } from "../../model/ErgastRace";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { EmptySeasonsResponse } from "../mocks/MockBySeason";
import { ErgastSeasonResponse } from "../../model/ErgastSeasonResponse";
import { ErgastSeason } from "../../model/ErgastSeason";
import { sleep } from "./ErgastAPI";
import { ergastBaseUrl as baseUrl, ergastCache } from "./ErgastAPI";
import { ErgastCircuit } from "../../model/ErgastCircuit";
import { EmptyCircuitResponse, Mock2022CircuitsResponse, MockAllFormula1CircuitsResponse, MockBahrainCircuitResponse, MockCircuitQualifyingResponse2021, MockCircuitQualifyingResponse2022, MockCircuitResultsResponse2021, MockCircuitResultsResponse2022, MockCircuitSeasonsResponse } from "../mocks/MockCircuitResponses";
import { ErgastCircuitResponse } from "../../model/ErgastCircuitResponse";

export async function getCircuit(circuitID: string | undefined): Promise<ErgastCircuit> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!circuitID) return EmptyCircuitResponse.MRData.CircuitTable.Circuits[0];
    if (circuitID === "bahrain") return MockBahrainCircuitResponse.MRData.CircuitTable.Circuits[0];
    else return EmptyCircuitResponse.MRData.CircuitTable.Circuits[0];
  }
  const url = `${baseUrl}/circuits/${circuitID}.json`;
  if (ergastCache.circuit[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.circuit[url].MRData.CircuitTable.Circuits[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastCircuitResponse = await data.json();
  ergastCache.circuit[url] = json;
  return json.MRData.CircuitTable.Circuits[0];
}
export async function getCircuitSeasons(circuitID: string): Promise<ErgastSeason[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!circuitID) return EmptySeasonsResponse.MRData.SeasonTable.Seasons;
    if (circuitID === "bahrain") return MockCircuitSeasonsResponse.MRData.SeasonTable.Seasons;
    else return EmptySeasonsResponse.MRData.SeasonTable.Seasons;
  }
  const url = `${baseUrl}/circuits/${circuitID}/seasons.json?limit=1000`;
  if (ergastCache.season[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.season[url].MRData.SeasonTable.Seasons;
  }
  const data: Response = await fetch(url);
  const json: ErgastSeasonResponse = await data.json();
  ergastCache.season[url] = json;
  return json.MRData.SeasonTable.Seasons;
}
export async function getCircuitResults(year: string, circuitID: string): Promise<ErgastRace[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!circuitID) return [];
    if (circuitID === "bahrain" && year === "2022") return MockCircuitResultsResponse2022.MRData.RaceTable.Races;
    else if (circuitID === "bahrain" && year === "2021") return MockCircuitResultsResponse2021.MRData.RaceTable.Races;
    else return [];
  }
  const url = `${baseUrl}/${year}/circuits/${circuitID}/results.json?limit=100`;
  if (ergastCache.circuit[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.circuit[url].MRData.CircuitTable.Circuits;
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races;
}
export async function getCircuitQualifying(year: string, circuitID: string): Promise<ErgastRace[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (!circuitID) return [];
    if (circuitID === "bahrain" && year === "2022") return MockCircuitQualifyingResponse2022.MRData.RaceTable.Races;
    else if (circuitID === "bahrain" && year === "2021") return MockCircuitQualifyingResponse2021.MRData.RaceTable.Races;
    else return [];
  }
  const url = `${baseUrl}/${year}/circuits/${circuitID}/qualifying.json?limit=100`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races;
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races;
}
export async function getAllF1Circuits(): Promise<ErgastCircuit[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    return MockAllFormula1CircuitsResponse.MRData.CircuitTable.Circuits;
  }
  const url = `${baseUrl}/circuits.json?limit=1000`;
  if (ergastCache.circuit[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.circuit[url].MRData.CircuitTable.Circuits;
  }
  const data: Response = await fetch(url);
  const json: ErgastCircuitResponse = await data.json();
  ergastCache.circuit[url] = json;
  return json.MRData.CircuitTable.Circuits;
}
export async function getCircuitsByYear(year: string): Promise<ErgastCircuit[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === "2022") return Mock2022CircuitsResponse.MRData.CircuitTable.Circuits;
    else return EmptyCircuitResponse.MRData.CircuitTable.Circuits;
  }
  const url = `${baseUrl}/${year}/circuits.json?limit=100`;
  if (ergastCache.circuit[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.circuit[url].MRData.CircuitTable.Circuits;
  }
  const data: Response = await fetch(url);
  const json: ErgastCircuitResponse = await data.json();
  ergastCache.circuit[url] = json;
  return json.MRData.CircuitTable.Circuits;
}