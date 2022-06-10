import React from "react";
import { useOutletContext } from "react-router-dom";
import { FlagHelper } from "../../helpers/FlagHelper";
import { TimeHelper } from "../../helpers/TimeHelper";
import { ErgastResult } from "../../model/ErgastResult";
import { RaceOutletContext } from "../Race/Race";
import { SortableTable } from "../SortableTable/SortableTable";
import "./RaceResults.css";

export const RaceResults = ({ }) => {
  const { race }: RaceOutletContext = useOutletContext();
  return (
    <div className="page-content padded">
      <SortableTable
        items={race?.Results}
        comparators={{
          Position: (a: ErgastResult, b: ErgastResult) => parseInt(a.position) - parseInt(b.position),
          Driver: (a: ErgastResult, b: ErgastResult) => a.Driver.familyName > b.Driver.familyName ? 1 : -1,
          Constructor: (a: ErgastResult, b: ErgastResult) => a.Constructor.name > b.Constructor.name ? 1 : -1,
          Points: (a: ErgastResult, b: ErgastResult) => parseInt(b.points) - parseInt(a.points),
          'Fastest Lap': (a: ErgastResult, b: ErgastResult) => TimeHelper.raceTimeToMs(a.FastestLap?.Time.time) - TimeHelper.raceTimeToMs(b.FastestLap?.Time.time),
          'Finishing Status': (a: ErgastResult, b: ErgastResult) => a.status > b.status ? 1 : -1,
          Laps: (a: ErgastResult, b: ErgastResult) => parseInt(a.laps) - parseInt(b.laps),
        }}
        caption={'Results'}
        template={['Position', 'Driver', 'Constructor', 'Points', 'Fastest Lap', 'Finishing Status', 'Laps']}
        transformers={{
          Position: (result: ErgastResult) => {
            return <div className="material-icons-align">
              {result.position} 
              {result.position === "1" && <span className="material-icons gold">star</span>}
              </div>;
          },
          Driver: (result: ErgastResult) => {
            return <div className="material-icons-align">
              <img src={FlagHelper.getFlagFromDenonym(result.Driver.nationality)} alt={`${result.Driver.nationality} flag`} />
              {result.Driver.givenName} {result.Driver.familyName}
            </div>
          },
          Constructor: (result: ErgastResult) => {
            return <>{result.Constructor.name}</>
          },
          Points: (result: ErgastResult) => {
            return <div>{result.points}</div>
          },
          'Fastest Lap': (result: ErgastResult) => {
            return <div className="material-icons-align">
              {result.FastestLap?.Time.time}
              {result.FastestLap?.rank === "1" && <span className="material-icons gold">star</span>}
            </div>
          },
          'Finishing Status': (result: ErgastResult) => {
            return <div>{result.status}</div>
          },
          Laps: (result: ErgastResult) => {
            return <div>{result.laps}</div>
          },
        }}
      />
    </div>
  );
};
