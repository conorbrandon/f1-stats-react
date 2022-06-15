import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { RaceHeader } from "../RaceHeader/RaceHeader";
import styles from "./Race.module.css";
import { fetchResult } from "../../app/result/resultSlice";
import { fetchQualifying } from "../../app/qualifying/qualifyingSlice";
import { fetchDrivers } from "../../app/drivers/driversSlice";
import { fetchLaps } from "../../app/laps/lapsSlice";
import { fetchSchedule } from "../../app/schedule/scheduleSlice";
import { store } from "../../app/store";

export const initializeRace = (year: string, round: string) => {
  store.dispatch(fetchResult({year, round}));
  store.dispatch(fetchQualifying({year, round}));
  store.dispatch(fetchDrivers(year));
  store.dispatch(fetchLaps({year, round}));
  store.dispatch(fetchSchedule(year));
};

export const Race = ({ }) => {
  const { year, round } = useParams();

  useEffect(() => {
    initializeRace(year || '', round || '');
  }, []);

  return (
    <>
      <RaceHeader />
      <Outlet />
    </>
  );
};
