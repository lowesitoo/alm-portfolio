import {
  FaNetworkWired,
  FaShieldAlt,
  FaTools,
  FaUsers,
  FaDesktop,
  FaServer,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <FaNetworkWired />, name: "Networking (LAN/WAN, VPN, TCP/IP)" },
    {
      icon: <FaShieldAlt />,
      name: "Security (Firewall Management, Endpoint Protection)",
    },
    { icon: <FaTools />, name: "Troubleshooting (Hardware, Software, Network)" },
    { icon: <FaUsers />, name: "Customer Support & IT Service Management" },
    { icon: <FaServer />, name: "System Installation & Configuration" },
    {
      icon: <FaDesktop />,
      name: "Remote Assistance & Remote Desktop Tools",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white dark:from-gray-100 dark:via-gray-300 dark:to-gray-200 dark:text-black"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl sm:text-3xl font-extrabold text-green-400 mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition dark:bg-gray-200 dark:shadow-md dark:hover:shadow-lg"
            >
              <div className="text-green-400 text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-300 dark:text-gray-700">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
