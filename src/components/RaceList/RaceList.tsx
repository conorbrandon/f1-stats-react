import React, { useState } from "react";
import styles from "./RaceList.module.css";

import { Link } from "react-router-dom";
import { ScheduleDisplayProps } from "../Schedule/Schedule";
import { FlagHelper } from "../../helpers/FlagHelper";
import { Mapbox } from "../Mapbox/Mapbox";

export const RaceList: React.FC<ScheduleDisplayProps> = ({ races }) => {
  const [activePopup, setActivePopup] = useState<number | undefined>();

  return (
    <div className={styles.raceListLayout}>
      <div>
        <ol>
        {races.map((race, i) => {
          return (
            <Link key={i} to={`/result/${race.season}/${race.round}`} className="no-underline">
              <li className="cursor-pointer" onMouseEnter={() => setActivePopup(i)} onMouseLeave={() => setActivePopup(undefined)}>
                <span className="x-large-font">{race.raceName}
                  <img className="race-card-flag list" src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={race.Circuit.Location.country} /> 
                </span><br />
                <span className="large-font">
                  {race.Circuit.circuitName}
                </span><br />
              </li>
            </Link>
          );
        })}
        </ol>
      </div>
      <div><Mapbox races={races} activePopup={activePopup} mapType="vertical" /></div>
    </div>
  );
};
