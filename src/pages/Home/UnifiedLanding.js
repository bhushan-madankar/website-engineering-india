import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UnifiedLanding from './pages/Home/UnifiedLanding';
import ClgSec from './pages/ClgSec/ClgSec';
import EventsPage from './components/Eventpage';
import AbhyudayaPage from './pages/Abhyudaya/Abyudaya';
import MagazinePage from './pages/Magazine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnifiedLanding />} />
        <Route path="/college" element={<ClgSec />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/abhyudaya" element={<AbhyudayaPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
