import React, { useEffect, useState } from "react";
import styles from "./RaceLapTimes.module.css";

import { useOutletContext } from "react-router-dom";
import { RaceOutletContext } from "../Race/Race";
import Select, { MultiValue, StylesConfig } from 'react-select';
import Switch from "react-switch";
import { GenericTrace } from "../GenericTrace/GenericTrace";
import { scaleLog } from 'd3-scale';
import { TimeHelper } from "../../helpers/TimeHelper";

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

export const RaceLapTimes = ({ }) => {
  const { lapTimes, scaleDomain, driverIDSet, setDriverIDSet, positionTrace, race, year, round, logLapFormatterMap, logLapTimes, logScaleFunction } = useOutletContext<RaceOutletContext>();
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
          formatter={(ms: number) => logLapFormatterMap[ms] || TimeHelper.msToRaceTime(logScaleFunction.theFunc.invert(ms))} 
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
