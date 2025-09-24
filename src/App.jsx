// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificate";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import About from "./components/About";
import PersonalSection from "./components/PersonalSection";

function App() {
  return (
    <div className="App scroll-smooth">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Awards />
      <PersonalSection />
      <Contact />
    </div>
  );
}

export default App;
