import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
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
    const mappedSectionId = sectionId === "home" ? "hero" : sectionId;
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(mappedSectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(mappedSectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-gray-900"
      } transition-all duration-300 dark:bg-gray-700 dark:text-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          onClick={() => handleNavClick("hero")}
          className="text-2xl sm:text-3xl font-bold text-green-400 cursor-pointer"
        >
          ALM
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center space-x-6 text-white ml-auto">
          {["Home", "About", "Skills", "Certifications", "Testimonials", "Contact"].map(
            (item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="hover:text-green-400"
                >
                  {item}
                </button>
              </li>
            )
          )}
          <li>
            <RouterLink to="/resume" className="hover:text-green-400">
              Resume
            </RouterLink>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 bg-green-400 text-gray-900 rounded-lg shadow-lg hover:bg-green-300 transition"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-green-400 hover:text-green-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800 text-white absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Skills", "Certifications", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      handleNavClick(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className="hover:text-green-400"
                  >
                    {item}
                  </button>
                </li>
              )
            )}
            <li>
              <RouterLink
                to="/resume"
                className="hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </RouterLink>
            </li>
            {/* Theme Toggle for Mobile */}
            <li>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false); // Close menu after toggling theme
                }}
                className="p-2 bg-green-400 text-gray-900 rounded-lg shadow-lg hover:bg-green-300 transition"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
