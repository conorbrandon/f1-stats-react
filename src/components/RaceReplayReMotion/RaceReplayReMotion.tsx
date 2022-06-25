import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./RaceReplayReMotion.module.css";

import { TimeHelper } from "../../helpers/TimeHelper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLaps, selectLaps, selectLapsError, selectLapsStatus } from "../../app/laps/lapsSlice";
import { useParams } from "react-router-dom";
import Switch from "react-switch";
import { selectResult } from "../../app/result/resultSlice";
import { shuffle } from "../../helpers/GenericHelpers";
import { interpolateRainbow } from "d3-scale-chromatic";
import { fetchPitStops, selectPitStops, selectPitStopsError, selectPitStopsStatus } from "../../app/pitstops/pitStopsSlice";
import { UseReduxAsyncStatuses } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import { MyComposition } from "./MyComposition";
import { Player, PlayerRef } from "@remotion/player";
import PirelliTyre from "./pirelliTire.png";

export interface TotalTimeDriverMap {
  [driverID: string]: {
    totalTime: number,
    keyFrames: number[],
    cumkeyFrames: number,
    positions: number[],
    driverColor: string,
    driverLastName?: string,
    pitStopStyles: number[],
    displaySettings?: string[] // for drivers that started in the pitlane,
    constructorID: string
  }
}

