import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import backgrounddd from "../images/bg2.png";
import CertificateCard from "../components/CertificateCard";

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

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      title: "Design & Creative Tools",
      items: [
        { icon: <FaFigma />, label: "Figma" },
        { label: "Webflow" },
        { label: "Rive" },
        { label: "Adobe Photoshop" },
        { label: "Adobe Illustrator" },
      ],
    },
    {
      title: "Version Control",
      items: [{ icon: <FaGithub />, label: "GitHub" }],
    },
  ];

  // FILTER STATE (FIX)
  const filters: string[] = ["All", ...stacks.map((s) => s.title)];
  const [filter, setFilter] = useState<string>("All");

  const shown = useMemo<StackGroup[]>(
    (() => {
      if (filter === "All") return stacks;
      return stacks.filter((g) => g.title === filter);
    }) as any,
    [filter],
  );

  return (
    <section
      id="about"
      className="py-28 px-4 bg-white overflow-y-auto no-scrollbar text-gray-800 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgrounddd})` }}
    >
      <div className="max-h-[85vh] pr-2">
        <style>
          {`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}
        </style>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* NAME */}
          <motion.div variants={itemVariants}>
            <h1 className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-5xl md:text-7xl font-serif text-[#2A3D63] leading-tight">
              About Me
            </h1>
          </motion.div>

          {/* EXPERIENCE + EDUCATION */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-3xl text-[#2A3D63] font-serif font-semibold mb-6"
              >
                Experience 💼
              </motion.h3>

              <motion.div variants={containerVariants} className="space-y-4">
                {[
                  {
                    role: "Quality Assurance Engineer",
                    company: "Rove Card, Inc. (YC24 FinTech Startup)",
                    period: "2026 - Present",
                  },
                  {
                    role: "Quality Assurance",
                    company: "SMP (Technology) (IT Solutions)",
                    period: "2024 - 2026",
                  },
                  {
                    role: "Product Designer",
                    company: "Emteka (EdTech Startup)",
                    period: "2025",
                  },
                ].map((exp, i: number) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="border border-[#2A3D63]/20 rounded-xl p-5 bg-white/40 backdrop-blur-md"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold text-[#2A3D63]">
                          {exp.company}
                        </h4>
                        <p className="text-sm text-neutral-600">{exp.role}</p>
                      </div>
                      <span className="text-xs text-neutral-500">
                        {exp.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.h3
                variants={itemVariants}
                className="text-3xl text-[#2A3D63] font-serif font-semibold mb-6"
              >
                Education 🎓
              </motion.h3>

              <motion.div variants={containerVariants} className="space-y-4">
                {[
                  {
                    school: "Bandung Institute of Technology",
                    org: "Bachelor",
                    period: "2018 - 2022",
                  },
                  {
                    school: "Purwadhika Digital Technology School",
                    org: "Software Development",
                    period: "2026",
                  },
                  {
                    school: " Apple Developer Academy Indonesia",
                    org: "iOS Development",
                    period: "2024",
                  },
                ].map((edu, i: number) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="border border-[#2A3D63]/20 rounded-xl p-5 bg-white/40 backdrop-blur-md"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold text-[#2A3D63]">
                          {edu.school}
                        </h4>
                        <p className="text-sm text-neutral-600">{edu.org}</p>
                      </div>
                      <span className="text-xs text-neutral-500">
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* STACKS FILTER FIXED */}
          <div className="max-w-4xl mx-auto mt-12">
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-serif text-[#2A3D63] font-bold mb-6"
            >
              Stacks ⚡
            </motion.h3>

            {/* FILTER */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex flex-wrap gap-2"
            >
              {filters.map((f: string) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-widest transition
                    ${filter === f ? "border-[#2A3D63] text-[#2A3D63]" : "border-gray-300 text-gray-500"}`}
                >
                  {f}
                </button>
              ))}
            </motion.div>

            {/* STACKS */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {shown.map((group: StackGroup) => (
                  <motion.div
                    key={group.title}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border border-[#2A3D63]/20 rounded-xl p-5 bg-white/40 backdrop-blur-md"
                  >
                    <h4 className="text-sm uppercase tracking-widest text-[#2A3D63] mb-4 opacity-70">
                      {group.title}
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item: StackItem, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A3D63]/20 text-sm"
                        >
                          {item.icon}
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* CERTIFICATES unchanged */}
          <div className="max-w-4xl mx-auto mt-12 py-12">
            <motion.h3
              variants={itemVariants}
              className="text-3xl text-[#2A3D63] font-serif font-semibold mb-6"
            >
              Certificates 📜
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              <CertificateCard
                title="Google UX Design Professional Certificate"
                org="Coursera • Google"
                year="2023"
                link="https://www.credly.com/badges/2a9dfa63-b8a1-43ec-81bd-8986600acbaa"
              />
              <CertificateCard
                title="Katalon Studio Automation Bootcamp"
                org="AfterOffice Academy"
                year="2025"
              />
              <CertificateCard
                title="Green Digital Certificate"
                org="INCO Academy"
                year="2025"
                link="https://learning.inco-group.co/pluginfile.php/1/tool_certificate/issues/1749050153/0481144845RN.pdf"
              />
              <CertificateCard
                title="McKinsey.org Forward Program"
                org="McKinsey & Company"
                year="2025"
                link="https://www.credly.com/badges/d54c9a4a-0afd-451b-a41a-a611a142a82b/linked_in_profile"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
