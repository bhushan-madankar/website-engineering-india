import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/Homepg";
import ClgSec from "./pages/ClgSec/ClgSec";
import EventsPage from "./components/Eventpage";
import AbhyudayaPage from "./pages/Abhyudaya/Abyudaya";

const App = () => {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <AbhyudayaPage />
                <EventsPage />
                <ClgSec />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
