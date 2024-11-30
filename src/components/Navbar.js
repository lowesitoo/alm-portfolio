import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/"); 
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-gray-900"
      } transition-all duration-300 dark:bg-gray-700 dark:text-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <button onClick={() => handleNavClick("hero")} className="cursor-pointer hover:text-green-400 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-400">ALM</h1> </button>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <li>
              <button onClick={() => handleNavClick("hero")} className="cursor-pointer hover:text-green-400 text-white">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("about")} className="cursor-pointer hover:text-green-400 text-white">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("skills")} className="cursor-pointer hover:text-green-400 text-white">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("certifications")} className="cursor-pointer hover:text-green-400 text-white">
                Certifications
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("testimonials")} className="cursor-pointer hover:text-green-400 text-white">
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("contact")} className="cursor-pointer hover:text-green-400 text-white">
                Contact
              </button>
            </li>
            <li>
              <RouterLink to="/resume" className="hover:text-green-400 text-white">
                Resume
              </RouterLink>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 bg-green-400 text-gray-900 rounded-lg shadow-lg hover:bg-green-300 transition"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
