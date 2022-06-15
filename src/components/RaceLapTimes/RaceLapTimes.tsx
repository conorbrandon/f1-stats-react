import React, { useEffect, useState } from "react";
import styles from "./RaceLapTimes.module.css";

import Select, { MultiValue, StylesConfig } from 'react-select';
import Switch from "react-switch";
import { GenericTrace } from "../GenericTrace/GenericTrace";
import { scaleLog, ScaleLogarithmic } from 'd3-scale';
import { TimeHelper } from "../../helpers/TimeHelper";
import { useAppSelector } from "../../app/hooks";
import { selectQualifying } from "../../app/qualifying/qualifyingSlice";
import { useParams } from "react-router-dom";
import { interpolateRainbow } from 'd3-scale-chromatic';
import { ErgastLap } from "../../model/ErgastLap";
import { selectResult } from "../../app/result/resultSlice";
import { selectLaps } from "../../app/laps/lapsSlice";
import { shuffle } from "../../helpers/GenericHelpers";

type DriverIDElement = { driverID: string, isSelected: boolean, driverColor: string, value: string, label: string };
export type DriverIDSet = DriverIDElement[];

export interface lapTime { [driverID: string]: number };

const customStyles: StylesConfig<DriverIDElement> = {
  option: (provided: any, state: any) => {
    return {
      ...provided,
      color: 'black',
      border: `solid 5px ${state.data.driverColor}`,
      borderRadius: '5px',
      padding: 5,
      // marginBottom: 10
    };
  },
  container: (provided: any, state: any) => {
    return {
      ...provided,
      width: '50%',
      paddingTop: '2rem'
    }
  },
  multiValue: (provided: any, state: any) => {
    return {
      ...provided,
      border: `solid 5px ${state.data.driverColor}`,
      color: 'black'
    }
  },
};

interface ScaleDomain { min: number, max: number };

