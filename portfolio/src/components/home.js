import React from "react";
import "../styles/home.css";
import profileImg from "../assets/mypicture.png";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero_left">
        <p className="hero_greeting">Hello there I'm</p>
        <h1 className="hero_name">Mitch Angelo</h1>

        <div className="hero_text">
          <p className="hero_role">Web & Mobile Developer</p>
          <p className="hero_bio">
            I enjoy building clean web experiences that make users love what
            they use.
          </p>
        </div>

        <div className="hero_actions">
          <a href="/Resume.pdf" className="hero_button" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero_right">
        <div className="image-wrapper">
          <div className="shape"></div>
          <img src={profileImg} alt="Mitch Angelo" className="hero_image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
