import backgroundd from "../images/bg.png";
// import {
//   FaReact,
//   FaLaravel,
//   FaFigma,
//   FaPython,
//   FaHtml5,
//   FaDatabase,
//   FaPhp,
//   FaNodeJs,
// } from "react-icons/fa";

// import { SiCypress, SiWordpress, SiWebflow } from "react-icons/si";

import { convertToWebp } from "../utils/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-36 px-4 text-neutral-800 bg-cover bg-center bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundd})` }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 items-center">
        <div>
          <h1 className="text-4xl text-[#2A3D63] md:text-8xl mb-4 leading-tight font-serif tracking-wide leading-tight">
            Rashifa Nurrahim
          </h1>

          <h3 className="text-2xl mb-3 font-boldrussian text-left text-neutral-600">
            Quality Assurance Engineer & Product Designer
          </h3>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="text-xl px-6 py-3 bg-[#2A3D63] text-white rounded-full transition hover:ring-2 hover:ring-white hover:bg-white hover:text-[#2A3D63] hover:border-[#2A3D63] font-serif hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="text-xl px-6 py-3 text-[#2A3D63] rounded-full border border-[#2A3D63] transition hover:ring-2 hover:ring-white hover:bg-white hover:text-[#2A3D63] hover:border-[#2A3D63] font-serif hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-right md:justify-end gap-4 mt-6 md:mt-0 text-6xl text-[#2A3D63]">
          <FaReact title="React" />
          <FaPhp title="Php" />
          <FaLaravel title="Laravel" />
          <FaPython title="Python" />
          <SiCypress title="Cypress" />
          <SiWordpress title="Wordpress" />
          <FaFigma title="Figma" />
          <SiWebflow title="Webflow" />
        </div> */}
      </div>
    </section>
  );
}
