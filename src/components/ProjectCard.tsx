import { SiMongodb, SiExpress, SiWordpress } from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaCss3Alt,
  FaFigma,
  FaLaravel,
  FaSwift,
} from "react-icons/fa";

const icons = {
  MongoDB: SiMongodb,
  Express: SiExpress,
  React: FaReact,
  Node: FaNodeJs,
  WordPress: SiWordpress,
  PHP: FaPhp,
  Laravel: FaLaravel,
  Swift: FaSwift,

  CSS: FaCss3Alt,
  Figma: FaFigma,
};

type ProjectCardProps = {
  title: string;
  desc: string;
  tech?: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  desc,
  tech,
  link,
}: ProjectCardProps) {
  const CardContent = (
    <div className="group rounded-xl border border-neutral-400 p-6 transition hover:border-[#2A3D63] hover:bg-white hover:ring-2 hover:ring-white h-full flex flex-col justify-between cursor-pointer">
      <div>
        <h3 className="mb-2 text-xl font-boldrussian font-semibold group-hover:text-[#2A3D63]">
          {title}
        </h3>

        <p className="mb-4 text-sm text-white group-hover:text-[#2A3D63]">
          {desc}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap justify-center gap-3 text-sm">
        {tech?.map((name) => {
          const Icon = icons[name as keyof typeof icons];

          return (
            <span
              key={name}
              className="flex items-center gap-1 rounded-full border border-neutral-400 px-3 py-1 group-hover:border-[#2A3D63] group-hover:text-[#2A3D63]"
            >
              {Icon && <Icon size={14} />}
              <span>{name}</span>
            </span>
          );
        })}
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}
