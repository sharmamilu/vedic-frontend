import React, { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaTree,
  FaWater,
  FaFire,
  FaWind,
  FaMountain,
  FaHome,
  FaHeart,
  FaBrain,
  FaLeaf,
  FaSeedling,
  FaGem,
  FaStar,
  FaBookOpen,
  FaUserFriends,
  FaCalendarAlt,
  FaLightbulb,
  FaBalanceScale,
} from "react-icons/fa";
import {
  GiWindmill,
  GiTreeRoots,
  GiSpiralBloom,
  GiEnergyShield,
  GiAncientColumns,
  GiStonePath,
  GiTempleGate,
  GiAbstract024,
  GiFlowerTwirl,
  GiCrystalGrowth,
} from "react-icons/gi";
import "../styles/EnergyPage.css";
import { useNavigate } from "react-router-dom";

const EnergyPage = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("vastu");
  const [activeEnergy, setActiveEnergy] = useState(null);
  const [showRemedyModal, setShowRemedyModal] = useState(false);
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const navigate = useNavigate();

  // Energy Elements - Tree structure
  const energyElements = [
    {
      id: "earth",
      name: "Earth Element",
      icon: <FaMountain />,
      color: "#8BC34A",
      description: "Represents stability, grounding, and material prosperity",
      vastuTip: "Place heavy furniture in Southwest for stability",
      benefits: ["Grounding energy", "Financial stability", "Physical health"],
      imbalances: ["Restlessness", "Financial instability", "Lack of focus"],
    },
    {
      id: "water",
      name: "Water Element",
      icon: <FaWater />,
      color: "#2196F3",
      description: "Represents flow, emotions, intuition, and purification",
      vastuTip: "Keep Northeast clean for positive water energy",
      benefits: ["Emotional balance", "Intuition", "Purification"],
      imbalances: ["Emotional instability", "Stagnation", "Lack of clarity"],
    },
    {
      id: "fire",
      name: "Fire Element",
      icon: <FaFire />,
      color: "#FF5722",
      description:
        "Represents energy, transformation, passion, and illumination",
      vastuTip: "Place kitchen in Southeast for positive fire energy",
      benefits: ["Energy boost", "Transformation", "Clarity"],
      imbalances: ["Anger issues", "Burnout", "Aggression"],
    },
    {
      id: "air",
      name: "Air Element",
      icon: <FaWind />,
      color: "#00BCD4",
      description:
        "Represents movement, communication, intellect, and expansion",
      vastuTip: "Keep Northwest open for positive air flow",
      benefits: ["Mental clarity", "Communication", "New opportunities"],
      imbalances: ["Anxiety", "Indecisiveness", "Restlessness"],
    },
    {
      id: "space",
      name: "Space Element",
      icon: <GiAbstract024 />,
      color: "#9C27B0",
      description:
        "Represents consciousness, freedom, and spiritual connection",
      vastuTip: "Keep center of home clutter-free for positive space energy",
      benefits: ["Spiritual growth", "Freedom", "Creativity"],
      imbalances: [
        "Feeling trapped",
        "Lack of direction",
        "Spiritual disconnect",
      ],
    },
  ];

  // Vastu Principles - Interactive tree
  const vastuPrinciples = {
    root: "Vastu Shastra - Science of Architecture",
    branches: [
      {
        name: "Directions & Elements",
        principles: [
          {
            direction: "North",
            element: "Water",
            deity: "Kubera (Wealth)",
            room: "Living Room",
            tip: "Keep clean and open for wealth flow",
          },
          {
            direction: "East",
            element: "Air",
            deity: "Indra (Prosperity)",
            room: "Prayer Room",
            tip: "Morning sunlight brings positive energy",
          },
          {
            direction: "South",
            element: "Fire",
            deity: "Yama (Transformation)",
            room: "Kitchen",
            tip: "Ideal for transformation activities",
          },
          {
            direction: "West",
            element: "Earth",
            deity: "Varuna (Stability)",
            room: "Bedroom",
            tip: "Promotes rest and stability",
          },
        ],
      },
      {
        name: "Energy Zones",
        principles: [
          {
            zone: "Northeast (Ishanya)",
            energy: "Spiritual & Divine",
            color: "White/Light Blue",
            element: "Water",
            importance: "Most sacred zone",
          },
          {
            zone: "Southeast (Agneya)",
            energy: "Fire & Energy",
            color: "Red/Orange",
            element: "Fire",
            importance: "Transformation zone",
          },
          {
            zone: "Southwest (Nairutya)",
            energy: "Earth & Stability",
            color: "Brown/Yellow",
            element: "Earth",
            importance: "Support and foundation",
          },
          {
            zone: "Northwest (Vayavya)",
            energy: "Air & Movement",
            color: "Green/Gray",
            element: "Air",
            importance: "Change and opportunities",
          },
        ],
      },
    ],
  };

  // Energy Remedies - Interactive
  const energyRemedies = [
    {
      id: 1,
      problem: "Negative Energy in Home",
      icon: <FaHome />,
      solution: "Salt Water Remedy",
      steps: [
        "Mix salt in water in a glass bowl",
        "Place in corners of each room",
        "Change water every morning",
        "Dispose of water away from home",
        "Repeat for 7 days",
      ],
      science: "Salt absorbs negative ions and purifies energy",
    },
    {
      id: 2,
      problem: "Financial Blockages",
      icon: <FaGem />,
      solution: "Pyramid Energy",
      steps: [
        "Place copper pyramid in North corner",
        "Keep cash/valuables inside pyramid",
        "Place green plant nearby",
        "Visualize wealth flow daily",
        "Keep area clean and organized",
      ],
      science: "Pyramid shape amplifies and focuses energy",
    },
    {
      id: 3,
      problem: "Relationship Issues",
      icon: <FaHeart />,
      solution: "Rose Quartz Energy",
      steps: [
        "Place rose quartz in Southwest",
        "Keep pairs of items (candles, figurines)",
        "Use pink or red decor",
        "Practice gratitude together",
        "Maintain harmony in bedroom",
      ],
      science: "Rose quartz emits loving vibrations",
    },
    {
      id: 4,
      problem: "Health Problems",
      icon: <FaLeaf />,
      solution: "Tulsi Plant Energy",
      steps: [
        "Plant Tulsi in Northeast direction",
        "Water daily with devotion",
        "Place basil leaves in drinking water",
        "Keep home well-ventilated",
        "Remove clutter from sick room",
      ],
      science: "Tulsi emits healing vibrations and purifies air",
    },
  ];

  // Energy Flow Visualization - Static data
  const energyFlows = [
    {
      id: "prana",
      name: "Prana Flow",
      description: "Life force energy that circulates through spaces",
      source: "Northeast (Main entrance)",
      path: "Moves clockwise through home",
      blockage: "Clutter in Northeast",
      enhancement: "Water fountain or wind chimes",
    },
    {
      id: "chi",
      name: "Chi Energy",
      description: "Universal energy that follows specific patterns",
      source: "Main door and windows",
      path: "Smooth, curved paths preferred",
      blockage: "Sharp corners or dead ends",
      enhancement: "Mirrors and crystals",
    },
    {
      id: "kundalini",
      name: "Kundalini Energy",
      description: "Spiritual energy that rises through chakras",
      source: "Base of spine (Earth element)",
      path: "Upward through energy centers",
      blockage: "Fear and attachments",
      enhancement: "Meditation and breathwork",
    },
  ];

  // Spiritual Practices - Tree structure
  const spiritualPractices = {
    root: "Spiritual Energy Practices",
    practices: [
      {
        level: "Foundation",
        practices: [
          {
            name: "Morning Sun Salutation",
            duration: "15 minutes",
            benefit: "Activates solar energy",
            time: "Sunrise",
          },
          {
            name: "Grounding Meditation",
            duration: "10 minutes",
            benefit: "Connects with Earth energy",
            time: "Anytime",
          },
          {
            name: "Gratitude Practice",
            duration: "5 minutes",
            benefit: "Attracts positive energy",
            time: "Morning & Evening",
          },
        ],
      },
      {
        level: "Intermediate",
        practices: [
          {
            name: "Chakra Balancing",
            duration: "20 minutes",
            benefit: "Harmonizes energy centers",
            time: "Twice weekly",
          },
          {
            name: "Pranayama",
            duration: "15 minutes",
            benefit: "Enhances life force",
            time: "Daily",
          },
          {
            name: "Crystal Grids",
            duration: "30 minutes setup",
            benefit: "Amplifies intentions",
            time: "New Moon/Full Moon",
          },
        ],
      },
      {
        level: "Advanced",
        practices: [
          {
            name: "Energy Healing",
            duration: "45 minutes",
            benefit: "Clears blockages",
            time: "As needed",
          },
          {
            name: "Space Clearing",
            duration: "1 hour",
            benefit: "Purifies environment",
            time: "Seasonal",
          },
          {
            name: "Yantra Meditation",
            duration: "30 minutes",
            benefit: "Manifests intentions",
            time: "Specific days",
          },
        ],
      },
    ],
  };

  // Brain Energy Centers - Interactive
  const brainEnergyCenters = [
    {
      id: "crown",
      name: "Crown Chakra",
      location: "Top of head",
      color: "Violet/White",
      element: "Space",
      function: "Spiritual connection, enlightenment",
      imbalance: "Spiritual disconnect, cynicism",
      balance: "Meditation, prayer, connection with nature",
    },
    {
      id: "third-eye",
      name: "Third Eye Chakra",
      location: "Forehead center",
      color: "Indigo",
      element: "Light",
      function: "Intuition, insight, imagination",
      imbalance: "Lack of clarity, poor intuition",
      balance: "Visualization, dream journaling, moon gazing",
    },
    {
      id: "throat",
      name: "Throat Chakra",
      location: "Throat",
      color: "Blue",
      element: "Ether",
      function: "Communication, self-expression",
      imbalance: "Difficulty expressing, fear of speaking",
      balance: "Singing, chanting, honest communication",
    },
    {
      id: "heart",
      name: "Heart Chakra",
      location: "Heart center",
      color: "Green",
      element: "Air",
      function: "Love, compassion, relationships",
      imbalance: "Lack of empathy, relationship issues",
      balance: "Loving-kindness meditation, heart-opening yoga",
    },
    {
      id: "solar",
      name: "Solar Plexus Chakra",
      location: "Upper abdomen",
      color: "Yellow",
      element: "Fire",
      function: "Personal power, confidence, will",
      imbalance: "Low self-esteem, control issues",
      balance: "Sun meditation, empowerment practices",
    },
    {
      id: "sacral",
      name: "Sacral Chakra",
      location: "Lower abdomen",
      color: "Orange",
      element: "Water",
      function: "Creativity, emotions, pleasure",
      imbalance: "Creative blocks, emotional instability",
      balance: "Creative expression, water therapy, dance",
    },
    {
      id: "root",
      name: "Root Chakra",
      location: "Base of spine",
      color: "Red",
      element: "Earth",
      function: "Survival, security, grounding",
      imbalance: "Anxiety, financial insecurity",
      balance: "Grounding exercises, nature walks, stability practices",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveEnergy(null);
  };

  const handleEnergySelect = (energy) => {
    setActiveEnergy(energy);
  };

  const handleRemedySelect = (remedy) => {
    setSelectedRemedy(remedy);
    setShowRemedyModal(true);
  };

  const handleConsultation = () => {
    Navigate("/consultation");
  };

  const handleElementClick = (element) => {
    setActiveEnergy(element);
  };

  return (
    <div className={`energy-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="energy-hero-section">
        <div className="energy-hero-background">
          <div className="energy-animated-elements">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="energy-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  backgroundColor: [
                    "#43A047", // Green
                    "#8E24AA", // Purple
                    "#FFB300", // Gold
                    "#2196F3", // Blue
                  ][i % 4],
                }}
              ></div>
            ))}
          </div>
          <div className="energy-orb energy-orb-1"></div>
          <div className="energy-orb energy-orb-2"></div>
        </div>

        <div className="energy-hero-content">
          <div className="energy-hero-text">
            <h1 className="energy-hero-title">
              Harness Cosmic
              <span className="energy-highlight"> Energy</span> for Abundance
            </h1>
            <p className="energy-hero-subtitle">
              Vastu Shastra and spiritual practices create harmonious energy
              flow in your spaces, attracting prosperity, health, and happiness
              through alignment with cosmic forces.
            </p>
            <div className="energy-hero-buttons">
              <button
                className="energy-btn-primary"
                onClick={handleConsultation}
              >
                <FaCalendarAlt /> Energy Consultation
              </button>
              <button
                className="energy-btn-secondary"
                onClick={() => handleTabChange("vastu")}
              >
                <FaHome /> Learn Vastu Principles
              </button>
            </div>
          </div>
          <div className="energy-hero-visual">
            <div className="energy-mandala">
              <GiFlowerTwirl />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="energy-tabs-container">
        <div className="energy-tabs">
          <button
            className={`energy-tab ${activeTab === "vastu" ? "active" : ""}`}
            onClick={() => handleTabChange("vastu")}
          >
            <FaHome /> Vastu Energy
          </button>
          <button
            className={`energy-tab ${activeTab === "elements" ? "active" : ""}`}
            onClick={() => handleTabChange("elements")}
          >
            <GiWindmill /> Five Elements
          </button>
          <button
            className={`energy-tab ${activeTab === "brain" ? "active" : ""}`}
            onClick={() => handleTabChange("brain")}
          >
            <FaBrain /> Energy Centers
          </button>
          <button
            className={`energy-tab ${activeTab === "remedies" ? "active" : ""}`}
            onClick={() => handleTabChange("remedies")}
          >
            <GiEnergyShield /> Energy Remedies
          </button>
          <button
            className={`energy-tab ${activeTab === "practices" ? "active" : ""}`}
            onClick={() => handleTabChange("practices")}
          >
            <GiSpiralBloom /> Spiritual Practices
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="energy-main-content">
        {/* Vastu Principles Section */}
        {activeTab === "vastu" && (
          <section className="energy-section vastu-section">
            <div className="section-header">
              <h2>
                <GiAncientColumns /> Vastu Shastra Energy
              </h2>
              <p>Ancient science of harmonizing spaces with cosmic energies</p>
            </div>

            <div className="vastu-tree">
              <div className="tree-root">
                <GiTreeRoots className="root-icon" />
                <h3>{vastuPrinciples.root}</h3>
                <p>
                  Balancing the five elements in your environment creates
                  harmony and prosperity
                </p>
              </div>

              <div className="tree-branches">
                {vastuPrinciples.branches.map((branch, branchIndex) => (
                  <div key={branchIndex} className="branch-group">
                    <div className="branch-title">
                      <h4>{branch.name}</h4>
                    </div>
                    <div className="branch-principles">
                      {branch.principles.map((principle, principleIndex) => (
                        <div key={principleIndex} className="principle-card">
                          <div className="principle-header">
                            <div className="principle-icon">
                              {principle.direction ? `🧭` : `⚡`}
                            </div>
                            <div className="principle-info">
                              <h5>{principle.direction || principle.zone}</h5>
                              <span className="principle-element">
                                {principle.element}
                              </span>
                            </div>
                          </div>
                          <div className="principle-details">
                            <p className="principle-description">
                              <strong>
                                {principle.deity || principle.energy}:
                              </strong>{" "}
                              {principle.room || principle.color}
                            </p>
                            <p className="principle-tip">
                              {principle.tip || principle.importance}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="vastu-benefits">
              <h3>Benefits of Proper Vastu Alignment</h3>
              <div className="benefits-grid">
                <div className="energy-benefit-card">
                  <div className="energy-benefit-icon">💰</div>
                  <h4>Financial Prosperity</h4>
                  <p>
                    Attracts wealth and abundance through proper energy flow
                  </p>
                </div>
                <div className="energy-benefit-card">
                  <div className="energy-benefit-icon">❤️</div>
                  <h4>Relationship Harmony</h4>
                  <p>Creates loving environment and strengthens bonds</p>
                </div>
                <div className="energy-benefit-card">
                  <div className="energy-benefit-icon">🧠</div>
                  <h4>Mental Peace</h4>
                  <p>Reduces stress and promotes mental clarity</p>
                </div>
                <div className="energy-benefit-card">
                  <div className="energy-benefit-icon">🌱</div>
                  <h4>Physical Health</h4>
                  <p>Enhances vitality and supports healing processes</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Five Elements Section */}
        {activeTab === "elements" && (
          <section className="energy-section elements-section">
            <div className="section-header">
              <h2>
                <GiWindmill /> The Five Elements
              </h2>
              <p>
                Understanding and balancing the fundamental energies of
                existence
              </p>
            </div>

            <div className="elements-wheel">
              <div className="wheel-center">
                <GiSpiralBloom className="center-icon" />
                <h4>Energy Balance</h4>
              </div>
              {energyElements.map((element, index) => (
                <div
                  key={element.id}
                  className={`wheel-element ${activeEnergy?.id === element.id ? "active" : ""}`}
                  style={{
                    "--angle": `${index * 72}deg`,
                    "--element-color": element.color,
                  }}
                  onClick={() => handleElementClick(element)}
                >
                  <div className="element-icon">{element.icon}</div>
                  <span className="element-name">{element.name}</span>
                </div>
              ))}
            </div>

            {activeEnergy && (
              <div className="element-details">
                <div className="element-detail-card">
                  <div className="detail-header">
                    <div
                      className="detail-icon"
                      style={{ color: activeEnergy.color }}
                    >
                      {activeEnergy.icon}
                    </div>
                    <div className="detail-title">
                      <h3>{activeEnergy.name}</h3>
                      <p className="detail-description">
                        {activeEnergy.description}
                      </p>
                    </div>
                  </div>

                  <div className="detail-content">
                    <div className="detail-column">
                      <h4>Benefits</h4>
                      <ul className="benefits-list">
                        {activeEnergy.benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <FaStar className="list-icon" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-column">
                      <h4>Vastu Tip</h4>
                      <p className="vastu-tip">{activeEnergy.vastuTip}</p>
                    </div>
                    <div className="detail-column">
                      <h4>Imbalances</h4>
                      <ul className="imbalances-list">
                        {activeEnergy.imbalances.map((imbalance, idx) => (
                          <li key={idx}>
                            <FaBalanceScale className="list-icon" />
                            {imbalance}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="elements-cta">
              <div className="cta-content">
                <h3>Need Element Balancing?</h3>
                <p>
                  Our energy experts can analyze your space and provide
                  personalized recommendations for balancing the five elements.
                </p>
                <button className="cta-btn" onClick={handleConsultation}>
                  <FaUserFriends /> Get Element Analysis
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Brain Energy Centers Section */}
        {activeTab === "brain" && (
          <section className="energy-section brain-section">
            <div className="section-header">
              <h2>
                <FaBrain /> Energy Centers (Chakras)
              </h2>
              <p>
                Understanding and balancing your body's energy centers for
                holistic well-being
              </p>
            </div>

            <div className="chakra-system">
              <div className="chakra-tree">
                <div className="chakra-instruction">
                  Click on a chakra point to reveal its power
                </div>
                <div className="chakra-human-outline">
                  {/* Simplified human shape for context */}
                  <svg viewBox="0 0 100 200" className="human-svg">
                    <path
                      d="M50,10 C60,10 65,18 65,28 C65,38 58,45 50,45 C42,45 35,38 35,28 C35,18 40,10 50,10 Z M50,45 C70,50 80,60 80,100 L80,160 C80,170 70,170 70,160 L70,120 L55,120 L55,190 C55,200 45,200 45,190 L45,120 L30,120 L30,160 C30,170 20,170 20,160 L20,100 C20,60 30,50 50,45 Z"
                      fill="rgba(142, 36, 170, 0.1)"
                    />
                  </svg>
                </div>
                <div className="chakra-spine">
                  {brainEnergyCenters.map((chakra, index) => (
                    <div
                      key={chakra.id}
                      className={`chakra-point ${activeEnergy?.id === chakra.id ? "active" : ""}`}
                      style={{
                        top: `${15 + index * 12}%`,
                        "--chakra-color": chakra.color,
                      }}
                      onClick={() => handleElementClick(chakra)}
                    >
                      <div className="chakra-dot"></div>
                      <span className="chakra-label">{chakra.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeEnergy && (
                <div className="chakra-details">
                  <div className="chakra-detail-card">
                    <div className="chakra-header">
                      <div
                        className="chakra-color-circle"
                        style={{ backgroundColor: activeEnergy.color }}
                      ></div>
                      <div className="chakra-info">
                        <h3>{activeEnergy.name} Chakra</h3>
                        <div className="chakra-meta">
                          <span className="location">
                            <FaTree /> {activeEnergy.location}
                          </span>
                          <span className="element">
                            <FaFire /> {activeEnergy.element}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chakra-functions">
                      <div className="function-section">
                        <h4>Primary Function</h4>
                        <p>{activeEnergy.function}</p>
                      </div>
                      <div className="function-section">
                        <h4>Signs of Imbalance</h4>
                        <p>{activeEnergy.imbalance}</p>
                      </div>
                      <div className="function-section">
                        <h4>Balancing Practices</h4>
                        <p>{activeEnergy.balance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="chakra-practices">
              <h3>Daily Chakra Balancing Routine</h3>
              <div className="practices-grid">
                <div className="practice-card">
                  <div className="practice-icon">☀️</div>
                  <h4>Morning Activation</h4>
                  <p>Sun salutation with chakra-focused breathwork</p>
                  <span className="practice-time">15 minutes</span>
                </div>
                <div className="practice-card">
                  <div className="practice-icon">🌙</div>
                  <h4>Evening Balance</h4>
                  <p>Meditation with chakra visualization and chanting</p>
                  <span className="practice-time">20 minutes</span>
                </div>
                <div className="practice-card">
                  <div className="practice-icon">💎</div>
                  <h4>Crystal Healing</h4>
                  <p>Place corresponding crystals on chakra points</p>
                  <span className="practice-time">10 minutes</span>
                </div>
                <div className="practice-card">
                  <div className="practice-icon">🎵</div>
                  <h4>Sound Therapy</h4>
                  <p>Listen to chakra-specific frequencies and mantras</p>
                  <span className="practice-time">15 minutes</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Energy Remedies Section */}
        {activeTab === "remedies" && (
          <section className="energy-section remedies-section">
            <div className="section-header">
              <h2>
                <GiEnergyShield /> Energy Remedies
              </h2>
              <p>Simple yet powerful solutions for common energy imbalances</p>
            </div>

            <div className="remedies-grid">
              {energyRemedies.map((remedy) => (
                <div
                  key={remedy.id}
                  className="remedy-card"
                  onClick={() => handleRemedySelect(remedy)}
                >
                  <div className="remedy-header">
                    <div className="remedy-icon">{remedy.icon}</div>
                    <div className="remedy-title">
                      <h3>{remedy.problem}</h3>
                      <p className="remedy-solution">{remedy.solution}</p>
                    </div>
                  </div>

                  <div className="remedy-science">
                    <p>{remedy.science}</p>
                  </div>

                  <button className="remedy-learn-btn">
                    Learn Implementation →
                  </button>
                </div>
              ))}
            </div>

            <div className="energy-flow">
              <h3>Understanding Energy Flow</h3>
              <div className="flow-cards">
                {energyFlows.map((flow) => (
                  <div key={flow.id} className="flow-card">
                    <h4>{flow.name}</h4>
                    <p className="flow-description">{flow.description}</p>
                    <div className="flow-details">
                      <div className="flow-detail">
                        <strong>Source:</strong> {flow.source}
                      </div>
                      <div className="flow-detail">
                        <strong>Path:</strong> {flow.path}
                      </div>
                      <div className="flow-detail">
                        <strong>Blockage:</strong> {flow.blockage}
                      </div>
                      <div className="flow-detail">
                        <strong>Enhancement:</strong> {flow.enhancement}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Spiritual Practices Section */}
        {activeTab === "practices" && (
          <section className="energy-section practices-section">
            <div className="section-header">
              <h2>
                <GiSpiralBloom /> Spiritual Practices
              </h2>
              <p>
                Daily routines to enhance your spiritual energy and connection
              </p>
            </div>

            <div className="practices-tree">
              <div className="tree-root">
                <GiTreeRoots className="root-icon" />
                <h3>{spiritualPractices.root}</h3>
                <p>
                  Consistent practice builds spiritual strength and energy
                  awareness
                </p>
              </div>

              <div className="practice-levels">
                {spiritualPractices.practices.map((level, levelIndex) => (
                  <div key={levelIndex} className="practice-level">
                    <div className="level-header">
                      <div className="level-number">{levelIndex + 1}</div>
                      <h4>{level.level} Level</h4>
                    </div>

                    <div className="level-practices">
                      {level.practices.map((practice, practiceIndex) => (
                        <div key={practiceIndex} className="practice-item">
                          <div className="practice-header">
                            <h5>{practice.name}</h5>
                            <span className="practice-duration">
                              {practice.duration}
                            </span>
                          </div>
                          <p className="practice-benefit">{practice.benefit}</p>
                          <div className="practice-meta">
                            <span className="practice-time">
                              <FaCalendarAlt /> {practice.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="spiritual-benefits">
              <h3>Benefits of Regular Spiritual Practice</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">✨</div>
                  <div className="benefit-content">
                    <h4>Increased Intuition</h4>
                    <p>Enhanced ability to sense energy and receive guidance</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-content">
                    <h4>Energy Protection</h4>
                    <p>
                      Natural shield against negative energies and influences
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🌌</div>
                  <div className="benefit-content">
                    <h4>Cosmic Connection</h4>
                    <p>
                      Deeper connection with universal energy and consciousness
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💫</div>
                  <div className="benefit-content">
                    <h4>Manifestation Power</h4>
                    <p>
                      Increased ability to manifest desires through focused
                      energy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Remedy Modal */}
      {showRemedyModal && selectedRemedy && (
        <div
          className="remedy-modal-overlay"
          onClick={() => setShowRemedyModal(false)}
        >
          <div className="remedy-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowRemedyModal(false)}
            >
              ×
            </button>

            <div className="modal-header">
              <div className="modal-remedy-icon">{selectedRemedy.icon}</div>
              <div className="modal-remedy-info">
                <h2>{selectedRemedy.problem}</h2>
                <p className="modal-solution">{selectedRemedy.solution}</p>
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3>Scientific Basis</h3>
                <p>{selectedRemedy.science}</p>
              </div>

              <div className="modal-section">
                <h3>Implementation Steps</h3>
                <ol className="steps-list">
                  {selectedRemedy.steps.map((step, idx) => (
                    <li key={idx}>
                      <span className="step-number">{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="modal-section">
                <h3>Additional Tips</h3>
                <ul className="tips-list">
                  <li>Perform with positive intention and focus</li>
                  <li>Maintain consistency for best results</li>
                  <li>Combine with regular meditation practice</li>
                  <li>Keep your environment clean and organized</li>
                </ul>
              </div>

              <div className="modal-actions">
                <button
                  className="modal-action-btn primary"
                  onClick={handleConsultation}
                >
                  <FaUserFriends /> Personalized Guidance
                </button>
                <button
                  className="modal-action-btn secondary"
                  onClick={() => setShowRemedyModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnergyPage;
