import React, { useCallback } from "react";
import styles from "./LapTrace.module.css";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TimeHelper } from "../../helpers/TimeHelper";
import { DriverIDSet, lapTime } from "../RaceLapTimes/RaceLapTimes";
import { scaleLinear } from 'd3-scale';
import { useCurrentPng } from "recharts-to-png";
import { saveAs } from 'file-saver';

export interface PitStopLapMap {[lap: string]: {[driverID: string] : any}};
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
  pitstopLapMap?: PitStopLapMap
};
const genericFormatter = (value: number) => value + '';

export const GenericTrace: React.FC<GenericTraceProps> = ({ data, driverIDSet, width, height, chartTitle, scale, domain, tickCount, formatter, reversed, dot, interval, strokeWidth, pitstopLapMap }) => {
  const [getPng, { ref, isLoading }] = useCurrentPng();
  const handleDownload = useCallback(async () => {
    const png = await getPng();
    // Verify that png is not undefined
    if (png) {
      // Download with FileSaver
      saveAs(png, `${chartTitle}.png`);
    }
  }, [getPng]);

  const pitStopIcon = (cx: number, cy: number) => <g>
  <circle cx={cx} cy={cy} r={7} fill='green'></circle>
  <circle cx={cx} cy={cy} r={5} fill='yellow'></circle>
  <circle cx={cx} cy={cy} r={3} fill='red'></circle>
  <circle cx={cx} cy={cy} r={1} fill='white'></circle>
</g>;
  const renderDot = (event: any) => {
    if (!pitstopLapMap) return <></>;
    if (pitstopLapMap[event.index + ''] && pitstopLapMap[event.index + ''][event.dataKey]) {
      console.log(pitstopLapMap[event.index + ''][event.dataKey], { event });
      return pitStopIcon(event.cx, event.cy);
    };
    return <></>;
  };
  const renderActiveDot = (event: any) => {
    if (!pitstopLapMap) return <></>;
    if (pitstopLapMap[event.index + ''] && pitstopLapMap[event.index + ''][event.dataKey]) {
      console.log(pitstopLapMap[event.index + ''][event.dataKey], { event });
      return pitStopIcon(event.cx, event.cy);
    };
    if (event.cy > 0) return <circle cx={event.cx} cy={event.cy} r={5} fill={event.fill}></circle>;
    else return <></>;
  };
  return (
    <div>
      <button onClick={handleDownload} style={{ fontSize: 'medium' }}>
        {isLoading ? 'Downloading...' : 'Download Chart'}
      </button>
      <ResponsiveContainer width={width || '90%'} height={height}>
        <LineChart margin={{ top: 50, left: -10, right: 30, bottom: 30 }} data={data} ref={ref}>
          <text x={(width || 0) / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">{chartTitle || ''}</tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lapNum" interval={1} />
          <YAxis allowDataOverflow={true} scale={scale || scaleLinear()} type="number" domain={domain} interval={interval !== undefined ? interval : 0} tickFormatter={formatter || genericFormatter} width={100} tickCount={tickCount} reversed={reversed || false} />
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
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
