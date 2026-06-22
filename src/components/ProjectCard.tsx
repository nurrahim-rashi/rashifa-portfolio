type ProjectCardProps = {
  title: string;
  desc: string;
  tech?: React.ReactNode[];
  link?: string;
};

export default function ProjectCard({
  title,
  desc,
  tech,
  link,
}: ProjectCardProps) {
  const CardContent = (
    <div className="group rounded-xl border p-6 border-neutral-400 transition hover:ring-2 hover:ring-white hover:bg-white h-full flex flex-col justify-between hover:border-[#2A3D63] cursor-pointer">
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

  // Open in a new tab if link is provided

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
