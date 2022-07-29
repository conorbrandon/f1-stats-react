import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { ErgastRace } from "../../../model/ErgastRace";
import { Mapbox } from "../../Mapbox/Mapbox";
import styles from "./CollapsibleMapbox.module.css";
import { motion } from 'framer-motion';
import { useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../../App";

export const CollapsibleMapbox: React.FC<{race: ErgastRace}> = ({ race }) => {
  const { isDarkMode, windowWidth, windowWidthThreshold } = useOutletContext<AppOutletContext>();
  const [lessThanWindowWidthThreshold, setLessThanWindowWidthThreshold] = useState(false);
  useEffect(() => setLessThanWindowWidthThreshold(windowWidth < windowWidthThreshold), [windowWidth]);
  const [myIsOpen, setMyIsOpen] = useState(true);
  return (
      <div className={styles.collapsibleMapContainer}>
        <Collapsible open={myIsOpen}
          transitionTime={200}
          trigger={
            <motion.div className={isDarkMode ? styles.borderdark : styles.borderlight} whileHover={{ scale: 1.1 }} style={{ borderRadius: '5px 5px 0px 0px' }}>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
              <span className="material-icons">public</span>
              Map
              <span style={{ float: 'right' }} className="material-icons">{!myIsOpen ? 'expand_more': 'expand_less'}</span>
            </span>
            </motion.div>
          }
          handleTriggerClick={() => { setMyIsOpen(!myIsOpen); }}
          >
          <Mapbox races={[race]} mapType={lessThanWindowWidthThreshold ? 'smallVertical' : "square"} zoomParam={5} />
        </Collapsible>
      </div>
  );
};
