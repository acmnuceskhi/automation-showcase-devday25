import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { teamData, categoryOrder } from "../data/teamData";
import { TeamMember } from "../types/team";
import { motion } from "framer-motion";

// component for single team member card
const MemberCard = ({
  member,
  level,
  index,
}: {
  member: TeamMember;
  level: number;
  index: number;
}) => {
  // styling based on level
  const getBorderStyles = () => {
    switch (level) {
      case 1: // leads - gold
        return "border-4 border-yellow-400/70";
      case 2: // coordinators & deputies - silver
        return "border-4 border-gray-300/70";
      case 3: // executives - bronze
        return "border-4 border-amber-600/70";
      default: // members - brand color
        return "border-2 border-[#ff33339f]";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.4, // faster animation
        delay: Math.min(index * 0.04, 0.2), // reduced and capped delay
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -5,
        backgroundColor: "rgba(255, 51, 51, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative z-1 group bg-[#141414]/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center gap-3 md:gap-4 shadow-lg shadow-[#ff3333]/10 border border-[#ff3333]/20"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden ${getBorderStyles()}`}
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
        {/* role display removed */}
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

// category section with members
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

  // same size headings
  const getTitleStyles = () => {
    return "text-2xl font-bold mb-6 text-center relative";
  };

  const getUnderlineColor = () => {
    switch (level) {
      case 1:
        return "bg-yellow-400/70"; // gold
      case 2:
        return "bg-gray-300/70"; // silver
      case 3:
        return "bg-amber-600/70"; // bronze
      default:
        return "bg-[#ff33339f]"; // brand color
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
              ease: [0.22, 1, 0.36, 1], // custom bezier curve for smoother underline animation
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

const TeamGrid = () => {
  return (
    <div className="w-full max-w-[1200px] p-2 md:p-4">
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
