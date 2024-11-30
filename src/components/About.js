const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/lm-picture.jpg"
            alt="Luis"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-green-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-4">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
            I’m Luis, an IT Help Desk Technician and Freelancer with a passion
            for solving technical problems. I specialize in security,
            networking, and troubleshooting, helping individuals and businesses
            maintain secure and reliable systems. With a strong background in
            customer support, I ensure smooth technical operations.
          </p>
          <p className="mt-4 text-gray-300 dark:text-gray-700">
            Outside of work, I enjoy playing games and exploring new
            technologies, which keeps me motivated and creative.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-4 sm:px-6 py-3 bg-green-400 text-gray-900 rounded-lg shadow-md hover:bg-green-300 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
