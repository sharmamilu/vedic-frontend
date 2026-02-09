import React, { useState } from "react";
import {
  FaStar,
  FaUser,
  FaChartLine,
  FaHeart,
  FaSun,
  FaMoon,
  FaBookOpen,
  FaQuestionCircle,
  FaCalendarAlt,
  FaPhone,
  FaWhatsapp,
  FaGem,
  FaSeedling,
  FaWater,
  FaFire,
  FaWind,
  FaMountain,
} from "react-icons/fa";
import {
  GiStarSwirl,
  GiLotus,
  GiStarFormation,
  GiEgyptianTemple,
  GiMoon,
  GiAbstract047,
} from "react-icons/gi";
import "../styles/AstrologyPage.css";
import { useNavigate } from "react-router-dom";

const AstrologyPage = ({ darkMode }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("understanding");
  const [selectedZodiac, setSelectedZodiac] = useState("aries");
  const [showConsultModal, setShowConsultModal] = useState(false);

  const handleConsultationClick = () => {
    navigate("/consultation");
  };
  // Zodiac Signs Data - Static, evergreen content
  const zodiacSigns = [
    {
      id: "aries",
      name: "Aries",
      symbol: "♈",
      dates: "Mar 21 - Apr 19",
      element: "Fire",
      planet: "Mars",
      color: "#FF6B6B",
      icon: <FaFire />,
      traits:
        "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
      strength: "Leadership, initiative, courage",
      weakness: "Impatience, moodiness, short-tempered",
      compatibility: "Leo, Sagittarius, Gemini",
    },
    {
      id: "taurus",
      name: "Taurus",
      symbol: "♉",
      dates: "Apr 20 - May 20",
      element: "Earth",
      planet: "Venus",
      color: "#51CF66",
      icon: <FaMountain />,
      traits: "Reliable, patient, practical, devoted, responsible, stable",
      strength: "Reliability, patience, practicality",
      weakness: "Stubbornness, possessiveness, uncompromising",
      compatibility: "Virgo, Capricorn, Cancer",
    },
    {
      id: "gemini",
      name: "Gemini",
      symbol: "♊",
      dates: "May 21 - Jun 20",
      element: "Air",
      planet: "Mercury",
      color: "#FFD43B",
      icon: <FaWind />,
      traits: "Gentle, affectionate, curious, adaptable, outgoing, intelligent",
      strength: "Communication, adaptability, curiosity",
      weakness: "Nervousness, inconsistency, indecisiveness",
      compatibility: "Libra, Aquarius, Aries",
    },
    {
      id: "cancer",
      name: "Cancer",
      symbol: "♋",
      dates: "Jun 21 - Jul 22",
      element: "Water",
      planet: "Moon",
      color: "#339AF0",
      icon: <FaWater />,
      traits:
        "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
      strength: "Loyalty, emotional depth, nurturing",
      weakness: "Moodiness, pessimism, suspicion",
      compatibility: "Scorpio, Pisces, Taurus",
    },
    {
      id: "leo",
      name: "Leo",
      symbol: "♌",
      dates: "Jul 23 - Aug 22",
      element: "Fire",
      planet: "Sun",
      color: "#FF922B",
      icon: <FaSun />,
      traits:
        "Creative, passionate, generous, warm-hearted, cheerful, humorous",
      strength: "Creativity, generosity, leadership",
      weakness: "Arrogance, stubbornness, inflexibility",
      compatibility: "Aries, Sagittarius, Gemini",
    },
    {
      id: "virgo",
      name: "Virgo",
      symbol: "♍",
      dates: "Aug 23 - Sep 22",
      element: "Earth",
      planet: "Mercury",
      color: "#94D82D",
      icon: <FaSeedling />,
      traits: "Loyal, analytical, kind, hardworking, practical",
      strength: "Analytical mind, practicality, attention to detail",
      weakness: "Worry, shyness, overly critical",
      compatibility: "Taurus, Capricorn, Cancer",
    },
    {
      id: "libra",
      name: "Libra",
      symbol: "♎",
      dates: "Sep 23 - Oct 22",
      element: "Air",
      planet: "Venus",
      color: "#C2255C",
      icon: <FaGem />,
      traits: "Cooperative, diplomatic, gracious, fair-minded, social",
      strength: "Diplomacy, fairness, social intelligence",
      weakness: "Indecisiveness, avoids confrontations, self-pity",
      compatibility: "Gemini, Aquarius, Leo",
    },
    {
      id: "scorpio",
      name: "Scorpio",
      symbol: "♏",
      dates: "Oct 23 - Nov 21",
      element: "Water",
      planet: "Pluto",
      color: "#5C7CFA",
      icon: <FaWater />,
      traits: "Brave, resourceful, passionate, stubborn, true friend",
      strength: "Resourcefulness, courage, passion",
      weakness: "Distrusting, jealous, secretive",
      compatibility: "Cancer, Pisces, Virgo",
    },
    {
      id: "sagittarius",
      name: "Sagittarius",
      symbol: "♐",
      dates: "Nov 22 - Dec 21",
      element: "Fire",
      planet: "Jupiter",
      color: "#20C997",
      icon: <FaFire />,
      traits: "Generous, idealistic, great sense of humor, optimistic",
      strength: "Optimism, adventure, philosophical mind",
      weakness: "Promises more than can deliver, very impatient",
      compatibility: "Aries, Leo, Aquarius",
    },
    {
      id: "capricorn",
      name: "Capricorn",
      symbol: "♑",
      dates: "Dec 22 - Jan 19",
      element: "Earth",
      planet: "Saturn",
      color: "#CED4DA",
      icon: <FaMountain />,
      traits: "Responsible, disciplined, self-control, good managers",
      strength: "Responsibility, discipline, self-control",
      weakness: "Know-it-all, unforgiving, condescending",
      compatibility: "Taurus, Virgo, Scorpio",
    },
    {
      id: "aquarius",
      name: "Aquarius",
      symbol: "♒",
      dates: "Jan 20 - Feb 18",
      element: "Air",
      planet: "Uranus",
      color: "#4DABF7",
      icon: <FaWind />,
      traits: "Progressive, original, independent, humanitarian",
      strength: "Originality, independence, humanitarianism",
      weakness: "Runs from emotional expression, temperamental",
      compatibility: "Gemini, Libra, Sagittarius",
    },
    {
      id: "pisces",
      name: "Pisces",
      symbol: "♓",
      dates: "Feb 19 - Mar 20",
      element: "Water",
      planet: "Neptune",
      color: "#DA77F2",
      icon: <FaWater />,
      traits: "Compassionate, artistic, intuitive, gentle, wise",
      strength: "Compassion, artistic ability, intuition",
      weakness: "Fearful, overly trusting, sad, desire to escape reality",
      compatibility: "Cancer, Scorpio, Capricorn",
    },
  ];

  // Types of Astrology - Static content
  const astrologyTypes = [
    {
      id: "vedic",
      name: "Vedic Astrology",
      icon: <GiLotus />,
      description:
        "Ancient Indian system based on sidereal zodiac. Uses 27 nakshatras (lunar mansions) and dasha systems for timing events.",
      features: [
        "Focuses on karma and destiny",
        "Uses Moon sign as primary indicator",
        "Includes remedies and rituals",
        "Detailed dashas (planetary periods)",
      ],
    },
    {
      id: "western",
      name: "Western Astrology",
      icon: <FaStar />,
      description:
        "Based on tropical zodiac. Emphasizes psychological interpretation and personal growth.",
      features: [
        "Focus on Sun signs",
        "Psychological approach",
        "Horary astrology for questions",
        "Modern planetary interpretations",
      ],
    },
    {
      id: "chinese",
      name: "Chinese Astrology",
      icon: <GiAbstract047 />,
      description:
        "Based on lunar calendar and 12-year animal cycle. Incorporates five elements theory.",
      features: [
        "12 animal zodiac signs",
        "Five elements (Wood, Fire, Earth, Metal, Water)",
        "Yin and Yang balance",
        "Compatibility based on birth year",
      ],
    },
  ];

  // Planets Explanation - Static content
  const planets = [
    {
      name: "Sun",
      significance: "Core personality, ego, vitality, father figure",
      icon: <FaSun />,
      color: "#FFD700",
    },
    {
      name: "Moon",
      significance: "Emotions, instincts, mother figure, subconscious",
      icon: <FaMoon />,
      color: "#C0C0C0",
    },
    {
      name: "Mercury",
      significance: "Communication, intellect, logic, learning",
      icon: <GiStarFormation />,
      color: "#A9A9A9",
    },
    {
      name: "Venus",
      significance: "Love, beauty, relationships, values, harmony",
      icon: <FaHeart />,
      color: "#FFB6C1",
    },
    {
      name: "Mars",
      significance: "Energy, action, desire, courage, aggression",
      icon: <FaFire />,
      color: "#FF4500",
    },
    {
      name: "Jupiter",
      significance: "Growth, expansion, wisdom, luck, spirituality",
      icon: <FaGem />,
      color: "#DAA520",
    },
    {
      name: "Saturn",
      significance: "Discipline, responsibility, limitations, karma",
      icon: <FaMountain />,
      color: "#708090",
    },
  ];

  // FAQ Data - Static content
  const faqs = [
    {
      question: "Is astrology scientifically proven?",
      answer:
        "Astrology is considered a metaphysical science rather than a physical science. While it's not recognized by mainstream science, it has been practiced for thousands of years across cultures as a system of understanding personality and life patterns based on celestial movements.",
    },
    {
      question: "What information is needed for a birth chart?",
      answer:
        "An accurate birth chart requires your exact date of birth, time of birth (as precise as possible), and place of birth. The time is crucial for determining your Ascendant (Rising sign) and house placements.",
    },
    {
      question: "Can astrology predict the future?",
      answer:
        "Astrology doesn't predict fixed events but indicates trends, tendencies, and potential opportunities or challenges. It's best used as a tool for self-awareness and making informed decisions rather than fortune-telling.",
    },
    {
      question: "What's the difference between Sun, Moon, and Rising signs?",
      answer:
        "Your Sun sign represents your core personality, Moon sign shows your emotional nature, and Rising sign (Ascendant) represents how others see you and your approach to life.",
    },
    {
      question: "How accurate is astrology?",
      answer:
        "Accuracy depends on the precision of birth data, the skill of the astrologer, and proper interpretation. Many people find personal resonance with their chart interpretations when done professionally.",
    },
  ];

  // Myth vs Reality - Static content
  const myths = [
    {
      myth: "Astrology is fortune-telling",
      reality:
        "Astrology is about understanding patterns and potentials, not predicting fixed outcomes",
    },
    {
      myth: "All people of the same sign are identical",
      reality:
        "Your complete birth chart has multiple factors - sun, moon, rising signs, and planetary aspects make each chart unique",
    },
    {
      myth: "Astrology controls your life",
      reality:
        "Astrology suggests influences and tendencies - you always have free will to make choices",
    },
    {
      myth: "Bad aspects mean bad life",
      reality:
        "Challenging aspects often indicate areas for growth and development, not inevitable misfortune",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const currentZodiac =
    zodiacSigns.find((z) => z.id === selectedZodiac) || zodiacSigns[0];

  return (
    <div className={`astrology-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="astrology-hero-section">
        <div className="astrology-hero-background">
          <div className="astrology-floating-symbols">
            {[
              "♈",
              "♉",
              "♊",
              "♋",
              "♌",
              "♍",
              "♎",
              "♏",
              "♐",
              "♑",
              "♒",
              "♓",
            ].map((symbol, index) => (
              <span
                key={index}
                className="astrology-floating-symbol"
                style={{ left: `${10 + index * 7}%` }}
              >
                {symbol}
              </span>
            ))}
          </div>
          <div className="astrology-energy-orb astrology-orb-1"></div>
          <div className="astrology-energy-orb astrology-orb-2"></div>
        </div>

        <div className="astrology-hero-content">
          <div className="astrology-hero-text">
            <h1 className="astrology-hero-title">
              Discover Your
              <span className="astrology-highlight"> Cosmic</span> Blueprint
            </h1>
            <p className="astrology-hero-subtitle">
              Astrology is the ancient science of understanding life through
              planetary movements. For thousands of years, it has guided people
              toward clarity, purpose, and self-awareness.
            </p>
            <div className="astrology-hero-buttons">
              <button
                className="astrology-btn-primary"
                onClick={handleConsultationClick}
              >
                <FaCalendarAlt /> Book Consultation
              </button>
              <button
                className="astrology-btn-secondary"
                onClick={() => handleTabChange("zodiac")}
              >
                <FaStar /> Explore Zodiac Signs
              </button>
            </div>
          </div>
          <div className="astrology-hero-image">
            <div className="astrology-zodiac-wheel">
              <GiStarSwirl />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Tabs */}
      <div className="astrology-tabs-container">
        <div className="astrology-tabs">
          <button
            className={`astrology-tab ${activeTab === "understanding" ? "active" : ""}`}
            onClick={() => handleTabChange("understanding")}
          >
            <FaBookOpen /> Understanding Astrology
          </button>
          <button
            className={`astrology-tab ${activeTab === "zodiac" ? "active" : ""}`}
            onClick={() => handleTabChange("zodiac")}
          >
            <FaStar /> Zodiac Signs
          </button>
          <button
            className={`astrology-tab ${activeTab === "planets" ? "active" : ""}`}
            onClick={() => handleTabChange("planets")}
          >
            <GiStarFormation /> Planets & Houses
          </button>
          <button
            className={`astrology-tab ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => handleTabChange("faq")}
          >
            <FaQuestionCircle /> FAQ
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="astrology-main-content">
        {/* Understanding Astrology Section */}
        {activeTab === "understanding" && (
          <section className="astrology-section understanding-section">
            <div className="section-header">
              <h2>
                <FaBookOpen /> Understanding Astrology
              </h2>
              <p>The ancient science of celestial influences on human life</p>
            </div>

            <div className="content-card">
              <h3>What is Astrology?</h3>
              <p className="content-text">
                Astrology studies the relationship between celestial movements
                and human experiences. Your birth chart is a cosmic snapshot of
                the sky at the moment you were born, revealing personality
                traits, strengths, challenges, and life patterns.
              </p>

              <div className="key-points">
                <div className="key-point">
                  <div className="point-icon">🌌</div>
                  <h4>Based on Celestial Patterns</h4>
                  <p>Studies planetary positions and their symbolic meanings</p>
                </div>
                <div className="key-point">
                  <div className="point-icon">🧭</div>
                  <h4>Guidance Tool</h4>
                  <p>
                    Helps understand life patterns and make informed choices
                  </p>
                </div>
                <div className="key-point">
                  <div className="point-icon">⚖️</div>
                  <h4>Self-Awareness</h4>
                  <p>Reveals personality traits and potential growth areas</p>
                </div>
              </div>

              <div className="myths-section">
                <h3>Myths vs Reality</h3>
                <div className="myths-grid">
                  {myths.map((item, index) => (
                    <div key={index} className="myth-card">
                      <div className="myth-header">
                        <span className="myth-label">❌ Myth</span>
                        <span className="reality-label">✅ Reality</span>
                      </div>
                      <div className="myth-content">
                        <p className="myth-text">{item.myth}</p>
                        <p className="reality-text">{item.reality}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="types-section">
                <h3>Types of Astrology</h3>
                <div className="types-grid">
                  {astrologyTypes.map((type) => (
                    <div key={type.id} className="type-card">
                      <div
                        className="type-icon"
                        style={{ color: currentZodiac.color }}
                      >
                        {type.icon}
                      </div>
                      <h4>{type.name}</h4>
                      <p>{type.description}</p>
                      <ul className="type-features">
                        {type.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Zodiac Signs Section */}
        {activeTab === "zodiac" && (
          <section className="astrology-section zodiac-section">
            <div className="section-header">
              <h2>
                <FaStar /> The Zodiac Signs
              </h2>
              <p>Explore the 12 zodiac signs and their characteristics</p>
            </div>

            {/* Zodiac Selector */}
            <div className="zodiac-selector">
              <div className="zodiac-grid">
                {zodiacSigns.map((zodiac) => (
                  <button
                    key={zodiac.id}
                    className={`zodiac-sign-btn ${selectedZodiac === zodiac.id ? "active" : ""}`}
                    onClick={() => setSelectedZodiac(zodiac.id)}
                    style={{ borderColor: zodiac.color }}
                  >
                    <span className="zodiac-symbol">{zodiac.symbol}</span>
                    <span className="zodiac-name">{zodiac.name}</span>
                    <span className="zodiac-dates">{zodiac.dates}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Zodiac Detail Card */}
            <div className="zodiac-detail-card">
              <div className="zodiac-header">
                <div
                  className="zodiac-icon"
                  style={{ color: currentZodiac.color }}
                >
                  {currentZodiac.icon}
                </div>
                <div className="zodiac-title">
                  <h3>
                    {currentZodiac.name} {currentZodiac.symbol}
                  </h3>
                  <p className="zodiac-dates">{currentZodiac.dates}</p>
                </div>
              </div>

              <div className="zodiac-details">
                <div className="detail-row">
                  <span className="detail-label">Element:</span>
                  <span className="detail-value">{currentZodiac.element}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Ruling Planet:</span>
                  <span className="detail-value">{currentZodiac.planet}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Best Matches:</span>
                  <span className="detail-value">
                    {currentZodiac.compatibility}
                  </span>
                </div>
              </div>

              <div className="zodiac-traits">
                <h4>Key Personality Traits</h4>
                <p>{currentZodiac.traits}</p>

                <div className="trait-grid">
                  <div className="trait-box strength">
                    <h5>Strengths</h5>
                    <p>{currentZodiac.strength}</p>
                  </div>
                  <div className="trait-box weakness">
                    <h5>Growth Areas</h5>
                    <p>{currentZodiac.weakness}</p>
                  </div>
                </div>
              </div>

              <div className="zodiac-cta">
                <p>
                  Want to know how {currentZodiac.name} energy manifests in your
                  unique birth chart?
                </p>
                <button
                  className="consult-btn"
                  onClick={() => setShowConsultModal(true)}
                >
                  <FaUser /> Get Personalized Analysis
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Planets Section */}
        {activeTab === "planets" && (
          <section className="astrology-section planets-section">
            <div className="section-header">
              <h2>
                <GiStarFormation /> Planets & Astrological Houses
              </h2>
              <p>Understanding the building blocks of your birth chart</p>
            </div>

            <div className="content-card">
              <h3>The Planets in Astrology</h3>
              <p className="content-text">
                Each planet represents different aspects of human experience.
                Their positions in your birth chart reveal how these energies
                manifest in your life.
              </p>

              <div className="planets-grid">
                {planets.map((planet, index) => (
                  <div key={index} className="planet-card">
                    <div className="planet-header">
                      <div
                        className="planet-icon"
                        style={{ color: planet.color }}
                      >
                        {planet.icon}
                      </div>
                      <h4>{planet.name}</h4>
                    </div>
                    <p className="planet-significance">{planet.significance}</p>
                  </div>
                ))}
              </div>

              <div className="houses-section">
                <h3>The 12 Astrological Houses</h3>
                <p className="content-text">
                  Houses represent different areas of life experience. The sign
                  and planets in each house show how you express yourself in
                  that life department.
                </p>

                <div className="houses-grid">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                    <div key={num} className="house-card">
                      <div className="house-number">{num}</div>
                      <div className="house-info">
                        <h5>House {num}</h5>
                        <p className="house-area">
                          {num === 1 && "Self, personality, appearance"}
                          {num === 2 && "Money, values, possessions"}
                          {num === 3 && "Communication, siblings, short trips"}
                          {num === 4 && "Home, family, roots"}
                          {num === 5 && "Creativity, romance, children"}
                          {num === 6 && "Health, work, service"}
                          {num === 7 && "Partnerships, marriage, others"}
                          {num === 8 && "Transformation, shared resources"}
                          {num === 9 && "Travel, higher education, philosophy"}
                          {num === 10 && "Career, reputation, public life"}
                          {num === 11 && "Friends, groups, aspirations"}
                          {num === 12 && "Spirituality, subconscious, solitude"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chart-explanation">
                <h3>Your Birth Chart Explained</h3>
                <div className="explanation-content">
                  <div className="explanation-point">
                    <h4>Sun Sign</h4>
                    <p>Your core identity and life purpose</p>
                  </div>
                  <div className="explanation-point">
                    <h4>Moon Sign</h4>
                    <p>Your emotional nature and inner world</p>
                  </div>
                  <div className="explanation-point">
                    <h4>Rising Sign (Ascendant)</h4>
                    <p>How you present yourself to the world</p>
                  </div>
                  <div className="explanation-point">
                    <h4>Planetary Aspects</h4>
                    <p>Relationships between planets in your chart</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <section className="astrology-section faq-section">
            <div className="section-header">
              <h2>
                <FaQuestionCircle /> Frequently Asked Questions
              </h2>
              <p>Common questions about astrology answered</p>
            </div>

            <div className="content-card">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* <div className="consultation-cta">
                <div className="cta-content">
                  <GiEgyptianTemple className="cta-icon" />
                  <div className="cta-text">
                    <h3>Personalized Astrology Guidance</h3>
                    <p>
                      While general information is helpful, your birth chart is
                      as unique as your fingerprint. Get a detailed analysis
                      tailored specifically to you.
                    </p>
                    <div className="cta-benefits">
                      <span className="benefit">
                        ✓ Detailed birth chart analysis
                      </span>
                      <span className="benefit">✓ Personalized guidance</span>
                      <span className="benefit">
                        ✓ Timing for important decisions
                      </span>
                      <span className="benefit">✓ Life purpose insights</span>
                    </div>
                  </div>
                </div>
                <div className="cta-buttons">
                  <button
                    className="cta-btn-primary"
                    onClick={() => setShowConsultModal(true)}
                  >
                    <FaCalendarAlt /> Book Consultation
                  </button>
                  <button className="cta-btn-secondary">
                    <FaWhatsapp /> Chat Now
                  </button>
                </div>
              </div> */}
            </div>
          </section>
        )}
      </div>

      {/* Consultation Modal */}
      {showConsultModal && (
        <div
          className="consult-modal-overlay"
          onClick={() => setShowConsultModal(false)}
        >
          <div className="consult-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowConsultModal(false)}
            >
              ×
            </button>

            <div className="modal-header">
              <h2>
                <FaUser /> Personalized Astrology Consultation
              </h2>
              <p>Get insights tailored specifically to your birth chart</p>
            </div>

            <div className="modal-content">
              <div className="consult-options">
                <div className="consult-option">
                  <h3>Basic Reading</h3>
                  <p className="price">$49</p>
                  <ul className="option-features">
                    <li>Detailed birth chart analysis</li>
                    <li>Sun, Moon, Rising sign interpretation</li>
                    <li>Key planetary aspects explained</li>
                    <li>30-minute consultation</li>
                  </ul>
                  <button className="option-select-btn">Select Plan</button>
                </div>

                <div className="consult-option featured">
                  <div className="featured-badge">Most Popular</div>
                  <h3>Comprehensive Analysis</h3>
                  <p className="price">$99</p>
                  <ul className="option-features">
                    <li>Complete birth chart with all houses</li>
                    <li>Career and relationship insights</li>
                    <li>1-year forecast overview</li>
                    <li>Personalized remedies if needed</li>
                    <li>60-minute detailed consultation</li>
                  </ul>
                  <button className="option-select-btn primary">
                    Select Plan
                  </button>
                </div>

                <div className="consult-option">
                  <h3>Yearly Forecast</h3>
                  <p className="price">$149</p>
                  <ul className="option-features">
                    <li>Complete birth chart analysis</li>
                    <li>Detailed 12-month forecast</li>
                    <li>Major transit predictions</li>
                    <li>Personal growth guidance</li>
                    <li>Two 60-minute sessions</li>
                  </ul>
                  <button className="option-select-btn">Select Plan</button>
                </div>
              </div>

              <div className="consult-form">
                <h3>Schedule Your Consultation</h3>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <select className="form-input">
                    <option>Select Consultation Type</option>
                    <option>Basic Reading ($49)</option>
                    <option>Comprehensive Analysis ($99)</option>
                    <option>Yearly Forecast ($149)</option>
                  </select>
                </div>
                <button className="submit-consult-btn">
                  <FaCalendarAlt /> Schedule Now
                </button>
              </div>
            </div>

            <div className="modal-footer">
              <p className="footer-note">
                <FaPhone /> Need immediate assistance? Call us at{" "}
                <strong>+1 (555) 123-4567</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AstrologyPage;
