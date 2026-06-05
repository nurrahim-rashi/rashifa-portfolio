import "preline";
import backgroundd from "./image/bg.png";
import backgrounddd from "./image/bg2.png";
import backgroundddd from "./image/bg3.png";
import backgrounddddd from "./image/bg4.png";
import project1 from "./image/project1.jpeg";
import project2 from "./image/project2.jpeg";
import project3 from "./image/project3.png";

import {
  FaReact,
  FaLaravel,
  FaFigma,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaDatabase,
  FaPhp,
  FaUniversalAccess,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCypress,
  SiPostman,
  SiBlender,
  SiWordpress,
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiWebflow,
  SiPosthog,
  SiPhp,
  SiMongodb,
} from "react-icons/si";
import { useRef, useState, useEffect } from "react";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // ✅ pindahin ke sini
  const scrollRef = useRef(null);

  useEffect(() => {
    import("preline");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current?.scrollLeft || 0;
      const width = scrollRef.current?.offsetWidth || 1;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    };

    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Navbar */}
      <header className="sticky top-0 z-50 top-0 z-50 shadow-sm bg-white">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
          <a
            href="#"
            className="text-xl font-bold text-[#2A3D63] font-script script hover:text-neutral-900"
          >
            Rashifa N
          </a>
          <div className="hidden md:flex gap-6">
            <a
              href="#featured-projects"
              className="text-[#2A3D63] font-boldrussian hover:text-neutral-900 hover:underline transition"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-[#2A3D63] font-boldrussian hover:text-neutral-900 hover:underline transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#2A3D63] font-boldrussian hover:text-neutral-900 hover:underline transition"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              data-hs-overlay="#mobileMenu"
              className="text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ✅ Main */}
      <main className="bg-white text-neutral-900 transition-colors duration-300 font-sans">
        {/* ✅ Hero Section */}
        <section
          id="hero"
          className="py-36 px-4 text-neutral-800 bg-cover bg-center bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundd})` }}
        >
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl text-[#2A3D63] md:text-8xl font-bold mb-4 leading-tight font-script">
                Rashifa Nurrahim
              </h1>
              <h3 className="text-2xl mb-3 font-boldrussian text-left text-neutral-600">
                Quality Assurance Engineer & Product Designer
              </h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="text-xl px-6 py-3 bg-[#2A3D63] text-white rounded-full transition hover:ring-2 hover:ring-white hover:bg-white hover:text-[#2A3D63] hover:border-[#2A3D63] font-script hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="text-xl px-6 py-3 text-[#2A3D63] rounded-full border border-[#2A3D63] transition hover:ring-2 hover:ring-white hover:bg-white hover:text-[#2A3D63] hover:border-[#2A3D63] font-script hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-right md:justify-end gap-4 mt-6 md:mt-0 text-6xl text-[#2A3D63]">
              <FaReact title="React" />
              <SiPhp title="Php" />
              <FaLaravel title="Laravel" />
              <FaPython title="Python" />
              <SiCypress title="Cypress" />
              <SiWordpress title="Wordpress" />
              <FaFigma title="Figma" />
              <SiWebflow title="Webflow" />
            </div>
          </div>
        </section>

        {/* ✅ Featured Projects Section */}
        <section
          id="featured-projects"
          className="pt-24 pb-36 bg-[#F4EFE5] text-[#2A3D63] overflow-hidden"
        >
          <div className="min-h-[300px] max-w-7xl mx-auto px-4">
            {/* 🔁 Carousel Area */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-10 pb-10 scrollbar-hidden"
            >
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="min-w-full snap-start flex-shrink-0 flex flex-col md:flex-row gap-12 items-center justify-between"
                >
                  {/* Left Side - Text & Stack */}
                  <div className="w-full md:w-1/3">
                    <h3 className="text-3xl md:text-5xl tracking-[-1px] font-bold font-boldrussian mb-6">
                      {i === 0
                        ? "Accessibility Design Challenge 2025"
                        : i === 1
                          ? "Booksy"
                          : "DetakKita"}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-start gap-2 md:gap-3 mb-6 w-full max-w-xs sm:max-w-full">
                      {(i === 0
                        ? [
                            [<FaFigma key="figma" />, "Figma"],
                            [<FaHtml5 key="html" />, "HTML"],
                          ]
                        : i === 1
                          ? [
                              [<FaLaravel key="l" />, "Laravel"],
                              [<FaPhp key="p" />, "PHP"],
                              [<FaDatabase key="db" />, "MySQL"],
                            ]
                          : [[<FaFigma key="figma" />, "Figma"]]
                      ).map(([icon, label], idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 border border-[#2A3D63] rounded-full px-4 py-2 text-sm md:text-base"
                        >
                          {icon}
                          {label}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#"
                      className="text-xl px-6 py-3 bg-[#2A3D63] text-white rounded-full transition hover:ring-2 hover:ring-white hover:bg-white hover:text-[#2A3D63] hover:border-[#2A3D63] font-script hover:scale-105"
                    >
                      Explore →
                    </a>
                  </div>
                  {/* Right Side - Image Placeholder */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={i === 0 ? project1 : i === 1 ? project2 : project3}
                      alt="Project Image"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>{" "}
                </div>
              ))}
            </div>

            {/* ✅ Carousel Dots */}
            <div className="flex justify-center items-center mt-4 gap-3 w-full">
              {[0, 1, 2].map((dotIdx) => {
                const isActive = currentIndex === dotIdx;
                return (
                  <button
                    key={dotIdx}
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? "w-5 h-5 bg-[#2A3D63] scale-110"
                        : "w-3 h-3 border border-[#2A3D63] bg-transparent"
                    }`}
                    onClick={() => {
                      const scroll = scrollRef.current;
                      if (scroll) {
                        scroll.scrollTo({
                          left: dotIdx * scroll.offsetWidth,
                          behavior: "smooth",
                        });
                      }
                    }}
                    aria-label={`Go to project ${dotIdx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ✅ Projects Section */}
        <section
          id="projects"
          className="py-20 text-white justify-center bg-[#2A3D63] px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundddd})` }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-script font-bold mb-10 inline-block">
              Other Projects✨
            </h2>

            {/* GRID WRAPPER */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MAIN PROJECTS */}
              <ProjectCard
                title="Netflix Clone"
                desc="A Netflix-style streaming web app built using the MERN stack with user auth and dynamic content."
                tech={[
                  <SiMongodb />,
                  "MongoDB",
                  <SiExpress />,
                  "Express",
                  <FaReact />,
                  "React",
                  <FaNodeJs />,
                  "Node",
                ]}
              />

              <ProjectCard
                title="Visaku (Apple Developer Academy Project)"
                desc="Design prototype using Figma, Rive, and Rotato."
                tech={[<FaFigma />, "Figma"]}
              />

              <ProjectCard
                title="Green Digital Certificate Capstone Project"
                desc="Sustainability-focused project in the digital space with INCO Academy."
              />

              {/* SHOW MORE PROJECTS */}
              {showMore && (
                <>
                  <ProjectCard
                    title="Pixelkind"
                    desc="Custom WordPress site with Elementor and learned to customize themes with PHP & CSS."
                    tech={[
                      <SiWordpress />,
                      "WordPress",
                      <FaPhp />,
                      "PHP",
                      <FaCss3Alt />,
                      "CSS",
                    ]}
                  />

                  <ProjectCard
                    title="Curcool"
                    desc="Mobile app & web app project, designed with Figma and automated the testing using Katalon Studio."
                    tech={[<FaFigma />, "Figma", "Katalon Studio"]}
                  />
                </>
              )}
            </div>

            {/* BUTTON */}
            <div className="flex justify-center font-script mt-12 text-xl">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-3 text-xl text-white font-script border border-neutral-400 rounded-full transition hover:bg-white hover:ring-2 hover:ring-white hover:border-neutral-800 hover:text-neutral-800 flex items-center gap-2"
              >
                {showMore ? "See Less" : "See More"}
                <span className="inline-block transition-transform">
                  {showMore ? "↑" : "↓"}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ✅ About Me Section */}
        <section
          id="about"
          className="py-28 px-4 bg-white text-gray-800 bg-cover bg-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgrounddd})` }}
        >
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl text-[#2A3D63] font-script font-bold mb-6">
                About Me
              </h2>
              <p className="text-lg leading-relaxed text-left text-neutral-600">
                Hey! I’m Rashifa — an Indonesia-based tech generalist 👩‍💻
                <br />
                With a background in UI/UX and software testing, I love crafting
                thoughtful digital experiences that work beautifully and
                flawlessly 💫
                <br />
                <br />
              </p>
            </div>
          </div>

          {/* ✅ Certificate Section inside About */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl text-[#2A3D63] font-script font-semibold mb-6 text-left">
              Certificates 📜
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <CertificateCard
                title="Google UX Design Professional Certificate"
                org="Coursera • Google"
                year="2023"
                link="https://www.coursera.org/account/accomplishments/certificate/your-id"
              />
              <CertificateCard
                title="Katalon Studio Automation Bootcamp"
                org="AfterOffice Academy"
                year="2025"
                link="#"
              />
              <CertificateCard
                title="Green Digital Certificate"
                org="INCO Academy"
                year="2025"
                link="#"
              />
            </div>
          </div>
        </section>

        {/* ✅ Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 bg-[#F4EFE5] text-center bg-cover"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-script font-bold mb-6 text-[#2A3D63]">
              Let’s Connect!
            </h2>
            <p className="mb-6 text-neutral-600">
              I’m open to collaboration, freelance, or just chatting over coffee
              ☕️
            </p>
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              {[
                {
                  href: "https://github.com/nurrahim-rashi",
                  icon: "fab fa-github",
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/rashifa-nurrahim",
                  icon: "fab fa-linkedin",
                  label: "LinkedIn",
                },
                {
                  href: "https://medium.com/@rashifa.nurrahim",
                  icon: "fab fa-medium",
                  label: "Medium",
                },
                {
                  href: "mailto:rashifa.nurrahim@gmail.com",
                  icon: "fas fa-envelope",
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center border rounded-full hover:scale-110"
                  aria-label={label}
                >
                  <i
                    className={`${icon} text-xl text-[#2A3D63] transition-colors duration-700`}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Buttons */}
      <a
        href="#top"
        className="fixed bottom-20 right-6 z-50 bg-white border border-[#2A3D63] shadow p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#2A3D63]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
      <>
        <ScrollDownButton />
      </>

      {/* ✅ Mobile Menu */}
      <div
        id="mobileMenu"
        className="hs-overlay hs-overlay-open:translate-x-0 fixed top-0 left-0 transition-all duration-300 transform -translate-x-full w-72 h-full bg-white z-[80] p-4 overflow-y-auto hidden"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-[#4B164C]">Menu</h3>
          <button type="button" className="hs-overlay-close text-gray-600">
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <a href="#projects" className="hover:text-[#4B164C] transition">
            Projects
          </a>
          <a href="#about" className="hover:text-[#4B164C] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#4B164C] transition">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <div className="group rounded-xl border p-6 border-neutral-400 transition hover:ring-2 hover:ring-white hover:bg-white h-full flex flex-col justify-between hover:border-[#2A3D63]">
      <div>
        <h3 className="text-xl font-boldrussian font-semibold mb-2 group-hover:text-[#2A3D63]">
          {title}
        </h3>
        <p className="text-sm text-white mb-4 group-hover:text-[#2A3D63]">
          {desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm mt-auto justify-center text-center">
        {Array.isArray(tech) &&
          tech.map((item, i) =>
            i % 2 === 0 ? (
              <span
                key={i}
                className="flex items-center gap-1 border px-3 py-1 rounded-full border-neutral-400 group-hover:text-[#2A3D63] group-hover:border-[#2A3D63]"
              >
                {item} {tech[i + 1]}
              </span>
            ) : null,
          )}
      </div>
    </div>
  );
}

function CertificateCard({ title, org, year, link }) {
  return (
    <div className="group border border-[#2A3D63] p-5 rounded-xl transition duration-300 hover:ring-2 hover:ring-white hover:bg-white hover:border-neutral-800">
      <h3 className="text-lg text-[#2A3D63] font-boldrussian font-semibold mb-1 group-hover:text-[#2A3D63]">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 group-hover:text-[#2A3D63]">
        {org} • {year}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-md text-[#2A3D63] font-script group-hover:text-[#2A3D63] hover:underline"
        >
          View Certificate →
        </a>
      )}
    </div>
  );
}

const sections = ["hero", "featured-projects", "projects", "about", "contact"];

function ScrollDownButton() {
  const scrollToNextSection = () => {
    const current = window.scrollY;
    const next = sections.find((id) => {
      const el = document.getElementById(id);
      return el && el.offsetTop > current + 10;
    });

    if (next) {
      document.getElementById(next).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-6 right-6 z-50 bg-white border border-[#2A3D63] shadow p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Scroll down 1 section"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-[#2A3D63]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export default App;
