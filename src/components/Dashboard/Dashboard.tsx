import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { fetchDriverStandings, selectDriverStandings, selectDriverStandingsError, selectDriverStandingsStatus } from "../../app/driverStandings/driverStandingsSlice";
import { useAppSelector } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastRace } from "../../model/ErgastRace";
import { DriverStandings } from "../DriverStandings/DriverStandings";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { RaceSummaryCard } from "../RaceSummaryCard/RaceSummaryCard";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./Dashboard.module.css";

export const Dashboard = ({ }) => {
  const [nextRace, setNextRace] = useState<ErgastRace>();
  const driverStandings = useAppSelector(selectDriverStandings);
  const driverStandingsStatus = useAppSelector(selectDriverStandingsStatus);
  const driverStandingsError = useAppSelector(selectDriverStandingsError);

  useEffect(() => {
    if (!nextRace) {
      ErgastAPI.getNextRace()
        .then(response => setNextRace(response));
    }
  }, []);

  const raceSummaryCardContent = nextRace ? <><span className="xx-large-font">Next race:</span><br></br>
    <span className="material-icons-align">
      <Link to={`/${nextRace.season}/${nextRace.round}`}>
        <span className="x-large-font">{nextRace.season} {nextRace.raceName} (Round {nextRace.round})</span>
        <img className={styles.dashboardImg} src={FlagHelper.getFlag(nextRace.Circuit.Location.country)} alt={`${nextRace.Circuit.Location.country} flag`} />
      </Link>
    </span>
    <RaceSummaryCard race={nextRace} /></>
    : <><LoadingSpinner />Next race loading...</>;

  return (
    <>
      <div className={`page-header x-large-font ${styles.centeredHeader}`}>
        <span className="material-icons-align">Dashboard<span className="material-icons">
          calendar_view_month
        </span></span>
      </div>
      <div className={`page-content padded ${styles.dashboardGridLayout}`}>
        <div style={{ gridColumn: 1, gridRow: 1 }}>
          {raceSummaryCardContent}
        </div>
        <div style={{ gridColumn: 2, gridRow: 1 }}>
          <UseReduxAsyncStatus
            status={driverStandingsStatus}
            error={driverStandingsError}
            successContent={<DriverStandings driverStandings={driverStandings} tableLimit={5} />}
            fetchAction={fetchDriverStandings}
            fetchParams={'current'}
            loadingInterText={'Driver standings'} />
        </div>
      </div>
    </>
  );
};
