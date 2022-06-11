import React from "react";
import { useOutletContext } from "react-router-dom";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { TimeHelper } from "../../helpers/TimeHelper";
import { ErgastResult } from "../../model/ErgastResult";
import { RaceOutletContext } from "../Race/Race";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./RaceResults.module.css";

export interface RaceResultsProps {
  noClass?: boolean,
  limit?: number,
  templateParam?: string[]
}

export const RaceResults: React.FC<RaceResultsProps> = ({ noClass, limit, templateParam }) => {
  const { race }: RaceOutletContext = useOutletContext();
  const template = templateParam || ['Position', 'Driver', 'Constructor', 'Points', 'Fastest Lap', 'Finishing Status', 'Laps'];
  return (
    <div className={noClass ? '' : "page-content padded"}>
      <SortableTable
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
      />
    </div>
  );
};
