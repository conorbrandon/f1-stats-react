import { useCurrentFrame, interpolate, useVideoConfig, AbsoluteFill } from "remotion";
import { TotalTimeDriverMap } from "./RaceReplayReMotion";
import styles from "./RaceReplayReMotion.module.css";
import PirelliTyre from "./pirelliTire.png";
import { useEffect, useState } from "react";

interface CompositionProps {
  totalTimeDriverMap?: TotalTimeDriverMap,
  numLaps?: number,
  leftIntervals?: number[],
  driverObjectHeight?: number,
  leftOffset: number,
  rightOffset: number,
  displayAllLaps: boolean,
  innerWrapperWidth: number,
  followLeadDriverTimes?: number[]
}

export const MyComposition: React.FC<CompositionProps> = ({ totalTimeDriverMap, leftIntervals, numLaps, driverObjectHeight, leftOffset, rightOffset, displayAllLaps, innerWrapperWidth, followLeadDriverTimes }) => {
  const frame = useCurrentFrame();
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const PIT_STOP_STYLE = 'solid gold';
  const OUTER_WRAPPER_RIGHT_EDGE = document.body.clientWidth * .85;

  const preparedInnerWrapper = (totalTimeDriverMap && leftIntervals?.length && numLaps && driverObjectHeight && followLeadDriverTimes && innerWrapperWidth) ?
    <div id="innerWrapper" style={{
      width: `${innerWrapperWidth}px`, left: displayAllLaps ? 0 : interpolate(frame, followLeadDriverTimes, leftIntervals.map((interval, i) => {
        return (0 - interval) + OUTER_WRAPPER_RIGHT_EDGE;
      }), {
        extrapolateLeft: 'clamp', extrapolateRight: 'clamp'
      }), position: 'absolute'
    }} className={styles.fivePercentTop} >
      {
        Object.keys(totalTimeDriverMap).map((driverID) => {
          let { driverColor, driverLastName, keyFrames, positions, pitStopStyles } = totalTimeDriverMap[driverID];
          driverLastName = driverLastName?.replaceAll(" ", '_');
          const lapsCompleted = keyFrames.length;
          let leftIntervalsForDriver = leftIntervals.slice(0, lapsCompleted > numLaps ? lapsCompleted + 1 : lapsCompleted);
          if (keyFrames.length === 1) {
            keyFrames = [0, ...keyFrames];
            positions = [...positions, ...positions];
            pitStopStyles = [...pitStopStyles, ...pitStopStyles];
            leftIntervalsForDriver = [...leftIntervalsForDriver, ...leftIntervalsForDriver];
          }
          // console.log({ driverID, keyFrames, positions, pitStopStyles, leftIntervalsForDriver });
          const left = interpolate(frame, keyFrames, leftIntervalsForDriver, {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp'
          });
          const top = interpolate(frame, keyFrames, positions, {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp'
          });
          const borderLeft = interpolate(frame, keyFrames, pitStopStyles, {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp'
          });
          return (
            <div key={driverID} className={styles.driverObject} style={{
              left,
              top,
              height: driverObjectHeight - 5,
            }}>
              <span key={`inner${driverID}`} className={`${styles.driverName} material-icons-align`} style={{ color: driverColor }}>
                <span className="material-icons">directions_car</span>{driverLastName || driverID}
                {borderLeft ? <img src={PirelliTyre} alt="tire" className={styles.tire} style={{ marginLeft: '5px' }}></img> : <></>}
              </span>
            </div>
          );
        })
      }
      {/* y axis, laps */}
      {leftIntervals && <div className={styles.lapAxis} style={{
        marginLeft: leftOffset,
        width: '100%'
      }}>
        {leftIntervals.map((_, i) => {
          if (!displayAllLaps) return [Array.from({ length: 5 }).map((_, j) => <div style={{ color: i % 2 ? 'red' : 'black' }} key={`${i}_${j}`}>{i}</div>)];
          return i % 2 === 0 ? <div key={i + 'd'}>{i}</div> : <></>;
        })}
      </div>}
      {/* big lap counter */}
      {!displayAllLaps && leftIntervals && followLeadDriverTimes && <div id="bigLapCounter" className={styles.bigLapCounter} 
        style={{ left: interpolate(frame, followLeadDriverTimes, leftIntervals, {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), top: '-5%' }}>
        Lap {Math.floor(interpolate(frame, followLeadDriverTimes, leftIntervals.map((_, i) => i)))}
      </div>}
    </div>
    : <></>;

  return (
    <AbsoluteFill style={{ backgroundColor: 'white', color: 'black', position: 'relative' }}>
      {preparedInnerWrapper}
      {/* x axes, positions */}
      {totalTimeDriverMap && <div className={`${styles.positionAxis} ${styles.positionAxisLeft} ${styles.fivePercentTop}`}>
        {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i + 'f'}>{i + 1}</div>)}
      </div>}
      {totalTimeDriverMap && <div className={`${styles.positionAxis} ${styles.positionAxisRight} ${styles.fivePercentTop}`}>
        {Object.keys(totalTimeDriverMap).map((_, i) => <div key={i + 'g'}>{i + 1}</div>)}
      </div>}
      {/* cartesian axis dotted lines */}
      {totalTimeDriverMap && driverObjectHeight && <div>
        {Object.keys(totalTimeDriverMap).map((_, i) =>
          <div key={i + 'b'} className={`${styles.positionLines}`} style={{
            top: `calc(${((i + 1) * driverObjectHeight) - (driverObjectHeight / 2)}px + 5%)`,
            marginLeft: leftOffset,
            width: `calc(100% - ${leftOffset}px - ${rightOffset}px)`
          }}></div>
        )}
      </div>}
      {/* big lap counter */}
      {displayAllLaps && leftIntervals && followLeadDriverTimes && <div id="bigLapCounter" className={styles.bigLapCounter} style={{ left: interpolate(frame, followLeadDriverTimes, leftIntervals) }}>
        Lap {Math.floor(interpolate(frame, followLeadDriverTimes, leftIntervals.map((_, i) => i), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}))}
      </div>}
    </AbsoluteFill>
  );
};