import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Quality Assurance Engineer",
    company: "Rove Card, Inc. (YC24 FinTech Startup)",
    location: "New York, United States",
    period: "2026 - Present",
    description:
      "Building calm, reliable testing rituals for fintech systems. Focus on API testing, automation, and release confidence.",
    tags: ["Manual QA", "Automation", "Software Documentation"],
  },
  {
    role: "Quality Assurance",
    company: "SMP (Technology) (IT Solutions)",
    location: "Jakarta Metropolitan Area, Indonesia",
    period: "2024 - 2026",
    description:
      "Handled regression cycles, release validation, and bug reporting for enterprise IT systems.",
    tags: ["Manual QA", "Automation", "Software Documentation"],
  },
  {
    role: "Product Designer",
    company: "Emteka (EdTech Startup)",
    location: "Jakarta Metropolitan Area, Indonesia",
    period: "2025",
    description:
      "Designed learning flows that reduce friction and improve student engagement across edtech products.",
    tags: ["Design Systems", "Research"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ExperienceBlock() {
  const [selected, setSelected] = useState(EXPERIENCES[0]);

  return (
    <div className="grid md:grid-cols-[1fr_1fr] gap-10">
      {/* LEFT: TIMELINE + CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative border-l border-[#2A3D63]/25 pl-6 space-y-6"
      >
        {EXPERIENCES.map((exp, i) => {
          const isActive = selected.company === exp.company;

          return (
            <motion.button
              key={i}
              variants={itemVariants}
              onClick={() => setSelected(exp)}
              className={`relative w-full text-left group transition`}
            >
              {/* MINI CARD */}
              <div
                className={`rounded-xl p-4 border transition backdrop-blur-md ${
                  isActive
                    ? "border-[#2A3D63]/40 bg-white/50"
                    : "border-[#2A3D63]/10 bg-white/30 hover:bg-white/40"
                }`}
              >
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold text-[#2A3D63]">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-neutral-600">{exp.role}</p>
                  </div>
                  <span className="text-xs text-neutral-500">{exp.period}</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* RIGHT: DETAIL CARD (CLICKABLE CONTENT VIEW) */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.company}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="border border-[#2A3D63]/20 rounded-2xl p-8 bg-white/40 backdrop-blur-md"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Experience Detail
            </p>

            <h3 className="text-2xl font-semibold text-[#2A3D63]">
              {selected.company}
            </h3>

            <p className="text-sm text-neutral-600 mt-1">
              {selected.role} · {selected.location} · {selected.period}
            </p>

            <p className="mt-6 text-neutral-500 leading-relaxed">
              {selected.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-[#2A3D63]/20 text-[#2A3D63]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
