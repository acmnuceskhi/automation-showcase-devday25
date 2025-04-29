import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCertificate,
  FaEnvelope,
  FaChartBar,
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNpm,
} from "react-icons/fa";
import { FaGithub, FaPython } from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiFlutter,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiEslint,
  SiHeroku,
  SiVercel,
  SiJsonwebtokens,
  SiFramer,
  SiShadcnui,
  SiDart,
  SiGradle,
  SiJest,
  SiPandas,
} from "react-icons/si";

// project config data
const projects = [
  {
    id: 1,
    title: "Attendance System",
    description:
      "Real-time verification platform that validates attendance codes, confirms location, timing and prevents automated entries",
    icon: <FaCalendarAlt className="text-2xl md:text-3xl" />,
    color: "bg-blue-500/20 border-blue-500/40",
    buttonColor: "bg-blue-500/80 hover:bg-blue-600/90",
    link: "https://attendance.devday25.com",
    isExternal: true,
  },
  {
    id: 2,
    title: "Certificate Generation",
    description:
      "On-the-fly instant certificate creation for participating teams, available immediately after competition completion",
    icon: <FaCertificate className="text-2xl md:text-3xl" />,
    color: "bg-purple-500/20 border-purple-500/40",
    buttonColor: "bg-purple-500/80 hover:bg-purple-600/90",
    link: "https://attendance.devday25.com",
    isExternal: true,
  },
  {
    id: 3,
    title: "Emails Automation",
    description:
      "Bulk email distribution system for organizers with critical announcements, venue details and competition updates for attendees",
    icon: <FaEnvelope className="text-2xl md:text-3xl" />,
    color: "bg-green-500/20 border-green-500/40",
    buttonColor: "bg-green-500/80 hover:bg-green-600/90",
    link: "#emails",
    isInternal: true,
  },
  {
    id: 4,
    title: "Results Website",
    description:
      "Live ranking platform for the closing ceremony, displaying team standings and competition outcomes in real-time",
    icon: <FaChartBar className="text-2xl md:text-3xl" />,
    color: "bg-amber-500/20 border-amber-500/40",
    buttonColor: "bg-amber-500/80 hover:bg-amber-600/90",
    link: "https://results.devday25.com",
    isExternal: true,
  },
  {
    id: 5,
    title: "PR Portal",
    description:
      "Mobile dashboard for PR teams to manage competition schedules, update event details and monitor attendance in real-time",
    icon: <FaMobileAlt className="text-2xl md:text-3xl" />,
    color: "bg-red-500/20 border-red-500/40",
    buttonColor: "bg-red-500/80 hover:bg-red-600/90",
    link: "#prportal",
    isInternal: true,
  },
];

