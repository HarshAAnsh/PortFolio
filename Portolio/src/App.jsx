import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Education from "./Components/Education";
import Certificates from "./Components/Certificates";
import AboutSection from "./Components/AboutSection";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-[#111827] min-h-screem">
      <Header />
      <HeroSection />
      <Education />
      <Certificates />
      <AboutSection />
      <Experience />
      <Projects />
      <ContactSection />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
