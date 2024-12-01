import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

const timelineData = [
  {
    title: "IT Help Desk Technician",
    institution: "YMCA of the Rockies, Estes Park, CO",
    startDate: "April 2024",
    endDate: "Present",
    description: `
      I provide IT Help Desk support via phone, email, and in-person interactions using tools like Jira, BMS Kaseya, and NinjaOne.
      My responsibilities include managing workstations (Windows 10, Windows 11, macOS) and supporting software such as Microsoft Office 365, Adobe Acrobat, and Microsoft Teams.
      I also monitor IT security with WatchGuard software and configure network equipment, including Ubiquiti APs, Cambium modules, PoE injectors, and fiber networks.
    `,
    icon: <FaBriefcase />,
  },
  {
    title: "Music and Audiovisual Data Editor",
    institution: "BMAT Music Innovators, Barcelona, Spain",
    startDate: "July 2023",
    endDate: "Present",
    description: `
      I organize and maintain databases of music and audiovisual content, ensuring data accuracy and completeness.
      My role involves conducting detailed research on artists, albums, and movies, and resolving data-related issues using specialized tools for data quality checks.
    `,
    icon: <FaLaptopCode />,
  },
  {
    title: "CompTIA IT Operations Specialist Certification",
    institution: "Issued by CompTIA",
    startDate: "October 2024",
    endDate: "October 2027",
    description: `
      This certification validates my expertise in IT infrastructure, networking, and operations.
      I gained skills in security protocols, operational best practices, and troubleshooting hardware, software, and network issues.
    `,
    icon: <FaCertificate />,
  },
  {
    title: "CompTIA Network+ Certification",
    institution: "Issued by CompTIA",
    startDate: "October 2024",
    endDate: "October 2027",
    description: `
      I acquired proficiency in networking concepts, including TCP/IP, DNS, DHCP, and OSI models.
      I am skilled in configuring and troubleshooting routers, switches, and wireless access points, while following best practices for network security.
    `,
    icon: <FaCertificate />,
  },
  {
    title: "CompTIA A+ Certification",
    institution: "Issued by CompTIA",
    startDate: "July 2024",
    endDate: "October 2027",
    description: `
      This certification equipped me with foundational IT skills, including hardware setup, troubleshooting, and operating system management (Windows, macOS, and Linux).
      I also developed expertise in IT operational procedures and basic security practices.
    `,
    icon: <FaCertificate />,
  },
  {
    title: "Mid-Level Customer Success Executive",
    institution: "SmarTech Solutions Philippines Inc.",
    startDate: "May 2023",
    endDate: "March 2024",
    description: `
      I engaged with clients to identify and meet their requirements while ensuring smooth onboarding using Jira for ticket management.
      My role included training clients on the Media Meter platform, facilitating daily scrum meetings, and gathering feedback to improve the platform's functionality.
    `,
    icon: <FaBriefcase />,
  },
  {
    title: "Provider Data Management Specialist I",
    institution: "Carelon Global Solutions, Iloilo City, Philippines",
    startDate: "December 2020",
    endDate: "February 2023",
    description: `
      I validated and migrated sensitive personal health information into internal systems, ensuring compliance with business rules.
      I created automated reports and dashboards to present actionable insights and optimized workflows by minimizing data errors.
    `,
    icon: <FaBriefcase />,
  },
  {
    title: "Full Stack Development Bootcamp",
    institution: "StackTrek Inc., Iloilo City, Philippines",
    startDate: "July 2022",
    endDate: "January 2023",
    description: `
      I mastered full-stack development using the PERN stack (PostgreSQL, Express, React, Node.js).
      I developed a fully functional website application with CRUD endpoints, debugged code, and deployed projects using Vercel and Heroku.
    `,
    icon: <FaGraduationCap />,
  },
  {
    title: "IT Tech Support Intern",
    institution: "Callbox Inc., Iloilo City, Philippines",
    startDate: "October 2019",
    endDate: "March 2020",
    description: `
      I performed diagnostics and troubleshooting for hardware peripherals and network configurations, including IP allocations and DNS settings.
      My responsibilities included assembling IT hardware, ensuring optimal LAN connectivity, and monitoring server performance.
    `,
    icon: <FaLaptopCode />,
  },
  {
    title: "Bachelor of Science in Information Technology",
    institution: "University of San Agustin, Iloilo City, Philippines",
    startDate: "June 2016",
    endDate: "May 2020",
    description: `
      My specialization was in mobile app development using Android Studio and Java.
      I developed front-end applications using HTML, CSS, and JavaScript, and created a Unity-based educational game.
      I also gained experience in networking and system troubleshooting.
    `,
    icon: <FaGraduationCap />,
  },
];

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-800 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
          My Journey
        </h2>
        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-green-400"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-10 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-400 text-gray-900 rounded-full flex items-center justify-center text-2xl border-4 border-gray-900 z-10">
                {item.icon}
              </div>

              {/* Card */}
              <div
                className={`shadow-lg rounded-lg p-6 max-w-lg ${
                  index % 2 === 0
                    ? "mr-auto text-left bg-gray-800"
                    : "ml-auto text-left bg-gray-800"
                }`}
              >
                <h3 className="text-2xl font-semibold text-green-400 mb-2">
                  {item.title}
                </h3>
                <h4 className="text-lg text-gray-300 mb-2">
                  {item.institution}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {item.startDate} - {item.endDate}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
