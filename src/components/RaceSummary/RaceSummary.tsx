import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectResult, selectResultError, selectResultStatus, selectResultTimeZone } from "../../app/result/resultSlice";
import { RaceQualifying } from "../RaceQualifying/RaceQualifying";
import { RaceResults } from "../RaceResults/RaceResults";
import { RaceSummaryCard } from "../RaceSummaryCard/RaceSummaryCard";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceSummary.module.css";

export const RaceSummary = ({ }) => {
  const race = useAppSelector(selectResult);
  const raceTimeZone = useAppSelector(selectResultTimeZone);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const [horizontalLayout, setHorizontalLayout] = useState(false);
  useEffect(() => {
    if (race) {
      setHorizontalLayout(new Date(`${race.date}T${race.time}`).valueOf() > new Date().valueOf());
    }
  }, [race]);
  // RaceSummaryCard will go to horizontal layout if race is in the future
  const raceSummaryCardContent = race ? <RaceSummaryCard race={race} horizontalLayout={horizontalLayout} isUpcomingRace={horizontalLayout} timeZone={raceTimeZone || ''} /> : <></>;
  return (
    <div className={`page-content ${!horizontalLayout ? styles.raceSummaryLayout : ''}`}>
      <div className={styles.raceSummaryLocation}>
        <UseReduxAsyncStatus status={resultStatus} successContent={raceSummaryCardContent} error={resultError} />
      </div>
      {/* only show results and qualifying if race was in the past */}
      {race && !horizontalLayout && <div className={styles.raceSummaryTables}>
        <RaceResults noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Points', 'Interval', 'Pos. Gained']} />
        <RaceQualifying noClass={true} limit={5} templateParam={['Position', 'Driver', 'Constructor', 'Q3']} />
      </div>}
    </div>
  );
};
