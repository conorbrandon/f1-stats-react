import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastResult } from "../../model/ErgastResult";
import { SortableTable } from "../SortableTable/SortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceResults.module.css";

export interface RaceResultsProps {
  noClass?: boolean,
  limit?: number,
  templateParam?: string[]
}

export const RaceResults: React.FC<RaceResultsProps> = ({ noClass, limit, templateParam }) => {
  const race = useAppSelector(selectResult);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const template = templateParam || ['Position', 'Driver', 'Constructor', 'Points', 'Fastest Lap', 'Finishing Status', 'Laps'];
  const raceResultsContent = <><SortableTable
    items={limit ? race?.Results?.slice(0, limit) : race?.Results}
    caption={'Results'}
    template={template}
    comparators={{
      Position: SortableTableHelper.comparators.Position,
      Driver: SortableTableHelper.comparators.Driver,
      Constructor: SortableTableHelper.comparators.Constructor,
      Points: SortableTableHelper.comparators.Points,
      'Fastest Lap': (a: ErgastResult, b: ErgastResult) => SortableTableHelper.comparators.LapTime(a, b, 'FastestLap.Time.time'),
      'Finishing Status': SortableTableHelper.comparators["Finishing Status"],
      Laps: SortableTableHelper.comparators.Laps,
    }}
    transformers={{
      Position: SortableTableHelper.transformers.Position,
      Driver: SortableTableHelper.transformers.Driver,
      Constructor: SortableTableHelper.transformers.Constructor,
      Points: SortableTableHelper.transformers.Points,
      'Fastest Lap': SortableTableHelper.transformers["Fastest Lap"],
      'Finishing Status': SortableTableHelper.transformers["Finishing Status"],
      Laps: SortableTableHelper.transformers.Laps,
    }}
  />{limit && <p>
      <Link to={`/${race?.season}/${race?.round}/results`}>See full results...</Link>
    </p>}</>;
  return (
    <div className={noClass ? '' : "page-content"} style={{ width: '100%' }}>
      <UseReduxAsyncStatus status={resultStatus} successContent={raceResultsContent} error={resultError} loadingInterText={'Results'} />
    </div>
  );
};
