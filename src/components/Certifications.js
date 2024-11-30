import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    { name: "CompTIA A+", description: "Foundational IT skills, including troubleshooting and support." },
    { name: "CompTIA Network+", description: "Proficiency in managing, configuring, and troubleshooting networks." },
    { name: "CompTIA IT Operations Specialist", description: "Validated expertise in IT infrastructure and operations." },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 dark:text-black"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-10">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition dark:bg-gray-200 dark:shadow-md dark:hover:shadow-lg"
            >
              <div className="text-green-400 text-4xl mb-4">
                <FaCertificate />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400 mb-2">
                {certification.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-700">{certification.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
