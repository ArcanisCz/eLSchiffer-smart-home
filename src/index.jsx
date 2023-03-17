import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import './style.css';
import { smartHomeData } from "./smartHomeData"



const App = () => {
  return (
    <div className="container">
      <Header title={"Chytrý dům"} />
      <Dashboard data={smartHomeData} />
    </div>
  )
};

createRoot(
  document.querySelector('#app'),
).render(<App />);