import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";

import backgrounddd from "../images/bg3.png";
import { projects } from "../data/projects";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isPortrait = height > width;
      const isTargetTabletPortrait = isPortrait && width >= 700 && width <= 900;

      setVisibleCount(isTargetTabletPortrait ? 2 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedProjects = showMore
    ? projects
    : projects.slice(0, visibleCount);

  return (
    <motion.section
      id="projects"
      className="py-20 text-white px-4 bg-[#2A3D63] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgrounddd})`,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-6xl font-serif mb-10 inline-block">
          Other Projects✨
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12 font-serif">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 text-xl text-white border border-neutral-400 rounded-full transition hover:bg-white hover:ring-2 hover:ring-white hover:border-neutral-800 hover:text-neutral-800 flex items-center gap-2 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "See Less" : "See More"}
            <span className="inline-block transition-transform">
              {showMore ? "↑" : "↓"}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
