import { useRef, useState, useEffect } from "react";
import { convertToWebp } from "../utils/image";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.jpeg";
import project3 from "../images/project3.png";

import { FaFigma, FaHtml5, FaLaravel, FaPhp, FaDatabase } from "react-icons/fa";

/* ================================
   GLOBAL SCROLLBAR HIDE STYLE
   ================================ */
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

  return (
    <section
      id="featured-projects"
      className="pt-20 md:pt-24 pb-24 md:pb-36 bg-[#F4EFE5] text-[#2A3D63]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="
            no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth
            space-x-6 md:space-x-12 pb-6 md:pb-10
          "
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="
                min-w-full snap-start flex flex-col lg:flex-row
                gap-8 md:gap-14 items-center
              "
            >
              {/* LEFT */}
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 mb-2">
                  {project.role}
                </p>

                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                  {project.title}
                </h3>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-2 mb-6 text-sm md:text-base">
                  {project.tech.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 md:gap-3">
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
                    font-script hover:scale-105 inline-block
                  "
                >
                  Explore →
                </a>
              </div>

              {/* IMAGE */}
              <div className="relative w-full lg:w-2/3 aspect-video overflow-hidden rounded-xl shadow-lg">
                <img
                  src={project.img}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center items-center mt-4 md:mt-6 gap-2 md:gap-3">
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
    </section>
  );
}