export const RaceLapTimes = ({ }) => {
  const { year, round } = useParams();

  const [lapTimes, setLapTimes] = useState<lapTime[]>();
  const [logLapTimes, setLogLapTimes] = useState<lapTime[]>();
  const [driverIDSet, setDriverIDSet] = useState<DriverIDSet>([]);
  const [scaleDomain, setScaleDomain] = useState<ScaleDomain>();
  const [positionTrace, setPositionTrace] = useState<lapTime[]>();
  const [logLapFormatterMap, setLogLapFormatterMap] = useState<{ [ms: number]: string }>();
  const [logScaleFunction, setLogScaleFunction] = useState<{ theFunc: ScaleLogarithmic<number, number> }>();

  const race = useAppSelector(selectResult);
  const raceQualifying = useAppSelector(selectQualifying);
  const laps = useAppSelector(selectLaps);

  useEffect(() => {
    if (raceQualifying && laps) {
      // console.log({ response });
      let driverIDSet: DriverIDSet = [];
      const numDrivers = (laps as ErgastLap[])[0].Timings.length;
      const randomColorIndexSet: number[] = shuffle(Array.from({ length: numDrivers }, (_, i: number) => i));
      // console.log({randomColorIndexSet});
      (laps as ErgastLap[])[0].Timings.forEach((timing, _i) => {
        driverIDSet.push({
          driverID: timing.driverId,
          isSelected: true,
          driverColor: interpolateRainbow(randomColorIndexSet[_i] / numDrivers),
          value: timing.driverId,
          label: timing.driverId
        });
      });
      // console.log({ driverIDSet });
      let minLapTime = Infinity;
      let maxLapTime = -Infinity;
      let transformedLaps: lapTime[] = (laps as ErgastLap[]).map((lap, lapNum) => {
        let driverIDLapMap: lapTime = { lapNum: lapNum + 1 };
        lap.Timings.forEach(timing => {
          const lapTime = TimeHelper.raceTimeToMs(timing.time);
          driverIDLapMap[timing.driverId] = lapTime;
          if (lapTime > maxLapTime) maxLapTime = lapTime;
          if (lapTime < minLapTime) minLapTime = lapTime;
        });
        return driverIDLapMap;
      });
      const logScaleFunction = scaleLog().domain([minLapTime, maxLapTime]).range([1, 100]).base(10);
      let logLapFormatterMap: { [ms: number]: string } = {};
      let transformedLogLaps: lapTime[] = (laps as ErgastLap[]).map((lap, lapNum) => {
        let driverIDLapMap: lapTime = { lapNum: lapNum + 1 };
        lap.Timings.forEach(timing => {
          const lapTime = TimeHelper.raceTimeToMs(timing.time);
          const logLapTime = logScaleFunction ? logScaleFunction(lapTime) : lapTime;
          // console.log({ lapTime, logLapTime, inverted: logScaleFunction.invert(logLapTime) });
          driverIDLapMap[timing.driverId] = logLapTime;
          logLapFormatterMap[logLapTime] = timing.time;
        });
        return driverIDLapMap;
      });
      let transformedPositions: lapTime[] = (laps as ErgastLap[]).map((lap, lapNum) => {
        let driverIDPositionMap: lapTime = { lapNum: lapNum + 1 };
        lap.Timings.forEach(timing => {
          driverIDPositionMap[timing.driverId] = parseInt(timing.position);
        });
        return driverIDPositionMap;
      });
      let lap0Position: lapTime = { lapNum: 0 };
      console.log({ raceQualifying });
      raceQualifying?.QualifyingResults?.forEach(result => {
        lap0Position[result.Driver.driverId] = parseInt(result.position);
      })
      transformedPositions.unshift(lap0Position);
      // console.log({ transformedLaps, transformedPositions });
      console.log({ transformedLaps: transformedLaps.slice(0, 3), transformedLogLaps: transformedLogLaps.slice(0, 3) });

      setScaleDomain({ min: minLapTime, max: maxLapTime });
      setLogLapFormatterMap(logLapFormatterMap);
      setLogScaleFunction({ theFunc: logScaleFunction });
      setLapTimes(transformedLaps);
      setLogLapTimes(transformedLogLaps)
      setPositionTrace(transformedPositions);
      setDriverIDSet(driverIDSet);
    }
  }, [raceQualifying]);
  console.log(logScaleFunction, logLapTimes);
  const [showPositions, setShowPositions] = useState<boolean>(false);
  const [useLogLaps, setUseLogLaps] = useState<boolean>(true);

  const onChange = (event: MultiValue<DriverIDElement>) => {
    console.log({ event });
    const driverIDSetCopy = [...driverIDSet];
    const selectedDrivers = event.map(e => e.driverID);
    setDriverIDSet(driverIDSetCopy.map(driver =>
      selectedDrivers.indexOf(driver.driverID) > -1 ? { ...driver, isSelected: true } : { ...driver, isSelected: false }
    ));
  };
  const handlePositionChange = (checked: boolean) => {
    setShowPositions(checked);
  }
  const handleLogLapChange = (checked: boolean) => {
    setUseLogLaps(checked);
  }
  return (
    <div className="page-content">
      <div className={`${styles.centered}`}>
        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {!showPositions && <span className={`material-icons-align ${styles.floatRight}`}>
            <span>Use Log Lap Times:</span>
            <Switch checked={useLogLaps} onChange={handleLogLapChange} />
          </span>}
          <span className={`material-icons-align ${styles.floatRight}`}>
            <span>Show Position Trace:</span>
            <Switch checked={showPositions} onChange={handlePositionChange} />
          </span>
        </span>
        <Select placeholder={'Select driver...'} options={driverIDSet} isMulti isSearchable onChange={onChange} styles={customStyles} />
        {!useLogLaps && lapTimes && !showPositions && driverIDSet.find(driver => driver.isSelected) &&
          <GenericTrace driverIDSet={driverIDSet}
            domain={['dataMin - 100', 'dataMax + 100']} data={lapTimes}
            width={1200} height={450}
            chartTitle={`${year} ${race?.raceName} Lap Comparison`}
            tickCount={20} formatter={(ms: number) => TimeHelper.msToRaceTime(ms)} dot={true} />
        }
        {logScaleFunction && useLogLaps && logLapTimes && !showPositions && driverIDSet.find(driver => driver.isSelected) &&
          <GenericTrace driverIDSet={driverIDSet}
            domain={['dataMin', 'dataMax']} data={logLapTimes}
            width={1200} height={450}
            chartTitle={`${year} ${race?.raceName} Log Lap Comparison`}
            scale={logScaleFunction.theFunc}
            tickCount={2} interval={1}
            formatter={(ms: number) => (logLapFormatterMap && logLapFormatterMap[ms]) || TimeHelper.msToRaceTime(logScaleFunction.theFunc.invert(ms))}
            dot={true} />
        }
        {showPositions &&
          <GenericTrace driverIDSet={driverIDSet}
            data={positionTrace} domain={[1, driverIDSet.length + 1]}
            width={1200} height={450}
            chartTitle={`${year} ${race?.raceName} Position Trace`}
            tickCount={driverIDSet.length} reversed={true} dot={false} />
        }
      </div>
    </div>
  );
};
