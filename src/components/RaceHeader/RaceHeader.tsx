import React from "react";
import { Link } from "react-router-dom";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastRace } from "../../model/ErgastRace";
import styles from "./RaceHeader.module.css";

interface RaceHeaderProps {
  race?: ErgastRace
}

export const RaceHeader: React.FC<RaceHeaderProps> = ({ race }) => {
  return (
    <div className="page-header">
      <span className={`material-icons-align ${styles.spaceEvenly}`}>
        {race && <><span className="x-large-font">{race.season} {race.raceName}</span>
        <img className={styles.img} src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
        <span className="medium-font">(Round {race.round})</span>
        </>}
      </span>
      <span className={styles.links}>
        <Link to="">Summary</Link>
        <Link to="results">Results</Link>
        <Link to="qualifying">Qualifying</Link>
        <Link to="laptimes">Lap/Position Trace</Link>
      </span>
    </div>
  );
};