export const RaceReplayReMotion = ({ }) => {
  const { year, round } = useParams();

  const [duration, setDuration] = useState<number>(60);
  const [speed, setSpeed] = useState<number>(1);
  const [isPaused, setPaused] = useState<boolean>(true);
  const [displayAllLaps, setDisplayAllLaps] = useState<boolean>(false);
  const THIRD_OF_AVG_NUM_LAPS = 40;
  const [width, setWidth] = useState((document.body.clientWidth * .80) * THIRD_OF_AVG_NUM_LAPS);
  const fps = 60;
  const height = 550;

  const [totalTimeDriverMap, setTotalTimeDriverMap] = useState<TotalTimeDriverMap>();
  const [leftIntervals, setLeftIntervals] = useState<number[]>();
  const [randomColorIndexSet, setRandomColorIndexSet] = useState<number[] | undefined>();
  const [driverObjectHeight, setDriverObjectHeight] = useState<number>(0);
  const [bestTotalTime, setBestTotalTime] = useState<number>();
  // timing of scrolling motion.div to match lead driver position
  const [followLeadDriverTimes, setFollowLeadDriverTimes] = useState<number[]>();
  const CANVAS_HEIGHT = 550;
  const leftOffset = 50;
  const rightOffset = 50;
  const bottomOffset = 50;

  const [setTheEndedEventListener, setSetEndedTheEventListener] = useState(false);

  // required data for the component
  const dispatch = useAppDispatch();
  const laps = useAppSelector(selectLaps);
  const lapsStatus = useAppSelector(selectLapsStatus);
  const lapsError = useAppSelector(selectLapsError);
  const results = useAppSelector(selectResult);  // fetched in the race component overall
  // optional data for the component
  const pitstops = useAppSelector(selectPitStops);
  const pitstopsStatus = useAppSelector(selectPitStopsStatus);
  const pitstopsError = useAppSelector(selectPitStopsError);

  useEffect(() => {
    console.log({ laps, results, pitstops });
    if (laps?.length && results?.Results?.length && pitstops !== undefined) {
      const durationInFrames = duration * fps;
      // set left intervals
      const leftInterval = (width - (leftOffset + rightOffset)) / laps.length; // width of squares
      const myLeftIntervals: any = laps.map((_, i) => leftOffset + (leftInterval * (i + 1)));
      myLeftIntervals.unshift(leftOffset);
      setLeftIntervals(myLeftIntervals);

      const numDrivers = results.Results.length;
      // height of driver markers
      const myDriverObjectHeight = (CANVAS_HEIGHT - bottomOffset) / numDrivers;
      setDriverObjectHeight(myDriverObjectHeight);

      let myTotalTimeDriverMap: TotalTimeDriverMap = {};
      let slowestTotalTime = -Infinity;
      for (let i = 0; i < laps.length; i++) {
        const lap = laps[i];
        for (let j = 0; j < lap.Timings.length; j++) {
          const timing = lap.Timings[j];
          if (myTotalTimeDriverMap[timing.driverId] === undefined) {
            myTotalTimeDriverMap[timing.driverId] = {
              totalTime: 0,
              keyFrames: [0],
              cumkeyFrames: 0,
              positions: [0], // will fill in from results in next loop
              driverColor: '',
              driverLastName: undefined,
              pitStopStyles: [],
              constructorID: ''
            };
          }
          // add to total time
          let theLapTime = TimeHelper.raceTimeToMs(timing.time) / 1000; // have to scale because duration is in seconds
          myTotalTimeDriverMap[timing.driverId].totalTime += theLapTime;
          if (myTotalTimeDriverMap[timing.driverId].totalTime > slowestTotalTime) slowestTotalTime = myTotalTimeDriverMap[timing.driverId].totalTime;
          myTotalTimeDriverMap[timing.driverId].positions.push((parseInt(timing.position) - 1) * myDriverObjectHeight);
        }
      }
      let winningDriver: string = '';
      const constructorIDSet: Set<string> = new Set();
      // set starting position on grid and final finishing position from results
      results.Results.forEach(result => {
        // fill in starting position for drivers that crashed on first lap
        if (!myTotalTimeDriverMap[result.Driver.driverId]) {
          console.log('missing from laps', result.Driver.driverId);
          myTotalTimeDriverMap[result.Driver.driverId] = {
            totalTime: 0,
            keyFrames: [durationInFrames],
            cumkeyFrames: 0,
            positions: [(parseInt(result.position) - 1) * myDriverObjectHeight],
            driverColor: '',
            driverLastName: result.Driver.familyName,
            pitStopStyles: [],
            constructorID: result.Constructor.constructorId
          };
          return;
        }
        if (result.position === '1') winningDriver = result.Driver.driverId;
        // add constructorIDs to set
        constructorIDSet.add(result.Constructor.constructorId);
        // add driver's last name for display
        myTotalTimeDriverMap[result.Driver.driverId].driverLastName = result.Driver.familyName;
        myTotalTimeDriverMap[result.Driver.driverId].positions[0] = (parseInt(result.grid) - 1) * myDriverObjectHeight;
        // pitlane start will have 0 grid position, will result in a negative top position
        if (myTotalTimeDriverMap[result.Driver.driverId].positions[0] < 0) myTotalTimeDriverMap[result.Driver.driverId].positions[0] = CANVAS_HEIGHT;
        // calculate final top position offset based on finishing position
        const len = myTotalTimeDriverMap[result.Driver.driverId].positions.length;
        myTotalTimeDriverMap[result.Driver.driverId].positions[len - 1] = (parseInt(result.position) - 1) * myDriverObjectHeight;
        myTotalTimeDriverMap[result.Driver.driverId].constructorID = result.Constructor.constructorId;
      });
      const numConstructors = constructorIDSet.size;
      const randomColorConstructorIndexSet: number[] = randomColorIndexSet || shuffle(Array.from({ length: numConstructors }, (_, i: number) => i));
      if (!randomColorIndexSet) setRandomColorIndexSet(randomColorConstructorIndexSet);
      const constructorColorKeyObject: { [constructorID: string]: string } = {};
      Array.from(constructorIDSet).forEach((id, i) => constructorColorKeyObject[id] = interpolateRainbow(randomColorConstructorIndexSet[i] / numConstructors));

      for (let i = 0; i < laps.length; i++) {
        const lap = laps[i];
        for (let j = 0; j < lap.Timings.length; j++) {
          const timing = lap.Timings[j];
          let theTimePercentage = (TimeHelper.raceTimeToMs(timing.time) / 1000) / slowestTotalTime;
          const numberOfKeyFramesForThisLap = theTimePercentage * durationInFrames;
          // console.log({ theTimePercentage, numberOfKeyFramesForThisLap });
          myTotalTimeDriverMap[timing.driverId].cumkeyFrames += numberOfKeyFramesForThisLap;
          myTotalTimeDriverMap[timing.driverId].keyFrames.push(myTotalTimeDriverMap[timing.driverId].cumkeyFrames);
        }
      }

      Object.keys(myTotalTimeDriverMap).forEach(driverID => {
        myTotalTimeDriverMap[driverID].driverColor = constructorColorKeyObject[myTotalTimeDriverMap[driverID].constructorID];
        myTotalTimeDriverMap[driverID].pitStopStyles = Array.from({ length: myTotalTimeDriverMap[driverID].positions.length }, () => 0);
      });

      // add pitstops if they exist for this race
      if (pitstops && pitstops.length) {
        for (let i = 0; i < pitstops.length; i++) {          
          const pitstop = pitstops[i];
          if (parseInt(pitstop.lap) >= myTotalTimeDriverMap[pitstop.driverId].pitStopStyles.length) continue;
          // set the indices of the laps they actually took a pitstop on to our pitstop indicator style
          myTotalTimeDriverMap[pitstop.driverId].pitStopStyles[parseInt(pitstop.lap)] /* or - 1? play around with this*/ = 30;
        }
      }

      console.log({ myTotalTimeDriverMap });
      setTotalTimeDriverMap(myTotalTimeDriverMap);
      // the winning driver had the baseline total race time to use for duration calculations
      const myBestTotalTime = myTotalTimeDriverMap[winningDriver].totalTime;
      setBestTotalTime(myBestTotalTime);
    }
  }, [laps, results, pitstops, duration, width, dispatch]);

  // prepare followLeadDriverTimes
  useEffect(() => {
    if (!displayAllLaps && totalTimeDriverMap && laps && results?.Results) {
      let myFollowLeadDriverTimes = laps.map((lap, i) => {
        const leadDriverTimePercentage = totalTimeDriverMap[lap.Timings[0].driverId].keyFrames[i];
        return leadDriverTimePercentage;
      }) || [];
      const winningDriverCumKeyframes = totalTimeDriverMap[results.Results[0].Driver.driverId].cumkeyFrames;
      myFollowLeadDriverTimes.push(winningDriverCumKeyframes);
      setFollowLeadDriverTimes(myFollowLeadDriverTimes);
      // console.log({ myFollowLeadDriverTimes });
    }
  }, [displayAllLaps, totalTimeDriverMap, laps, results]);

  const playerRef = useRef<PlayerRef>(null);
  const pausePlayWrapper = useCallback((playState: boolean) => {
    const { current } = playerRef;
    if (!current) {
      return;
    }
    if (playState) current.pause();
    else current.play();
  }, []);
  useEffect(() => {
    if (playerRef.current && !setTheEndedEventListener) {
      // console.log({ playerRef });
      playerRef.current.addEventListener("ended", (e) => {
        console.log("ended", e, isPaused);
        // playerRef.current?.seekTo(3598);
        setPaused(true);
      });
      setSetEndedTheEventListener(true);
    }
  }, [playerRef.current]);

  const handleSpeedChange = (newValue: number) => {
    setSpeed(newValue);
  };
  const handleDisplayAllLapsChange = (checked: boolean) => {
    setDisplayAllLaps(checked);
    setWidth(checked ? document.body.clientWidth * .95 : (document.body.clientWidth * .95) * THIRD_OF_AVG_NUM_LAPS);
  };
  const handlePause = () => {
    setPaused(!isPaused);
    pausePlayWrapper(!isPaused);
  };

  const successContent = <>
    <div className={styles.replayHeader}>
      <button style={{ width: '10%' }} onClick={() => handlePause()}>{isPaused ? 'play' : 'pause'}</button>
      <span className='material-icons-align'>
        <div>
          <span>Select speed</span>
        </div>
        <input type="range" min="0.5" max="4" step={0.1}
          onChange={(event) => handleSpeedChange(event.target.valueAsNumber)}
          defaultValue={speed}
        />
        Current speed: {Math.round(speed * 100) / 100} <br></br>
        Total duration: {Math.round(duration / speed)} seconds
      </span>
      <span className="material-icons-align">
        {'Display all laps'}
        <Switch checked={displayAllLaps} onChange={handleDisplayAllLapsChange} />
      </span>
      <span>
        <span style={{ textDecoration: 'underline' }}>Legend</span><br />
        {pitstops?.length ? <><span className="material-icons-align">Pitstop: <img src={PirelliTyre} alt="tire" className={styles.tireBig} /> </span></> : <></>}
        Empty grid slots indicate a Pit Lane start
      </span>
    </div>
    <div className={styles.player}>
      <Player
        component={MyComposition}
        durationInFrames={duration * fps}
        compositionWidth={1400}
        compositionHeight={CANVAS_HEIGHT}
        fps={fps}
        controls
        style={{
          width: document.body.clientWidth * .95,
          height
        }}
        ref={playerRef}
        showVolumeControls
        doubleClickToFullscreen
        inputProps={{
          totalTimeDriverMap,
          numLaps: laps?.length,
          leftIntervals: leftIntervals,
          driverObjectHeight: driverObjectHeight,
          leftOffset: leftOffset,
          rightOffset: rightOffset,
          displayAllLaps: displayAllLaps,
          innerWrapperWidth: width,
          followLeadDriverTimes: followLeadDriverTimes
        }}
        playbackRate={speed}
      />
    </div>
  </>;
  return (
    <div className={`page-content ${laps?.length && results?.Results?.length && pitstops !== undefined ? styles.centered : ''}`}>
      <UseReduxAsyncStatuses statuses={[lapsStatus, pitstopsStatus]}
        errors={[lapsError, pitstopsError]}
        fetchActions={[fetchLaps, fetchPitStops]}
        fetchParamss={[{ year: year || '', round: round || '' }, { year: year || '', round: round || '' }]}
        successContent={successContent}
        loadingInterText={'Laps and Pitstops'} />
    </div>
  );
};
