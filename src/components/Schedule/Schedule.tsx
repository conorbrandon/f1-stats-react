import React, { useState } from "react";
import styles from "./Schedule.module.css";

import { ErgastRace } from "../../model/ErgastRace";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { RaceCards } from "../RaceCards/RaceCards";
import { ScheduleHeader } from "../ScheduleHeader/ScheduleHeader";
import { RaceList } from "../RaceList/RaceList";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectSchedule, selectScheduleStatus, selectScheduleError, fetchSchedule } from "../../app/schedule/scheduleSlice";
import { UseReduxAsyncStatus } from '../UseReduxAsyncStatuses/UseReduxAsyncStatuses';
import { AppOutletContext } from "../../App";

export interface ScheduleDisplayProps {
  races: ErgastRace[],
  isDarkMode: boolean
}

export const Schedule = ({ }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const navigate = useNavigate();
  const { year } = useParams();
  const dispatch = useAppDispatch();
  const schedule = useAppSelector(selectSchedule);
  const scheduleStatus = useAppSelector(selectScheduleStatus);
  const scheduleError = useAppSelector(selectScheduleError);

  const [scheduleYear, setScheduleYear] = useState<string>(year || new Date().getUTCFullYear() + '' || schedule[0].season);
  const [useCardLayout, setUseCardLayout] = useState<boolean>(false);

  const changeScheduleYear = (year: string) => {
    setScheduleYear(year);
    navigate(`/${year}`);
    dispatch(fetchSchedule(year));
  }

  return (
    <>
      <ScheduleHeader schedule={schedule} scheduleYear={scheduleYear} changeScheduleYear={changeScheduleYear} setUseCardLayout={setUseCardLayout} useCardLayout={useCardLayout} />
      <div className={`page-content ${isDarkMode ? 'dark' : 'light'}`}>
        <UseReduxAsyncStatus status={scheduleStatus} successContent={useCardLayout ? <RaceCards isDarkMode={isDarkMode} races={schedule} /> : <RaceList isDarkMode={isDarkMode} races={schedule} />} error={scheduleError} fetchAction={fetchSchedule} fetchParams={scheduleYear} />
      </div>
    </>
  );
};