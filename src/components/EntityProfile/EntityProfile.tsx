import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConstructorLogoType } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastConstructor } from "../../model/ErgastConstructor";
import { ErgastDriver } from "../../model/ErgastDriver";
import { ErgastRace } from "../../model/ErgastRace";
import { ErgastSeason } from "../../model/ErgastSeason";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { RaceResults } from "../RaceResults/RaceResults";
import styles from "./EntityProfile.module.css";

interface EntityProfileProps {
  entity: ErgastDriver | ErgastConstructor | undefined,
  entityID: string | undefined,
  entitySeasons: ErgastSeason[],
  entityResults: ErgastRace[] | undefined,
  ergastResultsFn: (year: string, id: string) => Promise<ErgastRace[]>,
  setNewResultsReducerAction: ActionCreatorWithOptionalPayload<any, string>,
  constructorLogos?: ConstructorLogoType
}

export const EntityProfile: React.FC<EntityProfileProps> = ({ entity, entityID, entitySeasons, entityResults, ergastResultsFn, setNewResultsReducerAction, constructorLogos }) => {
  const dispatch = useAppDispatch();
  const [resultsYear, setResultsYear] = useState<string>();

  const handleChangeResultsYear = (year: string) => {
    setResultsYear(year);
    dispatch(setNewResultsReducerAction(undefined));
    ergastResultsFn(year, entityID || '')
      .then((response: ErgastRace[]) => dispatch(setNewResultsReducerAction(response)));
  };

  const entityBodyContent = <>{entity &&
    <div>
      <div className="displayFlex flexDirRow flexAlignItemsCenter" style={{ justifyContent: 'space-evenly', marginBottom: '3rem' }}>
        {entityID && constructorLogos && constructorLogos[entityID] && <img className="white-bg" src={constructorLogos[entityID]} alt={`${entityID} logo`} />}
        <div>Nationality: {entity.nationality}</div>
        <img src={FlagHelper.getFlagFromDenonym(entity.nationality)} alt={`${entity.nationality} flag`} />
        {"dateOfBirth" in entity && <div>Date of birth: {new Date(entity.dateOfBirth).toLocaleDateString()}</div>}
        <div><a href={entity.url} target="_blank">Wikipedia</a></div>
        <div style={{ width: '35%' }}>
          Seasons:
          <div style={{ height: '30vh', overflowY: 'auto', border: 'solid white 1px', padding: '.5rem 2rem' }}>
            <div className="displayFlex flexDirCol">
              {entitySeasons.slice().reverse().map((season, i) =>
                <span key={season.season} style={{ justifyContent: 'space-between', display: 'flex' }}>
                  {season.season}
                  <span>
                    <button className={!resultsYear && i == 0 ? styles.activeResultsYear : (resultsYear === season.season ? styles.activeResultsYear : '')}
                      onClick={() => handleChangeResultsYear(season.season)}>
                      {!resultsYear && i == 0 ? 'Showing' : (resultsYear === season.season ? 'Showing': '')} Results
                    </button>
                  </span>
                  <Link to={`/${season.season}`}>
                    <span className="material-icons-align">
                      Schedule
                      <span className="material-icons">
                        logout
                      </span>
                    </span>
                  </Link>
                  <Link to={`/${season.season}/standings`}>
                    <span className="material-icons-align">
                      Standings
                      <span className="material-icons">
                        logout
                      </span>
                    </span>
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {entityResults ?
        <>
          {entityResults.length && <div className="displayFlex flexDirCol flexAlignItemsCenter">
            <div className="x-large-font">
              {entityResults[0].season} Results:
            </div>
            {entityResults.map(race => {
              return <div style={{ width: '90%', margin: '1rem' }}>
                <RaceResults
                  captionForTable={<>
                    <Link to={`/${race.season}/${race.round}`}>
                      <span className="displayFlex flexDirCol flexAlignItemsCenter">
                        <span className={`x-large-font ${styles.smallResultHeaderLink}`}>
                          <span className="material-icons-align">
                            {race.raceName}
                            <img src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
                          </span>
                          <span className="material-icons-align large-font">
                            Go to race
                            <span className="material-icons">
                              logout
                            </span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </>}
                  noClass
                  templateParam={['Position', 'Driver', 'Constructor', 'Points', 'Fastest Lap', 'Finishing Status', 'Laps']}
                  inputRace={race} 
                />
              </div>;
            })}
          </div>}
        </>
        : <LoadingSpinner />
      }
    </div>
  }</>;
  return (
    <div className="page-content">
      {entityBodyContent}
    </div>
  );
};
