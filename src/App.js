 homepg-2
import React from "react";
import HomePage from "./pages/Home/Homepg";
import ClgSec from "./pages/ClgSec/ClgSec";
import EventsPage from "./components/Eventpage";

function App() {
  return (
    <div className="w-full">
      <HomePage />
      <EventsPage />
      <ClgSec />
    </div>

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AbhyudayaPage from './pages/Abhyudaya'; // index.js gets auto-resolved

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /abhyudaya */}
        <Route path="/" element={<Navigate to="/abhyudaya" />} />
        <Route path="/abhyudaya" element={<AbhyudayaPage />} />
      </Routes>
    </Router>
 main
  );
}

export default App;
