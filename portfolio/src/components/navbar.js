import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <header className="top-nav">
        <nav className="top-nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
        </nav>
      </header>

      <aside className="side-nav">
        <a
          href="https://www.instagram.com/mitsangeloo/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </aside>
    </>
  );
}

export default Navbar;
