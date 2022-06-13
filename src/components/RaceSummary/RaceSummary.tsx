import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Mapbox } from "../Mapbox/Mapbox";
import { RaceOutletContext } from "../Race/Race";
import { RaceQualifying } from "../RaceQualifying/RaceQualifying";
import { RaceResults } from "../RaceResults/RaceResults";
import styles from "./RaceSummary.module.css";

export const RaceSummary = ({ }) => {
  const { race, raceQualifying, lapTimes, driverIDSet, scaleDomain }: RaceOutletContext = useOutletContext();
  return (
    <div className={`page-content padded ${styles.raceSummaryLayout}`}>
      <div className={styles.raceSummaryLocation}>
        {race && <>
          <div>
            <a href={race.Circuit.url} target="_blank" rel="noopener">{race.Circuit.circuitName}</a><br />
            {race.Circuit.Location.locality}, {race.Circuit.Location.country}
          </div>
          <p>Date: {new Date(race.date).toLocaleDateString()}</p>
          <Mapbox races={[race]} mapType="square" zoomParam={5} />
          <p><a href={`https://www.google.com/maps/place/${race.Circuit.Location.lat},${race.Circuit.Location.long}`} target="_blank" rel="noopener noreferrer">Google Maps</a></p>
          <p><a href={race.url} target="_blank" rel="noopener">Wikipedia</a></p>
          </>}
      </div>
      <div className={styles.raceSummaryTables}>
          { race && <RaceResults noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Points']} />}
          <p>
            <Link to={'results'}>See full results...</Link>
          </p>
          { raceQualifying && <RaceQualifying noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Q1']} /> }
          <p>
            <Link to={'qualifying'}>See full qualifying results...</Link>
          </p>
      </div>
    </div>
  );
};
