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
  );
}

export default App;
