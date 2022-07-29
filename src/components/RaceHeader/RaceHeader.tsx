import React, { RefObject, useRef } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { selectQualifying } from "../../app/qualifying/qualifyingSlice";
import { selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { selectSchedule } from "../../app/schedule/scheduleSlice";
import { selectSprint } from "../../app/sprint/sprintSlice";
import { FlagHelper } from "../../helpers/FlagHelper";
import { initializeRace } from "../Race/Race";
import { TooltipRace } from "../TooltipRace/TooltipRace";
import { UseReduxAsyncStatuses } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceHeader.module.css";

export const RaceHeader = ({ }) => {
  const { year, round } = useParams();
  const race = useAppSelector(selectResult);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const schedule = useAppSelector(selectSchedule);
  const scheduleStatus = useAppSelector(selectResultStatus);
  const scheduleError = useAppSelector(selectResultError);
  const qualifying = useAppSelector(selectQualifying);
  const sprint = useAppSelector(selectSprint);
  const backRef = useRef<HTMLAnchorElement>(null);
  const forwardRef = useRef<HTMLAnchorElement>(null);

  const { setTooltipPosition, setTooltipChild, isDarkMode } = useOutletContext<AppOutletContext>();
  const handleMouseEnter = (targetRef: RefObject<HTMLAnchorElement>, targetRound: string, previousRace: boolean) => {
    if (!targetRef.current) return;
    // console.log({ targetRef, targetRound });
    const {x, y, width, height} = targetRef.current?.getBoundingClientRect();
    // console.log({ x, y, width, height });
    setTooltipPosition({ x: x + (width / 2), y: y + (height / 2) + 45 });
    // console.log({ schedule });
    setTooltipChild(<TooltipRace isDarkMode={isDarkMode} race={schedule.find(race => race.round === targetRound)} previousRace={previousRace} />);
  };
  const handleMouseLeave = () => {
    setTooltipPosition(undefined);
    setTooltipChild(undefined);
  };
  const handleGetNewRace = (year: string, round: string) => {
    handleMouseLeave();
    initializeRace(year, round);
  };

  const successContent = (year && round) ? <>
    <span className={styles.backToSeasonLinks}>
      <span className={`${styles.backToSeasonLink} ${isDarkMode ? styles.backToSeasonLinkdark : styles.backToSeasonLinklight} material-icons-align`}>
        <span className="material-icons">
          arrow_back
        </span><Link to={`/${year}`}>
          {year} season</Link>
      </span>
      <span className={`${styles.backToSeasonLink} ${isDarkMode ? styles.backToSeasonLinkdark : styles.backToSeasonLinklight} material-icons-align`}>
      <span className="material-icons">
          leaderboard
        </span>
        <Link to={`/${year}/standings`}>
          {year} standings</Link>
      </span>
    </span>
    <span className={`material-icons-align ${styles.spaceEvenly}`}>
      <span style={{ marginLeft: '3rem' }}>
        {parseInt(round) - 1 > 0 && <Link ref={backRef} onClick={() => handleGetNewRace(`${year}`, `${parseInt(round) - 1}`)}
          to={`/${year}/${parseInt(round) - 1}`}
          onMouseEnter={() => handleMouseEnter(backRef, String(parseInt(round) - 1), true)}
          onMouseLeave={() => handleMouseLeave()}>
          <span className="material-icons" style={{fontSize: 'medium'}}>arrow_back_ios_new</span>
        </Link>}
        {parseInt(round) + 1 <= schedule.length && <Link ref={forwardRef} onClick={() => handleGetNewRace(`${year}`, `${parseInt(round) + 1}`)}
          to={`/${year}/${parseInt(round) + 1}`}
          onMouseEnter={() => handleMouseEnter(forwardRef, String(parseInt(round) + 1), false)}
          onMouseLeave={() => handleMouseLeave()}>
          <span className="material-icons" style={{fontSize: 'medium'}}>arrow_forward_ios</span>
        </Link>}
      </span>
      {race ? <><span className="x-large-font"><Link to="" className={styles.raceName}>{year} {race.raceName}</Link></span>
      <img className={`${styles.img} ${isDarkMode ? styles.imgdark : styles.imglight}`} src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
      <span className="medium-font">(Round {round})</span></>: <></>}
    </span>
  </> : <></>;
  return (
    <>
      <div className={`page-header ${isDarkMode ? 'dark' : 'light'}`} style={{ padding: '0 6vw 0 0', width: '94vw' }}>
        <UseReduxAsyncStatuses 
          statuses={[resultStatus, scheduleStatus]} 
          successContent={successContent} 
          errors={[resultError, scheduleError]}
          loadingWidth={'50%'} />
        <span className={styles.links}>
          <span>
            <Link to="">Summary</Link>
          </span>
          {race?.Results?.length && <span>
            <Link to="results">Results</Link>
          </span>}
          {sprint && <span>
            <Link to="sprint">Sprint</Link>
          </span>}
          {qualifying && <span>
            <Link to="qualifying">Qualifying</Link>
          </span>}
          {race?.Results?.length && qualifying && <><span>
            <Link to="laptimes">Lap/Position Trace</Link>
          </span>
          <span>
            <Link to="racereplay">Race Replay</Link>
          </span></>}
        </span>
      </div>
    </>
  );
};
