import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Education = {
  id: string;
  school: string;
  program: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
};

const EDUCATION: Education[] = [
  {
    id: "e1",
    school: "Bandung Institute of Technology",
    program: "Bachelor of Art (B.A)",
    period: "2018 - 2022",
    location: "Bandung, Indonesia",
    description:
      'Thesis entitled "Interactive Ceramic Design Adapting Kawung Batik Motif to Intensify Social Interaction". During my academic journey, I was exposed to sustainable and inclusive design principles, which now shapes how I craft human-centered digital experiences.',
    tags: ["Design Thinking", "Inclusive Design", "Sustainability Studies"],
  },
  {
    id: "e2",
    school: "Purwadhika Digital Technology School",
    program: "Software Development",
    period: "2026",
    location: "Indonesia (remote)",
    description:
      "Intensive software development program focused on real-world full-stack workflows, from frontend interfaces to backend APIs. Built multiple end-to-end projects while strengthening problem solving, clean code habits, and system thinking for production-ready development.",
    tags: ["Full-Stack Development"],
  },
  {
    id: "e3",
    school: " Apple Developer Academy Indonesia",
    program: "Apple Platform Development",
    period: "2024",
    location: "Jakarta Metropolitan Area, Indonesia",
    description:
      "Collaborative program focused on Apple ecosystem development and Human Interface Guidelines (HIG). Worked in team-based projects exploring UX thinking, prototyping, and building meaningful digital experiences with strong emphasis on empathy and iteration.",
    tags: [
      "Apple Platform",
      "Human Interface Guidelines",
      "Wearable Technology Interface Design",
      "Inclusive Design",
      "Product Research",
    ],
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

export function EducationBlock() {
  const [selected, setSelected] = useState(EDUCATION[0]);

  return (
    <div className="grid md:grid-cols-[1fr_1fr] gap-10">
      {/* LEFT: TIMELINE + CARDS (SAME AS EXPERIENCE) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative border-l border-[#2A3D63]/25 pl-6 space-y-6"
      >
        {EDUCATION.map((edu, i) => {
          const isActive = selected.id === edu.id;

          return (
            <motion.button
              key={edu.id}
              variants={itemVariants}
              onClick={() => setSelected(edu)}
              className="relative w-full text-left transition"
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
                      {edu.school}
                    </h4>
                    <p className="text-sm text-neutral-600">{edu.program}</p>
                  </div>

                  <span className="text-xs text-neutral-500">{edu.period}</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* RIGHT: DETAIL CARD (IDENTICAL EXPERIENCE STYLE) */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="border border-[#2A3D63]/20 rounded-2xl p-8 bg-white/40 backdrop-blur-md"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Education Detail
            </p>

            <h3 className="text-2xl font-semibold text-[#2A3D63]">
              {selected.school}
            </h3>

            <p className="text-sm text-neutral-600 mt-1">
              {selected.program} · {selected.location} · {selected.period}
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
