import { useState } from "react";
import { ExperienceBlock } from "../components/ExperienceBlock";
import { EducationBlock } from "../components/EducationBlock";
import { StacksBlock } from "../components/StacksBlock";
import { motion } from "framer-motion";

import backgrounddd from "../images/bg2.png";

type TabId = "experience" | "education" | "stacks";

const TABS: {
  id: TabId;
  label: string;
  room: string;
  hint: string;
}[] = [
  {
    id: "experience",
    label: "Experience",
    room: "Field Journal",
    hint: "recorded like weather.",
  },
  {
    id: "education",
    label: "Education",
    room: "Herbarium",
    hint: "catalogued like leaves.",
  },
  {
    id: "stacks",
    label: "Stacks",
    room: "The Library",
    hint: "shelved like books.",
  },
];

export default function About() {
  const [tab, setTab] = useState<TabId>("experience");
  const current = TABS.find((t) => t.id === tab)!;

  return (
    <section
      id="about"
      className=" px-4 bg-white overflow-y-auto no-scrollbar text-gray-800 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgrounddd})` }}
    >
      <div className="relative z-10 mx-auto max-w-6xl py-28">
        <motion.h2 className="font-display mt-4 mb-10 leading-[1.05] text-[#2A3D63] text-center text-3xl md:text-6xl">
          About Me{" "}
        </motion.h2>

        {/* TABS */}
        <div
          role="tablist"
          className="mb-12 flex flex-wrap gap-2 border-b border-foreground/15"
        >
          {TABS.map((t, i) => {
            const active = tab === t.id;

            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`group relative -mb-px flex items-baseline gap-3 px-5 py-3 transition-colors
                  ${active ? "text-[#2A3D63]" : "text-foreground/50 hover:text-foreground/80"}
                `}
              >
                <span className="text-[10px] tracking-[0.28em] text-muted-foreground">
                  0{i + 1}
                </span>

                <span className="font-display text-2xl md:text-3xl">
                  {t.label}
                </span>

                <span
                  className={`absolute -bottom-px left-0 h-[2px] w-full origin-left transition-transform
                    ${active ? "scale-x-100 bg-accent" : "scale-x-0 bg-foreground/30"}
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* CONTENT */}
        <div key={tab} className="animate-fade-in">
          {tab === "experience" && <ExperienceBlock />}
          {tab === "education" && <EducationBlock />}
          {tab === "stacks" && <StacksBlock />}
        </div>
      </div>
    </section>
  );
}
