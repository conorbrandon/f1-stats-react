import React, { useEffect, useState } from "react";
import styles from "./RaceReplay.module.css";

import { motion } from "framer-motion";

import { TimeHelper } from "../../helpers/TimeHelper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLaps, selectLaps } from "../../app/laps/lapsSlice";
import { useParams } from "react-router-dom";
import { selectResult } from "../../app/result/resultSlice";
import { shuffle } from "../../helpers/GenericHelpers";
import { interpolateRainbow } from "d3-scale-chromatic";

interface TotalTimeDriverMap {
  [driverID: string]: {
    totalTime: number,
    timePercentages: number[],
    cumTimePercentage: number,
    positions: any[],
    driverColor: string
  }
};

export const RaceReplay = ({ }) => {
  const { year, round } = useParams();
  const [duration, setDuration] = useState<number>(45);
  const [leftIntervals, setLeftIntervals] = useState<number[]>();
  const [totalTimeDriverMap, setTotalTimeDriverMap] = useState<TotalTimeDriverMap>();
  const [bestTotalTime, setBestTotalTime] = useState<number>();
  const width = (document.body.clientWidth * 0.90);

  const dispatch = useAppDispatch();
  const laps = useAppSelector(selectLaps);
  const result = useAppSelector(selectResult);

  useEffect(() => {
    console.log({ laps });
    if (!laps.length) dispatch(fetchLaps({year: year || '', round: round || ''}));
    if (laps.length && result?.Results?.length) {
      const leftInterval = (width - 20) / laps.length; // width of squares
      const myLeftIntervals: any = laps.map((_, i) => leftInterval * (i + 1));
      myLeftIntervals.unshift(0);
      console.log({ myLeftIntervals });
      setLeftIntervals(myLeftIntervals);

      let myTotalTimeDriverMap: TotalTimeDriverMap = {};
      let winningDriver: string = '';
      const numDrivers = laps[0].Timings.length;
      const randomColorIndexSet: number[] = shuffle(Array.from({ length: numDrivers }, (_, i: number) => i));
    
      for (let i = 0; i < laps.length; i++) {
        const lap = laps[i];
        for (let j = 0; j < lap.Timings.length; j++) {
          const timing = lap.Timings[j];
          if (i == 0 && timing.position === '1') winningDriver = timing.driverId;
          if (myTotalTimeDriverMap[timing.driverId] === undefined) {
            myTotalTimeDriverMap[timing.driverId] = {
              totalTime: 0,
              timePercentages: [0],
              cumTimePercentage: 0,
              positions: [(parseInt(timing.position) - 1) * 25],
              driverColor: interpolateRainbow(randomColorIndexSet[j] / numDrivers)
            };
          }
          myTotalTimeDriverMap[timing.driverId].totalTime += TimeHelper.raceTimeToMs(timing.time);
          myTotalTimeDriverMap[timing.driverId].positions.push((parseInt(timing.position) - 1) * 25);
        }
      }
      result.Results.forEach(result => {
        if (!myTotalTimeDriverMap[result.Driver.driverId]) return;
        const len = myTotalTimeDriverMap[result.Driver.driverId].positions.length;
        console.log({ len });
        myTotalTimeDriverMap[result.Driver.driverId].positions[len - 1] = (parseInt(result.position) - 1) * 25;
      });
    
      for (let i = 0; i < laps.length; i++) {
        const lap = laps[i];
        for (let j = 0; j < lap.Timings.length; j++) {
          const timing = lap.Timings[j];
          const timePercentage = TimeHelper.raceTimeToMs(timing.time) / myTotalTimeDriverMap[timing.driverId].totalTime;
          // console.log({timePercentage});
          myTotalTimeDriverMap[timing.driverId].cumTimePercentage += timePercentage;
          myTotalTimeDriverMap[timing.driverId].timePercentages.push(myTotalTimeDriverMap[timing.driverId].cumTimePercentage);
        }
      }
      const myBestTotalTime = myTotalTimeDriverMap[winningDriver].totalTime;
      setTotalTimeDriverMap(myTotalTimeDriverMap);
      setBestTotalTime(myBestTotalTime);
      console.log(JSON.stringify(myTotalTimeDriverMap, null, 4));
      console.log({ myBestTotalTime });

    }
  }, [laps, result, dispatch]);

  return (
    <div className={`page-content ${styles.centered}`}>
      <div className={styles.wrapper} style={{ width }}>
        {totalTimeDriverMap && leftIntervals && bestTotalTime && Object.keys(totalTimeDriverMap).map((driverID, _i) => {
          const lapsCompleted = totalTimeDriverMap[driverID].timePercentages.length;
          const leftIntervalsForEachDriver = [...leftIntervals].splice(0, lapsCompleted > laps.length ? lapsCompleted + 1 : lapsCompleted);
          const positions = totalTimeDriverMap[driverID].positions;
          const durationForEachDriver = (totalTimeDriverMap[driverID].totalTime / bestTotalTime) * duration;
          const times = totalTimeDriverMap[driverID].timePercentages;
          console.log({driverID, leftIntervalsForEachDriver, durationForEachDriver, times, positions});
          return <motion.div key={_i}
            className={styles.object}
            style={{ top: _i * 25, left: 0, backgroundColor: totalTimeDriverMap[driverID].driverColor }}
            animate={{ left: leftIntervalsForEachDriver, top: positions }}
            transition={{ duration: durationForEachDriver, times, ease: 'linear' }}
          >{driverID}</motion.div>
        })}
      </div>
    </div>
  );
};
