import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastRace } from "../../model/ErgastRace";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { RaceSummaryCard } from "../RaceSummaryCard/RaceSummaryCard";
import styles from "./Dashboard.module.css";

export const Dashboard = ({ }) => {
  const [nextRace, setNextRace] = useState<ErgastRace>();

  const successContent = nextRace ? <>
    <div style={{ gridColumn: 1, gridRow: 1 }}>
      <span className="xx-large-font">Next race:</span><br></br>
      <span className="material-icons-align">
        <Link to={`/${nextRace.season}/${nextRace.round}`}>
          <span className="x-large-font">{nextRace.season} {nextRace.raceName} (Round {nextRace.round})</span>
          <img className={styles.dashboardImg} src={FlagHelper.getFlag(nextRace.Circuit.Location.country)} alt={`${nextRace.Circuit.Location.country} flag`} />
        </Link>
      </span>
      <RaceSummaryCard race={nextRace} />
    </div>
  </> : <LoadingSpinner />;

  useEffect(() => {
    if (!nextRace) {
      ErgastAPI.getNextRace()
        .then(response => setNextRace(response));
    }
  }, []);

  return (
    <>
      <div className={`page-header xx-large-font ${styles.centeredHeader}`}>
        <span>Dashboard</span>
      </div>
      <div className={`page-content padded ${styles.dashboardGridLayout}`}>
        {successContent}
      </div>
    </>
  );
};
