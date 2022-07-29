import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getRaceResult } from "../../api/ErgastAPI/RaceAPI";
import { getNextRace, getPreviousRace } from "../../api/ErgastAPI/ScheduleAPI";
import { AppOutletContext } from "../../App";
import { fetchConstructorStandings, selectConstructorStandings, selectConstructorStandingsError, selectConstructorStandingsStatus } from "../../app/constructorStandings/constructorStandingsSlice";
import { fetchDriverStandings, selectDriverStandings, selectDriverStandingsError, selectDriverStandingsStatus } from "../../app/driverStandings/driverStandingsSlice";
import { useAppSelector } from "../../app/hooks";
import { ErgastRace } from "../../model/ErgastRace";
import { ConstructorStandings } from "../ConstructorStandings/ConstructorStandings";
import { DriverStandings } from "../DriverStandings/DriverStandings";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { RaceSummaryCard } from "../RaceSummaryCard/RaceSummaryCard";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Dashboard.module.css";

export const Dashboard = ({ }) => {
  const { isDarkMode, windowWidth, windowWidthThreshold } = useOutletContext<AppOutletContext>();
  const [nextRace, setNextRace] = useState<ErgastRace>();
  const [nextRaceTimeZone, setNextRaceTimeZone] = useState<string>();
  const [previousRace, setPreviousRace] = useState<ErgastRace>();
  const [previousRaceTimeZone, setPreviousRaceTimeZone] = useState<string>();
  const [previousRaceResult, setPreviousRaceResult] = useState<ErgastRace>();
  const driverStandings = useAppSelector(selectDriverStandings);
  const driverStandingsStatus = useAppSelector(selectDriverStandingsStatus);
  const driverStandingsError = useAppSelector(selectDriverStandingsError);
  const constructorStandings = useAppSelector(selectConstructorStandings);
  const constructorStandingsStatus = useAppSelector(selectConstructorStandingsStatus);
  const constructorStandingsError = useAppSelector(selectConstructorStandingsError);

  const [isNextRaceActive, setIsNextRaceActive] = useState(true);
  useEffect(() => {
    if (!nextRace) {
      getNextRace()
        .then(response => {
          const { nextRace, timeZone } = response;
          setNextRace(nextRace);
          setNextRaceTimeZone(timeZone);
        });
    }
    if (!previousRace && !isNextRaceActive) {
      getPreviousRace()
        .then(response => {
          const { prevRace, timeZone } = response;
          setPreviousRace(prevRace);
          setPreviousRaceTimeZone(timeZone);
        });
    }
    if (!previousRaceResult && !isNextRaceActive) {
      getRaceResult('current', 'last')
        .then(response => {
          setPreviousRaceResult(response);
        })
    }
  }, [isNextRaceActive]);

  const raceSummaryCardContent = <>
    <div className={`displayFlex flexDirRow ${styles.tabContainer} ${isDarkMode ? styles.tabContainerdark : styles.tabContainerlight}`}>
      <span onClick={() => setIsNextRaceActive(false)} className={`large-font ${styles.tab} ${!isNextRaceActive ? (isDarkMode ? styles.activeTabdark : styles.activeTablight) : ''}`}>
        Previous Round
      </span>
      <span onClick={() => setIsNextRaceActive(true)} className={`large-font ${styles.tab} ${isNextRaceActive ? (isDarkMode ? styles.activeTabdark : styles.activeTablight) : ''}`}>
        Next Round
      </span>
    </div>
    {isNextRaceActive ? (nextRace ? <RaceSummaryCard horizontalLayout={windowWidth < windowWidthThreshold} race={nextRace} timeZone={nextRaceTimeZone || ''} useBuiltInHeader isUpcomingRace /> : <><LoadingSpinner />Next race loading...</>) : <></>}
    {!isNextRaceActive ? (previousRace && previousRaceResult ? <RaceSummaryCard race={{...previousRaceResult, ...previousRace}} timeZone={previousRaceTimeZone || ''} useBuiltInHeader useBuiltInResults /> : <><LoadingSpinner />Previous race loading...</>) : <></>}
    </>;

  return (
    <>
      <div className={`page-header ${isDarkMode ? 'dark' : 'light'} x-large-font ${styles.centeredHeader}`}>
        <span className="material-icons-align">
          Dashboard
          <span className="material-icons" style={{ color: 'red' }}>
            calendar_view_month
          </span>
        </span>
      </div>
      <div className={`page-content ${isDarkMode ? 'dark' : 'light'} ${windowWidth > windowWidthThreshold ? styles.dashboardGridLayout : styles.dashboardColumnLayout}`}>
        <div style={windowWidth > windowWidthThreshold ? { gridColumn: 2, gridRow: 1 } : { width: '100%' }}>
          {raceSummaryCardContent}
        </div>
        <div style={windowWidth > windowWidthThreshold ? { gridColumn: 3, gridRow: 1, width: '100%' } : { width: '100%', marginTop: '1rem' }}>
          <div className="displayFlex flexDirCol" style={windowWidth > windowWidthThreshold ? { alignItems: 'flex-end' } : { alignItems: 'center' }}>
            <UseReduxAsyncStatus
              status={driverStandingsStatus}
              error={driverStandingsError}
              successContent={<DriverStandings driverStandings={driverStandings} tableLimit={5} />}
              fetchAction={fetchDriverStandings}
              fetchParams={'current'}
              loadingInterText={'Driver standings'} />
            <div style={{ borderBottom: `3px solid ${isDarkMode ? 'white' : 'black'}`, margin: '1rem 0', width: '90%' }}></div>
            <UseReduxAsyncStatus
              status={constructorStandingsStatus}
              error={constructorStandingsError}
              successContent={<ConstructorStandings constructorStandings={constructorStandings} tableLimit={5} />}
              fetchAction={fetchConstructorStandings}
              fetchParams={'current'}
              loadingInterText={'Driver standings'} />
          </div>
        </div>
      </div>
    </>
  );
};
