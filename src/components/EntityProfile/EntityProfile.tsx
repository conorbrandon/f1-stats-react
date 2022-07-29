import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { ConstructorLogoType } from "../../app/constructorLogos/constructorLogosSlice";
import { useAppDispatch } from "../../app/hooks";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastCircuit } from "../../model/ErgastCircuit";
import { ErgastConstructor } from "../../model/ErgastConstructor";
import { ErgastDriver } from "../../model/ErgastDriver";
import { ErgastRace } from "../../model/ErgastRace";
import { ErgastSeason } from "../../model/ErgastSeason";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Mapbox } from "../Mapbox/Mapbox";
import { RaceQualifying } from "../RaceQualifying/RaceQualifying";
import { RaceResults } from "../RaceResults/RaceResults";
import { SortableTableHeader } from "../SortableTable/SortableTable";
import styles from "./EntityProfile.module.css";

interface EntityProfileProps {
  entity: ErgastDriver | ErgastConstructor | ErgastCircuit | undefined,
  entityID: string | undefined,
  entitySeasons: ErgastSeason[],
  entityResults: ErgastRace[] | undefined,
  entityQualifying: ErgastRace[] | undefined,
  ergastResultsFn: (year: string, id: string) => Promise<ErgastRace[]>,
  setNewResultsReducerAction: ActionCreatorWithOptionalPayload<any, string>,
  ergastQualifyingFn: (year: string, id: string) => Promise<ErgastRace[]>,
  setNewQualifyingReducerAction: ActionCreatorWithOptionalPayload<any, string>,
  constructorLogos?: ConstructorLogoType,
  isConstructorProfile?: boolean,
  isCircuitProfile?: boolean,
  circuitImgLink?: string
}
type WhichResults = 'results' | 'qualifying' | '';

