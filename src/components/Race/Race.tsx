import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ErgastAPI } from "../../api/ErgastAPI";
import { ErgastRace } from "../../model/ErgastRace";
import { RaceHeader } from "../RaceHeader/RaceHeader";
import styles from "./Race.module.css";

export interface RaceOutletContext {
  race?: ErgastRace,
  year: string,
  round: string
}

export const Race = ({ }) => {
  const { year, round } = useParams();
  const [race, setRace] = useState<ErgastRace>();

  useEffect(() => {
    ErgastAPI.getRaceResult(year || '', round || '')
      .then(response => setRace(response))
      .catch(error => console.log("couldn't fetch race result", error));
  }, [race]);

  return (
    <>
      <RaceHeader race={race} />
      <Outlet context={{race, year, round}} />
    </>
  );
};
