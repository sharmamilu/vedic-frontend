import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import VastuPage from "./pages/VastuPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AstrologyPage from "./pages/AstrologyPage";
import MeditationPage from "./pages/MeditationPage";
import EnergyPage from "./pages/EnergyPage";
import ConsultationPage from "./pages/ConsultationPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("spiritual-dark-mode");

    // Add transition effect
    const transitionOverlay = document.createElement("div");
    transitionOverlay.className = "theme-transition";
    document.body.appendChild(transitionOverlay);

    setTimeout(() => {
      transitionOverlay.remove();
    }, 600);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route path="/vastu" element={<VastuPage darkMode={darkMode} />} />
          <Route
            path="/astrology"
            element={<AstrologyPage darkMode={darkMode} />}
          />
          <Route
            path="/meditation"
            element={<MeditationPage darkMode={darkMode} />}
          />
          <Route path="/energy" element={<EnergyPage darkMode={darkMode} />} />
          <Route
            path="/consultation"
            element={<ConsultationPage darkMode={darkMode} />}
          />
          <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
