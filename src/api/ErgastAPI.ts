import { ErgastDriver } from "../model/ErgastDriver";
import { ErgastDriverResponse } from "../model/ErgastDriverResponse";
import { ErgastRace } from "../model/ErgastRace";
import { ErgastRaceResponse } from "../model/ErgastRaceResponse";
import { ErgastStandingList } from "../model/ErgastStandingList";
import { ErgastStandingsResponse } from "../model/ErgastStandingsResponse";
import { MockLapsResponse, MockLapsResponse2022, MockPitStopResponse2022, MockResultsResponse2022 } from "./MockLapsResponse";
import { EmptyScheduleResponse, MockResultsResponse, MockScheduleResponse, MockQualifyingResponse, MockDriverResponse, EmptyDriverResponse, MockDriversResponse, MockScheduleResponse_2008, MockQualifyingResponse2022, MockScheduleResponse2022, MockNextRace, MockRace2022, MockRace, MockConstructorResponse, EmptyConstructorsResponse, MockLastRace, MockCurrentLastResultResponse, MockConstructorsResponse } from "./MockResponse";
import { EmptyDriverStandingsResponse, MockConstructorStandings2022, MockDriversStandings2022 } from "./MockStandingsResponse";
import { getTimeZoneFromLatLng } from "./TimeZones";
import { ErgastConstructor } from "../model/ErgastConstructor";
import { ErgastConstructorsResponse } from "../model/ErgastConstructorsResponse";
import { EmptySeasonsResponse, MockConstructorResultsResponse2022, MockConstructorResultsResponse2021, MockConstructorsSeasonsResponse, MockDriversSeasonsResponse, MockDriversResultsResponse2017, MockDriversResultsResponse2016, MockDriversQualifyingResponse2017, MockConstructorQualifyingResponse2022, MockConstructorQualifyingResponse2021 } from "./MockBySeason";
import { ErgastSeasonResponse } from "../model/ErgastSeasonResponse";
import { ErgastSeason } from "../model/ErgastSeason";
import { MockAllFormula1ConstructorsResponse, MockAllFormula1DriversResponse } from "./MockAllTimeResponse";

const baseUrl = 'https://ergast.com/api/f1';  // URL to web api
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

interface ErgastCache {
  race: {
    [url: string]: ErgastRaceResponse
  },
  driver: {
    [url: string]: ErgastDriverResponse
  },
  constructor: {
    [url: string]: ErgastConstructorsResponse
  },
  season: {
    [url: string]: ErgastSeasonResponse
  },
  standings: {
    [url: string]: ErgastStandingsResponse
  }
}
const ergastCache: ErgastCache = {
  race: {},
  driver: {},
  constructor: {},
  season: {},
  standings: {}
};

export class ErgastAPI {
  static async getSchedule(year: string): Promise<ErgastRace[]> {
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
  static async getNextRace(): Promise<{ nextRace: ErgastRace, timeZone: string }> {
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
  static async getPreviousRace(): Promise<{ prevRace: ErgastRace, timeZone: string }> {
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
  static async getRace(year: string, round: string): Promise<ErgastRace> {
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
  static async getRaceResult(year: string, round: string): Promise<ErgastRace> {
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
  static async getRaceQualifying(year: string, round: string): Promise<ErgastRace> {
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
  static async getDriver(driverID: string | undefined): Promise<ErgastDriver> {
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
  static async getDriverSeasons(driverID: string): Promise<ErgastSeason[]> {
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
  static async getDriverResults(year: string, driverID: string): Promise<ErgastRace[]> {
    if (process.env.REACT_APP_ENVIRONMENT === 'mock') {
      await sleep(1000);
      if (!driverID) return [];
      if (driverID === "massa" && year === "2017") return MockDriversResultsResponse2017.MRData.RaceTable.Races;
      else if (driverID === "massa" && year === "2016") return MockDriversResultsResponse2016.MRData.RaceTable.Races;
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
  static async getDriverQualifying(year: string, driverID: string): Promise<ErgastRace[]> {
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
  static async getConstructor(constructorID: string | undefined): Promise<ErgastConstructor> {
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
  static async getConstructorSeasons(constructorID: string): Promise<ErgastSeason[]> {
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
  static async getConstructorResults(year: string, constructorID: string): Promise<ErgastRace[]> {
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
  static async getConstructorQualifying(year: string, constructorID: string): Promise<ErgastRace[]> {
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
  static async getAllF1Drivers(): Promise<ErgastDriver[]> {
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
  static async getDriversByYear(year: string): Promise<ErgastDriver[]> {
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
  static async getAllF1Constructors(): Promise<ErgastConstructor[]> {
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
  static async getConstructorsByYear(year: string): Promise<ErgastConstructor[]> {
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
  static async getLapTimes(year: string, round: string): Promise<ErgastRace> {
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
  static async getPitStops(year: string, round: string): Promise<ErgastRace> {
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
  static async getDriverStandings(year: string): Promise<ErgastStandingList> {
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
  static async getConstructorStandings(year: string): Promise<ErgastStandingList> {
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
}