import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import { AppHeader } from "./components/AppHeader/AppHeader";
import { Tooltip } from './components/Tooltip/Tooltip';
import { useDarkMode } from 'usehooks-ts';

export interface TooltipPosition { x: number, y: number };
export const DefaultTooltipPosition = { x: -1000, y: -1000 };
export type AppOutletContext = { 
  setTooltipPosition: React.Dispatch<React.SetStateAction<TooltipPosition | undefined>>, 
  setTooltipChild: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>,
  isDarkMode: boolean,
  toggleDarkMode: () => void,
  enableDarkMode: () => void,
  disableDarkMode: () => void
};

function App() {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | undefined>(DefaultTooltipPosition);
  const [tooltipChild, setTooltipChild] = useState<JSX.Element | undefined>(<></>);
  const { isDarkMode, toggle: toggleDarkMode, enable: enableDarkMode, disable: disableDarkMode } = useDarkMode();
  return (
    <div className="App">
      <AppHeader isDarkMode={isDarkMode} enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode}></AppHeader>
      <Outlet context={{ setTooltipPosition, setTooltipChild, isDarkMode, toggleDarkMode, enableDarkMode, disableDarkMode }} />
      <Tooltip child={tooltipChild} position={tooltipPosition}></Tooltip>
    </div>
  );
}

export default App;
