import React from "react";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastRace } from "../../model/ErgastRace";
import styles from "./TooltipRace.module.css";

interface TooltipRaceProps {
  race?: ErgastRace,
  previousRace: boolean,
  isDarkMode: boolean
};

export const TooltipRace: React.FC<TooltipRaceProps> = ({ race, previousRace, isDarkMode }) => {
  console.log({ race });
  return (
    <>
      {race && 
        <div className={`${styles.wrapper} ${isDarkMode ? styles.wrapperdark : styles.wrapperlight}`}>
          <div>{previousRace ? 'Previous round:' : 'Next round:'}</div>
          <div>
            <span>{race.season} {race.raceName}</span>
            <img className={styles.flag} src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
          </div>
        </div>
      }
    </>
  );
};