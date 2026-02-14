import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceLinkClick = (e, filter) => {
    e.preventDefault();
    navigate(`/?filter=${filter}#services-section`);
  };

  return (
    <footer className="spiritual-footer">
      <div className="footer-content">
        {/* Logo and Address Section */}
        <div className="footer-contact">
          <div className="footer-logo">
            <img
              src="/logo.png"
              alt="Vibrant Aura Holistic Center"
              className="footer-logo-image"
            />
            <div className="footer-logo-text">
              <span className="footer-logo-main">Vibrant Aura</span>
              <span className="footer-logo-sub">Holistic Center</span>
            </div>
          </div>

          <div className="footer-address">
            <h4>Visit Our Center</h4>
            <p className="address-line">#10, 1st Floor, 2nd Cross</p>
            <p className="address-line">Ganapati Road, Arehalli</p>
            <p className="address-line">Bangalore - 560061</p>
            <p className="contact-info">
              <strong>Phone:</strong> +91 9148056161
            </p>
            <p className="contact-info">
              <strong>Email:</strong>sales@vahc.in
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Services</h4>
            <a
              href="#therapy"
              onClick={(e) => handleServiceLinkClick(e, "therapy")}
            >
              Therapies
            </a>
            <a
              href="#healing"
              onClick={(e) => handleServiceLinkClick(e, "healing")}
            >
              Energy Healing
            </a>
            <a
              href="#energy"
              onClick={(e) => handleServiceLinkClick(e, "energy")}
            >
              Energy Work
            </a>
            <a
              href="#natural"
              onClick={(e) => handleServiceLinkClick(e, "natural")}
            >
              Natural Remedies
            </a>
            <a
              href="#divination"
              onClick={(e) => handleServiceLinkClick(e, "divination")}
            >
              Divination
            </a>
            <a
              href="#consultation"
              onClick={(e) => handleServiceLinkClick(e, "consultation")}
            >
              Consultations
            </a>
          </div>
          <div className="link-group">
            <h4>Consultations</h4>
            <a
              href=""
              onClick={() => navigate("/consultation")}
              className="pointer"
            >
              Astrology Consultation
            </a>
            <a
              href=""
              onClick={() => navigate("/consultation")}
              className="pointer"
            >
              Numerology Consultation
            </a>
            <a
              href=""
              onClick={() => navigate("/consultation")}
              className="pointer"
            >
              Bach Flower Remedy
            </a>
            <a
              href=""
              onClick={() => navigate("/consultation")}
              className="pointer"
            >
              Pendulum Dowsing
            </a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a onClick={() => navigate("/")} href="" className="pointer">
              Home
            </a>
            <a onClick={() => navigate("/about")} href="" className="pointer">
              About Us
            </a>
            <a onClick={() => navigate("/contact")} href="" className="pointer">
              Contact
            </a>
            <a
              onClick={() => navigate("/consultation")}
              href=""
              className="pointer"
            >
              Consultation
            </a>
            {/* <a onClick={() => navigate("/privacy")}>Privacy Policy</a>
            <a onClick={() => navigate("/terms")}>Terms of Service</a>
            <a onClick={() => navigate("/faq")}>FAQ</a> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-hours">
          <h5>Center Hours</h5>
          <p>Monday - Saturday: 10:30 AM - 8:00 PM</p>
          <p>Sunday: Service Available Only on Prior Appointment</p>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Vibrant Aura Holistic Center. All rights
          reserved.
        </p>

        {/* <div className="footer-social">
          <a href="#facebook" className="social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
              />
            </svg>
          </a>
          <a href="#instagram" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm9.1 2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
              />
            </svg>
          </a>
          <a href="#youtube" className="social-icon" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M10 15l5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
              />
            </svg>
          </a>
          <a href="#whatsapp" className="social-icon" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12c0 1.85.49 3.59 1.35 5.09L2 22l5-1.35A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3 14.41c-.38.23-.87.23-1.26.07-1.1-.53-2.24-1.26-3.36-2.38-1.12-1.12-1.85-2.26-2.38-3.36-.16-.39-.16-.88.07-1.26.23-.38.62-.65 1.08-.65h.52c.28 0 .56.14.75.39.19.25.31.56.39.87.08.31.16.68.31 1.02.08.18.08.31 0 .47-.08.15-.23.31-.39.47-.15.15-.31.31-.47.39-.15.08-.31.08-.47 0-.34-.15-.7-.23-1.02-.31-.31-.08-.62-.2-.87-.39-.25-.19-.39-.47-.39-.75v-.52c0-.46.27-.85.65-1.08.38-.23.87-.23 1.26-.07 1.1.53 2.24 1.26 3.36 2.38 1.12 1.12 1.85 2.26 2.38 3.36.16.39.16.88-.07 1.26-.23.38-.62.65-1.08.65h-.52c-.28 0-.56-.14-.75-.39-.19-.25-.31-.56-.39-.87-.08-.31-.16-.68-.31-1.02-.08-.18-.08-.31 0-.47.08-.15.23-.31.39-.47.15-.15.31-.31.47-.39.15-.08.31-.08.47 0 .34.15.7.23 1.02.31.31.08.62.2.87.39.25.19.39.47.39.75v.52c0 .46-.27.85-.65 1.08z"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
