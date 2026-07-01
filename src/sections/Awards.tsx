import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CertificateCard from "../components/CertificateCard";
import { certificates } from "../data/certificates";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Awards() {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // BREAKPOINT LOGIC (FIXED)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isPortrait = height > width;
      const isTabletPortrait = isPortrait && width >= 700 && width <= 900;

      if (width < 700) {
        setVisibleCount(1); // MOBILE
      } else if (isTabletPortrait) {
        setVisibleCount(2); // IPAD MINI / AIR PORTRAIT
      } else {
        setVisibleCount(3); // LANDSCAPE / PRO / DESKTOP
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedCertificates = showMore
    ? certificates
    : certificates.slice(0, visibleCount);

  const hasMore = certificates.length > visibleCount;

  return (
    <section id="awards" className="section-awards relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-6xl px-8 py-28"
      >
        {/* TITLE */}
        <motion.h2
          variants={cardVariants}
          className="font-display mt-4 mb-10 leading-[1.05] text-[#2A3D63] text-center text-3xl md:text-6xl"
        >
          Awards & Certificates 📜
        </motion.h2>

        {/* GRID */}
        <motion.ul
          layout
          variants={containerVariants}
          role="list"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {displayedCertificates.map((item) => (
              <motion.li
                key={item.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.96,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <CertificateCard
                      item={item}
                      className="h-full rounded-lg"
                    />
                  </a>
                ) : (
                  <CertificateCard item={item} className="h-full rounded-lg" />
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* BUTTON (UNCHANGED STYLE) */}
        {hasMore && (
          <div className="mt-14 flex justify-center font-serif">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 text-xl text-[#2A3D63] border border-[#2A3D63] rounded-full transition hover:bg-white hover:ring-2 hover:ring-white hover:border-[#2A3D63] hover:text-[#2A3D63] flex items-center gap-2 hover:scale-105"
            >
              {showMore ? "See Less" : "See More"}
              <span className="inline-block transition-transform">
                {showMore ? "↑" : "↓"}
              </span>
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
