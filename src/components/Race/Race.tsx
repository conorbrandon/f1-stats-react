import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { RaceHeader } from "../RaceHeader/RaceHeader";
import styles from "./Race.module.css";
import { useAppDispatch } from "../../app/hooks";
import { fetchResult } from "../../app/result/resultSlice";
import { fetchQualifying } from "../../app/qualifying/qualifyingSlice";
import { fetchDrivers } from "../../app/drivers/driversSlice";
import { fetchLaps } from "../../app/laps/lapsSlice";

export const Race = ({ }) => {
  const { year, round } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResult({ year: year || '', round: round || '' }));
    dispatch(fetchQualifying({ year: year || '', round: round || '' }));
    dispatch(fetchDrivers(year || ''));
    dispatch(fetchLaps({ year: year || '', round: round || '' }));
  }, []);

  return (
    <>
      <RaceHeader />
      <Outlet />
    </>
  );
};
