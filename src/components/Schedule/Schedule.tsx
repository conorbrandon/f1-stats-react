import React, { useState, useEffect } from "react";
import styles from "./Schedule.module.css";

import { ErgastRace } from "../../model/ErgastRace";
import { useParams, useNavigate } from "react-router-dom";
import { RaceCards } from "../RaceCards/RaceCards";
import { ScheduleHeader } from "../ScheduleHeader/ScheduleHeader";
import { RaceList } from "../RaceList/RaceList";
import { ErgastAPI } from "../../api/ErgastAPI";

export interface ScheduleDisplayProps {
  races: ErgastRace[]
}

export const Schedule = ({  }) => {
  const navigate = useNavigate();
  const { year } = useParams();
  const [scheduleYear, setScheduleYear] = useState<string>(year || 'current');
  const [useCardLayout, setUseCardLayout] = useState<boolean>(false);
  const [races, setRaces] = useState<ErgastRace[]>([]);

  const changeScheduleYear = (year: string) => {
    setScheduleYear(year);
    navigate(`/${year}`);
  }

  useEffect(() => {
    ErgastAPI.getSchedule(scheduleYear)
      .then(response => setRaces(response))
      .catch(error => console.log("can't fetch races", error));
  }, [scheduleYear]);

  return (
    <>
      <ScheduleHeader scheduleYear={scheduleYear} changeScheduleYear={changeScheduleYear} setUseCardLayout={setUseCardLayout} />
      <div className="page-content">
        {useCardLayout ? <RaceCards races={races} /> : <RaceList races={races} />}
      </div>
    </>
  );
};