import React, { useCallback } from "react";
import styles from "./LapTrace.module.css";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TimeHelper } from "../../helpers/TimeHelper";
import { DriverIDSet, lapTime } from "../RaceLapTimes/RaceLapTimes";
import { scaleLinear } from 'd3-scale';
import { useCurrentPng } from "recharts-to-png";
import { saveAs } from 'file-saver';
import PirelliTire from "../RaceReplayReMotion/pirelliTire.png";
import { useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";

export interface PitStopLapMap { [lap: string]: { [driverID: string]: any } };
interface GenericTraceProps {
  data: lapTime[],
  driverIDSet: DriverIDSet,
  width: number,
  height: number,
  chartTitle?: string,
  scale?: any
  domain: any[],
  tickCount: number,
  formatter?: (value: number) => string,
  reversed?: boolean,
  dot?: boolean,
  interval?: number,
  strokeWidth?: number,
  pitstopLapMap?: PitStopLapMap,
  grid?: boolean
};
const genericFormatter = (value: number) => value + '';

export const GenericTrace: React.FC<GenericTraceProps> = ({ data, driverIDSet, width, height, chartTitle, scale, domain, tickCount, formatter, reversed, dot, interval, strokeWidth, pitstopLapMap, grid }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const [getPng, { ref, isLoading }] = useCurrentPng();
  const handleDownload = useCallback(async () => {
    const png = await getPng();
    // Verify that png is not undefined
    if (png) {
      // Download with FileSaver
      saveAs(png, `${chartTitle}.png`);
    }
  }, [getPng]);

  const pitStopIcon = (cx: number, cy: number) => {
    // <image x={cx - 5} y={cy - 6} width={'10px'} href={PirelliTire}></image>;
    return <g>
      <circle cx={cx} cy={cy} r={7} fill='green'></circle>
      <circle cx={cx} cy={cy} r={5} fill='yellow'></circle>
      <circle cx={cx} cy={cy} r={3} fill='red'></circle>
      <circle cx={cx} cy={cy} r={1} fill='white'></circle>
    </g>;
  }
  const renderDot = (event: any) => {
    if (!pitstopLapMap) return <></>;
    if (pitstopLapMap[event.index + ''] && pitstopLapMap[event.index + ''][event.dataKey]) {
      // console.log(pitstopLapMap[event.index + ''][event.dataKey], { event });
      return pitStopIcon(event.cx, event.cy);
    };
    return <></>;
  };
  const renderActiveDot = (event: any) => {
    if (!pitstopLapMap) return <></>;
    if (pitstopLapMap[event.index + ''] && pitstopLapMap[event.index + ''][event.dataKey]) {
      // console.log(pitstopLapMap[event.index + ''][event.dataKey], { event });
      return pitStopIcon(event.cx, event.cy);
    };
    if (event.cy > 0) return <circle cx={event.cx} cy={event.cy} r={5} fill={event.fill}></circle>;
    else return <></>;
  };
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={handleDownload} style={{ fontSize: 'x-small', position: 'absolute', zIndex: 2, top: '2rem', left: '6rem' }}>
        {isLoading ? 'Downloading...' : 'Download Chart'}
      </button>
      <ResponsiveContainer width={width || '90%'} height={height}>
        <LineChart margin={{ top: 50, left: -10, right: 30, bottom: 30 }} data={data} ref={ref}>
          <rect width="100%" height="100%" style={{ fill: `${isDarkMode ? 'var(--dark-background-color)' : 'var(--light-background-color)'}` }} />
          <text x={(width || 0) / 2} y={20} fill={`${isDarkMode ? 'white' : 'black'}`} textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">{chartTitle || ''}</tspan>
          </text>
          {grid && <CartesianGrid strokeDasharray="3 3" stroke={`${isDarkMode ? 'white' : 'black'}`} />}
          <XAxis dataKey="lapNum" interval={1} stroke={`${isDarkMode ? 'white' : 'black'}`} />
          <YAxis stroke={`${isDarkMode ? 'white' : 'black'}`} allowDataOverflow={true} scale={scale || scaleLinear()} type="number" domain={domain} interval={interval !== undefined ? interval : 0} tickFormatter={formatter || genericFormatter} width={100} tickCount={tickCount} reversed={reversed || false} />
          <Tooltip itemSorter={(item) => {
            return item.value as number;
          }} formatter={formatter || genericFormatter} position={{ y: -100 }} />
          <Legend />
          {driverIDSet?.filter(driver => driver.isSelected).map((driver, _i) => {
            return <Line key={driver.driverID} type="linear"
              dataKey={driver.driverID} stroke={driver.driverColor} strokeWidth={strokeWidth || 2}
              dot={pitstopLapMap ? renderDot : dot !== undefined ? dot : true}
              activeDot={pitstopLapMap ? renderActiveDot : true}
            />;
          })}
          {/* pitstop legend */}
          {pitstopLapMap && Object.keys(pitstopLapMap).length && <>
            <g>
              <circle cx={'90%'} cy={'5%'} r={7} fill='green'></circle>
              <circle cx={'90%'} cy={'5%'} r={5} fill='yellow'></circle>
              <circle cx={'90%'} cy={'5%'} r={3} fill='red'></circle>
              <circle cx={'90%'} cy={'5%'} r={1} fill='white'></circle>
            </g>
            {/* <image x={'95.5%'} y={'1.7%'} width={'30px'} href={PirelliTire}></image> */}
            <text x={'91%'} y={'5%'} fill={`${isDarkMode ? 'white' : 'black'}`} dominantBaseline={'central'}>
              <tspan fontSize={'14'}>Pit stop</tspan>
            </text></>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
