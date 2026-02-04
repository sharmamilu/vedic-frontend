import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCommentDots,
  FaCheckCircle,
  FaUserFriends,
  FaBookOpen,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";
import {
  GiAstronautHelmet,
  GiMeditation,
  GiAncientColumns,
  GiAbstract024,
  GiCrystalBall,
} from "react-icons/gi";
import "../styles/ConsultationPage.css";

const ConsultationPage = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    email: "",
    phone: "",
    country: "",

    // Consultation Details
    consultationType: "astrology",
    consultationTopics: [],
    urgency: "within-week",

    // Additional Information
    concerns: "",
    preferredContactMethod: "email",
    bestTimeToContact: "morning",

    // Preferences
    preferredExpertGender: "no-preference",
    language: "english",
    receiveUpdates: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Consultation Types with Icons
  const consultationTypes = [
    {
      id: "astrology",
      name: "Astrology",
      icon: <GiCrystalBall />,
      description: "Birth chart analysis and predictions",
      color: "#43A047",
    },
    {
      id: "vastu",
      name: "Vastu Shastra",
      icon: <GiAncientColumns />,
      description: "Home/office energy consultation",
      color: "#8E24AA",
    },
    {
      id: "meditation",
      name: "Meditation",
      icon: <GiMeditation />,
      description: "Personal meditation guidance",
      color: "#2196F3",
    },
    {
      id: "energy",
      name: "Energy Healing",
      icon: <GiAbstract024 />,
      description: "Chakra balancing & energy work",
      color: "#FF9800",
    },
    {
      id: "comprehensive",
      name: "Comprehensive",
      icon: <GiAstronautHelmet />,
      description: "Complete life guidance package",
      color: "#E91E63",
    },
  ];

  // Consultation Topics (Checkboxes)
  const consultationTopics = [
    {
      id: "career",
      name: "Career Guidance",
      icon: "💼",
    },
    {
      id: "relationships",
      name: "Relationships",
      icon: "❤️",
    },
    {
      id: "health",
      name: "Health & Wellness",
      icon: "🌱",
    },
    {
      id: "finance",
      name: "Finance",
      icon: "💰",
    },
    {
      id: "spiritual",
      name: "Spiritual Growth",
      icon: "✨",
    },
    {
      id: "education",
      name: "Education",
      icon: "📚",
    },
    {
      id: "family",
      name: "Family Matters",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      id: "property",
      name: "Property & Investments",
      icon: "🏠",
    },
  ];

  // Urgency Options
  const urgencyOptions = [
    { id: "within-48-hours", name: "Within 48 hours", icon: "⚡" },
    { id: "within-week", name: "Within a week", icon: "📅" },
    { id: "flexible", name: "Flexible timing", icon: "🕒" },
  ];

  // Contact Methods
  const contactMethods = [
    { id: "email", name: "Email", icon: "📧" },
    { id: "phone", name: "Phone Call", icon: "📞" },
    { id: "whatsapp", name: "WhatsApp", icon: "💬" },
    { id: "video", name: "Video Call", icon: "🎥" },
  ];

  // Best Time to Contact
  const contactTimes = [
    { id: "morning", name: "Morning (9 AM - 12 PM)" },
    { id: "afternoon", name: "Afternoon (12 PM - 4 PM)" },
    { id: "evening", name: "Evening (4 PM - 8 PM)" },
    { id: "flexible", name: "Anytime" },
  ];

  // Validation Rules
  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { required: true, pattern: /^[0-9+\-\s()]{8,}$/ },
    consultationType: { required: true },
    consultationTopics: { required: true, minItems: 1 },
  };

  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return true;

    let error = "";

    if (rules.required && !value) {
      error = "This field is required";
    } else if (rules.minLength && value.length < rules.minLength) {
      error = `Minimum ${rules.minLength} characters required`;
    } else if (rules.pattern && !rules.pattern.test(value)) {
      error = "Please enter a valid value";
    } else if (
      rules.minItems &&
      Array.isArray(value) &&
      value.length < rules.minItems
    ) {
      error = `Please select at least ${rules.minItems} option`;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleTopicToggle = (topicId) => {
    setFormData((prev) => {
      const topics = [...prev.consultationTopics];
      if (topics.includes(topicId)) {
        return {
          ...prev,
          consultationTopics: topics.filter((id) => id !== topicId),
        };
      } else {
        return { ...prev, consultationTopics: [...topics, topicId] };
      }
    });

    // Clear error for topics
    if (errors.consultationTopics) {
      setErrors((prev) => ({
        ...prev,
        consultationTopics: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate all required fields
      const formErrors = {};
      Object.keys(validationRules).forEach((field) => {
        const error = validateField(field, formData[field]);
        if (error) {
          formErrors[field] = error;
        }
      });

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        setIsSubmitting(false);
        return;
      }

      // Prepare payload
      const payload = {
        contactInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
        },
        consultationDetails: {
          type: formData.consultationType,
          topics: formData.consultationTopics,
          urgency: formData.urgency,
          concerns: formData.concerns,
        },
        preferences: {
          contactMethod: formData.preferredContactMethod,
          bestTime: formData.bestTimeToContact,
          expertGender: formData.preferredExpertGender,
          language: formData.language,
          receiveUpdates: formData.receiveUpdates,
        },
        metadata: {
          submittedAt: new Date().toISOString(),
          source: "website_consultation_form",
        },
      };

      // Log payload (Replace with actual API call)
      console.log("Consultation Request Payload:", payload);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setShowSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          consultationType: "astrology",
          consultationTopics: [],
          urgency: "within-week",
          concerns: "",
          preferredContactMethod: "email",
          bestTimeToContact: "morning",
          preferredExpertGender: "no-preference",
          language: "english",
          receiveUpdates: true,
        });
        setErrors({});
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`consultation-page-container ${darkMode ? "dark-mode" : ""}`}
    >
      {/* Hero Section */}
      <section className="consultation-hero-section">
        <div className="consultation-hero-content">
          <h1 className="consultation-hero-title">
            Connect with Our
            <span className="consultation-highlight"> Experts</span>
          </h1>
          <p className="consultation-hero-subtitle">
            Share your details and our team will connect you with the perfect
            expert for personalized guidance. No commitments, just genuine help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="consultation-main-content">
        <div className="consultation-container">
          {/* Left Side: Benefits & Process */}
          <div className="consultation-info-sidebar">
            <div className="info-card">
              <div className="info-icon">
                <FaLightbulb />
              </div>
              <h3>How It Works</h3>
              <ol className="process-steps">
                <li>
                  <span className="step-number">1</span>
                  <span className="step-text">Fill this simple form</span>
                </li>
                <li>
                  <span className="step-number">2</span>
                  <span className="step-text">We match you with an expert</span>
                </li>
                <li>
                  <span className="step-number">3</span>
                  <span className="step-text">
                    Expert contacts you within 24 hours
                  </span>
                </li>
                <li>
                  <span className="step-number">4</span>
                  <span className="step-text">
                    Discuss your concerns freely
                  </span>
                </li>
              </ol>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaUserFriends />
              </div>
              <h3>Why Connect With Us?</h3>
              <ul className="benefits-list">
                <li>
                  <FaStar /> Free initial consultation
                </li>
                <li>
                  <FaStar /> Certified experts with 10+ years experience
                </li>
                <li>
                  <FaStar /> Personalized matching based on your needs
                </li>
                <li>
                  <FaStar /> No pressure to commit
                </li>
                <li>
                  <FaStar /> Complete confidentiality
                </li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaBookOpen />
              </div>
              <h3>Our Promise</h3>
              <p className="promise-text">
                We connect you with genuine experts who care about your
                well-being. No commercial pressure, just authentic guidance.
              </p>
              <div className="expert-count">
                <span className="count-number">25+</span>
                <span className="count-label">Experts Ready to Help</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="consultation-form-container">
            {showSuccess ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h2>Request Sent Successfully!</h2>
                <p>
                  Thank you for reaching out. Our team will contact you within
                  24 hours.
                </p>
                <p>
                  You'll hear from us via{" "}
                  <strong>{formData.preferredContactMethod}</strong>.
                </p>
                <button
                  className="success-back-btn"
                  onClick={() => setShowSuccess(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="consultation-form">
                <h2 className="form-title">
                  <FaCommentDots /> Consultation Request Form
                </h2>
                <p className="form-subtitle">
                  Fill this form and our team will connect you with the right
                  expert.
                </p>

                {/* Basic Information */}
                <div className="form-section">
                  <h3 className="section-title">
                    <FaUser /> Your Information
                  </h3>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${errors.name ? "error" : ""}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <span className="error-message">{errors.name}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label>
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${errors.email ? "error" : ""}`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label>
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`form-input ${errors.phone ? "error" : ""}`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Country (Optional)</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your country"
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Type */}
                <div className="form-section">
                  <h3 className="section-title">
                    <GiCrystalBall /> What type of guidance do you need?{" "}
                    <span className="required">*</span>
                  </h3>
                  {errors.consultationType && (
                    <span className="error-message block-error">
                      {errors.consultationType}
                    </span>
                  )}

                  <div className="type-grid">
                    {consultationTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`type-card ${formData.consultationType === type.id ? "selected" : ""}`}
                        style={{
                          borderColor:
                            formData.consultationType === type.id
                              ? type.color
                              : "",
                        }}
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            consultationType: type.id,
                          }));
                          if (errors.consultationType) {
                            setErrors((prev) => ({
                              ...prev,
                              consultationType: "",
                            }));
                          }
                        }}
                      >
                        <div
                          className="type-icon"
                          style={{ color: type.color }}
                        >
                          {type.icon}
                        </div>
                        <div className="type-info">
                          <h4>{type.name}</h4>
                          <p>{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Topics */}
                <div className="form-section">
                  <h3 className="section-title">
                    <FaBookOpen /> Areas you want to discuss{" "}
                    <span className="required">*</span>
                    <span className="sub-label">(Select at least one)</span>
                  </h3>
                  {errors.consultationTopics && (
                    <span className="error-message block-error">
                      {errors.consultationTopics}
                    </span>
                  )}

                  <div className="topics-grid">
                    {consultationTopics.map((topic) => (
                      <div
                        key={topic.id}
                        className={`topic-card ${formData.consultationTopics.includes(topic.id) ? "selected" : ""}`}
                        onClick={() => handleTopicToggle(topic.id)}
                      >
                        <div className="topic-icon">{topic.icon}</div>
                        <div className="topic-info">
                          <h5>{topic.name}</h5>
                          <div className="topic-checkbox">
                            {formData.consultationTopics.includes(topic.id) && (
                              <FaCheckCircle className="check-icon" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section">
                  <h3 className="section-title">
                    <FaCommentDots /> Additional Information
                  </h3>

                  <div className="form-group">
                    <label>What would you like to discuss? (Optional)</label>
                    <textarea
                      name="concerns"
                      value={formData.concerns}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Briefly describe what you'd like guidance on..."
                      rows={3}
                    />
                  </div>

                  <div className="preferences-grid">
                    <div className="preference-group">
                      <label>How soon do you need guidance?</label>
                      <div className="options-group">
                        {urgencyOptions.map((option) => (
                          <label key={option.id} className="option-label">
                            <input
                              type="radio"
                              name="urgency"
                              value={option.id}
                              checked={formData.urgency === option.id}
                              onChange={handleInputChange}
                            />
                            <span className="option-content">
                              <span className="option-icon">{option.icon}</span>
                              <span className="option-text">{option.name}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="preference-group">
                      <label>Preferred contact method</label>
                      <div className="options-group contact-methods">
                        {contactMethods.map((method) => (
                          <label key={method.id} className="option-label">
                            <input
                              type="radio"
                              name="preferredContactMethod"
                              value={method.id}
                              checked={
                                formData.preferredContactMethod === method.id
                              }
                              onChange={handleInputChange}
                            />
                            <span className="option-content">
                              <span className="option-icon">{method.icon}</span>
                              <span className="option-text">{method.name}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="preference-group">
                      <label>Best time to contact you</label>
                      <select
                        name="bestTimeToContact"
                        value={formData.bestTimeToContact}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        {contactTimes.map((time) => (
                          <option key={time.id} value={time.id}>
                            {time.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="preference-group">
                      <label>Preferred language</label>
                      <select
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                      </select>
                    </div>
                  </div>

                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="receiveUpdates"
                        checked={formData.receiveUpdates}
                        onChange={handleInputChange}
                      />
                      <span>Send me helpful tips and updates (optional)</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="submit-section">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <FaCheckCircle /> Submit Request
                      </>
                    )}
                  </button>

                  <p className="privacy-note">
                    Your information is safe with us. We respect your privacy
                    and never share your details.
                  </p>
                </div>

                {errors.submit && (
                  <div className="submit-error">
                    <span className="error-message">{errors.submit}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="consultation-faq">
        <div className="faq-container">
          <h2>Common Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is this really free?</h3>
              <p>
                Yes! The initial consultation connection is completely free.
                You'll discuss your concerns with an expert at no cost.
              </p>
            </div>
            <div className="faq-item">
              <h3>How soon will someone contact me?</h3>
              <p>
                Typically within 24 hours. For urgent requests, we try to
                connect you within 2-4 hours.
              </p>
            </div>
            <div className="faq-item">
              <h3>What happens after I submit?</h3>
              <p>
                Our team reviews your request and matches you with the most
                suitable expert who will contact you directly.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I choose a specific expert?</h3>
              <p>
                Yes! Once we connect, you can request a different expert if you
                prefer. We want you to feel completely comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
