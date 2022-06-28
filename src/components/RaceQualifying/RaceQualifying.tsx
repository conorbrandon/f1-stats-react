import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectBestTimesFromEachSession, selectQualifying, selectQualifyingError, selectQualifyingStatus, setUpdatedQualifyingResults } from "../../app/qualifying/qualifyingSlice";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { TimeHelper } from "../../helpers/TimeHelper";
import { ErgastQualifyingResult } from "../../model/ErgastQualifyingResult";
import { ErgastRace } from "../../model/ErgastRace";
import { RaceResultsProps } from "../RaceResults/RaceResults";
import { SortableTable } from "../SortableTable/SortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceQualifying.module.css";

export const RaceQualifying: React.FC<RaceResultsProps> = ({ noClass, limit, templateParam, inputRace, captionForTable, noTableHeader, prescribeWidths }) => {
  const qualifying = useAppSelector(selectQualifying);
  const qualifyingStatus = useAppSelector(selectQualifyingStatus);
  const qualifyingError = useAppSelector(selectQualifyingError);
  const bestTimesFromEachSession = useAppSelector(selectBestTimesFromEachSession);
  const hasQ3 = qualifying?.QualifyingResults?.length ? qualifying.QualifyingResults[0].Q3 : false;
  let template = ['Position', 'Driver', 'Constructor'];
  if (hasQ3) {
    template.push(...['Q3', 'Q3 Interval', 'Q2', 'Q2 Interval']);
  }
  template.push(...['Q1', 'Q1 Interval']);
  template = templateParam || template;

  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (qualifying?.QualifyingResults && qualifying?.QualifyingResults.length) {
      qualifying.QualifyingResults.forEach(result => {
        if (!constructorLogos || !constructorLogos[result.Constructor.constructorId]) dispatch(fetchConstructorLogo(result.Constructor));
      });
      if (inputRace?.Results && inputRace?.Results.length) {
        inputRace.Results.forEach(result => {
          if (!constructorLogos || !constructorLogos[result.Constructor.constructorId]) dispatch(fetchConstructorLogo(result.Constructor))
        });
      }
    }
  }, [qualifying, dispatch, inputRace]);
  useEffect(() => {
    if (qualifying?.QualifyingResults && qualifying?.QualifyingResults.length && bestTimesFromEachSession) {
      const QualifyingResultsCopy = (JSON.parse(JSON.stringify(qualifying.QualifyingResults)) as ErgastQualifyingResult[]).map(result => {
        if (!constructorLogos || !constructorLogos[result.Constructor.constructorId]) dispatch(fetchConstructorLogo(result.Constructor));
        const { bestQ1Time, bestQ2Time, bestQ3Time } = bestTimesFromEachSession;
        const q1 = TimeHelper.raceTimeToMs(result.Q1);
        const q2 = TimeHelper.raceTimeToMs(result.Q2);
        const q3 = TimeHelper.raceTimeToMs(result.Q3);
        if (result.Q1 && q1 !== bestQ1Time) result['Q1 Interval'] = q1 - bestQ1Time;
        if (result.Q2 && q2 !== bestQ2Time) result['Q2 Interval'] = q2 - bestQ2Time;
        if (result.Q3 && q3 !== bestQ3Time) result['Q3 Interval'] = q3 - bestQ3Time;
        return result;
      });
      dispatch(setUpdatedQualifyingResults(QualifyingResultsCopy));
    }
  }, [bestTimesFromEachSession, dispatch]);

  const raceQualifyingContent = (qualifying: ErgastRace) => {
    return qualifying ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SortableTable
        prescribeWidths={prescribeWidths}
        noTableHeader={noTableHeader}
        items={limit ? qualifying?.QualifyingResults?.slice(0, limit) : qualifying?.QualifyingResults}
        limit={limit}
        limitComponent={<p>
          <Link to={`/${qualifying?.season}/${qualifying?.round}/qualifying`}>See full qualifying results...</Link>
        </p>}
        caption={captionForTable || "Qualifying Results"}
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
          Constructor: (result: ErgastQualifyingResult) => SortableTableHelper.transformers.Constructor(result, constructorLogos),
          Q1: (result: ErgastQualifyingResult) => SortableTableHelper.transformers.RawFromDeepValue(result, 'Q1'),
          'Q1 Interval': (result: ErgastQualifyingResult) => <div>{result["Q1 Interval"] ? `+${TimeHelper.msToRaceTime(result["Q1 Interval"])}` : ''}</div>,
          Q2: (result: ErgastQualifyingResult) => SortableTableHelper.transformers.RawFromDeepValue(result, 'Q2'),
          'Q2 Interval': (result: ErgastQualifyingResult) => <div>{result["Q2 Interval"] ? `+${TimeHelper.msToRaceTime(result["Q2 Interval"])}` : ''}</div>,
          Q3: (result: ErgastQualifyingResult) => SortableTableHelper.transformers.RawFromDeepValue(result, 'Q3'),
          'Q3 Interval': (result: ErgastQualifyingResult) => <div>{result["Q3 Interval"] ? `+${TimeHelper.msToRaceTime(result["Q3 Interval"])}` : ''}</div>,
        }}
      />
    </div> : <></>;
  }
  return (
    <div className={noClass ? '' : "page-content"} style={{ width: '100%' }}>
      {!inputRace && qualifying && <UseReduxAsyncStatus status={qualifyingStatus} successContent={raceQualifyingContent(qualifying)} error={qualifyingError} loadingInterText={'Qualifying results'} />}
      {inputRace && raceQualifyingContent(inputRace)}
    </div>
  );
};
