import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { FlagHelper } from "../../helpers/FlagHelper";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceHeader.module.css";

export const RaceHeader = ({ }) => {
  const race = useAppSelector(selectResult);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const successContent = race ? <>
    <span className={`${styles.backToSeasonLink} material-icons-align`}><span className="material-icons">
      arrow_back
    </span><Link to={`/${race.season}`}>
        {race.season} season</Link></span>
    <span className={`material-icons-align ${styles.spaceEvenly}`}>
      <Link to={`/${race.season}/${parseInt(race.round) - 1}`}><span className="material-icons">arrow_back_ios_new</span></Link>
      <Link to={`/${race.season}/${parseInt(race.round) + 1}`}><span className="material-icons">arrow_forward_ios</span></Link>
      <span className="x-large-font">{race.season} {race.raceName}</span>
      <img className={styles.img} src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
      <span className="medium-font">(Round {race.round})</span>
    </span>
  </> : <></>;
  return (
    <div className="page-header">
      <UseReduxAsyncStatus status={resultStatus} successContent={successContent} error={resultError} />
      <span className={styles.links}>
        <Link to="">Summary</Link>
        <Link to="results">Results</Link>
        <Link to="qualifying">Qualifying</Link>
        <Link to="laptimes">Lap/Position Trace</Link>
      </span>
    </div>
  );
};
