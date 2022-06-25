import React from "react";
import Collapsible from "react-collapsible";
import { ErgastRace } from "../../model/ErgastRace";
import { Mapbox } from "../Mapbox/Mapbox";
import { CollapsibleMapbox } from "./CollapsibleMapbox/CollapsibleMapbox";
import styles from "./RaceSummaryCard.module.css";
import { RaceTimesContainer } from "./RaceTimesContainer/RaceTimesContainer";

interface RaceSummaryCardProps {
  race: ErgastRace
}

export const RaceSummaryCard: React.FC<RaceSummaryCardProps> = ({ race }) => {
  return (
    <>
      <div>
        <span className="material-icons-align">
          <span className="material-icons">
            sports_score
          </span>
          <a href={`https://www.google.com/maps/place/${race.Circuit.Location.lat},${race.Circuit.Location.long}`} target="_blank" rel="noopener">{race.Circuit.circuitName}</a>
        </span>
        <span className="material-icons-align">
          <span className="material-icons">
            place
          </span>{race.Circuit.Location.locality}, {race.Circuit.Location.country}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 2 }}>
        <RaceTimesContainer sessionText="GrandPrix" date={race.date} time={race.time} timeZone={race.Circuit.Location.timeZone} open />
        {
          ['FirstPractice', 'SecondPractice', 'ThirdPractice', 'Sprint', 'Qualifying']
            .map((session: string) => {
              return (race as any)[session] ? {
                session: session,
                time: (race as any)[session].time,
                date: (race as any)[session].date
              } : undefined;
            })
            .filter(timeObject => timeObject && timeObject.session)
            .sort((a: any, b: any) => new Date(b.date + 'T' + b.time).valueOf() - new Date(a.date + 'T' + a.time).valueOf())
            .map(timeObject => timeObject ?  <RaceTimesContainer key={timeObject.session} sessionText={timeObject.session} date={timeObject.date} time={timeObject.time} timeZone={race.Circuit.Location.timeZone} /> : <></>)
        }
        <div style={ {marginTop: '1rem'} }></div>
        <CollapsibleMapbox race={race} />
        <span><a href={`https://www.google.com/maps/place/${race.Circuit.Location.lat},${race.Circuit.Location.long}`} target="_blank" rel="noopener noreferrer">Google Maps</a></span>
        <span><a href={race.url} target="_blank" rel="noopener">{race.season} {race.raceName} Wikipedia</a></span>
        <span><a href={race.Circuit.url} target="_blank" rel="noopener">{race.Circuit.circuitName} Wikipedia</a></span>
      </div>
    </>
  );
};
