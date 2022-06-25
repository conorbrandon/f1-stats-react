import React from "react";
import { Link } from "react-router-dom";
import { ConstructorLogoType } from "../app/constructorLogos/constructorLogosSlice";
import { ErgastConstructor } from "../model/ErgastConstructor";
import { ErgastQualifyingResult } from "../model/ErgastQualifyingResult";
import { ErgastResult } from "../model/ErgastResult";
import { ErgastStanding } from "../model/ErgastStanding";
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
      return <div className="material-icons-align" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Link to={`/driver/${result.Driver.driverId}`}>{result.Driver.givenName} {result.Driver.familyName}</Link>
        <img src={FlagHelper.getFlagFromDenonym(result.Driver.nationality)} alt={`${result.Driver.nationality} flag`} />
      </div>
    },
    Constructor: (result: ErgastResult | ErgastQualifyingResult, constructorLogos: ConstructorLogoType) => {
      return <span className="material-icons-align" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}><Link to={`/constructor/${result.Constructor.constructorId}`}>{result.Constructor.name}
      </Link>
        <img src={constructorLogos ? constructorLogos[result.Constructor.constructorId] : ''}/></span>
    },
    ConstructorRaw: (constructor: ErgastConstructor, constructorLogos: ConstructorLogoType) => {
      return <span className="material-icons-align" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}><Link to={`/constructor/${constructor.constructorId}`}>{constructor.name}
      </Link>
        <img src={constructorLogos ? constructorLogos[constructor.constructorId] : ''}/></span>
    },
    'Fastest Lap': (result: ErgastResult) => {
      return <div className="material-icons-align">
        {result.FastestLap?.Time.time}
        {result.FastestLap?.rank === "1" && <span className="material-icons gold">star</span>}
      </div>
    },
    'Pos. Gained': (result: ErgastResult) => {
      let { posGained } = result;
      posGained = posGained || 0;
      return <div className={`${posGained < 0 ? 'lightRedBg': posGained > 0 ? 'lightGreenBg' : ''}`}>{result.posGained}</div>
    },
    RawFromDeepValue: (result: ErgastResult | ErgastQualifyingResult | ErgastStanding, objectPath: string) => {
      return <div>{deep_value(result, objectPath)}</div>
    },
    FinishingTime: (result: ErgastResult) => {
      const millis = parseInt(result.Time?.millis || '');
      return <div>{TimeHelper.msToRaceTime(millis)}</div>
    }
  },
  comparators: {
    Position: (a: ErgastResult, b: ErgastResult) => parseInt(a.position) - parseInt(b.position),
    Driver: (a: ErgastResult, b: ErgastResult) => a.Driver.familyName > b.Driver.familyName ? 1 : -1,
    Constructor: (a: ErgastResult, b: ErgastResult) => a.Constructor.name > b.Constructor.name ? 1 : -1,
    ConstructorRaw: (a: ErgastStanding, b: ErgastStanding) => a.Constructors[0].name > b.Constructors[0].name ? 1 : -1,
    Points: (a: ErgastResult | ErgastStanding, b: ErgastResult | ErgastStanding) => parseInt(b.points) - parseInt(a.points),
    LapTime: (a: ErgastResult | ErgastQualifyingResult, b: ErgastResult | ErgastQualifyingResult, objectPath: string) => {
      return TimeHelper.raceTimeToMs(deep_value(a, objectPath)) - TimeHelper.raceTimeToMs(deep_value(b, objectPath))
    },
    'Pos. Gained': (a: ErgastResult, b: ErgastResult) => (b.posGained !== undefined ? b.posGained : -Infinity) - (a.posGained !== undefined ? a.posGained : -Infinity),
    'Finishing Status': (a: ErgastResult, b: ErgastResult) => a.status > b.status ? 1 : -1,
    Laps: (a: ErgastResult, b: ErgastResult) => parseInt(a.laps) - parseInt(b.laps),
    FinishingTime: (a: ErgastResult, b: ErgastResult) => parseInt(a.Time?.millis || '') - parseInt(b.Time?.millis || ''),    
    Wins: (a: ErgastStanding, b: ErgastStanding) => parseInt(b.wins) - parseInt(a.wins)
  },
};

export const deep_value = (obj: any, path: string) => {
  const pathParts = path.split('.');
  for (let i = 0; i < pathParts.length; i++) {
    // console.log({ obj });
    if (obj === undefined) return obj;
    obj = obj[pathParts[i] as keyof typeof obj];
  }
  return obj;
};