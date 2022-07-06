import React, { useState } from "react";
import styles from "./Standings.module.css";

import { fetchConstructorStandings, selectConstructorStandings, selectConstructorStandingsError, selectConstructorStandingsStatus } from "../../app/constructorStandings/constructorStandingsSlice";
import { fetchDriverStandings, selectDriverStandings, selectDriverStandingsError, selectDriverStandingsStatus } from "../../app/driverStandings/driverStandingsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ConstructorStandings } from "../ConstructorStandings/ConstructorStandings";
import { DriverStandings } from "../DriverStandings/DriverStandings";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { AppOutletContext } from "../../App";

export const Standings = ({ }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const dispatch = useAppDispatch();
  const driverStandings = useAppSelector(selectDriverStandings);
  const driverStandingsStatus = useAppSelector(selectDriverStandingsStatus);
  const driverStandingsError = useAppSelector(selectDriverStandingsError);
  const constructorStandings = useAppSelector(selectConstructorStandings);
  const constructorStandingsStatus = useAppSelector(selectConstructorStandingsStatus);
  const constructorStandingsError = useAppSelector(selectConstructorStandingsError);
  
  const { year } = useParams();
  const navigate = useNavigate();

  const [standingYear, setStandingYear] = useState(year || '');
  const years: string[] = Array.from({ length: new Date().getUTCFullYear() + 1 - 1950 }, (_, i) => i + 1950 + '').reverse();
  const changeStandingYear = (year: string) => {
    setStandingYear(year);
    navigate(`/${year}/standings`);
    dispatch(fetchDriverStandings(year));
    dispatch(fetchConstructorStandings(year));
  };

  return (
    <>
      <div className={`page-header ${isDarkMode ? 'dark' : 'light'}`}>
        <span className={`xx-large-font ${styles.standingsHeader}`} style={{ width: '100%' }}>
          {standingYear !== 'current' ? standingYear : (driverStandings && driverStandings.DriverStandings && driverStandings.DriverStandings.length ? driverStandings.season : '')} Standings
          <span className="displayFlex flexDirRow flexAlignItemsCenter">
            <span className="x-large-font">Select year:</span>
            <select name="years" id="years" onChange={(event) => changeStandingYear(event.target.value)} defaultValue={standingYear}>
              {years.map((year, i) => <option key={i} value={year}>{year}</option>)}
            </select>
          </span>
        </span>
      </div>
      <div className={`page-content ${isDarkMode ? 'dark' : 'light'} ${constructorStandingsStatus === 'succeeded' && constructorStandings ?  styles.standingsGrid : styles.noConstructorGrid}`}>
        <div style={{ gridColumn: 2 }} className='displayFlex flexDirCol flexAlignItemsCenter'>
          <UseReduxAsyncStatus
            status={driverStandingsStatus}
            error={driverStandingsError}
            successContent={<DriverStandings driverStandings={driverStandings} isOpenTable={true} />}
            fetchAction={fetchDriverStandings}
            fetchParams={year || 'current'}
            loadingInterText={'Driver standings'} />
        </div>
        <div style={{ gridColumn: 3 }} className='displayFlex flexDirCol flexAlignItemsCenter'>
          <UseReduxAsyncStatus
            status={constructorStandingsStatus}
            error={constructorStandingsError}
            successContent={<ConstructorStandings constructorStandings={constructorStandings} isOpenTable={true} />}
            fetchAction={fetchConstructorStandings}
            fetchParams={year || 'current'}
            loadingInterText={'Constructor standings'} />
        </div>
      </div>
    </>
  );
};
