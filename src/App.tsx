import "./App.css";
import Squares from "./components/Squares";
import TeamGrid from "./components/TeamGrid";
import Portfolio from "./components/Portfolio";
import { motion } from "framer-motion";
import { categoryOrder } from "./data/teamData";
import { useEffect } from "react";

// helper for single word titles
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

// category navigation header
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
      {/* desktop horizontal menu */}
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

function App() {
  // Add effect to handle hash navigation on page load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element with the id matching the hash
      const id = window.location.hash.substring(1);
      let element = document.getElementById(id);

      // Special case for #team since it's a common URL format
      if (id === "team" && !element) {
        element = document.getElementById("team-section");
      }

      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="App">
      <div className="min-h-screen w-full bg-gradient-to-br from-[#141414] to-[#0a0a0a] relative py-6 md:py-10 px-2 md:px-3">
        <div className="absolute inset-0 z-0">
          <Squares borderColor="rgb(135,22,25, 0.5)" />
        </div>

        <div className="w-full max-w-[1200px] mx-auto rounded-xl p-3 md:p-6 text-white text-center relative mb-6 md:mb-10 z-10">
          <img
            src="/logo.png"
            alt="DevDay'25"
            className="cursor-pointer mx-auto w-[200px] md:w-[300px] mb-4 md:mb-8"
          />

          {/* Portfolio section */}
          <div className="mb-16">
            <h1 className="font-semibold text-5xl mb-8">Team Automation</h1>
            <CategoryNav />
            <Portfolio />
          </div>

          {/* Team section */}
          <div id="team" className="mt-10">
            <h2 className="font-semibold text-4xl mb-8">
              Brains Behind Automation
            </h2>
            <TeamGrid />
          </div>

          {/* Credits section */}
          <div className="mt-8 text-gray-400 text-sm">
            <p>Created with ❤️ by Raahim</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
