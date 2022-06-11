import React from "react";
import { ErgastQualifyingResult } from "../model/ErgastQualifyingResult";
import { ErgastResult } from "../model/ErgastResult";
import { FlagHelper } from "./FlagHelper";
import { TimeHelper } from "./TimeHelper";

export const SortableTableHelper = {
  transformers: {
    Position: (result: ErgastResult) => {
      return <div className="material-icons-align">
        {result.position}
        {result.position === "1" && <span className="material-icons gold">star</span>}
      </div>;
    },
    Driver: (result: ErgastResult) => {
      return <div className="material-icons-align">
        <img src={FlagHelper.getFlagFromDenonym(result.Driver.nationality)} alt={`${result.Driver.nationality} flag`} />
        {result.Driver.givenName} {result.Driver.familyName}
      </div>
    },
    Constructor: (result: ErgastResult) => {
      return <>{result.Constructor.name}</>
    },
    Points: (result: ErgastResult) => {
      return <div>{result.points}</div>
    },
    'Fastest Lap': (result: ErgastResult) => {
      return <div className="material-icons-align">
        {result.FastestLap?.Time.time}
        {result.FastestLap?.rank === "1" && <span className="material-icons gold">star</span>}
      </div>
    },
    'Finishing Status': (result: ErgastResult) => {
      return <div>{result.status}</div>
    },
    Laps: (result: ErgastResult) => {
      return <div>{result.laps}</div>
    },
    Q1: (result: ErgastQualifyingResult) => {
      return <div>{result.Q1}</div>
    },
    Q2: (result: ErgastQualifyingResult) => {
      return <div>{result.Q2}</div>
    },
    Q3: (result: ErgastQualifyingResult) => {
      return <div>{result.Q3}</div>
    },
  },
  comparators: {
    Position: (a: ErgastResult, b: ErgastResult) => parseInt(a.position) - parseInt(b.position),
    Driver: (a: ErgastResult, b: ErgastResult) => a.Driver.familyName > b.Driver.familyName ? 1 : -1,
    Constructor: (a: ErgastResult, b: ErgastResult) => a.Constructor.name > b.Constructor.name ? 1 : -1,
    Points: (a: ErgastResult, b: ErgastResult) => parseInt(b.points) - parseInt(a.points),
    LapTime: (a: ErgastResult | ErgastQualifyingResult, b: ErgastResult | ErgastQualifyingResult, objectPath: string) => TimeHelper.raceTimeToMs(deep_value(a, objectPath)) - TimeHelper.raceTimeToMs(deep_value(b, objectPath)),
    'Finishing Status': (a: ErgastResult, b: ErgastResult) => a.status > b.status ? 1 : -1,
    Laps: (a: ErgastResult, b: ErgastResult) => parseInt(a.laps) - parseInt(b.laps),
  },
};

export const deep_value = (obj: any, path: string) => {
  const pathParts = path.split('.');
  for (let i = 0; i < pathParts.length; i++) {
    console.log({ obj });
    if (obj === undefined) return obj;
    obj = obj[pathParts[i] as keyof typeof obj];
  }
  return obj;
};