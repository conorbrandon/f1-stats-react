import React, { useState, useEffect } from "react";
import styles from "./Schedule.module.css";

import { ErgastRace } from "../../model/ErgastRace";
import { useParams, useNavigate } from "react-router-dom";
import { RaceCards } from "../RaceCards/RaceCards";
import { ScheduleHeader } from "../ScheduleHeader/ScheduleHeader";
import { RaceList } from "../RaceList/RaceList";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectSchedule, selectScheduleStatus, selectScheduleError, fetchSchedule } from "../../app/schedule/scheduleSlice";
import { loading, notLoading } from "../../app/loading/loadingSlice";

export interface ScheduleDisplayProps {
  races: ErgastRace[]
}

export const Schedule = ({ }) => {
  const navigate = useNavigate();
  const { year } = useParams();
  const [scheduleYear, setScheduleYear] = useState<string>(year || 'current');
  const [useCardLayout, setUseCardLayout] = useState<boolean>(false);

  const [pageContent, setPageContent] = useState(<></>);
  const dispatch = useAppDispatch();
  const schedule = useAppSelector(selectSchedule);
  const scheduleStatus = useAppSelector(selectScheduleStatus);
  const scheduleError = useAppSelector(selectScheduleError);

  useEffect(() => {
    if (scheduleStatus === 'idle') {
      dispatch(fetchSchedule(scheduleYear));
    } else if (scheduleStatus === 'loading') {
      dispatch(loading());
      setPageContent(<></>);
    } else {
      dispatch(notLoading());
      if (scheduleStatus === 'succeeded') {
        setPageContent(useCardLayout ? <RaceCards races={schedule} /> : <RaceList races={schedule} />);
      } else if (scheduleStatus === 'failed') {
        setPageContent(<div>{scheduleError}</div>);
      }
    }
  }, [scheduleStatus, dispatch]);

  const changeScheduleYear = (year: string) => {
    setScheduleYear(year);
    navigate(`/${year}`);
    dispatch(fetchSchedule(year));
  }

  return (
    <>
      <ScheduleHeader scheduleYear={scheduleYear} changeScheduleYear={changeScheduleYear} setUseCardLayout={setUseCardLayout} />
      <div className="page-content">
        {pageContent}
      </div>
    </>
  );
};