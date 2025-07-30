import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/Homepg';
import ClgSec from './pages/ClgSec/ClgSec';
import EventsPage from './components/Eventpage';
import AbhyudayaPage from './pages/Abhyudaya/Abyudaya'; // updated import path
import MagazinePage from './pages/Magazine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abhyudaya" element={<AbhyudayaPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/college" element={<ClgSec />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
      </Routes>
    </Router>
  );
}

export default App;

