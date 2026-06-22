import "preline";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ScrollDownButton from "./components/ScrollDownButton";

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-neutral-900 transition-colors duration-300 font-sans">
        <Hero />
        <FeaturedProjects />
        <Projects />
        <About />
        <Contact />
      </main>

      <a
        href="#top"
        className="fixed bottom-20 right-6 z-50 bg-white border border-[#2A3D63] shadow p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#2A3D63]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>

      <ScrollDownButton />
    </>
  );
}

export default App;
