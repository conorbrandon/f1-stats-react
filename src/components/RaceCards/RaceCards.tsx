import React, { useEffect, useRef } from "react";
import styles from "./RaceCards.module.css";

import { Link, useOutletContext } from "react-router-dom";
import { ScheduleDisplayProps } from "../Schedule/Schedule";
import { FlagHelper } from "../../helpers/FlagHelper";
import { Mapbox } from "../Mapbox/Mapbox";
import { motion } from "framer-motion";
import { AppOutletContext } from "../../App";

export const RaceCards: React.FC<ScheduleDisplayProps> = ({ races, isDarkMode }) => {
  const { windowWidth, windowWidthThreshold } = useOutletContext<AppOutletContext>();
  const nextRaceRef = useRef<(HTMLAnchorElement | null)[]>([]);
  useEffect(() => {
    if (nextRaceRef.current.length === races.length) {
      for (let i = 0; i < races.length; i++) {
        const race = races[i];
        const thisRef = nextRaceRef.current[i];
        if (thisRef && new Date(race.date).getTime() > new Date().getTime()) {
          break;
        } else if (thisRef) {
          thisRef.style.color = 'gray';
        }
      }
    }
  }, [nextRaceRef]);
  return (
    <>
      <div className={styles.centered}>
        <Mapbox races={races} mapType="horizontal" />
        <div className={styles.raceCardLayout}>
          {races.map((race, i) => {
            return (
              <motion.div whileHover={{ scale: 1.05 }} className={`${styles.raceCard} ${windowWidth < windowWidthThreshold ? styles.raceCardNarrow : ''} ${isDarkMode ? styles.raceCarddark : styles.raceCardlight} cursor-pointer`}>
                <Link ref={(ref) => {
                  nextRaceRef.current[i] = ref;
                }} to={`/${race.season}/${race.round}`} className="no-underline">
                  <span className="x-large-font" style={{ paddingRight: '10%' }}>{race.raceName}</span><br></br>
                  <span className="large-font">{race.Circuit.circuitName}</span>
                  <div>
                    <span>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</span><br></br>
                    <span>{new Date(race.date).toLocaleDateString()}</span>
                    <img src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} className="race-card-flag card" />
                  </div>
                  <div className={`${styles.raceCardRoundCounter} ${isDarkMode ? styles.raceCardRoundCounterdark : styles.raceCardRoundCounterlight}`}>{race.round}</div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};
