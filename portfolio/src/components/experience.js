import React from "react";
import "../styles/experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-wrapper">
        <h1 className="experience-title">My Work Experience</h1>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-left">
              <p>SimCrit Mobile App</p>
              <p>
                Mobile App Development <br />
                (Collaborative Project)
              </p>
              <p>July 2025 - December 2025</p>
            </div>

            <div className="timeline-center">
              <span className="timeline-dot"></span>
              <span className="timeline-line"></span>
            </div>

            <div className="timeline-right">
              <p className="project-role">
                <span>Role :</span>
                <br />
                Mobile App Developer
              </p>
              <p className="project-description">
                A missing person reporting and tracking system that enables
                families to submit cases and volunteers to assist in locating
                individuals. Developed the mobile application and backend
                services, including API integration, real-time notifications,
                and role-based functionality to support efficient communication
                and case management.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <p>FindMe Management System</p>
              <p>
                Web & Mobile App Development <br />
                (Collaborative Project)
              </p>
              <p>August 2025 - February 2026</p>
            </div>

            <div className="timeline-center">
              <span className="timeline-dot"></span>
              <span className="timeline-line"></span>
            </div>

            <div className="timeline-right">
              <p className="project-role">
                <span>Role :</span>
                <br />
                Mobile App Developer
              </p>
              <p className="project-description">
                A missing person reporting and tracking system that enables
                families to submit cases and volunteers to assist in locating
                individuals. Developed the mobile application and backend
                services, including API integration, real-time notifications,
                and role-based functionality to support efficient communication
                and case management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
