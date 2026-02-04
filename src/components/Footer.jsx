import React from "react";
import { GiLotus } from "react-icons/gi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="spiritual-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="/logo.png"
            alt="Divine Vastu & Spiritual"
            className="footer-logo-image"
          />
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Services</h4>
            <a href="#vastu">Vastu Shastra</a>
            <a href="#astrology">Astrology</a>
            <a href="#meditation">Meditation</a>
            <a href="#healing">Energy Healing</a>
          </div>
          <div className="link-group">
            <h4>Resources</h4>
            <a href="#blog">Spiritual Blog</a>
            <a href="#courses">Online Courses</a>
            <a href="#tools">Free Tools</a>
            <a href="#community">Community</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Divine Vastu & Spiritual. All rights
          reserved.
        </p>
        <div className="footer-social">
          <button className="social-icon">FB</button>
          <button className="social-icon">IG</button>
          <button className="social-icon">YT</button>
          <button className="social-icon">WA</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
