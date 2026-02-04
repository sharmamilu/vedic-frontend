import React, { useState } from "react";
import {
  FaBrain,
  FaHeart,
  FaLeaf,
  FaClock,
  FaUserFriends,
  FaCalendarAlt,
  FaBookOpen,
  FaStar,
  FaSun,
  FaMoon,
  FaWind,
  FaWater,
  FaFire,
  FaMountain,
} from "react-icons/fa";
import {
  GiLotus,
  GiMeditation,
  GiSpiralShell,
  //   GiMindShield,
  GiPeaceDove,
  GiTreeRoots,
  GiSpinningTop,
} from "react-icons/gi";
import "../styles/MeditationPage.css";

const MeditationPage = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("techniques");
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [showTechniqueModal, setShowTechniqueModal] = useState(false);

  // Meditation Techniques - Static content
  const meditationTechniques = [
    {
      id: "mindfulness",
      name: "Mindfulness Meditation",
      icon: <FaBrain />,
      color: "#5D4037",
      difficulty: "Beginner",
      duration: "5-20 mins",
      description:
        "Focus on being intensely aware of what you're sensing and feeling in the moment, without interpretation or judgment.",
      steps: [
        "Find a quiet place with minimal distractions",
        "Sit comfortably with straight back",
        "Focus on your natural breathing pattern",
        "When your mind wanders, gently return focus to breath",
        "Start with 5 minutes, gradually increase",
      ],
      benefits: [
        "Reduces stress and anxiety",
        "Improves focus and concentration",
        "Enhances self-awareness",
        "Promotes emotional health",
      ],
    },
    {
      id: "loving-kindness",
      name: "Loving-Kindness Meditation",
      icon: <FaHeart />,
      color: "#C62828",
      difficulty: "Beginner",
      duration: "10-15 mins",
      description:
        "Develop feelings of compassion, love, and kindness toward yourself and others.",
      steps: [
        "Sit comfortably and close your eyes",
        "Visualize yourself feeling happy and peaceful",
        "Repeat loving phrases to yourself",
        "Extend these feelings to loved ones",
        "Gradually include all living beings",
      ],
      benefits: [
        "Increases compassion and empathy",
        "Reduces anger and resentment",
        "Improves relationships",
        "Boosts self-acceptance",
      ],
    },
    {
      id: "zen",
      name: "Zen Meditation (Zazen)",
      icon: <GiLotus />,
      color: "#2E7D32",
      difficulty: "Advanced",
      duration: "20-40 mins",
      description:
        "A traditional Buddhist meditation practice that involves sitting and observing thoughts without attachment.",
      steps: [
        "Sit in lotus or half-lotus position",
        "Keep eyes half-open, gazing downward",
        "Focus on breath and posture",
        "Observe thoughts without engagement",
        "Return to breath when distracted",
      ],
      benefits: [
        "Deep spiritual insight",
        "Enhanced discipline",
        "Clear mental clarity",
        "Emotional stability",
      ],
    },
    {
      id: "body-scan",
      name: "Body Scan Meditation",
      icon: <FaLeaf />,
      color: "#0288D1",
      difficulty: "Beginner",
      duration: "10-30 mins",
      description:
        "A practice of bringing attention to different parts of the body, noticing sensations without judgment.",
      steps: [
        "Lie down comfortably on your back",
        "Start by focusing on your toes",
        "Slowly move attention up through the body",
        "Notice any sensations without reacting",
        "Complete scan from toes to head",
      ],
      benefits: [
        "Reduces physical tension",
        "Improves body awareness",
        "Helps with insomnia",
        "Promotes relaxation",
      ],
    },
  ];

  // Meditation Paths - Tree-like structure
  const meditationPaths = [
    {
      id: "beginner",
      name: "Beginner's Path",
      icon: <GiTreeRoots />,
      color: "#5D4037",
      steps: [
        {
          title: "Week 1-2: Foundation",
          description: "Learn basic breathing techniques and posture",
          duration: "5-10 mins daily",
          focus: ["Breath awareness", "Sitting posture", "Gentle focus"],
        },
        {
          title: "Week 3-4: Consistency",
          description: "Establish daily practice routine",
          duration: "10-15 mins daily",
          focus: ["Daily routine", "Mindful moments", "Patience"],
        },
        {
          title: "Month 2: Expansion",
          description: "Explore different meditation techniques",
          duration: "15-20 mins daily",
          focus: [
            "Technique variation",
            "Extended sessions",
            "Self-observation",
          ],
        },
      ],
      recommendation:
        "Start with 5 minutes daily and gradually increase. Consistency is more important than duration.",
    },
    {
      id: "stress",
      name: "Stress Relief Path",
      icon: <GiPeaceDove />,
      color: "#C62828",
      steps: [
        {
          title: "Immediate Relief",
          description: "Quick techniques for stressful moments",
          duration: "3-5 mins as needed",
          focus: ["Deep breathing", "Body scan", "Grounding"],
        },
        {
          title: "Daily Management",
          description: "Preventive practices for daily stress",
          duration: "10-15 mins morning/evening",
          focus: ["Morning routine", "Evening unwinding", "Stress awareness"],
        },
        {
          title: "Long-term Resilience",
          description: "Build resilience to stress",
          duration: "20 mins daily",
          focus: ["Mindfulness", "Emotional regulation", "Perspective"],
        },
      ],
      recommendation:
        "Practice morning and evening. Combine quick techniques with longer sessions.",
    },
    {
      id: "spiritual",
      name: "Spiritual Growth Path",
      icon: <GiSpinningTop />,
      color: "#2E7D32",
      steps: [
        {
          title: "Foundation",
          description: "Connect with inner self",
          duration: "15-20 mins daily",
          focus: ["Self-inquiry", "Silence", "Presence"],
        },
        {
          title: "Deepening",
          description: "Explore consciousness states",
          duration: "30-45 mins daily",
          focus: ["Extended silence", "Energy awareness", "Transcendence"],
        },
        {
          title: "Integration",
          description: "Bring awareness into daily life",
          duration: "Multiple sessions",
          focus: ["Mindful living", "Compassion", "Service"],
        },
      ],
      recommendation:
        "Regular practice with occasional retreats. Keep a meditation journal.",
    },
  ];

  // Benefits Tree Structure
  const meditationBenefits = {
    root: "Meditation Benefits",
    branches: [
      {
        name: "Mental Health",
        benefits: [
          {
            name: "Stress Reduction",
            details: "Reduces cortisol levels by 30% with regular practice",
          },
          {
            name: "Anxiety Management",
            details: "Decreases anxiety symptoms by 40-60%",
          },
          {
            name: "Focus Improvement",
            details: "Increases attention span and concentration",
          },
        ],
      },
      {
        name: "Physical Health",
        benefits: [
          {
            name: "Blood Pressure",
            details: "Lowers blood pressure naturally",
          },
          {
            name: "Immune System",
            details: "Boosts immune response and reduces inflammation",
          },
          {
            name: "Sleep Quality",
            details: "Improves sleep patterns and reduces insomnia",
          },
        ],
      },
      {
        name: "Emotional Well-being",
        benefits: [
          {
            name: "Emotional Regulation",
            details: "Enhances ability to manage emotions",
          },
          {
            name: "Self-awareness",
            details: "Increases understanding of thoughts and patterns",
          },
          {
            name: "Relationships",
            details: "Improves empathy and communication skills",
          },
        ],
      },
    ],
  };

  // Meditation Tips - Static content
  const meditationTips = [
    {
      title: "Getting Started",
      tips: [
        "Start with just 5 minutes daily",
        "Create a consistent time and space",
        "Use a comfortable cushion or chair",
        "Don't worry about 'clearing your mind'",
        "Be patient with yourself",
      ],
    },
    {
      title: "Overcoming Challenges",
      tips: [
        "Restless? Try walking meditation",
        "Sleepy? Meditate with eyes slightly open",
        "Distracted? Gently return to breath",
        "Emotional? Allow feelings without judgment",
        "Bored? Try different techniques",
      ],
    },
    {
      title: "Deepening Practice",
      tips: [
        "Gradually increase duration",
        "Join a meditation group",
        "Attend meditation retreats",
        "Keep a meditation journal",
        "Integrate mindfulness into daily activities",
      ],
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTechniqueClick = (technique) => {
    setSelectedTechnique(technique);
    setShowTechniqueModal(true);
  };

  const handleBookConsultation = () => {
    // Redirect to consultation page
    window.location.href = "/consultation";
  };

  return (
    <div className={`meditation-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="meditation-hero-section">
        <div className="meditation-hero-background">
          <div className="meditation-floating-elements">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="meditation-floating-element"
                style={{
                  left: `${15 + i * 12}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <GiLotus />
              </div>
            ))}
          </div>
        </div>

        <div className="meditation-hero-content">
          <div className="meditation-hero-text">
            <h1 className="meditation-hero-title">
              Discover Your
              <span className="meditation-highlight"> Inner</span> Peace
            </h1>
            <p className="meditation-hero-subtitle">
              Meditation is the art of quieting the mind to discover the peace
              that already exists within you. Start your journey to greater
              calm, clarity, and compassion today.
            </p>
            <div className="meditation-hero-buttons">
              <button
                className="meditation-btn-primary"
                onClick={handleBookConsultation}
              >
                <FaCalendarAlt /> Book Consultation
              </button>
              <button
                className="meditation-btn-secondary"
                onClick={() => handleTabChange("techniques")}
              >
                <GiMeditation /> Explore Techniques
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="meditation-tabs-container">
        <div className="meditation-tabs">
          <button
            className={`meditation-tab ${activeTab === "techniques" ? "active" : ""}`}
            onClick={() => handleTabChange("techniques")}
          >
            <GiMeditation /> Techniques
          </button>
          <button
            className={`meditation-tab ${activeTab === "paths" ? "active" : ""}`}
            onClick={() => handleTabChange("paths")}
          >
            <GiTreeRoots /> Meditation Paths
          </button>
          <button
            className={`meditation-tab ${activeTab === "benefits" ? "active" : ""}`}
            onClick={() => handleTabChange("benefits")}
          >
            <FaStar /> Benefits
          </button>
          <button
            className={`meditation-tab ${activeTab === "tips" ? "active" : ""}`}
            onClick={() => handleTabChange("tips")}
          >
            <FaBookOpen /> Tips & Guidance
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="meditation-main-content">
        {/* Techniques Section */}
        {activeTab === "techniques" && (
          <section className="meditation-section techniques-section">
            <div className="section-header">
              <h2>
                <GiMeditation /> Meditation Techniques
              </h2>
              <p>
                Discover different approaches to find what works best for you
              </p>
            </div>

            <div className="techniques-grid">
              {meditationTechniques.map((technique) => (
                <div
                  key={technique.id}
                  className="technique-card"
                  onClick={() => handleTechniqueClick(technique)}
                >
                  <div className="technique-header">
                    <div
                      className="technique-icon"
                      style={{ color: technique.color }}
                    >
                      {technique.icon}
                    </div>
                    <div className="technique-info">
                      <h3>{technique.name}</h3>
                      <div className="technique-meta">
                        <span className="difficulty">
                          {technique.difficulty}
                        </span>
                        <span className="duration">{technique.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="technique-description">
                    {technique.description}
                  </p>
                  <button className="technique-learn-btn">Learn More →</button>
                </div>
              ))}
            </div>

            <div className="technique-cta">
              <div className="cta-content">
                <h3>Ready to Start Your Journey?</h3>
                <p>
                  Get personalized guidance from our meditation experts to find
                  the perfect technique for your needs.
                </p>
                <button className="cta-btn" onClick={handleBookConsultation}>
                  <FaUserFriends /> Start with Expert
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Paths Section */}
        {activeTab === "paths" && (
          <section className="meditation-section paths-section">
            <div className="section-header">
              <h2>
                <GiTreeRoots /> Meditation Paths
              </h2>
              <p>
                Structured journeys for different goals and experience levels
              </p>
            </div>

            <div className="paths-container">
              {meditationPaths.map((path) => (
                <div key={path.id} className="path-card">
                  <div className="path-header">
                    <div className="path-icon" style={{ color: path.color }}>
                      {path.icon}
                    </div>
                    <h3>{path.name}</h3>
                  </div>

                  <div className="path-steps">
                    {path.steps.map((step, index) => (
                      <div key={index} className="path-step">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                          <h4>{step.title}</h4>
                          <p className="step-description">{step.description}</p>
                          <p className="step-duration">
                            <FaClock /> {step.duration}
                          </p>
                          <div className="step-focus">
                            {step.focus.map((item, idx) => (
                              <span key={idx} className="focus-tag">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="path-recommendation">
                    <strong>Expert Recommendation:</strong>{" "}
                    {path.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {activeTab === "benefits" && (
          <section className="meditation-section benefits-section">
            <div className="section-header">
              <h2>
                <FaStar /> Meditation Benefits
              </h2>
              <p>
                Transform your mind, body, and spirit through consistent
                practice
              </p>
            </div>

            <div className="benefits-tree">
              <div className="tree-root">
                <div className="root-icon">🌳</div>
                <h3>{meditationBenefits.root}</h3>
              </div>

              <div className="tree-branches">
                {meditationBenefits.branches.map((branch, index) => (
                  <div key={index} className="tree-branch">
                    <div className="branch-header">
                      <h4>{branch.name}</h4>
                    </div>
                    <div className="branch-benefits">
                      {branch.benefits.map((benefit, idx) => (
                        <div key={idx} className="benefit-item">
                          <div className="benefit-icon">✓</div>
                          <div className="benefit-content">
                            <h5>{benefit.name}</h5>
                            <p>{benefit.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-summary">
              <div className="summary-card">
                <h3>Scientific Research</h3>
                <p>
                  Studies show 8 weeks of regular meditation can create
                  measurable changes in brain structure and function.
                </p>
              </div>
              <div className="summary-card">
                <h3>Daily Impact</h3>
                <p>
                  Just 10 minutes daily can significantly reduce stress and
                  improve emotional regulation.
                </p>
              </div>
              <div className="summary-card">
                <h3>Long-term Benefits</h3>
                <p>
                  Consistent practice leads to lasting improvements in mental
                  and physical health.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Tips Section */}
        {activeTab === "tips" && (
          <section className="meditation-section tips-section">
            <div className="section-header">
              <h2>
                <FaBookOpen /> Tips & Guidance
              </h2>
              <p>
                Practical advice for developing and maintaining your meditation
                practice
              </p>
            </div>

            <div className="tips-grid">
              {meditationTips.map((category, index) => (
                <div key={index} className="tip-category">
                  <div className="category-header">
                    <h3>{category.title}</h3>
                  </div>
                  <ul className="tip-list">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>
                        <span className="tip-icon-med">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="expert-guidance">
              <div className="guidance-content">
                <div className="guidance-text">
                  <h3>Expert Guidance</h3>
                  <p>
                    Our meditation experts provide personalized guidance to help
                    you overcome challenges and deepen your practice.
                  </p>
                  <ul className="guidance-list">
                    <li>Personalized meditation plan</li>
                    <li>Technique selection guidance</li>
                    <li>Progress tracking and adjustments</li>
                    <li>Answering specific questions</li>
                    <li>Ongoing support and motivation</li>
                  </ul>
                  <button
                    className="guidance-btn"
                    onClick={handleBookConsultation}
                  >
                    <FaUserFriends /> Get Expert Guidance
                  </button>
                </div>
                <div className="guidance-image">
                  <GiSpiralShell />
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Technique Modal */}
      {showTechniqueModal && selectedTechnique && (
        <div
          className="technique-modal-overlay"
          onClick={() => setShowTechniqueModal(false)}
        >
          <div className="technique-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowTechniqueModal(false)}
            >
              ×
            </button>

            <div className="modal-header">
              <div
                className="modal-technique-icon"
                style={{ color: selectedTechnique.color }}
              >
                {selectedTechnique.icon}
              </div>
              <div className="modal-technique-info">
                <h2>{selectedTechnique.name}</h2>
                <div className="modal-technique-meta">
                  <span className="difficulty">
                    {selectedTechnique.difficulty}
                  </span>
                  <span className="duration">{selectedTechnique.duration}</span>
                </div>
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3>Description</h3>
                <p>{selectedTechnique.description}</p>
              </div>

              <div className="modal-section">
                <h3>How to Practice</h3>
                <ol className="steps-list">
                  {selectedTechnique.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="modal-section">
                <h3>Key Benefits</h3>
                <ul className="benefits-list">
                  {selectedTechnique.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <FaStar className="benefit-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <button
                  className="modal-action-btn"
                  onClick={handleBookConsultation}
                >
                  <FaUserFriends /> Learn with Expert
                </button>
                <button
                  className="modal-action-btn secondary"
                  onClick={() => setShowTechniqueModal(false)}
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

export default MeditationPage;
