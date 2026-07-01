import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import backgrounddd from "../images/bg2.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaFigma,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiTypescript, SiCypress, SiPostman, SiExpress } from "react-icons/si";

type StackItem = {
  icon?: React.ReactNode;
  label: string;
};

type StackGroup = {
  title: string;
  items: StackItem[];
};

const stacks: StackGroup[] = [
  {
    title: "Languages",
    items: [
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <FaPython />, label: "Python" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: <FaReact />, label: "React" },
      { icon: <FaHtml5 />, label: "HTML" },
      { icon: <FaCss3Alt />, label: "CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express" },
    ],
  },
  {
    title: "QA / Testing",
    items: [
      { label: "Playwright" },
      { icon: <SiCypress />, label: "Cypress" },
      { icon: <SiPostman />, label: "Postman" },
      { label: "Katalon Studio" },
    ],
  },
  {
    title: "Design",
    items: [
      { icon: <FaFigma />, label: "Figma" },
      { label: "Webflow" },
      { label: "Rive" },
      { label: "Photoshop" },
      { label: "Illustrator" },
    ],
  },
  {
    title: "Version Control",
    items: [{ icon: <FaGithub />, label: "GitHub" }],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export function StacksBlock() {
  const filters = ["All", ...stacks.map((s) => s.title)];
  const [filter, setFilter] = useState("All");

  const shown = useMemo(() => {
    if (filter === "All") return stacks;
    return stacks.filter((g) => g.title === filter);
  }, [filter]);

  return (
    <div className="mt-10">
      {/* FILTER */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-md border border-[#2A3D63] transition
              ${
                filter === f
                  ? "border-[#1f2f4a] text-[#2A3D63]"
                  : "border-gray-300 text-[#2A3D63]"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* STACKS */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((group) => (
            <motion.div
              key={group.title}
              layout
              variants={item}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-xl p-5 border border-[#1f2f4a]/20 bg-white/40 backdrop-blur-md"
            >
              <h4 className="text-md text-[#2A3D63] tracking-widest mb-4 ">
                {group.title}
              </h4>

              <div className="flex flex-wrap gap-3">
                {group.items.map((it, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 border border-[#1f2f4a]/20 rounded-full text-sm"
                  >
                    {it.icon}
                    {it.label}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
