import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaStarAndCrescent,
  FaLeaf,
  FaHands,
  FaBookOpen,
  FaUserAlt,
  FaSearch,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaYinYang,
  FaGem,
} from "react-icons/fa";
import { GiLotus, GiMeditation } from "react-icons/gi";
import "./navbar.css";

const SpiritualNavbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [showEnergyOrbs, setShowEnergyOrbs] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // get the current path and set the active item
    const currentPath = window.location.pathname;
    const activeItem = menuItems.find((item) => item.path === currentPath);
    if (activeItem) {
      setActiveItem(activeItem.id);
    }
  }, [window.location.pathname]);

  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome />, path: "/" },
    {
      id: "vastu",
      label: "Vastu",
      icon: <FaStarAndCrescent />,
      path: "/vastu",
    },
    {
      id: "astrology",
      label: "Astrology",
      icon: <FaMoon />,
      path: "/astrology",
    },
    {
      id: "meditation",
      label: "Meditation",
      icon: <GiMeditation />,
      path: "/meditation",
    },
    { id: "energy", label: "Energy", icon: <FaHands />, path: "/energy" },
    {
      id: "consultation",
      label: "Consultation",
      icon: <FaUserAlt />,
      path: "/consultation",
    },
    // {
    //   id: "resources",
    //   label: "Resources",
    //   icon: <FaBookOpen />,
    //   path: "/resources",
    // },
  ];

  // Handle menu item click
  const handleMenuItemClick = (itemId) => {
    setActiveItem(itemId);
    setIsMenuOpen(false);

    // Add spiritual feedback effect
    const spiritualFeedback = document.createElement("div");
    spiritualFeedback.className = "spiritual-feedback";
    spiritualFeedback.style.left = `${Math.random() * 80 + 10}%`;
    document.querySelector(".spiritual-navbar").appendChild(spiritualFeedback);

    setTimeout(() => {
      spiritualFeedback.remove();
    }, 1000);

    // Navigate to the respective page
    const item = menuItems.find((menuItem) => menuItem.id === itemId);
    if (item && item.path) {
      navigate(item.path);
    }
  };

  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log(`Searching spiritual topics: ${searchQuery}`);

      // Show search energy effect
      const searchEnergy = document.createElement("div");
      searchEnergy.className = "search-energy";
      searchEnergy.innerHTML = `
        <div class="energy-circle"></div>
        <div class="energy-circle"></div>
        <div class="energy-circle"></div>
      `;
      document.querySelector(".spiritual-search").appendChild(searchEnergy);

      setTimeout(() => {
        searchEnergy.remove();
      }, 1500);

      setSearchQuery("");
    }
  };

  // Generate floating Sanskrit symbols
  const sanskritSymbols = ["ॐ", "☸", "卐", "ॐ", "꧁", "꧂", "ॐ"];

  return (
    <nav className={`spiritual-navbar ${darkMode ? "dark-mode" : ""}`}>
      {/* Animated Background Elements */}
      <div className="spiritual-background">
        {/* Mandala Pattern */}
        <div className="mandala-pattern"></div>

        {/* Floating Energy Orbs */}
        {showEnergyOrbs && (
          <>
            <div className="energy-orb orb-1"></div>
            <div className="energy-orb orb-2"></div>
            <div className="energy-orb orb-3"></div>
          </>
        )}

        {/* Floating Sanskrit Symbols */}
        {sanskritSymbols.map((symbol, index) => (
          <div
            key={index}
            className="floating-symbol"
            style={{
              left: `${15 + index * 12}%`,
              animationDelay: `${index * 0.7}s`,
              fontSize: `${1.2 + Math.random() * 0.8}rem`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* wrap the logo section within a circular aura */}
      <div className="aura">
        {/* Logo Section */}
        <div className="spiritual-logo">
          <img
            src="/logo.png"
            alt="Divine Vastu & Spiritual"
            className="navbar-logo-image"
          />
        </div>
      </div>
      {/* Navigation Menu */}
      <ul className={`spiritual-nav-menu ${isMenuOpen ? "active" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav-link ${activeItem === item.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(item.id);
              }}
              aria-current={activeItem === item.id ? "page" : undefined}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-aura"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side Actions */}
      <div className="spiritual-actions">
        {/* Search Bar */}
        {/* <div className="spiritual-search">
          <input
            type="text"
            placeholder="Search spiritual wisdom..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            aria-label="Search spiritual content"
          />
          <button onClick={handleSearch} aria-label="Search">
            <FaSearch />
          </button>
        </div> */}

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default SpiritualNavbar;
