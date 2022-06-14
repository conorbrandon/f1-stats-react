import React from "react";
import styles from "./GenericVictoryTrace.module.css";

import { VictoryLine, VictoryChart } from "victory";

export type VictoryData = {x: number, y: number}[];
interface GenericVictoryTraceProps {
  width: string,
  height: string,
  data: VictoryData
}

export const GenericVictoryTrace: React.FC<GenericVictoryTraceProps> = ({ width, height, data }) => {
  return (
    <div style={{width, height}}>
      <VictoryChart width={1200} height={450} >
        <VictoryLine animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }} data={data} />
      </VictoryChart>
    </div>
  );
};
