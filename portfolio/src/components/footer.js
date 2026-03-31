import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-wrapper">
        <div className="footer-line"></div>

        <h2 className="footer-text">
          Don’t hesitate to drop me an email <br />
          or contact me via my social profiles
        </h2>

        <div className="footer-middle">
          <div className="footer-email">
            <a href="mailto:mitsangelo@gmail.com">mitsangelo@gmail.com</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/mitch.angelo.620701"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mitsangeloo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mitch-angelo-pacanon-1565842a2/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/mitsangelo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mitch Angelo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
