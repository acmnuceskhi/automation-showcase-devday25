import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCertificate,
  FaEnvelope,
  FaChartBar,
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiFlutter } from "react-icons/si";

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
    link: "#attendance",
  },
  {
    id: 2,
    title: "Certificate Generation",
    description:
      "On-the-fly instant certificate creation for participating teams, available immediately after competition completion",
    icon: <FaCertificate className="text-2xl md:text-3xl" />,
    color: "bg-purple-500/20 border-purple-500/40",
    buttonColor: "bg-purple-500/80 hover:bg-purple-600/90",
    link: "#certificates",
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
  },
  {
    id: 4,
    title: "Results Website",
    description:
      "Live ranking platform for the closing ceremony, displaying team standings and competition outcomes in real-time",
    icon: <FaChartBar className="text-2xl md:text-3xl" />,
    color: "bg-amber-500/20 border-amber-500/40",
    buttonColor: "bg-amber-500/80 hover:bg-amber-600/90",
    link: "#results",
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
  },
];

// tech stack config
const technologies = [
  { name: "ReactJS", icon: <FaReact className="text-3xl text-blue-400" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-3xl text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-3xl text-green-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-3xl text-blue-300" /> },
  {
    name: "REST API",
    icon: <FaDatabase className="text-3xl text-purple-400" />,
  },
  { name: "ReactJS", icon: <FaReact className="text-3xl text-blue-400" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-3xl text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-3xl text-green-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-3xl text-blue-300" /> },
  {
    name: "REST API",
    icon: <FaDatabase className="text-3xl text-purple-400" />,
  },
  { name: "ReactJS", icon: <FaReact className="text-3xl text-blue-400" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-3xl text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-3xl text-green-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-3xl text-blue-300" /> },
  {
    name: "REST API",
    icon: <FaDatabase className="text-3xl text-purple-400" />,
  },
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
      viewport={{ once: false, amount: 0.2 }}
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
      <div className="h-20 flex items-center">
        <p className="text-center text-gray-300">{project.description}</p>
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
      <div className="bg-[#1a1a1a] p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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

          <div className="flex flex-wrap justify-center">
            {technologies.map((tech, index) => (
              <TechLogo key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
