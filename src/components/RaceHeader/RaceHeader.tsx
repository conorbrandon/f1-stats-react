import React from "react";
import { Link } from "react-router-dom";
import { FlagHelper } from "../../helpers/FlagHelper";
import { ErgastRace } from "../../model/ErgastRace";
import "./RaceHeader.css";

interface RaceHeaderProps {
  race?: ErgastRace
}

export const RaceHeader: React.FC<RaceHeaderProps> = ({ race }) => {
  return (
    <div className="page-header">
      <span>
        {race && <><span className="x-large-font">{race.season} {race.raceName} </span>
        <span className="medium-font">(Round {race.round})</span>
        <img src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} />
        </>}
      </span>
      <span className="links">
        <Link to="">Summary</Link>
        <Link to="results">Results</Link>
        <Link to="qualifying">Qualifying</Link>
      </span>
    </div>
  );
};
