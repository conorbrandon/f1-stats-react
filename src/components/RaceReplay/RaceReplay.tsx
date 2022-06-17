import React, { useEffect, useRef, useState } from "react";
import styles from "./RaceReplay.module.css";

import { motion, useAnimation } from "framer-motion";

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
    driverColor: string,
    driverLastName?: string
  }
};

export const RaceReplay = ({ }) => {
  const { year, round } = useParams();
  const [duration, setDuration] = useState<number>(15);
  const [leftIntervals, setLeftIntervals] = useState<number[]>();
  const [totalTimeDriverMap, setTotalTimeDriverMap] = useState<TotalTimeDriverMap>();
  const [bestTotalTime, setBestTotalTime] = useState<number>();
  const [winningDriver, setWinningDriver] = useState<string>();
  const [slowestDriver, setSlowestDriver] = useState<string>();
  const [isPaused, setPaused] = useState<boolean>(true);
  const width = (document.body.clientWidth * 0.80);
  const [driverObjectHeight, setDriverObjectHeight] = useState<number>(0); 
  const CANVAS_HEIGHT = 500;
  const [randomColorIndexSet, setRandomColorIndexSet] = useState<number[] | undefined>();

  const dispatch = useAppDispatch();
  const laps = useAppSelector(selectLaps);
  const result = useAppSelector(selectResult);

  useEffect(() => {
    // console.log({ laps });
    if (!laps.length) dispatch(fetchLaps({ year: year || '', round: round || '' }));
    if (laps.length && result?.Results?.length) {
      const leftInterval = (width - 20) / laps.length; // width of squares
      const myLeftIntervals: any = laps.map((_, i) => leftInterval * (i + 1));
      myLeftIntervals.unshift(0);
      // console.log({ myLeftIntervals });
      setLeftIntervals(myLeftIntervals);

      let myTotalTimeDriverMap: TotalTimeDriverMap = {};
      let myWinningDriver: string = '';
      const numDrivers = result.Results.length;
      const myRandomColorIndexSet: number[] = randomColorIndexSet || shuffle(Array.from({ length: numDrivers }, (_, i: number) => i));
      if (!randomColorIndexSet) setRandomColorIndexSet(myRandomColorIndexSet);
      const myDriverObjectHeight = CANVAS_HEIGHT / numDrivers;
      setDriverObjectHeight(myDriverObjectHeight);

      let slowestTotalTime = -Infinity;
      let mySlowestDriver = '';
      for (let i = 0; i < laps.length; i++) {
        const lap = laps[i];
        for (let j = 0; j < lap.Timings.length; j++) {
          const timing = lap.Timings[j];
          if (i == 0 && timing.position === '1') myWinningDriver = timing.driverId;
          if (myTotalTimeDriverMap[timing.driverId] === undefined) {
            myTotalTimeDriverMap[timing.driverId] = {
              totalTime: 0,
              timePercentages: [0],
              cumTimePercentage: 0,
              positions: [(parseInt(timing.position) - 1) * myDriverObjectHeight],
              driverColor: interpolateRainbow(myRandomColorIndexSet[j] / numDrivers),
              driverLastName: undefined
            };
          }
          myTotalTimeDriverMap[timing.driverId].totalTime += TimeHelper.raceTimeToMs(timing.time);
          if (myTotalTimeDriverMap[timing.driverId].totalTime > slowestTotalTime) mySlowestDriver = timing.driverId;
          myTotalTimeDriverMap[timing.driverId].positions.push((parseInt(timing.position) - 1) * myDriverObjectHeight);
        }
      }
      setSlowestDriver(mySlowestDriver);
      result.Results.forEach(result => {
        // fill in starting position for drivers that crashed on first lap
        if (!myTotalTimeDriverMap[result.Driver.driverId]) {
          console.log('missing from laps', result.Driver.driverId);
          myTotalTimeDriverMap[result.Driver.driverId] = {
            totalTime: 0,
            timePercentages: [1],
            cumTimePercentage: 0,
            positions: [(parseInt(result.position) - 1) * myDriverObjectHeight],
            driverColor: 'black',
            driverLastName: result.Driver.familyName
          };
          return;
        }
        myTotalTimeDriverMap[result.Driver.driverId].driverLastName = result.Driver.familyName;
        const len = myTotalTimeDriverMap[result.Driver.driverId].positions.length;
        // console.log({ len });
        myTotalTimeDriverMap[result.Driver.driverId].positions[len - 1] = (parseInt(result.position) - 1) * myDriverObjectHeight;
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
      const myBestTotalTime = myTotalTimeDriverMap[myWinningDriver].totalTime;
      setTotalTimeDriverMap(myTotalTimeDriverMap);
      setBestTotalTime(myBestTotalTime);
      setWinningDriver(myWinningDriver);
      // console.log(JSON.stringify(myTotalTimeDriverMap, null, 4));
      // console.log({ myBestTotalTime });

    }
  }, [laps, result, dispatch, duration]);

  const carControls = useAnimation();
  const handlePause = () => {
    if (isPaused) {
      carControls.start('animate');
    } else if (!isPaused) {
      console.log(refArray);
      const winningDriverEl = refArray.current.find(el => el?.id === winningDriver);
      const durationAnimationRan = (parseInt(winningDriverEl?.style.left.replace('px', '') || '0') / width) * duration;
      console.log({ durationAnimationRan });
      carControls.stop();
    }
    setPaused(!isPaused);
  };

  const refArray = useRef<(HTMLDivElement | null)[]>([]);
  const handleDurationChange = (newValue: number) => {
    setDuration(newValue);
    carControls.stop();
    setPaused(true);
  };
  const handleAnimationComplete = (driverID: string) => {
    if (driverID === slowestDriver) setPaused(true);
  };

  return (
    <div className={`page-content ${styles.centered}`}>
      <div className={styles.replayHeader}>
        <button style={{ width: '10%' }} onClick={() => handlePause()}>{isPaused ? 'play' : 'pause'}</button><br />
        <span className='material-icons-align'>
          Select duration: <input type="range" min="15" max="120" 
            onChange={(event) => handleDurationChange(event.target.valueAsNumber)} 
            defaultValue={duration} 
          /> 
          Current: {duration} seconds
        </span>
      </div>
      <div className={styles.outerWrapper}>
        {totalTimeDriverMap && <div className={styles.positionAxis}>
          {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i}>{i + 1}</div>)}
        </div>}
        {totalTimeDriverMap && <div className={`${styles.positionAxis} ${styles.positionAxisRight}`}>
          {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i}>{i + 1}</div>)}
        </div>}
        <div className={styles.innerWrapper} style={{ width }}>
          {totalTimeDriverMap && leftIntervals && bestTotalTime && Object.keys(totalTimeDriverMap).map((driverID, _i) => {
            const lapsCompleted = totalTimeDriverMap[driverID].timePercentages.length;
            const leftIntervalsForEachDriver = [...leftIntervals].splice(0, lapsCompleted > laps.length ? lapsCompleted + 1 : lapsCompleted);
            const positions = totalTimeDriverMap[driverID].positions;
            const durationForEachDriver = (totalTimeDriverMap[driverID].totalTime / bestTotalTime) * duration;
            const times = totalTimeDriverMap[driverID].timePercentages;
            const driverLastName = totalTimeDriverMap[driverID].driverLastName?.replaceAll(" ", "_");
            console.log({ driverID, leftIntervalsForEachDriver, durationForEachDriver, times, positions });
            const variant = {
              animate: {
                left: leftIntervalsForEachDriver,
                top: positions,
                transition: { duration: durationForEachDriver, times, ease: 'linear' }
              }
            };
            return durationForEachDriver ?
              <motion.div key={_i} id={driverID}
                className={styles.object}
                style={{ 
                  /* top: _i * driverObjectHeight, left: 0, */ 
                  color: totalTimeDriverMap[driverID].driverColor,
                  // width: `${driverObjectHeight - 5}px`, 
                  height: `${driverObjectHeight - 5}px` 
                }}
                // animate={{ left: leftIntervalsForEachDriver, top: positions }}
                // transition={{ duration: durationForEachDriver, times, ease: 'linear' }}
                initial={{ left: leftIntervalsForEachDriver[0], top: positions[0] }}
                variants={variant}
                animate={carControls}
                ref={(ref) => {
                  refArray.current[_i] = ref;
                }}
                onAnimationComplete={(definition) => handleAnimationComplete(driverID)}
              ><span className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</span></motion.div>
              :
              <div 
                key={_i} id={driverID} className={styles.object} 
                style={{ 
                  left: 0, 
                  top: positions[0], 
                  color: totalTimeDriverMap[driverID].driverColor, 
                  // width: `${driverObjectHeight - 5}px`, 
                  height: `${driverObjectHeight - 5}px` 
                }}>
                  <div className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</div>
              </div>
          })}
          {totalTimeDriverMap && <div>
            {Object.keys(totalTimeDriverMap).map((_, i) => 
              <div key={i} className={styles.positionLines} style={{ top: ((i + 1) * driverObjectHeight) - (driverObjectHeight / 2) }}></div>
            )}
        </div>}
        </div>
        {leftIntervals && <div className={styles.lapAxis}>
          {leftIntervals.map((_, i) => i % 2 === 0 ? <div key={i}>{i}</div> : <></>)}
        </div>}
      </div>
    </div>
  );
};
