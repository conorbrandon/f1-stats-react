import React, { useEffect, useRef, useState } from "react";
import styles from "./RaceList.module.css";

import { Link } from "react-router-dom";
import { ScheduleDisplayProps } from "../Schedule/Schedule";
import { FlagHelper } from "../../helpers/FlagHelper";
import { Mapbox } from "../Mapbox/Mapbox";

import { motion } from "framer-motion";

export const RaceList: React.FC<ScheduleDisplayProps> = ({ races, isDarkMode }) => {
  const [activePopup, setActivePopup] = useState<number | undefined>();
  const nextRaceRef = useRef<(HTMLAnchorElement | null)[]>([]);
  useEffect(() => {
    if (nextRaceRef.current.length === races.length) {
      for (let i = 0; i < races.length; i++) {
        const race = races[i];
        const thisRef = nextRaceRef.current[i];
        if (thisRef && new Date(race.date).getTime() > new Date().getTime()) {
          thisRef.scrollIntoView({ block: 'center' });
          break;
        } else if (thisRef) {
          thisRef.style.color = 'gray';
        }
      }
    }
  }, [nextRaceRef]);

  return (
    <div className={`${styles.raceListLayout} ${isDarkMode ? styles.raceListLayoutdark : styles.raceListLayoutlight}`}>
      <div>
        <ol>
          {races.map((race, i) => {
            return (
              <Link ref={(ref) => {
                nextRaceRef.current[i] = ref;
              }} key={i} to={`/${race.season}/${race.round}`} className="no-underline">
                <motion.li whileHover={{ scale: 1.05 }} className="cursor-pointer" onMouseEnter={() => setActivePopup(i)} onMouseLeave={() => setActivePopup(undefined)}>
                  <span className="x-large-font">{race.raceName}
                    <img className="race-card-flag list" src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={race.Circuit.Location.country} />
                  </span><br />
                  <span className="medium-font">
                    {race.Circuit.Location.locality}, {race.Circuit.Location.country} at {race.Circuit.circuitName}
                  </span><br />
                  <span>{new Date(race.date).toLocaleDateString()}</span>
                </motion.li>
              </Link>
            );
          })}
        </ol>
      </div>
      <div><Mapbox races={races} activePopup={activePopup} mapType="vertical" /></div>
    </div>
  );
};
