import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type Tech = {
  label: string;
  icon: IconType;
};

export type FeaturedProject = {
  title: string;
  img: string;
  role: string;
  link: string;
  tech: Tech[];
};

type Props = {
  project: FeaturedProject;
  active: boolean;
  index: number;
};

export default function FeaturedProjectCard({ project, active, index }: Props) {
  return (
    <motion.div
      className="min-w-[33.333%] snap-start flex justify-center"
      animate={{
        scale: active ? 1 : 0.92,
        rotate: active ? 0 : index % 2 === 0 ? -2 : 2,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-[280px] md:w-[520px]">
        {/* Shadow */}
        <div className="absolute inset-0 translate-y-6 scale-95 bg-black/10 blur-2xl" />

        {/* Card */}
        <div className="relative bg-[#fbfaf7] shadow-xl">
          {/* Stamp Border */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="stamp-dots"
                  width="14"
                  height="14"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="7" cy="7" r="2.2" fill="#d6cbb6" />
                </pattern>
              </defs>

              <rect
                width="100%"
                height="100%"
                fill="none"
                stroke="url(#stamp-dots)"
                strokeWidth="18"
              />
            </svg>
          </div>

          <div className="p-5">
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="mt-5 text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                {project.role}
              </p>

              <h3 className="mt-2 text-2xl font-serif md:text-3xl">
                {project.title}
              </h3>

              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
                {project.tech.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1"
                  >
                    <Icon size={14} />
                    {label}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#2A3D63] px-5 py-2 font-serif text-white transition hover:scale-105 hover:bg-white hover:text-[#2A3D63]"
              >
                Open Stamp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
