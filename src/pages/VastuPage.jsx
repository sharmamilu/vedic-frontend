import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaCompass,
  FaStar,
  FaWater,
  FaFire,
  FaTree,
  FaMountain,
  FaCity,
  FaBed,
  FaUtensils,
  FaBath,
  FaDoorOpen,
  FaLightbulb,
  FaWind,
  FaSeedling,
  FaBookOpen,
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
  FaCheckCircle,
  FaQuestionCircle,
  FaUsers,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight as FaArrowRightSolid,
  FaRegLightbulb,
  FaRegCheckCircle,
} from "react-icons/fa";
import {
  GiDirectionSigns,
  GiStoneSphere,
  GiLotus,
  GiMeditation,
  GiEgyptianTemple,
  GiAbstract077,
  GiAncientColumns,
  GiWindHole,
} from "react-icons/gi";
import "../styles/VastuPage.css";
import VastuCompass from "../components/VastuCompass";

const VastuPage = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("principles");
  const [selectedDirection, setSelectedDirection] = useState("north");
  const [showRemedyModal, setShowRemedyModal] = useState(false);
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const [userRoom, setUserRoom] = useState("living-room");
  const [showCompass, setShowCompass] = useState(false);

  // Vastu Principles Data
  const vastuPrinciples = [
    {
      id: 1,
      title: "Five Elements Balance",
      icon: <GiStoneSphere />,
      description:
        "Vastu balances the five elements - Earth, Water, Fire, Air, and Space - in your living space.",
      details:
        "Each element corresponds to specific directions and rooms. Proper placement creates harmony and positive energy flow.",
      color: "#d4af37",
    },
    {
      id: 2,
      title: "Directional Harmony",
      icon: <FaCompass />,
      description:
        "Each direction has specific energy influences and recommended placements.",
      details:
        "North for wealth, East for health, South for strength, West for prosperity, and Northeast for wisdom.",
      color: "#3cb371",
    },
    {
      id: 3,
      title: "Energy Flow (Prana)",
      icon: <GiWindHole />,
      description:
        "Smooth energy flow is essential for positive vibrations in your home.",
      details:
        "Ensure clutter-free spaces, proper ventilation, and unobstructed pathways for energy circulation.",
      color: "#9370db",
    },
    {
      id: 4,
      title: "Geometric Symmetry",
      icon: <GiAbstract077 />,
      description:
        "Proper proportions and symmetrical designs enhance positive energy.",
      details:
        "Square and rectangular shapes are preferred over irregular shapes for rooms and buildings.",
      color: "#ff6b6b",
    },
  ];

  // Directional Guidelines
  const directionalData = {
    north: {
      name: "North",
      deity: "Kubera (God of Wealth)",
      element: "Water",
      color: "Blue/Silver",
      room: "Living Room, Study",
      do: "Keep open space, water elements, financial documents",
      dont: "Avoid heavy furniture, toilets, kitchen",
      benefits: "Financial prosperity, career growth",
    },
    northeast: {
      name: "Northeast",
      deity: "Ishanya (Lord Shiva)",
      element: "Water/Earth",
      color: "White/Light Yellow",
      room: "Pooja Room, Meditation Space",
      do: "Keep clean, light, spiritual items",
      dont: "Avoid storage, heavy items, kitchen",
      benefits: "Spiritual growth, wisdom, peace",
    },
    east: {
      name: "East",
      deity: "Indra (King of Gods)",
      element: "Air",
      color: "Green/Yellow",
      room: "Bathroom, Entrance",
      do: "Place main door, windows, light items",
      dont: "Avoid heavy furniture, storerooms",
      benefits: "Health, vitality, new beginnings",
    },
    southeast: {
      name: "Southeast",
      deity: "Agni (Fire God)",
      element: "Fire",
      color: "Red/Orange",
      room: "Kitchen",
      do: "Place cooking stove, electrical items",
      dont: "Avoid water elements, pooja room",
      benefits: "Relationship harmony, prosperity",
    },
    south: {
      name: "South",
      deity: "Yama (God of Death)",
      element: "Fire/Earth",
      color: "Red/Brown",
      room: "Bedroom, Living Room",
      do: "Place heavy furniture, master bedroom",
      dont: "Avoid kitchen, toilets, main entrance",
      benefits: "Stability, strength, protection",
    },
    southwest: {
      name: "Southwest",
      deity: "Nirriti (Goddess of Suffering)",
      element: "Earth",
      color: "Brown/Black",
      room: "Master Bedroom, Storage",
      do: "Keep heavy furniture, owner's room",
      dont: "Avoid kitchen, toilets, empty space",
      benefits: "Stability, relationships, sleep",
    },
    west: {
      name: "West",
      deity: "Varuna (God of Water)",
      element: "Air/Water",
      color: "White/Silver",
      room: "Children's Room, Dining",
      do: "Place children's room, study, dining",
      dont: "Avoid kitchen, toilets in northwest",
      benefits: "Creativity, children's progress",
    },
    northwest: {
      name: "Northwest",
      deity: "Vayu (Wind God)",
      element: "Air",
      color: "White/Gray",
      room: "Guest Room, Garage",
      do: "Keep guest room, garage, toilets",
      dont: "Avoid kitchen, pooja room, master bedroom",
      benefits: "Travel opportunities, networking",
    },
  };

  // Room-wise Vastu Tips
  const roomVastu = [
    {
      id: "living-room",
      name: "Living Room",
      icon: <FaHome />,
      tips: [
        "Place in North, East or Northeast direction",
        "Use light colors on walls",
        "Keep Northeast corner light and clutter-free",
        "Arrange furniture in square or octagonal shapes",
        "Place air-purifying plants in East or North",
      ],
      avoid: [
        "Avoid placing in South direction",
        "No heavy furniture in Northeast",
        "Avoid broken or unused items",
        "No mirrors facing the entrance",
        "Avoid dark colors on walls",
      ],
    },
    {
      id: "bedroom",
      name: "Bedroom",
      icon: <FaBed />,
      tips: [
        "Master bedroom in Southwest direction",
        "Sleep with head towards South",
        "Use earthy colors for walls",
        "Keep bedroom door in East or North",
        "Place bed against solid wall",
      ],
      avoid: [
        "Avoid bedroom in Northeast",
        "No toilet attached to bedroom",
        "Avoid sleeping under beams",
        "No mirrors facing the bed",
        "Avoid electronic items near bed",
      ],
    },
    {
      id: "kitchen",
      name: "Kitchen",
      icon: <FaUtensils />,
      tips: [
        "Place in Southeast direction",
        "Face East while cooking",
        "Keep cooking platform in Southeast",
        "Store grains in Northwest",
        "Use red, orange or yellow colors",
      ],
      avoid: [
        "Never place kitchen in Northeast",
        "Avoid kitchen under toilet/bedroom",
        "No refrigerator facing stove",
        "Avoid black color in kitchen",
        "No leaking taps or pipes",
      ],
    },
    {
      id: "pooja-room",
      name: "Pooja Room",
      icon: <GiEgyptianTemple />,
      tips: [
        "Ideal in Northeast corner",
        "Face East or North while praying",
        "Keep clean and well-lit",
        "Use white, yellow or light blue",
        "Place idols on East or West wall",
      ],
      avoid: [
        "Never place in bathroom or kitchen",
        "Avoid sharing wall with toilet",
        "No photos of departed souls",
        "Avoid broken or damaged idols",
        "No storage in pooja room",
      ],
    },
  ];

  // Common Vastu Remedies
  const vastuRemedies = [
    {
      id: 1,
      problem: "Financial Difficulties",
      solution: "Place a water fountain in North direction",
      icon: <FaWater />,
      steps: [
        "Clean North area",
        "Place copper vessel with water",
        "Add floating flowers",
        "Face fountain towards house",
      ],
      benefits: "Attracts wealth, removes financial obstacles",
    },
    {
      id: 2,
      problem: "Health Issues",
      solution: "Place pyramids in East or Northeast",
      icon: <GiLotus />,
      steps: [
        "Use copper or crystal pyramids",
        "Place in East for family health",
        "Place in Northeast for mental peace",
        "Clean area regularly",
      ],
      benefits: "Improves health, positive energy flow",
    },
    {
      id: 3,
      problem: "Relationship Problems",
      solution: "Use rose quartz crystals in Southwest",
      icon: <FaSeedling />,
      steps: [
        "Place pair of rose quartz",
        "Keep in master bedroom",
        "Clean with salt water monthly",
        "Charge in moonlight",
      ],
      benefits: "Harmony in relationships, love energy",
    },
    {
      id: 4,
      problem: "Career Stagnation",
      solution: "Place citrine crystal in North",
      icon: <FaStar />,
      steps: [
        "Place citrine on work desk",
        "Keep in North direction",
        "Clean with smoke cleansing",
        "Program with career intentions",
      ],
      benefits: "Career growth, opportunities, success",
    },
  ];

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle remedy selection
  const handleRemedySelect = (remedy) => {
    setSelectedRemedy(remedy);
    setShowRemedyModal(true);
  };

  // Close remedy modal
  const closeRemedyModal = () => {
    setShowRemedyModal(false);
    setSelectedRemedy(null);
  };

  // Get current room data
  const currentRoom =
    roomVastu.find((room) => room.id === userRoom) || roomVastu[0];

  return (
    <div className={`vastu-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="vastu-hero-section">
        <div className="vastu-hero-background">
          <div className="vastu-floating-symbols">
            {["ॐ", "🏠", "🧭", "✨", "🌌"].map((symbol, index) => (
              <span key={index} className="vastu-floating-symbol">
                {symbol}
              </span>
            ))}
          </div>
          <div className="vastu-energy-orb vastu-orb-1"></div>
          <div className="vastu-energy-orb vastu-orb-2"></div>
        </div>

        <div className="vastu-hero-content">
          <div className="vastu-hero-text">
            <h1 className="vastu-hero-title">
              Ancient <span className="vastu-highlight">Vastu</span> Wisdom
              <br />
              for Modern Living
            </h1>
            <p className="vastu-hero-subtitle">
              Transform your home into a sanctuary of peace, prosperity, and
              positive energy with timeless Vastu Shastra principles.
            </p>
            <div className="vastu-hero-buttons">
              <button
                className="vastu-btn-primary"
                onClick={() => handleTabChange("directions")}
              >
                <FaCompass /> Explore Directions
              </button>
              <button
                className="vastu-btn-secondary"
                onClick={() => setShowCompass(true)}
              >
                <GiDirectionSigns /> Live Compass Tool
              </button>
            </div>
          </div>
          <div className="vastu-hero-image">
            <div className="vastu-mandala">
              <GiAncientColumns />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="vastu-quick-stats">
          <div className="vastu-stat-item">
            <div className="vastu-stat-number">5000+</div>
            <div className="vastu-stat-label">Homes Transformed</div>
          </div>
          <div className="vastu-stat-item">
            <div className="vastu-stat-number">81</div>
            <div className="vastu-stat-label">Vastu Principles</div>
          </div>
          <div className="vastu-stat-item">
            <div className="vastu-stat-number">100%</div>
            <div className="vastu-stat-label">Natural Remedies</div>
          </div>
          <div className="vastu-stat-item">
            <div className="vastu-stat-number">24/7</div>
            <div className="vastu-stat-label">Expert Guidance</div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="vastu-tabs-container">
        <div className="vastu-tabs">
          <button
            className={`vastu-tab ${activeTab === "principles" ? "active" : ""}`}
            onClick={() => handleTabChange("principles")}
          >
            <FaBookOpen /> Vastu Principles
          </button>
          <button
            className={`vastu-tab ${activeTab === "directions" ? "active" : ""}`}
            onClick={() => handleTabChange("directions")}
          >
            <FaCompass /> Directions Guide
          </button>
          <button
            className={`vastu-tab ${activeTab === "rooms" ? "active" : ""}`}
            onClick={() => handleTabChange("rooms")}
          >
            <FaHome /> Room-wise Vastu
          </button>
          <button
            className={`vastu-tab ${activeTab === "remedies" ? "active" : ""}`}
            onClick={() => handleTabChange("remedies")}
          >
            <GiLotus /> Vastu Remedies
          </button>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="vastu-main-content">
        {/* Principles Section */}
        {activeTab === "principles" && (
          <section className="vastu-section principles-section">
            <div className="section-header">
              <h2>
                <GiStoneSphere /> Core Vastu Principles
              </h2>
              <p>
                Understand the fundamental concepts that form the basis of Vastu
                Shastra
              </p>
            </div>

            <div className="principles-grid">
              {vastuPrinciples.map((principle) => (
                <div key={principle.id} className="principle-card">
                  <div
                    className="principle-icon"
                    style={{ color: principle.color }}
                  >
                    {principle.icon}
                  </div>
                  <h3>{principle.title}</h3>
                  <p className="principle-description">
                    {principle.description}
                  </p>
                  <div className="principle-details">
                    <p>{principle.details}</p>
                  </div>
                  <button className="principle-learn-more">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>

            <div className="vastu-tips-section">
              <h3>
                <FaRegLightbulb /> Quick Vastu Tips
              </h3>
              <div className="tips-grid">
                <div className="tip-item">
                  <FaCheckCircle className="tip-icon" />
                  <span>Keep Northeast corner clean and light</span>
                </div>
                <div className="tip-item">
                  <FaCheckCircle className="tip-icon" />
                  <span>Place main entrance in North, East or Northeast</span>
                </div>
                <div className="tip-item">
                  <FaCheckCircle className="tip-icon" />
                  <span>Avoid toilets in Northeast corner</span>
                </div>
                <div className="tip-item">
                  <FaCheckCircle className="tip-icon" />
                  <span>Keep kitchen in Southeast direction</span>
                </div>
                <div className="tip-item">
                  <FaCheckCircle className="tip-icon" />
                  <span>Sleep with head towards South</span>
                </div>
                <div className="tip-item">
                  <FaCheckCircle className="tip-icon" />
                  <span>Place water elements in North direction</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Directions Section */}
        {activeTab === "directions" && (
          <section className="vastu-section directions-section">
            <div className="section-header">
              <h2>
                <FaCompass /> Directional Vastu Guide
              </h2>
              <p>
                Each direction has specific energy influences. Learn how to
                optimize them.
              </p>
            </div>

            <div className="directions-selector">
              {Object.keys(directionalData).map((direction) => (
                <button
                  key={direction}
                  className={`direction-btn ${selectedDirection === direction ? "active" : ""}`}
                  onClick={() => setSelectedDirection(direction)}
                >
                  {direction.charAt(0).toUpperCase() + direction.slice(1)}
                </button>
              ))}
            </div>

            <div className="direction-details-card">
              <div className="direction-header">
                <h3>{directionalData[selectedDirection].name} Direction</h3>
                <span className="direction-deity">
                  {directionalData[selectedDirection].deity}
                </span>
              </div>

              <div className="direction-grid">
                <div className="direction-info">
                  <div className="info-item">
                    <span className="info-label">Element:</span>
                    <span className="info-value">
                      {directionalData[selectedDirection].element}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Recommended Colors:</span>
                    <span className="info-value">
                      {directionalData[selectedDirection].color}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Ideal Rooms:</span>
                    <span className="info-value">
                      {directionalData[selectedDirection].room}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Benefits:</span>
                    <span className="info-value">
                      {directionalData[selectedDirection].benefits}
                    </span>
                  </div>
                </div>

                <div className="direction-dos-donts">
                  <div className="dos-section">
                    <h4>
                      <FaRegCheckCircle /> Do's
                    </h4>
                    <p>{directionalData[selectedDirection].do}</p>
                  </div>
                  <div className="donts-section">
                    <h4>
                      <FaQuestionCircle /> Don'ts
                    </h4>
                    <p>{directionalData[selectedDirection].dont}</p>
                  </div>
                </div>
              </div>

              <div className="direction-tips">
                <h4>
                  <FaRegLightbulb /> Pro Tips
                </h4>
                <ul>
                  <li>Keep this direction clean and clutter-free</li>
                  <li>Use recommended colors for walls and decor</li>
                  <li>Place appropriate elements (water, fire, etc.)</li>
                  <li>Avoid heavy furniture or obstructions</li>
                </ul>
              </div>
            </div>

            {/* Compass Visualization */}
            <div className="compass-visualization">
              <h3>
                <GiDirectionSigns /> Directional Compass
              </h3>
              <div className="compass-container">
                <div className="compass-circle">
                  <div className="compass-direction north">N</div>
                  <div className="compass-direction east">E</div>
                  <div className="compass-direction south">S</div>
                  <div className="compass-direction west">W</div>
                  <div className="compass-center"></div>
                  <div
                    className={`compass-highlight ${selectedDirection}`}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Rooms Section */}
        {activeTab === "rooms" && (
          <section className="vastu-section rooms-section">
            <div className="section-header">
              <h2>
                <FaHome /> Room-wise Vastu Guidelines
              </h2>
              <p>
                Optimize each room in your home for maximum positive energy flow
              </p>
            </div>

            <div className="room-selector">
              {roomVastu.map((room) => (
                <button
                  key={room.id}
                  className={`room-select-btn ${userRoom === room.id ? "active" : ""}`}
                  onClick={() => setUserRoom(room.id)}
                >
                  <span className="room-icon">{room.icon}</span>
                  <span className="room-name">{room.name}</span>
                </button>
              ))}
            </div>

            <div className="room-details-container">
              <div className="room-header">
                <div className="room-title">
                  {currentRoom.icon}
                  <h3>{currentRoom.name} Vastu</h3>
                </div>
                <button className="download-guide">
                  <FaDownload /> Download Guide
                </button>
              </div>

              <div className="room-tips-container">
                <div className="dos-column">
                  <h4>
                    <FaRegCheckCircle /> Recommended Practices
                  </h4>
                  <ul className="tips-list">
                    {currentRoom.tips.map((tip, index) => (
                      <li key={index}>
                        <FaCheckCircle className="tip-bullet" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="donts-column">
                  <h4>
                    <FaQuestionCircle /> Things to Avoid
                  </h4>
                  <ul className="tips-list avoid">
                    {currentRoom.avoid.map((tip, index) => (
                      <li key={index}>
                        <FaRegCheckCircle className="tip-bullet" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="room-additional-info">
                <div className="info-card">
                  <h5>Best Direction</h5>
                  <p>
                    {currentRoom.id === "living-room"
                      ? "North/East"
                      : currentRoom.id === "bedroom"
                        ? "Southwest"
                        : currentRoom.id === "kitchen"
                          ? "Southeast"
                          : "Northeast"}
                  </p>
                </div>
                <div className="info-card">
                  <h5>Ideal Colors</h5>
                  <p>
                    {currentRoom.id === "living-room"
                      ? "Light Yellow, Green"
                      : currentRoom.id === "bedroom"
                        ? "Earthy Tones"
                        : currentRoom.id === "kitchen"
                          ? "Red, Orange, Yellow"
                          : "White, Light Blue"}
                  </p>
                </div>
                <div className="info-card">
                  <h5>Element</h5>
                  <p>
                    {currentRoom.id === "living-room"
                      ? "Air/Space"
                      : currentRoom.id === "bedroom"
                        ? "Earth"
                        : currentRoom.id === "kitchen"
                          ? "Fire"
                          : "Water"}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Remedies Section */}
        {activeTab === "remedies" && (
          <section className="vastu-section remedies-section">
            <div className="section-header">
              <h2>
                <GiLotus /> Vastu Remedies & Solutions
              </h2>
              <p>
                Simple yet powerful remedies to correct Vastu defects and
                enhance positive energy
              </p>
            </div>

            <div className="remedies-grid">
              {vastuRemedies.map((remedy) => (
                <div key={remedy.id} className="remedy-card">
                  <div className="remedy-header">
                    <div className="remedy-icon">{remedy.icon}</div>
                    <h3>{remedy.problem}</h3>
                  </div>
                  <div className="remedy-solution">
                    <h4>Solution:</h4>
                    <p>{remedy.solution}</p>
                  </div>
                  <div className="remedy-benefits">
                    <span className="benefits-label">Benefits:</span>
                    <span className="benefits-text">{remedy.benefits}</span>
                  </div>
                  <button
                    className="remedy-learn-more"
                    onClick={() => handleRemedySelect(remedy)}
                  >
                    View Steps <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>

            <div className="vastu-reminder">
              <div className="reminder-content">
                <FaRegLightbulb className="reminder-icon" />
                <div className="reminder-text">
                  <h3>Remember:</h3>
                  <p>
                    Vastu remedies work gradually. Be patient and consistent
                    with your practice.
                  </p>
                </div>
              </div>
              <button className="reminder-action">
                <FaCalendarAlt /> Schedule Consultation
              </button>
            </div>
          </section>
        )}
      </div>

      {/* Testimonials Section */}
      <section className="vastu-testimonials-section">
        <div className="section-header">
          <h2>
            <FaUsers /> Vastu Success Stories
          </h2>
          <p>Real transformations experienced by our community members</p>
        </div>

        <div className="vastu-testimonials-grid">
          <div className="vastu-testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>
                "After implementing Vastu remedies in our home, we experienced
                significant improvements in our financial situation and family
                harmony."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">RS</div>
              <div className="author-info">
                <h4>Rajesh Sharma</h4>
                <p>Business Owner, Delhi</p>
              </div>
            </div>
          </div>

          <div className="vastu-testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>
                "The room-wise Vastu tips helped us redesign our apartment. The
                positive energy is palpable, and our sleep quality has improved
                dramatically."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">PM</div>
              <div className="author-info">
                <h4>Priya Mehta</h4>
                <p>Software Engineer, Bangalore</p>
              </div>
            </div>
          </div>

          <div className="vastu-testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>
                "Directional Vastu guidance transformed our workspace.
                Productivity increased by 40%, and team conflicts reduced
                significantly."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">AS</div>
              <div className="author-info">
                <h4>Arun Singh</h4>
                <p>Startup Founder, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vastu-cta-section">
        <div className="vastu-cta-container">
          <div className="vastu-cta-content">
            <h2>Need Personalized Vastu Guidance?</h2>
            <p>
              Get a comprehensive Vastu analysis of your home or office by our
              certified Vastu consultants.
            </p>
            <div className="vastu-cta-buttons">
              <button className="vastu-btn-primary">
                <FaCalendarAlt /> Book Consultation
              </button>
              <button className="vastu-btn-secondary">
                <FaDownload /> Download Free Guide
              </button>
            </div>
          </div>
          <div className="vastu-cta-decoration">
            <GiEgyptianTemple />
          </div>
        </div>
      </section>

      {/* Remedy Modal */}
      {showRemedyModal && selectedRemedy && (
        <div className="remedy-modal-overlay" onClick={closeRemedyModal}>
          <div className="remedy-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeRemedyModal}>
              <FaArrowLeft />
            </button>

            <div className="modal-header">
              <div className="modal-icon">{selectedRemedy.icon}</div>
              <h2>{selectedRemedy.problem}</h2>
            </div>

            <div className="modal-content">
              <div className="solution-section">
                <h3>
                  <FaRegLightbulb /> Solution
                </h3>
                <p className="solution-text">{selectedRemedy.solution}</p>
              </div>

              <div className="steps-section">
                <h3>
                  <FaArrowRightSolid /> Implementation Steps
                </h3>
                <ol className="steps-list">
                  {selectedRemedy.steps.map((step, index) => (
                    <li key={index}>
                      <span className="step-number">{index + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="benefits-section">
                <h3>
                  <FaRegCheckCircle /> Expected Benefits
                </h3>
                <p>{selectedRemedy.benefits}</p>
              </div>

              <div className="modal-actions">
                <button className="modal-action-btn">
                  <FaCalendarAlt /> Set Reminder
                </button>
                <button className="modal-action-btn">
                  <FaDownload /> Save Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compass Tool */}
      {/* {showCompass && (
        <div
          className="compass-tool-overlay"
          onClick={() => setShowCompass(false)}
        >
          <div className="compass-tool" onClick={(e) => e.stopPropagation()}>
            <button
              className="compass-close"
              onClick={() => setShowCompass(false)}
            >
              <FaArrowLeft />
            </button>
            <h2>Virtual Vastu Compass</h2>
            <div className="compass-tool-content">
              <p>Point your device North to align with Vastu directions</p>
              <div className="compass-animation">
                <div className="compass-needle"></div>
              </div>
              <button className="compass-action">
                <FaCompass /> Calibrate Compass
              </button>
            </div>
          </div>
        </div>
      )} */}

      {showCompass && (
        <VastuCompass
          darkMode={darkMode}
          onClose={() => setShowCompass(false)}
        />
      )}
    </div>
  );
};

export default VastuPage;
