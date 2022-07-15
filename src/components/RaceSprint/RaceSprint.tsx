import React, { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { fetchConstructorLogo, selectConstructorLogos } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchSprint, selectSprint, selectSprintError, selectSprintStatus } from "../../app/sprint/sprintSlice";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastRace } from "../../model/ErgastRace";
import { ErgastResult } from "../../model/ErgastResult";
import { RaceResultsProps } from "../RaceResults/RaceResults";
import { SortableTable } from "../SortableTable/SortableTable";
import { UseReduxAsyncStatus } from "../UseReduxAsyncStatuses/UseReduxAsyncStatuses";
import styles from "./RaceSprint.module.css";

export const RaceSprint: React.FC<RaceResultsProps> = ({ noClass, limit, templateParam, inputRace, captionForTable, noTableHeader, prescribeWidths, stickyThead }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const { year, round } = useParams();
  const sprint = useAppSelector(selectSprint);
  const sprintStatus = useAppSelector(selectSprintStatus);
  const sprintError = useAppSelector(selectSprintError);
  const template = templateParam || [
    'Position', 'Driver', 'Constructor',
    'Points', 'Fastest Lap', 'Pos. Gained',
    'Interval', 'Time', 'Finishing Status', 'Laps'
  ];

  const dispatch = useAppDispatch();
  const constructorLogos = useAppSelector(selectConstructorLogos);
  useEffect(() => {
    if (!sprint) {
      dispatch(fetchSprint({ year: year || '', round: round || '' }));
    }
    if (sprint?.SprintResults && sprint?.SprintResults.length) {
      sprint.SprintResults.forEach(result => {
        if (!constructorLogos || !constructorLogos[result.Constructor.constructorId]) dispatch(fetchConstructorLogo(result.Constructor))
      });
    }
    if (inputRace?.SprintResults && inputRace?.SprintResults.length) {
      inputRace.SprintResults.forEach(result => {
        if (!constructorLogos || !constructorLogos[result.Constructor.constructorId]) dispatch(fetchConstructorLogo(result.Constructor))
      });
    }
  }, [sprint, dispatch, inputRace]);

  const sprintQualifyingContent = (race: ErgastRace) => {
    return race ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SortableTable
        prescribeWidths={prescribeWidths}
        noTableHeader={noTableHeader}
        stickyThead={stickyThead}
        items={limit ? race?.SprintResults?.slice(0, limit) : race?.SprintResults}
        limit={limit}
        limitComponent={<p>
          <Link to={`/${race?.season}/${race?.round}/sprint`}>See full sprint qualifying results...</Link>
        </p>}
        caption={captionForTable || 'Sprint Qualifying Results'}
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
      {!inputRace && sprint && <UseReduxAsyncStatus status={sprintStatus} successContent={sprintQualifyingContent(sprint)} error={sprintError} loadingInterText={'Sprint Qualifying'} />}
      {inputRace && sprintQualifyingContent(inputRace)}
    </div>
  );
};
