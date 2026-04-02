import React from "react";
import "../styles/projects.css";
import bgImage from "../assets/project-background.png";
import bgImage2 from "../assets/project-background2.png";
import bgImage3 from "../assets/project-background3.png";

function Project() {
  return (
    <section className="project" id="project">
      <div className="project-wrapper">
        <div className="project-header">
          <p className="project-title">My Projects</p>
          <p className="project-desc">
            A collection of projects demonstrating my skills in web
            <br />
            and mobile application development.
          </p>
        </div>

        <div className="card-wrapper">
          <a
            href="https://github.com/mitsangelo/Medbay-Therapy-Learning-Center-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="card-overlay"></div>
            <div className="card-text">
              <h3>Web Design</h3>
              <p>Management System</p>
            </div>
          </a>

          <a
            href="https://github.com/mitsangelo/Robinsons-Cinema-Ticket-Reservation"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ backgroundImage: `url(${bgImage2})` }}
          >
            <div className="card-overlay"></div>
            <div className="card-text">
              <h3>Web Design</h3>
              <p>Reservation System</p>
            </div>
          </a>

          <a
            href="https://github.com/mitsangelo/Medbay-Therapy-Learning-Center-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ backgroundImage: `url(${bgImage3})` }}
          >
            <div className="card-overlay"></div>
            <div className="card-text">
              <h3>Web Design</h3>
              <p>Booking System</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
