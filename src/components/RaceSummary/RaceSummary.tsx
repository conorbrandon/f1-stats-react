import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { RaceQualifying } from "../RaceQualifying/RaceQualifying";
import { RaceResults } from "../RaceResults/RaceResults";
import { RaceSummaryCard } from "../RaceSummaryCard/RaceSummaryCard";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceSummary.module.css";

export const RaceSummary = ({ }) => {
  const race = useAppSelector(selectResult);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const raceSummaryLocationContent = race ? <RaceSummaryCard race={race} /> : <></>;
  return (
    <div className={`page-content ${styles.raceSummaryLayout}`}>
      <div className={styles.raceSummaryLocation}>
        <UseReduxAsyncStatus status={resultStatus} successContent={raceSummaryLocationContent} error={resultError} />
      </div>
      <div className={styles.raceSummaryTables}>
        <RaceResults noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Points', 'Interval', 'Pos. Gained']} />
        <RaceQualifying noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Q3']} />
      </div>
    </div>
  );
};
