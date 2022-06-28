import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ConstructorLogoType } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastConstructor } from "../../model/ErgastConstructor";
import { ErgastDriver } from "../../model/ErgastDriver";
import { ErgastRace } from "../../model/ErgastRace";
import { ErgastSeason } from "../../model/ErgastSeason";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { RaceQualifying } from "../RaceQualifying/RaceQualifying";
import { RaceResults } from "../RaceResults/RaceResults";
import { SortableTableHeader } from "../SortableTable/SortableTable";
import styles from "./EntityProfile.module.css";

interface EntityProfileProps {
  entity: ErgastDriver | ErgastConstructor | undefined,
  entityID: string | undefined,
  entitySeasons: ErgastSeason[],
  entityResults: ErgastRace[] | undefined,
  entityQualifying: ErgastRace[] | undefined,
  ergastResultsFn: (year: string, id: string) => Promise<ErgastRace[]>,
  setNewResultsReducerAction: ActionCreatorWithOptionalPayload<any, string>,
  ergastQualifyingFn: (year: string, id: string) => Promise<ErgastRace[]>,
  setNewQualifyingReducerAction: ActionCreatorWithOptionalPayload<any, string>,
  constructorLogos?: ConstructorLogoType,
  isConstructorProfile?: boolean
}

export const EntityProfile: React.FC<EntityProfileProps> = ({ entity, entityID, entitySeasons, entityResults, ergastResultsFn, setNewResultsReducerAction, entityQualifying, ergastQualifyingFn, setNewQualifyingReducerAction, constructorLogos, isConstructorProfile }) => {
  const dispatch = useAppDispatch();
  const [resultsYear, setResultsYear] = useState<string>();

  const handleChangeResultsYear = (year: string) => {
    setResultsYear(year);
    dispatch(setNewResultsReducerAction(undefined));
    ergastResultsFn(year, entityID || '')
      .then((response: ErgastRace[]) => dispatch(setNewResultsReducerAction(response)));
    dispatch(setNewQualifyingReducerAction(undefined));
    ergastQualifyingFn(year, entityID || '')
      .then((response: ErgastRace[]) => dispatch(setNewQualifyingReducerAction(response)));
  };
  useEffect(() => {
    if (entityResults && entityResults.length) {
      setResultsYear(entityResults[0].season);
    }
  }, [entityResults]);

  const entityBodyContent = <>{entity &&
    <div>
      <div className="displayFlex flexDirRow flexAlignItemsCenter" style={{ justifyContent: 'space-evenly', marginBottom: '1rem' }}>
        {entityID && constructorLogos && constructorLogos[entityID] && <img className="white-bg" src={constructorLogos[entityID]} alt={`${entityID} logo`} />}
        <div>Nationality: {entity.nationality}</div>
        <img src={FlagHelper.getFlagFromDenonym(entity.nationality)} alt={`${entity.nationality} flag`} />
        {"dateOfBirth" in entity && <div>Date of birth: {new Date(entity.dateOfBirth).toLocaleDateString()}</div>}
        <div><a href={entity.url} target="_blank">Wikipedia</a></div>
        <div style={{ width: '35%' }}>
          Seasons:
          <div style={{
            height: '30vh', overflowY: 'auto',
            border: 'solid white 1px', borderRadius: '10px',
            padding: '.5rem 2rem'
          }}>
            <div className="displayFlex flexDirCol">
              {entitySeasons.slice().reverse().map((season, i) =>
                <span key={season.season} style={{ justifyContent: 'space-between', display: 'flex' }}>
                  <span style={{ width: '10%' }}>{season.season}</span>
                  <span className="displayFlex flexDirRow flexJustContentCenter" style={{ width: '40%' }}>
                    <button className={!resultsYear && i == 0 ? styles.activeResultsYear : (resultsYear === season.season ? styles.activeResultsYear : '')}
                      onClick={() => handleChangeResultsYear(season.season)}>
                      {!resultsYear && i == 0 ? 'Showing' : (resultsYear === season.season ? 'Showing' : '')} Results
                    </button>
                  </span>
                  <Link style={{ width: '25%' }} to={`/${season.season}`}>
                    <span className="material-icons-align">
                      Schedule
                      <span className="material-icons">
                        logout
                      </span>
                    </span>
                  </Link>
                  <Link style={{ width: '25%' }} to={`/${season.season}/standings`}>
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
      {entityResults && entityQualifying ?
        <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: '100%' }}>
          <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: '90%' }}>
            <div className="displayFlex flexDirRow" style={{ justifyContent: 'space-between', width: '100%' }}>
              {entityResults.length &&
                <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: '50%' }}>
                  <div className="x-large-font">
                    {entityResults[0].season} Results:
                  </div>
                  <SortableTableHeader
                    template={['Fastest Lap', 'Finishing Status', 'Laps', 'Points', 'Position', 'Driver']}
                    prescribeWidths={{
                      'Fastest Lap': '20%',
                      'Finishing Status': '20%',
                      'Laps': '10%',
                      'Points': '10%',
                      'Position': '10%',
                      'Driver': '30%'
                    }}
                  />
                </div>
              }
              {entityQualifying.length &&
                <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: '50%' }}>
                  <div className="x-large-font">
                    {entityQualifying[0].season} Qualifying:
                  </div>
                  <SortableTableHeader
                    template={[`${isConstructorProfile ? 'Driver': 'Constructor'}`, 'Position', 'Q3', 'Q2', 'Q1']}
                    prescribeWidths={{
                      [`${isConstructorProfile ? 'Driver': 'Constructor'}`]: '30%',
                      'Position': '10%',
                      'Q1': '20%',
                      'Q2': '20%',
                      'Q3': '20%'
                    }}
                  />
                </div>
              }
            </div>
            <div style={{
                  overflowY: 'auto',
                  height: '65vh',
                  width: '100%',
                  border: 'solid white 1px',
                  borderRadius: '10px',
                  padding: '1rem'
                }}>
              {(entityResults.length >= entityQualifying.length ? entityResults : entityQualifying).map((_, i) => {
                return (
                  <div style={{ width: '100%', marginBottom: '1rem' }}>
                    <div style={{ width: '100%' }}>
                      <Link to={`/${(entityResults[i] || entityQualifying[i]).season}/${(entityResults[i] || entityQualifying[i]).round}`}>
                        <span className={`x-large-font displayFlex flexDirRow`} style={{ justifyContent: 'space-between' }}>
                          <span className="material-icons-align">
                            {i + 1}. {(entityResults[i] || entityQualifying[i]).raceName}
                            <img style={{ width: '10%' }} src={FlagHelper.getFlag((entityResults[i] || entityQualifying[i]).Circuit.Location.country)} alt={`${(entityResults[i] || entityQualifying[i]).Circuit.Location.country} flag`} />
                          </span>
                          <span className="material-icons-align large-font">
                            Go to race
                            <span className="material-icons">
                              logout
                            </span>
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div style={{ width: '100%', justifyContent: 'space-between' }} className={`x-large-font displayFlex flexDirRow small-font`}>
                      <div style={{ width: '50%' }}>
                        <RaceResults
                          noTableHeader
                          noClass
                          captionForTable={<></>}
                          templateParam={['Fastest Lap', 'Finishing Status', 'Laps', 'Points', 'Position', 'Driver']}
                          inputRace={entityResults[i]}
                          prescribeWidths={{
                            'Fastest Lap': '20%',
                            'Finishing Status': '20%',
                            'Laps': '10%',
                            'Points': '10%',
                            'Position': '10%',
                            'Driver': '30%'
                          }}
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <RaceQualifying
                          noTableHeader
                          noClass
                          captionForTable={<></>}
                          templateParam={[`${isConstructorProfile ? 'Driver': 'Constructor'}`, 'Position', 'Q3', 'Q2', 'Q1']}
                          inputRace={entityQualifying[i]}
                          prescribeWidths={{
                            [`${isConstructorProfile ? 'Driver': 'Constructor'}`]: '30%',
                            'Position': '10%',
                            'Q1': '20%',
                            'Q2': '20%',
                            'Q3': '20%'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
