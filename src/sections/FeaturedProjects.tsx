import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.jpeg";

import { FaFigma, FaHtml5, FaLaravel, FaPhp, FaDatabase } from "react-icons/fa";

const scrollbarHideStyle = `
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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
      title: "Core Pilates",
      img: project2,
      link: "https://core-pilates-rashifa.vercel.app/",
      role: "Fullstack",
      tech: [
        { label: "React", icon: <FaLaravel /> },
        { label: "Typescript", icon: <FaPhp /> },
      ],
    },

    {
      title: "DetakKita",
      img: project3,
      link: "https://rashifa.webflow.io/work/detakkita",
      role: "UI/UX Design",
      tech: [{ label: "Figma", icon: <FaFigma /> }],
    },
    {
      title: "Booksy",
      img: project4,
      link: "https://rashifa.laravelsanbercode.my.id/",
      role: "Fullstack",
      tech: [
        { label: "Laravel", icon: <FaLaravel /> },
        { label: "PHP", icon: <FaPhp /> },
        { label: "MySQL", icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <section className="py-28 bg-[#F4EFE5] text-[#2A3D63]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-serif mt-2">
            Selected Works 🍵
          </h2>
        </div>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-10 md:space-x-14 pb-10"
        >
          {projects.map((project, i) => {
            const active = currentIndex === i;

            return (
              <motion.div
                key={i}
                className="min-w-full snap-start flex justify-center"
                animate={{
                  scale: active ? 1 : 0.92,
                  rotate: active ? 0 : i % 2 === 0 ? -2 : 2,
                  opacity: active ? 1 : 0.55,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* STAMP WRAPPER */}
                <div className="relative w-[340px] md:w-[520px]">
                  {/* shadow */}
                  <div className="absolute inset-0 bg-black/10 blur-2xl translate-y-6 scale-95" />

                  {/* STAMP BODY */}
                  <div className="relative bg-[#fbfaf7] shadow-xl">
                    {/* 🧾 REAL PERFORATED FRAME (THIS IS THE KEY FIX) */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id="stamp-dots"
                            width="14"
                            height="14"
                            patternUnits="userSpaceOnUse"
                          >
                            <circle cx="7" cy="7" r="2.2" fill="#d6cbb6" />
                          </pattern>
                        </defs>

                        <rect
                          width="100%"
                          height="100%"
                          fill="none"
                          stroke="url(#stamp-dots)"
                          strokeWidth="18"
                        />
                      </svg>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={project.img}
                          className="h-full w-full object-cover transition duration-700 hover:scale-110"
                        />
                      </div>

                      <div className="mt-5 text-center">
                        <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-500">
                          {project.role}
                        </p>

                        <h3 className="text-2xl md:text-3xl font-serif mt-2">
                          {project.title}
                        </h3>

                        <div className="flex justify-center gap-3 mt-4 text-sm text-neutral-600">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="flex items-center gap-1">
                              {t.icon}
                              {t.label}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.link}
                          target="_blank"
                          className="inline-block mt-6 rounded-full bg-[#2A3D63] px-5 py-2 text-white font-serif hover:scale-105 transition hover:bg-white hover:text-[#2A3D63]"
                        >
                          Open Stamp →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => {
            const active = currentIndex === i;

            return (
              <button
                key={i}
                onClick={() => {
                  scrollRef.current?.scrollTo({
                    left: i * (scrollRef.current?.offsetWidth || 0),
                    behavior: "smooth",
                  });
                }}
                className={`transition-all rounded-full ${
                  active ? "w-6 h-2 bg-[#2A3D63]" : "w-2 h-2 bg-[#2A3D63]/30"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
