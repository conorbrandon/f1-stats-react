import React, { useEffect, useRef, useState } from "react";
import styles from "./RaceReplay.module.css";

import { motion, useAnimation } from "framer-motion";

import { TimeHelper } from "../../helpers/TimeHelper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLaps, selectLaps, selectLapsError, selectLapsStatus } from "../../app/laps/lapsSlice";
import { useOutletContext, useParams } from "react-router-dom";
import Switch from "react-switch";
import { selectResult } from "../../app/result/resultSlice";
import { shuffle } from "../../helpers/GenericHelpers";
import { interpolateRainbow } from "d3-scale-chromatic";
import { fetchPitStops, selectPitStops, selectPitStopsError, selectPitStopsStatus } from "../../app/pitstops/pitStopsSlice";
import { UseReduxAsyncStatuses } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import { AppOutletContext } from "../../App";

interface TotalTimeDriverMap {
  [driverID: string]: {
    totalTime: number,
    timePercentages: number[],
    cumTimePercentage: number,
    positions: number[],
    driverColor: string,
    driverLastName?: string,
    pitStopStyles: string[],
    displaySettings?: string[] // for drivers that started in the pitlane,
    constructorID: string
  }
};

export const RaceReplay = ({ }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const { year, round } = useParams();

  // component display variables
  const [leftIntervals, setLeftIntervals] = useState<number[]>();
  const [randomColorIndexSet, setRandomColorIndexSet] = useState<number[] | undefined>();
  const [driverObjectHeight, setDriverObjectHeight] = useState<number>(0);
  const [winningDriver, setWinningDriver] = useState<string>();
  const [slowestDriver, setSlowestDriver] = useState<string>();
  const [totalTimeDriverMap, setTotalTimeDriverMap] = useState<TotalTimeDriverMap>();
  const [bestTotalTime, setBestTotalTime] = useState<number>();
  const [lapPausedOnForDriver, setLapPausedOnForDriver] = useState<{[driverID: string]: number}>();
  const [positionPausedOnForDriver, setPositionPausedOnForDriver] = useState<{
    [driverID: string]: {
      left: number, 
      top: number,
      borderBottom: number
    }
  }>();

  // component control variables
  const [duration, setDuration] = useState<number>(30);
  const [timeAnimationStarted, setTimeAnimationStarted] = useState<number>(0);
  const [timeAnimationRan, setTimeAnimationRan] = useState<number>(0);
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
  const lapsStatus = useAppSelector(selectLapsStatus);
  const lapsError = useAppSelector(selectLapsError);
  const result = useAppSelector(selectResult);  // fetched in the race component overall
  // optional data for the component
  const pitstops = useAppSelector(selectPitStops);
  const pitstopsStatus = useAppSelector(selectPitStopsStatus);
  const pitstopsError = useAppSelector(selectPitStopsError);

  // timing of scrolling motion.div to match lead driver position
  const [followLeadDriverTimes, setFollowLeadDriverTimes] = useState<number[]>();
  const refArray = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (laps?.length && result?.Results?.length && pitstops !== undefined) {
      const lapsCopy = [...laps];
      // set left intervals
      const leftInterval = (width - 20) / laps.length; // width of squares
      const myLeftIntervals: any = lapsCopy.map((_, i) => leftInterval * (i + 1));
      myLeftIntervals.unshift(0);
      setLeftIntervals(myLeftIntervals);

      const numDrivers = result.Results.length;
      // height of driver markers
      const myDriverObjectHeight = CANVAS_HEIGHT / numDrivers;
      setDriverObjectHeight(myDriverObjectHeight);

      let myTotalTimeDriverMap: TotalTimeDriverMap = {};
      let slowestTotalTime = -Infinity;
      let mySlowestDriver = '';
      for (let i = 0; i < lapsCopy.length; i++) {
        const lap = lapsCopy[i];
        for (let j = 0; j < lap.Timings.length; j++) {
          const timing = lap.Timings[j];
          if (myTotalTimeDriverMap[timing.driverId] === undefined) {
            myTotalTimeDriverMap[timing.driverId] = {
              totalTime: 0,
              timePercentages: [0],
              cumTimePercentage: 0,
              positions: [0], // will fill in from results in next loop
              driverColor: '',
              driverLastName: undefined,
              pitStopStyles: [],
              constructorID: ''
            };
          }
          // RESUME function
          if (lapPausedOnForDriver && (parseInt(lap.number) <= lapPausedOnForDriver[timing.driverId])) {
            console.log('skipping', lap.number, 'for', timing.driverId);
            continue;
          }
          // add to total time
          let theLapTime = TimeHelper.raceTimeToMs(timing.time);
          // RESUME function
          if (lapPausedOnForDriver && (parseInt(lap.number) === Math.floor(lapPausedOnForDriver[timing.driverId]))) {
            theLapTime *= lapPausedOnForDriver[timing.driverId] - Math.floor(lapPausedOnForDriver[timing.driverId]);
            console.log('shortening', lap.number, 'for', timing.driverId, 'shortenedLapTime', theLapTime);
          }
          myTotalTimeDriverMap[timing.driverId].totalTime += theLapTime;
          // find the driver with the longest total time to switch play button to pause button
          if (myTotalTimeDriverMap[timing.driverId].totalTime > slowestTotalTime) mySlowestDriver = timing.driverId;
          // set positions for distance from top of container
          myTotalTimeDriverMap[timing.driverId].positions.push((parseInt(timing.position) - 1) * myDriverObjectHeight);
        }
      }
      setSlowestDriver(mySlowestDriver);

      let myWinningDriver: string = '';
      const constructorIDSet: Set<string> = new Set();
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
            driverColor: '',
            driverLastName: _result.Driver.familyName,
            pitStopStyles: [],
            constructorID: _result.Constructor.constructorId
          };
          return;
        }
        if (_result.position === '1') myWinningDriver = _result.Driver.driverId;
        // add constructorIDs to set
        constructorIDSet.add(_result.Constructor.constructorId);
        // add driver's last name for display
        myTotalTimeDriverMap[_result.Driver.driverId].driverLastName = _result.Driver.familyName;
        // calculate starting position top offset
        // RESUME function
        if (positionPausedOnForDriver) {
          myTotalTimeDriverMap[_result.Driver.driverId].positions[0] = positionPausedOnForDriver[_result.Driver.driverId].top;
        }
        else myTotalTimeDriverMap[_result.Driver.driverId].positions[0] = (parseInt(_result.grid) - 1) * myDriverObjectHeight;
        // pitlane start will have 0 grid position, will result in a negative top position
        if (myTotalTimeDriverMap[_result.Driver.driverId].positions[0] < 0) myTotalTimeDriverMap[_result.Driver.driverId].positions[0] = CANVAS_HEIGHT;
        // calculate final top position offset based on finishing position
        const len = myTotalTimeDriverMap[_result.Driver.driverId].positions.length;
        myTotalTimeDriverMap[_result.Driver.driverId].positions[len - 1] = (parseInt(_result.position) - 1) * myDriverObjectHeight;
        myTotalTimeDriverMap[_result.Driver.driverId].constructorID = _result.Constructor.constructorId;
      });
      setWinningDriver(myWinningDriver);
      const numConstructors = constructorIDSet.size;
      const randomColorConstructorIndexSet: number[] = randomColorIndexSet || shuffle(Array.from({ length: numConstructors }, (_, i: number) => i));
      if (!randomColorIndexSet) setRandomColorIndexSet(randomColorConstructorIndexSet);
      const constructorColorKeyObject: { [constructorID: string]: string } = {};
      Array.from(constructorIDSet).forEach((id, i) => constructorColorKeyObject[id] = interpolateRainbow(randomColorConstructorIndexSet[i] / numConstructors));
      console.log({ constructorColorKeyObject });

      // use total time to find fractional then cumulative time slice for each lap
      for (let i = 0; i < lapsCopy.length; i++) {
        const lap = lapsCopy[i];
        for (let j = 0; j < lap.Timings.length; j++) {
          const timing = lap.Timings[j];
          // RESUME function
          if (lapPausedOnForDriver && (parseInt(lap.number) <= lapPausedOnForDriver[timing.driverId])) {
            console.log('skipping lap', lap.number, 'for', timing.driverId);
            continue;
          }
          let theTimePercentage = TimeHelper.raceTimeToMs(timing.time);
          // RESUME function
          if (lapPausedOnForDriver && (parseInt(lap.number) === Math.floor(lapPausedOnForDriver[timing.driverId]))) {
            theTimePercentage *= lapPausedOnForDriver[timing.driverId] - Math.floor(lapPausedOnForDriver[timing.driverId]);
            console.log('shortening time, lap', lap.number, 'for', timing.driverId, 'shortenedTimePercentage', theTimePercentage);
          }
          theTimePercentage /= myTotalTimeDriverMap[timing.driverId].totalTime;
          const timePercentage = theTimePercentage;
          // console.log({timePercentage});
          myTotalTimeDriverMap[timing.driverId].cumTimePercentage += timePercentage;
          myTotalTimeDriverMap[timing.driverId].timePercentages.push(myTotalTimeDriverMap[timing.driverId].cumTimePercentage);
        }
      }
      if (totalTimeDriverMap) Object.keys(totalTimeDriverMap).forEach(driverID => {
        myTotalTimeDriverMap[driverID].driverColor = constructorColorKeyObject[myTotalTimeDriverMap[driverID].constructorID];
      });
      console.log({ constructorColorKeyObject });

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
  }, [laps, result, dispatch, duration, pitstops, displayAllLaps, timeAnimationRan, lapPausedOnForDriver, positionPausedOnForDriver]);

  const carControls = useAnimation();
  const handlePause = () => {
    if (isPaused) {
      carControls.start('animate');
      setTimeAnimationStarted(Date.now());
    } else if (!isPaused) {
      const myTimeAnimationRan = ((Date.now() - timeAnimationStarted) / 1000);
      setTimeAnimationRan(myTimeAnimationRan);
      console.log({ myTimeAnimationRan });
      let myLapPausedOn: any = {};
      let myPositionPausedOn: any = {};
      refArray.current.forEach(ref => {
        if (ref && leftIntervals) {
          const lapPausedOn = parseFloat(ref.style.borderBottom.replaceAll('px', ''));
          myLapPausedOn[ref.id] = lapPausedOn;
          const leftPausedOn = parseFloat(ref.style.left.replaceAll('px', ''));
          const topPausedOn = parseFloat(ref.style.top.replaceAll('px', ''));
          const borderBottomPausedOn = parseFloat(ref.style.borderBottom.replaceAll('px', ''));
          myPositionPausedOn[ref.id] = {left: leftPausedOn, top: topPausedOn, borderBottom: borderBottomPausedOn};
        }
      });
      console.log({ refArray, myLapPausedOn, myPositionPausedOn });
      setLapPausedOnForDriver(myLapPausedOn);
      setPositionPausedOnForDriver(myPositionPausedOn);
      carControls.stop();
    }
    setPaused(!isPaused);
  };

  const handleDurationChange = (newValue: number) => {
    setTimeAnimationRan(0);
    setLapPausedOnForDriver(undefined);
    setPositionPausedOnForDriver(undefined);
    setDuration(newValue);
    carControls.stop();
    setPaused(true);
  };
  const handleAnimationComplete = (driverID: string) => {
    if (driverID === slowestDriver) {
      setTimeAnimationRan(0);
      setLapPausedOnForDriver(undefined);
      setPositionPausedOnForDriver(undefined);
      setPaused(true)
    };
  };

  const handleDisplayAllLapsChange = (checked: boolean) => {
    setTimeAnimationRan(0);
    setDisplayAllLaps(checked);
    setPaused(true);
    checked ? setWidth(document.body.clientWidth * 0.80) : setWidth((((laps?.length || 0) / 3) || THIRD_OF_AVG_NUM_LAPS) * (document.body.clientWidth * 0.80));
  };

  const preparedDriverObjects = <>
    {totalTimeDriverMap && leftIntervals && bestTotalTime && laps && Object.keys(totalTimeDriverMap).map((driverID: string, _i) => {
      console.log('lets prepare', {driverID});
      const positions = totalTimeDriverMap[driverID].positions;
      const driverLastName = totalTimeDriverMap[driverID].driverLastName?.replaceAll(" ", "_");
      const durationForEachDriver = (totalTimeDriverMap[driverID].totalTime / bestTotalTime) * (duration - timeAnimationRan);
      // drivers that crashed on the first lap
      if (!durationForEachDriver) {
        return <div
          key={_i} id={driverID} className={styles.object}
          ref={(ref) => {
            refArray.current[_i] = ref;
          }}
          style={{
            left: positionPausedOnForDriver ? positionPausedOnForDriver[driverID].left : 0,
            top: positions[0],
            color: totalTimeDriverMap[driverID].driverColor,
            height: `${driverObjectHeight - 5}px`,
            borderBottom: '0px'
          }}>
          <span className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</span>
        </div>;
      }
      const lapsCompleted = totalTimeDriverMap[driverID].timePercentages.length;
      let leftIntervalsForEachDriver = [0];
      if (!lapPausedOnForDriver && !positionPausedOnForDriver) {
        leftIntervalsForEachDriver = [...leftIntervals].splice(0, lapsCompleted > laps.length ? lapsCompleted + 1 : lapsCompleted);
      } // RESUME function
      else if (lapPausedOnForDriver && positionPausedOnForDriver) {
        if (lapsCompleted === 0) {
          leftIntervalsForEachDriver = [positionPausedOnForDriver[driverID].left];
        } else {
          console.log({ lapsCompleted, driverID, leftIntervalsLength: leftIntervals.length });
          leftIntervalsForEachDriver = [positionPausedOnForDriver[driverID].left];
          for (let i = Math.ceil(lapPausedOnForDriver[driverID]); i < Math.ceil(lapPausedOnForDriver[driverID]) + lapsCompleted - 1; i++) {
            const leftInterval = leftIntervals[i];
            if (!leftInterval) console.log('in interval loop', {leftInterval, driverID, i});
            leftIntervalsForEachDriver.push(leftInterval);
          }
        }
      }
      const pitLaneStart = positions[0] >= CANVAS_HEIGHT && durationForEachDriver;
      let display = Array.from({ length: lapsCompleted }, (_) => 'block');
      if (pitLaneStart) {
        display[0] = 'none';
      }
      const times = totalTimeDriverMap[driverID].timePercentages;
      const pitstops = totalTimeDriverMap[driverID].pitStopStyles;
      const borderBottomPseudoState = Array.from({ length: lapsCompleted }, (_, i) => {
        if (positionPausedOnForDriver) {
          if (i === 0) return `${i + positionPausedOnForDriver[driverID].borderBottom}px`;
          else return `${i + Math.floor(positionPausedOnForDriver[driverID].borderBottom)}px`;
        }
        else return `${i}px`;
      });
      console.log({ driverID, leftIntervalsForEachDriver, durationForEachDriver, times, positions, pitstops, borderBottomPseudoState });
      const variant = {
        animate: {
          left: leftIntervalsForEachDriver,
          top: positions,
          borderRight: pitstops,
          display,
          transition: { duration: durationForEachDriver, times, ease: 'linear' },
          borderBottom: borderBottomPseudoState
        }
      };
      // animated drivers
      return (<motion.div key={_i} id={driverID}
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
        onAnimationComplete={() => handleAnimationComplete(driverID)}
      >
        <span className={styles.driverName}><span className="material-icons">directions_car</span>{driverLastName || driverID}</span>
      </motion.div>);
    })}
  </>;

  const innerWrapperForDisplayAllLaps = <>
    <div className={styles.innerWrapper} style={{ width }}>
      {/* driver objects */}
      {preparedDriverObjects}
      {/* y axis, laps */}
      {leftIntervals && <div className={styles.lapAxis} style={{ marginLeft: displayAllLaps ? '-1%': '', width: displayAllLaps ? '102%' : '' }}>
        {leftIntervals.map((_, i) => i % 2 === 0 ? <div key={i + 'a'}>{i}</div> : <></>)}
      </div>}
      {/* cartesian axis dotted lines */}
      {totalTimeDriverMap && <div>
        {Object.keys(totalTimeDriverMap).map((_, i) =>
          <div key={i + 'b'} className={styles.positionLines} style={{ top: ((i + 1) * driverObjectHeight) - (driverObjectHeight / 2) }}></div>
        )}
      </div>}
    </div>
  </>;

  // prepare followLeadDriverTimes
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
  const innerWrapperForFollowLeadDriver = <>{totalTimeDriverMap && followLeadDriverTimes &&
    <motion.div
      className={styles.innerWrapper} id="innerWrapper"
      // no ref needed for this as it follows the lead driver AND we add OUTER_WRAPPER_RIGHT_EDGE
      style={{ width, position: 'absolute' }}
      initial={{ left: '85%' }}
      variants={{
        animate: {
          left: leftIntervals?.map((interval, i) => {
            return (0 - interval) + OUTER_WRAPPER_RIGHT_EDGE;
          }),
          transition: { duration: duration - timeAnimationRan, times: followLeadDriverTimes, ease: 'linear' }
        }
      }}
      animate={carControls}
    >
      {preparedDriverObjects}
      {/* y axis, laps */}
      {leftIntervals && <div className={styles.lapAxis}>
        {leftIntervals.map((_, i) => {
          if (!displayAllLaps) return [Array.from({ length: 5 }).map((_, j) => <div style={{ color: i % 2 ? 'red' : 'black' }} key={`${i}_${j}`}>{i}</div>)];
          return i % 2 === 0 ? <div key={i + 'd'}>{i}</div> : <></>;
        })}
      </div>}
      {/* cartesian axis dotted lines */}
      {totalTimeDriverMap && <div>
        {Object.keys(totalTimeDriverMap).map((_, i) =>
          <div key={i + 'e'} className={styles.positionLines} style={{ top: ((i + 1) * driverObjectHeight) - (driverObjectHeight / 2) }}></div>
        )}
      </div>}
    </motion.div>
  }</>;

  const successContent = <>
    <div className={styles.replayHeader}>
      <button style={{ width: '10%' }} onClick={() => handlePause()}>{isPaused ? 'play' : 'pause'}</button><br />
      <span className='material-icons-align'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          <span>Select duration</span>
          <span>(will reset animation):</span>
        </div>
        <input type="range" min="15" max="120"
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
        {pitstops?.length ? <><span style={{ borderRight: PIT_STOP_STYLE, paddingRight: '1rem' }}>Pitstop:</span><br /></> : <></>}
        Empty grid slots indicate a Pit Lane start
      </span>
    </div>

    <div className={`${styles.sidebar} ${styles.leftSidebar}`}></div>
    <div className={`${styles.sidebar} ${styles.rightSidebar}`}></div>

    <div className={styles.outerWrapper}>
      {totalTimeDriverMap && <div className={styles.positionAxis}>
        {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i + 'f'}>{i + 1}</div>)}
      </div>}
      {totalTimeDriverMap && <div className={`${styles.positionAxis} ${styles.positionAxisRight}`}>
        {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i + 'g'}>{i + 1}</div>)}
      </div>}
      {displayAllLaps ? innerWrapperForDisplayAllLaps : innerWrapperForFollowLeadDriver}
    </div>
  </>;

  return (
    <div className={`page-content ${isDarkMode ? 'dark' : 'light'} ${laps?.length && result?.Results?.length && pitstops !== undefined ? styles.centered : ''}`}>
      <UseReduxAsyncStatuses statuses={[lapsStatus, pitstopsStatus]}
        errors={[lapsError, pitstopsError]}
        fetchActions={[fetchLaps, fetchPitStops]}
        fetchParamss={[{ year: year || '', round: round || '' }, { year: year || '', round: round || '' }]}
        successContent={successContent}
        loadingInterText={'Laps and Pitstops'} />
    </div>
  );
};
