import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    window.particlesJS.load("particles-js", "/particles-config.json", function () {
      console.log("Particles.js config loaded");
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-black text-white dark:from-gray-100 dark:via-gray-300 dark:to-gray-200 dark:text-black flex flex-col justify-center items-center text-center px-6"
    >
      {/* Particles.js Container */}
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>

      {/* Hero Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          Hi, I'm Luis
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light mb-8">
          IT Help Desk Technician & Freelancer specializing in Networking,
          Security, and Troubleshooting.
        </p>
        <div className="space-x-4 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.upwork.com/freelancers/~01b22dba180ca1c7fd"
            className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-green-300 transition"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="border border-green-400 text-green-400 px-6 py-3 rounded-lg hover:bg-green-400 hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
