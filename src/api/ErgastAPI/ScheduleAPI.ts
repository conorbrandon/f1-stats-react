import { ErgastRace } from "../../model/ErgastRace";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { EmptyScheduleResponse, MockScheduleResponse, MockScheduleResponse_2008, MockScheduleResponse2022, MockNextRace, MockLastRace } from "../mocks/MockResponse";
import { getTimeZoneFromLatLng } from "../TimeZones";
import { sleep } from "./ErgastAPI";
import { ergastBaseUrl as baseUrl, ergastCache } from "./ErgastAPI";


export async function getSchedule(year: string): Promise<ErgastRace[]> {
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    if (year === '2012') return MockScheduleResponse.MRData.RaceTable.Races;
    else if (year === '2008') return MockScheduleResponse_2008.MRData.RaceTable.Races;
    else if (year === '2022' || year === 'current') return MockScheduleResponse2022.MRData.RaceTable.Races;
    else return EmptyScheduleResponse.MRData.RaceTable.Races;
  }
  const url = `${baseUrl}/${year}.json`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    return ergastCache.race[url].MRData.RaceTable.Races;
  }
  const data: Response = await fetch(url);
  const json: ErgastRaceResponse = await data.json();
  ergastCache.race[url] = json;
  return json.MRData.RaceTable.Races;
};
export async function getNextRace(): Promise<{ nextRace: ErgastRace, timeZone: string }> {
  let json: ErgastRaceResponse;
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    json = MockNextRace;
    const { lat, long } = json.MRData.RaceTable.Races[0].Circuit.Location;
    const timeZone = await getTimeZoneFromLatLng(lat, long);
    return { nextRace: json.MRData.RaceTable.Races[0], timeZone };
  }
  const url = `${baseUrl}/current/next.json`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    json = ergastCache.race[url];
  } else {
    const data: Response = await fetch(url);
    json = await data.json();
    ergastCache.race[url] = json;
  }
  const { lat, long } = json.MRData.RaceTable.Races[0].Circuit.Location;
  const timeZone = await getTimeZoneFromLatLng(lat, long);
  return { nextRace: json.MRData.RaceTable.Races[0], timeZone };
}
export async function getPreviousRace(): Promise<{ prevRace: ErgastRace, timeZone: string }> {
  let json: ErgastRaceResponse;
  if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
    await sleep(1000);
    json = MockLastRace;
    const { lat, long } = json.MRData.RaceTable.Races[0].Circuit.Location;
    const timeZone = await getTimeZoneFromLatLng(lat, long);
    return { prevRace: json.MRData.RaceTable.Races[0], timeZone };
  }
  const url = `${baseUrl}/current/last.json`;
  if (ergastCache.race[url]) {
    console.log(`getting ${url} from cache`);
    json = ergastCache.race[url];
  } else {
    const data: Response = await fetch(url);
    json = await data.json();
    ergastCache.race[url] = json;
  }
  const { lat, long } = json.MRData.RaceTable.Races[0].Circuit.Location;
  const timeZone = await getTimeZoneFromLatLng(lat, long);
  return { prevRace: json.MRData.RaceTable.Races[0], timeZone };
}