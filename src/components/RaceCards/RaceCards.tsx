import React from "react";
import styles from "./RaceCards.module.css";

import { Link } from "react-router-dom";
import { ScheduleDisplayProps } from "../Schedule/Schedule";
import { FlagHelper } from "../../helpers/FlagHelper";
import { Mapbox } from "../Mapbox/Mapbox";
import { motion } from "framer-motion";

export const RaceCards: React.FC<ScheduleDisplayProps> = ({ races }) => {
  return (
    <>
      <div className={styles.centered}>
        <Mapbox races={races} mapType="horizontal" />
        <div className={styles.raceCardLayout}>
          {races.map(race => {
            return (
              <motion.div whileHover={{ scale: 1.05 }} className={`${styles.raceCard} cursor-pointer`}>
                <Link to={`/${race.season}/${race.round}`} className="no-underline">
                  <span className="x-large-font" style={{ paddingRight: '10%' }}>{race.raceName}</span><br></br>
                  <span className="large-font">{race.Circuit.circuitName}</span>
                  <div>
                    <span>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</span><br></br>
                    <span>{new Date(race.date).toLocaleDateString()}</span>
                    <img src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} className="race-card-flag card" />
                  </div>
                  <div className={styles.raceCardRoundCounter}>{race.round}</div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};
