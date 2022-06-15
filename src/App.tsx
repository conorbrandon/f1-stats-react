import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { AppHeader } from "./components/AppHeader/AppHeader";
import { Tooltip } from './components/Tooltip/Tooltip';

export interface TooltipPosition { x: number, y: number };
export const DefaultTooltipPosition = { x: -1000, y: -1000 };
export type AppOutletContext = { 
  setTooltipPosition: React.Dispatch<React.SetStateAction<TooltipPosition | undefined>>, 
  setTooltipChild: React.Dispatch<React.SetStateAction<JSX.Element | undefined>> 
};

function App() {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | undefined>(DefaultTooltipPosition);
  const [tooltipChild, setTooltipChild] = useState<JSX.Element | undefined>(<></>);
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Outlet context={{ setTooltipPosition, setTooltipChild }} />
      <Tooltip child={tooltipChild} position={tooltipPosition}></Tooltip>
    </div>
  );
}

export default App;
