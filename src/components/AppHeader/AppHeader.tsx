import React from "react";
import { Link } from "react-router-dom";
import { fetchConstructorStandings } from "../../app/constructorStandings/constructorStandingsSlice";
import { fetchDriverStandings } from "../../app/driverStandings/driverStandingsSlice";
import { useAppDispatch } from "../../app/hooks";
import { fetchSchedule } from "../../app/schedule/scheduleSlice";

import styles from "./AppHeader.module.css";

interface AppHeaderProps {
  isDarkMode: boolean,
  enableDarkMode: () => void,
  disableDarkMode: () => void
}

export const AppHeader: React.FC<AppHeaderProps> = ({ isDarkMode, enableDarkMode, disableDarkMode }) => {
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
  return (
    <div className={`app-header ${isDarkMode ? 'dark' : 'light'}`}>
      <Link to="" onClick={handleResetStandings}>
        <h1 className={styles.centered}>
          <span className='red xx-large-font'>F1</span> 
          <span className="x-large-font">Stats</span>
        </h1>
      </Link>
      <nav className={`${styles.paddedLink}`}>
        <Link to={'/'} onClick={handleResetStandings}>dashboard</Link>
        <Link to={`/current`} onClick={handleResetSeasons}>seasons</Link>
        <Link to={'/current/standings'} onClick={handleResetStandings}>standings</Link>
        <Link to={'/drivers'}>drivers</Link>
        <Link to={'/constructors'}>constructors</Link>
        {process.env.REACT_APP_ENVIRONMENT === 'mock' && 
          <>
          <Link style={{ color: 'gray' }} to="2008/5">test race 2008</Link>
          <Link style={{ color: 'gray' }} to="2022/5">test race 2022</Link>
          <Link style={{ color: 'gray' }} to="driver/massa">test driver massa</Link>
          <Link style={{ color: 'gray' }} to="constructor/ferrari">test const. ferrari</Link>
          </>}
      </nav>  
      {isDarkMode && <span className={`material-icons ${styles.darkModeToggleButton} ${styles.lightModeButton}`} onClick={handleDisableDarkMode}>light_mode</span>}
      {!isDarkMode && <span className={`material-icons ${styles.darkModeToggleButton} ${styles.darkModeButton}`} onClick={handleEnableDarkMode}>dark_mode</span>}
    </div>
  );
}