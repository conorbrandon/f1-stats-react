import React from "react";
import styles from "./RaceReplay.module.css";

import { motion } from "framer-motion";

export const RaceReplay = ({ }) => {
  const width = document.body.clientWidth * 0.90;
  return (
    <div className={`page-content ${styles.centered}`}>
      <div className={styles.wrapper} style={{width}}>
        <motion.div
          className={styles.object}
          style={{ top: 0, left: 0, backgroundColor: 'red' }}
          animate={{ left: [null, 100, 200] }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
        />
        <motion.div
          className={styles.object}
          style={{ top: 100, left: 0, backgroundColor: 'green' }}
          animate={{ left: [null, 100, 200] }}
          transition={{ duration: 3, times: [0, 0.7, 1] }}
        />
      </div>
    </div>
  );
};
