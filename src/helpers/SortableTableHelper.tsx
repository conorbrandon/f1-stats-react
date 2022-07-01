import React from "react";
import { Link } from "react-router-dom";
import { ConstructorLogoType } from "../app/constructorLogos/constructorLogosSlice";
import { ErgastConstructor } from "../model/ErgastConstructor";
import { ErgastQualifyingResult } from "../model/ErgastQualifyingResult";
import { ErgastResult } from "../model/ErgastResult";
import { ErgastDriverStanding } from "../model/ErgastDriverStanding";
import { FlagHelper } from "./FlagHelper";
import { TimeHelper } from "./TimeHelper";
import { ErgastConstructorStanding } from "../model/ErgastConstructorStanding";
import { ErgastDriver } from "../model/ErgastDriver";
import { useAppDispatch } from "../app/hooks";
import { fetchDriver } from "../app/driver/driverSlice";
import { fetchConstructor } from "../app/constructor/constructorSlice";

const DriverName: React.FC<{driver: ErgastDriver}> = ({ driver }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchDriver(driver.driverId))
  };
  return <span className="material-icons-align">
    <Link onClick={handleClick} to={`/driver/${driver.driverId}`}>{driver.givenName} {driver.familyName}</Link>
    <span className="material-icons">logout</span>
  </span>;
};
const ConstructorName: React.FC<{myConstructor: ErgastConstructor}> = ({ myConstructor }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchConstructor(myConstructor.constructorId))
  };
  return <span className="material-icons-align">
    <Link onClick={handleClick} to={`/constructor/${myConstructor.constructorId}`}>{myConstructor.name}</Link>
    <span className="material-icons">logout</span>
  </span>;
};

export const SortableTableHelper = {
  transformers: {
    Position: (result: ErgastResult) => {
      return <div className="material-icons-align">
        {result.position}
        {result.position === "1" && <span className="material-icons gold">star</span>}
        {result.position === "2" && <span className="material-icons silver">star</span>}
        {result.position === "3" && <span className="material-icons bronze">star</span>}
      </div>;
    },
    Driver: (result: ErgastResult) => {
      return <div className="material-icons-align" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Link to={`/driver/${result.Driver.driverId}`}>{result.Driver.givenName} {result.Driver.familyName}</Link>
        <img src={FlagHelper.getFlagFromDenonym(result.Driver.nationality)} alt={`${result.Driver.nationality} flag`} />
      </div>
    },
    Constructor: (result: ErgastResult | ErgastQualifyingResult, constructorLogos: ConstructorLogoType) => {
      return <span className="material-icons-align" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}><Link to={`/constructor/${result.Constructor.constructorId}`}>{result.Constructor.name}
      </Link>
        <img src={constructorLogos ? constructorLogos[result.Constructor.constructorId] : ''} /></span>
    },
    ConstructorRaw: (constructor: ErgastConstructor, constructorLogos: ConstructorLogoType) => {
      return <span className="material-icons-align" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}><Link to={`/constructor/${constructor.constructorId}`}>{constructor.name}
      </Link>
        <img src={constructorLogos ? constructorLogos[constructor.constructorId] : ''} /></span>
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
      return <div className={`${posGained < 0 ? 'lightRedBg' : posGained > 0 ? 'lightGreenBg' : ''}`}>{result.posGained}</div>
    },
    RawFromDeepValue: (obj: {}, objectPath: string) => {
      return <div>{deep_value(obj, objectPath)}</div>
    },
    FinishingTime: (result: ErgastResult) => {
      const millis = parseInt(result.Time?.millis || '');
      return <div>{TimeHelper.msToRaceTime(millis)}</div>
    },
    DriverName: (driver: ErgastDriver) => {
      return <DriverName driver={driver} />;
    },
    ConstructorName: (constructor: ErgastConstructor) => {
      return <ConstructorName myConstructor={constructor} />;
    },
    'Date of birth': (driver: ErgastDriver) => {
      return <div>{new Date(driver.dateOfBirth).toLocaleDateString()}</div>
    }
  },
  comparators: {
    Position: (a: ErgastResult, b: ErgastResult) => parseInt(a.position) - parseInt(b.position),
    Driver: (a: ErgastResult, b: ErgastResult) => a.Driver.familyName > b.Driver.familyName ? 1 : -1,
    Constructor: (a: ErgastResult, b: ErgastResult) => a.Constructor.name > b.Constructor.name ? 1 : -1,
    ConstructorRaw: (a: ErgastDriverStanding, b: ErgastDriverStanding) => a.Constructors[0].name > b.Constructors[0].name ? 1 : -1,
    Points: (a: ErgastResult | ErgastDriverStanding, b: ErgastResult | ErgastDriverStanding) => parseInt(b.points) - parseInt(a.points),
    LapTime: (a: ErgastResult | ErgastQualifyingResult, b: ErgastResult | ErgastQualifyingResult, objectPath: string) => {
      return TimeHelper.raceTimeToMs(deep_value(a, objectPath)) - TimeHelper.raceTimeToMs(deep_value(b, objectPath))
    },
    'Pos. Gained': (a: ErgastResult, b: ErgastResult) => (b.posGained !== undefined ? b.posGained : -Infinity) - (a.posGained !== undefined ? a.posGained : -Infinity),
    'Finishing Status': (a: ErgastResult, b: ErgastResult) => a.status > b.status ? 1 : -1,
    Laps: (a: ErgastResult, b: ErgastResult) => parseInt(a.laps) - parseInt(b.laps),
    FinishingTime: (a: ErgastResult, b: ErgastResult) => parseInt(a.Time?.millis || '') - parseInt(b.Time?.millis || ''),
    Wins: (a: ErgastDriverStanding | ErgastConstructorStanding, b: ErgastDriverStanding | ErgastConstructorStanding) => parseInt(b.wins) - parseInt(a.wins),
    GenericStringType: (a: {}, b: {}, objectPath: string) => {
      const aRaw = deep_value(a, objectPath);
      const bRaw = deep_value(b, objectPath);
      if (aRaw !== undefined && bRaw === undefined) return -1;
      else if (aRaw === undefined && bRaw !== undefined) return 1;
      else if (aRaw === undefined && bRaw === undefined) return 0;

      const aString: string = deep_value(a, objectPath);
      const bString: string = deep_value(b, objectPath);

      if (aString < bString) return -1;
      else if (bString < aString) return 1;
      return 0;
    },
    GenericDateType: (a: {}, b: {}, objectPath: string) => {
      const aRaw = deep_value(a, objectPath);
      const bRaw = deep_value(b, objectPath);
      if (aRaw !== undefined && bRaw === undefined) return -1;
      else if (aRaw === undefined && bRaw !== undefined) return 1;
      else if (aRaw === undefined && bRaw === undefined) return 0;

      const aDate: Date = new Date(deep_value(a, objectPath));
      const bDate: Date = new Date(deep_value(b, objectPath));

      if (aDate < bDate) return -1;
      else if (bDate < aDate) return 1;
      return 0;
    },
    GenericNumberType: (a: {}, b: {}, objectPath: string) => {
      const aRaw = deep_value(a, objectPath);
      const bRaw = deep_value(b, objectPath);
      if (aRaw !== undefined && bRaw === undefined) return -1;
      else if (aRaw === undefined && bRaw !== undefined) return 1;
      else if (aRaw === undefined && bRaw === undefined) return 0;

      const aNumber: number = parseFloat(deep_value(a, objectPath));
      const bNumber: number = parseFloat(deep_value(b, objectPath));

      if (aNumber < bNumber) return -1;
      else if (bNumber < aNumber) return 1;
      return 0;
    }
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