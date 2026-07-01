// import "preline";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ScrollUpButton from "./components/ScrollUpButton";
import ScrollDownButton from "./components/ScrollDownButton";
import Awards from "./sections/Awards";

function App() {
  return (
    <>
      {/* NAVBAR HARUS DI LUAR FLOW */}
      <Navbar />

      {/* MAIN WRAPPER */}
      <main className="relative overflow-x-hidden bg-white text-neutral-900 transition-colors duration-300 font-sans">
        <Hero />
        <FeaturedProjects />
        <Awards />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* FLOATING BUTTONS */}
      <ScrollUpButton />
      <ScrollDownButton />
    </>
  );
}

export default App;
