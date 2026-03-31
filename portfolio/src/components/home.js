import React from "react";
import "../styles/home.css";

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
          <button className="hero_button">Download CV</button>
        </div>
      </div>

      <div className="hero_right">
        <h1>Right Content</h1>
      </div>
    </section>
  );
}

export default Home;
