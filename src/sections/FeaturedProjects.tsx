import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { featuredProjects } from "../data/featuredProjects";

const scrollbarHideStyle = `
.no-scrollbar::-webkit-scrollbar{
  display:none;
}
.no-scrollbar{
  -ms-overflow-style:none;
  scrollbar-width:none;
}
`;

export default function FeaturedProjects() {
  const projects = featuredProjects;

  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [search, setSearch] = useState("");

  // FILTER LOGIC
  const filteredProjects = projects.filter((project) => {
    const keyword = search.toLowerCase();

    const inTitle = project.title.toLowerCase().includes(keyword);

    const inTech = project.tech?.some((t: any) =>
      (t.label || "").toLowerCase().includes(keyword),
    );

    return inTitle || inTech;
  });

  const extendedProjects =
    filteredProjects.length > 0
      ? [...filteredProjects, ...filteredProjects, ...filteredProjects]
      : [];

  // STYLE INJECTION
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = scrollbarHideStyle;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  // RESET CENTER ON FILTER CHANGE
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || filteredProjects.length === 0) return;

    requestAnimationFrame(() => {
      const firstItem = el.children[0] as HTMLElement;
      if (!firstItem) return;

      const itemWidth = firstItem.getBoundingClientRect().width;
      el.scrollLeft = itemWidth * filteredProjects.length;
      setCurrentIndex(filteredProjects.length);
    });
  }, [search]);

  // SCROLL TRACKING (SAFE VERSION)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const firstItem = el.children[0] as HTMLElement;
      if (!firstItem || filteredProjects.length === 0) return;

      const itemWidth = firstItem.getBoundingClientRect().width;

      const index = Math.round(el.scrollLeft / itemWidth);
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => el.removeEventListener("scroll", handleScroll);
  }, [filteredProjects.length]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const firstItem = el.children[0] as HTMLElement;
    if (!firstItem) return;

    const itemWidth = firstItem.getBoundingClientRect().width;

    el.scrollTo({
      left: itemWidth * (filteredProjects.length + index),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F4EFE5] py-20 md:py-28 text-[#2A3D63]">
      <div className="mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-6xl font-serif">Selected Works 🍵</h2>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 px-12"
        >
          <div className="relative w-full max-w-md">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search project or tech stack..."
              className="
                w-full px-4 py-3 rounded-full
                border border-[#2A3D63]/30
                focus:outline-none focus:ring-2 focus:ring-[#2A3D63]
                bg-white shadow-sm
              "
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  text-sm bg-[#2A3D63] text-white
                  w-7 h-7 rounded-full
                  flex items-center justify-center
                  hover:scale-105 transition
                "
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* CAROUSEL */}
        {filteredProjects.length === 0 ? (
          <p className="text-center opacity-60">No project found 😭</p>
        ) : (
          <div
            ref={scrollRef}
            className="
              no-scrollbar flex overflow-x-auto scroll-smooth snap-x snap-mandatory
              gap-4 md:gap-14 pb-10 px-2 md:px-10
            "
          >
            <AnimatePresence mode="popLayout">
              {extendedProjects.map((project, i) => {
                const realIndex = i % filteredProjects.length;
                const active =
                  currentIndex % filteredProjects.length === realIndex;

                return (
                  <motion.div
                    key={`${project.title}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    className="
                      snap-center flex justify-center
                      min-w-full md:min-w-[70%] lg:min-w-[33%]
                    "
                  >
                    <FeaturedProjectCard
                      project={project}
                      active={active}
                      index={i}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* DOTS */}
        {filteredProjects.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center gap-2"
          >
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex % filteredProjects.length === i
                    ? "h-2 w-6 bg-[#2A3D63]"
                    : "h-2 w-2 bg-[#2A3D63]/30"
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
