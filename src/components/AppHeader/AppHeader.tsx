import React from "react";
import { Link } from "react-router-dom";
import { fetchConstructorStandings } from "../../app/constructorStandings/constructorStandingsSlice";
import { fetchDriverStandings } from "../../app/driverStandings/driverStandingsSlice";
import { useAppDispatch } from "../../app/hooks";
import { fetchSchedule } from "../../app/schedule/scheduleSlice";

import styles from "./AppHeader.module.css";

export const AppHeader = ({ }) => {
  const dispatch = useAppDispatch();
  const handleResetStandings = () => {
    dispatch(fetchDriverStandings('current'));
    dispatch(fetchConstructorStandings('current'));
  };
  const handleResetSeasons = () => {
    dispatch(fetchSchedule('current'));
  };
  return (
    <div className="app-header">
      <Link to="" onClick={handleResetStandings}>
        <h1 className={styles.centered}>
          <span className='red xx-large-font'>F1</span> 
          <span className="x-large-font">Stats</span>
        </h1>
      </Link>
      <nav className={styles.paddedLink}>
        <Link to={'/'} onClick={handleResetStandings}>dashboard</Link>
        <Link to={`/current`} onClick={handleResetSeasons}>seasons</Link>
        <Link to={'/current/standings'} onClick={handleResetStandings}>standings</Link>
        {process.env.REACT_APP_ENVIRONMENT === 'mock' && 
          <>
          <Link style={{ color: 'gray' }} to="2008/5">test race 2008</Link>
          <Link style={{ color: 'gray' }} to="2022/5">test race 2022</Link>
          <Link style={{ color: 'gray' }} to="driver/massa">test driver massa</Link>
          <Link style={{ color: 'gray' }} to="constructor/ferrari">test const. ferrari</Link>
          </>}
      </nav>
    </div>
  );
}