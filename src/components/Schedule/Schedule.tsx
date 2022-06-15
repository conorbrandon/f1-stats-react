import React, { useState, useEffect } from "react";
import styles from "./Schedule.module.css";

import { ErgastRace } from "../../model/ErgastRace";
import { useParams, useNavigate } from "react-router-dom";
import { RaceCards } from "../RaceCards/RaceCards";
import { ScheduleHeader } from "../ScheduleHeader/ScheduleHeader";
import { RaceList } from "../RaceList/RaceList";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectSchedule, selectScheduleStatus, selectScheduleError, fetchSchedule } from "../../app/schedule/scheduleSlice";
import { UseReduxAsyncStatuses } from '../UseReduxAsyncStatuses/UseReduxAsyncStatuses';

export interface ScheduleDisplayProps {
  races: ErgastRace[]
}

export const Schedule = ({ }) => {
  const navigate = useNavigate();
  const { year } = useParams();
  const [scheduleYear, setScheduleYear] = useState<string>(year || 'current');
  const [useCardLayout, setUseCardLayout] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const schedule = useAppSelector(selectSchedule);
  const scheduleStatus = useAppSelector(selectScheduleStatus);
  const scheduleError = useAppSelector(selectScheduleError);


  const changeScheduleYear = (year: string) => {
    setScheduleYear(year);
    navigate(`/${year}`);
    dispatch(fetchSchedule(year));
  }

  return (
    <>
      <ScheduleHeader scheduleYear={scheduleYear} changeScheduleYear={changeScheduleYear} setUseCardLayout={setUseCardLayout} />
      <div className="page-content">
        <UseReduxAsyncStatuses status={scheduleStatus} successContent={useCardLayout ? <RaceCards races={schedule} /> : <RaceList races={schedule} />} error={scheduleError} fetchAction={fetchSchedule} fetchParams={scheduleYear} />
      </div>
    </>
  );
};