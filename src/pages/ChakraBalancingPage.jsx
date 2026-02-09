import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaBrain,
  FaSun,
  FaMoon,
  FaEye,
  FaVolumeUp,
  FaStar,
  FaGem,
  FaSeedling,
  FaWater,
  FaFire,
  FaMountain,
  FaUsers,
  FaCloud,
  FaHandsHelping,
  FaBalanceScale,
  FaPlayCircle,
  FaBookOpen,
  FaLeaf,
  FaUserCheck,
  FaChartLine,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  GiLotus,
  GiMeditation,
  GiStoneSphere,
  GiSpinningTop,
  GiSevenPointedStar,
  GiCrystalBall,
  GiEnergyArrow,
  GiSparkSpirit,
  GiAbstract024,
  GiTurtleShell,
  GiPalmTree,
  GiSpiralShell,
} from "react-icons/gi";
import { IoMdFlower } from "react-icons/io";
import "../styles/ChakraBalancingPage.css";

const ChakraBalancingPage = ({ darkMode }) => {
  const navigate = useNavigate();
  const [activeChakra, setActiveChakra] = useState("crown");
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Chakra Data
  const chakras = [
    {
      id: "crown",
      name: "Crown Chakra",
      sanskrit: "Sahasrara",
      color: "#9400D3",
      location: "Top of head",
      element: "Thought",
      mantra: "Silence",
      icon: <GiLotus />,
      description: "Spirituality, enlightenment",
      balanced: "Inner peace, connection to divine",
      blocked: "Spiritual disconnection, close-mindedness",
      healing: [
        "Silent meditation",
        "Violet foods (eggplant, grapes)",
        "Connection to higher self",
        "Clear quartz crystals",
        "Study spiritual texts",
      ],
    },
    {
      id: "third-eye",
      name: "Third Eye",
      sanskrit: "Ajna",
      color: "#4B0082",
      location: "Forehead between eyes",
      element: "Light",
      mantra: "OM",
      icon: <FaEye />,
      description: "Intuition, insight, vision",
      balanced: "Clear intuition, imagination",
      blocked: "Confusion, lack of direction",
      healing: [
        "Meditation practice",
        "Indigo foods (purple cabbage)",
        "Dream journaling",
        "Lapis lazuli crystals",
        "Visualization exercises",
      ],
    },
    {
      id: "throat",
      name: "Throat Chakra",
      sanskrit: "Vishuddha",
      color: "#0000FF",
      location: "Throat",
      element: "Sound",
      mantra: "HAM",
      icon: <FaVolumeUp />,
      description: "Communication, truth, expression",
      balanced: "Clear communication, honesty",
      blocked: "Fear of speaking, dishonesty",
      healing: [
        "Singing or chanting",
        "Blue foods (blueberries)",
        "Journaling practice",
        "Speak your truth",
        "Blue lace agate crystals",
      ],
    },
    {
      id: "heart",
      name: "Heart Chakra",
      sanskrit: "Anahata",
      color: "#00FF00",
      location: "Center of chest",
      element: "Air",
      mantra: "YAM",
      icon: <FaHeart />,
      description: "Love, compassion, connection",
      balanced: "Unconditional love, empathy",
      blocked: "Grief, loneliness, bitterness",
      healing: [
        "Heart-opening poses",
        "Green foods (leafy greens)",
        "Acts of kindness",
        "Forgiveness practice",
        "Rose quartz crystals",
      ],
    },
    {
      id: "solar",
      name: "Solar Plexus",
      sanskrit: "Manipura",
      color: "#FFFF00",
      location: "Upper abdomen",
      element: "Fire",
      mantra: "RAM",
      icon: <FaSun />,
      description: "Power, confidence, will",
      balanced: "Confidence, motivation, clarity",
      blocked: "Low self-esteem, indecision",
      healing: [
        "Sun salutations",
        "Yellow foods (bananas, corn)",
        "Breathing exercises",
        "Set clear intentions",
        "Practice gratitude",
      ],
    },
    {
      id: "sacral",
      name: "Sacral Chakra",
      sanskrit: "Swadhisthana",
      color: "#FFA500",
      location: "Lower abdomen",
      element: "Water",
      mantra: "VAM",
      icon: <FaWater />,
      description: "Creativity, sexuality, emotions",
      balanced: "Creative flow, healthy emotions",
      blocked: "Creative blocks, emotional instability",
      healing: [
        "Hip-opening yoga",
        "Orange foods (carrots, oranges)",
        "Creative expression",
        "Dance movement",
        "Hydrate with water",
      ],
    },
    {
      id: "root",
      name: "Root Chakra",
      sanskrit: "Muladhara",
      color: "#FF0000",
      location: "Base of spine",
      element: "Earth",
      mantra: "LAM",
      icon: <FaMountain />,
      description: "Foundation, security, survival",
      balanced: "Feeling safe, grounded, secure",
      blocked: "Fear, anxiety, insecurity",
      healing: [
        "Walking barefoot on grass",
        "Red foods (beets, apples)",
        "Grounding meditation",
        "Wear red clothing",
        "Connect with nature",
      ],
    },
  ];

  // Healing Techniques
  const techniques = [
    {
      id: 1,
      title: "Meditation",
      description: "Focused meditation on each chakra center",
      duration: "10-20 minutes",
      icon: <GiMeditation />,
    },
    {
      id: 2,
      title: "Sound Therapy",
      description: "Using specific mantras and frequencies",
      duration: "15 minutes",
      icon: <FaVolumeUp />,
    },
    {
      id: 3,
      title: "Crystal Healing",
      description: "Place specific crystals on chakra points",
      duration: "20-30 minutes",
      icon: <FaGem />,
    },
    {
      id: 4,
      title: "Yoga Poses",
      description: "Targeted asanas for each chakra",
      duration: "15-30 minutes",
      icon: <GiLotus />,
    },
    {
      id: 5,
      title: "Aromatherapy",
      description: "Essential oils for chakra activation",
      duration: "10-15 minutes",
      icon: <IoMdFlower />,
    },
    {
      id: 6,
      title: "Color Therapy",
      description: "Visualization with chakra colors",
      duration: "10 minutes",
      icon: <FaSun />,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Maya Sharma",
      role: "Yoga Teacher",
      content:
        "Chakra balancing transformed my energy levels. I feel more grounded and connected than ever before.",
      chakra: "Root & Crown",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Software Engineer",
      content:
        "The throat chakra work helped me express myself confidently in meetings. Life-changing!",
      chakra: "Throat",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Artist",
      content:
        "Sacral chakra healing unleashed my creative potential. My art has reached new dimensions.",
      chakra: "Sacral",
    },
  ];

  // Daily Practices
  const dailyPractices = [
    {
      id: 1,
      practice: "Morning chakra meditation",
      time: "10 min",
      icon: <FaSun />,
    },
    {
      id: 2,
      practice: "Chakra-affirming mantras",
      time: "5 min",
      icon: <FaVolumeUp />,
    },
    { id: 3, practice: "Color visualization", time: "3 min", icon: <FaEye /> },
    {
      id: 4,
      practice: "Evening chakra check-in",
      time: "7 min",
      icon: <FaMoon />,
    },
  ];

  const handleBookSession = () => {
    navigate("/consultation");
  };

  const selectedChakra = chakras.find((chakra) => chakra.id === activeChakra);

  return (
    <div className={`chakra-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="chakra-hero-section">
        <div className="chakra-hero-background">
          <div className="chakra-energy-flow">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="energy-line"
                style={{ animationDelay: `${i * 0.5}s` }}
              ></div>
            ))}
          </div>
          <div className="chakra-wheel">
            <GiSevenPointedStar />
          </div>
        </div>

        <div className="chakra-hero-content">
          <div className="chakra-hero-text">
            <h1 className="chakra-hero-title">
              Chakra
              <span className="chakra-hero-highlight"> Balancing</span>& Healing
            </h1>
            <p className="chakra-hero-subtitle">
              Harmonize your seven energy centers for optimal physical,
              emotional, and spiritual well-being. Discover ancient wisdom for
              modern healing.
            </p>
            <div className="chakra-hero-buttons">
              <button
                className="chakra-btn-primary"
                onClick={handleBookSession}
              >
                <FaUserCheck /> Book Chakra Session
              </button>
              {/* <button
                className="chakra-btn-secondary"
                onClick={() => setShowVideo(true)}
              >
                <FaPlayCircle /> Watch Introduction
              </button> */}
            </div>
          </div>
          <div className="chakra-hero-image">
            <div className="chakra-geometry">
              <GiSevenPointedStar />
            </div>
          </div>
        </div>
      </section>

      {/* Chakra Introduction */}
      <section className="chakra-intro-section">
        <div className="section-container">
          <div className="section-header">
            <h2>
              <GiSevenPointedStar /> The Seven Energy Centers
            </h2>
            <p>
              Your chakras are spinning wheels of energy that govern different
              aspects of your being
            </p>
          </div>

          <div className="chakra-overview">
            <p className="chakra-intro-text">
              According to ancient Indian tradition, there are seven main
              chakras that run along your spine, from the base to the crown of
              your head. Each chakra has its own vibrational frequency, color,
              and governs specific functions that make up your physical,
              emotional, and spiritual health. When balanced, energy flows
              freely through these centers, leading to optimal health and
              vitality.
            </p>

            <div className="chakra-quick-facts">
              <div className="fact-card">
                <div className="fact-icon">
                  <GiSpinningTop />
                </div>
                <h3>Spinning Energy</h3>
                <p>Chakras are constantly rotating energy vortexes</p>
              </div>
              <div className="fact-card">
                <div className="fact-icon">
                  <FaBalanceScale />
                </div>
                <h3>Balance is Key</h3>
                <p>Neither overactive nor underactive is ideal</p>
              </div>
              <div className="fact-card">
                <div className="fact-icon">
                  <GiEnergyArrow />
                </div>
                <h3>Energy Flow</h3>
                <p>Energy should flow freely through all chakras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chakra Exploration Section */}
      <section className="chakra-exploration-section">
        <div className="section-container">
          <div className="section-header">
            <h2>
              <FaEye /> Explore Each Chakra
            </h2>
            <p>
              Click on a chakra point on the human map to learn about its
              characteristics and healing methods
            </p>
          </div>

          <div className="chakra-system">
            <div className="chakra-tree">
              <div className="chakra-instruction">
                Click on a chakra point to reveal its power
              </div>
              <div className="chakra-human-outline">
                <svg viewBox="0 0 100 200" className="human-svg">
                  <path
                    d="M50,10 C60,10 65,18 65,28 C65,38 58,45 50,45
       C42,45 35,38 35,28 C35,18 40,10 50,10 Z
       M50,45 C70,50 80,60 80,100 L80,160
       C80,170 70,170 70,160 L70,120
       L55,120 L55,190 C55,200 45,200 45,190
       L45,120 L30,120 L30,160
       C30,170 20,170 20,160 L20,100
       C20,60 30,50 50,45 Z"
                    fill="rgba(142, 36, 170, 0.1)"
                  />
                </svg>
              </div>
              <div className="chakra-spine">
                {chakras.map((chakra) => {
                  const positions = {
                    crown: isMobile ? "5%" : "10%",
                    "third-eye": isMobile ? "12%" : "18%",
                    throat: isMobile ? "20%" : "25%",
                    heart: isMobile ? "35%" : "40%",
                    solar: isMobile ? "45%" : "52%",
                    sacral: isMobile ? "56%" : "65%",
                    root: isMobile ? "68%" : "77%",
                  };

                  return (
                    <div
                      key={chakra.id}
                      className={`chakra-point ${activeChakra === chakra.id ? "active" : ""}`}
                      style={{
                        top: positions[chakra.id],
                        "--chakra-color": chakra.color,
                      }}
                      onClick={() => setActiveChakra(chakra.id)}
                    >
                      <div className="chakra-dot"></div>
                      <span className="chakra-label">{chakra.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Redesigned Chakra Details */}
            {selectedChakra && (
              <div
                className="chakra-details"
                style={{ "--chakra-color": selectedChakra.color }}
              >
                <div className="chakra-detail-card">
                  <div className="chakra-detail-header">
                    <div className="chakra-detail-title">
                      <div
                        className="chakra-main-icon"
                        style={{ color: selectedChakra.color }}
                      >
                        {selectedChakra.icon}
                      </div>
                      <div>
                        <h2>{selectedChakra.name}</h2>
                        <p className="chakra-sanskrit-large">
                          {selectedChakra.sanskrit}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="chakra-detail-content">
                    {/* Quick Info Grid */}
                    <div className="chakra-info-grid">
                      <div className="info-box">
                        <div className="info-label">
                          <FaMountain /> Location
                        </div>
                        <div className="info-value">
                          {selectedChakra.location}
                        </div>
                      </div>
                      <div className="info-box">
                        <div className="info-label">
                          <FaFire /> Element
                        </div>
                        <div className="info-value">
                          {selectedChakra.element}
                        </div>
                      </div>
                      <div className="info-box">
                        <div className="info-label">
                          <FaVolumeUp /> Mantra
                        </div>
                        <div className="info-value mantra">
                          {selectedChakra.mantra}
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="description-box">
                      <p>{selectedChakra.description}</p>
                    </div>

                    {/* States Section */}
                    <div className="states-container">
                      <div className="state-column">
                        <div className="state-header balanced">
                          <FaCheckCircle /> Balanced State
                        </div>
                        <div className="state-subtitle">
                          Signs of a healthy energy flow
                        </div>
                        <ul className="state-list">
                          {selectedChakra.balanced
                            .split(", ")
                            .map((item, index) => (
                              <li key={index} className="state-item">
                                <span className="state-dot" />
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="state-column">
                        <div className="state-header blocked">
                          <GiTurtleShell /> Blocked State
                        </div>
                        <div className="state-subtitle">
                          Signs of energy imbalance
                        </div>
                        <ul className="state-list">
                          {selectedChakra.blocked
                            .split(", ")
                            .map((item, index) => (
                              <li key={index} className="state-item">
                                <span className="state-dot" />
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>

                    {/* Healing Section */}
                    <div className="healing-section">
                      <div className="healing-title">
                        <FaSeedling /> Healing Practices
                      </div>
                      <div className="healing-grid">
                        {selectedChakra.healing.map((practice, index) => (
                          <div key={index} className="healing-card">
                            <span className="healing-card-dot" />
                            {practice}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}

      {/* Techniques Section */}
      <section className="techniques-section">
        <div className="section-container">
          <div className="section-header">
            <h2>
              <FaBookOpen /> Healing Techniques
            </h2>
            <p>Various methods to balance and align your chakras</p>
          </div>

          <div className="techniques-grid">
            {techniques.map((technique) => (
              <div key={technique.id} className="technique-card">
                <div className="technique-icon">{technique.icon}</div>
                <h3>{technique.title}</h3>
                <p>{technique.description}</p>
                <div className="technique-duration">
                  <FaCalendarAlt /> {technique.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Practice */}
      <section className="daily-practice-section">
        <div className="section-container">
          <div className="section-header">
            <h2>
              <FaChartLine /> Daily Chakra Practice
            </h2>
            <p>Simple practices to maintain chakra balance daily</p>
          </div>

          <div className="practice-timeline">
            {dailyPractices.map((practice) => (
              <div key={practice.id} className="practice-step">
                <div className="step-icon">{practice.icon}</div>
                <div className="step-content">
                  <h4>{practice.practice}</h4>
                  <div className="step-time">{practice.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="chakra-testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2>
              <FaUsers /> Transformation Stories
            </h2>
            <p>Real experiences from our chakra balancing community</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <p>{testimonial.content}</p>
                </div>
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="testimonial-chakra">
                    <span>Healed:</span> {testimonial.chakra}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="chakra-cta-section">
        <div className="section-container">
          <div className="chakra-cta-card">
            <div className="cta-content">
              <h2>Ready for Energetic Transformation?</h2>
              <p>
                Book a personalized chakra balancing session with our certified
                energy healers. Experience deep healing and alignment.
              </p>
              <div className="cta-stats">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Sessions Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Report Improvement</div>
                </div>
                <div className="stat">
                  <div className="stat-number">7</div>
                  <div className="stat-label">Chakras Balanced</div>
                </div>
              </div>
              <button className="chakra-cta-btn" onClick={handleBookSession}>
                <GiCrystalBall /> Book Your Session Now
              </button>
            </div>
            <div className="cta-decoration">
              <GiSpiralShell />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChakraBalancingPage;
