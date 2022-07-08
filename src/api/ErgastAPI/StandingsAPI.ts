import { ErgastStandingList } from "../../model/ErgastStandingList";
import { ErgastStandingsResponse } from "../../model/ErgastStandingsResponse";
import { EmptyDriverStandingsResponse, MockConstructorStandings2022, MockDriversStandings2022 } from "../mocks/MockStandingsResponse";
import { sleep } from "./ErgastAPI";
import { ergastBaseUrl as baseUrl, ergastCache } from "./ErgastAPI";

export async function getDriverStandings(year: string): Promise<ErgastStandingList> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === "2022" || year === 'current') return MockDriversStandings2022.MRData.StandingsTable.StandingsLists[0];
    else return EmptyDriverStandingsResponse.MRData.StandingsTable.StandingsLists[0];
  }
  const url = `${baseUrl}/${year}/driverStandings.json`;
  if (ergastCache.standings[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.standings[url].MRData.StandingsTable.StandingsLists[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastStandingsResponse = await data.json();
  ergastCache.standings[url] = json;
  return json.MRData.StandingsTable.StandingsLists[0];
}
export async function getConstructorStandings(year: string): Promise<ErgastStandingList> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === "2022" || year === 'current') return MockConstructorStandings2022.MRData.StandingsTable.StandingsLists[0];
    else return EmptyDriverStandingsResponse.MRData.StandingsTable.StandingsLists[0];
  }
  const url = `${baseUrl}/${year}/constructorStandings.json`;
  if (ergastCache.standings[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.standings[url].MRData.StandingsTable.StandingsLists[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastStandingsResponse = await data.json();
  ergastCache.standings[url] = json;
  return json.MRData.StandingsTable.StandingsLists[0];
}