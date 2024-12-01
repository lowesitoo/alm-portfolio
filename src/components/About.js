const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-white dark:bg-gray-100 dark:text-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src="/lm-picture.jpg"
            alt="Luis"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-green-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-400 mb-10">
            About Me
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300 dark:text-gray-700">
            I’m Luis, an IT Help Desk Technician and Freelancer passionate
            about solving technical challenges. I specialize in security,
            networking, and troubleshooting, helping individuals and businesses
            maintain secure and reliable systems. With a strong background in
            customer support, I ensure smooth technical operations.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-300 dark:text-gray-700 leading-relaxed">
            Outside of work, I enjoy gaming and exploring new technologies,
            keeping me motivated and creative.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-green-400 text-gray-900 rounded-lg shadow-md hover:bg-green-300 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
