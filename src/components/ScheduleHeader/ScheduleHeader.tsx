import React from "react";
import { useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";
import { ErgastRace } from "../../model/ErgastRace";
import styles from "./ScheduleHeader.module.css";

interface ScheduleHeaderProps {
  scheduleYear: string,
  changeScheduleYear: (year: string) => void,
  useCardLayout: boolean,
  setUseCardLayout: React.Dispatch<React.SetStateAction<boolean>>,
  schedule?: ErgastRace[]
}

export const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ scheduleYear, changeScheduleYear, setUseCardLayout, schedule, useCardLayout }) => {
  const { isDarkMode, windowWidth, windowWidthThreshold } = useOutletContext<AppOutletContext>();
  const years: string[] = Array.from({ length: new Date().getUTCFullYear() + 1 - 1950 }, (_, i) => i + 1950 + '').reverse();
  return (
    <div className={`page-header ${isDarkMode ? 'dark' : 'light'} ${windowWidth > windowWidthThreshold ? styles.roundsHeader : styles.roundsHeaderNarrow}`}>
      {scheduleYear !== 'current' ? scheduleYear : (schedule && schedule.length ? schedule[0].season : '')} Schedule:
      <span className={styles.layoutSelect}>
        <span className={windowWidth < windowWidthThreshold ? "medium-font" : "x-large-font"}>Select year:</span>
        <select name="years" id="years" onChange={(event) => changeScheduleYear(event.target.value)} defaultValue={scheduleYear}>
          {years.map((year, i) => <option key={i} value={year}>{year}</option>)}
        </select>
        {useCardLayout && <button onClick={() => setUseCardLayout(false)}>
          <span className="material-icons">
            list
          </span>
        </button>}
        {!useCardLayout && <button onClick={() => {
          setUseCardLayout(true);
          window.scrollTo(0, 0);
        }}>
          <span className="material-icons">
            dashboard
          </span>
        </button>}
      </span>
    </div>
  );
};