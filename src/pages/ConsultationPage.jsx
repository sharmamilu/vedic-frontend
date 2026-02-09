import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCommentDots,
  FaCheckCircle,
  FaExclamationCircle,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import "../styles/ConsultationPage.css";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ConsultationPage = ({ darkMode }) => {
  const form = useRef();

  const countryCodes = [
    { code: "+91", name: "India (+91)" },
    { code: "+1", name: "USA/Canada (+1)" },
    { code: "+44", name: "UK (+44)" },
    { code: "+61", name: "Australia (+61)" },
    { code: "+971", name: "UAE (+971)" },
    { code: "+65", name: "Singapore (+65)" },
    { code: "+49", name: "Germany (+49)" },
    { code: "+33", name: "France (+33)" },
    { code: "+81", name: "Japan (+81)" },
    { code: "+86", name: "China (+86)" },
  ];

  const initialFormData = {
    // Personal Information (existing fields)
    name: "",
    dob: "",
    age: "",
    timeOfBirth: "",
    placeOfBirth: "",
    countryCode: "+91",
    phone: "",
    email: "",
    address: "",

    // Health Information
    height: "",
    weight: "",
    sleep: "",
    appetite: "",
    dietPreference: "vegetarian", // or "non-vegetarian"
    bowelMovement: "",
    bloodGlucose: "",
    bloodPressure: "",
    medications: "",

    // Emotional State
    mood: "",
    tastePreference: "",

    // Consultation Details (existing)
    consultationType: "",
    consultationAreas: [],
    urgency: "within-week",

    // Complaint/Concern (existing)
    complaint: "",

    // Additional Information (existing)
    preferredContactMethod: "email",
    bestTimeToContact: "morning",
    receiveUpdates: true,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [fieldTouched, setFieldTouched] = useState({});

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch countries and check success status
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,flags",
        );
        if (!response.ok) throw new Error("Failed to fetch countries");

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid response format");
        }

        const formattedCountries = data
          .map((country) => {
            const root = country.idd?.root || "";
            const suffix = country.idd?.suffixes ? country.idd.suffixes[0] : "";
            return {
              name: country.name.common,
              code: root + (country.idd?.suffixes?.length > 1 ? "" : suffix),
              flag: country.flags?.png || "",
            };
          })
          .filter((c) => c.code && c.code.length > 1)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
        setFilteredCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
        // Fallback
        const fallback = [
          { name: "India", code: "+91", flag: "" },
          { name: "United States", code: "+1", flag: "" },
          { name: "United Kingdom", code: "+44", flag: "" },
        ];
        setCountries(fallback);
        setFilteredCountries(fallback);
      }
    };

    fetchCountries();

    const successStatus = localStorage.getItem("vahc_form_success");
    if (successStatus === "true") {
      setShowSuccess(true);
    }

    // Click outside listener for dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries when searchTerm changes
  useEffect(() => {
    const filtered = countries.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.includes(searchTerm),
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  // Services offered (as dropdown options)
  const services = [
    "Acupressure Therapy",
    "Acupuncture Therapy",
    "Auricular Therapy",
    "Byol Magnet Therapy",
    "Seed Therapy",
    "Colour Therapy",
    "Marma Therapy",
    "Neurochakra Quantum Healing",
    "Pranic Healing",
    "Bach Flower Remedy",
    "Pendulum Dowsing",
    "Reiki Healing",
    "Astrology Consultation",
    "Numerology Consultation",
    "Other",
  ];

  // Updated Consultation Areas based on services offered
  const consultationAreas = [
    "Pain Management & Relief",
    "Stress & Anxiety Relief",
    "Energy Balance & Healing",
    "Emotional Well-being",
    "Spiritual Growth",
    "Life Guidance & Direction",
    "Chronic Health Issues",
    "Sleep & Relaxation",
    "Relationship Harmony",
    "Career & Success",
    "Personal Transformation",
    "General Wellness",
  ];

  // Urgency Options
  const urgencyOptions = [
    { id: "within-48-hours", label: "Within 48 hours" },
    { id: "within-week", label: "Within a week" },
    { id: "flexible", label: "Flexible timing" },
  ];

  // Contact Methods
  const contactMethods = [
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone Call" },
    { id: "whatsapp", label: "WhatsApp" },
    { id: "video", label: "Video Call" },
  ];

  // Best Time to Contact
  const contactTimes = [
    { id: "morning", label: "Morning (9 AM - 12 PM)" },
    { id: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
    { id: "evening", label: "Evening (4 PM - 8 PM)" },
    { id: "flexible", label: "Anytime" },
  ];

  // Helper Functions (keep all your existing helper functions here)
  const validateDOB = (dob) => {
    if (!dob) return "";

    const date = new Date(dob);
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 1);

    if (date > today) return "Date of birth cannot be in the future";
    if (date < minDate) return "Please enter a valid date (max 120 years old)";
    if (date > maxDate) return "Please enter a valid date (min 1 year old)";

    return "";
  };

  const validateAge = (age) => {
    if (!age) return "";
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      return "Please enter a valid age (1-120)";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone) return "Phone number is required";
    const phoneRegex =
      /^[\+]?[1-9][\d]{0,15}$|^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
    const cleanPhone = phone.replace(/[^\d+]/g, "");

    if (!phoneRegex.test(cleanPhone))
      return "Please enter a valid phone number";
    if (cleanPhone.length < 8) return "Phone number is too short";

    return "";
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  // Check if astrology/numerology fields are required
  const isAstrologyNumerology = () => {
    return (
      formData.consultationType === "Astrology Consultation" ||
      formData.consultationType === "Numerology Consultation"
    );
  };

  // Handle field blur for immediate validation
  const handleBlur = (fieldName) => {
    setFieldTouched((prev) => ({ ...prev, [fieldName]: true }));
    validateField(fieldName, formData[fieldName]);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    let processedValue = value;

    if (name === "phone") {
      processedValue = value.replace(/[^\d+\-()\s]/g, "");
    }

    if (name === "age") {
      processedValue = value.replace(/\D/g, "");
      if (processedValue.length > 3)
        processedValue = processedValue.slice(0, 3);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : processedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (fieldTouched[name]) {
      validateField(name, type === "checkbox" ? checked : processedValue);
    }
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2)
          error = "Name must be at least 2 characters";
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "dob":
        if (value && !formData.age) error = validateDOB(value);
        break;
      case "age":
        if (value && !formData.dob) error = validateAge(value);
        break;
      case "height":
        if (value) {
          const heightValue = value.toLowerCase().trim();
          const isFeet =
            heightValue.includes("ft") || heightValue.includes("'");
          const isCm = heightValue.includes("cm");
          const numericValue = parseFloat(heightValue);

          if (isNaN(numericValue)) {
            error = "Please enter a valid height (e.g., 165cm or 5.5ft)";
          } else if (isFeet && (numericValue < 1 || numericValue > 10)) {
            error = "Please enter a valid height in feet (1-10 ft)";
          } else if (!isFeet && (numericValue < 40 || numericValue > 250)) {
            error = "Please enter a valid height (40-250 cm)";
          }
        }
        break;
      case "weight":
        if (value) {
          const weightNum = parseFloat(value);
          if (isNaN(weightNum) || weightNum < 1 || weightNum > 300) {
            error = "Please enter a valid weight (1-300 kg)";
          }
        }
        break;
      case "bloodPressure":
        if (value) {
          const bpRegex = /^\d{2,3}\/\d{2,3}$/;
          if (!bpRegex.test(value)) {
            error = "Please enter BP in format: 120/80";
          }
        }
        break;

      case "bloodGlucose":
        if (value) {
          const glucoseNum = parseFloat(value);
          if (isNaN(glucoseNum) || glucoseNum < 50 || glucoseNum > 1000) {
            error = "Please enter a valid blood glucose level (50-1000 mg/dL)";
          }
        }
        break;
      case "consultationType":
        if (!value) error = "Please select a consultation type";
        break;
      case "complaint":
        if (!value.trim()) error = "Concern description is required";
        else if (value.trim().length < 10)
          error =
            "Please describe your concern in more detail (minimum 10 characters)";
        break;
      case "timeOfBirth":
        if (isAstrologyNumerology() && !value)
          error = "Time of Birth is required for this consultation type";
        break;
      case "placeOfBirth":
        if (isAstrologyNumerology() && !value.trim())
          error = "Place of Birth is required for this consultation type";
        break;
      default:
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }

    return !error;
  };

  const handleAreaToggle = (area) => {
    setFormData((prev) => {
      const areas = [...prev.consultationAreas];
      if (areas.includes(area)) {
        return {
          ...prev,
          consultationAreas: areas.filter((a) => a !== area),
        };
      } else {
        return { ...prev, consultationAreas: [...areas, area] };
      }
    });
  };

  const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;
    return phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // List of all fields that have validation logic
    const allFields = [
      "name",
      "dob",
      "age",
      "timeOfBirth",
      "placeOfBirth",
      "phone",
      "email",
      "height",
      "weight",
      "bloodPressure",
      "bloodGlucose",
      "consultationType",
      "complaint",
    ];

    setFieldTouched(
      allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}),
    );

    // Validate all fields
    const validationResults = allFields.map((field) =>
      validateField(field, formData[field]),
    );

    // Special case: DOB/Age for astrology/numerology
    let dobAgeError = "";
    if (isAstrologyNumerology() && !formData.dob && !formData.age) {
      dobAgeError = "Please provide either Date of Birth or Age";
      setErrors((prev) => ({ ...prev, dob: dobAgeError }));
    }

    // Check if any validation failed
    const hasErrors = validationResults.includes(false) || dobAgeError;

    if (hasErrors) {
      setIsSubmitting(false);

      // Find the first field name that has an error
      const failedFieldIndex = validationResults.indexOf(false);
      let firstErrorField = "";

      if (failedFieldIndex !== -1) {
        firstErrorField = allFields[failedFieldIndex];
      } else if (dobAgeError) {
        firstErrorField = "dob";
      }

      // Scroll to the first error field
      if (firstErrorField) {
        setTimeout(() => {
          const errorElement = document.querySelector(
            `[name="${firstErrorField}"]`,
          );
          if (errorElement) {
            const yOffset = -150; // Sticky header offset
            const elementY =
              errorElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementY + yOffset,
              behavior: "smooth",
            });
            // Try to focus after scroll
            setTimeout(() => errorElement.focus({ preventScroll: true }), 600);
          }
        }, 100);
      }
      return;
    }

    try {
      // Prepare email data
      const emailData = {
        to_name: import.meta.env.VITE_OWNER_NAME,
        to_email: import.meta.env.VITE_OWNER_EMAIL,
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        from_phone: `${formData.countryCode} ${formData.phone}`,

        // Consultation Details
        consultation_type: formData.consultationType,
        concern: formData.complaint.trim(),
        areas_of_discussion:
          formData.consultationAreas.join(", ") || "None selected",
        urgency:
          urgencyOptions.find((opt) => opt.id === formData.urgency)?.label ||
          formData.urgency,

        // Personal Information
        date_of_birth: formData.dob || "Not provided",
        age: formData.age || "Not provided",
        time_of_birth: formData.timeOfBirth || "Not applicable",
        place_of_birth: formData.placeOfBirth.trim() || "Not applicable",
        address: formData.address.trim() || "Not provided",

        // NEW: Health Information
        height: formData.height || "Not provided",
        weight: formData.weight ? `${formData.weight} kg` : "Not provided",
        sleep_pattern:
          formData.sleep.charAt(0).toUpperCase() + formData.sleep.slice(1),
        appetite: formData.appetite
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        diet_preference:
          formData.dietPreference === "vegetarian"
            ? "Vegetarian"
            : "Non-Vegetarian",
        bowel_movement: formData.bowelMovement
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        blood_glucose: formData.bloodGlucose.trim() || "Not provided",
        blood_pressure: formData.bloodPressure.trim() || "Not provided",
        medications: formData.medications.trim() || "None reported",

        // NEW: Emotional State
        mood: formData.mood
          ? formData.mood.charAt(0).toUpperCase() + formData.mood.slice(1)
          : "Not provided",
        taste_preference: formData.tastePreference
          ? formData.tastePreference.charAt(0).toUpperCase() +
            formData.tastePreference.slice(1)
          : "Not provided",

        // Contact Preferences
        preferred_contact:
          contactMethods.find(
            (method) => method.id === formData.preferredContactMethod,
          )?.label || formData.preferredContactMethod,
        best_time:
          contactTimes.find((time) => time.id === formData.bestTimeToContact)
            ?.label || formData.bestTimeToContact,

        // Submission Info
        submission_date: new Date().toLocaleString(),
        receive_updates: formData.receiveUpdates ? "Yes" : "No",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log("Email sent successfully:", result.text);
      localStorage.setItem("vahc_form_success", "true");
      setShowSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({
        submit:
          error.status === 422
            ? "There was an issue with your submission. Please check all fields and try again."
            : "Failed to submit. Please check your internet connection and try again.",
      });
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
            Book a<span className="consultation-highlight"> Consultation</span>
          </h1>
          <p className="consultation-hero-subtitle">
            Schedule a guided consultation to align your mindset, energy, and
            overall wellness with expert support with VAHC (Vibrant Aura
            Holistic Center).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="consultation-main-content">
        <div className="consultation-container">
          {/* Form Container */}
          <div className="consultation-form-container">
            {showSuccess ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h2>Request Submitted Successfully!</h2>
                <p>
                  Our team will contact you within 24 hours to confirm your
                  consultation.
                </p>
                <p>
                  A confirmation email has been sent to our team. You'll hear
                  from us soon.
                </p>
                <button
                  className="success-back-btn"
                  onClick={() => {
                    localStorage.removeItem("vahc_form_success");
                    setFormData(initialFormData);
                    setErrors({});
                    setFieldTouched({});
                    setShowSuccess(false);
                  }}
                >
                  Book Another Consultation
                </button>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="consultation-form"
                noValidate
              >
                <h2 className="form-title">Consultation Request Form</h2>
                <p className="form-subtitle">
                  Please fill in all required information for booking.
                </p>

                {/* Personal Information Section */}
                <div className="form-section">
                  <h3 className="section-title">Personal Information</h3>
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
                        onBlur={() => handleBlur("name")}
                        className={`form-input ${errors.name ? "error" : ""}`}
                        placeholder="Enter your full name"
                        required
                      />
                      {errors.name && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Date of Birth</label>
                      <div className="input-with-hint">
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("dob")}
                          className={`form-input ${errors.dob ? "error" : ""}`}
                          max={new Date().toISOString().split("T")[0]}
                          min={
                            new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() - 120,
                              ),
                            )
                              .toISOString()
                              .split("T")[0]
                          }
                        />
                        <small className="field-hint">
                          Click calendar icon or use date picker
                        </small>
                      </div>
                      {errors.dob && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.dob}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Age (if DOB unknown)</label>
                      <div className="input-with-hint">
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("age")}
                          className={`form-input ${errors.age ? "error" : ""}`}
                          placeholder="Enter your age"
                          maxLength={3}
                        />
                        <small className="field-hint">
                          Numbers only (1-120)
                        </small>
                      </div>
                      {errors.age && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.age}</span>
                        </div>
                      )}
                    </div>

                    {isAstrologyNumerology() && (
                      <>
                        <div className="form-group">
                          <label>
                            Time of Birth <span className="required">*</span>
                          </label>
                          <input
                            type="time"
                            name="timeOfBirth"
                            value={formData.timeOfBirth}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("timeOfBirth")}
                            className={`form-input ${errors.timeOfBirth ? "error" : ""}`}
                          />
                          {errors.timeOfBirth && (
                            <div className="error-message-with-icon">
                              <FaExclamationCircle />
                              <span>{errors.timeOfBirth}</span>
                            </div>
                          )}
                        </div>

                        <div className="form-group">
                          <label>
                            Place of Birth <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="placeOfBirth"
                            value={formData.placeOfBirth}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("placeOfBirth")}
                            className={`form-input ${errors.placeOfBirth ? "error" : ""}`}
                            placeholder="City, State, Country"
                          />
                          {errors.placeOfBirth && (
                            <div className="error-message-with-icon">
                              <FaExclamationCircle />
                              <span>{errors.placeOfBirth}</span>
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    <div className="form-group">
                      <label>
                        Contact Number <span className="required">*</span>
                      </label>
                      <div className="phone-input-container">
                        <div
                          className="custom-country-dropdown"
                          ref={dropdownRef}
                        >
                          <div
                            className="dropdown-selected"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            <span>{formData.countryCode}</span>
                            <FaChevronDown
                              className={isDropdownOpen ? "open" : ""}
                            />
                          </div>

                          {isDropdownOpen && (
                            <div className="dropdown-panel">
                              <div className="search-box">
                                <FaSearch />
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={searchTerm}
                                  onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              <div className="country-list scrollable">
                                {filteredCountries.map((c, index) => (
                                  <div
                                    key={`${c.code}-${index}`}
                                    className="country-item"
                                    onClick={() => {
                                      setFormData({
                                        ...formData,
                                        countryCode: c.code,
                                      });
                                      setIsDropdownOpen(false);
                                      setSearchTerm("");
                                    }}
                                  >
                                    <span className="country-info">
                                      {c.name} ({c.code})
                                    </span>
                                  </div>
                                ))}
                                {filteredCountries.length === 0 && (
                                  <div className="no-results">
                                    No countries found
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("phone")}
                          className={`form-input phone-main-input ${errors.phone ? "error" : ""}`}
                          placeholder="555-123-4567"
                          required
                        />
                      </div>
                      {errors.phone && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.phone}</span>
                        </div>
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
                        onBlur={() => handleBlur("email")}
                        className={`form-input ${errors.email ? "error" : ""}`}
                        placeholder="you@example.com"
                        required
                      />
                      {errors.email && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group full-width">
                      <label>Current Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="Your complete address..."
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                {/* Add this section after the address field in the Personal Information section */}

                {/* Health Information Section */}
                <div className="form-section">
                  <h3 className="section-title">
                    Health Information (Optional)
                  </h3>
                  <p className="section-subtitle">
                    This information helps provide more personalized guidance
                  </p>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Height (ft/cm)</label>
                      <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("height")}
                        className={`form-input ${errors.height ? "error" : ""}`}
                        placeholder="e.g., 5.8ft or 165cm"
                      />
                      {errors.height && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.height}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("weight")}
                        className={`form-input ${errors.weight ? "error" : ""}`}
                        placeholder="e.g., 65"
                        min="10"
                        max="300"
                        step="0.1"
                      />
                      {errors.weight && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.weight}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Sleep Pattern</label>
                      <select
                        name="sleep"
                        value={formData.sleep}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">-- Select Sleep Pattern --</option>
                        <option value="normal">Normal</option>
                        <option value="sound">Sound</option>
                        <option value="disturbed">Disturbed</option>
                        <option value="insomnia">Insomnia</option>
                        <option value="oversleeping">Oversleeping</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Appetite</label>
                      <select
                        name="appetite"
                        value={formData.appetite}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">-- Select Appetite --</option>
                        <option value="normal">Normal</option>
                        <option value="low">Low</option>
                        <option value="no-hunger">Do not feel hungry</option>
                        <option value="increased">Increased</option>
                        <option value="irregular">Irregular</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Diet Preference</label>
                      <div className="diet-options">
                        <label className="diet-option">
                          <input
                            type="radio"
                            name="dietPreference"
                            value="vegetarian"
                            checked={formData.dietPreference === "vegetarian"}
                            onChange={handleInputChange}
                          />
                          <span>Vegetarian</span>
                        </label>
                        <label className="diet-option">
                          <input
                            type="radio"
                            name="dietPreference"
                            value="non-vegetarian"
                            checked={
                              formData.dietPreference === "non-vegetarian"
                            }
                            onChange={handleInputChange}
                          />
                          <span>Non-Vegetarian</span>
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Bowel Movement (Stool Information)</label>
                      <select
                        name="bowelMovement"
                        value={formData.bowelMovement}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">-- Select Bowel Movement --</option>
                        <option value="normal">Normal</option>
                        <option value="constipation">Constipation</option>
                        <option value="loose-stools">Loose Stools</option>
                        <option value="irregular">Irregular</option>
                        <option value="diarrhea">Diarrhea</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Recent Blood Glucose / HbA1c</label>
                      <input
                        type="text"
                        name="bloodGlucose"
                        value={formData.bloodGlucose}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("bloodGlucose")}
                        className={`form-input ${errors.bloodGlucose ? "error" : ""}`}
                        placeholder="e.g., 120 mg/dL or 6.5%"
                      />
                      <small className="field-hint">
                        Enter value with units (mg/dL or %)
                      </small>
                      {errors.bloodGlucose && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.bloodGlucose}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Blood Pressure</label>
                      <input
                        type="text"
                        name="bloodPressure"
                        value={formData.bloodPressure}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("bloodPressure")}
                        className={`form-input ${errors.bloodPressure ? "error" : ""}`}
                        placeholder="e.g., 120/80"
                      />
                      <small className="field-hint">
                        Format: systolic/diastolic
                      </small>
                      {errors.bloodPressure && (
                        <div className="error-message-with-icon">
                          <FaExclamationCircle />
                          <span>{errors.bloodPressure}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group full-width">
                      <label>Medications (If any)</label>
                      <textarea
                        name="medications"
                        value={formData.medications}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="List any current medications, supplements, or treatments..."
                        rows={3}
                      />
                      <small className="field-hint">
                        Include dosage and frequency if known
                      </small>
                    </div>
                  </div>
                </div>

                {/* Emotional State Section */}
                <div className="form-section">
                  <h3 className="section-title">
                    Emotional State & Preferences
                  </h3>
                  <p className="section-subtitle">
                    Understanding your emotional state helps in holistic
                    assessment
                  </p>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Predominant Mood</label>
                      <select
                        name="mood"
                        value={formData.mood}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">-- Select Current Mood --</option>
                        <option value="happy">Happy / Content</option>
                        <option value="calm">Calm / Peaceful</option>
                        <option value="anxious">Anxious / Worried</option>
                        <option value="sad">Sad / Low</option>
                        <option value="angry">Angry / Frustrated</option>
                        <option value="irritable">Irritable</option>
                        <option value="lethargic">Lethargic / Dull</option>
                        <option value="stressed">Stressed / Overwhelmed</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Preferred Taste</label>
                      <select
                        name="tastePreference"
                        value={formData.tastePreference}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">-- Select Preferred Taste --</option>
                        <option value="sweet">Sweet</option>
                        <option value="sour">Sour</option>
                        <option value="salty">Salty</option>
                        <option value="spicy">Spicy / Pungent</option>
                        <option value="bitter">Bitter</option>
                        <option value="astringent">Astringent</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Consultation Type */}
                <div className="form-section">
                  <h3 className="section-title">
                    Consultation Type <span className="required">*</span>
                  </h3>
                  {errors.consultationType && (
                    <div className="error-message-with-icon block-error">
                      <FaExclamationCircle />
                      <span>{errors.consultationType}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("consultationType")}
                      className={`form-select ${errors.consultationType ? "error" : ""}`}
                      required
                    >
                      <option value="">-- Select a service --</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {isAstrologyNumerology() && (
                    <div className="info-notice">
                      <p>
                        <strong>Note:</strong> For {formData.consultationType},
                        accurate birth details (DOB/Time/Place) are required for
                        precise analysis.
                      </p>
                    </div>
                  )}
                </div>

                {/* Areas to Discuss */}
                <div className="form-section">
                  <h3 className="section-title">
                    What would you like to focus on? (Optional)
                  </h3>
                  <p className="section-subtitle">
                    Select areas you'd like to address during your consultation
                  </p>

                  <div className="areas-grid">
                    {consultationAreas.map((area, index) => (
                      <label key={index} className="area-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.consultationAreas.includes(area)}
                          onChange={() => handleAreaToggle(area)}
                        />
                        <span className="area-label">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Complaint/Concern */}
                <div className="form-section">
                  <h3 className="section-title">
                    Concern / Reason for Consultation{" "}
                    <span className="required">*</span>
                  </h3>
                  {errors.complaint && (
                    <div className="error-message-with-icon block-error">
                      <FaExclamationCircle />
                      <span>{errors.complaint}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <textarea
                      name="complaint"
                      value={formData.complaint}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("complaint")}
                      className={`form-textarea ${errors.complaint ? "error" : ""}`}
                      placeholder="Please describe your concern in detail. What specific issues or challenges are you facing? What would you like to achieve through this consultation?"
                      rows={4}
                      required
                    />
                    <div className="char-count">
                      {formData.complaint.length} characters (minimum 10
                      required)
                      {formData.complaint.length < 10 && (
                        <span className="char-warning">
                          {" "}
                          - {10 - formData.complaint.length} more needed
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section">
                  <h3 className="section-title">Additional Information</h3>

                  <div className="preferences-grid">
                    <div className="preference-group">
                      <label>Preferred contact method</label>
                      <div className="contact-methods">
                        {contactMethods.map((method) => (
                          <label key={method.id} className="method-option">
                            <input
                              type="radio"
                              name="preferredContactMethod"
                              value={method.id}
                              checked={
                                formData.preferredContactMethod === method.id
                              }
                              onChange={handleInputChange}
                            />
                            <span>{method.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="preference-group">
                      <label>Best time to contact</label>
                      <select
                        name="bestTimeToContact"
                        value={formData.bestTimeToContact}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        {contactTimes.map((time) => (
                          <option key={time.id} value={time.id}>
                            {time.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="preference-group">
                      <label>How soon do you need guidance?</label>
                      <div className="urgency-options">
                        {urgencyOptions.map((option) => (
                          <label key={option.id} className="urgency-option">
                            <input
                              type="radio"
                              name="urgency"
                              value={option.id}
                              checked={formData.urgency === option.id}
                              onChange={handleInputChange}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
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
                      <span>Receive updates and tips via email (optional)</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="submit-section">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span> Submitting...
                      </>
                    ) : (
                      <>
                        <FaCheckCircle /> Submit Consultation Request
                      </>
                    )}
                  </button>
                  <p className="privacy-note">
                    Your information is kept strictly confidential and secure.
                  </p>
                </div>

                {errors.submit && (
                  <div className="submit-error">
                    <FaExclamationCircle className="submit-error-icon" />
                    <span className="error-message">{errors.submit}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
