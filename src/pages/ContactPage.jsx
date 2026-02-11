import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaEnvelope,
  FaDirections,
} from "react-icons/fa";
import "../styles/ContactPage.css";

const ContactPage = ({ darkMode }) => {
  const phoneNumber = "9148056161";
  const whatsappNumber = "919148056161";
  const address =
    "#10, 1st floor, 2nd Cross, Ganapati Road, Arehalli, Bangalore - 560061";
  const latitude = "12.91101738739882";
  const longitude = "77.53892897507545";

  // WhatsApp message with pre-filled text
  const whatsappMessage = `Hello! I'd like to book an appointment for consultation. My details:\n\nName: \nPhone: \nPreferred Service: `;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Google Maps embed URL (for the iframe)
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.9487209522335!2d77.53892897507545!3d12.91101738739882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzM5LjciTiA3N8KwMzInMjkuNCJF!5e0!3m2!1sen!2sin!4v1770481985646!5m2!1sen!2sin";

  // CORRECTED: Google Maps directions link using coordinates
  const googleMapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=ChIJl4L7l5RUrjsR9wAYXIGwHgU`;

  // Alternative: Use the short URL you provided
  const googleMapsShortLink = "https://maps.app.goo.gl/bKN1T9MtQQDetSi27";

  // Alternative: Use address-based directions
  const googleMapsAddressDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  // Opening hours
  const openingHours = [
    { day: "Monday - Saturday", time: "10:30 AM - 8:00 PM" },
    { day: "Sunday", time: "Service Available Only on Prior Appointment" },
  ];

  return (
    <div className={`contact-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            Get in<span className="contact-highlight"> Touch</span>
          </h1>
          <p className="contact-hero-subtitle">
            VAHC Provides you a platform to connect with our experts for any
            queries or consultations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-main-content">
        <div className="contact-container">
          {/* Contact Information Cards */}
          <div className="contact-info-section">
            <div className="contact-info-grid">
              {/* Phone Card */}
              <div className="contact-card">
                <div className="contact-card-icon phone-icon">
                  <FaPhone />
                </div>
                <div className="contact-card-content">
                  <h3>Phone Appointment</h3>
                  <p className="contact-description">
                    Call directly to book your consultation
                  </p>
                  <a
                    href={`tel:+91${phoneNumber}`}
                    className="contact-link phone-link"
                  >
                    +91 {phoneNumber.substring(0, 4)} {phoneNumber.substring(4)}
                  </a>
                  <p className="contact-note">
                    Available during business hours
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-card">
                <div className="contact-card-icon whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-card-content">
                  <h3>WhatsApp Message</h3>
                  <p className="contact-description">
                    Quick appointment booking & queries
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link whatsapp-link"
                  >
                    <FaWhatsapp /> Message on WhatsApp
                  </a>
                  <p className="contact-note">Instant response, 24/7</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="contact-card">
                <div className="contact-card-icon address-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-card-content">
                  <h3>Our Location</h3>
                  <p className="contact-description">
                    Visit us for in-person consultations
                  </p>
                  <p className="contact-address">{address}</p>
                  <a
                    href={googleMapsShortLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link directions-link"
                  >
                    <FaDirections /> Get Directions
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="contact-card">
                <div className="contact-card-icon hours-icon">
                  <FaClock />
                </div>
                <div className="contact-card-content">
                  <h3>Opening Hours</h3>
                  <p className="contact-description">
                    Best times to visit or call
                  </p>
                  <div className="hours-list">
                    {openingHours.map((hour, index) => (
                      <div key={index} className="hour-item">
                        <span className="hour-day">{hour.day}</span>
                        <span className="hour-time">{hour.time}</span>
                      </div>
                    ))}
                  </div>
                  {/* <p className="contact-note">By appointment only</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="maps-section">
            <h2 className="maps-title">
              <FaMapMarkerAlt /> Find Us Easily
            </h2>
            <p className="maps-description">
              Our center is conveniently located in Arehalli, Bangalore
            </p>

            <div className="map-container">
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vibrant Aura Holistic Center Location"
                className="google-map"
              ></iframe>

              <div className="map-overlay-info">
                <div className="overlay-content">
                  <h4>Vibrant Aura Holistic Center</h4>
                  <p className="overlay-address">{address}</p>
                  <div className="overlay-actions">
                    <a
                      href={googleMapsShortLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn directions-btn"
                    >
                      <FaDirections /> Open in Maps
                    </a>
                    <a
                      href={`tel:+91${phoneNumber}`}
                      className="overlay-btn call-btn"
                    >
                      <FaPhone /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Section */}
          <div className="quick-contact-section">
            <div className="quick-contact-content">
              <h2>Need Immediate Assistance?</h2>
              <p>
                For urgent consultations or emergency guidance, reach out
                directly through any of these channels.
              </p>

              <div className="quick-contact-buttons">
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="quick-btn phone-quick-btn"
                >
                  <FaPhone /> Call Now
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-btn whatsapp-quick-btn"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href={googleMapsShortLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-btn directions-quick-btn"
                >
                  <FaDirections /> Directions
                </a>
              </div>

              <div className="contact-notes">
                <p>
                  <strong>Note:</strong> Please call during business hours for
                  immediate response. WhatsApp messages are checked regularly.
                </p>
                <p>
                  For detailed consultations, please use the Consultation Form
                  for comprehensive analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
