import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA A+",
      description: "Foundational IT skills, including troubleshooting and support.",
    },
    {
      name: "CompTIA Network+",
      description: "Proficiency in managing, configuring, and troubleshooting networks.",
    },
    {
      name: "CompTIA IT Operations Specialist",
      description: "Validated expertise in IT infrastructure and operations.",
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      description:
        "Proficiency in cloud concepts, Azure core services, networking, security, cost management, and Azure monitoring and compliance tools.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 relative text-white dark:text-black transition-colors duration-300"
    >
      {/* Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black dark:from-gray-100 dark:to-gray-300 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-green-400 mb-10">
          Certifications
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-opacity-90 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition dark:bg-gray-200 dark:shadow-md dark:hover:shadow-lg"
            >
              {/* Icon */}
              <div className="text-green-400 text-4xl mb-6">
                <FaCertificate />
              </div>
              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-4">
                {certification.name}
              </h3>
              {/* Card Description */}
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-700 leading-relaxed">
                {certification.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
