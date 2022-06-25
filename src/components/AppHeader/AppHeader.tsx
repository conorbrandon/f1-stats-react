import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppHeader.module.css";

export const AppHeader = ({ }) => {
  return (
    <div className="app-header">
      <Link to=""><h1 className={styles.centered}><span className='red'>F1</span> Stats</h1></Link>
      <nav className={styles.paddedLink}>
        <Link to={`${new Date().getUTCFullYear()}`}>seasons</Link>
        <Link to="2008/5">test race</Link>
        <Link to="driver/massa">test driver</Link>
      </nav>
    </div>
  );
}