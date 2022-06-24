import { useCurrentFrame, interpolate, useVideoConfig, AbsoluteFill } from "remotion";
import { TotalTimeDriverMap } from "./RaceReplayReMotion";
import styles from "./RaceReplayReMotion.module.css";
import PirelliTyre from "./pirelliTire.png";

interface CompositionProps {
  totalTimeDriverMap?: TotalTimeDriverMap,
  numLaps?: number,
  leftIntervals?: number[],
  driverObjectHeight?: number
}

export const MyComposition: React.FC<CompositionProps> = ({ totalTimeDriverMap, leftIntervals, numLaps, driverObjectHeight }) => {
  const frame = useCurrentFrame();
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const PIT_STOP_STYLE = 'solid gold';

  const preparedDriverObjects = (totalTimeDriverMap && leftIntervals && numLaps && driverObjectHeight) ? Object.keys(totalTimeDriverMap).map((driverID) => {
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
        <span className={`${styles.driverName} material-icons-align`} style={{ color: driverColor }}>
          <span className="material-icons">directions_car</span>{driverLastName || driverID}
          {borderLeft ? <img src={PirelliTyre} alt="tire" className={styles.tire} style={{ marginLeft: '5px' }}></img> : <></>}
        </span>
      </div>
    );
  }) : <></>;
  return (
    <AbsoluteFill style={{ backgroundColor: 'white', color: 'black' }}>
      {preparedDriverObjects}
    </AbsoluteFill>
  );
};