import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastRace } from "../../model/ErgastRace";
import { RaceOutletContext } from "../Race/Race";
import "./RaceQualifying.css";

export const RaceQualifying = ({ }) => {
  const { year, round }: RaceOutletContext = useOutletContext();
  const [raceQualifying, setRaceQualifying] = useState<ErgastRace>();
  useEffect(() => {
    ErgastAPI.getRaceQualifying(year || '', round || '')
      .then(response => setRaceQualifying(response))
      .catch(error => console.log("can't get qualifyingResult", error));
  }, [raceQualifying]);
  return (
    <div className="page-content padded">
      Qualifying Results:
      {raceQualifying && <>
        <ol>
          {raceQualifying.QualifyingResults?.map(result => {
            return (
              <li>
                {result.Driver.givenName} {result.Driver.familyName}
                <img src={FlagHelper.getFlagFromDenonym(result.Driver.nationality)} alt={`${result.Driver.nationality} flag`} />
                <p>{result.Constructor.name}</p>
              </li>
            );
          })}
        </ol>
      </>}
    </div>
  );
};
