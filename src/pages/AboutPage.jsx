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
  FaGraduationCap,
  FaCertificate,
  FaUserMd,
} from "react-icons/fa";
import {
  GiSpiralBottle,
  GiAncientRuins,
  GiMeditation,
  GiCrystalBall,
  GiStoneCrafting,
} from "react-icons/gi";
import "../styles/AboutPage.css";
import { useNavigate } from "react-router-dom";
import nadiswaraImg from "../assets/images/nadiswara_new_cropped.jpg";

const AboutPage = ({ darkMode }) => {
  const navigate = useNavigate();
  const navigateToConsultation = () => {
    navigate("/consultation");
  };
  // Core Modalities Data
  const coreModalities = [
    {
      id: 1,
      name: "Precision Healing",
      description:
        "Utilizing Acupuncture, Acupressure, and Marma Therapy to clear physical blockages and optimize the body's natural flow.",
      icon: <GiStoneCrafting />,
      color: "#43A047",
    },
    {
      id: 2,
      name: "Subtle Energy Arts",
      description:
        "Balancing the elements through Seed & Colour Therapy, Byol Magnets, and the deep cleansing power of Pranic Healing.",
      icon: <GiCrystalBall />,
      color: "#8E24AA",
    },
    {
      id: 3,
      name: "Advanced Quantum Shifts",
      description:
        "Experience the cutting edge of wellness with Neuro Chakra Quantum Healing, a method designed to realign your neurological pathways and energy centers.",
      icon: <GiMeditation />,
      color: "#2196F3",
    },
    {
      id: 4,
      name: "Intuitive Guidance",
      description:
        "Gaining clarity on life's path through Pendulum Dowsing, Astrology, and Numerology to ensure your external life matches your internal frequency.",
      icon: <GiAncientRuins />,
      color: "#FF9800",
    },
  ];

  // Why Choose Vibrant Aura
  const whyChooseUs = [
    {
      id: 1,
      title: "Whole-Person Philosophy",
      description:
        "We address chronic pain, emotional stress, and spiritual growth in a supportive environment where science meets intuition.",
      icon: <FaBalanceScale />,
      color: "#43A047",
    },
    {
      id: 2,
      title: "Natural & Non-Invasive",
      description:
        "All our therapies are designed to work with your body's natural healing intelligence without invasive procedures.",
      icon: <FaLeaf />,
      color: "#2E7D32",
    },
    {
      id: 3,
      title: "Personalized Approach",
      description:
        "We don't believe in one-size-fits-all. Every treatment plan is customized to your unique energy signature.",
      icon: <FaHeart />,
      color: "#E91E63",
    },
    {
      id: 4,
      title: "Ancient Meets Modern",
      description:
        "Bridging the gap between ancient wisdom and modern energetic science for comprehensive healing.",
      icon: <GiAncientRuins />,
      color: "#8E24AA",
    },
  ];

  // Our Journey Milestones
  const milestones = [
    {
      year: "Foundation",
      event:
        "Established Vibrant Aura as a sanctuary for holistic healing and energy alignment",
    },
    {
      year: "Expansion",
      event:
        "Integrated advanced quantum healing modalities with traditional therapies",
    },
    {
      year: "Innovation",
      event: "Pioneered Neuro Chakra Quantum Healing techniques",
    },
    {
      year: "Recognition",
      event: "Became a trusted center for whole-person wellness",
    },
    {
      year: "Today",
      event:
        "Empowering individuals to reclaim their radiance through natural healing",
    },
  ];

  // Practitioner Qualifications - Vidya KS
  const vidyaQualifications = [
    {
      category: "Advanced Acupressure & Acupuncture",
      credentials: [
        "6 Semester Master Advanced Acupressure Therapy course from ASPEUS, Prayagraj",
        "Certificate in Diploma in Acupuncture from ATAMA, BSS Approved Certificate",
        "Course on Auricular Therapy from Vedavyasa Adhyatmika Shikshana Kendra",
      ],
    },
    {
      category: "Quantum & Energy Healing",
      credentials: [
        "IMPH Level 1 Certified practitioner of Neurochakra Quantum Healing from Miindtraa",
        "Basic Pranic Healing from Yoga Vidya Pranic Healing",
        "Advanced Pranic Healing from Yoga Vidya Pranic Healing",
        "Pranic Psychotherapy from Yoga Vidya Pranic Healing",
      ],
    },
    // {
    //   category: "Vibrational & Alternative Therapies",
    //   credentials: [
    //     "Completed Colour Therapy program by Vedavyasa Adhyatmika Shikshana Kendra",
    //     "Completed Seed and Magnet Therapy program by Vedavyasa Adhyatmika Shikshana Kendra",
    //     "Completed Bach Flower Remedies program by Vedavyasa Adhyatmika Shikshana Kendra",
    //     "Pendulum Dowsing program by Vedavyasa Adhyatmika Shikshana Kendra",
    //     "Completed course in Distance Healing by Vedavyasa Adhyatmika Shikshana Kendra",
    //   ],
    // },
    // {
    //   category: "Professional Recognition",
    //   credentials: [
    //     "Awarded in Natural and Drugless Healing Science Training Program covering acupressure, color therapy, seed therapy, auricular therapy by Ayushya Mandalam",
    //     "Took part in Acupuncture Integrated Conference by Institution of Agricultural Technologist",
    //     "Completed course on Marma and Rekhi",
    //   ],
    // },
  ];

  // Practitioner Qualifications - Nagaratna BN
  const nagaratnaQualifications = [
    {
      category: "Colour Therapy Specialisation",
      credentials: [
        "Certified in Acupuncture/Alternative Therapy D.A.T by ATAMA Acupuncture Training Centre",
        "BSS Diploma in Acupuncture Therapy by ATAMA",
      ],
    },
    {
      category: "Energy Medicine",
      credentials: [
        "Diploma in Traditional Energy Medicine (TEM) by Basava Acu Academy",
        "Course on Auricular Therapy by Basava Acu Academy",
      ],
    },
    {
      category: "Holistic Therapies",
      credentials: [
        "Colour Therapy program by Vedavyasa Adhyatmika Shikshana Kendra",
        "Seed and Magnet Therapy program by Vedavyasa Adhyatmika Shikshana Kendra",
        "Bach Flower Remedies program by Vedavyasa Adhyatmika Shikshana Kendra",
        "Pendulum Dowsing program by Vedavyasa Adhyatmika Shikshana Kendra",
        "Course on Marma and Rekhi",
        "Course in Distance Healing by Vedavyasa Adhyatmika Shikshana Kendra",
      ],
    },
    {
      category: "Professional Development",
      credentials: [
        "Awarded in Natural and Drugless Healing Science Training Program covering acupressure, color therapy, seed therapy, auricular therapy by Ayushya Mandalam",
        "Took part in Acupuncture Integrated Conference by Institution of Agricultural Technologist",
      ],
    },
  ];

  return (
    <div className={`about-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            Welcome to
            <span className="about-highlight"> Vibrant Aura</span>
          </h1>
          <p className="about-hero-subtitle">
            True health isn't just the absence of illness—it's the perfect
            alignment of body, mind, and soul. We are your sanctuary for moving
            beyond surface-level symptoms and tapping into the profound healing
            intelligence of the human energy system.
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
              To empower every individual to take charge of their health through
              natural, holistic, and vibrationally-aligned therapies. VAHC
              bridge the gap between ancient wisdom and modern energetic
              science, offering a diverse spectrum of non-invasive therapies
              designed to restore balance and ignite your inner vitality.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaLeaf />
            </div>
            <h2>Our Vision</h2>
            <p>
              A world where every person recognizes and harnesses their innate
              healing potential. VAHC envision a future where the alignment of
              body, mind, and soul is the foundation of true wellness, and where
              ancient wisdom seamlessly integrates with modern science.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2 className="section-title">
              <GiSpiralBottle /> Our Philosophy
            </h2>
            <p className="story-text">
              At Vibrant Aura, we believe that true health isn't just the
              absence of illness—it's the perfect alignment of body, mind, and
              soul. Our centre is a sanctuary for those seeking to move beyond
              surface-level symptoms and tap into the profound healing
              intelligence of the human energy system.
            </p>
            <p className="story-text">
              We don't believe in a one-size-fits-all approach. By blending
              physical, energetic, and cosmic sciences, we create a personalized
              roadmap for your wellbeing. Our approach is rooted in the
              "Whole-Person" philosophy, providing a supportive environment
              where science meets intuition.
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
            <FaHeart /> Why Choose Vibrant Aura?
          </h2>
          <p className="section-subtitle">
            Our approach is rooted in the "Whole-Person" philosophy. Whether you
            are dealing with chronic pain, emotional stress, or simply looking
            to enhance your spiritual growth, we provide a supportive
            environment where science meets intuition.
          </p>

          <div className="values-grid">
            {whyChooseUs.map((value) => (
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

      {/* Practitioner Qualifications */}
      <section className="qualifications-section">
        <div className="qualifications-container">
          <h2 className="section-title">
            <FaUserMd /> Our Certified Practitioners
          </h2>
          <p className="section-subtitle">
            Qualified professionals with extensive training in holistic and
            energy healing
          </p>

          {/* Vidya KS */}
          <div className="practitioner-card vertical-card">
            <h3 className="practitioner-name">Vidya Nagendra</h3>
            <p className="practitioner-role">
              Master Practitioner & Founder
              <br />
              <span className="practitioner-specialties">
                Pranic Crystal Healing | Bach Flower Remedy | Advanced
                Acupressure
              </span>
            </p>

            {vidyaQualifications.map((group, index) => (
              <details key={index} className="toggle-card">
                <summary className="toggle-header">
                  <FaCertificate /> {group.category}
                </summary>
                <ul className="toggle-list">
                  {group.credentials.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          {/* Nagaratna BN */}
          <div className="practitioner-card vertical-card">
            <h3 className="practitioner-name">Nagaratna BN</h3>
            <p className="practitioner-role">
              Senior Therapist & Holistic Healing Specialist
            </p>

            {nagaratnaQualifications.map((group, index) => (
              <details key={index} className="toggle-card">
                <summary className="toggle-header">
                  <FaCertificate /> {group.category}
                </summary>
                <ul className="toggle-list">
                  {group.credentials.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}

            {/* Nadiswara Analysis Section */}
            <div className="nadiswara-section">
              <h4 className="nadiswara-title">
                <FaHandsHelping /> Nadiswara Analysis and Reports
              </h4>
              <div className="nadiswara-image-container">
                <img
                  src={nadiswaraImg}
                  alt="Nadiswara Hand Image"
                  className="nadiswara-image"
                />
              </div>
              <p className="nadiswara-description">
                Experience advanced health analysis through Nadiswara - an
                innovative non-invasive pulse diagnosis system that provides
                comprehensive health reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="section-title">
            <FaUsers /> Our Core Modalities
          </h2>
          <p className="section-subtitle">
            We don't believe in a one-size-fits-all approach. By blending
            physical, energetic, and cosmic sciences, we create a personalized
            roadmap for your wellbeing
          </p>

          <div className="team-grid">
            {coreModalities.map((member) => (
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
                  <div className="team-details">
                    <p className="specialization">{member.description}</p>
                  </div>
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
              <h2>Ready to Reclaim Your Radiance?</h2>
              <p>
                Your journey toward a more vibrant version of yourself begins
                with a single step. Let us help you unlock the healing potential
                that already exists within you.
              </p>
              <div className="commitment-stats">
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Natural Therapies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Non-Invasive</span>
                  <span className="stat-label">Healing Methods</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Personalized</span>
                  <span className="stat-label">Treatment Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section">
        <div className="about-cta-content">
          <h2>Begin Your Healing Journey Toda With VAHC</h2>
          <p>
            Experience the perfect alignment of body, mind, and soul. Discover
            how our blend of ancient wisdom and modern energetic science can
            transform your wellbeing.
          </p>
          <button className="about-cta-btn" onClick={navigateToConsultation}>
            Book Your Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
