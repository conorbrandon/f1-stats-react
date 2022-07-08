import { ErgastDriverResponse } from "../../model/ErgastDriverResponse";
import { ErgastRaceResponse } from "../../model/ErgastRaceResponse";
import { ErgastStandingsResponse } from "../../model/ErgastStandingsResponse";
import { ErgastConstructorsResponse } from "../../model/ErgastConstructorsResponse";
import { ErgastSeasonResponse } from "../../model/ErgastSeasonResponse";
import { ErgastCircuitResponse } from "../../model/ErgastCircuitResponse";

export const ergastBaseUrl = 'https://ergast.com/api/f1';  // URL to web api
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
  },
  circuit: {
    [url: string]: ErgastCircuitResponse
  }
}
export const ergastCache: ErgastCache = {
  race: {},
  driver: {},
  constructor: {},
  season: {},
  standings: {},
  circuit: {}
};