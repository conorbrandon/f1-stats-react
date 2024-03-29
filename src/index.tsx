import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Schedule } from './components/Schedule/Schedule';
import { Race } from './components/Race/Race';
import { RaceSummary } from './components/RaceSummary/RaceSummary';
import { RaceResults } from './components/RaceResults/RaceResults';
import { RaceQualifying } from './components/RaceQualifying/RaceQualifying';
import { Driver } from './components/Driver/Driver';
import { Constructor } from './components/Constructor/Constructor';
import { RaceLapTimes } from './components/RaceLapTimes/RaceLapTimes';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { RaceReplayReMotion } from './components/RaceReplayReMotion/RaceReplayReMotion';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Standings } from './components/Standings/Standings';
import { Drivers } from './components/Drivers/Drivers';
import { Constructors } from './components/Constructors/Constructors';
import { Circuit } from './components/Circuit/Circuit';
import { Circuits } from './components/Circuits/Circuits';
import { RaceSprint } from './components/RaceSprint/RaceSprint';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path={""} element={<Dashboard />} />
          <Route path={"/:year/"} element={<Schedule />} />
          <Route path={"/:year/standings"} element={<Standings />} />
          <Route path={"/:year/:round"} element={<Race />}>
            <Route path='' element={<RaceSummary />} />
            <Route path='results' element={<RaceResults stickyThead />}/>
            <Route path='sprint' element={<RaceSprint stickyThead />}/>
            <Route path='qualifying' element={<RaceQualifying stickyThead />}/>
            <Route path='laptimes' element={<RaceLapTimes />}/>
            <Route path='racereplay' element={<RaceReplayReMotion />}/>
          </Route>
          <Route path='/drivers' element={<Drivers />} />
          <Route path='/driver/:driverID' element={<Driver />}/>
          <Route path='/constructors' element={<Constructors />} />
          <Route path='/constructor/:constructorID' element={<Constructor />}/>
          <Route path='/circuits' element={<Circuits />} />
          <Route path='/circuit/:circuitID' element={<Circuit />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
