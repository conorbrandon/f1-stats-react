import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { SortableTableHelper } from "../../helpers/SortableTableHelper";
import { ErgastRace } from "../../model/ErgastRace";
import { RaceOutletContext } from "../Race/Race";
import { SortableTable } from "../SortableTable/SortableTable";
import styles from "./RaceQualifying.module.css";

export const RaceQualifying = ({ }) => {
  const { year, round }: RaceOutletContext = useOutletContext();
  const [raceQualifying, setRaceQualifying] = useState<ErgastRace>();
  useEffect(() => {
    ErgastAPI.getRaceQualifying(year || '', round || '')
      .then(response => setRaceQualifying(response))
      .catch(error => console.log("can't get qualifyingResult", error));
  }, [raceQualifying]);
  const isOnlyQ1 = raceQualifying?.QualifyingResults?.length ? raceQualifying.QualifyingResults[0].Q3 : false;
  let template = ['Position', 'Driver', 'Constructor', 'Q1'];
  if (isOnlyQ1) {
    template.push(...['Q2', 'Q3']);
  }
  return (
    <div className="page-content padded">
      <SortableTable 
        items={raceQualifying?.QualifyingResults}
        caption={"Qualifying Results"}
        template={template}
        comparators={{
          Position: SortableTableHelper.comparators.Position,
          Driver: SortableTableHelper.comparators.Driver,
          Constructor: SortableTableHelper.comparators.Constructor,
          Q1: SortableTableHelper.comparators.LapTime,
          Q2: SortableTableHelper.comparators.LapTime,
          Q3: SortableTableHelper.comparators.LapTime,
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
