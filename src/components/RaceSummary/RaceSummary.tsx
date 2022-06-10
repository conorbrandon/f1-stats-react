import React from "react";
import { useOutletContext } from "react-router-dom";
import { Mapbox } from "../Mapbox/Mapbox";
import { RaceOutletContext } from "../Race/Race";
import "./RaceSummary.css";

export const RaceSummary = ({ }) => {
  const { race }: RaceOutletContext = useOutletContext();
  return (
    <div className="page-content padded">
      {race && <><p>{race.Circuit.circuitName}</p>
      <p>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
      <p>{new Date(race.date).toLocaleDateString()}</p>
      <a href={race.url} target="_blank" rel="noopener">Wikipedia</a>
      <Mapbox races={[race]} mapType="square" /></>}
    </div>
  );
};
