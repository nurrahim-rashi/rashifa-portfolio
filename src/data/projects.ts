import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

import { SiMongodb, SiExpress, SiWordpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaPhp, FaCss3Alt, FaFigma } from "react-icons/fa";

import backgrounddd from "../images/bg3.png";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="py-20 text-white px-4 bg-[#2A3D63] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgrounddd})`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-script font-bold mb-10 inline-block">
          Other Projects✨
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ALWAYS VISIBLE */}
          <ProjectCard
            title="Netflix Clone"
            desc="A Netflix-style streaming web app built using the MERN stack with user auth and dynamic content."
            link=""
            tech={[
              <SiMongodb />,
              "MongoDB",
              <SiExpress />,
              "Express",
              <FaReact />,
              "React",
              <FaNodeJs />,
              "Node",
            ]}
          />

          <ProjectCard
            title="Visaku (Apple Developer Academy Project)"
            desc="Design prototype using Figma, Rive, and Rotato."
            link="https://rashifa.webflow.io/work/visaku-app"
            status="App Store"
            tech={[<FaFigma />, "Figma"]}
          />

          <ProjectCard
            title="Green Digital Certificate Capstone Project"
            desc="Sustainability-focused project in the digital space with INCO Academy."
            link=""
          />

          {/* HIDDEN UNTIL SEE MORE */}
          {showMore && (
            <>
              <ProjectCard
                title="Pixelkind"
                desc="Custom WordPress site with Elementor and learned to customize themes with PHP & CSS."
                tech={[
                  <SiWordpress />,
                  "WordPress",
                  <FaPhp />,
                  "PHP",
                  <FaCss3Alt />,
                  "CSS",
                ]}
              />

              <ProjectCard
                title="Curcool"
                desc="Mobile app & web app project, designed with Figma and automated the testing using Katalon Studio."
                tech={[<FaFigma />, "Figma", "Katalon Studio"]}
              />
            </>
          )}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12 font-script">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 text-xl text-white border border-neutral-400 rounded-full transition hover:bg-white hover:ring-2 hover:ring-white hover:border-neutral-800 hover:text-neutral-800 flex items-center gap-2 hover:scale-105"
          >
            {showMore ? "See Less" : "See More"}
            <span className="inline-block transition-transform">
              {showMore ? "↑" : "↓"}
            </span>
          </button>
        </div>
      </div>

      {/* iPad mini + Air tweak (ONLY portrait feel fix) */}
      <style>{`
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          #projects .grid > *:nth-child(n+3) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}