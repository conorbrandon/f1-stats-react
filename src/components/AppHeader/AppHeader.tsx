import React from "react";
import { Link } from "react-router-dom";

import "./AppHeader.css";

export const AppHeader = ({ }) => {
  return (
    <div className="app-header">
      <Link to=""><h1><span>F1</span> Stats app</h1></Link>
      <nav>
        <Link to="2012">season schedules</Link>
        <Link to="2008/5">test race</Link>
      </nav>
    </div>
  );
}