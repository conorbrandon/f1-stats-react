import React, { useState } from "react";
import { ErgastRace } from "../../model/ErgastRace";
import { CollapsibleMapbox } from "./CollapsibleMapbox/CollapsibleMapbox";
import styles from "./RaceSummaryCard.module.css";
import { RaceTimesContainer } from "./RaceTimesContainer/RaceTimesContainer";
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { FlagHelper } from "../../helpers/FlagHelper";
import { RaceResults } from "../RaceResults/RaceResults";

interface RaceSummaryCardProps {
  race: ErgastRace,
  horizontalLayout?: boolean,
  timeZone: string,
  useBuiltInHeader?: boolean,
  isUpcomingRace?: boolean,
  useBuiltInResults?: boolean
}

export const RaceSummaryCard: React.FC<RaceSummaryCardProps> = ({ race, horizontalLayout, timeZone, useBuiltInHeader, isUpcomingRace, useBuiltInResults }) => {
  const [useMyTime, setUseMyTime] = useState(true);
  const handleUseMyTimeChange = (checked: boolean) => {
    setUseMyTime(checked);
  };
  return (
    <div className={horizontalLayout ? styles.horizontalLayout : ''}>
      {/* built-in header */}
      {useBuiltInHeader && <span className="material-icons-align">
        <Link className="material-icons-align" to={`/${race.season}/${race.round}`}>
          <span className="large-font">{race.season} {race.raceName} (Round {race.round})</span>
          <img className={styles.dashboardImg} src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
        </Link>
      </span>}
      <div style={{ width: horizontalLayout ? '30%' : '' }}>
        {/* isUpcomingRace */}
        {isUpcomingRace && <div style={{ fontSize: '0.8rem', marginTop: '1rem', marginBottom: '1rem', border: 'solid 3px green', borderRadius: '10px', padding: '0.5rem' }}>
          The race is coming up! Check back afterwards for results and detailed analysis.
        </div>}
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
        <div style={{ marginTop: '1rem' }}></div>
        {useBuiltInResults && <div><RaceResults noClass inputRace={race} limit={5} templateParam={['Position', 'Driver', 'Points']} /></div>}
        <span className="material-icons-align displayFlex flexRow flexJustContentCenter small-font">
          Use track time
          <Switch checked={useMyTime}
            onChange={handleUseMyTimeChange}
            uncheckedIcon={false} checkedIcon={false} height={15} width={30} />
          Use my time
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 2 }}>
          <RaceTimesContainer useMyTime={useMyTime} sessionText="GrandPrix" date={race.date} time={race.time} timeZone={timeZone} open />
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
              .map(timeObject => timeObject ?
                <RaceTimesContainer open={horizontalLayout || false} useMyTime={useMyTime} key={timeObject.session} sessionText={timeObject.session} date={timeObject.date} time={timeObject.time} timeZone={timeZone} />
                : <></>
              )
          }
        </div>
      </div>
      {/* start of next column in horizontal content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 2 }}>
        <CollapsibleMapbox race={race} />
        <span><a href={`https://www.google.com/maps/place/${race.Circuit.Location.lat},${race.Circuit.Location.long}`} target="_blank" rel="noopener noreferrer">Google Maps</a></span>
        {!horizontalLayout && <span><a href={race.url} target="_blank" rel="noopener">{race.season} {race.raceName} Wikipedia</a></span>}
        <span><a href={race.Circuit.url} target="_blank" rel="noopener">{race.Circuit.circuitName} Wikipedia</a></span>
      </div>
    </div>
  );
};
