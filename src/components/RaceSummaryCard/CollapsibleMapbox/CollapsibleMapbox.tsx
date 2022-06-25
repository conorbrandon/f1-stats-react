import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { ErgastRace } from "../../../model/ErgastRace";
import { Mapbox } from "../../Mapbox/Mapbox";
import styles from "./CollapsibleMapbox.module.css";
import { motion } from 'framer-motion';

export const CollapsibleMapbox: React.FC<{race: ErgastRace}> = ({ race }) => {
  const [myIsOpen, setMyIsOpen] = useState(true);
  return (
      <div className={styles.collapsibleMapContainer}>
        <Collapsible open={myIsOpen}
          transitionTime={200}
          trigger={
            <motion.div whileHover={{ scale: 1.1 }} style={{ border: 'solid 2px white', borderRadius: '5px 5px 0px 0px' }}>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
              <span className="material-icons">public</span>
              Map
              <span style={{ float: 'right' }} className="material-icons">{!myIsOpen ? 'expand_more': 'expand_less'}</span>
            </span>
            </motion.div>
          }
          handleTriggerClick={() => { setMyIsOpen(!myIsOpen); }}
          >
          <Mapbox races={[race]} mapType="square" zoomParam={5} />
        </Collapsible>
      </div>
  );
};
