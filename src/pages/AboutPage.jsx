import React from "react";
import {
  FaUsers,
  FaHandsHelping,
  FaAward,
  FaHeart,
  FaLeaf,
  FaGlobeAsia,
  FaBalanceScale,
  FaMedal,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  GiSpiralBottle,
  GiAncientRuins,
  GiMeditation,
  GiCrystalBall,
  GiStoneCrafting,
} from "react-icons/gi";
import "../styles/AboutPage.css";

const AboutPage = ({ darkMode }) => {
  // Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Anjali Sharma",
      role: "Lead Astrologer & Spiritual Guide",
      experience: "25+ years",
      specialization: "Vedic Astrology, Life Guidance",
      icon: <GiCrystalBall />,
      color: "#43A047",
    },
    {
      id: 2,
      name: "Ravi Verma",
      role: "Vastu Shastra Expert",
      experience: "18+ years",
      specialization: "Energy Balancing, Space Harmony",
      icon: <GiAncientRuins />,
      color: "#8E24AA",
    },
    {
      id: 3,
      name: "Priya Mehta",
      role: "Meditation & Wellness Coach",
      experience: "15+ years",
      specialization: "Mindfulness, Stress Management",
      icon: <GiMeditation />,
      color: "#2196F3",
    },
    {
      id: 4,
      name: "Aarav Singh",
      role: "Energy Healing Practitioner",
      experience: "12+ years",
      specialization: "Reiki, Chakra Healing",
      icon: <GiStoneCrafting />,
      color: "#FF9800",
    },
  ];

  // Values Data
  const coreValues = [
    {
      id: 1,
      title: "Authenticity",
      description: "We provide genuine guidance without commercial pressure",
      icon: <FaHeart />,
      color: "#E91E63",
    },
    {
      id: 2,
      title: "Holistic Approach",
      description: "Balancing mind, body, and spirit for complete wellness",
      icon: <FaBalanceScale />,
      color: "#43A047",
    },
    {
      id: 3,
      title: "Ancient Wisdom",
      description: "Blending traditional practices with modern understanding",
      icon: <GiAncientRuins />,
      color: "#8E24AA",
    },
    {
      id: 4,
      title: "Compassion",
      description: "Treating every individual with empathy and respect",
      icon: <FaHandsHelping />,
      color: "#2196F3",
    },
  ];

  // Milestones Data
  const milestones = [
    {
      year: "2005",
      event: "Founded with a vision to make ancient wisdom accessible",
    },
    {
      year: "2010",
      event: "Expanded team with certified experts from diverse traditions",
    },
    { year: "2015", event: "Reached 10,000+ guided individuals worldwide" },
    { year: "2020", event: "Launched digital consultation platform" },
    { year: "2024", event: "25+ expert team serving global community" },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "The guidance I received transformed my career path. Truly life-changing!",
      rating: 5,
    },
    {
      id: 2,
      name: "Raj Patel",
      location: "Mumbai, India",
      text: "Authentic Vastu advice that improved my home's energy significantly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Gonzalez",
      location: "Madrid, Spain",
      text: "Meditation sessions helped me find peace during challenging times.",
      rating: 4,
    },
  ];

  return (
    <div className={`about-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            Our Journey of
            <span className="about-highlight"> Spiritual Guidance</span>
          </h1>
          <p className="about-hero-subtitle">
            For nearly two decades, we've been bridging ancient wisdom with
            modern life, helping thousands find clarity, balance, and purpose.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-icon">
              <FaGlobeAsia />
            </div>
            <h2>Our Mission</h2>
            <p>
              To make authentic spiritual guidance accessible to everyone,
              blending ancient practices with contemporary understanding to help
              individuals navigate life's challenges with clarity and
              confidence.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaLeaf />
            </div>
            <h2>Our Vision</h2>
            <p>
              A world where spiritual wisdom empowers every individual to live
              harmoniously, make conscious choices, and find inner peace amidst
              life's complexities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2 className="section-title">
              <GiSpiralBottle /> Our Humble Beginnings
            </h2>
            <p className="story-text">
              What started as a small circle of spiritual seekers in 2005 has
              grown into a trusted platform connecting people with authentic
              guidance. Our founder, a lifelong practitioner of Vedic
              traditions, recognized the need for genuine spiritual counsel in
              today's fast-paced world.
            </p>
            <p className="story-text">
              We began with simple meditation sessions and astrology
              consultations, always prioritizing authenticity over
              commercialization. As word spread about our genuine approach, more
              experts joined our mission, each bringing decades of specialized
              knowledge.
            </p>

            <div className="milestones">
              <h3>Our Journey</h3>
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-event">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="section-title">
            <FaHeart /> Our Core Values
          </h2>
          <p className="section-subtitle">
            These principles guide everything we do and every connection we make
          </p>

          <div className="values-grid">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="value-card"
                style={{ borderColor: value.color }}
              >
                <div className="value-icon" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="section-title">
            <FaUsers /> Meet Our Expert Guides
          </h2>
          <p className="section-subtitle">
            Certified practitioners with decades of combined experience
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="team-card"
                style={{ borderTopColor: member.color }}
              >
                <div className="team-icon" style={{ color: member.color }}>
                  {member.icon}
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-details">
                    <span className="experience-badge">
                      <FaAward /> {member.experience} experience
                    </span>
                    <p className="specialization">{member.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">
            <FaQuoteLeft /> Voices of Transformation
          </h2>
          <p className="section-subtitle">
            Stories from those who've found guidance and clarity through our
            services
          </p>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < testimonial.rating ? "star-filled" : "star-empty"
                      }
                    />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="commitment-section">
        <div className="commitment-container">
          <div className="commitment-card">
            <div className="commitment-icon">
              <FaMedal />
            </div>
            <div className="commitment-content">
              <h2>Our Commitment to You</h2>
              <p>
                We promise to always provide guidance with integrity, respect
                your journey, and maintain complete confidentiality. Your trust
                is our most valued treasure.
              </p>
              <div className="commitment-stats">
                <div className="stat-item">
                  <span className="stat-number">19</span>
                  <span className="stat-label">Years of Service</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Expert Guides</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Lives Touched</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section">
        <div className="about-cta-content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>
            Whether you seek clarity, balance, or spiritual growth, our experts
            are here to guide you with authenticity and compassion.
          </p>
          <a href="/consultation" className="about-cta-btn">
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
