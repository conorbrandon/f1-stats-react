import React from "react";
import { useOutletContext } from "react-router-dom";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastQualifyingResult } from "../../model/ErgastQualifyingResult";
import { ErgastResult } from "../../model/ErgastResult";
import { RaceOutletContext } from "../Race/Race";
import { RaceResultsProps } from "../RaceResults/RaceResults";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./RaceQualifying.module.css";

export const RaceQualifying: React.FC<RaceResultsProps> = ({ noClass, limit, templateParam }) => {
  const { raceQualifying }: RaceOutletContext = useOutletContext();
  const hasQ3 = raceQualifying?.QualifyingResults?.length ? raceQualifying.QualifyingResults[0].Q3 : false;
  let template = ['Position', 'Driver', 'Constructor', 'Q1'];
  if (hasQ3) {
    template.push(...['Q2', 'Q3']);
  }
  template = templateParam || template;
  return (
    <div className={noClass ? '' : "page-content padded"}>
      <SortableTable 
        items={limit ? raceQualifying?.QualifyingResults?.slice(0, limit) : raceQualifying?.QualifyingResults}
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
    </div>
  );
};