export const EntityProfile: React.FC<EntityProfileProps> = ({ entity, entityID, entitySeasons, entityResults, ergastResultsFn, setNewResultsReducerAction, entityQualifying, ergastQualifyingFn, setNewQualifyingReducerAction, constructorLogos, isConstructorProfile, isCircuitProfile, circuitImgLink }) => {
  const { isDarkMode, windowWidth, windowWidthThreshold } = useOutletContext<AppOutletContext>();
  const dispatch = useAppDispatch();
  const [resultsYear, setResultsYear] = useState<string>();
  const [useWhichResults, setUseWhichResults] = useState<WhichResults>('results');

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
  const circuitResultsTemplate = ['Fastest Lap', 'Points', 'Constructor', 'Position', 'Driver'];
  const circuitResultsWidths = {
    'Fastest Lap': '17%',
    'Points': '10%',
    'Position': '10%',
    'Constructor': '30%',
    'Driver': '33%'
  };
  const circuitQualifyingTemplate = ['Driver', 'Position', 'Constructor', 'Q3', 'Q2', 'Q1'];
  const circuitQualifyingWidths = {
    'Position': '9%',
    'Q1': '12%',
    'Q2': '12%',
    'Q3': '12%',
    'Driver': '27.5%',
    'Constructor': '27.5%'
  };

  const entityBasicDetails = entity && <>
    {entityID && constructorLogos && constructorLogos[entityID] && <img className="white-bg" src={constructorLogos[entityID]} alt={`${entityID} logo`} />}
    {"nationality" in entity && <div>Nationality: {entity.nationality}</div>}
    {"nationality" in entity && <img src={FlagHelper.getFlagFromDenonym(entity.nationality)} alt={`${entity.nationality} flag`} />}
    {"Location" in entity && <img src={FlagHelper.getFlag(entity.Location.country)} alt={`${entity.Location.country} flag`} />}
    {isCircuitProfile && circuitImgLink && "circuitName" in entity ? <img className='white-bg' src={circuitImgLink} alt={`${entity.circuitName} track map`} /> : <></>}
    {"Location" in entity && <Mapbox zoomParam={4} mapType='smallVertical' races={[]} circuit={entity} />}
    {"dateOfBirth" in entity && <div>Date of birth: {new Date(entity.dateOfBirth).toLocaleDateString()}</div>}
    {!isCircuitProfile && <div><a href={entity.url} target="_blank">Wikipedia</a></div>}
    {isCircuitProfile && "Location" in entity && <div>
      <a href={entity.url} target="_blank">Wikipedia</a><br />
      <a href={`https://www.google.com/maps/place/${entity.Location.lat},${entity.Location.long}`} target="_blank">Google Maps</a>
    </div>}
  </>;
  const entitySeasonPicker = entity && <>
    <span className="displayFlex flexDirRow flexJustContentCenter">Seasons:</span>
    <div style={{
      height: '30vh', overflowY: 'auto',
      border: `solid ${isDarkMode ? 'white' : 'black'} 1px`, borderRadius: '10px',
      padding: '.5rem 2rem'
    }}>
      <div className="displayFlex flexDirCol">
        {entitySeasons.slice().reverse().map((season, i) =>
          <span key={season.season} style={{ justifyContent: 'space-between', display: 'flex' }}>
            <span style={{ width: '10%' }}>{season.season}</span>
            <span className="displayFlex flexDirRow flexJustContentCenter" style={{ width: '40%' }}>
              <button className={!resultsYear && i == 0 ? styles.activeResultsYear : (resultsYear === season.season ? styles.activeResultsYear : '')}
                onClick={() => handleChangeResultsYear(season.season)}>
                {!resultsYear && i == 0 ? 'Showing' : (resultsYear === season.season ? 'Showing' : 'Results')}
              </button>
            </span>
            <Link className="displayFlex flexDirRow flexJustContentCenter" style={{ width: '25%' }} to={`/${season.season}`}>
              <span className="material-icons-align small-font">
                Schedule
                <span className="material-icons">
                  logout
                </span>
              </span>
            </Link>
            <Link className="displayFlex flexDirRow flexJustContentCenter" style={{ width: '25%' }} to={`/${season.season}/standings`}>
              <span className="material-icons-align small-font">
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
  </>;
  const entityResultsAndQualiContent = (useWhichResults: WhichResults) => entityResults && entityQualifying ?
    <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: '100%' }}>
      <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: '90%' }}>
        <div className="displayFlex flexDirRow" style={{ justifyContent: 'space-between', width: '100%' }}>
          {entityResults.length && (!useWhichResults || useWhichResults === 'results') ?
            <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: !useWhichResults ? '50%' : '100%' }}>
              <div className="x-large-font">
                {entityResults[0].season} Results:
              </div>
              <SortableTableHeader
                template={isCircuitProfile ? circuitResultsTemplate : ['Fastest Lap', 'Finishing Status', 'Laps', 'Points', 'Position', 'Driver']}
                prescribeWidths={isCircuitProfile ? circuitResultsWidths : {
                  'Fastest Lap': '20%',
                  'Finishing Status': '20%',
                  'Laps': '10%',
                  'Points': '10%',
                  'Position': '10%',
                  'Driver': '30%'
                }}
              />
            </div>
            : <></>
          }
          {entityQualifying.length && (!useWhichResults || useWhichResults === 'qualifying') ?
            <div className="displayFlex flexDirCol flexAlignItemsCenter" style={{ width: !useWhichResults ? '50%' : '100%' }}>
              <div className="x-large-font">
                {entityQualifying[0].season} Qualifying:
              </div>
              <SortableTableHeader
                template={isCircuitProfile ? circuitQualifyingTemplate : [`${isConstructorProfile ? 'Driver' : 'Constructor'}`, 'Position', 'Q3', 'Q2', 'Q1']}
                prescribeWidths={isCircuitProfile ? circuitQualifyingWidths : {
                  [`${isConstructorProfile ? 'Driver' : 'Constructor'}`]: '30%',
                  'Position': '10%',
                  'Q1': '20%',
                  'Q2': '20%',
                  'Q3': '20%'
                }}
              />
            </div>
            : <></>
          }
        </div>
        <div style={{
          overflowY: 'auto',
          height: '65vh',
          width: '100%',
          border: `solid ${isDarkMode ? 'white' : 'black'} 1px`,
          borderRadius: '10px',
          padding: '1rem'
        }}>
          {(entityResults.length >= entityQualifying.length ? entityResults : entityQualifying).map((_, i) => {
            return (
              <div key={`${_.raceName + i}`} style={{ width: '100%', marginBottom: '1rem' }}>
                <div style={{ width: '100%' }}>
                  <Link to={`/${(entityResults[i] || entityQualifying[i]).season}/${(entityResults[i] || entityQualifying[i]).round}`}>
                    <span className={`x-large-font displayFlex flexDirRow`} style={{ justifyContent: 'space-between' }}>
                      <span className="material-icons-align">
                        {i + 1}. {(entityResults[i] || entityQualifying[i]).raceName}
                        <img style={{ width: '10%', marginLeft: '1rem' }} src={FlagHelper.getFlag((entityResults[i] || entityQualifying[i]).Circuit.Location.country)} alt={`${(entityResults[i] || entityQualifying[i]).Circuit.Location.country} flag`} />
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
                  {(!useWhichResults || useWhichResults === 'results') && <div style={{ width: !useWhichResults ? '50%' : '100%', borderRight: !useWhichResults ? `dotted 3px ${isDarkMode ? 'white' : 'black'}` : '' }}>
                    <RaceResults
                      noTableHeader
                      noClass
                      captionForTable={<></>}
                      templateParam={isCircuitProfile ? circuitResultsTemplate : ['Fastest Lap', 'Finishing Status', 'Laps', 'Points', 'Position', 'Driver']}
                      inputRace={entityResults[i]}
                      prescribeWidths={isCircuitProfile ? circuitResultsWidths : {
                        'Fastest Lap': '20%',
                        'Finishing Status': '20%',
                        'Laps': '10%',
                        'Points': '10%',
                        'Position': '10%',
                        'Driver': '30%'
                      }}
                    />
                  </div>}
                  {(!useWhichResults || useWhichResults === 'qualifying') && <div style={{ width: !useWhichResults ? '50%' : '100%' }}>
                    <RaceQualifying
                      noTableHeader
                      noClass
                      captionForTable={<></>}
                      templateParam={isCircuitProfile ? circuitQualifyingTemplate : [`${isConstructorProfile ? 'Driver' : 'Constructor'}`, 'Position', 'Q3', 'Q2', 'Q1']}
                      inputRace={entityQualifying[i]}
                      prescribeWidths={isCircuitProfile ? circuitQualifyingWidths : {
                        [`${isConstructorProfile ? 'Driver' : 'Constructor'}`]: '30%',
                        'Position': '10%',
                        'Q1': '20%',
                        'Q2': '20%',
                        'Q3': '20%'
                      }}
                    />
                  </div>}
                </div>
              </div>
            );
          })}
          <div className="displayFlex flexDirRow" style={{ justifyContent: 'space-between' }}>
            {!entityResults.length ? <div style={{ width: !useWhichResults ? '50%' : '100%' }}>Looks like this circuit will have results in {resultsYear || entitySeasons[entitySeasons.length - 1].season}, but the race is upcoming.</div> : <></>}
            {!entityResults.length ? <div style={{ width: !useWhichResults ? '50%' : '100%' }}>Looks like this circuit will have qualifying results in {resultsYear || entitySeasons[entitySeasons.length - 1].season}, but the race is upcoming.</div> : <></>}
          </div>
        </div>
      </div>
    </div>
    : <LoadingSpinner />;

  const entityBodyContent = <>{entity &&
    <div>
      <div className="displayFlex flexDirRow flexAlignItemsCenter" style={{ justifyContent: 'space-evenly', marginBottom: '1rem' }}>
        {entityBasicDetails}
        <div style={{ width: '35%' }}>
          {entitySeasonPicker}
        </div>
      </div>
      {entityResultsAndQualiContent('')}
    </div>
  }</>;
  const narrowEntityBodyContent = entity && <>
    <div className="displayFlex flexDirRow flexAlignItemsCenter" style={{ justifyContent: 'space-evenly', marginBottom: '1rem' }}>
      {entityBasicDetails}
    </div>
    <div style={{ width: '100%' }}>
      {entitySeasonPicker}
    </div>
    <span style={{ marginTop: '1rem' }} className="displayFlex flexJustContentCenter">
      <button onClick={() => useWhichResults === 'results' ? setUseWhichResults('qualifying') : setUseWhichResults('results')}>
        {useWhichResults === 'results' ?
          <span className="material-icons-align">
            Show Qualifying Results
            <span className="material-icons">
              timer
            </span>
          </span> 
          :
          <span className="material-icons-align">
            Show Results
            <span className="material-icons">
              sports_score
            </span>
          </span>}
      </button>
    </span>
    <div>
      {entityResultsAndQualiContent(useWhichResults)}
    </div>
  </>;
  return (
    <div className={`page-content ${isDarkMode ? 'dark' : 'light'}`}>
      {windowWidth < windowWidthThreshold ? narrowEntityBodyContent : entityBodyContent}
    </div>
  );
};
