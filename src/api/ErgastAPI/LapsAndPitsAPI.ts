import { ErgastRace } from "../../model/ErgastRace";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { MockLapsResponse, MockLapsResponse2022, MockPitStopResponse2022 } from "../mocks/MockLapsResponse";
import { EmptyScheduleResponse } from "../mocks/MockResponse";
import { sleep } from "./ErgastAPI";
import { ergastBaseUrl as baseUrl, ergastCache } from "./ErgastAPI";

export async function getLapTimes(year: string, round: string): Promise<ErgastRace> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === "2008" && round === "5") return MockLapsResponse.MRData.RaceTable.Races[0];
    else if (year === "2022" && round === "5") return MockLapsResponse2022.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
  }
  const url = `${baseUrl}/${year}/${round}/laps.json?limit=5000`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races[0];
}
export async function getPitStops(year: string, round: string): Promise<ErgastRace> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === "2022" && round === "5") return MockPitStopResponse2022.MRData.RaceTable.Races[0];
    else return EmptyScheduleResponse.MRData.RaceTable.Races[0];
  }
  const url = `${baseUrl}/${year}/${round}/pitstops.json?limit=200`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races[0];
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races[0];
}