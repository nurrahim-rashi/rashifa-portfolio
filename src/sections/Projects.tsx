import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

import { SiMongodb, SiExpress, SiWordpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaPhp, FaCss3Alt, FaFigma } from "react-icons/fa";
import { convertToWebp } from "../utils/image";
import backgrounddd from "../images/bg3.png";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isPortrait = height > width;

      // ONLY 2 CASES YOU WANTED:
      // - iPad Mini vertical
      // - iPad Air vertical
      const isTargetTabletPortrait = isPortrait && width >= 700 && width <= 900;

      setVisibleCount(isTargetTabletPortrait ? 2 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Netflix Clone",
      desc: "A Netflix-style streaming web app built using the MERN stack with user auth and dynamic content.",
      link: "",
      tech: [
        <SiMongodb />,
        "MongoDB",
        <SiExpress />,
        "Express",
        <FaReact />,
        "React",
        <FaNodeJs />,
        "Node",
      ],
    },
    {
      title: "Visaku (Apple Developer Academy Project)",
      desc: "Design prototype using Figma, Rive, and Rotato.",
      link: "https://rashifa.webflow.io/work/visaku-app",
      status: "App Store",
      tech: [<FaFigma />, "Figma"],
    },
    {
      title: "Green Digital Certificate Capstone Project",
      desc: "Sustainability-focused project in the digital space with INCO Academy.",
      link: "",
    },
    {
      title: "Pixelkind",
      desc: "Custom WordPress site with Elementor and learned to customize themes with PHP & CSS.",
      tech: [
        <SiWordpress />,
        "WordPress",
        <FaPhp />,
        "PHP",
        <FaCss3Alt />,
        "CSS",
      ],
    },
    {
      title: "Curcool",
      desc: "Mobile app & web app project, designed with Figma and automated testing using Katalon Studio.",
      tech: [<FaFigma />, "Figma", "Katalon Studio"],
    },
  ];

  const displayedProjects = showMore
    ? projects
    : projects.slice(0, visibleCount);

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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
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
    </section>
  );
}
