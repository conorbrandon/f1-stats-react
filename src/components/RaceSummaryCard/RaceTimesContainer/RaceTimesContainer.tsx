import React, { useState } from "react";
import styles from "./RaceTimesContainer.module.css";
import Collapsible from 'react-collapsible';
import { motion } from 'framer-motion';

interface RaceTimesContainerProps {
  sessionText: string,
  date: string,
  time: string,
  timeZone?: string,
  open?: boolean
}

export const RaceTimesContainer: React.FC<RaceTimesContainerProps> = ({ sessionText, date, time, timeZone, open }) => {
  const [myIsOpen, setMyIsOpen] = useState(open);
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={`${styles.timesContainer}`}>
      <Collapsible
        triggerClassName={styles.trigger} triggerOpenedClassName={`${styles.trigger} ${styles.opened}`}
        trigger={<>
          <span className={`material-icons-align ${styles.header}`}>
            <span className="material-icons">schedule</span>
            {(sessionText.match(/[A-Z][a-z]+/g) || []).join(" ")}
          <span style={{ float: 'right' }} className="material-icons">{!myIsOpen ? 'expand_more': 'expand_less'}</span>
          </span>
        </>}
        open={myIsOpen}
        transitionTime={200} handleTriggerClick={() => { console.log({ myIsOpen }); setMyIsOpen(!myIsOpen); }}
      >
        <table style={{ width: '100%' }} onClick={() => { console.log({ myIsOpen }); setMyIsOpen(!myIsOpen); }}>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>My time</td>
              <td>{new Date(date + 'T' + time).toLocaleString()}</td>
            </tr>
            {timeZone && <tr>
              <td style={{ width: '30%' }}>Track time:</td>
              <td> {new Date(date + 'T' + time).toLocaleString([], { timeZone })}</td>
            </tr>}
          </tbody>
        </table>
      </Collapsible>
    </motion.div>
  );
};
