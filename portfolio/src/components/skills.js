import React from "react";
import "../styles/skills.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import REACT from "../assets/react.png";
import DJANGO from "../assets/django.png";

function Skills() {
  return (
    <section className="about" id="skills">
      <div className="text-container">
        <h1 className="title">What I do</h1>
        <p className="description">
          I am from the Philippines and currently based in Iligan City. I hold a
          Bachelor of Science in Information Technology and work as a web and
          mobile application developer. I am currently engaged in freelance
          projects, building and developing modern applications.
        </p>
      </div>

      <div className="skills">
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <img src={HTML} alt="HTML" />
            </div>
            <p className="skill-name">HTML</p>
            <div className="skill-level">
              <div className="skill-level-bar">
                <div
                  className="skill-level-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <div className="skill-level-text">90%</div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <img src={CSS} alt="CSS" />
            </div>
            <p className="skill-name">CSS</p>
            <div className="skill-level">
              <div className="skill-level-bar">
                <div
                  className="skill-level-fill"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="skill-level-text">85%</div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <img src={REACT} alt="React" />
            </div>
            <p className="skill-name">REACT</p>
            <div className="skill-level">
              <div className="skill-level-bar">
                <div
                  className="skill-level-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="skill-level-text">70%</div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <img src={REACT} alt="React Native" />
            </div>
            <p className="skill-name">REACT NATIVE</p>
            <div className="skill-level">
              <div className="skill-level-bar">
                <div
                  className="skill-level-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="skill-level-text">70%</div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <img src={DJANGO} alt="Django" />
            </div>
            <p className="skill-name">DJANGO</p>
            <div className="skill-level">
              <div className="skill-level-bar">
                <div
                  className="skill-level-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="skill-level-text">70%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
