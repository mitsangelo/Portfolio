import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Project from "./components/projects";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-container">
        <Home />
        <Skills />
        <Experience />
        <Project />
        <Footer />
      </main>
    </div>
  );
}

export default App;
