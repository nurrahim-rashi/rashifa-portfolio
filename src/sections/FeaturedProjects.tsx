import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
  const extendedProjects = [...projects, ...projects, ...projects];

  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(projects.length);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = scrollbarHideStyle;
    document.head.appendChild(style);

    return () => style.remove();
  }, []);

  // INIT CENTER (tetap biar posisi enak)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      const firstItem = el.children[0] as HTMLElement;
      if (!firstItem) return;

      const itemWidth = firstItem.getBoundingClientRect().width;

      el.scrollLeft = itemWidth * projects.length;
      setCurrentIndex(projects.length);
    });
  }, []);

  // ONLY UPDATE INDEX (NO AUTO LOOP, NO MANIPULATE SCROLL)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const firstItem = el.children[0] as HTMLElement;
      if (!firstItem) return;

      const itemWidth = firstItem.getBoundingClientRect().width;

      const index = Math.round(el.scrollLeft / itemWidth);
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const firstItem = el.children[0] as HTMLElement;
    if (!firstItem) return;

    const itemWidth = firstItem.getBoundingClientRect().width;

    el.scrollTo({
      left: itemWidth * (projects.length + index),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="featured-projects"
      className="bg-[#F4EFE5] py-20 md:py-28 text-[#2A3D63]"
    >
      <div className="mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-serif">Selected Works 🍵</h2>
        </motion.div>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="
            no-scrollbar flex overflow-x-auto scroll-smooth snap-x snap-mandatory
            gap-4 md:gap-14 pb-10
            px-2 md:px-10
          "
        >
          {extendedProjects.map((project, i) => {
            const realIndex = i % projects.length;
            const active = currentIndex % projects.length === realIndex;

            return (
              <div
                key={`${project.title}-${i}`}
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
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center gap-2"
        >
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex % projects.length === i
                  ? "h-2 w-6 bg-[#2A3D63]"
                  : "h-2 w-2 bg-[#2A3D63]/30"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
