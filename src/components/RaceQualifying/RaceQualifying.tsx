import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectQualifying, selectQualifyingError, selectQualifyingStatus } from "../../app/qualifying/qualifyingSlice";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastQualifyingResult } from "../../model/ErgastQualifyingResult";
import { RaceResultsProps } from "../RaceResults/RaceResults";
import { SortableTable } from "../SortableTable/SortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceQualifying.module.css";

export const RaceQualifying: React.FC<RaceResultsProps> = ({ noClass, limit, templateParam }) => {
  const qualifying = useAppSelector(selectQualifying);
  const qualifyingStatus = useAppSelector(selectQualifyingStatus);
  const qualifyingError = useAppSelector(selectQualifyingError);
  const hasQ3 = qualifying?.QualifyingResults?.length ? qualifying.QualifyingResults[0].Q3 : false;
  let template = ['Position', 'Driver', 'Constructor', 'Q1'];
  if (hasQ3) {
    template.push(...['Q2', 'Q3']);
  }
  template = templateParam || template;
  const raceQualifyingContent = <>
    <SortableTable
      items={limit ? qualifying?.QualifyingResults?.slice(0, limit) : qualifying?.QualifyingResults}
      caption={"Qualifying Results"}
      template={template}
      comparators={{
        Position: SortableTableHelper.comparators.Position,
        Driver: SortableTableHelper.comparators.Driver,
        Constructor: SortableTableHelper.comparators.Constructor,
        Q1: (a: ErgastQualifyingResult, b: ErgastQualifyingResult) => SortableTableHelper.comparators.LapTime(a, b, 'Q1'),
        Q2: (a: ErgastQualifyingResult, b: ErgastQualifyingResult) => SortableTableHelper.comparators.LapTime(a, b, 'Q2'),
        Q3: (a: ErgastQualifyingResult, b: ErgastQualifyingResult) => SortableTableHelper.comparators.LapTime(a, b, 'Q3')
      }}
      transformers={{
        Position: SortableTableHelper.transformers.Position,
        Driver: SortableTableHelper.transformers.Driver,
        Constructor: SortableTableHelper.transformers.Constructor,
        Q1: SortableTableHelper.transformers.Q1,
        Q2: SortableTableHelper.transformers.Q2,
        Q3: SortableTableHelper.transformers.Q3,
      }}
    />
    {limit && <p>
      <Link to={`/${qualifying?.season}/${qualifying?.round}/qualifying`}>See full qualifying results...</Link>
    </p>}
  </>;
  return (
    <div className={noClass ? '' : "page-content padded"} style={{ width: '100%' }}>
      <UseReduxAsyncStatus status={qualifyingStatus} successContent={raceQualifyingContent} error={qualifyingError} loadingInterText={'Qualifying results'} />
    </div>
  );
};
