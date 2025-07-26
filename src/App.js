// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AbhyudayaPage from "./pages/Abhyudaya";

function App() {
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/abhyudaya" element={<AbhyudayaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
