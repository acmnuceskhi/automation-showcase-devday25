import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { teamData, categoryOrder } from "../data/teamData";
import { TeamMember } from "../types/team";

// Component to render a single team member card
const MemberCard = ({
  member,
  level,
}: {
  member: TeamMember;
  level: number;
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
    <div className="relative group bg-white/9 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center gap-3 md:gap-4 transition-all duration-300 hover:bg-[#ff33339f]/20">
      <div
        className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ${getBorderStyles()} group-hover:scale-105 transition-transform duration-300`}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">
          {member.name}
        </h3>
        {/* Role display removed */}
      </div>
      <div className="flex gap-4">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl md:text-2xl hover:text-[#ff33339f] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl md:text-2xl hover:text-[#ff33339f] transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </div>
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
    <div
      className="w-full mb-8 md:mb-12"
      id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <h2 className={getTitleStyles()}>
        <span className="relative inline-block">
          {title}
          <span
            className={`absolute bottom-0 left-0 w-full h-1 ${getUnderlineColor()} rounded-full`}
          ></span>
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)]"
          >
            <MemberCard member={member} level={level} />
          </div>
        ))}
      </div>
    </div>
  );
};

// New component for category navigation header with improved styling
const CategoryNav = () => {
  return (
    <div className="w-full mb-6 md:mb-10 sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-md py-3 px-2 rounded-lg border border-[#ff33339f]">
      {/* Mobile vertical menu - always visible */}
      <div className="md:hidden">
        <div className="flex flex-col items-center">
          {categoryOrder.map((category, index) => (
            <div
              key={category.id}
              className="w-full flex flex-col items-center"
            >
              <a
                href={`#section-${category.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-white hover:text-[#ff33339f] transition-colors py-2 text-base font-semibold"
              >
                {getSingleWordTitle(category.title)}
              </a>
              {index < categoryOrder.length - 1 && (
                <span className="w-16 h-px bg-gray-700 my-1"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop horizontal menu */}
      <div className="hidden md:flex flex-wrap justify-center gap-2">
        {categoryOrder.map((category, index) => (
          <div key={category.id} className="flex items-center">
            <a
              href={`#section-${category.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="text-white hover:text-[#ff33339f] transition-colors px-3 py-1 text-base font-semibold whitespace-nowrap"
            >
              {getSingleWordTitle(category.title)}
            </a>
            {index < categoryOrder.length - 1 && (
              <span className="text-gray-500 text-sm">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get single word titles
const getSingleWordTitle = (title: string): string => {
  switch (title) {
    case "Leads":
      return "Leads";
    case "Coordinators":
      return "Coordinators";
    case "Deputies":
      return "Deputies";
    case "Executives":
      return "Executives";
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
