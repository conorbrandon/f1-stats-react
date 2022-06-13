import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppHeader.module.css";

export const AppHeader = ({ }) => {
  return (
    <div className="app-header">
      <Link to=""><h1 className={styles.centered}><span className={styles.red}>F1</span> Stats app</h1></Link>
      <nav className={styles.paddedLink}>
        <Link to="2012">season schedules</Link>
        <Link to="2008/5">test race</Link>
        <Link to="driver/massa">test driver</Link>
      </nav>
    </div>
  );
}