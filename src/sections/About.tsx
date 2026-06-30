import { motion } from "framer-motion";
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

  const stacks = [
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

  return (
    <section
      id="about"
      className="py-28 px-4 bg-white text-gray-800 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgrounddd})` }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* EXPERIENCE + EDUCATION SIDE BY SIDE */}
        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
          {/* EXPERIENCE */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-3xl text-[#2A3D63] font-serif font-semibold mb-6 text-left"
            >
              Experience 💼
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-4">
              {[
                {
                  role: "Quality Assurance Engineer",
                  company: "Rove Card, Inc.",
                  period: "2026 - Present",
                },
                {
                  role: "Quality Assurance",
                  company: "SMP (Technology)",
                  period: "2024 - 2026",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="border border-[#2A3D63]/20 rounded-xl p-5 bg-white/40 backdrop-blur-md hover:scale-[1.01] transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-[#2A3D63]">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-neutral-600">{exp.company}</p>
                    </div>

                    <span className="text-xs text-neutral-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* EDUCATION */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-3xl text-[#2A3D63] font-serif font-semibold mb-6 text-left"
            >
              Education 🎓
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-4">
              {[
                {
                  school: "Bandung Institute of Technology",
                  org: "Bachelor of Arts (B.A.)",
                  period: "2018 - 2022",
                },
                {
                  school: "Purwadhika Technology School",
                  org: "Non-Degree, Software Development",
                  period: "2026",
                },
                {
                  school: " Apple Developer Academy Indonesia",
                  org: "Non-Degree, iOS Development",
                  period: "2024",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="border border-[#2A3D63]/20 rounded-xl p-5 bg-white/40 backdrop-blur-md hover:scale-[1.01] transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-[#2A3D63]">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-neutral-600">{edu.org}</p>
                    </div>

                    <span className="text-xs text-neutral-500 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CERTIFICATES */}
        <div className="max-w-4xl mx-auto mt-12">
          <motion.h3
            variants={itemVariants}
            className="text-3xl text-[#2A3D63] font-serif font-semibold mb-6 text-left"
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
              link=""
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

        {/* STACKS */}
        <div className="max-w-4xl mx-auto mt-12">
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-serif text-[#2A3D63] font-bold mb-6"
          >
            Stacks ⚡
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {stacks.map((group, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border border-[#2A3D63]/20 rounded-xl p-5 bg-white/40 backdrop-blur-md"
              >
                <h4 className="text-sm uppercase tracking-widest text-[#2A3D63] mb-4 opacity-70">
                  {group.title}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A3D63]/20 text-[#2A3D63] text-sm hover:scale-105 transition"
                    >
                      {item.icon}
                      {item.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
