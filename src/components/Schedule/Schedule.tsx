import React, { useState, useEffect } from "react";
import "./Schedule.css";

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
  const [races, setRaces] = useState<ErgastRace[]>(ErgastAPI.getSchedule(scheduleYear));

  const changeScheduleYear = (year: string) => {
    setScheduleYear(year);
    navigate(`/${year}`);
  }

  useEffect(() => {
    setRaces(ErgastAPI.getSchedule(scheduleYear));
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