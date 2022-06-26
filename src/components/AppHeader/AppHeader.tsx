import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppHeader.module.css";

export const AppHeader = ({ }) => {
  return (
    <div className="app-header">
      <Link to=""><h1 className={styles.centered}><span className='red'>F1</span> Stats</h1></Link>
      <nav className={styles.paddedLink}>
        <Link to={'/'}>dashboard</Link>
        <Link to={`/current`}>seasons</Link>
        <Link to={'/current/standings'}>standings</Link>
        {process.env.REACT_APP_ENVIRONMENT === 'mock' && 
          <><Link to="2008/5">test race 2008</Link>
          <Link to="2022/5">test race 2022</Link>
          <Link to="driver/massa">test driver massa</Link>
          <Link to="constructor/ferrari">test const. ferrari</Link></>}
      </nav>
    </div>
  );
}