import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.jpeg";
import project3 from "../images/project3.png";

import { FaFigma, FaHtml5, FaLaravel, FaPhp, FaDatabase } from "react-icons/fa";

const scrollbarHideStyle = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = scrollbarHideStyle;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Accessibility Design Challenge 2025",
      img: project1,
      link: "https://www.figma.com/slides/WFnRmduispoXcLrgG0GtvB/Kesehatan-6?node-id=1-429&t=CTNGwEkNQ4Jag6Il-1",
      role: "UI/UX Design",
      tech: [
        { label: "Figma", icon: <FaFigma /> },
        { label: "HTML", icon: <FaHtml5 /> },
      ],
    },
    {
      title: "Booksy",
      img: project2,
      link: "https://rashifa.laravelsanbercode.my.id/",
      role: "Fullstack",
      tech: [
        { label: "Laravel", icon: <FaLaravel /> },
        { label: "PHP", icon: <FaPhp /> },
        { label: "MySQL", icon: <FaDatabase /> },
      ],
    },
    {
      title: "DetakKita",
      img: project3,
      link: "https://rashifa.webflow.io/work/detakkita",
      role: "UI/UX Design",
      tech: [{ label: "Figma", icon: <FaFigma /> }],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      id="featured-projects"
      className="py-20 md:py-28 bg-[#F4EFE5] text-[#2A3D63]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 md:space-x-12 pb-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="min-w-full snap-start grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* TEXT SIDE */}
              <motion.div
                variants={itemVariants}
                className="md:py-10 text-center md:text-left"
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-4">
                  {project.role}
                </p>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] mb-6">
                  {project.title}
                </h3>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-8 text-sm md:text-base">
                  {project.tech.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span>{t.icon}</span>
                      <span className="font-medium">{t.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-base md:text-xl px-5 md:px-6 py-2 md:py-3
                    bg-[#2A3D63] text-white rounded-full
                    transition hover:ring-2 hover:ring-white
                    hover:bg-white hover:text-[#2A3D63]
                    font-serif hover:scale-105 inline-block
                  "
                >
                  Explore →
                </a>
              </motion.div>

              {/* IMAGE SIDE */}
              <motion.div
                variants={itemVariants}
                className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* DOTS (UNCHANGED) */}
        <div className="flex justify-center items-center mt-6 gap-2 md:gap-3">
          {projects.map((_, idx) => {
            const active = currentIndex === idx;

            return (
              <button
                key={idx}
                onClick={() => {
                  scrollRef.current?.scrollTo({
                    left: idx * (scrollRef.current?.offsetWidth || 0),
                    behavior: "smooth",
                  });
                }}
                className={`rounded-full transition-all ${
                  active
                    ? "w-4 h-4 md:w-5 md:h-5 bg-[#2A3D63] scale-110"
                    : "w-2 h-2 md:w-3 md:h-3 border border-[#2A3D63]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
