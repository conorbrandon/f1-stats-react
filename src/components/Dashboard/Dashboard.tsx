import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { fetchConstructorStandings, selectConstructorStandings, selectConstructorStandingsError, selectConstructorStandingsStatus } from "../../app/constructorStandings/constructorStandingsSlice";
import { fetchDriverStandings, selectDriverStandings, selectDriverStandingsError, selectDriverStandingsStatus } from "../../app/driverStandings/driverStandingsSlice";
import { useAppSelector } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastRace } from "../../model/ErgastRace";
import { ConstructorStandings } from "../ConstructorStandings/ConstructorStandings";
import { DriverStandings } from "../DriverStandings/DriverStandings";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { RaceSummaryCard } from "../RaceSummaryCard/RaceSummaryCard";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Dashboard.module.css";

export const Dashboard = ({ }) => {
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
      ErgastAPI.getNextRace()
        .then(response => {
          const { nextRace, timeZone } = response;
          setNextRace(nextRace);
          setNextRaceTimeZone(timeZone);
        });
    }
    if (!previousRace && !isNextRaceActive) {
      ErgastAPI.getPreviousRace()
        .then(response => {
          const { prevRace, timeZone } = response;
          setPreviousRace(prevRace);
          setPreviousRaceTimeZone(timeZone);
        });
    }
    if (!previousRaceResult && !isNextRaceActive) {
      ErgastAPI.getRaceResult('current', 'last')
        .then(response => {
          setPreviousRaceResult(response);
        })
    }
  }, [isNextRaceActive]);

  const raceSummaryCardContent = <>
    <div className={`displayFlex flexDirRow ${styles.tabContainer}`}>
      <span onClick={() => setIsNextRaceActive(false)} className={`large-font ${styles.tab} ${!isNextRaceActive ? styles.activeTab : ''}`}>
        Previous race:
      </span>
      <span onClick={() => setIsNextRaceActive(true)} className={`large-font ${styles.tab} ${isNextRaceActive ? styles.activeTab : ''}`}>
        Next race:
      </span>
    </div>
    {isNextRaceActive ? (nextRace ? <RaceSummaryCard race={nextRace} timeZone={nextRaceTimeZone || ''} useBuiltInHeader isUpcomingRace /> : <><LoadingSpinner />Next race loading...</>) : <></>}
    {!isNextRaceActive ? (previousRace && previousRaceResult ? <RaceSummaryCard race={{...previousRaceResult, ...previousRace}} timeZone={previousRaceTimeZone || ''} useBuiltInHeader useBuiltInResults /> : <><LoadingSpinner />Previous race loading...</>) : <></>}
    </>;

  return (
    <>
      <div className={`page-header x-large-font ${styles.centeredHeader}`}>
        <span className="material-icons-align">
          Dashboard
          <span className="material-icons" style={{ color: 'red' }}>
            calendar_view_month
          </span>
        </span>
      </div>
      <div className={`page-content ${styles.dashboardGridLayout}`}>
        <div style={{ gridColumn: 2, gridRow: 1 }}>
          {raceSummaryCardContent}
        </div>
        <div style={{ gridColumn: 3, gridRow: 1 }}>
          <div className="displayFlex flexDirCol" style={{ alignItems: 'end' }}>
            <UseReduxAsyncStatus
              status={driverStandingsStatus}
              error={driverStandingsError}
              successContent={<DriverStandings driverStandings={driverStandings} tableLimit={5} />}
              fetchAction={fetchDriverStandings}
              fetchParams={'current'}
              loadingInterText={'Driver standings'} />
            <div style={{ borderBottom: '3px solid white', margin: '1rem 0', width: '90%' }}></div>
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
