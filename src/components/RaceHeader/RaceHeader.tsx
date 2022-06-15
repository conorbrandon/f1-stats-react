import React, { RefObject, useRef } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { selectSchedule } from "../../app/schedule/scheduleSlice";
import { store } from "../../app/store";
import { FlagHelper } from "../../helpers/FlagHelper";
import { initializeRace } from "../Race/Race";
import { TooltipRace } from "../TooltipRace/TooltipRace";
import { UseReduxAsyncStatuses } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceHeader.module.css";

export const RaceHeader = ({ }) => {
  const race = useAppSelector(selectResult);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const schedule = useAppSelector(selectSchedule);
  const scheduleStatus = useAppSelector(selectResultStatus);
  const scheduleError = useAppSelector(selectResultError);
  const backRef = useRef<HTMLAnchorElement>(null);
  const forwardRef = useRef<HTMLAnchorElement>(null);

  const { setTooltipPosition, setTooltipChild } = useOutletContext<AppOutletContext>();
  const handleMouseEnter = (targetRef: RefObject<HTMLAnchorElement>, targetRound: string, previousRace: boolean) => {
    if (!targetRef.current) return;
    console.log({ targetRef, targetRound });
    const {x, y, width, height} = targetRef.current?.getBoundingClientRect();
    console.log({x, y, width, height});
    setTooltipPosition({ x: x + (width / 2), y: y + (height / 2) + 45 });
    console.log({schedule});
    setTooltipChild(<TooltipRace race={schedule.find(race => race.round == targetRound)} previousRace={previousRace} />);
  };
  const handleMouseLeave = () => {
    setTooltipPosition(undefined);
    setTooltipChild(undefined);
  };
  const handleGetNewRace = (year: string, round: string) => {
    handleMouseLeave();
    initializeRace(year, round);
  };

  const successContent = race ? <>
    <span className={`${styles.backToSeasonLink} material-icons-align`}>
      <span className="material-icons">
        arrow_back
      </span><Link to={`/${race.season}`}>
        {race.season} season</Link>
    </span>
    <span className={`material-icons-align ${styles.spaceEvenly}`}>
      {parseInt(race.round) - 1 > 0 && <Link ref={backRef} onClick={() => handleGetNewRace(`${race.season}`, `${parseInt(race.round) - 1}`)}
        to={`/${race.season}/${parseInt(race.round) - 1}`} 
        onMouseEnter={() => handleMouseEnter(backRef, String(parseInt(race.round) - 1), true)}
        onMouseLeave={() => handleMouseLeave()}>
        <span className="material-icons" style={{fontSize: 'medium'}}>arrow_back_ios_new</span>
      </Link>}
      {parseInt(race.round) + 1 <= schedule.length && <Link ref={forwardRef} onClick={() => handleGetNewRace(`${race.season}`, `${parseInt(race.round) + 1}`)}
        to={`/${race.season}/${parseInt(race.round) + 1}`} 
        onMouseEnter={() => handleMouseEnter(forwardRef, String(parseInt(race.round) + 1), false)}
        onMouseLeave={() => handleMouseLeave()}>
        <span className="material-icons" style={{fontSize: 'medium'}}>arrow_forward_ios</span>
      </Link>}
      <span className="x-large-font">{race.season} {race.raceName}</span>
      <img className={styles.img} src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
      <span className="medium-font">(Round {race.round})</span>
    </span>
  </> : <></>;
  return (
    <>
      <div className="page-header">
        <UseReduxAsyncStatuses statuses={[resultStatus, scheduleStatus]} successContent={successContent} errors={[resultError, scheduleError]} />
        <span className={styles.links}>
          <Link to="">Summary</Link>
          <Link to="results">Results</Link>
          <Link to="qualifying">Qualifying</Link>
          <Link to="laptimes">Lap/Position Trace</Link>
        </span>
      </div>
    </>
  );
};
