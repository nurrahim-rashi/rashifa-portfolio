import backgrounddd from "../images/bg2.png";
import CertificateCard from "../components/CertificateCard";
import { convertToWebp } from "../utils/image";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaPython,
  FaLaravel,
  FaPhp,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiCypress,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiWordpress,
  SiSwift,
} from "react-icons/si";

export default function About() {
  const stacks = [
    {
      title: "Languages",
      items: [
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <FaPython />, label: "Python" },
        { icon: <SiSwift />, label: "Swift" },
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
      {/* Intro */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl text-[#2A3D63] font-serif font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-left text-neutral-600">
            Hey! I’m Rashifa — an Indonesia-based tech generalist 👩‍💻
            <br />
            With a background in UI/UX and software testing, I love building
            thoughtful digital experiences that work beautifully and reliably 💫
          </p>
        </div>
      </div>

      {/* Certificates */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-3xl text-[#2A3D63] font-serif font-semibold mb-6 text-left">
          Certificates 📜
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </div>

      {/* Stacks */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-3xl font-serif text-[#2A3D63] font-bold mb-6">
          Stacks ⚡
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {stacks.map((group, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
