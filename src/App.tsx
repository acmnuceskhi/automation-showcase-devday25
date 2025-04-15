import { Toaster } from "@/components/ui/sonner";
import "./App.css";
import Squares from "./components/Squares";
import TeamGrid from "./components/TeamGrid";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen w-full bg-gradient-to-br from-[#141414] to-[#0a0a0a] relative py-6 md:py-10 px-2 md:px-3">
        {/* Removing negative z-index to make squares visible again */}
        <div className="absolute inset-0 z-0">
          <Squares borderColor="rgb(135,22,25, 0.5)" />
        </div>

        <div className="w-full max-w-[1200px] mx-auto rounded-xl p-3 md:p-6 text-white text-center relative mb-6 md:mb-10 z-10">
          <img
            src="/logo.png"
            alt="DevDay'25"
            className="cursor-pointer mx-auto w-[200px] md:w-[300px] mb-4 md:mb-8"
          />
          <h1 className="font-semibold text-5xl mb-4 md:mb-8">
            Brains Behind Automation
          </h1>
          <TeamGrid />
        </div>
      </div>
      <Toaster position={"bottom-center"} />
    </div>
  );
}

export default App;
