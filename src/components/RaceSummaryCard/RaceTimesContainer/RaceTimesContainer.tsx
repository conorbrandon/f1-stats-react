import React, { useEffect, useState } from "react";
import styles from "./RaceTimesContainer.module.css";
import Collapsible from 'react-collapsible';
import { motion } from 'framer-motion';

interface RaceTimesContainerProps {
  sessionText: string,
  date: string,
  time?: string,
  timeZone?: string,
  open?: boolean,
  useMyTime: boolean
}

export const RaceTimesContainer: React.FC<RaceTimesContainerProps> = ({ sessionText, date, time, timeZone, open, useMyTime }) => {
  const [myIsOpen, setMyIsOpen] = useState(open);
  useEffect(() => {
    setMyIsOpen(open);
  }, [open]);
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={`${styles.timesContainer}`}>
      <Collapsible
        triggerClassName={styles.trigger} triggerOpenedClassName={`${styles.trigger} ${styles.opened}`}
        trigger={<>
          <span className={`material-icons-align ${styles.header}`}>
            <span className="material-icons">schedule</span>
            {(sessionText.match(/[A-Z][a-z]+/g) || []).join(" ")}
            <span style={{ float: 'right' }} className="material-icons">{!myIsOpen ? 'expand_more' : 'expand_less'}</span>
          </span>
        </>}
        open={myIsOpen}
        transitionTime={200} handleTriggerClick={() => { setMyIsOpen(!myIsOpen); }}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }} onClick={() => { setMyIsOpen(!myIsOpen); }}>
          {useMyTime && <>
            <span style={{ width: '30%' }}>My time</span>
            {time ? <span>{new Date(date + 'T' + time).toLocaleString()}</span> : <span>{new Date(date).toLocaleDateString()}</span>}
          </>}
          {timeZone && !useMyTime && <>
            <span style={{ width: '30%' }}>Track time:</span>
            {time ? <span>{new Date(date + 'T' + time).toLocaleString([], { timeZone })}</span> : <span>{new Date(date).toLocaleDateString([], { timeZone })}</span>}
          </>}
        </div>
      </Collapsible>
    </motion.div>
  );
};
