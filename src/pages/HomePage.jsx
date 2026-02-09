import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHands,
  FaHeartbeat,
  FaSeedling,
  FaMagnet,
  FaPalette,
  FaBrain,
  FaWind,
  FaFlask,
  FaBalanceScale,
  FaGem,
  FaUser,
  FaLightbulb,
  FaQuoteRight,
  FaArrowRight,
  FaLeaf,
  FaBookOpen,
  FaPlayCircle,
} from "react-icons/fa";
import {
  GiLotus,
  GiStoneSphere,
  GiDirectionSigns,
  GiFlowerPot,
  GiCrystalBall,
  GiSpiralArrow,
} from "react-icons/gi";
import { IoMdFlower } from "react-icons/io";
import { MdHealing, MdNature } from "react-icons/md";
import { TbMassage } from "react-icons/tb";
import { BsDroplet } from "react-icons/bs";
import "../styles/HomePage.css";

const Homepage = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [affirmation, setAffirmation] = useState(
    "I am in perfect harmony with the universe's healing energy",
  );

  // Updated Services data based on actual offerings
  const services = [
    {
      id: 1,
      title: "Acupressure Therapy",
      description:
        "Acupressure is a holistic healing technique that uses gentle pressure on specific points of the body to stimulate natural energy flow. It helps release tension, reduce pain, and restore balance—promoting overall physical and emotional wellness without needles or medication.",
      icon: <FaHands />,
      color: "var(--earth)",
      category: "therapy",
    },
    {
      id: 2,
      title: "Acupuncture Therapy",
      description:
        "Acupuncture involves inserting very fine, sterile needles at strategic points on the body to enhance energy circulation and support healing. It is widely used to relieve pain, improve internal organ function, and harmonize the mind–body system.",
      icon: <GiDirectionSigns />,
      color: "#ff6b6b",
      category: "therapy",
    },
    {
      id: 3,
      title: "Auricular Therapy",
      description:
        "Auricular therapy focuses on stimulating specific points on the ear that correspond to different organs and systems. By activating these points through pressure or needles, this therapy helps reduce stress, pain, addictions, and emotional imbalances.",
      icon: <MdHealing />,
      color: "var(--purple)",
      category: "therapy",
    },
    {
      id: 4,
      title: "Byol Magnet Therapy",
      description:
        "Byol magnet therapy uses therapeutic magnets placed on meridian points to balance the body's bio-energy. It helps regulate circulation, reduce inflammation, and restore energetic harmony, offering a safe and non-invasive healing method.",
      icon: <FaMagnet />,
      color: "#3cb371",
      category: "energy",
    },
    {
      id: 5,
      title: "Seed Therapy",
      description:
        "Seed therapy involves applying natural seeds on acupressure points to gently stimulate healing. The seeds exert mild pressure that enhances energy flow, making this therapy effective for pain relief, digestion issues, hormonal balance, and stress reduction.",
      icon: <FaSeedling />,
      color: "var(--green)",
      category: "therapy",
    },
    {
      id: 6,
      title: "Colour Therapy",
      description:
        "Colour therapy uses different colors and light frequencies to influence mental, emotional, and physical well-being. Each color has a specific vibration that can help uplift mood, calm the mind, energize the body, or promote spiritual balance.",
      icon: <FaPalette />,
      color: "#9370db",
      category: "energy",
    },
    {
      id: 7,
      title: "Marma Therapy",
      description:
        "Marma therapy is an ancient Ayurvedic technique that works on vital energy points known as “marma.” Gentle stimulation of these points helps detoxify the body, calm the nervous system, improve circulation, and support natural healing.",
      icon: <TbMassage />,
      color: "var(--gold)",
      category: "therapy",
    },
    {
      id: 8,
      title: "Neurochakra Quantum Healing",
      description:
        "This powerful healing approach combines chakra balancing with quantum energy techniques to restore energetic alignment. It helps clear deep-rooted emotional blockages, enhance mental clarity, and elevate spiritual well-being.",
      icon: <FaBrain />,
      color: "#00bcd4",
      category: "healing",
    },
    {
      id: 9,
      title: "Pranic Healing",
      description:
        "Pranic Healing works by cleansing and energizing the body's aura and chakras. By removing stagnant or diseased energy and replacing it with fresh prana, this therapy promotes physical healing, emotional stability, and inner peace.",
      icon: <FaWind />,
      color: "#4caf50",
      category: "healing",
    },
    {
      id: 10,
      title: "Bach Flower Remedy",
      description:
        "Bach Flower Remedies are natural, gentle plant-based essences that support emotional harmony. They help address issues like stress, fear, anxiety, indecisiveness, and emotional overwhelm—allowing the mind to regain clarity and balance.",
      icon: <GiFlowerPot />,
      color: "#ff9800",
      category: "natural",
    },
    {
      id: 11,
      title: "Pendulum Dowsing",
      description:
        "Pendulum dowsing is an energy-based diagnostic tool used to gain insights into health, emotions, and decision-making. It helps identify energy imbalances and guide healing processes by tapping into the subconscious and universal energy field.",
      icon: <GiSpiralArrow />,
      color: "#795548",
      category: "divination",
    },
    {
      id: 12,
      title: "Reiki Healing",
      description:
        "Reiki healing channels universal life force energy through the practitioner’s hands to the client. This soothing therapy promotes deep relaxation, reduces stress, enhances emotional well-being, and supports the body’s natural healing abilities.",
      icon: <MdHealing />,
      color: "#e91e63",
      category: "healing",
    },
    {
      id: 13,
      title: "Astrology Consultation",
      description:
        "Astrology consultation analyses your birth chart to reveal personality traits, life patterns, opportunities, and challenges. It offers guidance on relationships, career, health, and life purpose—helping you make informed and aligned decisions.",
      icon: <GiCrystalBall />,
      color: "#9c27b0",
      category: "consultation",
    },
    {
      id: 14,
      title: "Numerology Consultation",
      description:
        "Numerology interprets the vibrational meaning of numbers in your date of birth and name. It provides insights into your strengths, life path, destiny, challenges, and favorable periods—supporting your journey with clarity and direction",
      icon: <FaGem />,
      color: "#2196f3",
      category: "consultation",
    },
  ];

  // Featured articles updated to match services
  const articles = [
    {
      id: 1,
      title: "Understanding Energy Healing",
      excerpt:
        "Discover how different energy healing modalities work and which might be right for you.",
      category: "Healing",
      readTime: "6 min",
      image: "energy-healing",
    },
    {
      id: 2,
      title: "The Science Behind Acupressure",
      excerpt:
        "Learn how pressure point therapy can relieve pain and improve overall wellness.",
      category: "Therapy",
      readTime: "5 min",
      image: "acupressure",
    },
    {
      id: 3,
      title: "Chakra Balancing Techniques",
      excerpt:
        "Simple daily practices to balance your energy centers for better health.",
      category: "Wellness",
      readTime: "7 min",
      image: "chakra-balancing",
    },
  ];

  // Daily affirmations updated
  const affirmations = [
    "My body is a temple of healing energy and vitality.",
    "Every cell in my body vibrates with health and harmony.",
    "I release all blockages and allow healing energy to flow freely.",
    "I am connected to the universal source of healing and wisdom.",
    "My chakras are balanced, and my energy flows in perfect harmony.",
    "I attract health, vitality, and wellness into my life daily.",
  ];

  // Filter services
  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

  // Get random affirmation
  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  };

  const handleConsultationClick = () => {
    navigate("/consultation");
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceLearnMore = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterParam = queryParams.get("filter");
    if (filterParam) {
      setActiveFilter(filterParam);
      // Small delay to ensure state update and then scroll
      setTimeout(() => {
        scrollToServices();
      }, 100);
    }
  }, [location.search]);

  useEffect(() => {
    const interval = setInterval(getRandomAffirmation, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`homepage-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-symbols">
            {["☯", "♾️", "𓆃", "⚕️", "🌀"].map((symbol, index) => (
              <span key={index} className="floating-symbol">
                {symbol}
              </span>
            ))}
          </div>
          <div className="energy-orb hero-orb-1"></div>
          <div className="energy-orb hero-orb-2"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-branding">
              <span className="brand-name">Vibrant Aura</span>
              <span className="brand-tagline">Holistic Center</span>
            </div>
            <h1 className="hero-title">
              Embrace
              <span className="highlight"> Holistic Healing</span>
            </h1>
            <p className="hero-subtitle">
              Experience ancient and modern healing techniques combined for your
              complete wellness journey. From energy healing to therapeutic
              consultations, find your path to balance.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleConsultationClick}>
                <GiLotus /> Book Consultation
              </button>
              <button className="btn-secondary" onClick={scrollToServices}>
                <FaPlayCircle /> View Services
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="sacred-geometry">
              <GiLotus />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-item">
            <div className="stat-number">14+</div>
            <div className="stat-label">Healing Modalities</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Sessions Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">96%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="core-principles-section">
        <div className="section-header">
          <h2>
            <GiLotus /> Our Healing Philosophy
          </h2>
          <p>
            Three fundamental principles guide every healing journey at Vibrant
            Aura Holistic Center (VAHC)
          </p>
        </div>

        <div className="principles-grid">
          <div className="principle-card">
            <div className="principle-icon-wrapper">
              <FaBalanceScale className="principle-icon" />
            </div>
            <h3>Holistic Balance</h3>
            <p>
              Addressing mind, body, and soul as interconnected aspects of
              complete wellness and healing.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-icon-wrapper">
              <MdNature className="principle-icon" />
            </div>
            <h3>Natural Harmony</h3>
            <p>
              Utilizing natural energy flows and elements to restore the body's
              innate healing capabilities.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-icon-wrapper">
              <FaHeartbeat className="principle-icon" />
            </div>
            <h3>Personalized Care</h3>
            <p>
              Customized treatment plans based on individual energy patterns and
              specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="services-section">
        <div className="section-header">
          <h2>Healing Services & Therapies</h2>
          <p>Explore our comprehensive range of holistic healing modalities</p>
        </div>

        {/* Service Filters */}
        <div className="service-filters">
          {[
            "all",
            "therapy",
            "healing",
            "energy",
            "natural",
            "divination",
            "consultation",
          ].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all" && "All Services"}
              {filter === "therapy" && "Therapies"}
              {filter === "healing" && "Energy Healing"}
              {filter === "energy" && "Energy Work"}
              {filter === "natural" && "Natural Remedies"}
              {filter === "divination" && "Divination"}
              {filter === "consultation" && "Consultations"}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <span className="service-category">
                  {service.category.charAt(0).toUpperCase() +
                    service.category.slice(1)}
                </span>
                {/* <button
                  className="service-action"
                  onClick={() => handleServiceLearnMore(service.id)}
                >
                  Learn More <FaArrowRight />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Affirmation */}
      <section className="affirmation-section">
        <div className="affirmation-container">
          <div className="affirmation-content">
            <div className="affirmation-icon">
              <FaQuoteRight />
            </div>
            <div className="affirmation-text">
              <h3>Healing Affirmation of the Day</h3>
              <p className="affirmation">"{affirmation}"</p>
              <button
                className="refresh-affirmation"
                onClick={getRandomAffirmation}
              >
                <FaLeaf /> New Affirmation
              </button>
            </div>
          </div>
          <div className="affirmation-background">
            <IoMdFlower />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {/* <section className="articles-section">
        <div className="section-header">
          <h2>
            <FaBookOpen /> Wellness Wisdom
          </h2>
          <p>Explore articles and insights about holistic healing practices</p>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image">
                <img
                  src={`/images/homepage/vastu-tips.jpg`}
                  alt={article.title}
                  className="article-img"
                />
                <div className="image-overlay"></div>
                <span className="article-category">{article.category}</span>
              </div>
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="article-footer">
                  <span className="read-time">{article.readTime} read</span>
                  <button className="read-more">
                    Read Article <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Begin Your Healing Journey Today With VAHC</h2>
            <p>
              Experience personalized healing tailored to your unique energy
              patterns and wellness goals. Our expert practitioners are ready to
              guide you. We bridge the gap between ancient wisdom and modern
              energetic science, offering a diverse spectrum of non-invasive
              therapies designed to restore balance and ignite your inner
              vitality.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleConsultationClick}>
                <FaUser /> Book Free Assessment
              </button>
            </div>
          </div>
          <div className="cta-decoration">
            <GiStoneSphere />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
