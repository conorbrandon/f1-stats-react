import React, { useEffect, useState } from "react";
import styles from "./RaceLapTimes.module.css";

import Select, { MultiValue, StylesConfig } from 'react-select';
import Switch from "react-switch";
import { PitStopLapMap, GenericTrace } from "../GenericTrace/GenericTrace";
import { scaleLog, ScaleLogarithmic } from 'd3-scale';
import { TimeHelper } from "../../helpers/TimeHelper";
import { useAppSelector } from "../../app/hooks";
import { fetchQualifying, selectQualifying, selectQualifyingError, selectQualifyingStatus } from "../../app/qualifying/qualifyingSlice";
import { useOutletContext, useParams } from "react-router-dom";
import { interpolateRainbow } from 'd3-scale-chromatic';
import { fetchResult, selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { fetchLaps, selectLaps, selectLapsError, selectLapsStatus } from "../../app/laps/lapsSlice";
import { shuffle } from "../../helpers/GenericHelpers";
import { UseReduxAsyncStatuses } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import { fetchPitStops, selectPitStops, selectPitStopsError, selectPitStopsStatus } from "../../app/pitstops/pitStopsSlice";
import { MINIMUM_KNOWN_NUM_LAPS_SPA } from "../RaceReplayReMotion/RaceReplayReMotion";
import { AppOutletContext } from "../../App";

type DriverIDElement = { driverID: string, isSelected: boolean, driverColor: string, value: string, label: string };
export type DriverIDSet = DriverIDElement[];

export interface lapTime { [driverID: string]: number };

const customStyles = (isDarkMode: boolean): StylesConfig<DriverIDElement> => {
  return {
    option: (provided: any, state: any) => {
      return {
        ...provided,
        color: isDarkMode ? 'white' : 'black',
        backgroundColor: isDarkMode ? 'black' : 'white',
        border: `solid 5px ${state.data.driverColor}`,
        borderRadius: '5px',
        padding: 2,
        // marginBottom: 10
      };
    },
    container: (provided: any, state: any) => {
      return {
        ...provided,
        maxWidth: '80%',
        minWidth: '50%',
        paddingTop: '1rem',
        // paddingBottom: '1rem'
      }
    },
    multiValue: (provided: any, state: any) => {
      return {
        ...provided,
        border: `solid 5px ${state.data.driverColor}`,
        backgroundColor: isDarkMode ? 'black' : 'white',
        fontSize: 'small',
        padding: 0
      }
    },
    multiValueLabel: (provided: any, state: any) => {
      return {
        ...provided,
        color: isDarkMode ? 'white' : 'black'
      }
    },
    menuList: (provided: any, state: any) => {
      return {
        ...provided,
        backgroundColor: isDarkMode ? 'black' : 'white',
        marginTop: 0,
        borderRadius: '5px',
        border: isDarkMode ? 'solid 1px white' : 'solid 1px black',
      }
    },
    dropdownIndicator: (provided: any, state: any) => {
      return {
        ...provided,
        backgroundColor: isDarkMode ? 'black' : 'white',
        border: isDarkMode ? 'solid 1px white' : 'solid 1px black',
      }
    },
    valueContainer: (provided: any, state: any) => {
      return {
        ...provided,
        backgroundColor: isDarkMode ? 'black' : 'white'
      }
    },
    placeholder: (provided: any, state: any) => {
      return {
        ...provided,
        color: isDarkMode ? 'white' : 'black',
      }
    },
    // i.e. display: none;
    indicatorSeparator: () => ({}),
    indicatorsContainer: (provided: any, state: any) => {
      return {
        ...provided,
        backgroundColor: isDarkMode ? 'black' : 'white',
      }
    },
  }
};

interface ScaleDomain { min: number, max: number };
type UseLapType = 'avg' | 'all' | 'log';
const lapTypeFullName: { [lapTypeID: string]: string } = {
  'avg': 'Remove outliers (Pit stops, Safety Cars, etc...)',
  'all': 'Show all lap times (Pit stops, Safety Cars, etc... included)',
  'log': 'Use log scale'
};

export const RaceLapTimes = ({ }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const { year, round } = useParams();

  const [lapTimes, setLapTimes] = useState<lapTime[]>();
  const [logLapTimes, setLogLapTimes] = useState<lapTime[]>();
  const [driverIDSet, setDriverIDSet] = useState<DriverIDSet>([]);
  const [scaleDomain, setScaleDomain] = useState<ScaleDomain>();
  const [positionTrace, setPositionTrace] = useState<lapTime[]>();
  const [pitstopLapMap, setPitstopLapMap] = useState<PitStopLapMap>();
  const [logLapFormatterMap, setLogLapFormatterMap] = useState<{ [ms: number]: string }>();
  const [logScaleFunction, setLogScaleFunction] = useState<{ theFunc: ScaleLogarithmic<number, number> }>();
  const [showPositions, setShowPositions] = useState<boolean>(false);
  const [useLapType, setUseLapType] = useState<UseLapType>('all');
  const [minimumLapTime, setMinimumLapTime] = useState<number>(0);
  const [averageLapTime, setAverageLapTime] = useState<number>(0);

  const race = useAppSelector(selectResult);
  const raceStatus = useAppSelector(selectResultStatus);
  const raceError = useAppSelector(selectResultError);
  const raceQualifying = useAppSelector(selectQualifying);
  const raceQualifyingStatus = useAppSelector(selectQualifyingStatus);
  const raceQualifyingError = useAppSelector(selectQualifyingError);
  const laps = useAppSelector(selectLaps);
  const lapsStatus = useAppSelector(selectLapsStatus);
  const lapsError = useAppSelector(selectLapsError);
  const pitstops = useAppSelector(selectPitStops);
  const pitstopsStatus = useAppSelector(selectPitStopsStatus);
  const pitstopsError = useAppSelector(selectPitStopsError);
  const [selectFirstLoad, setSelectFirstLoad] = useState(true);

  useEffect(() => {
    if (raceQualifying && laps && laps.length) {
      // console.log({ response });
      let driverIDSet: DriverIDSet = [];
      const numDrivers = laps[0].Timings.length;
      const randomColorIndexSet: number[] = shuffle(Array.from({ length: numDrivers }, (_, i: number) => i));
      // console.log({randomColorIndexSet});
      laps[0].Timings.forEach((timing, _i) => {
        const driverColor = interpolateRainbow(randomColorIndexSet[_i] / numDrivers);
        driverIDSet.push({
          driverID: timing.driverId,
          isSelected: true,
          driverColor,
          value: timing.driverId,
          label: timing.driverId
        });
      });
      // console.log({ driverIDSet });
      let minLapTime = Infinity;
      let maxLapTime = -Infinity;
      let avgLapTime = 0;
      let numTotalLaps = 0;
      let transformedLaps: lapTime[] = laps.map((lap, lapNum) => {
        let driverIDLapMap: lapTime = { lapNum: lapNum + 1 };
        lap.Timings.forEach(timing => {
          const lapTime = TimeHelper.raceTimeToMs(timing.time);
          avgLapTime += lapTime;
          numTotalLaps += 1;
          driverIDLapMap[timing.driverId] = lapTime;
          if (lapTime > maxLapTime) maxLapTime = lapTime;
          if (lapTime < minLapTime) minLapTime = lapTime;
        });
        return driverIDLapMap;
      });
      setMinimumLapTime(minLapTime);
      avgLapTime /= numTotalLaps;
      setAverageLapTime(avgLapTime);
      // console.log({ avgLapTime, minLapTime, avgAsRaceTime: TimeHelper.msToRaceTime(avgLapTime) });
      const logScaleFunction = scaleLog().domain([minLapTime, maxLapTime]).range([1, 100]).base(10);
      let logLapFormatterMap: { [ms: number]: string } = {};
      let transformedLogLaps: lapTime[] = laps.map((lap, lapNum) => {
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
      let myPitstopLapMap: PitStopLapMap = {};
      pitstops?.forEach(pitstop => {
        if (!myPitstopLapMap[pitstop.lap]) myPitstopLapMap[pitstop.lap] = {};
        myPitstopLapMap[pitstop.lap][pitstop.driverId] = 'pitstop';
      });
      // let customCirclesPositions: CustomCircle[] = [];
      let transformedPositions: lapTime[] = laps.map((lap, lapNum) => {
        let driverIDPositionMap: lapTime = { lapNum: lapNum + 1 };
        lap.Timings.forEach(timing => {
          driverIDPositionMap[timing.driverId] = parseInt(timing.position);
          // if (pitstopLapMap[lapNum + 1] && pitstopLapMap[lapNum + 1][timing.driverId]) customCirclesPositions.push({cx: lapNum + 1, cy: parseInt(timing.position)});
        });
        return driverIDPositionMap;
      });
      // console.log({ customCirclesPositions });
      let lap0Position: lapTime = { lapNum: 0 };
      // console.log({ raceQualifying });
      raceQualifying?.QualifyingResults?.forEach(result => {
        lap0Position[result.Driver.driverId] = parseInt(result.position);
      })
      transformedPositions.unshift(lap0Position);
      // console.log({ transformedLaps, transformedPositions });

      setScaleDomain({ min: minLapTime, max: maxLapTime });
      setLogLapFormatterMap(logLapFormatterMap);
      setLogScaleFunction({ theFunc: logScaleFunction });
      setLapTimes(transformedLaps);
      setLogLapTimes(transformedLogLaps)
      setPositionTrace(transformedPositions);
      setPitstopLapMap(myPitstopLapMap);
      setDriverIDSet(driverIDSet);
    }
  }, [raceQualifying, laps, pitstops]);

  const onChange = (event: MultiValue<DriverIDElement>) => {
    setSelectFirstLoad(false);
    // console.log({ event });
    const driverIDSetCopy = [...driverIDSet];
    const selectedDrivers = event.map(e => e.driverID);
    setDriverIDSet(driverIDSetCopy.map(driver =>
      selectedDrivers.indexOf(driver.driverID) > -1 ? { ...driver, isSelected: true } : { ...driver, isSelected: false }
    ));
  };
  const handlePositionChange = (checked: boolean) => {
    setShowPositions(checked);
  }
  const handleUseLapTypeChange = (value: UseLapType) => {
    setUseLapType(value);
  }
  const selectAllDrivers = () => {
    setSelectFirstLoad(false);
    setDriverIDSet(driverIDSet.map(driver => { return { ...driver, isSelected: true } }));
  };
  const raceLapTimesContent = <>
    {laps && laps.length < MINIMUM_KNOWN_NUM_LAPS_SPA && <span className="material-icons-align">
      <span className="material-icons gold">warning</span>
      All laps may not be available
      <span className="material-icons gold">warning</span>
    </span>}
    <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline' }}>
      {!showPositions && <span className={`material-icons-align ${styles.floatRight}`}>
        <span>Use Laps:</span>
        <select name="lapType" id="lapType" onChange={(event) => handleUseLapTypeChange(event.target.value as UseLapType)} defaultValue={'all'}>
          <option value="avg">{lapTypeFullName['avg']}</option>
          <option value="all">{lapTypeFullName['all']}</option>
          <option value="log">{lapTypeFullName['log']}</option>
        </select>
      </span>}
      <span className={`material-icons-align ${styles.floatRight}`}>
        <span>Show Position Trace:</span>
        <Switch checked={showPositions} onChange={handlePositionChange} height={20} width={40} onColor="#ff0000" />
      </span>
      {!selectFirstLoad && <span><button onClick={selectAllDrivers}>Select all drivers</button></span>}
    </span>

    <Select placeholder={'Search drivers...'} options={driverIDSet} isMulti isSearchable onChange={onChange} styles={customStyles(isDarkMode)} value={selectFirstLoad ? [] : driverIDSet.filter(driver => driver.isSelected)} />

    {(useLapType === 'all' || useLapType === 'avg') && lapTimes && !showPositions && driverIDSet.find(driver => driver.isSelected) &&
      <GenericTrace driverIDSet={driverIDSet} grid
        domain={useLapType === 'all' ? ['dataMin - 1000', 'dataMax + 2000'] : [minimumLapTime, averageLapTime]} data={lapTimes}
        width={1200} height={500}
        chartTitle={`${year} ${race?.raceName} Lap Comparison ${useLapType === 'avg' ? '(outlier laps removed)' : ''}`}
        tickCount={10} formatter={(ms: number) => TimeHelper.msToRaceTime(ms)} dot={false} pitstopLapMap={pitstopLapMap} />
    }
    {useLapType == 'log' && logScaleFunction && logLapTimes && !showPositions && driverIDSet.find(driver => driver.isSelected) &&
      <GenericTrace driverIDSet={driverIDSet} grid
        domain={['dataMin', 'dataMax']} data={logLapTimes}
        width={1200} height={500}
        chartTitle={`${year} ${race?.raceName} Log Lap Comparison`}
        scale={logScaleFunction.theFunc}
        tickCount={2} interval={1}
        formatter={(ms: number) => (logLapFormatterMap && logLapFormatterMap[ms]) || TimeHelper.msToRaceTime(logScaleFunction.theFunc.invert(ms))}
        dot={false} pitstopLapMap={pitstopLapMap} />
    }
    {showPositions && driverIDSet.find(driver => driver.isSelected) &&
      <GenericTrace driverIDSet={driverIDSet}
        data={positionTrace || []} domain={[0.5, driverIDSet.length + .5]}
        width={1200} height={500}
        chartTitle={`${year} ${race?.raceName} Position Trace`}
        tickCount={driverIDSet.length} reversed={true} dot={false} strokeWidth={3}
        pitstopLapMap={pitstopLapMap}
        formatter={(position: number) => `P${position}`} />
    }
    {!driverIDSet.find(driver => driver.isSelected) && <div style={{ height: '500px' }}></div>}
  </>;
  return (
    <div className={`page-content ${isDarkMode ? 'dark' : 'light'}`}>
      <div className={`${styles.centered}`}>
        <UseReduxAsyncStatuses
          statuses={[raceStatus, raceQualifyingStatus, lapsStatus, pitstopsStatus]}
          successContent={raceLapTimesContent}
          errors={[raceError, raceQualifyingError, lapsError, pitstopsError]}
          loadingInterText={'Laps'}
          fetchActions={[fetchResult, fetchQualifying, fetchLaps, fetchPitStops]}
          fetchParamss={[{ year: year || '', round: round || '' }, { year: year || '', round: round || '' }, { year: year || '', round: round || '' }, { year: year || '', round: round || '' }]} />
      </div>
    </div>
  );
};
