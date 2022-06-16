import React, { useState } from "react";
import styles from "./Schedule.module.css";

import { ErgastRace } from "../../model/ErgastRace";
import { useParams, useNavigate } from "react-router-dom";
import { RaceCards } from "../RaceCards/RaceCards";
import { ScheduleHeader } from "../ScheduleHeader/ScheduleHeader";
import { RaceList } from "../RaceList/RaceList";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectSchedule, selectScheduleStatus, selectScheduleError, fetchSchedule } from "../../app/schedule/scheduleSlice";
import { UseReduxAsyncStatus } from '../UseReduxAsyncStatuses/UseReduxAsyncStatuses';

export interface ScheduleDisplayProps {
  races: ErgastRace[]
}

export const Schedule = ({ }) => {
  const navigate = useNavigate();
  const { year } = useParams();
  const dispatch = useAppDispatch();
  const schedule = useAppSelector(selectSchedule);
  const scheduleStatus = useAppSelector(selectScheduleStatus);
  const scheduleError = useAppSelector(selectScheduleError);

  const [scheduleYear, setScheduleYear] = useState<string>(year || schedule[0].season || new Date().getUTCFullYear() + '');
  const [useCardLayout, setUseCardLayout] = useState<boolean>(false);

  const changeScheduleYear = (year: string) => {
    setScheduleYear(year);
    navigate(`/${year}`);
    dispatch(fetchSchedule(year));
  }

  return (
    <>
      <ScheduleHeader scheduleYear={scheduleYear} changeScheduleYear={changeScheduleYear} setUseCardLayout={setUseCardLayout} />
      <div className="page-content">
        <UseReduxAsyncStatus status={scheduleStatus} successContent={useCardLayout ? <RaceCards races={schedule} /> : <RaceList races={schedule} />} error={scheduleError} fetchAction={fetchSchedule} fetchParams={scheduleYear} />
      </div>
    </>
  );
};