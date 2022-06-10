import React from "react";
import { useOutletContext } from "react-router-dom";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { TimeHelper } from "../../helpers/TimeHelper";
import { ErgastResult } from "../../model/ErgastResult";
import { RaceOutletContext } from "../Race/Race";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./RaceResults.module.css";

export const RaceResults = ({ }) => {
  const { race }: RaceOutletContext = useOutletContext();
  return (
    <div className="page-content padded">
      <SortableTable
        items={race?.Results}
        caption={'Results'}
        template={['Position', 'Driver', 'Constructor', 'Points', 'Fastest Lap', 'Finishing Status', 'Laps']}
        comparators={{
          Position: SortableTableHelper.comparators.Position,
          Driver: SortableTableHelper.comparators.Driver,
          Constructor: SortableTableHelper.comparators.Constructor,
          Points: SortableTableHelper.comparators.Points,
          'Fastest Lap': SortableTableHelper.comparators.LapTime,
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