// tech stack config
const technologies = [
  // Frontend Frameworks & Libraries
  { name: "ReactJS", icon: <FaReact className="text-3xl text-[#61DAFB]" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-3xl text-[#3178C6]" />,
  },
  { name: "Vite", icon: <SiVite className="text-3xl text-[#646CFF]" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-3xl text-[#06B6D4]" />,
  },
  { name: "shadcn", icon: <SiShadcnui className="text-3xl text-white" /> },
  { name: "Framer", icon: <SiFramer className="text-3xl text-[#0055FF]" /> },

  // Backend & Databases
  { name: "NodeJS", icon: <FaNodeJs className="text-3xl text-[#68D391]" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-3xl text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-[#6EE7B7]" /> },
  {
    name: "JWT",
    icon: (
      <SiJsonwebtokens className="text-3xl text-[#000000] bg-white rounded-sm p-[1px]" />
    ),
  },

  // Mobile & Cross-Platform
  { name: "Flutter", icon: <SiFlutter className="text-3xl text-[#38BDF8]" /> },
  { name: "Dart", icon: <SiDart className="text-3xl text-[#38BDF8]" /> },
  {
    name: "Gradle",
    icon: (
      <SiGradle className="text-3xl text-[#02303A] bg-white p-[2px] rounded-sm" />
    ),
  },

  // Testing & Package Management
  { name: "Jest", icon: <SiJest className="text-3xl text-[#C21325]" /> },
  { name: "npm", icon: <FaNpm className="text-3xl text-[#CB3837]" /> },

  // DevOps & Deployment
  { name: "GitHub", icon: <FaGithub className="text-3xl text-white" /> },
  { name: "Heroku", icon: <SiHeroku className="text-3xl text-[#A78BFA]" /> },
  { name: "Vercel", icon: <SiVercel className="text-3xl text-white" /> },

  // Core Languages
  { name: "Python", icon: <FaPython className="text-3xl text-[#60A5FA]" /> },
  { name: "JavaScript", icon: <FaJs className="text-3xl text-[#F7DF1E]" /> },

  // CSV Operations in Email Automation
  {
    name: "Pandas",
    icon: (
      <SiPandas
        className="text-3xl text-[#150458]"
        style={{ background: "white", padding: "2px", borderRadius: "2px" }}
      />
    ),
  },

  // Basic Tech & Tools
  { name: "ESLint", icon: <SiEslint className="text-3xl text-[#A78BFA]" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-3xl text-[#F97316]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-3xl text-[#3B82F6]" /> },
];

// projectcard component - renders project card with animation
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.04, 0.2),
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`relative z-1 group ${project.color} backdrop-blur-sm rounded-xl p-6 
      flex flex-col items-center gap-3 border-2 h-full overflow-hidden
      bg-[rgba(255,255,255,0.05)] shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]`}
    >
      {/* hover effect */}
      <div className="absolute -inset-x-1/2 -inset-y-1/2 z-0 h-[200%] w-[200%] opacity-10 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rotate-45 translate-x-[0%] -translate-y-[60%] animate-shine"></div>
      </div>
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#141414]/80 transition-transform duration-300 group-hover:scale-110">
        {project.icon}
      </div>
      {/* title */}
      <div className="h-10 flex items-center justify-center">
        <h3 className="text-xl font-semibold text-center">{project.title}</h3>
      </div>
      {/* description */}
      <div className="h-24 flex items-center">
        <p className="text-center text-gray-300">{project.description}</p>
      </div>

      {/* link button - displayed for all projects for consistent UI */}
      <div className="mt-auto relative z-10">
        {project.isExternal ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`${project.buttonColor} px-6 py-2 rounded-lg font-medium text-white 
            shadow-lg transition-all duration-300 inline-block cursor-pointer`}
          >
            View Project
          </a>
        ) : project.isInternal ? (
          <a
            href={project.link}
            onClick={(e) => e.stopPropagation()}
            className={`bg-gray-700/50 px-6 py-2 rounded-lg font-medium text-gray-300 
            border border-gray-600/40 transition-all duration-300 hover:bg-gray-700/70 inline-flex items-center gap-2 cursor-pointer`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="11"
                width="14"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 11V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16" r="2" fill="currentColor" />
            </svg>
            Internal Tool
          </a>
        ) : (
          <div
            className="bg-gray-700/30 px-6 py-2 rounded-lg font-medium text-gray-400 
            border border-gray-600/40 select-none opacity-70 inline-flex items-center gap-2"
            title="Coming Soon"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="11"
                width="14"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 11V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16" r="2" fill="currentColor" />
            </svg>
            Coming Soon
          </div>
        )}
      </div>
    </motion.div>
  );
};

// techlogo component - renders tech logo with animation
const TechLogo = ({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.3,
        delay: Math.min(index * 0.05, 0.3),
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-center gap-2 p-4"
    >
      <div className="bg-[#25252580] backdrop-blur-sm p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#ffffff10]">
        {tech.icon}
      </div>
      <span className="text-sm text-gray-300">{tech.name}</span>
    </motion.div>
  );
};

// portfolio component - showcases projects and tech stack
const Portfolio = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 md:p-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mb-8 md:mb-12"
      >
        <h2 className="text-3xl font-bold mb-6 text-center relative">
          <span className="relative inline-block">
            Our Projects
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.0,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 left-0 h-1 bg-[#ff33339f] rounded-full"
            ></motion.span>
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Here are some of the automation projects we've worked on for DevDay'25
          to streamline operations and enhance the experience for participants
          and organizers.
        </p>
        {/* responsive grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
        {/* tech stack section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-20 mb-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-center relative">
            <span className="relative inline-block">
              Technology Stack
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-0 h-1 bg-[#3333ff9f] rounded-full"
              ></motion.span>
            </span>
          </h2>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            Our automation projects leverage a diverse range of cutting-edge
            technologies to deliver robust and efficient solutions.
          </p>

          {/* tech stack display */}
          <div className="flex flex-wrap justify-center">
            {technologies.map((tech, techIndex) => (
              <TechLogo key={tech.name} tech={tech} index={techIndex} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
