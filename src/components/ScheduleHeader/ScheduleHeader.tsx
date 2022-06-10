import React from "react";
import "./ScheduleHeader.css";

interface ScheduleHeaderProps {
  scheduleYear: string,
  changeScheduleYear: (year: string) => void,
  setUseCardLayout: React.Dispatch<React.SetStateAction<boolean>>
}

export const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ scheduleYear, changeScheduleYear, setUseCardLayout }) => {
  const years: string[] = Array.from({ length: new Date().getUTCFullYear() + 1 - 1950 }, (_, i) => i + 1950 + '').reverse();
  return (
    <div className="page-header rounds-header">
      {scheduleYear} Schedule:
      <span className="layout-select">
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