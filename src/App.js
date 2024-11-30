import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/alm-resume/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Timeline />
              <Certifications />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
