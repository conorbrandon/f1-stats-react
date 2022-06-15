import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { Mapbox } from "../Mapbox/Mapbox";
import { RaceQualifying } from "../RaceQualifying/RaceQualifying";
import { RaceResults } from "../RaceResults/RaceResults";
import { UseReduxAsyncStatuses } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceSummary.module.css";

export const RaceSummary = ({ }) => {
  const race = useAppSelector(selectResult);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const raceSummaryLocationContent = race ? <>
  <div>
    <a href={race.Circuit.url} target="_blank" rel="noopener">{race.Circuit.circuitName}</a><br />
    {race.Circuit.Location.locality}, {race.Circuit.Location.country}
  </div>
  <p>Date: {new Date(race.date).toLocaleDateString()}</p>
  <Mapbox races={[race]} mapType="square" zoomParam={5} />
  <p><a href={`https://www.google.com/maps/place/${race.Circuit.Location.lat},${race.Circuit.Location.long}`} target="_blank" rel="noopener noreferrer">Google Maps</a></p>
  <p><a href={race.url} target="_blank" rel="noopener">Wikipedia</a></p>
  </> : <></>;
  return (
    <div className={`page-content padded ${styles.raceSummaryLayout}`}>
      <div className={styles.raceSummaryLocation}>
        <UseReduxAsyncStatuses status={resultStatus} successContent={raceSummaryLocationContent} error={resultError} />
      </div>
      <div className={styles.raceSummaryTables}>
          <RaceResults noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Points']} />
          <RaceQualifying noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Q3']} />
      </div>
    </div>
  );
};
