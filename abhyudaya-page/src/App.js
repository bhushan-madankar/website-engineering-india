import React, { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Abhyudaya from "./pages/Abhyudaya";
import About from "./pages/About";

// Placeholder components for other pages

const Colleges = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
        Engineering Colleges
      </h1>
      <p className="text-xl text-gray-300">Coming Soon...</p>
    </div>
  </div>
);

const Events = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
        Technical Events
      </h1>
      <p className="text-xl text-gray-300">Coming Soon...</p>
    </div>
  </div>
);

const Magazines = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
        Magazines & Publications
      </h1>
      <p className="text-xl text-gray-300">Coming Soon...</p>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "colleges":
        return <Colleges />;
      case "events":
        return <Events />;
      case "abhyudaya":
        return <Abhyudaya />;
      case "magazines":
        return <Magazines />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
