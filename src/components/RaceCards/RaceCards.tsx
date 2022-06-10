import React from "react";
import "./RaceCards.css";

import { Link } from "react-router-dom";
import { ScheduleDisplayProps } from "../Schedule/Schedule";
import { FlagHelper } from "../../helpers/FlagHelper";
import { Mapbox } from "../Mapbox/Mapbox";

export const RaceCards: React.FC<ScheduleDisplayProps> = ({ races }) => {
  return (
    <>
      <Mapbox races={races} mapType="horizontal" />
      <div className="race-card-layout">
        {races.map(race => {
          return (
            <div className="race-card cursor-pointer">
              <Link to={`result/${race.season}/${race.round}`} className="no-underline">
                <span>
                  <h3>{race.raceName}</h3>
                </span>
                <h4>{race.Circuit.circuitName}</h4>
                <div className="row">
                  <p className="label">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
                  <img src={FlagHelper.getFlag(race.Circuit.Location.country)} alt={`${race.Circuit.Location.country} flag`} className="race-card-flag card" />
                </div>
                <div className="race-card-round-counter">{race.round}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
