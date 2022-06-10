import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './App.css';

import { AppHeader } from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Outlet />
    </div>
  );
}

export default App;
