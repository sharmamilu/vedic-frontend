import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAffirmations } from "../utils/apis";
import {
  FaStarAndCrescent,
  FaMoon,
  FaSun,
  FaHands,
  FaBookOpen,
  FaPlayCircle,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaQuoteRight,
  FaArrowRight,
  FaLeaf,
  FaGem,
  FaHome,
  FaSeedling,
  FaWater,
} from "react-icons/fa";
import {
  GiLotus,
  GiMeditation,
  GiStoneSphere,
  GiDirectionSigns,
} from "react-icons/gi";
import { IoMdFlower } from "react-icons/io";
import { MdNaturePeople } from "react-icons/md";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

const Homepage = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [dailyHoroscope, setDailyHoroscope] = useState("");
  const [moonPhase, setMoonPhase] = useState("Waxing Crescent");
  const [auspiciousTime, setAuspiciousTime] = useState("06:00 AM - 08:00 AM");
  const [affirmation, setAffirmation] = useState(
    "I am a channel for divine energy and wisdom",
  );

  // Services data
  const services = [
    {
      id: 1,
      title: "Vastu Consultation",
      description:
        "Harmonize your living space with ancient Vastu principles for peace and prosperity.",
      icon: <FaHome />,
      color: "var(--gold)",
      category: "vastu",
    },
    {
      id: 2,
      title: "Birth Chart Analysis",
      description:
        "Detailed astrological reading based on your exact time, date, and place of birth.",
      icon: <FaStarAndCrescent />,
      color: "var(--purple)",
      category: "astrology",
    },
    {
      id: 3,
      title: "Meditation Guidance",
      description:
        "Personalized meditation techniques to calm your mind and elevate your spirit.",
      icon: <GiMeditation />,
      color: "var(--green)",
      category: "meditation",
    },
    {
      id: 4,
      title: "Energy Healing",
      description:
        "Reiki and pranic healing sessions to balance your chakras and life force.",
      icon: <FaHands />,
      color: "#ff6b6b",
      category: "healing",
    },
    {
      id: 5,
      title: "Yoga & Wellness",
      description:
        "Holistic yoga practices for physical health and spiritual growth.",
      icon: <GiLotus />,
      color: "#3cb371",
      category: "yoga",
    },
    {
      id: 6,
      title: "Spiritual Counseling",
      description:
        "One-on-one guidance for your spiritual journey and life purpose.",
      icon: <MdNaturePeople />,
      color: "var(--earth)",
      category: "consultation",
    },
  ];

  // Featured articles
  const articles = [
    {
      id: 1,
      title: "5 Vastu Tips for Positive Energy",
      excerpt:
        "Simple changes to attract abundance and harmony into your home.",
      category: "Vastu",
      readTime: "5 min",
      image: "vastu-tips",
    },
    {
      id: 2,
      title: "Understanding Your Moon Sign",
      excerpt: "How the moon influences your emotions and subconscious mind.",
      category: "Astrology",
      readTime: "7 min",
      image: "moon-sign",
    },
    {
      id: 3,
      title: "Meditation for Beginners",
      excerpt: "Step-by-step guide to starting your meditation practice today.",
      category: "Meditation",
      readTime: "6 min",
      image: "meditation-beginner",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Yoga Instructor",
      content:
        "The Vastu consultation transformed my home into a sanctuary of peace. Highly recommended!",
      avatar: "PS",
    },
    {
      id: 2,
      name: "Raj Patel",
      role: "Business Owner",
      content:
        "Birth chart analysis gave me clarity on my life path and business decisions.",
      avatar: "RP",
    },
    {
      id: 3,
      name: "Anjali Mehta",
      role: "Teacher",
      content:
        "Daily meditation guidance helped me find balance during stressful times.",
      avatar: "AM",
    },
  ];

  // Daily affirmations
  const affirmations = [
    "I am surrounded by divine light and protection.",
    "My home is filled with positive energy and abundance.",
    "I attract peace and harmony into my life daily.",
    "My chakras are balanced and my energy flows freely.",
    "I am connected to the universal wisdom and guidance.",
    "Every day, I grow spiritually and emotionally.",
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

  const handleClick = () => {
    console.log("clicked");
    navigate("/consultation");
  };

  // Fetch daily horoscope (simulated)
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setDailyHoroscope(
        "Today is a day for introspection and connecting with your inner self. The planets align to support spiritual growth.",
      );
    }, 1000);

    // Change affirmation every 30 seconds
    const interval = setInterval(getRandomAffirmation, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`homepage-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-symbols">
            {["ॐ", "☸", "卐", "꧁", "꧂"].map((symbol, index) => (
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
            <h1 className="hero-title">
              Discover Your
              <span className="highlight"> Spiritual</span>
              Path
            </h1>
            <p className="hero-subtitle">
              Ancient wisdom meets modern life. Experience Vastu, Astrology,
              Meditation, and Spiritual Healing tailored for your journey.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleClick}>
                <GiLotus /> Begin Your Journey
              </button>
              <button className="btn-secondary">
                <FaPlayCircle /> Watch Introduction
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="sacred-geometry">
              <GiStoneSphere />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Souls Guided</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Spiritual Support</div>
          </div>
        </div>
      </section>

      {/* Daily Wisdom Section */}
      <section className="daily-wisdom-section">
        <div className="section-header">
          <h2>
            <FaSun /> Today's Spiritual Guidance
          </h2>
          <div className="wisdom-date">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        <div className="wisdom-cards">
          {/* Daily Horoscope */}
          <div className="wisdom-card horoscope-card">
            <div className="card-header">
              <FaStarAndCrescent />
              <h3>Daily Horoscope</h3>
            </div>
            <p className="horoscope-text">
              {dailyHoroscope || "Loading your spiritual guidance for today..."}
            </p>
            <button className="card-action">
              Read Full Horoscope <FaArrowRight />
            </button>
          </div>

          {/* Moon Phase */}
          <div className="wisdom-card moon-card">
            <div className="card-header">
              <FaMoon />
              <h3>Moon Phase</h3>
            </div>
            <div className="moon-phase-display">
              <div className="moon-visual">{moonPhase}</div>
              <div className="moon-details">
                <p>Illumination: 45%</p>
                <p>Next Full Moon: 7 days</p>
              </div>
            </div>
            <button className="card-action">
              View Lunar Calendar <FaCalendarAlt />
            </button>
          </div>

          {/* Auspicious Time */}
          <div className="wisdom-card time-card">
            <div className="card-header">
              <GiDirectionSigns />
              <h3>Auspicious Time</h3>
            </div>
            <div className="time-display">
              <div className="time-slot">{auspiciousTime}</div>
              <p>Best for meditation and spiritual practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Spiritual Services</h2>
          <p>
            Choose from our comprehensive range of spiritual guidance services
          </p>
        </div>

        {/* Service Filters */}
        <div className="service-filters">
          {[
            "all",
            "vastu",
            "astrology",
            "meditation",
            "healing",
            "yoga",
            "consultation",
          ].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all"
                ? "All Services"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
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
                <span className="service-category">{service.category}</span>
                <button className="service-action">
                  Learn More <FaArrowRight />
                </button>
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
              <h3>Daily Affirmation</h3>
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
      <section className="articles-section">
        <div className="section-header">
          <h2>
            <FaBookOpen /> Spiritual Wisdom
          </h2>
          <p>Explore our collection of spiritual articles and guides</p>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image">
                <img
                  src={`/images/homepage/${article.image}.jpg`}
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
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>
            <FaUsers /> Spiritual Journeys
          </h2>
          <p>Stories of transformation from our spiritual community</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Begin Your Spiritual Transformation?</h2>
            <p>
              Join thousands who have found peace, purpose, and prosperity
              through spiritual guidance.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <FaSeedling /> Book Free Consultation
              </button>
              <button className="btn-secondary">
                <FaWater /> Discover Our Courses
              </button>
            </div>
          </div>
          <div className="cta-decoration">
            <GiLotus />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
