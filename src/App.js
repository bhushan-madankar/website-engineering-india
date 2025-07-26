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
  );
}

export default App;
