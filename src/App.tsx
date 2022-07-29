import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import { AppHeader } from "./components/AppHeader/AppHeader";
import { Tooltip } from './components/Tooltip/Tooltip';
import { useDarkMode, useWindowSize } from 'usehooks-ts';

export interface TooltipPosition { x: number, y: number };
export const DefaultTooltipPosition = { x: -1000, y: -1000 };
export type AppOutletContext = { 
  setTooltipPosition: React.Dispatch<React.SetStateAction<TooltipPosition | undefined>>, 
  setTooltipChild: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>,
  isDarkMode: boolean,
  toggleDarkMode: () => void,
  enableDarkMode: () => void,
  disableDarkMode: () => void,
  windowWidth: number,
  windowWidthThreshold: number,
  narrowWindowWidthThreshold: number
};

function App() {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | undefined>(DefaultTooltipPosition);
  const [tooltipChild, setTooltipChild] = useState<JSX.Element | undefined>(<></>);
  const { isDarkMode, toggle: toggleDarkMode, enable: enableDarkMode, disable: disableDarkMode } = useDarkMode();
  const { width: windowWidth } = useWindowSize();
  return (
    <div className="App">
      <AppHeader windowWidth={windowWidth} windowWidthThreshold={1050} narrowWindowWidthThreshold={750} isDarkMode={isDarkMode} enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode} setTooltipPosition={setTooltipPosition} setTooltipChild={setTooltipChild} ></AppHeader>
      <Outlet context={{ setTooltipPosition, setTooltipChild, isDarkMode, toggleDarkMode, enableDarkMode, disableDarkMode, windowWidth, windowWidthThreshold: 1050, narrowWindowWidthThreshold: 500 }} />
      <Tooltip isDarkMode={isDarkMode} child={tooltipChild} position={tooltipPosition}></Tooltip>
    </div>
  );
}

export default App;
