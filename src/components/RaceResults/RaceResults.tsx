import React, { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectResult, selectResultError, selectResultStatus } from "../../app/result/resultSlice";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastRace } from "../../model/ErgastRace";
import { ErgastResult } from "../../model/ErgastResult";
import { SortableTable } from "../SortableTable/SortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceResults.module.css";

export interface RaceResultsProps {
  noClass?: boolean,
  limit?: number,
  templateParam?: string[],
  inputRace?: ErgastRace,
  captionForTable?: string | JSX.Element,
  noTableHeader?: boolean,
  prescribeWidths?: { [templateKey: string]: string },
  stickyThead?: boolean
}

export const RaceResults: React.FC<RaceResultsProps> = ({ noClass, limit, templateParam, inputRace, captionForTable, noTableHeader, prescribeWidths, stickyThead }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const race = useAppSelector(selectResult);
  const resultStatus = useAppSelector(selectResultStatus);
  const resultError = useAppSelector(selectResultError);
  const template = templateParam || [
    'Position', 'Driver', 'Constructor',
    'Points', 'Fastest Lap', 'Pos. Gained',
    'Interval', 'Time', 'Finishing Status', 'Laps'
  ];

  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (race?.Results && race?.Results.length) {
      race.Results.forEach(result => {
        if (!constructorLogos || !constructorLogos[result.Constructor.constructorId]) dispatch(fetchConstructorLogo(result.Constructor))
      });
    }
    if (inputRace?.Results && inputRace?.Results.length) {
      inputRace.Results.forEach(result => {
        if (!constructorLogos || !constructorLogos[result.Constructor.constructorId]) dispatch(fetchConstructorLogo(result.Constructor))
      });
    }
  }, [race, dispatch, inputRace]);

  const raceResultsContent = (race: ErgastRace) => {
    return race ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SortableTable
        prescribeWidths={prescribeWidths}
        noTableHeader={noTableHeader}
        stickyThead={stickyThead}
        items={limit ? race?.Results?.slice(0, limit) : race?.Results}
        limit={limit}
        limitComponent={<p>
          <Link to={`/${race?.season}/${race?.round}/results`}>See full results...</Link>
        </p>}
        caption={captionForTable || 'Results'}
        template={template}
        comparators={{
          Position: SortableTableHelper.comparators.Position,
          Driver: SortableTableHelper.comparators.Driver,
          Constructor: SortableTableHelper.comparators.Constructor,
          Points: SortableTableHelper.comparators.Points,
          'Fastest Lap': (a: ErgastResult, b: ErgastResult) => SortableTableHelper.comparators.LapTime(a, b, 'FastestLap.Time.time'),
          'Pos. Gained': SortableTableHelper.comparators['Pos. Gained'],
          Time: SortableTableHelper.comparators.FinishingTime,
          'Finishing Status': SortableTableHelper.comparators["Finishing Status"],
          Laps: SortableTableHelper.comparators.Laps
        }}
        transformers={{
          Position: SortableTableHelper.transformers.Position,
          Driver: SortableTableHelper.transformers.Driver,
          Constructor: (result: ErgastResult) => SortableTableHelper.transformers.Constructor(result, constructorLogos),
          Points: (result: ErgastResult) => SortableTableHelper.transformers.RawFromDeepValue(result, 'points'),
          'Fastest Lap': SortableTableHelper.transformers["Fastest Lap"],
          'Pos. Gained': SortableTableHelper.transformers['Pos. Gained'],
          Time: SortableTableHelper.transformers.FinishingTime,
          Interval: (result: ErgastResult) => SortableTableHelper.transformers.RawFromDeepValue(result, 'Time.time'),
          'Finishing Status': (result: ErgastResult) => SortableTableHelper.transformers.RawFromDeepValue(result, 'status'),
          Laps: (result: ErgastResult) => SortableTableHelper.transformers.RawFromDeepValue(result, 'laps'),
        }}
      /></div> : <></>;
  };
  return (
    <div className={noClass ? '' : `page-content ${isDarkMode ? 'dark' : 'light'}`} style={{ width: '100%' }}>
      {!inputRace && race && <UseReduxAsyncStatus status={resultStatus} successContent={raceResultsContent(race)} error={resultError} loadingInterText={'Results'} />}
      {inputRace && raceResultsContent(inputRace)}
    </div>
  );
};
