import React from "react";
import styles from "./RaceCards.module.css";

import { Link } from "react-router-dom";
import { ScheduleDisplayProps } from "../Schedule/Schedule";
import { FlagHelper } from "../../helpers/FlagHelper";
import { Mapbox } from "../Mapbox/Mapbox";

export const RaceCards: React.FC<ScheduleDisplayProps> = ({ races }) => {
  return (
    <>
      <Mapbox races={races} mapType="horizontal" />
      <div className={styles.raceCardLayout}>
        {races.map(race => {
          return (
            <div className={`${styles.raceCard} cursor-pointer`}>
              <Link to={`/${race.season}/${race.round}`} className="no-underline">
                <span>
                  <h3>{race.raceName}</h3>
                </span>
                <h4>{race.Circuit.circuitName}</h4>
                <div className={styles.row}>
                  <p className={styles.label}>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
                  <img src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} className="race-card-flag card" />
                </div>
                <div className={styles.raceCardRoundCounter}>{race.round}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
