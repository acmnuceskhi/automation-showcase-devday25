import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { teamData, categoryOrder } from "../data/teamData";
import { TeamMember } from "../types/team";
import { motion } from "framer-motion";

// Component to render a single team member card
const MemberCard = ({
  member,
  level,
  index,
}: {
  member: TeamMember;
  level: number;
  index: number;
}) => {
  // Add different styling based on seniority level
  const getBorderStyles = () => {
    switch (level) {
      case 1: // Leads - Gold border
        return "border-4 border-yellow-400/70";
      case 2: // Coordinators & Deputies - Silver border
        return "border-4 border-gray-300/70";
      case 3: // Executives - Bronze border
        return "border-4 border-amber-600/70";
      default: // Members - Brand color border, thinner
        return "border-2 border-[#ff33339f]";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.4, // Faster animation
        delay: Math.min(index * 0.04, 0.2), // Reduced and capped delay
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -5,
        backgroundColor: "rgba(255, 51, 51, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative z-1 group bg-[#141414]/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center gap-3 md:gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ${getBorderStyles()}`}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="text-center">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">
          {member.name}
        </h3>
        {/* Role display removed */}
      </div>
      <div className="flex gap-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl md:text-2xl"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl md:text-2xl"
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.div>
  );
};

// Component to render a category section with its members
const CategorySection = ({
  title,
  members,
  level,
}: {
  title: string;
  members: TeamMember[];
  level: number;
}) => {
  if (!members || members.length === 0) return null;

  // All headings now use the same size, only underline color changes
  const getTitleStyles = () => {
    return "text-2xl font-bold mb-6 text-center relative";
  };

  const getUnderlineColor = () => {
    switch (level) {
      case 1:
        return "bg-yellow-400/70"; // Gold
      case 2:
        return "bg-gray-300/70"; // Silver
      case 3:
        return "bg-amber-600/70"; // Bronze
      default:
        return "bg-[#ff33339f]"; // Brand color
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mb-8 md:mb-12"
      id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <h2 className={getTitleStyles()}>
        <span className="relative inline-block">
          {title}
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.0,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1], // Custom bezier curve for smoother underline animation
            }}
            className={`absolute bottom-0 left-0 h-1 ${getUnderlineColor()} rounded-full`}
          ></motion.span>
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)]"
          >
            <MemberCard member={member} level={level} index={index} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// New component for category navigation header with improved styling
const CategoryNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="hidden md:block w-full mb-6 md:mb-10 sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-md py-2 px-2 rounded-lg border border-[#ff33339f]"
    >
      {/* Desktop horizontal menu */}
      <div className="flex flex-wrap justify-center gap-2">
        {categoryOrder.map((category, index) => (
          <div key={category.id} className="flex items-center">
            <motion.a
              whileHover={{ scale: 1.05, color: "#ff33339f" }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              href={`#section-${category.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="text-white px-3 py-1 text-base font-semibold whitespace-nowrap"
            >
              {getSingleWordTitle(category.title)}
            </motion.a>
            {index < categoryOrder.length - 1 && (
              <span className="text-gray-500 text-sm">|</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Helper function to get single word titles
const getSingleWordTitle = (title: string): string => {
  switch (title) {
    case "Lead":
      return "Lead";
    case "Co-Leads":
      return "Co-Leads";
    case "Executives":
      return "Executives";
    case "Deputies":
      return "Deputies";
    case "Members":
      return "Members";
    default:
      return title;
  }
};

const TeamGrid = () => {
  return (
    <div className="w-full max-w-[1200px] p-2 md:p-4">
      <CategoryNav />
      {categoryOrder.map((category) => (
        <CategorySection
          key={category.id}
          title={category.title}
          members={teamData[category.id]}
          level={category.level}
        />
      ))}
    </div>
  );
};

export default TeamGrid;
