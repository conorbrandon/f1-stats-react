import { interpolateRainbow } from "d3-scale-chromatic";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInterval } from "usehooks-ts";
import { TooltipPosition } from "../../App";
import { fetchConstructorStandings } from "../../app/constructorStandings/constructorStandingsSlice";
import { fetchDriverStandings } from "../../app/driverStandings/driverStandingsSlice";
import { useAppDispatch } from "../../app/hooks";
import { fetchSchedule } from "../../app/schedule/scheduleSlice";

import styles from "./AppHeader.module.css";

interface AppHeaderProps {
  isDarkMode: boolean,
  enableDarkMode: () => void,
  disableDarkMode: () => void,
  windowWidthThreshold: number,
  narrowWindowWidthThreshold: number,
  windowWidth: number,
  setTooltipPosition: React.Dispatch<React.SetStateAction<TooltipPosition | undefined>>, 
  setTooltipChild: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>,
}

export const AppHeader: React.FC<AppHeaderProps> = ({ isDarkMode, enableDarkMode, disableDarkMode, narrowWindowWidthThreshold, windowWidth, windowWidthThreshold, setTooltipChild, setTooltipPosition }) => {
  const dispatch = useAppDispatch();
  const handleResetStandings = () => {
    dispatch(fetchDriverStandings('current'));
    dispatch(fetchConstructorStandings('current'));
  };
  const handleResetSeasons = () => {
    dispatch(fetchSchedule('current'));
  };
  const handleEnableDarkMode = () => {
    enableDarkMode();
  };
  const handleDisableDarkMode = () => {
    disableDarkMode();
  };
  useEffect(() => {
    let body = document.getElementsByTagName('body')[0];
    isDarkMode ? body.className = 'bodydark' : body.className = 'bodylight';
  }, [isDarkMode]);

  const appHeaderRef = useRef<HTMLDivElement>(null);
  const carsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const f1TextRef = useRef<HTMLSpanElement>(null);
  const NUM_ANIMATED_CARS = 20;
  const MIN_START_POS = 1;
  const MAX_START_POS = 15;
  const CAR_MOVE_DELAY = 300; // base is 1000, so scale accordingly. Divide by 2 to make random intervals more spaced out
  const SCALE_FACTOR = 1;
  function randomFloatFromInterval(min: number, max: number, useIDToScale?: number): number { // min and max included 
    return (Math.random() * (max - min + 1) + min) * (useIDToScale ? useIDToScale : 1);
  }
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [isACarNear, setACarNear] = useState<boolean>(false);
  const [carAnimationPosition, setCarAnimationPosition] = useState<{ [id: string]: number }>({ 0: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 1: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 2: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 3: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 4: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 5: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 6: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 7: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 8: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 9: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 10: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 11: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 12: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 13: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 14: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 15: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 16: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 17: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 18: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10, 19: randomFloatFromInterval(MIN_START_POS, MAX_START_POS) * 10 });
  const handleMouseEnter = () => {
    console.log('entered appHeader');
    setPlaying(true);
  };
  const handleMouseLeave = () => {
    console.log('left appHeader');
    setPlaying(false);
  };
  useInterval(() => {
    console.log('intervalling');
    const carAnimationPositionCopy = {...carAnimationPosition};
    // const f1TextXPos = f1TextRef.current?.getBoundingClientRect().x;
    let isACarNear = false;
    Object.keys(carAnimationPositionCopy).forEach(id => {
      carAnimationPositionCopy[id] += randomFloatFromInterval(MIN_START_POS, MAX_START_POS / SCALE_FACTOR);
      if (carAnimationPositionCopy[id] > document.body.clientWidth + 50) {
        const carRef = carsRef.current[parseInt(id)];
        if (carRef) carRef.style.transition = 'none';
        carAnimationPositionCopy[id] = -20;
      } else {
        const carRef = carsRef.current[parseInt(id)];
        if (carRef) carRef.style.transition = 'left 1s linear';
      }
      // if (f1TextXPos && Math.abs(f1TextXPos - carAnimationPositionCopy[id]) < 1) {
      //   console.log('car is near the text');
      //   isACarNear = true;
      // }
    });
    setCarAnimationPosition(carAnimationPositionCopy);
    setACarNear(isACarNear);
  }, isPlaying ? CAR_MOVE_DELAY : null);
  useEffect(() => {
    if (appHeaderRef && appHeaderRef.current) {
      appHeaderRef.current.addEventListener('mouseenter', handleMouseEnter);
      appHeaderRef.current.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        appHeaderRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        appHeaderRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [appHeaderRef]);
  const getColoredCarSvg = (color: string) => <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512"><path fill={color} d="M355.975 292.25a24.82 24.82 0 1 0 24.82-24.81 24.84 24.84 0 0 0-24.82 24.81zm-253-24.81a24.81 24.81 0 1 1-24.82 24.81 24.84 24.84 0 0 1 24.81-24.81zm-76.67-71.52h67.25l-13.61 49.28 92-50.28h57.36l1.26 34.68 32 14.76 11.74-14.44h15.62l3.16 16c137.56-13 192.61 29.17 192.61 29.17s-7.52 5-25.93 8.39c-3.88 3.31-3.66 14.44-3.66 14.44h24.2v16h-52v-27.48c-1.84.07-4.45.41-7.06.47a40.81 40.81 0 1 0-77.25 23h-204.24a40.81 40.81 0 1 0-77.61-17.67c0 1.24.06 2.46.17 3.67h-36z" /></svg>;

  const warningRef = useRef<HTMLSpanElement>(null);
  const handleMouseEnterWarning = (targetRef: RefObject<HTMLSpanElement>) => {
    if (!targetRef.current) return;
    // console.log({ targetRef, targetRound });
    const {x, y, width, height} = targetRef.current?.getBoundingClientRect();
    // console.log({ x, y, width, height });
    setTooltipPosition({ x: x + (width / 2), y: y + (height / 2) + 45 });
    // console.log({ schedule });
    setTooltipChild(<span style={{ color: isDarkMode ? 'white' : 'black', fontSize: 'small' }}>Window size may effect some elements' appearance. For the best experience, increase the width.</span>);
  };
  const handleMouseLeaveWarning = () => {
    setTooltipPosition(undefined);
    setTooltipChild(undefined);
  };
  return (
    <div className={`app-header ${isDarkMode ? 'dark' : 'light'}`} ref={appHeaderRef}>
      {/* animated cars content */}
      {Array.from({ length: NUM_ANIMATED_CARS }).map((_, i) => {
        return <span ref={el => carsRef.current[i] = el} 
          key={i + 'animatedCar'} 
          style={{ position: 'absolute', top: 41, left: carAnimationPosition[`${i}`], transition: 'left 1s linear' }}>
          {getColoredCarSvg(interpolateRainbow(i / NUM_ANIMATED_CARS))}
        </span>;
      })}
      {/* rest of header content */}
      <Link to="" onClick={handleResetStandings} style={{ textDecoration: 'none' }}>
        <h1 className={styles.centered}>
          <span ref={f1TextRef} className={`red xx-large-font ${isACarNear ? (isDarkMode ? styles.bigglowingF1Text : styles.smallglowingF1Text) : ''}`} style={{ transition: 'text-shadow .1s linear' }}>F1</span>
          <span className="x-large-font">Stats</span>
        </h1>
      </Link>
      <nav className={`${styles.paddedLink} ${windowWidth < narrowWindowWidthThreshold ? styles.paddedLinkNarrow : ''}`}>
        <Link to={'/'} onClick={handleResetStandings}>dashboard</Link>
        <Link to={`/current`} onClick={handleResetSeasons}>races</Link>
        <Link to={'/current/standings'} onClick={handleResetStandings}>standings</Link>
        <Link to={'/drivers'}>drivers</Link>
        <Link to={'/constructors'}>constructors</Link>
        <Link to={'/circuits'}>circuits</Link>
        {process.env.REACT_APP_ENVIRONMENT === 'mock' &&
          <>
            <Link style={{ color: 'gray' }} to="2008/5">turkey 2008</Link>
            <Link style={{ color: 'gray' }} to="2022/5">miami 2022</Link>
            <Link style={{ color: 'gray' }} to="driver/massa">massa</Link>
            <Link style={{ color: 'gray' }} to="constructor/ferrari">ferrari</Link>
            <Link style={{ color: 'gray' }} to="circuit/bahrain">bahrain circuit</Link>
          </>}
      </nav>
      {windowWidth < windowWidthThreshold ? <span onMouseLeave={handleMouseLeaveWarning} onMouseEnter={() => handleMouseEnterWarning(warningRef)} ref={warningRef} className={`material-icons ${styles.smallWindowWidthWarning}`}>warning</span> : <></>}
      {isDarkMode && <span className={`material-icons ${styles.darkModeToggleButton} ${styles.lightModeButton}`} onClick={handleDisableDarkMode}>light_mode</span>}
      {!isDarkMode && <span className={`material-icons ${styles.darkModeToggleButton} ${styles.darkModeButton}`} onClick={handleEnableDarkMode}>dark_mode</span>}
    </div>
  );
}