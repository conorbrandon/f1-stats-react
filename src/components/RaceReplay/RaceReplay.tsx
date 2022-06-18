import React, { useEffect, useRef, useState } from "react";
import styles from "./RaceReplay.module.css";

import { motion, useAnimation } from "framer-motion";

import { TimeHelper } from "../../helpers/TimeHelper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLaps, selectLaps } from "../../app/laps/lapsSlice";
import { useParams } from "react-router-dom";
import Switch from "react-switch";
import { selectResult } from "../../app/result/resultSlice";
import { shuffle } from "../../helpers/GenericHelpers";
import { interpolateRainbow } from "d3-scale-chromatic";
import { fetchPitStops, selectPitStops } from "../../app/pitstops/pitStopsSlice";

interface TotalTimeDriverMap {
  [driverID: string]: {
    totalTime: number,
    timePercentages: number[],
    cumTimePercentage: number,
    positions: number[],
    driverColor: string,
    driverLastName?: string,
    pitStopStyles: string[],
    displaySettings?: string[] // for drivers that started in the pitlane
  }
};

export const RaceReplay = ({ }) => {
  const { year, round } = useParams();

  // component display variables
  const [leftIntervals, setLeftIntervals] = useState<number[]>();
  const [randomColorIndexSet, setRandomColorIndexSet] = useState<number[] | undefined>();
  const [driverObjectHeight, setDriverObjectHeight] = useState<number>(0);
  const [winningDriver, setWinningDriver] = useState<string>();
  const [slowestDriver, setSlowestDriver] = useState<string>();
  const [totalTimeDriverMap, setTotalTimeDriverMap] = useState<TotalTimeDriverMap>();
  const [bestTotalTime, setBestTotalTime] = useState<number>();

  // component control variables
  const [duration, setDuration] = useState<number>(30);
  const [isPaused, setPaused] = useState<boolean>(true);
  const [displayAllLaps, setDisplayAllLaps] = useState<boolean>(false);
  const THIRD_OF_AVG_NUM_LAPS = 18;
  const [width, setWidth] = useState((document.body.clientWidth * .80) * THIRD_OF_AVG_NUM_LAPS);
  const OUTER_WRAPPER_RIGHT_EDGE = document.body.clientWidth * .85;
  const CANVAS_HEIGHT = 500;
  const PIT_STOP_STYLE = 'solid 30px gold';

  // required data for the component
  const dispatch = useAppDispatch();
  const laps = useAppSelector(selectLaps);
  const result = useAppSelector(selectResult);  // fetched in the race component overall
  // optional data for the component
  const pitstops = useAppSelector(selectPitStops);

  const [followLeadDriverLeftOffset, setFollowLeadDriverLeftOffset] = useState<number[]>();
  const [followLeadDriverTimes, setFollowLeadDriverTimes] = useState<number[]>();

  useEffect(() => {
    if (!laps?.length) dispatch(fetchLaps({ year: year || '', round: round || '' }));
    if (!pitstops?.length) dispatch(fetchPitStops({ year: year || '', round: round || '' }));

    if (laps?.length && result?.Results?.length) {
      // set left intervals
      const leftInterval = (width - 20) / laps.length; // width of squares
      const myLeftIntervals: any = laps.map((_, i) => leftInterval * (i + 1));
      myLeftIntervals.unshift(0);
      setLeftIntervals(myLeftIntervals);

      // set driver colors, stateful for repeatability when changing duration
      const numDrivers = result.Results.length;
      const myRandomColorIndexSet: number[] = randomColorIndexSet || shuffle(Array.from({ length: numDrivers }, (_, i: number) => i));
      if (!randomColorIndexSet) setRandomColorIndexSet(myRandomColorIndexSet);

      // height of driver markers
      const myDriverObjectHeight = CANVAS_HEIGHT / numDrivers;
      setDriverObjectHeight(myDriverObjectHeight);

      let myTotalTimeDriverMap: TotalTimeDriverMap = {};
      let myWinningDriver: string = '';
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
              positions: [0], // will fill in from results in next loop
              driverColor: interpolateRainbow(myRandomColorIndexSet[j] / numDrivers),
              driverLastName: undefined,
              pitStopStyles: []
            };
          }
          // add to total time
          myTotalTimeDriverMap[timing.driverId].totalTime += TimeHelper.raceTimeToMs(timing.time);
          // find the driver with the longest total time to switch play button to pause button
          if (myTotalTimeDriverMap[timing.driverId].totalTime > slowestTotalTime) mySlowestDriver = timing.driverId;
          // set positions for distance from top of container
          myTotalTimeDriverMap[timing.driverId].positions.push((parseInt(timing.position) - 1) * myDriverObjectHeight);
        }
      }
      setWinningDriver(myWinningDriver);
      setSlowestDriver(mySlowestDriver);

      // set starting position on grid and final finishing position from results
      result.Results.forEach(_result => {
        // fill in starting position for drivers that crashed on first lap
        if (!myTotalTimeDriverMap[_result.Driver.driverId]) {
          console.log('missing from laps', _result.Driver.driverId);
          myTotalTimeDriverMap[_result.Driver.driverId] = {
            totalTime: 0,
            timePercentages: [1],
            cumTimePercentage: 0,
            positions: [(parseInt(_result.position) - 1) * myDriverObjectHeight],
            driverColor: 'black',
            driverLastName: _result.Driver.familyName,
            pitStopStyles: []
          };
          return;
        }
        myTotalTimeDriverMap[_result.Driver.driverId].driverLastName = _result.Driver.familyName;
        const len = myTotalTimeDriverMap[_result.Driver.driverId].positions.length;
        myTotalTimeDriverMap[_result.Driver.driverId].positions[0] = (parseInt(_result.grid) - 1) * myDriverObjectHeight; // pitlane start will have 0 grid position, will result in a negative top position
        if (myTotalTimeDriverMap[_result.Driver.driverId].positions[0] < 0) myTotalTimeDriverMap[_result.Driver.driverId].positions[0] = CANVAS_HEIGHT;
        myTotalTimeDriverMap[_result.Driver.driverId].positions[len - 1] = (parseInt(_result.position) - 1) * myDriverObjectHeight;
      });

      // use total time to find fractional then cumulative time slice for each lap
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

      // add pitstops if they exist for this race
      if (pitstops && pitstops.length) {
        for (let i = 0; i < pitstops.length; i++) {
          const pitstop = pitstops[i];
          // if a driver had a pitstop(s), fill an array with blank styles
          if (!myTotalTimeDriverMap[pitstop.driverId].pitStopStyles.length)
            myTotalTimeDriverMap[pitstop.driverId].pitStopStyles = Array.from({ length: myTotalTimeDriverMap[pitstop.driverId].positions.length }, () => 'solid 1px transparent');
          // set the indices of the laps they actually took a pitstop on to our pitstop indicator style
          myTotalTimeDriverMap[pitstop.driverId].pitStopStyles[parseInt(pitstop.lap)] /* or - 1? play around with this*/ = PIT_STOP_STYLE;
        }
      }
      setTotalTimeDriverMap(myTotalTimeDriverMap);

      // the winning driver had the baseline total race time to use for duration calculations
      const myBestTotalTime = myTotalTimeDriverMap[myWinningDriver].totalTime;
      setBestTotalTime(myBestTotalTime);

    }
  }, [laps, result, dispatch, duration, pitstops, displayAllLaps]);

  const carControls = useAnimation();
  const handlePause = () => {
    if (isPaused) {
      carControls.start('animate');
    } else if (!isPaused) {
      // TODO
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

  const handleDisplayAllLapsChange = (checked: boolean) => {
    setDisplayAllLaps(checked);
    checked ? setWidth(document.body.clientWidth * 0.80) : setWidth((((laps?.length || 0) / 3) || THIRD_OF_AVG_NUM_LAPS) * (document.body.clientWidth * 0.80));
  };

  const innerWrapperForDisplayAllLaps = <div className={styles.innerWrapper} style={{ width }}>
    {totalTimeDriverMap && leftIntervals && bestTotalTime && laps && Object.keys(totalTimeDriverMap).map((driverID, _i) => {
      const lapsCompleted = totalTimeDriverMap[driverID].timePercentages.length;
      const leftIntervalsForEachDriver = [...leftIntervals].splice(0, lapsCompleted > laps.length ? lapsCompleted + 1 : lapsCompleted);
      const positions = totalTimeDriverMap[driverID].positions;
      const durationForEachDriver = (totalTimeDriverMap[driverID].totalTime / bestTotalTime) * duration;
      const pitLaneStart = positions[0] >= CANVAS_HEIGHT && durationForEachDriver;
      let display = Array.from({ length: lapsCompleted }, (_) => 'block');
      if (pitLaneStart) {
        display[0] = 'none';
      }
      const times = totalTimeDriverMap[driverID].timePercentages;
      const driverLastName = totalTimeDriverMap[driverID].driverLastName?.replaceAll(" ", "_");
      const pitstops = totalTimeDriverMap[driverID].pitStopStyles;
      // console.log({ driverID, leftIntervalsForEachDriver, durationForEachDriver, times, positions, pitstops });
      const variant = {
        animate: {
          left: leftIntervalsForEachDriver,
          top: positions,
          borderRight: pitstops,
          display,
          transition: { duration: durationForEachDriver, times, ease: 'linear' }
        }
      };
      return durationForEachDriver ?
        // animated drivers
        <motion.div key={_i} id={driverID}
          className={styles.object}
          style={{
            color: totalTimeDriverMap[driverID].driverColor,
            height: `${driverObjectHeight - 5}px`
          }}
          initial={{ left: leftIntervalsForEachDriver[0], top: positions[0], display: display[0] }}
          variants={variant}
          animate={carControls}
          ref={(ref) => {
            refArray.current[_i] = ref;
          }}
          onAnimationComplete={(definition) => handleAnimationComplete(driverID)}
        >
          <span className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</span>
        </motion.div>
        :
        // drivers that crashed on the first lap
        <div
          key={_i} id={driverID} className={styles.object}
          style={{
            left: 0,
            top: positions[0],
            color: totalTimeDriverMap[driverID].driverColor,
            height: `${driverObjectHeight - 5}px`
          }}>
          <span className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</span>
        </div>
    })}
    {/* y axis, laps */}
    {leftIntervals && <div className={styles.lapAxis}>
      {leftIntervals.map((_, i) => i % 2 === 0 ? <div key={i}>{i}</div> : <></>)}
    </div>}
    {/* cartesian axis dotted lines */}
    {totalTimeDriverMap && <div>
      {Object.keys(totalTimeDriverMap).map((_, i) =>
        <div key={i} className={styles.positionLines} style={{ top: ((i + 1) * driverObjectHeight) - (driverObjectHeight / 2) }}></div>
      )}
    </div>}
  </div>;


  useEffect(() => {
    if (!displayAllLaps && totalTimeDriverMap) {
      let myFollowLeadDriverTimes = laps?.map((lap, i) => {
        const leadDriverTimePercentage = totalTimeDriverMap[lap.Timings[0].driverId].timePercentages[i];
        return leadDriverTimePercentage;
      }) || [];
      myFollowLeadDriverTimes.push(1);
      setFollowLeadDriverTimes(myFollowLeadDriverTimes);
      console.log({ myFollowLeadDriverTimes });
    }
  }, [displayAllLaps, totalTimeDriverMap]);
  const innerWrapperForFollowLeadDriver = <>{totalTimeDriverMap && /* followLeadDriverLeftOffset && */ followLeadDriverTimes && 
    <motion.div
      className={styles.innerWrapper}
      style={{ width, position: 'absolute' }}
      initial={{ left: '85%' }}
      variants={{
        animate: {
          left: leftIntervals?.map((interval, i) => {
            let offset;
            return (0 - interval) + OUTER_WRAPPER_RIGHT_EDGE;
          }),
          transition: { duration, times: followLeadDriverTimes, ease: 'linear' }
        }
      }}
      animate={carControls}
    >
      {totalTimeDriverMap && leftIntervals && bestTotalTime && laps && Object.keys(totalTimeDriverMap).map((driverID, _i) => {
        const lapsCompleted = totalTimeDriverMap[driverID].timePercentages.length;
        const leftIntervalsForEachDriver = [...leftIntervals].splice(0, lapsCompleted > laps.length ? lapsCompleted + 1 : lapsCompleted);
        const positions = totalTimeDriverMap[driverID].positions;
        const durationForEachDriver = (totalTimeDriverMap[driverID].totalTime / bestTotalTime) * duration;
        const pitLaneStart = positions[0] >= CANVAS_HEIGHT && durationForEachDriver;
        let display = Array.from({ length: lapsCompleted }, (_) => 'block');
        if (pitLaneStart) {
          display[0] = 'none';
        }
        const times = totalTimeDriverMap[driverID].timePercentages;
        const driverLastName = totalTimeDriverMap[driverID].driverLastName?.replaceAll(" ", "_");
        const pitstops = totalTimeDriverMap[driverID].pitStopStyles;
        console.log({ driverID, leftIntervalsForEachDriver, durationForEachDriver, times, positions, pitstops });
        const variant = {
          animate: {
            left: leftIntervalsForEachDriver,
            top: positions,
            borderRight: pitstops,
            display,
            transition: { duration: durationForEachDriver, times, ease: 'linear' }
          }
        };
        return durationForEachDriver ?
          // animated drivers
          <motion.div key={_i} id={driverID}
            className={styles.object}
            style={{
              color: totalTimeDriverMap[driverID].driverColor,
              height: `${driverObjectHeight - 5}px`
            }}
            initial={{ left: leftIntervalsForEachDriver[0], top: positions[0], display: display[0] }}
            variants={variant}
            animate={carControls}
            ref={(ref) => {
              refArray.current[_i] = ref;
            }}
            onAnimationComplete={(definition) => handleAnimationComplete(driverID)}
          >
            <span className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</span>
          </motion.div>
          :
          // drivers that crashed on the first lap
          <div
            key={_i} id={driverID} className={styles.object}
            style={{
              left: 0,
              top: positions[0],
              color: totalTimeDriverMap[driverID].driverColor,
              height: `${driverObjectHeight - 5}px`
            }}>
            <span className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</span>
          </div>
      })}
      {/* y axis, laps */}
      {leftIntervals && <div className={styles.lapAxis}>
        {leftIntervals.map((_, i) => {
          if (!displayAllLaps) return Array.from({ length: 5 }).map((_) => <div key={i}>{i}</div>);
          return i % 2 === 0 ? <div key={i}>{i}</div> : <></>;
        })}
      </div>}
      {/* cartesian axis dotted lines */}
      {totalTimeDriverMap && <div>
        {Object.keys(totalTimeDriverMap).map((_, i) =>
          <div key={i} className={styles.positionLines} style={{ top: ((i + 1) * driverObjectHeight) - (driverObjectHeight / 2) }}></div>
        )}
      </div>}
    </motion.div>
  }</>;

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
        <span className="material-icons-align">
          {'Display all laps'}
          <Switch checked={displayAllLaps} onChange={handleDisplayAllLapsChange} />
        </span>
        <span>
          <span style={{ textDecoration: 'underline' }}>Legend</span><br />
          <span style={{ borderRight: PIT_STOP_STYLE, paddingRight: '1rem' }}>Pitstop:</span><br />
          Empty grid slots indicate Pit Lane start
        </span>
      </div>

      <div className={styles.outerWrapper}>
        {totalTimeDriverMap && <div className={styles.positionAxis}>
          {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i}>{i + 1}</div>)}
        </div>}
        {totalTimeDriverMap && <div className={`${styles.positionAxis} ${styles.positionAxisRight}`}>
          {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i}>{i + 1}</div>)}
        </div>}
        {displayAllLaps ? innerWrapperForDisplayAllLaps : innerWrapperForFollowLeadDriver}
      </div>
    </div>
  );
};
