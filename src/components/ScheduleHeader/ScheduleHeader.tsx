import React from "react";
import { ErgastRace } from "../../model/ErgastRace";
import styles from "./ScheduleHeader.module.css";

interface ScheduleHeaderProps {
  scheduleYear: string,
  changeScheduleYear: (year: string) => void,
  setUseCardLayout: React.Dispatch<React.SetStateAction<boolean>>,
  schedule?: ErgastRace[]
}

export const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ scheduleYear, changeScheduleYear, setUseCardLayout, schedule }) => {
  const years: string[] = Array.from({ length: new Date().getUTCFullYear() + 1 - 1950 }, (_, i) => i + 1950 + '').reverse();
  return (
    <div className={`page-header ${styles.roundsHeader}`}>
      {scheduleYear !== 'current' ? scheduleYear : (schedule && schedule.length ? schedule[0].season : '')} Schedule:
      <span className={styles.layoutSelect}>
        <span className="x-large-font">Select year:</span>
        <select name="years" id="years" onChange={(event) => changeScheduleYear(event.target.value)} defaultValue={scheduleYear}>
          {years.map((year, i) => <option key={i} value={year}>{year}</option>)}
        </select>
        <button onClick={() => setUseCardLayout(false)}>
          <span className="material-icons">
            list
          </span>
        </button>
        <button onClick={() => setUseCardLayout(true)}>
          <span className="material-icons">
            dashboard
          </span>
        </button>
      </span>
    </div>
  );
};